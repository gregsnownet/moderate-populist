'use client';

import { useState } from 'react';
import { CommentForm } from './CommentForm';
import type { CommentThread } from '@/types/comment';

interface CommentItemProps {
  comment: CommentThread;
  issueId: string;
  onReplySubmit?: () => void;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  });
}

export function CommentItem({ comment, issueId, onReplySubmit }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const canReply = comment.depth < 2; // Max depth is 2

  const handleReplySubmit = () => {
    setShowReplyForm(false);
    onReplySubmit?.();
  };

  return (
    <div className={`${comment.depth > 0 ? 'ml-6 pl-4 border-l-2 border-zinc-200' : ''}`}>
      <div className="py-4">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-red-500 flex-shrink-0 flex items-center justify-center text-white text-sm font-medium">
            {comment.username.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-zinc-800">{comment.username}</span>
              <span className="text-zinc-400 text-sm">·</span>
              <span className="text-zinc-500 text-sm">{formatDate(comment.createdAt)}</span>
            </div>

            {/* Content */}
            <p className="text-zinc-700 whitespace-pre-wrap break-words">{comment.content}</p>

            {/* Actions */}
            {canReply && (
              <div className="mt-2">
                <button
                  onClick={() => setShowReplyForm(!showReplyForm)}
                  className="text-sm text-zinc-500 hover:text-blue-900 transition-colors"
                >
                  {showReplyForm ? 'Cancel' : 'Reply'}
                </button>
              </div>
            )}

            {/* Reply form */}
            {showReplyForm && (
              <div className="mt-4">
                <CommentForm
                  issueId={issueId}
                  parentCommentId={comment.commentId}
                  onSubmit={handleReplySubmit}
                  onCancel={() => setShowReplyForm(false)}
                  placeholder={`Reply to ${comment.username}...`}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nested replies */}
      {comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.commentId}
              comment={reply}
              issueId={issueId}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
