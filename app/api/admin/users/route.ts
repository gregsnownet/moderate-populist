import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { listUsers, toPublicUser } from '@/lib/db/users';

// GET - List all users
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '50', 10);
    const nextTokenParam = request.nextUrl.searchParams.get('nextToken');
    const nextToken = nextTokenParam ? JSON.parse(atob(nextTokenParam)) : undefined;

    const { users, nextToken: newNextToken } = await listUsers(limit, nextToken);

    // Include additional admin fields
    const usersWithAdminInfo = users.map(user => ({
      ...toPublicUser(user),
      banned: user.banned,
      updatedAt: user.updatedAt,
      registrationIp: user.registrationIp,
      registrationCountry: user.registrationCountry,
      lastLoginAt: user.lastLoginAt,
      lastLoginIp: user.lastLoginIp,
    }));

    return NextResponse.json({
      users: usersWithAdminInfo,
      nextToken: newNextToken ? btoa(JSON.stringify(newNextToken)) : undefined,
    });
  } catch (error) {
    console.error('List users error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
