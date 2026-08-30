"use client";

// app/midterms/Countdown.tsx
// Live days-until-Election-Day strip. Renders a stable placeholder on the
// server so hydration doesn't mismatch, then swaps in the real count on the
// client. useSyncExternalStore gives us that without a setState-in-effect.

import { useSyncExternalStore } from "react";

function daysUntil(target: string) {
  const now = new Date();
  const then = new Date(`${target}T00:00:00`);
  const ms = then.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / 86_400_000));
}

// Module-scope so the reference is stable across renders.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

const serverSnapshot = () => null;

export default function Countdown({ targetDate }: { targetDate: string }) {
  const days = useSyncExternalStore(
    subscribe,
    () => daysUntil(targetDate),
    serverSnapshot,
  );

  const past = days === 0;

  return (
    <section className="b-countdown">
      <div className="b-countdown-inner">
        <div className="b-countdown-left">
          <div className="b-countdown-dot" />
          <span>Election Day · Tuesday, November 3, 2026</span>
        </div>
        <div className="b-countdown-right">
          <span className="b-countdown-num">{days === null ? "—" : days}</span>
          <span className="b-countdown-unit">
            {past ? "today — go vote" : days === 1 ? "day to go" : "days to go"}
          </span>
        </div>
      </div>
    </section>
  );
}
