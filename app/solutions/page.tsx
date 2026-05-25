// app/solutions/page.tsx — Solutions
// Header → Start → 4 Cs → Civic actions → Find your rep → Templates → Success story → Power → What NOT to do → Pull quote → Cross-links

import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import { FOUR_CS, CIVIC_ACTIONS, REP_TOOLS, DONT_DO, TEMPLATES } from "@/lib/site-content";
import CopyButton from "./CopyButton";

export const metadata = {
  title: "Solutions",
  description:
    "How to actually do this. The 4 Cs of engagement, civic actions, tools to find your rep, templates, and what NOT to do.",
};

const START_STEPS = [
  { num: "01", title: "Listen well",    body: "Most arguments fail at the listening step. Start with curiosity, not a counter-argument." },
  { num: "02", title: "Find the floor", body: "Almost every issue has shared ground hiding in plain sight. Name it before debating the rest." },
  { num: "03", title: "Show up",        body: "The 3% who attend meetings shape policy for the other 97%. Be the 3%." },
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
          How we engage matters as much as what we believe. These four principles guide productive dialogue across real differences — and they&apos;re learnable.
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
          Pick by how much time you have. Repeat. Democracy compounds — most of the people who shape policy are not extraordinary, they just showed up.
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

      {/* Find your rep */}
      <section className="b-tools">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 2½ · Tools</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Find your representatives. Now.</div>
        </div>
        <p className="b-section-lede">
          Action dies in friction. These are the four tools that get you from intention to phone call in under five minutes.
        </p>
        <div className="b-tools-grid">
          {REP_TOOLS.map((t) => (
            <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="b-tool-card">
              <div className="b-tool-time">{t.time}</div>
              <div className="b-tool-name">
                {t.name}
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </div>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="b-templates">
        <div className="b-chapter">
          <div className="b-chapter-num">Fill-in-the-blank</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Templates that actually get used.</div>
        </div>
        <p className="b-section-lede">
          Copy, edit the bracketed parts, send. Reps&apos; offices count every call and email — including yours.
        </p>
        <div className="b-templates-grid">
          {TEMPLATES.map((t) => (
            <article key={t.title} className="b-template">
              <div className="b-template-kind">{t.kind}</div>
              <h4>{t.title}</h4>
              <pre className="b-template-body">{t.body}</pre>
              <CopyButton text={t.body} />
            </article>
          ))}
        </div>
      </section>

      {/* Success story */}
      <section className="b-story">
        <div className="b-story-card">
          <div className="b-story-tag">One story · How this works</div>
          <div className="b-story-grid">
            <div className="b-story-stat">
              <div className="b-story-stat-num">12</div>
              <div className="b-story-stat-lbl">neighbors showed up</div>
            </div>
            <div className="b-story-body">
              <h4>When 12 people changed a zoning law in Cleveland.</h4>
              <p>
                In 2023, a coalition of 12 residents — left-leaning renters and right-leaning homeowners — co-authored a letter to their planning commission requesting a duplex-and-ADU allowance on a corridor that had been single-family-only since 1957. The board, which normally hears from no one, approved it 5–2.
              </p>
              <p className="b-story-lesson">
                <strong>The lesson:</strong> 12 organized neighbors beat $3M of zoning-lobby money. Common-ground coalitions can change policy at the local level in 90 days.
              </p>
            </div>
          </div>
        </div>
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

      {/* What NOT to do */}
      <section className="b-dontdo">
        <div className="b-chapter">
          <div className="b-chapter-num">§ 4 · The other half</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">What not to do.</div>
        </div>
        <p className="b-section-lede">
          Doing the wrong thing eagerly is worse than doing nothing. If you only follow one list on this page, follow this one.
        </p>
        <ol className="b-dontdo-list">
          {DONT_DO.map((d) => (
            <li key={d.num} className="b-dontdo-item">
              <div className="b-dontdo-num">{d.num}</div>
              <div>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PullQuote kicker="The standing offer" attrib="The Moderate Populist">
        The answer isn&apos;t online. It&apos;s in a real conversation with a real neighbor.
      </PullQuote>

      <CrossLinks current="solutions" />
    </>
  );
}
