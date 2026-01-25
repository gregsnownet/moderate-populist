'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Comment } from '@/types/comment';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function CommentsModeration() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPending, setTotalPending] = useState(0);
  const [moderatingIds, setModeratingIds] = useState<Set<string>>(new Set());

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/comments');
      const data = await response.json();

      if (response.ok) {
        setComments(data.comments);
        setTotalPending(data.totalPending);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleModerate = async (comment: Comment, action: 'approve' | 'reject') => {
    setModeratingIds(prev => new Set(prev).add(comment.commentId));

    try {
      const response = await fetch(
        `/api/admin/comments/${comment.commentId}/moderate?issueId=${comment.issueId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action }),
        }
      );

      if (response.ok) {
        // Remove from list
        setComments(prev => prev.filter(c => c.commentId !== comment.commentId));
        setTotalPending(prev => prev - 1);
      }
    } catch (error) {
      console.error('Failed to moderate comment:', error);
    } finally {
      setModeratingIds(prev => {
        const next = new Set(prev);
        next.delete(comment.commentId);
        return next;
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-800">Comment Moderation</h1>
          <p className="text-zinc-600 mt-1">
            {totalPending} comment{totalPending !== 1 ? 's' : ''} pending review
          </p>
        </div>
        <button
          onClick={fetchComments}
          className="px-4 py-2 text-sm font-medium text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
        >
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6 animate-pulse">
              <div className="h-4 bg-zinc-200 rounded w-1/4 mb-4" />
              <div className="h-4 bg-zinc-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-zinc-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-800 mb-2">All caught up!</h2>
          <p className="text-zinc-600">No comments pending review.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map(comment => (
            <div
              key={comment.commentId}
              className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-red-500 flex items-center justify-center text-white font-medium">
                    {comment.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-zinc-800">{comment.username}</p>
                    <p className="text-sm text-zinc-500">{formatDate(comment.createdAt)}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded">
                  {comment.issueId}
                </span>
              </div>

              {/* Content */}
              <div className="mb-4 p-4 bg-zinc-50 rounded-lg">
                <p className="text-zinc-800 whitespace-pre-wrap">{comment.content}</p>
              </div>

              {/* Reply indicator */}
              {comment.parentCommentId && (
                <p className="text-sm text-zinc-500 mb-4">
                  This is a reply to another comment (depth: {comment.depth})
                </p>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleModerate(comment, 'approve')}
                  disabled={moderatingIds.has(comment.commentId)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Approve
                </button>
                <button
                  onClick={() => handleModerate(comment, 'reject')}
                  disabled={moderatingIds.has(comment.commentId)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Reject
                </button>
                <a
                  href={`/issues/${comment.issueId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Issue
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
