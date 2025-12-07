export interface Issue {
  id: string;
  title: string;
  category: string;
  description: string;
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
    facts: Array<{
      statement: string;
      source: string;
      sourceUrl?: string;
    }>;
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
  | "government";
