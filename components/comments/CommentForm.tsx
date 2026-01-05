'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

interface CommentFormProps {
  issueId: string;
  parentCommentId?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  placeholder?: string;
}

export function CommentForm({
  issueId,
  parentCommentId,
  onSubmit,
  onCancel,
  placeholder = 'Share your thoughts...',
}: CommentFormProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!user) {
    return (
      <div className="bg-zinc-50 rounded-lg p-6 text-center">
        <p className="text-zinc-600 mb-4">Sign in to join the conversation</p>
        <div className="flex justify-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  if (!user.emailVerified) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-800 text-sm">
          Please verify your email address before commenting. Check your inbox for a verification link.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (content.trim().length < 10) {
      setError('Comment must be at least 10 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          issueId,
          content: content.trim(),
          parentCommentId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to submit comment');
        return;
      }

      setContent('');
      setSuccess(true);
      onSubmit?.();

      // Clear success message after a few seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm">
          Your comment has been submitted for moderation. It will appear once approved.
        </div>
      )}

      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          rows={4}
          maxLength={2000}
          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-colors"
        />
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-zinc-500">
            {content.length}/2000 characters
          </p>
          {content.length > 0 && content.length < 10 && (
            <p className="text-xs text-amber-600">
              {10 - content.length} more characters needed
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting || content.trim().length < 10}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? 'Submitting...' : parentCommentId ? 'Reply' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
}
