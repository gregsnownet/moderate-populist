import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { moderateCommentSchema, validateInput, formatZodErrors } from '@/lib/validation/schemas';
import { getCommentById, moderateComment } from '@/lib/db/comments';

interface RouteParams {
  params: Promise<{ commentId: string }>;
}

// POST - Moderate a comment (approve or reject)
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const authResult = await requireAdmin(request);

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

    const body = await request.json();

    // Validate input
    const validation = validateInput(moderateCommentSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: formatZodErrors(validation.errors) },
        { status: 400 }
      );
    }

    const { action } = validation.data;

    // Find the comment
    const comment = await getCommentById(issueId, commentId);

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    // Moderate the comment
    await moderateComment(
      issueId,
      commentId,
      comment.createdAt,
      action,
      authResult.user.sub
    );

    return NextResponse.json({
      message: `Comment ${action}d`,
      status: action === 'approve' ? 'approved' : 'rejected',
    });
  } catch (error) {
    console.error('Moderate comment error:', error);
    return NextResponse.json(
      { error: 'Failed to moderate comment' },
      { status: 500 }
    );
  }
}
