import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Create client lazily to ensure environment variables are available
let _sesClient: SESClient | null = null;

function getSESClient(): SESClient {
  if (_sesClient) return _sesClient;

  // Use APP_AWS_* env vars for Amplify Hosting (can't use AWS_* prefix)
  // Falls back to default credential chain for local development
  const sesConfig: ConstructorParameters<typeof SESClient>[0] = {
    region: process.env.APP_AWS_REGION || process.env.AWS_REGION || 'us-east-1',
  };

  // If custom credentials are provided (for Amplify Hosting), use them
  if (process.env.APP_AWS_ACCESS_KEY_ID && process.env.APP_AWS_SECRET_ACCESS_KEY) {
    sesConfig.credentials = {
      accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
    };
  }

  _sesClient = new SESClient(sesConfig);
  return _sesClient;
}

const FROM_EMAIL = process.env.SES_FROM_EMAIL || 'noreply@moderatepopulist.org';

export interface SendEmailParams {
  to: string;
  subject: string;
  htmlBody: string;
  textBody: string;
}

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: {
      ToAddresses: [params.to],
    },
    Message: {
      Subject: {
        Data: params.subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: params.htmlBody,
          Charset: 'UTF-8',
        },
        Text: {
          Data: params.textBody,
          Charset: 'UTF-8',
        },
      },
    },
  });

  await getSESClient().send(command);
}
