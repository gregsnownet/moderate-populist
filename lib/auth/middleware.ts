import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, getRefreshTokenFromCookies, verifyRefreshToken, generateTokens, setAuthCookies } from './jwt';
import { getUserById } from '@/lib/db/users';
import type { JWTPayload } from '@/types/user';

export interface AuthenticatedRequest extends NextRequest {
  user: JWTPayload;
}

// Middleware to require authentication
export async function requireAuth(
  request: NextRequest
): Promise<{ user: JWTPayload } | NextResponse> {
  const user = await getCurrentUser();

  if (user) {
    // Verify session version is still valid
    const dbUser = await getUserById(user.sub);
    if (dbUser && dbUser.sessionVersion === user.sessionVersion && !dbUser.banned) {
      return { user };
    }
  }

  // Try refresh token
  const refreshToken = await getRefreshTokenFromCookies();
  if (refreshToken) {
    const payload = verifyRefreshToken(refreshToken);
    if (payload) {
      const dbUser = await getUserById(payload.sub);
      if (dbUser && dbUser.sessionVersion === payload.sessionVersion && !dbUser.banned) {
        // Generate new tokens
        const tokens = generateTokens(dbUser);
        await setAuthCookies(tokens);

        return {
          user: {
            sub: dbUser.userId,
            email: dbUser.email,
            username: dbUser.username,
            role: dbUser.role,
            emailVerified: dbUser.emailVerified,
            sessionVersion: dbUser.sessionVersion,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 15 * 60,
          },
        };
      }
    }
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

// Middleware to require admin role
export async function requireAdmin(
  request: NextRequest
): Promise<{ user: JWTPayload } | NextResponse> {
  const result = await requireAuth(request);

  if (result instanceof NextResponse) {
    return result;
  }

  if (result.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return result;
}

// Middleware to require verified email
export async function requireVerifiedEmail(
  request: NextRequest
): Promise<{ user: JWTPayload } | NextResponse> {
  const result = await requireAuth(request);

  if (result instanceof NextResponse) {
    return result;
  }

  if (!result.user.emailVerified) {
    return NextResponse.json(
      { error: 'Email verification required' },
      { status: 403 }
    );
  }

  return result;
}

// Optional auth - returns user if logged in, null otherwise
export async function optionalAuth(): Promise<JWTPayload | null> {
  const user = await getCurrentUser();

  if (user) {
    const dbUser = await getUserById(user.sub);
    if (dbUser && dbUser.sessionVersion === user.sessionVersion && !dbUser.banned) {
      return user;
    }
  }

  return null;
}
