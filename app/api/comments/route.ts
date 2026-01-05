import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { requireVerifiedEmail, optionalAuth } from '@/lib/auth/middleware';
import { createCommentSchema, validateInput, formatZodErrors } from '@/lib/validation/schemas';
import { createComment, getApprovedCommentsForIssue, getCommentById, buildCommentThreads } from '@/lib/db/comments';
import { getUserById } from '@/lib/db/users';
import type { Comment } from '@/types/comment';

const MAX_COMMENT_DEPTH = 2;

// GET - List approved comments for an issue
export async function GET(request: NextRequest) {
  try {
    const issueId = request.nextUrl.searchParams.get('issueId');

    if (!issueId) {
      return NextResponse.json(
        { error: 'Issue ID is required' },
        { status: 400 }
      );
    }

    const comments = await getApprovedCommentsForIssue(issueId);
    const threads = buildCommentThreads(comments);

    return NextResponse.json({ comments: threads });
  } catch (error) {
    console.error('Get comments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST - Create a new comment
export async function POST(request: NextRequest) {
  try {
    const authResult = await requireVerifiedEmail(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const body = await request.json();

    // Validate input
    const validation = validateInput(createCommentSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: formatZodErrors(validation.errors) },
        { status: 400 }
      );
    }

    const { issueId, content, parentCommentId } = validation.data;

    // Get user details
    const user = await getUserById(authResult.user.sub);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user is banned
    if (user.banned) {
      return NextResponse.json(
        { error: 'Your account has been suspended' },
        { status: 403 }
      );
    }

    // Calculate depth and validate parent comment
    let depth = 0;
    if (parentCommentId) {
      const parentComment = await getCommentById(issueId, parentCommentId);

      if (!parentComment) {
        return NextResponse.json(
          { error: 'Parent comment not found' },
          { status: 404 }
        );
      }

      // Check if parent comment is approved
      if (parentComment.status !== 'approved') {
        return NextResponse.json(
          { error: 'Cannot reply to unapproved comment' },
          { status: 400 }
        );
      }

      depth = parentComment.depth + 1;

      if (depth > MAX_COMMENT_DEPTH) {
        return NextResponse.json(
          { error: 'Maximum reply depth reached' },
          { status: 400 }
        );
      }
    }

    // Create the comment
    const now = new Date().toISOString();
    const comment: Comment = {
      commentId: uuidv4(),
      issueId,
      userId: user.userId,
      username: user.username,
      content: content.trim(),
      parentCommentId: parentCommentId || null,
      depth,
      status: 'pending',
      moderatedBy: null,
      moderatedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    await createComment(comment);

    return NextResponse.json(
      {
        message: 'Comment submitted for moderation',
        comment: {
          commentId: comment.commentId,
          status: comment.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create comment error:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
