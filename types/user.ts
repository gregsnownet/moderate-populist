export type UserRole = 'user' | 'admin';

export interface User {
  userId: string;
  email: string;
  emailVerified: boolean;
  username: string;
  passwordHash: string;
  country: string;
  state: string;
  role: UserRole;
  banned: boolean;
  createdAt: string;
  updatedAt: string;
  verificationToken?: string;
  verificationTokenExpiry?: string;
  sessionVersion: number;
}

// User without sensitive fields (for client-side use)
export interface PublicUser {
  userId: string;
  email: string;
  emailVerified: boolean;
  username: string;
  country: string;
  state: string;
  role: UserRole;
  createdAt: string;
}

// User data in JWT payload
export interface JWTPayload {
  sub: string; // userId
  email: string;
  username: string;
  role: UserRole;
  emailVerified: boolean;
  sessionVersion: number;
  iat: number;
  exp: number;
}

// Registration request data
export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  country: string;
  state: string;
}

// Login request data
export interface LoginRequest {
  email: string;
  password: string;
}

// DynamoDB item structure for User
export interface UserDBItem {
  pk: string; // USER#<userId>
  sk: string; // PROFILE
  userId: string;
  email: string;
  emailVerified: boolean;
  username: string;
  passwordHash: string;
  country: string;
  state: string;
  role: UserRole;
  banned: boolean;
  createdAt: string;
  updatedAt: string;
  verificationToken?: string;
  verificationTokenExpiry?: string;
  sessionVersion: number;
}
