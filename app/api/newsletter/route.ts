// app/api/newsletter/route.ts
// Newsletter subscription endpoint. Persists to DynamoDB (see
// lib/db/newsletter.ts). Records email, time, IP, and country.
//
// Accepts both:
//   - application/json   { email, source? }      (used by WhereDoYouStand)
//   - form-encoded       email=...&source=...    (used by the home page <form>)

import { NextRequest, NextResponse } from "next/server";
import { getClientIp, getCountryFromIp } from "@/lib/utils/ip";
import { subscribeEmail } from "@/lib/db/newsletter";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const contentType = (req.headers.get("content-type") ?? "").toLowerCase();
  const isJson = contentType.includes("application/json");

  // ── 1. Extract email/source from whichever body format was sent ──
  let email: string | undefined;
  let source: string | undefined;

  try {
    if (isJson) {
      const body = (await req.json()) as { email?: unknown; source?: unknown };
      email = typeof body.email === "string" ? body.email : undefined;
      source = typeof body.source === "string" ? body.source : undefined;
    } else {
      const form = await req.formData();
      const e = form.get("email");
      const s = form.get("source");
      email = typeof e === "string" ? e : undefined;
      source = typeof s === "string" ? s : undefined;
    }
  } catch {
    return respond(req, isJson, { ok: false, status: 400, error: "Invalid request body." });
  }

  // ── 2. Validate ──
  if (!email || !EMAIL_RE.test(email.trim())) {
    return respond(req, isJson, { ok: false, status: 400, error: "Please use a valid email." });
  }

  // ── 3. Collect metadata ──
  const ip = getClientIp(req);
  const country = await getCountryFromIp(ip);
  const userAgent = req.headers.get("user-agent");

  // ── 4. Persist ──
  try {
    const result = await subscribeEmail({
      email: email.trim(),
      subscribedAt: new Date().toISOString(),
      ip,
      country,
      source: source ?? "unknown",
      userAgent,
    });

    return respond(req, isJson, {
      ok: true,
      status: 200,
      alreadySubscribed: !result.created,
    });
  } catch (err) {
    console.error("[newsletter] persist error:", err);
    return respond(req, isJson, {
      ok: false,
      status: 500,
      error: "Couldn't save your email — please try again.",
    });
  }
}

// ── helpers ──────────────────────────────────────────────────────────

type RespondOpts =
  | { ok: true; status: number; alreadySubscribed: boolean }
  | { ok: false; status: number; error: string };

/**
 * JSON callers get JSON; form-encoded callers get a 303 redirect back to home
 * with ?subscribed=1 (success), ?subscribed=dup (already subscribed), or
 * ?subscribed=err (failure) so the home page can render a friendly state.
 */
function respond(req: NextRequest, isJson: boolean, opts: RespondOpts) {
  if (isJson) {
    if (opts.ok) {
      return NextResponse.json(
        { ok: true, alreadySubscribed: opts.alreadySubscribed },
        { status: opts.status },
      );
    }
    return NextResponse.json({ ok: false, error: opts.error }, { status: opts.status });
  }

  const flag = opts.ok ? (opts.alreadySubscribed ? "dup" : "1") : "err";
  const url = new URL(`/?subscribed=${flag}#newsletter`, req.url);
  return NextResponse.redirect(url, 303);
}
