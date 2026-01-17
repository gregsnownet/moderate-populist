import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getUserByEmail, setVerificationToken } from '@/lib/db/users';
import { sendEmail } from '@/lib/email/ses';
import { getVerificationEmailHtml, getVerificationEmailText } from '@/lib/email/templates/verification';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await getUserByEmail(email);

    if (!user) {
      // Don't reveal whether the email exists for security
      return NextResponse.json(
        { message: 'If an account with that email exists, we have sent a verification link.' },
        { status: 200 }
      );
    }

    // Check if already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { error: 'This email address is already verified. You can log in now.' },
        { status: 400 }
      );
    }

    // Generate new verification token
    const verificationToken = uuidv4();
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24 hours

    // Update user with new token
    await setVerificationToken(user.userId, verificationToken, verificationTokenExpiry);

    // Send verification email
    let emailSent = false;
    let emailError: string | null = null;
    try {
      await sendEmail({
        to: email,
        subject: 'Verify Your Email - Moderate Populist',
        htmlBody: getVerificationEmailHtml(user.username, verificationToken),
        textBody: getVerificationEmailText(user.username, verificationToken),
      });
      emailSent = true;
    } catch (err) {
      console.error('Failed to send verification email:', err);
      emailError = err instanceof Error ? err.message : 'Unknown email error';
    }

    if (!emailSent) {
      return NextResponse.json(
        { error: `Failed to send verification email: ${emailError}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Verification email sent. Please check your inbox.',
    });
  } catch (error) {
    console.error('Resend verification error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `An error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
