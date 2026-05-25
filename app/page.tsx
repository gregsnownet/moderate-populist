// app/page.tsx — Home (front page)
// Slim home: hero → WDYS featured → pull quote → 3 featured issues → newsletter.

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { issues } from "@/lib/data/issues";
import IssueCard from "@/components/IssueCard";
import WhereDoYouStand from "@/components/WhereDoYouStand";
import PullQuote from "@/components/PullQuote";

const featured = issues.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="b-hero-home">
        <div className="b-hero-home-inner">
          <div className="b-hero-eyebrow">
            <span className="b-spectrum-tick" style={{ background: "#2a4d8f" }} />
            <span className="b-spectrum-tick" style={{ background: "currentColor" }} />
            <span className="b-spectrum-tick" style={{ background: "#9c3a2e" }} />
            <span>The civic almanac for the moderate middle</span>
          </div>
          <h1 className="b-h1-home">
            We agree on <span className="b-h1-em">more</span> than we&apos;re told.
          </h1>
          <p className="b-lede-home">
            Most Americans live within one notch of center. The party platforms cluster
            at the edges. Find out where you actually stand — and where you share ground
            with your neighbors.
          </p>
          <div className="b-hero-stats-home">
            <div className="b-hero-stat-home">
              <div className="b-hero-stat-num">83<span>%</span></div>
              <div className="b-hero-stat-lbl">Avg. common ground across issues</div>
            </div>
            <div className="b-hero-stat-home">
              <div className="b-hero-stat-num">68<span>%</span></div>
              <div className="b-hero-stat-lbl">Of Americans within 1σ of center</div>
            </div>
            <div className="b-hero-stat-home">
              <div className="b-hero-stat-num">{issues.length}</div>
              <div className="b-hero-stat-lbl">Issues mapped & sourced</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where Do You Stand (featured) ─── */}
      <section id="stand" className="b-stand b-stand-featured">
        <div className="b-stand-frame">
          <WhereDoYouStand />
        </div>
        <div className="b-stand-foot">
          <span>After you finish:</span>
          <Link href="/issues">Read the issues →</Link>
          <Link href="/talking-points">Get talking points →</Link>
          <Link href="/solutions">Take an action →</Link>
        </div>
      </section>

      {/* ─── Pull quote ─── */}
      <PullQuote kicker="Pew Research · 2024" attrib="American Trends Panel">
        Roughly two-thirds of Americans say the country&apos;s politics doesn&apos;t
        speak for them.
      </PullQuote>

      {/* ─── Featured issues ─── */}
      <section className="b-featured-issues">
        <div className="b-chapter">
          <div className="b-chapter-num">Read next</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Three issues to start with.</div>
        </div>
        <p className="b-featured-lede">
          Each piece begins with what most Americans already agree on, then maps the
          disagreements with sources and questions for honest debate.
        </p>
        <div className="b-issue-grid">
          {featured.map((issue, i) => (
            <IssueCard key={issue.id} issue={issue} index={i} />
          ))}
        </div>
        <div className="b-featured-foot">
          <Link href="/issues" className="b-btn b-btn-outline">
            Read all {issues.length} issues
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── Newsletter ─── */}
      <section id="newsletter" className="b-newsletter">
        <div className="b-news-inner">
          <div className="b-news-mark"><Mail size={32} strokeWidth={1.4} /></div>
          <h3>One thoughtful dispatch.<br />Every other Sunday.</h3>
          <p>
            The week&apos;s clearest evidence, one common-ground spotlight, and a
            conversation prompt to bring to your dinner table. No outrage. No
            subscriptions.
          </p>
          <form className="b-news-form" action="/api/newsletter" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="b-news-input"
              aria-label="Email address"
            />
            <button type="submit" className="b-news-btn">
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
          <div className="b-news-meta">
            Reader-supported. No corporate donors. Unsubscribe anytime.
          </div>
        </div>
      </section>
    </>
  );
}
