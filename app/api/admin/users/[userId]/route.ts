import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { getUserById, deleteUser, toPublicUser } from '@/lib/db/users';
import { getCommentsByUser } from '@/lib/db/comments';

interface RouteParams {
  params: Promise<{ userId: string }>;
}

// GET - Get user details with comment history
export async function GET(request: NextRequest, { params }: RouteParams) {
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

    // Get user's comments
    const comments = await getCommentsByUser(userId);

    return NextResponse.json({
      user: {
        ...toPublicUser(user),
        banned: user.banned,
        updatedAt: user.updatedAt,
      },
      comments,
    });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

// DELETE - Delete user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { userId } = await params;

    // Prevent deleting yourself
    if (userId === authResult.user.sub) {
      return NextResponse.json(
        { error: 'Cannot delete your own account' },
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

    await deleteUser(userId);

    return NextResponse.json({
      message: 'User deleted',
    });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
