import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
});

export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

export const USERS_TABLE = process.env.DYNAMODB_USERS_TABLE || 'ModeratePopulist_Users';
export const COMMENTS_TABLE = process.env.DYNAMODB_COMMENTS_TABLE || 'ModeratePopulist_Comments';
