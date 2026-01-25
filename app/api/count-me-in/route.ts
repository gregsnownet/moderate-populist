import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/ses';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification email to site owner
    const htmlContent = `
      <h2>New "Count Me In" Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : '<p><em>No message provided</em></p>'}
      <hr>
      <p><small>Submitted from the About page</small></p>
    `;

    const textContent = `
New "Count Me In" Submission

Name: ${name}
Email: ${email}
${message ? `Message:\n${message}` : 'No message provided'}

---
Submitted from the About page
    `;

    await sendEmail({
      to: 'themoderate@moderatepopulist.org',
      subject: `Count Me In: ${name}`,
      htmlBody: htmlContent,
      textBody: textContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Count Me In error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
