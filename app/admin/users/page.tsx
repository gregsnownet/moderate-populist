'use client';

import { useState, useEffect, useCallback } from 'react';
import type { PublicUser } from '@/types/user';

interface AdminUser extends PublicUser {
  banned: boolean;
  updatedAt: string;
  registrationIp?: string;
  registrationCountry?: string;
  lastLoginAt?: string;
  lastLoginIp?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function UsersManagement() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleBan = async (userId: string, isBanned: boolean) => {
    setActionInProgress(userId);

    try {
      const response = await fetch(`/api/admin/users/${userId}/ban`, {
        method: isBanned ? 'DELETE' : 'POST',
      });

      if (response.ok) {
        setUsers(prev =>
          prev.map(u =>
            u.userId === userId ? { ...u, banned: !isBanned } : u
          )
        );
      }
    } catch (error) {
      console.error('Failed to update ban status:', error);
    } finally {
      setActionInProgress(null);
    }
  };

  const handleRoleChange = async (userId: string, newRole: 'user' | 'admin') => {
    setActionInProgress(userId);

    try {
      const response = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        setUsers(prev =>
          prev.map(u =>
            u.userId === userId ? { ...u, role: newRole } : u
          )
        );
      }
    } catch (error) {
      console.error('Failed to update role:', error);
    } finally {
      setActionInProgress(null);
    }
  };

  const handleDelete = async (userId: string, username: string) => {
    if (!confirm(`Are you sure you want to delete user "${username}"? This action cannot be undone.`)) {
      return;
    }

    setActionInProgress(userId);

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(prev => prev.filter(u => u.userId !== userId));
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
    } finally {
      setActionInProgress(null);
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-800">User Management</h1>
          <p className="text-zinc-600 mt-1">
            {users.length} registered user{users.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 text-sm font-medium text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors"
        >
          Refresh
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {isLoading ? (
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6 animate-pulse">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-zinc-100 rounded" />
            ))}
          </div>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-12 text-center">
          <p className="text-zinc-600">
            {searchTerm ? 'No users found matching your search.' : 'No users registered yet.'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">User</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">Location</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">Registration</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">Last Login</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">Role</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-zinc-600">Status</th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-zinc-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredUsers.map(user => (
                  <tr key={user.userId} className="hover:bg-zinc-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-red-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-zinc-800">{user.username}</p>
                          <p className="text-sm text-zinc-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {user.state}, {user.country}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      <div>
                        <p className="text-zinc-800">{formatDate(user.createdAt)}</p>
                        {user.registrationIp && (
                          <p className="text-xs text-zinc-500 mt-1">
                            IP: {user.registrationIp}
                          </p>
                        )}
                        {user.registrationCountry && (
                          <p className="text-xs text-zinc-500">
                            {user.registrationCountry}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {user.lastLoginAt ? (
                        <div>
                          <p className="text-zinc-800">{formatDateTime(user.lastLoginAt)}</p>
                          {user.lastLoginIp && (
                            <p className="text-xs text-zinc-500 mt-1">
                              IP: {user.lastLoginIp}
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="text-zinc-400">Never</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        user.role === 'admin'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {user.banned ? (
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded font-medium">
                          Banned
                        </span>
                      ) : user.emailVerified ? (
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">
                          Verified
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">
                          Unverified
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {user.role === 'user' && (
                          <button
                            onClick={() => handleRoleChange(user.userId, 'admin')}
                            disabled={actionInProgress === user.userId}
                            className="text-xs px-2 py-1 text-blue-900 hover:bg-blue-50 rounded transition-colors disabled:opacity-50"
                            title="Make Admin"
                          >
                            Make Admin
                          </button>
                        )}
                        {user.role === 'admin' && (
                          <button
                            onClick={() => handleRoleChange(user.userId, 'user')}
                            disabled={actionInProgress === user.userId}
                            className="text-xs px-2 py-1 text-zinc-600 hover:bg-zinc-100 rounded transition-colors disabled:opacity-50"
                            title="Remove Admin"
                          >
                            Remove Admin
                          </button>
                        )}
                        <button
                          onClick={() => handleBan(user.userId, user.banned)}
                          disabled={actionInProgress === user.userId}
                          className={`text-xs px-2 py-1 rounded transition-colors disabled:opacity-50 ${
                            user.banned
                              ? 'text-green-600 hover:bg-green-50'
                              : 'text-amber-600 hover:bg-amber-50'
                          }`}
                        >
                          {user.banned ? 'Unban' : 'Ban'}
                        </button>
                        <button
                          onClick={() => handleDelete(user.userId, user.username)}
                          disabled={actionInProgress === user.userId}
                          className="text-xs px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
