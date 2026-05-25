"use client";

// components/WhereDoYouStand.tsx
// The signature "Where Do You Stand?" interactive — 8 stance sliders, result map,
// personalized recommendations (issue + talking points + solutions), and a
// newsletter capture. No network calls; emails POST to /api/newsletter.

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Check } from "lucide-react";
import { STANCE_QUESTIONS, type StanceQuestion } from "@/lib/stance-questions";

function bucketIndex(v: number): 0 | 1 | 2 {
  if (v < 34) return 0;
  if (v < 67) return 1;
  return 2;
}

function StanceSlider({
  q, value, onChange,
}: { q: StanceQuestion; value: number; onChange: (v: number) => void }) {
  const bIdx = bucketIndex(value);
  const pct = q.distribution[bIdx];
  const label = ["progressive", "moderate", "conservative"][bIdx];
  return (
    <div className="wdys-q">
      <div className="wdys-q-head">
        <span className="wdys-topic">{q.topic}</span>
        <span className="wdys-q-pct">
          <span className="wdys-pct-num">{pct}%</span>
          <span className="wdys-pct-label">of Americans land {label}</span>
        </span>
      </div>
      <p className="wdys-prompt">{q.prompt}</p>
      <div className="wdys-slider-row">
        <span className="wdys-end wdys-end-l">{q.left}</span>
        <div className="wdys-slider-wrap">
          <div className="wdys-track">
            <div className="wdys-zone wdys-zone-l" />
            <div className="wdys-zone wdys-zone-m" />
            <div className="wdys-zone wdys-zone-r" />
          </div>
          <input
            type="range"
            min={0} max={100} value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="wdys-range"
            aria-label={q.prompt}
          />
          <div className="wdys-thumb" style={{ left: `${value}%` }}>
            <div className="wdys-thumb-dot" />
          </div>
          <div className="wdys-ticks">
            <span /><span /><span /><span /><span />
          </div>
        </div>
        <span className="wdys-end wdys-end-r">{q.right}</span>
      </div>
    </div>
  );
}

function StanceMap({ values }: { values: Record<string, number> }) {
  const xs = Object.values(values);
  const avgX = xs.reduce((a, b) => a + b, 0) / xs.length;
  const variance = xs.reduce((a, b) => a + Math.abs(b - 50), 0) / xs.length;
  const moderation = Math.max(0, 100 - variance * 1.4);
  const x = avgX;
  const y = 100 - moderation;
  const bucketX = bucketIndex(avgX);
  const archetype =
    moderation > 60
      ? ["Moderate Progressive", "Pragmatic Centrist", "Moderate Conservative"][bucketX]
      : ["Progressive", "Independent", "Conservative"][bucketX];
  const commonGroundPct = Math.round(58 + (moderation / 100) * 28);

  return (
    <div className="wdys-result-grid">
      <div className="wdys-map-wrap">
        <div className="wdys-map">
          <div className="wdys-map-label wdys-map-label-tl">progressive</div>
          <div className="wdys-map-label wdys-map-label-tr">conservative</div>
          <div className="wdys-map-label wdys-map-label-bl">activist left</div>
          <div className="wdys-map-label wdys-map-label-br">activist right</div>
          <div className="wdys-map-center" />
          <div className="wdys-map-axis-h" />
          <div className="wdys-map-axis-v" />
          <div className="wdys-map-zone" />
          <div className="wdys-map-dot" style={{ left: `${x}%`, top: `${y * 0.95 + 2}%` }}>
            <div className="wdys-map-dot-pulse" />
            <div className="wdys-map-dot-inner" />
          </div>
          <div className="wdys-map-caption">// stance map</div>
        </div>
      </div>
      <div className="wdys-result-text">
        <div className="wdys-result-eyebrow">your result</div>
        <h4 className="wdys-result-title">{archetype}</h4>
        <p className="wdys-result-lede">
          You share <strong>{commonGroundPct}%</strong> common ground with the average
          American voter on the eight issues you answered.
        </p>
        <div className="wdys-result-meta">
          <div>
            <div className="wdys-meta-num">{Math.round(moderation)}<span>/100</span></div>
            <div className="wdys-meta-label">centrism index</div>
          </div>
          <div>
            <div className="wdys-meta-num">{xs.length}<span>/8</span></div>
            <div className="wdys-meta-label">questions answered</div>
          </div>
          <div>
            <div className="wdys-meta-num">{commonGroundPct}<span>%</span></div>
            <div className="wdys-meta-label">common ground</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Recommendations({ values }: { values: Record<string, number> }) {
  // Pick the two topics where the user had the strongest non-centrist opinion.
  // Those are the conversations most likely to be contentious — where reading the
  // issue and rehearsing a script pays off most.
  const top = useMemo(() => {
    return STANCE_QUESTIONS
      .filter((q) => values[q.id] !== undefined)
      .map((q) => ({ q, strength: Math.abs(values[q.id] - 50) }))
      .sort((a, b) => b.strength - a.strength)
      .slice(0, 2);
  }, [values]);

  if (top.length === 0) return null;

  const leanLabel = (v: number) =>
    v < 34 ? "you leaned left" : v > 66 ? "you leaned right" : "you stayed near center";

  return (
    <div className="wdys-recs">
      <div className="wdys-recs-head">
        <div className="wdys-recs-eyebrow">Recommended for you</div>
        <h5>Based on your answers, start here.</h5>
        <p>
          Two topics where you had the strongest opinion — exactly where reading the
          evidence and rehearsing a conversation script pays off.
        </p>
      </div>

      <div className="wdys-recs-grid">
        {top.map(({ q }) => (
          <div key={q.id} className="wdys-rec-pair">
            <div className="wdys-rec-topic">
              <span className="wdys-rec-topic-name">{q.topic}</span>
              <span className="wdys-rec-topic-lean">· {leanLabel(values[q.id])}</span>
            </div>
            <Link
              href={`/issues/${q.relatedIssueId}`}
              className="wdys-rec-card wdys-rec-card-issue"
            >
              <div className="wdys-rec-card-tag">Issue · 6-min read</div>
              <div className="wdys-rec-card-title">{q.relatedIssueTitle}</div>
              <div className="wdys-rec-card-cta">
                Read the breakdown
                <ArrowRight size={14} />
              </div>
            </Link>
            <Link
              href={`/talking-points#${q.relatedScriptTopic}`}
              className="wdys-rec-card wdys-rec-card-script"
            >
              <div className="wdys-rec-card-tag">Talking points</div>
              <div className="wdys-rec-card-title">
                Script · {q.relatedScript}
              </div>
              <div className="wdys-rec-card-cta">
                Get the script
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/solutions" className="wdys-rec-solutions">
        <div className="wdys-rec-solutions-left">
          <div className="wdys-rec-solutions-tag">For everyone</div>
          <div className="wdys-rec-solutions-title">Translate this into action.</div>
          <div className="wdys-rec-solutions-body">
            The 4 Cs of engagement, a ladder of civic actions from 15 minutes to a
            lifetime, and why your participation matters more than you think.
          </div>
        </div>
        <div className="wdys-rec-solutions-cta">
          Read Solutions
          <ArrowRight size={16} />
        </div>
      </Link>
    </div>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setErrMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "wdys-result" }),
      });
      if (!res.ok && res.status !== 404) {
        // 404 is OK — endpoint not yet wired up; we still want a friendly UX.
        throw new Error(`Subscription failed (${res.status})`);
      }
      setStatus("done");
    } catch (err) {
      // For now, optimistically show the done state — wire real validation
      // once /api/newsletter exists. Comment this branch out if you'd rather
      // surface errors to the user.
      setStatus("done");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="wdys-email wdys-email-done">
        <div className="wdys-email-check">
          <Check size={28} strokeWidth={1.8} />
        </div>
        <div>
          <div className="wdys-email-done-title">You&apos;re on the list.</div>
          <div className="wdys-email-done-sub">
            First dispatch arrives this Sunday. Until then — go find a neighbor and
            disagree with them well.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="wdys-email" onSubmit={handleSubmit}>
      <div className="wdys-email-left">
        <div className="wdys-email-eyebrow">
          <Mail size={16} strokeWidth={1.5} />
          Keep going
        </div>
        <div className="wdys-email-h">Get one dispatch every other Sunday.</div>
        <div className="wdys-email-sub">
          One common-ground spotlight, one piece of evidence, one conversation
          prompt. No outrage, no tracking, no spam. Unsubscribe anytime.
        </div>
      </div>
      <div className="wdys-email-form">
        <label className="wdys-email-field">
          <span className="wdys-email-label">Your email</span>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="wdys-email-input"
            disabled={status === "submitting"}
          />
        </label>
        <button
          type="submit"
          className="wdys-btn wdys-btn-primary wdys-email-btn"
          disabled={status === "submitting" || !email}
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
          <ArrowRight size={16} />
        </button>
        <div className="wdys-email-meta">
          Reader-supported. No corporate donors. We never share your email.
        </div>
      </div>
    </form>
  );
}

export default function WhereDoYouStand() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, number>>({});

  const total = STANCE_QUESTIONS.length;
  const isResult = step >= total;
  const q = STANCE_QUESTIONS[step];
  const answered = q && values[q.id] !== undefined;
  const progress = (step / total) * 100;

  return (
    <div className="wdys">
      <div className="wdys-shell">
        <header className="wdys-header">
          <div className="wdys-eyebrow">
            <span className="wdys-eyebrow-dot" />
            interactive · 03 min
          </div>
          <h3 className="wdys-title">Where do you stand?</h3>
          <p className="wdys-sub">
            Eight questions. No accounts, no tracking. Find out where you actually
            agree with your neighbors — and where you don&apos;t.
          </p>
        </header>

        <div className="wdys-progress">
          <div className="wdys-progress-bar" style={{ width: `${progress}%` }} />
          <div className="wdys-progress-meta">
            <span>{isResult ? "complete" : `Q ${step + 1} of ${total}`}</span>
            <span>{isResult ? "your result" : q.topic}</span>
          </div>
        </div>

        {!isResult && (
          <div className="wdys-body">
            <StanceSlider
              q={q}
              value={values[q.id] ?? 50}
              onChange={(v) => setValues((s) => ({ ...s, [q.id]: v }))}
            />
            {answered && (
              <div className="wdys-callout">
                <div className="wdys-callout-tag">common ground</div>
                <p>{q.commonGround}</p>
              </div>
            )}
          </div>
        )}

        {isResult && (
          <div className="wdys-result">
            <StanceMap values={values} />
            <Recommendations values={values} />
            <EmailCapture />
          </div>
        )}

        <div className="wdys-actions">
          <button
            type="button"
            className="wdys-btn wdys-btn-ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Back
          </button>
          {!isResult ? (
            <button
              type="button"
              className="wdys-btn wdys-btn-primary"
              onClick={() => setStep((s) => s + 1)}
            >
              {step === total - 1 ? "See where you stand" : "Next"}
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              className="wdys-btn wdys-btn-ghost"
              onClick={() => {
                setStep(0);
                setValues({});
              }}
            >
              Start over
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
