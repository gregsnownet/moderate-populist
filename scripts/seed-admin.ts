/**
 * Admin Seed Script
 *
 * Creates the default admin account for the Moderate Populist site.
 *
 * Usage:
 *   npx ts-node --project tsconfig.json scripts/seed-admin.ts
 *
 * Or add to package.json scripts:
 *   "seed:admin": "ts-node --project tsconfig.json scripts/seed-admin.ts"
 *
 * Environment variables required:
 *   - AWS_REGION (default: us-east-1)
 *   - DYNAMODB_USERS_TABLE (default: ModeratePopulist_Users)
 *   - ADMIN_EMAIL (default: themoderate@moderatepopulist.org)
 *   - ADMIN_PASSWORD (required - set in environment or .env.local)
 */

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local if it exists
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match && !process.env[match[1].trim()]) {
      process.env[match[1].trim()] = match[2].trim();
    }
  });
}

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'themoderate@moderatepopulist.org';
const ADMIN_USERNAME = 'themoderate';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const USERS_TABLE = process.env.DYNAMODB_USERS_TABLE || 'ModeratePopulist_Users';
const REGION = process.env.AWS_REGION || 'us-east-1';

async function seedAdmin() {
  if (!ADMIN_PASSWORD) {
    console.error('Error: ADMIN_PASSWORD environment variable is required');
    console.error('Set it with: export ADMIN_PASSWORD="your-secure-password"');
    process.exit(1);
  }

  console.log('Connecting to DynamoDB...');

  const client = new DynamoDBClient({ region: REGION });
  const docClient = DynamoDBDocumentClient.from(client);

  // Check if admin already exists
  console.log(`Checking if admin account exists: ${ADMIN_EMAIL}`);

  const existingUser = await docClient.send(
    new QueryCommand({
      TableName: USERS_TABLE,
      IndexName: 'email-index',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': ADMIN_EMAIL.toLowerCase(),
      },
    })
  );

  if (existingUser.Items && existingUser.Items.length > 0) {
    console.log('Admin account already exists. Skipping creation.');
    return;
  }

  // Create admin user
  console.log('Creating admin account...');

  const userId = uuidv4();
  const passwordHash = await hash(ADMIN_PASSWORD, 12);
  const now = new Date().toISOString();

  await docClient.send(
    new PutCommand({
      TableName: USERS_TABLE,
      Item: {
        pk: `USER#${userId}`,
        sk: 'PROFILE',
        userId,
        email: ADMIN_EMAIL.toLowerCase(),
        emailVerified: true, // Pre-verified for admin
        username: ADMIN_USERNAME.toLowerCase(),
        passwordHash,
        country: 'United States',
        state: 'National',
        role: 'admin',
        banned: false,
        createdAt: now,
        updatedAt: now,
        sessionVersion: 1,
      },
    })
  );

  console.log('');
  console.log('Admin account created successfully!');
  console.log('================================');
  console.log(`Email:    ${ADMIN_EMAIL}`);
  console.log(`Username: ${ADMIN_USERNAME}`);
  console.log(`Role:     admin`);
  console.log('================================');
  console.log('');
  console.log('You can now log in at /login with these credentials.');
}

seedAdmin().catch((error) => {
  console.error('Failed to seed admin:', error);
  process.exit(1);
});
