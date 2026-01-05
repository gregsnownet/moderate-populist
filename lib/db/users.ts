import {
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  DeleteCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { docClient, USERS_TABLE } from './dynamodb';
import type { User, UserDBItem, PublicUser, UserRole } from '@/types/user';

// Convert DB item to User object
function dbItemToUser(item: UserDBItem): User {
  return {
    userId: item.userId,
    email: item.email,
    emailVerified: item.emailVerified,
    username: item.username,
    passwordHash: item.passwordHash,
    country: item.country,
    state: item.state,
    role: item.role,
    banned: item.banned,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    verificationToken: item.verificationToken,
    verificationTokenExpiry: item.verificationTokenExpiry,
    sessionVersion: item.sessionVersion,
  };
}

// Convert User to public user (no sensitive fields)
export function toPublicUser(user: User): PublicUser {
  return {
    userId: user.userId,
    email: user.email,
    emailVerified: user.emailVerified,
    username: user.username,
    country: user.country,
    state: user.state,
    role: user.role,
    createdAt: user.createdAt,
  };
}

// Get user by ID
export async function getUserById(userId: string): Promise<User | null> {
  const result = await docClient.send(
    new GetCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
    })
  );

  if (!result.Item) return null;
  return dbItemToUser(result.Item as UserDBItem);
}

// Get user by email (for login)
export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: USERS_TABLE,
      IndexName: 'email-index',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email.toLowerCase(),
      },
    })
  );

  if (!result.Items || result.Items.length === 0) return null;
  return dbItemToUser(result.Items[0] as UserDBItem);
}

// Get user by username (for uniqueness check)
export async function getUserByUsername(username: string): Promise<User | null> {
  const result = await docClient.send(
    new QueryCommand({
      TableName: USERS_TABLE,
      IndexName: 'username-index',
      KeyConditionExpression: 'username = :username',
      ExpressionAttributeValues: {
        ':username': username.toLowerCase(),
      },
    })
  );

  if (!result.Items || result.Items.length === 0) return null;
  return dbItemToUser(result.Items[0] as UserDBItem);
}

// Create new user
export async function createUser(user: User): Promise<void> {
  const item: UserDBItem = {
    pk: `USER#${user.userId}`,
    sk: 'PROFILE',
    userId: user.userId,
    email: user.email.toLowerCase(),
    emailVerified: user.emailVerified,
    username: user.username.toLowerCase(),
    passwordHash: user.passwordHash,
    country: user.country,
    state: user.state,
    role: user.role,
    banned: user.banned,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    verificationToken: user.verificationToken,
    verificationTokenExpiry: user.verificationTokenExpiry,
    sessionVersion: user.sessionVersion,
  };

  await docClient.send(
    new PutCommand({
      TableName: USERS_TABLE,
      Item: item,
      ConditionExpression: 'attribute_not_exists(pk)',
    })
  );
}

// Update user verification status
export async function verifyUserEmail(userId: string): Promise<void> {
  await docClient.send(
    new UpdateCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
      UpdateExpression: 'SET emailVerified = :verified, updatedAt = :updatedAt REMOVE verificationToken, verificationTokenExpiry',
      ExpressionAttributeValues: {
        ':verified': true,
        ':updatedAt': new Date().toISOString(),
      },
    })
  );
}

// Update verification token
export async function setVerificationToken(
  userId: string,
  token: string,
  expiry: string
): Promise<void> {
  await docClient.send(
    new UpdateCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
      UpdateExpression: 'SET verificationToken = :token, verificationTokenExpiry = :expiry, updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':token': token,
        ':expiry': expiry,
        ':updatedAt': new Date().toISOString(),
      },
    })
  );
}

// Update user's banned status
export async function setBanStatus(userId: string, banned: boolean): Promise<void> {
  await docClient.send(
    new UpdateCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
      UpdateExpression: 'SET banned = :banned, updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':banned': banned,
        ':updatedAt': new Date().toISOString(),
      },
    })
  );
}

// Update user's role
export async function setUserRole(userId: string, role: UserRole): Promise<void> {
  await docClient.send(
    new UpdateCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
      UpdateExpression: 'SET #role = :role, updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#role': 'role',
      },
      ExpressionAttributeValues: {
        ':role': role,
        ':updatedAt': new Date().toISOString(),
      },
    })
  );
}

// Increment session version (invalidates all existing tokens)
export async function incrementSessionVersion(userId: string): Promise<number> {
  const result = await docClient.send(
    new UpdateCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
      UpdateExpression: 'SET sessionVersion = sessionVersion + :inc, updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':inc': 1,
        ':updatedAt': new Date().toISOString(),
      },
      ReturnValues: 'ALL_NEW',
    })
  );

  return (result.Attributes as UserDBItem).sessionVersion;
}

// Delete user
export async function deleteUser(userId: string): Promise<void> {
  await docClient.send(
    new DeleteCommand({
      TableName: USERS_TABLE,
      Key: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
      },
    })
  );
}

// List all users (for admin)
export async function listUsers(
  limit = 50,
  lastEvaluatedKey?: Record<string, unknown>
): Promise<{ users: User[]; nextToken?: Record<string, unknown> }> {
  const result = await docClient.send(
    new ScanCommand({
      TableName: USERS_TABLE,
      FilterExpression: 'sk = :sk',
      ExpressionAttributeValues: {
        ':sk': 'PROFILE',
      },
      Limit: limit,
      ExclusiveStartKey: lastEvaluatedKey,
    })
  );

  const users = (result.Items || []).map((item) => dbItemToUser(item as UserDBItem));

  return {
    users,
    nextToken: result.LastEvaluatedKey,
  };
}
