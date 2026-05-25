// app/issues/page.tsx — Issues index
// Header → Stats → How to read → Spotlight → Index (filter + grid) → Researching next → Cross-links

import { ArrowRight, Stethoscope, TrendingUp, GraduationCap, Coins, Megaphone, Building2, Sprout, Shield, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import IssuesIndex from "./IssuesIndex";
import { issues } from "@/lib/data/issues";

export const metadata = {
  title: "Issues",
  description:
    "Each issue starts with what most Americans agree on, then maps the disagreements with sources and questions for honest debate.",
};

const READER_STEPS = [
  { num: "01", title: "Start with shared ground.", body: "Every issue page opens with what most Americans agree on. Read this first — it reframes the rest." },
  { num: "02", title: "Hear both perspectives.",   body: "We steelman both sides. If the strongest version of an argument surprises you, that's the point." },
  { num: "03", title: "Check the evidence.",       body: "Every claim links to a primary source. Don't trust us. Check the footnotes." },
];

const UPCOMING = [
  { title: "AI Governance & Regulation", eta: "Jun 2026", note: "Polling aggregation in progress" },
  { title: "Tariffs & Trade Policy",     eta: "Jun 2026", note: "Source review" },
  { title: "Social Security Solvency",   eta: "Jul 2026", note: "Drafting" },
  { title: "Faith and Politics",         eta: "Jul 2026", note: "Reader-requested" },
];

export default function IssuesPage() {
  // Pick a spotlight issue: prefer "affordability" or first issue.
  const spotlight =
    issues.find((i) => i.category === "affordability") ||
    issues.find((i) => i.id.includes("housing")) ||
    issues[0];
  const cgPct = Math.max(70, Math.min(95, 65 + (spotlight.commonGround?.points?.length ?? 5) * 4));
  const gapPct = 100 - cgPct;

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

      {/* How to read */}
      <section className="b-howto">
        <div className="b-chapter">
          <div className="b-chapter-num">Reader&apos;s guide</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">How to read an issue.</div>
        </div>
        <div className="b-howto-grid">
          {READER_STEPS.map((s) => (
            <article key={s.num} className="b-howto-card">
              <div className="b-howto-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Spotlight */}
      <section className="b-spotlight">
        <div className="b-spotlight-card">
          <div className="b-spotlight-left">
            <div className="b-spotlight-tag">Spotlight · This month</div>
            <div className="b-spotlight-icon">
              <Coins size={36} strokeWidth={1.4} />
            </div>
            <div className="b-spotlight-cat">{spotlight.category}</div>
            <h3>{spotlight.title}</h3>
            <p>{spotlight.description}</p>
            <a href={`/issues/${spotlight.id}`} className="b-btn b-btn-primary">
              Read the spotlight
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="b-spotlight-right">
            <div className="b-spotlight-stat-row">
              <div className="b-spotlight-big">{cgPct}<span>%</span></div>
              <div className="b-spotlight-stat-label">
                <div>Common</div>
                <div>ground</div>
              </div>
            </div>
            <div className="b-spotlight-bar">
              <div className="b-spotlight-bar-fill" style={{ width: `${cgPct}%` }} />
              <div className="b-spotlight-bar-gap" style={{ width: `${gapPct}%` }} />
            </div>
            <div className="b-spotlight-meta">
              <div>
                <div className="b-spotlight-meta-num">{gapPct}%</div>
                <div className="b-spotlight-meta-lbl">real disagreement</div>
              </div>
              <div>
                <div className="b-spotlight-meta-num">{spotlight.keyFacts?.facts?.length ?? 8}</div>
                <div className="b-spotlight-meta-lbl">primary sources</div>
              </div>
              <div>
                <div className="b-spotlight-meta-num">7 min</div>
                <div className="b-spotlight-meta-lbl">read time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IssuesIndex issues={issues} />

      {/* Researching next */}
      <section className="b-upcoming">
        <div className="b-chapter">
          <div className="b-chapter-num">Researching next</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">What&apos;s coming.</div>
        </div>
        <p className="b-section-lede">
          These are the issues currently in research. Have one you want us to add? Tell us — readers shape the docket.
        </p>
        <ul className="b-upcoming-list">
          {UPCOMING.map((u) => (
            <li key={u.title}>
              <div className="b-upcoming-eta">{u.eta}</div>
              <div className="b-upcoming-title">{u.title}</div>
              <div className="b-upcoming-note">{u.note}</div>
              <Sparkles size={16} strokeWidth={1.4} />
            </li>
          ))}
        </ul>
        <a href="mailto:hello@moderatepopulist.org?subject=Issue+suggestion" className="b-upcoming-cta">
          Suggest an issue
          <ArrowRight size={14} />
        </a>
      </section>

      <CrossLinks current="issues" />
    </>
  );
}
