import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth/middleware';
import { getCommentById, deleteComment } from '@/lib/db/comments';

interface RouteParams {
  params: Promise<{ commentId: string }>;
}

// DELETE - Delete own comment (before approval)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAuth(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { commentId } = await params;
    const issueId = request.nextUrl.searchParams.get('issueId');

    if (!issueId) {
      return NextResponse.json(
        { error: 'Issue ID is required' },
        { status: 400 }
      );
    }

    const comment = await getCommentById(issueId, commentId);

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Only allow deletion of own comments
    if (comment.userId !== authResult.user.sub) {
      return NextResponse.json(
        { error: 'You can only delete your own comments' },
        { status: 403 }
      );
    }

    // Only allow deletion of pending comments
    if (comment.status !== 'pending') {
      return NextResponse.json(
        { error: 'Cannot delete approved or rejected comments' },
        { status: 400 }
      );
    }

    await deleteComment(issueId, commentId, comment.createdAt);

    return NextResponse.json({
      message: 'Comment deleted',
    });
  } catch (error) {
    console.error('Delete comment error:', error);
    return NextResponse.json(
      { error: 'Failed to delete comment' },
      { status: 500 }
    );
  }
}
