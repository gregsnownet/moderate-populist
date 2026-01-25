'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export function UserMenu() {
  const { user, isLoading, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="w-8 h-8 bg-zinc-200 rounded-full animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm font-medium text-zinc-700 hidden sm:block">
          {user.username}
        </span>
        {user.role === 'admin' && (
          <span className="text-xs bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full font-medium hidden sm:block">
            Admin
          </span>
        )}
        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-zinc-200 py-1 z-50">
          <div className="px-4 py-2 border-b border-zinc-100">
            <p className="text-sm font-medium text-zinc-800">{user.username}</p>
            <p className="text-xs text-zinc-500">{user.email}</p>
            {!user.emailVerified && (
              <p className="text-xs text-amber-600 mt-1">Email not verified</p>
            )}
          </div>

          {user.role === 'admin' && (
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
            >
              Admin Portal
            </Link>
          )}

          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
