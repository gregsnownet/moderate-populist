"use client";

// components/WhereDoYouStand.tsx
// The signature "Where Do You Stand?" interactive — 8 stance sliders + result map.
// Pure client component: no network calls, no tracking, no persistence.

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { STANCE_QUESTIONS, type StanceQuestion } from "@/lib/stance-questions";

function bucketIndex(v: number): 0 | 1 | 2 {
  if (v < 34) return 0;
  if (v < 67) return 1;
  return 2;
}

function StanceSlider({
  q,
  value,
  onChange,
}: {
  q: StanceQuestion;
  value: number;
  onChange: (v: number) => void;
}) {
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
            min={0}
            max={100}
            value={value}
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
    <div className="wdys-result">
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
    </div>
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
            Eight questions. No accounts, no tracking. Find out where you actually agree
            with your neighbors — and where you don&apos;t.
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

        {isResult && <StanceMap values={values} />}

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
              className="wdys-btn wdys-btn-primary"
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
