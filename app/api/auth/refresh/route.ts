import { NextRequest, NextResponse } from 'next/server';
import { getRefreshTokenFromCookies, verifyRefreshToken, generateTokens, setAuthCookies } from '@/lib/auth/jwt';
import { getUserById, toPublicUser } from '@/lib/db/users';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = await getRefreshTokenFromCookies();

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'No refresh token' },
        { status: 401 }
      );
    }

    const payload = verifyRefreshToken(refreshToken);

    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid refresh token' },
        { status: 401 }
      );
    }

    const user = await getUserById(payload.sub);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
    }

    // Check session version matches (invalidation check)
    if (user.sessionVersion !== payload.sessionVersion) {
      return NextResponse.json(
        { error: 'Session has been invalidated' },
        { status: 401 }
      );
    }

    // Check if user is banned
    if (user.banned) {
      return NextResponse.json(
        { error: 'Account has been suspended' },
        { status: 403 }
      );
    }

    // Generate new tokens
    const tokens = generateTokens(user);
    await setAuthCookies(tokens);

    return NextResponse.json({
      message: 'Token refreshed',
      user: toPublicUser(user),
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
