"use client";

// app/talking-points/PocketCardActions.tsx
// Client-only print button + PDF download trigger.

import { Bookmark, ArrowUpRight } from "lucide-react";

export default function PocketCardActions() {
  return (
    <div className="b-pocket-actions">
      <button
        type="button"
        className="b-btn b-btn-primary"
        onClick={() => window.print()}
      >
        <Bookmark size={16} strokeWidth={1.5} />
        Print pocket card
      </button>
      <a
        href="/pocket-card.pdf"
        download="moderate-populist-pocket-card.pdf"
        className="b-btn b-btn-outline"
      >
        Download PDF
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
