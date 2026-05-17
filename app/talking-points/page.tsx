// app/talking-points/page.tsx — Talking Points
// Page header → 3 house rules → scripts grid → cross-links

import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import { TALKING_SCRIPTS } from "@/lib/site-content";

export const metadata = {
  title: "Talking Points",
  description:
    "What to say when the conversation gets hard. Common ground first, then a bridge to keep the conversation alive.",
};

const HOUSE_RULES = [
  { num: "Rule 1", title: "Lead with curiosity.",          body: "Ask what they believe and why before you tell them what you believe. People feel heard before they feel persuaded." },
  { num: "Rule 2", title: "Name the shared ground first.", body: "Almost every fight has common ground hiding underneath. Say it out loud. Then debate the rest." },
  { num: "Rule 3", title: "Persuade with stories, not stats.", body: "Numbers move minds slowly. Specific human stories — yours, theirs, neighbors' — move them quickly." },
];

export default function TalkingPointsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talking points"
        title="What to say when it gets hard."
        lede="Real conversations are how the country changes. These scripts give you the common ground first, then a bridge to keep the conversation alive. Memorize one. Try it at Thanksgiving."
      />

      {/* House rules */}
      <section className="b-rules">
        <div className="b-chapter">
          <div className="b-chapter-num">House rules</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Three rules before you use any script.</div>
        </div>
        <div className="b-rules-grid">
          {HOUSE_RULES.map((r) => (
            <article key={r.num} className="b-rule">
              <div className="b-rule-num">{r.num}</div>
              <h4>{r.title}</h4>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Scripts grid */}
      <section className="b-scripts">
        <div className="b-chapter">
          <div className="b-chapter-num">Scripts by topic</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">What to say when the conversation gets hard.</div>
        </div>
        <p className="b-section-lede">
          Each card gives you the common ground first, then a bridge to keep the
          conversation alive. Memorize one. Try it at Thanksgiving.
        </p>
        <div className="b-scripts-grid">
          {TALKING_SCRIPTS.map((s) => (
            <article key={s.topic} className="b-script">
              <div className="b-script-topic">{s.topic}</div>
              <div className="b-script-when">{s.when}</div>
              <div className="b-script-row">
                <div className="b-script-label">Common ground</div>
                <p className="b-script-shared">{s.shared}</p>
              </div>
              <div className="b-script-row">
                <div className="b-script-label">Bridge it</div>
                <p className="b-script-bridge">{s.bridge}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CrossLinks current="talking" />
    </>
  );
}
