import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send notification email to site owner
    await resend.emails.send({
      from: 'The Moderate Populist <noreply@moderatepopulist.org>',
      to: 'themoderate@moderatepopulist.org',
      subject: `Count Me In: ${name}`,
      html: `
        <h2>New "Count Me In" Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><small>Submitted from the About page</small></p>
      `,
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
