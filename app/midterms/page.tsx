// app/midterms/page.tsx — Midterms 2026 hub
// The single largest civic moment in the site's lifetime. Non-partisan, mechanical, useful.

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PullQuote from "@/components/PullQuote";
import CrossLinks from "@/components/CrossLinks";
import {
  BALLOT_STAKES, MIDTERM_DATES, VOTER_CHECKLIST,
  CANDIDATE_QUESTIONS, MIDTERM_MYTHS, ELECTION_DAY,
} from "@/lib/site-content";
import Countdown from "./Countdown";

export const metadata = {
  title: "Midterms 2026",
  description:
    "What's on the ballot November 3, 2026 — and how to vote it well. Non-partisan: registration, deadlines, down-ballot races, and ten questions to ask any candidate.",
};

export default function MidtermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Midterms · November 3, 2026"
        title="The whole House. A third of the Senate. Most governors."
        lede="This is the largest civic moment of the next two years, and turnout will be roughly two-thirds of a presidential year. That means your vote counts for more, not less. Here's what's on the ballot and how to vote it well — no endorsements, no slate, no team."
      />

      <Countdown targetDate={ELECTION_DAY} />

      {/* What's on the ballot */}
      <section className="b-stakes">
        <div className="b-chapter">
          <div className="b-chapter-num">On the ballot</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">What&apos;s actually being decided.</div>
        </div>
        <div className="b-stakes-grid">
          {BALLOT_STAKES.map((s) => (
            <article key={s.label} className="b-stake">
              <div className="b-stake-num">{s.num}</div>
              <div className="b-stake-label">{s.label}</div>
              <p>{s.sub}</p>
            </article>
          ))}
        </div>
        <p className="b-stakes-note">
          The races furthest down your ballot — county commission, school board, judges, ballot
          measures — are the ones most likely to touch your actual week, and the ones most likely
          to be decided by a margin smaller than the people who skipped them.
        </p>
      </section>

      {/* Your four steps */}
      <section className="b-voter">
        <div className="b-chapter">
          <div className="b-chapter-num">Four steps</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Do these now, not in November.</div>
        </div>
        <div className="b-voter-grid">
          {VOTER_CHECKLIST.map((v) => (
            <article key={v.step} className="b-voter-card">
              <div className="b-voter-step">{v.step}</div>
              <h4>{v.title}</h4>
              <p>{v.body}</p>
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="b-voter-cta">
                {v.cta}
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Key dates */}
      <section className="b-dates">
        <div className="b-chapter">
          <div className="b-chapter-num">Calendar</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Dates that actually bind.</div>
        </div>
        <p className="b-section-lede">
          Deadlines vary by state and the early ones sneak up. Confirm yours with your Secretary
          of State — these are the shapes, not the specifics.
        </p>
        <ol className="b-dates-list">
          {MIDTERM_DATES.map((d) => (
            <li key={d.title}>
              <div className="b-date-when">{d.date}</div>
              <div className="b-date-body">
                <h4>{d.title}</h4>
                <p>{d.note}</p>
              </div>
              <Calendar size={16} strokeWidth={1.4} />
            </li>
          ))}
        </ol>
      </section>

      <PullQuote kicker="The house rule" attrib="The Moderate Populist">
        Vote your ballot, not your team. A straight ticket is a way of not deciding.
      </PullQuote>

      {/* Candidate questions */}
      <section className="b-questions">
        <div className="b-chapter">
          <div className="b-chapter-num">Town hall kit</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Ten questions for any candidate.</div>
        </div>
        <p className="b-section-lede">
          These work on a Democrat, a Republican, an independent, or a candidate for drain
          commissioner. They&apos;re designed to separate people who intend to govern from people
          who intend to perform. Bring two to a town hall.
        </p>
        <ol className="b-questions-list">
          {CANDIDATE_QUESTIONS.map((q) => (
            <li key={q.num} className="b-question">
              <div className="b-question-num">{q.num}</div>
              <div className="b-question-body">
                <div className="b-question-q">&ldquo;{q.q}&rdquo;</div>
                <div className="b-question-why">
                  <span>Why it works</span>
                  {q.why}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Myths */}
      <section className="b-myths">
        <div className="b-chapter">
          <div className="b-chapter-num">Clearing the air</div>
          <div className="b-chapter-rule" />
          <div className="b-chapter-title">Four things people believe that aren&apos;t true.</div>
        </div>
        <div className="b-myths-grid">
          {MIDTERM_MYTHS.map((m, i) => (
            <article key={i} className="b-myth">
              <div className="b-myth-row b-myth-row-was">
                <div className="b-myth-label">Common belief</div>
                <p>{m.myth}</p>
              </div>
              <div className="b-myth-row b-myth-row-is">
                <div className="b-myth-label">What&apos;s true</div>
                <p>{m.truth}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bridge back to the site */}
      <section className="b-midterm-next">
        <div className="b-midterm-next-inner">
          <div className="b-midterm-next-left">
            <div className="b-midterm-next-tag">Before you vote</div>
            <h3>Find out where you actually stand.</h3>
            <p>
              Eight questions, three minutes, no login. Most people are surprised — and it&apos;s a
              better preparation for a ballot than another month of headlines.
            </p>
          </div>
          <Link href="/#stand" className="b-midterm-next-cta">
            Take the stand
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CrossLinks current="issues" />
    </>
  );
}
