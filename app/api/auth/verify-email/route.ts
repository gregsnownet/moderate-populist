import { NextRequest, NextResponse } from 'next/server';
import { getUserById, verifyUserEmail } from '@/lib/db/users';
import { docClient, USERS_TABLE } from '@/lib/db/dynamodb';
import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import type { UserDBItem } from '@/types/user';

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Find user by verification token using a scan (not ideal but works for this use case)
    const result = await docClient.send(
      new QueryCommand({
        TableName: USERS_TABLE,
        IndexName: 'email-index',
        // We need to scan for the token, but since we can't query by token directly,
        // we'll use a different approach - redirect to a page that handles it
        // For now, let's do a simple scan
        FilterExpression: 'verificationToken = :token',
        ExpressionAttributeValues: {
          ':token': token,
        },
        // Note: In production with many users, consider adding a GSI on verificationToken
      })
    );

    // Since QueryCommand requires a key, we need to use ScanCommand for token lookup
    const { ScanCommand } = await import('@aws-sdk/lib-dynamodb');
    const scanResult = await docClient.send(
      new ScanCommand({
        TableName: USERS_TABLE,
        FilterExpression: 'verificationToken = :token',
        ExpressionAttributeValues: {
          ':token': token,
        },
      })
    );

    if (!scanResult.Items || scanResult.Items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    const userItem = scanResult.Items[0] as UserDBItem;

    // Check if token has expired
    if (userItem.verificationTokenExpiry) {
      const expiry = new Date(userItem.verificationTokenExpiry);
      if (expiry < new Date()) {
        return NextResponse.json(
          { error: 'Verification token has expired. Please request a new one.' },
          { status: 400 }
        );
      }
    }

    // Verify the email
    await verifyUserEmail(userItem.userId);

    return NextResponse.json({
      message: 'Email verified successfully. You can now log in.',
    });
  } catch (error) {
    console.error('Email verification error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `An error occurred during email verification: ${errorMessage}` },
      { status: 500 }
    );
  }
}
