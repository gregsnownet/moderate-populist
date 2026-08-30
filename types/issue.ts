// types/issue.ts
// Adds optional freshness metadata so fact currency is auditable instead of guessed.
// Every existing issue still type-checks — the new fields are optional.

export interface KeyFact {
  statement: string;
  source: string;
  sourceUrl?: string;
  /** ISO date (YYYY-MM-DD) this fact was last checked against its source.
   *  Surfaced in the UI as "verified <date>". Omit only for facts that
   *  cannot go stale (constitutional text, historical events). */
  verifiedOn?: string;
  /** The period the underlying data covers, e.g. "2024" or "FY2025".
   *  Distinct from verifiedOn: a 2024 figure verified in 2026 is still
   *  honest, it's just the newest available. */
  dataYear?: string;
}

export interface Issue {
  id: string;
  title: string;
  category: string;
  description: string;
  /** ISO date the issue page was last substantively reviewed. */
  lastReviewed?: string;
  explainer: {
    title: string;
    content: string;
  };
  commonGround: {
    title: string;
    points: string[];
    surveySource?: string;
  };
  perspectives: {
    left: {
      title: string;
      points: string[];
    };
    right: {
      title: string;
      points: string[];
    };
  };
  keyFacts: {
    title: string;
    facts: KeyFact[];
  };
  resources: {
    title: string;
    links: Array<{
      title: string;
      description: string;
      url: string;
      source: string;
    }>;
  };
  openQuestions: {
    title: string;
    questions: string[];
  };
}

export type IssueCategory =
  | "economic-opportunity"
  | "education"
  | "healthcare"
  | "affordability"
  | "civic-engagement"
  | "community"
  | "families"
  | "public-safety"
  | "government"
  | "environment"
  | "immigration";
