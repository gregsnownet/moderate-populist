// app/api/newsletter/route.ts
// Newsletter subscription endpoint. Logs emails for now; replace the
// `storeEmail` call with your actual ESP integration (Mailchimp, Buttondown,
// ConvertKit, Substack, etc.) when you're ready.

import { NextResponse } from "next/server";

async function storeEmail(email: string, source: string) {
  // TODO: replace with real ESP / DB write.
  // For now we just log so deployments don't 500 silently.
  console.log(`[newsletter] new subscriber: ${email} (source=${source})`);
}

export async function POST(req: Request) {
  try {
    const { email, source } = (await req.json()) as {
      email?: string;
      source?: string;
    };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Very basic validation. ESPs do the real check.
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      return NextResponse.json({ error: "Please use a valid email." }, { status: 400 });
    }

    await storeEmail(email.trim(), source ?? "unknown");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] error:", err);
    return NextResponse.json(
      { error: "Couldn't process that — please try again." },
      { status: 500 },
    );
  }
}
