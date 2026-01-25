'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-purple-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-800 mb-2">Access Denied</h1>
          <p className="text-zinc-600">You must be an admin to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Admin Header */}
      <header className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="text-xl font-bold">
                Admin Portal
              </Link>
              <nav className="hidden md:flex items-center gap-4">
                <Link
                  href="/admin"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/comments"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Comments
                </Link>
                <Link
                  href="/admin/users"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Users
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-400">
                Logged in as <span className="text-white font-medium">{user.username}</span>
              </span>
              <Link
                href="/"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
