// app/about/page.tsx — About
// Header → Why → Creator note → Mission → Values → Standards → FAQ → Contribute → Privacy → Community → Pull quote → Cross-links

import { Check, Mail, Megaphone, Users, Plus, Bookmark } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import { VALUES, STANDARDS, FAQ, ICONS } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "Who we are and what we're for. A reader-supported civic almanac for the exhausted majority.",
};

const CONTRIBUTE = [
  { icon: Megaphone, title: "Suggest a topic",        desc: "Issues you want mapped. Blind spots you've noticed. Perspectives we're missing.", cta: "Send a suggestion", subject: "Topic suggestion" },
  { icon: Check,     title: "Submit a correction",   desc: "If we got something wrong, tell us. Corrections happen in public, with sources.",   cta: "Report a correction", subject: "Correction" },
  { icon: Bookmark,  title: "Recommend a source",    desc: "Polling, primary documents, bridging organizations. We read everything readers send.", cta: "Suggest a resource", subject: "Source recommendation" },
  { icon: Users,     title: "Write for us",          desc: "Have a perspective you think we're missing? Pitch a guest essay.",                  cta: "Pitch an essay", subject: "Essay pitch" },
];

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
              Most of us are tired. Tired of being asked to hate our neighbors. Tired of headlines that flatten every conversation into a fight. Tired of feeling like the only sane person in the room.
            </p>
            <p>
              This site is for people who refuse to be caricatured by their politics. Who think most Americans want roughly the same things — safe communities, good schools, affordable lives, a country that works — and who suspect the political conversation has been rigged against finding them.
            </p>
            <p>
              It is built by one person, with the help of a large language model, for the rest of us. There is no investor, no donor class, no editorial board with an agenda. There is one citizen who got tired of waiting for someone else to make this.
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

      {/* Creator note */}
      <section className="b-creator">
        <div className="b-creator-card">
          <div className="b-creator-left">
            <div className="b-creator-portrait" aria-hidden="true">MP</div>
            <div className="b-creator-byline">
              <div className="b-creator-name">A note from the editor</div>
              <div className="b-creator-role">Founder · The Moderate Populist</div>
            </div>
          </div>
          <div className="b-creator-body">
            <p>
              Hi. I&apos;m one person. I started this site because I got tired of feeling like every political conversation in my life was rigged — by social media, by cable news, by people I love repeating slogans I knew they didn&apos;t fully believe.
            </p>
            <p>
              I&apos;m not a journalist. I&apos;m not a pundit. I&apos;m an American who refuses to accept that being in the middle means being passive. If that sounds like you, you&apos;re in the right place.
            </p>
            <p>
              Read what we publish. Argue with it. Tell me where I&apos;m wrong. The newsletter goes out every other Sunday, and every email I get from a reader gets answered.
            </p>
            <div className="b-creator-sign">
              <em>— The Editor</em>
            </div>
          </div>
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
          Each of these holds majority support across both parties — yet our politics caricatures every one of them. The point of this paper is to refuse the caricature.
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

      {/* FAQ */}
      <section className="b-faq">
        <div className="b-chapter">
          <div className="b-chapter-num">FAQ</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Questions readers ask first.</div>
        </div>
        <div className="b-faq-list">
          {FAQ.map((f, i) => (
            <details key={i} className="b-faq-item">
              <summary>
                <span className="b-faq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="b-faq-q">{f.q}</span>
                <Plus size={18} strokeWidth={1.6} className="b-faq-icon" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contribute */}
      <section className="b-contribute">
        <div className="b-chapter">
          <div className="b-chapter-num">Contribute</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Help us widen the conversation.</div>
        </div>
        <p className="b-section-lede">
          This site gets better when readers push back, send things, and pitch in. Four ways.
        </p>
        <div className="b-contribute-grid">
          {CONTRIBUTE.map((w) => {
            const Ico = w.icon;
            return (
              <article key={w.title} className="b-contribute-card">
                <Ico size={24} strokeWidth={1.5} />
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
                <a href={`mailto:hello@moderatepopulist.org?subject=${encodeURIComponent(w.subject)}`} className="b-contribute-cta">
                  {w.cta}
                  <Mail size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Privacy */}
      <section className="b-privacy">
        <div className="b-chapter">
          <div className="b-chapter-num">Privacy</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">What we don&apos;t do with your data.</div>
        </div>
        <div className="b-privacy-grid">
          <div className="b-privacy-text">
            <p className="b-privacy-lede">
              We don&apos;t track you. We don&apos;t sell anything about you. We don&apos;t run ads. We don&apos;t share your email with anyone, ever.
            </p>
            <p>
              If you subscribe to the newsletter, we collect your email address. We use it only to send the newsletter. You can unsubscribe in one click. If you do, we delete the email.
            </p>
            <p>
              This site uses no third-party analytics, no tracking pixels, no fingerprinting scripts. The server logs whether the page loaded — we use that to know if we broke anything. No user profile is built.
            </p>
          </div>
          <ul className="b-privacy-checklist">
            <li><Check size={16} strokeWidth={2} /> No tracking pixels</li>
            <li><Check size={16} strokeWidth={2} /> No ads or sponsors</li>
            <li><Check size={16} strokeWidth={2} /> No data sold or shared</li>
            <li><Check size={16} strokeWidth={2} /> No profile built</li>
            <li><Check size={16} strokeWidth={2} /> One-click unsubscribe</li>
          </ul>
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
