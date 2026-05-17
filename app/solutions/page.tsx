// app/solutions/page.tsx — Solutions page
// Start here → 4 Cs → Civic actions ladder → Power gap → Pull quote → Cross-links

import { Check, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import { FOUR_CS, CIVIC_ACTIONS } from "@/lib/site-content";

export const metadata = {
  title: "Solutions",
  description:
    "How to actually do this. The 4 Cs of engagement, a ladder of civic actions, and why participation matters.",
};

const START_STEPS = [
  { num: "01", title: "Listen well",     body: "Most arguments fail at the listening step. Start with curiosity, not a counter-argument." },
  { num: "02", title: "Find the floor",  body: "Almost every issue has shared ground hiding in plain sight. Name it before debating the rest." },
  { num: "03", title: "Show up",         body: "The 3% who attend meetings shape policy for the other 97%. Be the 3%." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="How to actually do this."
        lede="Democracy is not a spectator sport. Below: how to engage productively, what action looks like at every level of effort, and why your participation moves the needle more than you think."
      />

      {/* Start here */}
      <section className="b-start">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 0 · Start here</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">If you do nothing else, do these three.</div>
        </div>
        <div className="b-start-grid">
          {START_STEPS.map((s) => (
            <article key={s.num} className="b-start-card">
              <div className="b-start-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4 Cs */}
      <section className="b-fourcs">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 1 · How to engage</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">The four Cs of democratic engagement.</div>
        </div>
        <p className="b-section-lede">
          How we engage matters as much as what we believe. These four principles guide
          productive dialogue across real differences — and they&apos;re learnable.
        </p>
        <div className="b-fourcs-grid">
          {FOUR_CS.map((c) => (
            <article key={c.letter} className="b-fourc">
              <div className="b-fourc-letter">{c.letter}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Civic actions ladder */}
      <section className="b-civic">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 2 · Show up</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Four ways to actually do this.</div>
        </div>
        <p className="b-section-lede">
          Pick by how much time you have. Repeat. Democracy compounds — most of the
          people who shape policy are not extraordinary, they just showed up.
        </p>
        <ol className="b-civic-list">
          {CIVIC_ACTIONS.map((a, i) => (
            <li key={a.title} className="b-civic-item">
              <div className="b-civic-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="b-civic-body">
                <div className="b-civic-meta">
                  <span className="b-civic-time">{a.time}</span>
                  <span className="b-civic-sep">·</span>
                  <h3>{a.title}</h3>
                </div>
                <p>{a.body}</p>
              </div>
              <div className="b-civic-arrow"><ArrowRight size={18} strokeWidth={1.5} /></div>
            </li>
          ))}
        </ol>
      </section>

      {/* Power gap */}
      <section className="b-power">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 3 · Why it matters</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Democracy is not a spectator sport.</div>
        </div>
        <div className="b-power-grid">
          <div className="b-power-col">
            <div className="b-power-label">The gap you leave</div>
            <ul>
              <li><div className="b-power-num">$4<span>bn</span></div><div>Annual federal lobbying spend</div></li>
              <li><div className="b-power-num">3<span>%</span></div><div>Americans who attend a local meeting</div></li>
              <li><div className="b-power-num">15–27<span>%</span></div><div>Average local election turnout</div></li>
              <li><div className="b-power-num">34<span>×</span></div><div>Corporate vs. citizen advocacy spending</div></li>
            </ul>
          </div>
          <div className="b-power-col b-power-col-light">
            <div className="b-power-label">The power you have</div>
            <ul>
              <li><Check size={20} strokeWidth={2} /><span>One person at a meeting changes decisions.</span></li>
              <li><Check size={20} strokeWidth={2} /><span>A phone call to Congress is logged and counted.</span></li>
              <li><Check size={20} strokeWidth={2} /><span>Grassroots movements rewrote American law.</span></li>
              <li><Check size={20} strokeWidth={2} /><span>Engaged communities get better government.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <PullQuote kicker="The standing offer" attrib="The Moderate Populist">
        The answer isn&apos;t online. It&apos;s in a real conversation with a real neighbor.
      </PullQuote>

      <CrossLinks current="solutions" />
    </>
  );
}
