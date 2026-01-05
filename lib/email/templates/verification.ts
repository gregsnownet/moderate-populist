const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export function getVerificationEmailHtml(username: string, token: string): string {
  const verifyUrl = `${APP_URL}/verify-email?token=${token}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - Moderate Populist</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ef4444 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Moderate Populist</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; color: #18181b; font-size: 20px; font-weight: 600;">Welcome, ${username}!</h2>

              <p style="margin: 0 0 20px 0; color: #3f3f46; font-size: 16px; line-height: 1.6;">
                Thank you for registering at Moderate Populist. To complete your registration and start participating in discussions, please verify your email address.
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${verifyUrl}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 500;">
                  Verify Email Address
                </a>
              </div>

              <p style="margin: 20px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                If you didn't create an account at Moderate Populist, you can safely ignore this email.
              </p>

              <p style="margin: 20px 0 0 0; color: #71717a; font-size: 14px; line-height: 1.6;">
                If the button above doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 10px 0 0 0; word-break: break-all;">
                <a href="${verifyUrl}" style="color: #3b82f6; font-size: 14px;">${verifyUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f4f4f5; padding: 20px 40px; text-align: center;">
              <p style="margin: 0; color: #71717a; font-size: 12px;">
                This link will expire in 24 hours.
              </p>
              <p style="margin: 10px 0 0 0; color: #a1a1aa; font-size: 12px;">
                &copy; ${new Date().getFullYear()} Moderate Populist. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function getVerificationEmailText(username: string, token: string): string {
  const verifyUrl = `${APP_URL}/verify-email?token=${token}`;

  return `
Welcome to Moderate Populist, ${username}!

Thank you for registering. To complete your registration and start participating in discussions, please verify your email address by visiting the link below:

${verifyUrl}

If you didn't create an account at Moderate Populist, you can safely ignore this email.

This link will expire in 24 hours.

---
Moderate Populist
  `.trim();
}
