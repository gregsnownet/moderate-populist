import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { registerSchema, validateInput, formatZodErrors } from '@/lib/validation/schemas';
import { hashPassword } from '@/lib/auth/password';
import { createUser, getUserByEmail, getUserByUsername, setVerificationToken } from '@/lib/db/users';
import { sendEmail } from '@/lib/email/ses';
import { getVerificationEmailHtml, getVerificationEmailText } from '@/lib/email/templates/verification';
import type { User } from '@/types/user';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateInput(registerSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: formatZodErrors(validation.errors) },
        { status: 400 }
      );
    }

    const { email, username, password, country, state } = validation.data;

    // Check if email already exists
    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Check if username already exists
    const existingUsername = await getUserByUsername(username);
    if (existingUsername) {
      return NextResponse.json(
        { error: 'This username is already taken' },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Generate user ID and verification token
    const userId = uuidv4();
    const verificationToken = uuidv4();
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24 hours

    // Create user
    const now = new Date().toISOString();
    const user: User = {
      userId,
      email: email.toLowerCase(),
      emailVerified: false,
      username: username.toLowerCase(),
      passwordHash,
      country,
      state,
      role: 'user',
      banned: false,
      createdAt: now,
      updatedAt: now,
      verificationToken,
      verificationTokenExpiry,
      sessionVersion: 1,
    };

    await createUser(user);

    // Send verification email
    let emailSent = false;
    let emailError: string | null = null;
    try {
      await sendEmail({
        to: email,
        subject: 'Verify Your Email - Moderate Populist',
        htmlBody: getVerificationEmailHtml(username, verificationToken),
        textBody: getVerificationEmailText(username, verificationToken),
      });
      emailSent = true;
    } catch (err) {
      console.error('Failed to send verification email:', err);
      emailError = err instanceof Error ? err.message : 'Unknown email error';
      // Don't fail registration if email fails - user can request resend
    }

    return NextResponse.json(
      {
        message: emailSent
          ? 'Registration successful. Please check your email to verify your account.'
          : 'Registration successful, but we could not send the verification email. Please contact support.',
        userId,
        emailSent,
        ...(emailError && { emailError }),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    // Return more specific error message for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `An error occurred during registration: ${errorMessage}` },
      { status: 500 }
    );
  }
}
