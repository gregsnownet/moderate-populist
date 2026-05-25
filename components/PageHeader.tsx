// components/PageHeader.tsx
// Slim subpage header — back link, eyebrow, title, lede, horizontal rule.

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  lede,
  backHref = "/",
  backLabel = "Back to Front Page",
}: {
  eyebrow: string;
  title: string;
  lede: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="b-page-header">
      <Link href={backHref} className="b-page-back">
        <ArrowLeft size={14} strokeWidth={1.5} />
        {backLabel}
      </Link>
      <div className="b-page-eyebrow">{eyebrow}</div>
      <h1 className="b-page-title">{title}</h1>
      <p className="b-page-lede">{lede}</p>
      <div className="b-page-rule" />
    </section>
  );
}
