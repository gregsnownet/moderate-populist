export type ResourceType = 'article' | 'podcast' | 'video' | 'research';

export type ResourceCategory =
  | 'healthcare'
  | 'economic-opportunity'
  | 'education'
  | 'affordability'
  | 'civic-engagement'
  | 'community'
  | 'families'
  | 'public-safety'
  | 'government'
  | 'general';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  url: string;
  source: string;
  author?: string;
  publishedDate?: string;
  categories: ResourceCategory[];
  tags?: string[];
  featured?: boolean;
}
