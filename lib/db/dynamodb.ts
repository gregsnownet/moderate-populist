import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Create client lazily to ensure environment variables are available
let _docClient: DynamoDBDocumentClient | null = null;

function getDocClient(): DynamoDBDocumentClient {
  if (_docClient) return _docClient;

  // Use APP_AWS_* env vars for Amplify Hosting (can't use AWS_* prefix)
  // Falls back to default credential chain for local development
  const clientConfig: ConstructorParameters<typeof DynamoDBClient>[0] = {
    region: process.env.APP_AWS_REGION || process.env.AWS_REGION || 'us-east-1',
  };

  // If custom credentials are provided (for Amplify Hosting), use them
  if (process.env.APP_AWS_ACCESS_KEY_ID && process.env.APP_AWS_SECRET_ACCESS_KEY) {
    clientConfig.credentials = {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
    };
  }

  const client = new DynamoDBClient(clientConfig);

  _docClient = DynamoDBDocumentClient.from(client, {
    marshallOptions: {
      removeUndefinedValues: true,
    },
  });

  return _docClient;
}

// Export as a getter to ensure lazy initialization
export const docClient = {
  send: <T>(command: Parameters<DynamoDBDocumentClient['send']>[0]) =>
    getDocClient().send(command) as Promise<T>,
};

export const USERS_TABLE = process.env.DYNAMODB_USERS_TABLE || 'ModeratePopulist_Users';
export const COMMENTS_TABLE = process.env.DYNAMODB_COMMENTS_TABLE || 'ModeratePopulist_Comments';
