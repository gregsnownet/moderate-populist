export type CommentStatus = 'pending' | 'approved' | 'rejected';

export interface Comment {
  commentId: string;
  issueId: string;
  userId: string;
  username: string;
  content: string;
  parentCommentId: string | null; // null for root comments
  depth: number; // 0, 1, or 2 (max nesting level)
  status: CommentStatus;
  moderatedBy: string | null;
  moderatedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// Comment with nested replies for display
export interface CommentThread extends Comment {
  replies: CommentThread[];
}

// Create comment request
export interface CreateCommentRequest {
  issueId: string;
  content: string;
  parentCommentId?: string;
}

// DynamoDB item structure for Comment
export interface CommentDBItem {
  pk: string; // ISSUE#<issueId>
  sk: string; // COMMENT#<timestamp>#<commentId>
  commentId: string;
  issueId: string;
  userId: string;
  username: string;
  content: string;
  parentCommentId: string; // "NONE" for root comments (DynamoDB doesn't support null in GSI)
  depth: number;
  status: CommentStatus;
  moderatedBy: string | null;
  moderatedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// Comment moderation action
export interface ModerateCommentRequest {
  action: 'approve' | 'reject';
}

// API response for comments list
export interface CommentsResponse {
  comments: Comment[];
  nextToken?: string;
}

// Admin comments response with user info
export interface AdminCommentsResponse {
  comments: (Comment & { userEmail?: string })[];
  nextToken?: string;
  totalPending: number;
}
