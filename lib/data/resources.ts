import { Resource } from "@/types/resource";

export const resources: Resource[] = [
  // Centrist / non-partisan news and analysis
  {
    id: "tangle-news",
    title: "Tangle — Politics from the Center",
    type: "article",
    description: "A daily independent, centrist newsletter that walks through one political story per day from both the left and right perspective before offering its own take.",
    url: "https://www.readtangle.com",
    source: "Tangle News",
    author: "Isaac Saul",
    categories: ["general"],
    tags: ["centrist", "newsletter", "daily", "bipartisan"],
    featured: true
  },
  {
    id: "tangle-podcast",
    title: "Tangle Podcast",
    type: "podcast",
    description: "Audio version of the Tangle daily newsletter — covers one major political story with left, right, and centrist perspectives.",
    url: "https://www.readtangle.com/podcasts",
    source: "Tangle News",
    categories: ["general"],
    tags: ["centrist", "daily", "perspectives"],
    featured: true
  },

  // Healthcare
  {
    id: "kff-health-policy",
    title: "KFF Health Policy Research",
    type: "research",
    description: "Independent, non-partisan source for health policy research, polling, and journalism — the most-cited source for U.S. healthcare statistics.",
    url: "https://www.kff.org/health-policy/",
    source: "KFF (Kaiser Family Foundation)",
    categories: ["healthcare"],
    tags: ["healthcare", "polling", "policy", "non-partisan"],
    featured: true
  },
  {
    id: "peterson-kff-health-tracker",
    title: "Peterson-KFF Health System Tracker",
    type: "research",
    description: "Non-partisan analysis comparing U.S. healthcare performance internationally on cost, access, and outcomes.",
    url: "https://www.healthsystemtracker.org",
    source: "Peterson-KFF",
    categories: ["healthcare"],
    tags: ["healthcare", "international comparison", "costs"]
  },

  // Economy / federal budget
  {
    id: "cbo-budget-outlook",
    title: "CBO Budget and Economic Outlook",
    type: "research",
    description: "The Congressional Budget Office's official non-partisan analysis of federal spending, revenue, and the long-term fiscal trajectory.",
    url: "https://www.cbo.gov/topics/budget",
    source: "Congressional Budget Office",
    categories: ["economic-opportunity"],
    tags: ["budget", "deficit", "non-partisan", "fiscal"],
    featured: true
  },
  {
    id: "crfb-fiscal-tracker",
    title: "Committee for a Responsible Federal Budget",
    type: "article",
    description: "Non-partisan analysis and tracking of federal budget proposals, deficits, and fiscal sustainability.",
    url: "https://www.crfb.org",
    source: "Committee for a Responsible Federal Budget",
    categories: ["economic-opportunity"],
    tags: ["budget", "deficit", "non-partisan"]
  },
  {
    id: "bls-economic-data",
    title: "Bureau of Labor Statistics",
    type: "research",
    description: "Authoritative federal data on employment, wages, inflation, and productivity — the source most economists rely on.",
    url: "https://www.bls.gov",
    source: "U.S. Bureau of Labor Statistics",
    categories: ["economic-opportunity"],
    tags: ["jobs", "wages", "inflation", "data"]
  },

  // Housing / affordability
  {
    id: "harvard-housing-studies",
    title: "Harvard Joint Center for Housing Studies",
    type: "research",
    description: "Annual State of the Nation's Housing reports and ongoing research on affordability, supply, and rental markets.",
    url: "https://www.jchs.harvard.edu",
    source: "Joint Center for Housing Studies of Harvard University",
    categories: ["affordability"],
    tags: ["housing", "rent", "affordability", "research"],
    featured: true
  },

  // Public opinion / political analysis
  {
    id: "pew-politics",
    title: "Pew Research — Politics & Policy",
    type: "research",
    description: "Non-partisan polling and demographic research on American political views, civic engagement, and policy attitudes.",
    url: "https://www.pewresearch.org/topic/politics-policy/",
    source: "Pew Research Center",
    categories: ["civic-engagement", "general"],
    tags: ["polling", "public opinion", "non-partisan"],
    featured: true
  },
  {
    id: "more-in-common-hidden-tribes",
    title: "More in Common — Hidden Tribes",
    type: "research",
    description: "Landmark study of America's hidden political tribes, showing that the loudest partisan voices don't reflect most Americans.",
    url: "https://hiddentribes.us",
    source: "More in Common",
    categories: ["civic-engagement"],
    tags: ["polarization", "common ground", "research"]
  },

  // Foreign policy
  {
    id: "cfr-backgrounders",
    title: "CFR Backgrounders",
    type: "article",
    description: "Non-partisan explainers from the Council on Foreign Relations on every major foreign policy and national security issue.",
    url: "https://www.cfr.org/backgrounder",
    source: "Council on Foreign Relations",
    categories: ["general"],
    tags: ["foreign policy", "national security", "explainer"]
  },

  // Civic engagement / democracy
  {
    id: "ballotpedia",
    title: "Ballotpedia — The Encyclopedia of American Politics",
    type: "research",
    description: "Non-partisan encyclopedia covering U.S. politicians, elections, ballot measures, and policy at every level of government.",
    url: "https://ballotpedia.org",
    source: "Ballotpedia",
    categories: ["civic-engagement"],
    tags: ["elections", "officials", "ballot measures", "non-partisan"]
  },
  {
    id: "fairvote-rcv",
    title: "FairVote — Electoral Reform",
    type: "article",
    description: "Research and advocacy for ranked choice voting and other electoral reforms aimed at improving representation.",
    url: "https://fairvote.org",
    source: "FairVote",
    categories: ["civic-engagement"],
    tags: ["electoral reform", "ranked choice voting", "representation"]
  },

  // Education
  {
    id: "nces-education-data",
    title: "National Center for Education Statistics",
    type: "research",
    description: "The federal entity for collecting and analyzing data on the condition of American education, K-12 through higher ed.",
    url: "https://nces.ed.gov",
    source: "U.S. Department of Education",
    categories: ["education"],
    tags: ["education data", "K-12", "higher education"]
  },
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
