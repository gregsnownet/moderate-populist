// components/IssuePage.tsx
// Issue detail page rebuilt for the civic-almanac design system.
// Layout: PageHeader -> Explainer -> Common Ground -> Both-sides -> Key Facts
//         -> Resources -> Open Questions -> Comments -> CrossLinks.

import { Issue } from "@/types/issue";
import {
  Stethoscope, TrendingUp, GraduationCap, Coins, Megaphone,
  Building2, Users, Shield, Sprout, MapPin,
  Check, ExternalLink,
} from "lucide-react";
import PageHeader from "./PageHeader";
import CrossLinks from "./CrossLinks";
import { CommentSection } from "./comments/CommentSection";

const CATEGORY: Record<
  string,
  { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string }
> = {
  "healthcare":             { icon: Stethoscope,    label: "Healthcare" },
  "economic-opportunity":   { icon: TrendingUp,     label: "Economy" },
  "education":              { icon: GraduationCap,  label: "Education" },
  "affordability":          { icon: Coins,          label: "Affordability" },
  "civic-engagement":       { icon: Megaphone,      label: "Civic Dialogue" },
  "community":              { icon: Building2,      label: "Community" },
  "families":               { icon: Users,          label: "Families" },
  "public-safety":          { icon: Shield,         label: "Public Safety" },
  "government":             { icon: Building2,      label: "Government" },
  "environment":            { icon: Sprout,         label: "Environment" },
  "immigration":            { icon: MapPin,         label: "Immigration" },
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function IssuePage({ issue }: { issue: Issue }) {
  const cat = CATEGORY[issue.category] ?? CATEGORY["government"];

  return (
    <>
      <PageHeader
        eyebrow={cat.label}
        title={issue.title}
        lede={issue.description}
        backHref="/issues"
        backLabel="Back to all issues"
      />

      {/* Explainer */}
      <section className="b-issue-detail">
        <div className="b-chapter">
          <div className="b-chapter-num">The challenge</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">{issue.explainer.title}</div>
        </div>
        <div className="b-issue-prose">
          <p>{issue.explainer.content}</p>
        </div>
      </section>

      {/* Common Ground */}
      <section className="b-cg-section">
        <div className="b-chapter">
          <div className="b-chapter-num">Where we agree</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">{issue.commonGround.title}</div>
        </div>
        <ul className="b-cg-list">
          {issue.commonGround.points.map((point, i) => (
            <li key={i}>
              <Check size={18} strokeWidth={1.8} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {issue.commonGround.surveySource && (
          <p className="b-cg-source">
            Source · {issue.commonGround.surveySource}
          </p>
        )}
      </section>

      {/* Both Sides */}
      <section className="b-perspectives">
        <div className="b-chapter">
          <div className="b-chapter-num">Both sides, fairly</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">How each side argues it.</div>
        </div>
        <p className="b-section-lede">
          Understanding the full debate means reading what each side actually
          says, not the caricature of it.
        </p>
        <div className="b-perspectives-grid">
          <article className="b-perspective b-perspective-left">
            <div className="b-perspective-tag">Progressive</div>
            <h3>{issue.perspectives.left.title}</h3>
            <ul>
              {issue.perspectives.left.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
          <article className="b-perspective b-perspective-right">
            <div className="b-perspective-tag">Conservative</div>
            <h3>{issue.perspectives.right.title}</h3>
            <ul>
              {issue.perspectives.right.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Key Facts */}
      <section className="b-facts">
        <div className="b-chapter">
          <div className="b-chapter-num">The evidence</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">{issue.keyFacts.title}</div>
        </div>
        <ol className="b-fact-list">
          {issue.keyFacts.facts.map((fact, i) => (
            <li key={i}>
              <span className="b-fact-num">№ {pad2(i + 1)}</span>
              <div>
                <p className="b-fact-stmt">{fact.statement}</p>
                <p className="b-fact-source">
                  Source ·{" "}
                  {fact.sourceUrl ? (
                    <a href={fact.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {fact.source}
                    </a>
                  ) : (
                    <span>{fact.source}</span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Resources */}
      <section className="b-issue-resources">
        <div className="b-chapter">
          <div className="b-chapter-num">Read deeper</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">{issue.resources.title}</div>
        </div>
        <ul className="b-issue-resources-list">
          {issue.resources.links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <h4>
                  {link.title}
                  <ExternalLink size={14} strokeWidth={1.5} />
                </h4>
                <p>{link.description}</p>
                <span className="b-issue-resources-src">{link.source}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Open Questions */}
      <section className="b-questions">
        <div className="b-chapter">
          <div className="b-chapter-num">Honest questions</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">{issue.openQuestions.title}</div>
        </div>
        <ol className="b-question-list">
          {issue.openQuestions.questions.map((q, i) => (
            <li key={i}>
              <span className="b-q-num">№ {pad2(i + 1)}</span>
              <p>{q}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Comments */}
      <section className="b-issue-comments">
        <CommentSection issueId={issue.id} />
      </section>

      <CrossLinks current="issues" />
    </>
  );
}
