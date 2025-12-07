import { Resource } from "@/types/resource";

export const resources: Resource[] = [
  // Sample Article
  {
    id: "healthcare-costs-analysis",
    title: "Why Healthcare Costs Are So High in America",
    type: "article",
    description: "An in-depth analysis of the factors driving healthcare costs in the United States, comparing with other developed nations.",
    url: "https://example.com/healthcare-costs",
    source: "Health Affairs",
    author: "Example Author",
    publishedDate: "2024-01-15",
    categories: ["healthcare"],
    tags: ["costs", "insurance", "policy"],
    featured: true
  },
  // Sample Podcast
  {
    id: "economic-opportunity-podcast",
    title: "The Future of Work in America",
    type: "podcast",
    description: "A conversation about automation, job training, and creating economic opportunity in a changing economy.",
    url: "https://example.com/podcast-episode",
    source: "NPR Planet Money",
    publishedDate: "2024-02-20",
    categories: ["economic-opportunity"],
    tags: ["jobs", "automation", "education"],
    featured: false
  },
  // Sample Research
  {
    id: "education-equity-study",
    title: "School Funding and Student Outcomes",
    type: "research",
    description: "Peer-reviewed study examining the relationship between school funding levels and student achievement across different communities.",
    url: "https://example.com/research-paper",
    source: "American Educational Research Journal",
    author: "Research Team",
    publishedDate: "2023-11-10",
    categories: ["education"],
    tags: ["funding", "equity", "achievement"],
    featured: false
  },
  // Sample Affordability - Housing
  {
    id: "housing-crisis-explained",
    title: "Understanding America's Housing Affordability Crisis",
    type: "article",
    description: "Comprehensive analysis of why housing has become unaffordable, examining supply constraints, zoning laws, and wage stagnation.",
    url: "https://example.com/housing-crisis",
    source: "Harvard Joint Center for Housing Studies",
    author: "Housing Research Team",
    publishedDate: "2024-03-15",
    categories: ["affordability"],
    tags: ["housing", "rent", "homeownership", "zoning"],
    featured: true
  },
  // Sample Affordability - Cost of Living
  {
    id: "cost-of-living-podcast",
    title: "The Real Cost of Living in America",
    type: "podcast",
    description: "Deep dive into rising costs of groceries, childcare, utilities, and how families are coping with inflation and stagnant wages.",
    url: "https://example.com/cost-of-living-podcast",
    source: "NPR Marketplace",
    publishedDate: "2024-04-10",
    categories: ["affordability"],
    tags: ["cost of living", "inflation", "childcare", "groceries"],
    featured: false
  },

  // Add your actual resources below following the same structure:
  // {
  //   id: "unique-slug-for-resource",
  //   title: "Resource Title",
  //   type: "article" | "podcast" | "video" | "research",
  //   description: "Brief description of what this resource covers",
  //   url: "https://actual-url.com",
  //   source: "Publication/Source Name",
  //   author: "Author Name (optional)",
  //   publishedDate: "YYYY-MM-DD (optional)",
  //   categories: ["healthcare", "economic-opportunity", etc.],
  //   tags: ["relevant", "topic", "tags"],
  //   featured: true/false (shows on homepage if true)
  // },
];

export function getResourceById(id: string): Resource | undefined {
  return resources.find(resource => resource.id === id);
}

export function getResourcesByType(type: string): Resource[] {
  return resources.filter(resource => resource.type === type);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(resource => resource.categories.includes(category as any));
}

export function getFeaturedResources(): Resource[] {
  return resources.filter(resource => resource.featured === true);
}

export function getAllResourceTypes(): string[] {
  return Array.from(new Set(resources.map(r => r.type)));
}

export function getAllResourceCategories(): string[] {
  return Array.from(new Set(resources.flatMap(r => r.categories)));
}
