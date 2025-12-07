export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  category: ArticleCategory;
  tags: string[];
  summary: string;
  content: string; // Full article content in markdown or plain text
  featured?: boolean;
  readTime?: number; // in minutes
}

export type ArticleCategory =
  | 'government'
  | 'politics'
  | 'technology'
  | 'economy'
  | 'society'
  | 'international'
  | 'opinion';
