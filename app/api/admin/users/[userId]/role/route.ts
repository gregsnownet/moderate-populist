import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { getUserById, setUserRole } from '@/lib/db/users';
import type { UserRole } from '@/types/user';

interface RouteParams {
  params: Promise<{ userId: string }>;
}

// POST - Update user role
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { userId } = await params;
    const body = await request.json();
    const { role } = body as { role: UserRole };

    if (!role || !['user', 'admin'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      );
    }

    // Prevent changing your own role
    if (userId === authResult.user.sub) {
      return NextResponse.json(
        { error: 'Cannot change your own role' },
        { status: 400 }
      );
    }

    const user = await getUserById(userId);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    await setUserRole(userId, role);

    return NextResponse.json({
      message: `User role updated to ${role}`,
    });
  } catch (error) {
    console.error('Update role error:', error);
    return NextResponse.json(
      { error: 'Failed to update role' },
      { status: 500 }
    );
  }
}
