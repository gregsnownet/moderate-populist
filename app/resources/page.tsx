// app/resources/page.tsx — Resources
// Page header → Featured reading → Reading list → Methodology → Submit-a-source → Cross-links

import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import { RESOURCES } from "@/lib/site-content";

export const metadata = {
  title: "Resources",
  description:
    "Where our evidence comes from. Primary sources, polling, policy analysis, and bridging organizations.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="The shelves we read from."
        lede="We don't ask you to take our word for anything. Every fact on this site is footnoted; every footnote points to one of these sources."
      />

      {/* Featured this month */}
      <section className="b-featured-reading">
        <div className="b-feat-tag">
          <span className="b-feat-dot" />
          Featured this month
        </div>
        <div className="b-feat-inner">
          <div className="b-feat-meta">
            <div className="b-feat-source">More in Common · 2024</div>
            <h3>&quot;Hidden Tribes&quot; — the exhausted majority is real.</h3>
            <p>
              The original study mapping seven political &quot;tribes&quot; in America.
              The 67% in the middle — exhausted, frustrated, willing to compromise — is
              the audience this site is built for.
            </p>
            <div className="b-feat-actions">
              <a href="https://hiddentribes.us/" className="b-btn b-btn-primary" target="_blank" rel="noopener noreferrer">
                Read the study
                <ArrowUpRight size={14} />
              </a>
              <a href="#" className="b-btn b-btn-outline">Our summary</a>
            </div>
          </div>
          <div className="b-feat-pull">
            <Quote size={40} strokeWidth={1.2} />
            <p>
              &quot;Two-thirds of Americans are tired of how polarized we have become.
              They are exhausted by the negativity, ready to compromise — and ignored
              by the political conversation.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Reading list */}
      <section className="b-resources">
        <div className="b-chapter">
          <div className="b-chapter-num">External reading</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Where our evidence comes from.</div>
        </div>
        <p className="b-section-lede">
          These are the primary sources we draw on across the site. Every fact has a
          footnote; every footnote points here.
        </p>
        <div className="b-resources-list">
          {RESOURCES.map((group) => (
            <section key={group.cat} className="b-resources-group">
              <div className="b-resources-cat">{group.cat}</div>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <div className="b-resource-name">
                        {item.name}
                        <ArrowUpRight size={14} strokeWidth={1.6} />
                      </div>
                      <div className="b-resource-desc">{item.desc}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="b-methodology">
        <div className="b-chapter">
          <div className="b-chapter-num">Methodology</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">How we count common ground.</div>
        </div>
        <div className="b-method-grid">
          <article>
            <h4>1 · Aggregate</h4>
            <p>We aggregate at least three independent polls per issue, weighted by sample size and recency. Single-source claims don&apos;t make it in.</p>
          </article>
          <article>
            <h4>2 · Define the floor</h4>
            <p>&quot;Common ground&quot; is the percentage of Americans who agree with a specific, plainly-worded statement — across party lines.</p>
          </article>
          <article>
            <h4>3 · Show the gap</h4>
            <p>Disagreement is reported alongside agreement, never hidden. The point isn&apos;t to pretend we agree on everything.</p>
          </article>
          <article>
            <h4>4 · Cite & update</h4>
            <p>Every fact links to its primary source. When evidence changes, the page changes — with a visible note.</p>
          </article>
        </div>
      </section>

      {/* Submit a source */}
      <section className="b-submit">
        <div className="b-submit-inner">
          <div>
            <div className="b-submit-eyebrow">Help us widen the shelf</div>
            <h3>Know a source we&apos;re missing?</h3>
            <p>Reputable polling, primary documents, or bridging organizations — we read everything readers send.</p>
          </div>
          <form className="b-submit-form" action="/api/submit-source" method="post">
            <input
              type="url"
              name="url"
              required
              placeholder="https://example.com/the-source"
              className="b-submit-input"
              aria-label="Source URL"
            />
            <button type="submit" className="b-submit-btn">
              Submit
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>

      <CrossLinks current="resources" />
    </>
  );
}
