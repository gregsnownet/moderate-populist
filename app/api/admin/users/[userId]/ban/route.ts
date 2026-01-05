import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { getUserById, setBanStatus, incrementSessionVersion } from '@/lib/db/users';

interface RouteParams {
  params: Promise<{ userId: string }>;
}

// POST - Ban user
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { userId } = await params;

    // Prevent banning yourself
    if (userId === authResult.user.sub) {
      return NextResponse.json(
        { error: 'Cannot ban your own account' },
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

    // Ban the user and invalidate all sessions
    await setBanStatus(userId, true);
    await incrementSessionVersion(userId);

    return NextResponse.json({
      message: 'User banned',
    });
  } catch (error) {
    console.error('Ban user error:', error);
    return NextResponse.json(
      { error: 'Failed to ban user' },
      { status: 500 }
    );
  }
}

// DELETE - Unban user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { userId } = await params;
    const user = await getUserById(userId);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    await setBanStatus(userId, false);

    return NextResponse.json({
      message: 'User unbanned',
    });
  } catch (error) {
    console.error('Unban user error:', error);
    return NextResponse.json(
      { error: 'Failed to unban user' },
      { status: 500 }
    );
  }
}
