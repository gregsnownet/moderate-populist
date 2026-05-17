// components/PullQuote.tsx
// Editorial pull-quote band. Use sparingly between sections.

import { Quote } from "lucide-react";

export default function PullQuote({
  children,
  attrib,
  kicker,
}: {
  children: React.ReactNode;
  attrib?: string;
  kicker?: string;
}) {
  return (
    <section className="b-pullquote">
      <div className="b-pq-inner">
        {kicker && <div className="b-pq-kicker">{kicker}</div>}
        <blockquote>
          <Quote size={40} strokeWidth={1.2} />
          <span>{children}</span>
        </blockquote>
        {attrib && <div className="b-pq-attrib">— {attrib}</div>}
      </div>
    </section>
  );
}
