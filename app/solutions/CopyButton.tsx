"use client";

// app/solutions/CopyButton.tsx
// Tiny client component for the copy-to-clipboard button on templates.

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable; ignore */
    }
  }

  return (
    <button type="button" className="b-template-copy" onClick={handleCopy}>
      {copied ? (
        <>
          Copied <Check size={14} />
        </>
      ) : (
        <>
          Copy to clipboard <ArrowRight size={14} />
        </>
      )}
    </button>
  );
}
