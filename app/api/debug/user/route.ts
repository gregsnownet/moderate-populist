import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/lib/db/users';

export async function GET() {
  try {
    const user = await getUserByEmail('themoderate@moderatepopulist.org');

    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    // Return only non-sensitive info for debugging
    return NextResponse.json({
      userId: user.userId,
      email: user.email,
      username: user.username,
      role: user.role,
      emailVerified: user.emailVerified,
      banned: user.banned,
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
