// app/changed-our-minds/page.tsx
// The receipts page. We claim "centrists by evidence" — this proves it.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import { CHANGED_MINDS } from "@/lib/site-content";

export const metadata = {
  title: "Where We Changed Our Minds",
  description:
    "A running log of positions this site revised when the evidence moved. Public, dated, and with the original wording intact.",
};

export default function ChangedOurMindsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Receipts"
        title="Where we changed our minds."
        lede="We say we're centrists by evidence rather than by default. That claim is worthless without a public record of the times evidence actually moved us. This is that record — dated, specific, and with the original wording preserved."
      />

      <section className="b-changed">
        <ol className="b-changed-list">
          {CHANGED_MINDS.map((c, i) => (
            <li key={i} className="b-changed-item">
              <div className="b-changed-side">
                <div className="b-changed-date">{c.date}</div>
                <div className="b-changed-topic">{c.topic}</div>
              </div>
              <div className="b-changed-body">
                <div className="b-changed-row b-changed-was">
                  <div className="b-changed-label">What we said</div>
                  <p>{c.was}</p>
                </div>
                <div className="b-changed-row b-changed-now">
                  <div className="b-changed-label">What we say now</div>
                  <p>{c.now}</p>
                </div>
                <div className="b-changed-trigger">
                  <span>What changed it</span>
                  {c.trigger}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PullQuote kicker="The standard" attrib="The Moderate Populist">
        A position you would never revise isn&apos;t a conclusion. It&apos;s a loyalty.
      </PullQuote>

      <section className="b-changed-invite">
        <div className="b-changed-invite-inner">
          <div>
            <div className="b-changed-invite-tag">Hold us to it</div>
            <h3>Think we&apos;ve got something wrong?</h3>
            <p>
              Tell us, with a source. Corrections happen in public on this page, with the original
              wording left visible. That&apos;s the whole point.
            </p>
          </div>
          <Link
            href="mailto:hello@moderatepopulist.org?subject=You+got+this+wrong"
            className="b-changed-invite-cta"
          >
            Send a correction
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CrossLinks current="about" />
    </>
  );
}
