import { NextRequest, NextResponse } from 'next/server';
import { loginSchema, validateInput, formatZodErrors } from '@/lib/validation/schemas';
import { verifyPassword } from '@/lib/auth/password';
import { generateTokens, setAuthCookies } from '@/lib/auth/jwt';
import { getUserByEmail, toPublicUser } from '@/lib/db/users';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateInput(loginSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: formatZodErrors(validation.errors) },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // Find user by email
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check if user is banned
    if (user.banned) {
      return NextResponse.json(
        { error: 'Your account has been suspended. Please contact support.' },
        { status: 403 }
      );
    }

    // Verify password
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate tokens and set cookies
    const tokens = generateTokens(user);
    await setAuthCookies(tokens);

    return NextResponse.json({
      message: 'Login successful',
      user: toPublicUser(user),
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
