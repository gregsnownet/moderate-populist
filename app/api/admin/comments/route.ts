import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/middleware';
import { getPendingComments, countPendingComments } from '@/lib/db/comments';

// GET - List pending comments for moderation
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireAdmin(request);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '50', 10);
    const nextTokenParam = request.nextUrl.searchParams.get('nextToken');
    const nextToken = nextTokenParam ? JSON.parse(atob(nextTokenParam)) : undefined;

    const [{ comments, nextToken: newNextToken }, totalPending] = await Promise.all([
      getPendingComments(limit, nextToken),
      countPendingComments(),
    ]);

    return NextResponse.json({
      comments,
      totalPending,
      nextToken: newNextToken ? btoa(JSON.stringify(newNextToken)) : undefined,
    });
  } catch (error) {
    console.error('Get pending comments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}
