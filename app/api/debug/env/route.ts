import { NextResponse } from 'next/server';

export async function GET() {
  // Only show partial keys for security
  const envInfo = {
    APP_AWS_ACCESS_KEY_ID: process.env.APP_AWS_ACCESS_KEY_ID ? `${process.env.APP_AWS_ACCESS_KEY_ID.substring(0, 8)}...` : 'NOT SET',
    APP_AWS_SECRET_ACCESS_KEY: process.env.APP_AWS_SECRET_ACCESS_KEY ? 'SET (hidden)' : 'NOT SET',
    APP_AWS_REGION: process.env.APP_AWS_REGION || 'NOT SET',
    AWS_REGION: process.env.AWS_REGION || 'NOT SET',
    DYNAMODB_USERS_TABLE: process.env.DYNAMODB_USERS_TABLE || 'NOT SET',
    DYNAMODB_COMMENTS_TABLE: process.env.DYNAMODB_COMMENTS_TABLE || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV || 'NOT SET',
  };

  return NextResponse.json(envInfo);
}
