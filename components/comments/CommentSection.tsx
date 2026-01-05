'use client';

import { useState, useEffect, useCallback } from 'react';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';
import type { CommentThread } from '@/types/comment';

interface CommentSectionProps {
  issueId: string;
}

export function CommentSection({ issueId }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentThread[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/comments?issueId=${issueId}`);
      const data = await response.json();

      if (response.ok) {
        setComments(data.comments);
      } else {
        setError(data.error || 'Failed to load comments');
      }
    } catch {
      setError('Failed to load comments');
    } finally {
      setIsLoading(false);
    }
  }, [issueId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleNewComment = () => {
    // Refresh comments list after new comment is submitted
    // Note: New comments won't appear immediately as they need moderation
    fetchComments();
  };

  return (
    <section className="mt-12 pt-8 border-t border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-800 mb-6">Discussion</h2>

      {/* Comment form */}
      <div className="mb-8">
        <CommentForm issueId={issueId} onSubmit={handleNewComment} />
      </div>

      {/* Comments list */}
      <div>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-zinc-200 rounded-full" />
                  <div className="flex-1">
                    <div className="h-4 bg-zinc-200 rounded w-1/4 mb-2" />
                    <div className="h-4 bg-zinc-200 rounded w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchComments}
              className="mt-2 text-sm text-purple-600 hover:text-purple-700"
            >
              Try again
            </button>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 text-zinc-500">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {comments.map((comment) => (
              <CommentItem
                key={comment.commentId}
                comment={comment}
                issueId={issueId}
                onReplySubmit={handleNewComment}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
