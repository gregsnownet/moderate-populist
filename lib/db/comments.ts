import {
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import { docClient, COMMENTS_TABLE } from './dynamodb';
import type { Comment, CommentDBItem, CommentThread, CommentStatus } from '@/types/comment';

// Convert DB item to Comment object
function dbItemToComment(item: CommentDBItem): Comment {
  return {
    commentId: item.commentId,
    issueId: item.issueId,
    userId: item.userId,
    username: item.username,
    content: item.content,
    parentCommentId: item.parentCommentId === 'NONE' ? null : item.parentCommentId,
    depth: item.depth,
    status: item.status,
    moderatedBy: item.moderatedBy,
    moderatedAt: item.moderatedAt,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  };
}

// Create new comment
export async function createComment(comment: Comment): Promise<void> {
  const item: CommentDBItem = {
    pk: `ISSUE#${comment.issueId}`,
    sk: `COMMENT#${comment.createdAt}#${comment.commentId}`,
    commentId: comment.commentId,
    issueId: comment.issueId,
    userId: comment.userId,
    username: comment.username,
    content: comment.content,
    parentCommentId: comment.parentCommentId || 'NONE',
    depth: comment.depth,
    status: comment.status,
    moderatedBy: comment.moderatedBy,
    moderatedAt: comment.moderatedAt,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  };

  await docClient.send(
    new PutCommand({
      TableName: COMMENTS_TABLE,
      Item: item,
    })
  );
}

// Get comment by ID (need to scan or query with issueId)
export async function getCommentById(issueId: string, commentId: string): Promise<Comment | null> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      KeyConditionExpression: 'pk = :pk AND begins_with(sk, :skPrefix)',
      FilterExpression: 'commentId = :commentId',
      ExpressionAttributeValues: {
        ':pk': `ISSUE#${issueId}`,
        ':skPrefix': 'COMMENT#',
        ':commentId': commentId,
      },
    })
  );

  if (!result.Items || result.Items.length === 0) return null;
  return dbItemToComment(result.Items[0] as CommentDBItem);
}

// Get all approved comments for an issue
export async function getApprovedCommentsForIssue(issueId: string): Promise<Comment[]> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      KeyConditionExpression: 'pk = :pk AND begins_with(sk, :skPrefix)',
      FilterExpression: '#status = :approved',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':pk': `ISSUE#${issueId}`,
        ':skPrefix': 'COMMENT#',
        ':approved': 'approved',
      },
    })
  );

  return (result.Items || []).map((item) => dbItemToComment(item as CommentDBItem));
}

// Get all comments for an issue (for admin)
export async function getAllCommentsForIssue(issueId: string): Promise<Comment[]> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      KeyConditionExpression: 'pk = :pk AND begins_with(sk, :skPrefix)',
      ExpressionAttributeValues: {
        ':pk': `ISSUE#${issueId}`,
        ':skPrefix': 'COMMENT#',
      },
    })
  );

  return (result.Items || []).map((item) => dbItemToComment(item as CommentDBItem));
}

// Get pending comments for moderation (using GSI)
export async function getPendingComments(
  limit = 50,
  lastEvaluatedKey?: Record<string, unknown>
): Promise<{ comments: Comment[]; nextToken?: Record<string, unknown> }> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      IndexName: 'moderation-index',
      KeyConditionExpression: '#status = :pending',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':pending': 'pending',
      },
      Limit: limit,
      ExclusiveStartKey: lastEvaluatedKey,
      ScanIndexForward: true, // oldest first
    })
  );

  const comments = (result.Items || []).map((item) => dbItemToComment(item as CommentDBItem));

  return {
    comments,
    nextToken: result.LastEvaluatedKey,
  };
}

// Count pending comments
export async function countPendingComments(): Promise<number> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      IndexName: 'moderation-index',
      KeyConditionExpression: '#status = :pending',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':pending': 'pending',
      },
      Select: 'COUNT',
    })
  );

  return result.Count || 0;
}

// Moderate comment (approve or reject)
export async function moderateComment(
  issueId: string,
  commentId: string,
  createdAt: string,
  action: 'approve' | 'reject',
  moderatorId: string
): Promise<void> {
  const status: CommentStatus = action === 'approve' ? 'approved' : 'rejected';

  await docClient.send(
    new UpdateCommand({
      TableName: COMMENTS_TABLE,
      Key: {
        pk: `ISSUE#${issueId}`,
        sk: `COMMENT#${createdAt}#${commentId}`,
      },
      UpdateExpression: 'SET #status = :status, moderatedBy = :moderatorId, moderatedAt = :moderatedAt, updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': status,
        ':moderatorId': moderatorId,
        ':moderatedAt': new Date().toISOString(),
        ':updatedAt': new Date().toISOString(),
      },
    })
  );
}

// Delete comment
export async function deleteComment(
  issueId: string,
  commentId: string,
  createdAt: string
): Promise<void> {
  await docClient.send(
    new DeleteCommand({
      TableName: COMMENTS_TABLE,
      Key: {
        pk: `ISSUE#${issueId}`,
        sk: `COMMENT#${createdAt}#${commentId}`,
      },
    })
  );
}

// Get comments by user (for admin user view)
export async function getCommentsByUser(userId: string): Promise<Comment[]> {
  // This requires a scan since we don't have a userId GSI
  // For a production app with many comments, consider adding a GSI on userId
  const result = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      IndexName: 'moderation-index',
      KeyConditionExpression: '#status = :status',
      FilterExpression: 'userId = :userId',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'approved',
        ':userId': userId,
      },
    })
  );

  // Also get pending comments
  const pendingResult = await docClient.send(
    new QueryCommand({
      TableName: COMMENTS_TABLE,
      IndexName: 'moderation-index',
      KeyConditionExpression: '#status = :status',
      FilterExpression: 'userId = :userId',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':status': 'pending',
        ':userId': userId,
      },
    })
  );

  const approved = (result.Items || []).map((item) => dbItemToComment(item as CommentDBItem));
  const pending = (pendingResult.Items || []).map((item) => dbItemToComment(item as CommentDBItem));

  return [...approved, ...pending].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

// Build threaded comment structure
export function buildCommentThreads(comments: Comment[]): CommentThread[] {
  const commentMap = new Map<string, CommentThread>();
  const rootComments: CommentThread[] = [];

  // First pass: create CommentThread objects
  for (const comment of comments) {
    commentMap.set(comment.commentId, { ...comment, replies: [] });
  }

  // Second pass: build tree structure
  for (const comment of comments) {
    const threadComment = commentMap.get(comment.commentId)!;

    if (comment.parentCommentId === null) {
      rootComments.push(threadComment);
    } else {
      const parent = commentMap.get(comment.parentCommentId);
      if (parent) {
        parent.replies.push(threadComment);
      } else {
        // Parent not found (possibly rejected), treat as root
        rootComments.push(threadComment);
      }
    }
  }

  // Sort by createdAt (oldest first for chronological order)
  const sortByDate = (a: CommentThread, b: CommentThread) =>
    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();

  rootComments.sort(sortByDate);

  // Sort replies recursively
  function sortReplies(threads: CommentThread[]) {
    for (const thread of threads) {
      thread.replies.sort(sortByDate);
      sortReplies(thread.replies);
    }
  }

  sortReplies(rootComments);

  return rootComments;
}
