// app/issues/page.tsx — Issues index page
// Page header → stats banner → filterable grid → cross-links.

import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import IssuesIndex from "./IssuesIndex";
import { issues } from "@/lib/data/issues";

export const metadata = {
  title: "Issues",
  description:
    "Each issue starts with what most Americans agree on, then maps the disagreements with sources and questions for honest debate.",
};

export default function IssuesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The issues"
        title="What we're actually arguing about."
        lede="Each issue starts with what most Americans already agree on, then maps the disagreements with sources and questions for honest debate. Filter by topic; every entry is footnoted."
      />

      {/* Stats banner */}
      <section className="b-issues-stats">
        <div className="b-issues-stats-row">
          <div className="b-issues-stat">
            <div className="b-issues-stat-num">{issues.length}<span>+</span></div>
            <div className="b-issues-stat-lbl">issues mapped<br />so far</div>
          </div>
          <div className="b-issues-stat">
            <div className="b-issues-stat-num">83<span>%</span></div>
            <div className="b-issues-stat-lbl">average common<br />ground per issue</div>
          </div>
          <div className="b-issues-stat">
            <div className="b-issues-stat-num">100<span>%</span></div>
            <div className="b-issues-stat-lbl">primary-sourced<br />and footnoted</div>
          </div>
          <div className="b-issues-stat b-issues-stat-meta">
            <div className="b-issues-stat-tag">Last updated</div>
            <div className="b-issues-stat-meta-val">May&nbsp;2026</div>
            <div className="b-issues-stat-meta-sub">Next: AI governance · Tariffs</div>
          </div>
        </div>
      </section>

      <IssuesIndex issues={issues} />
      <CrossLinks current="issues" />
    </>
  );
}
