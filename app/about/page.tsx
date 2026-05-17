// app/about/page.tsx — About
// Page header → Why this exists → Mission → Values → Standards → Community → Pull quote → Cross-links

import { Check, Mail, Megaphone, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import { VALUES, STANDARDS, ICONS } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "Who we are and what we're for. A reader-supported civic almanac for the exhausted majority.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Who we are and what we're for."
        lede="A one-person effort, built with care, for Americans who refuse to be caricatured by their politics."
      />

      {/* Why this exists */}
      <section className="b-why">
        <div className="b-chapter">
          <div className="b-chapter-num">Why this exists</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">A short version of a long story.</div>
        </div>
        <div className="b-why-grid">
          <div className="b-why-text">
            <p className="b-why-lede">
              Most of us are tired. Tired of being asked to hate our neighbors. Tired
              of headlines that flatten every conversation into a fight. Tired of
              feeling like the only sane person in the room.
            </p>
            <p>
              This site is for people who refuse to be caricatured by their politics.
              Who think most Americans want roughly the same things — safe communities,
              good schools, affordable lives, a country that works — and who suspect
              the political conversation has been rigged against finding them.
            </p>
            <p>
              It is built by one person, with the help of a large language model, for
              the rest of us. There is no investor, no donor class, no editorial board
              with an agenda. There is one citizen who got tired of waiting for someone
              else to make this.
            </p>
          </div>
          <aside className="b-why-pulls">
            <blockquote>
              <div className="b-why-pull-label">Not</div>
              <p>A pundit shop. A campaign. A movement. A platform with a &quot;vibe.&quot;</p>
            </blockquote>
            <blockquote>
              <div className="b-why-pull-label">But</div>
              <p>A reader-supported civic almanac. Independent. Non-partisan. Evidence-based.</p>
            </blockquote>
            <blockquote>
              <div className="b-why-pull-label">For</div>
              <p>The exhausted majority — and anyone willing to disagree without contempt.</p>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* Mission */}
      <section className="b-mission">
        <div className="b-mission-grid">
          <div>
            <div className="b-chapter-num">Our mission</div>
            <h2 className="b-mission-h">
              A reader-supported civic almanac for people who refuse the caricature.
            </h2>
          </div>
          <div className="b-mission-body">
            <p>We are not centrists by default. We are centrists by evidence — and we&apos;ll change our minds when the data does.</p>
            <p>We are a one-person effort (with the help of a large language model) trying to help Americans find new ways of communicating, expressing, and respecting our differences.</p>
            <p>This site does not exist to win an argument. It exists to keep the conversation alive.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="b-values">
        <div className="b-chapter">
          <div className="b-chapter-num">What we believe</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Eight common-sense commitments.</div>
        </div>
        <p className="b-section-lede">
          Each of these holds majority support across both parties — yet our politics
          caricatures every one of them. The point of this paper is to refuse the caricature.
        </p>
        <div className="b-values-grid">
          {VALUES.map((v) => {
            const Ico = ICONS[v.icon];
            return (
              <article key={v.title} className="b-value">
                <div className="b-value-head">
                  <span className="b-value-num">{v.num}</span>
                  <Ico size={22} strokeWidth={1.5} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
                <div className="b-value-foot">
                  <span className="b-value-badge">
                    <Check size={12} strokeWidth={2.2} /> majority position
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="b-standards">
        <div className="b-chapter">
          <div className="b-chapter-num">How we work</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Standards we hold ourselves to.</div>
        </div>
        <div className="b-standards-grid">
          {STANDARDS.map((s) => {
            const Ico = ICONS[s.icon];
            return (
              <article key={s.title} className="b-standard">
                <Ico size={28} strokeWidth={1.4} />
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Community */}
      <section className="b-community">
        <div className="b-community-inner">
          <div className="b-chapter b-chapter-light">
            <div className="b-chapter-num">Community</div>
            <div className="b-chapter-rule" />
            <div className="b-chapter-title">Find us. Tell us. Help us.</div>
          </div>
          <div className="b-community-grid">
            <article>
              <div className="b-community-icon"><Mail size={24} strokeWidth={1.4} /></div>
              <h4>Write us</h4>
              <p>Corrections, tips, questions, story ideas. We read everything.</p>
              <a href="mailto:hello@moderatepopulist.org">hello@moderatepopulist.org</a>
            </article>
            <article>
              <div className="b-community-icon"><Megaphone size={24} strokeWidth={1.4} /></div>
              <h4>Suggest a topic</h4>
              <p>An issue you want us to map. A blind spot you&apos;ve noticed. A perspective we&apos;re missing.</p>
              <a href="mailto:hello@moderatepopulist.org?subject=Topic+suggestion">Send a suggestion →</a>
            </article>
            <article>
              <div className="b-community-icon"><Users size={24} strokeWidth={1.4} /></div>
              <h4>Support the work</h4>
              <p>No corporate donors means we rely on readers. One-time or monthly, every bit helps.</p>
              <a href="#">Become a supporter →</a>
            </article>
          </div>
        </div>
      </section>

      <PullQuote kicker="Editor's note" attrib="The Moderate Populist">
        We are not centrists by default. We are centrists by <em>evidence</em> — and we&apos;ll change our minds when the data does.
      </PullQuote>

      <CrossLinks current="about" />
    </>
  );
}
