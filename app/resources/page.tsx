// app/resources/page.tsx — Resources
// Header → Featured → Books → Newsletters/podcasts → Read each side → Orgs → Glossary → Methodology → Submit → Cross-links

import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CrossLinks from "@/components/CrossLinks";
import { RESOURCES, BOOKS, MEDIA_DIET, BALANCED_NEWS, GLOSSARY } from "@/lib/site-content";

export const metadata = {
  title: "Resources",
  description:
    "Where our evidence comes from. Books, newsletters, podcasts, primary sources, and a glossary.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="The shelves we read from."
        lede="We don't ask you to take our word for anything. Every fact on this site is footnoted; every footnote points to one of these sources."
      />

      {/* Featured */}
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
              The original study mapping seven political &quot;tribes&quot; in America. The 67% in the middle — exhausted, frustrated, willing to compromise — is the audience this site is built for.
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
              &quot;Two-thirds of Americans are tired of how polarized we have become. They are exhausted by the negativity, ready to compromise — and ignored by the political conversation.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="b-books">
        <div className="b-chapter">
          <div className="b-chapter-num">On the shelf</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Books for the moderate populist.</div>
        </div>
        <p className="b-section-lede">
          Six books that shaped how this site thinks. Mix of left, right, and orthogonal. Read at least one.
        </p>
        <ul className="b-books-list">
          {BOOKS.map((b, i) => (
            <li key={b.title} className="b-book">
              <div className="b-book-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="b-book-body">
                <div className="b-book-meta">
                  <span className="b-book-author">{b.author}</span>
                  <span className="b-book-year">· {b.year}</span>
                </div>
                <h4>{b.title}</h4>
                <p>{b.blurb}</p>
              </div>
              <a href={b.buy} target="_blank" rel="noopener noreferrer" className="b-book-cta">
                Bookshop
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Media diet */}
      <section className="b-mediadiet">
        <div className="b-chapter">
          <div className="b-chapter-num">Subscribe to better</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Newsletters & podcasts we read.</div>
        </div>
        <p className="b-section-lede">
          The information diet matters more than the meals you skip. These are the regular sources we recommend.
        </p>
        <div className="b-mediadiet-grid">
          {MEDIA_DIET.map((m) => (
            <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className="b-media-card">
              <div className="b-media-kind">{m.kind}</div>
              <div className="b-media-name">{m.name}</div>
              <div className="b-media-by">by {m.by}</div>
              <p>{m.desc}</p>
              <div className="b-media-cta">
                Subscribe <ArrowUpRight size={14} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Balanced news */}
      <section className="b-balanced">
        <div className="b-chapter">
          <div className="b-chapter-num">Read across</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Honest news from each side.</div>
        </div>
        <p className="b-section-lede">
          Information siloing is the disease. The cure is reading a thoughtful voice from a tradition you disagree with — at least once a week.
        </p>
        <div className="b-balanced-grid">
          {BALANCED_NEWS.map((col) => (
            <div key={col.lean} className="b-balanced-col">
              <div className="b-balanced-col-head">{col.lean}</div>
              <ul>
                {col.items.map((it) => (
                  <li key={it.name}>
                    <a href={it.url} target="_blank" rel="noopener noreferrer">
                      <div className="b-balanced-name">
                        {it.name}
                        <ArrowUpRight size={12} strokeWidth={1.6} />
                      </div>
                      <div className="b-balanced-desc">{it.desc}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Orgs / primary sources */}
      <section className="b-resources">
        <div className="b-chapter">
          <div className="b-chapter-num">Primary sources</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Where our evidence comes from.</div>
        </div>
        <p className="b-section-lede">
          These are the polling firms, policy shops, and government databases we draw on across the site. Every fact has a footnote; every footnote points here.
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

      {/* Glossary */}
      <section className="b-glossary">
        <div className="b-chapter">
          <div className="b-chapter-num">Glossary</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Words we use — and what we mean by them.</div>
        </div>
        <dl className="b-glossary-list">
          {GLOSSARY.map((g) => (
            <div key={g.term} className="b-glossary-row">
              <dt>{g.term}</dt>
              <dd>{g.def}</dd>
            </div>
          ))}
        </dl>
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
          <form className="b-submit-form" action="mailto:hello@moderatepopulist.org" method="post" encType="text/plain">
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
