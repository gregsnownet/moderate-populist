'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/hooks/useAuth';
import type { PublicUser } from '@/types/user';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<PublicUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // Try to refresh the token
        const refreshResponse = await fetch('/api/auth/refresh', { method: 'POST' });
        if (refreshResponse.ok) {
          const data = await refreshResponse.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Force a fresh fetch from the server to ensure we have the correct user data
        await refresh();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch {
      return { success: false, error: 'An error occurred' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // Ignore errors
    } finally {
      // Clear user state immediately
      setUser(null);
      // Force a hard reload to clear all cached state
      window.location.href = '/';
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}
