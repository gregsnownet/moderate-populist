// app/talking-points/page.tsx — Talking Points
// Header → House rules → Bridging phrases → Scripts grid → When to walk away → Pocket card → Cross-links

import { Quote, Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import { TALKING_SCRIPTS, BRIDGING_PHRASES, WALK_AWAY_SIGNS } from "@/lib/site-content";
import PocketCardActions from "./PocketCardActions";

export const metadata = {
  title: "Talking Points",
  description:
    "What to say when the conversation gets hard. Common ground first, then a bridge to keep the conversation alive.",
};

const HOUSE_RULES = [
  { num: "Rule 1", title: "Lead with curiosity.",            body: "Ask what they believe and why before you tell them what you believe. People feel heard before they feel persuaded." },
  { num: "Rule 2", title: "Name the shared ground first.",   body: "Almost every fight has common ground hiding underneath. Say it out loud. Then debate the rest." },
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

      {/* Bridging phrases */}
      <section className="b-phrases">
        <div className="b-chapter">
          <div className="b-chapter-num">Bridging phrases</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Universal openers that work everywhere.</div>
        </div>
        <p className="b-section-lede">
          Memorize three. Use them when you don&apos;t know what to say next. They almost never escalate, and they almost always buy you understanding.
        </p>
        <div className="b-phrases-grid">
          {BRIDGING_PHRASES.map((p, i) => (
            <blockquote key={i} className="b-phrase">
              <Quote size={20} strokeWidth={1.4} />
              <p>{p.text}</p>
              <div className="b-phrase-tag">{p.tag}</div>
            </blockquote>
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
          Each card gives you the common ground first, then a bridge to keep the conversation alive. Memorize one. Try it at Thanksgiving.
        </p>
        <div className="b-scripts-grid">
          {TALKING_SCRIPTS.map((s) => (
            <article
              key={s.topic}
              id={s.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="b-script"
            >
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

      {/* When to walk away */}
      <section className="b-walkaway">
        <div className="b-chapter">
          <div className="b-chapter-num">Sometimes</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">When to walk away.</div>
        </div>
        <p className="b-section-lede">
          Not every conversation is a good-faith one. The point of staying in is to find common ground — not to keep playing when the other person isn&apos;t playing the same game.
        </p>
        <div className="b-walkaway-card">
          <div className="b-walkaway-head">
            <Shield size={24} strokeWidth={1.5} />
            <h4>Six warning signs</h4>
          </div>
          <ul>
            {WALK_AWAY_SIGNS.map((s, i) => (
              <li key={i}>
                <span className="b-walkaway-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="b-walkaway-foot">
            When you spot two or more, it&apos;s fine to say:{" "}
            <em>&quot;I don&apos;t think this is going anywhere productive. I&apos;d rather come back to it later.&quot;</em>{" "}
            Then leave.
          </div>
        </div>
      </section>

      {/* Pocket card */}
      <section className="b-pocket">
        <div className="b-pocket-card">
          <div>
            <div className="b-pocket-tag">Printable</div>
            <h3>The pocket card.</h3>
            <p>Print one. Fold it. Put it in your wallet. The next time you find yourself in a conversation you didn&apos;t sign up for, take it out.</p>
          </div>
          <PocketCardActions />
        </div>
      </section>

      <CrossLinks current="talking" />
    </>
  );
}
