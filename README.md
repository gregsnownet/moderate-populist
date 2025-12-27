# The Moderate Populist

A platform for bridging political divides through fact-based dialogue and finding common ground on the issues that matter.

## About

The Moderate Populist is a website dedicated to creating constructive dialogue between people with different political identities. Beyond partisan divisions, most Americans share common concerns about healthcare, education, economic opportunity, and community.

This platform provides:
- **Neutral Issue Explainers:** Fact-based information on key political and social issues
- **Common Ground Highlights:** Survey-backed areas where most Americans agree
- **Evidence-Based Resources:** Links to reputable, non-partisan sources
- **Thoughtful Questions:** Prompts for respectful debate and solution-oriented thinking

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** AWS (Amplify or S3 + CloudFront)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd moderate-populist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
moderate-populist/
├── app/                    # Next.js app directory
│   ├── issues/[id]/       # Dynamic issue pages
│   ├── resources/         # Resources page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── IssueCard.tsx     # Issue preview card
│   ├── IssuePage.tsx     # Issue page template
│   ├── IssueSection.tsx  # Section component
│   └── ResourceCard.tsx  # Resource link card
├── lib/                   # Utilities and data
│   └── data/
│       ├── issues.ts     # Issue content and data
│       └── resources.ts  # Resource links (articles, podcasts, etc.)
├── types/                 # TypeScript type definitions
│   ├── issue.ts          # Issue interface
│   └── resource.ts       # Resource interface
└── public/               # Static assets
```

## Adding New Issues

To add a new issue to the platform:

1. Open `lib/data/issues.ts`

2. Add a new issue object to the `issues` array following this structure:

```typescript
{
  id: "your-issue-slug",
  title: "Issue Title",
  category: "category-name",
  description: "Brief description",
  explainer: {
    title: "What's the Challenge?",
    content: "Neutral explanation of the issue..."
  },
  commonGround: {
    title: "Where Most Americans Agree",
    points: ["Agreement point 1", "Agreement point 2", ...],
    surveySource: "Source citation"
  },
  keyFacts: {
    title: "Evidence-Based Facts",
    facts: [
      {
        statement: "Fact statement",
        source: "Source name",
        sourceUrl: "https://source.url"
      },
      ...
    ]
  },
  resources: {
    title: "Learn More from Reputable Sources",
    links: [
      {
        title: "Resource title",
        description: "What this resource provides",
        url: "https://resource.url",
        source: "Organization name"
      },
      ...
    ]
  },
  openQuestions: {
    title: "Questions for Thoughtful Debate",
    questions: ["Question 1?", "Question 2?", ...]
  }
}
```

3. The new issue will automatically appear on the homepage and be accessible via `/issues/your-issue-slug`

## Adding Resources (Articles, Podcasts, Videos)

To add curated resources to the Resources page:

1. Open `lib/data/resources.ts`

2. Add a new resource object to the `resources` array:

```typescript
{
  id: "unique-slug-for-resource",
  title: "Resource Title",
  type: "article" | "podcast" | "video" | "research",
  description: "Brief description of what this resource covers",
  url: "https://actual-url.com",
  source: "Publication/Source Name",
  author: "Author Name (optional)",
  publishedDate: "YYYY-MM-DD (optional)",
  categories: ["healthcare", "economic-opportunity", "education", etc.],
  tags: ["relevant", "topic", "tags"],
  featured: true  // Set to true to highlight on homepage (optional)
}
```

3. The resource will automatically appear on `/resources` with filtering by type and category

**Resource Types:**
- `article` - Written articles and blog posts
- `podcast` - Podcast episodes
- `video` - Video content and documentaries
- `research` - Academic papers and research studies

**Categories:**
- Must match issue categories: `healthcare`, `economic-opportunity`, `education`, `community`, `families`, `public-safety`, `government`, or `general`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to AWS.

**Quick start options:**
- **AWS Amplify** (Easiest): Connect your Git repository for automatic deployments
- **S3 + CloudFront** (Most cost-effective): Static hosting for $1-5/month
- **Lightsail** (VPS option): Starting at $3.50/month

## Roadmap

### Current Features (v1.0)
- ✅ Issue pages with structured content
- ✅ Responsive design
- ✅ SEO-optimized static generation

### Planned Features
- 💬 Moderated community discussions
- 📊 Interactive surveys and polling
- 👥 User accounts with political identity (optional)
- 🗺️ Local community action connections
- 📱 Mobile app

## Contributing

Contributions are welcome! Areas where we'd love help:
- Additional issue content with reputable sources
- UI/UX improvements
- Accessibility enhancements
- Translation to other languages

## Content Guidelines

When adding or editing issue content:

1. **Neutrality:** Present all perspectives fairly without partisan bias
2. **Evidence-Based:** Cite reputable, verifiable sources
3. **Common Ground:** Highlight areas of agreement based on surveys/polls
4. **Respectful:** Assume good faith and avoid inflammatory language
5. **Solution-Oriented:** Focus on solving problems, not assigning blame

## License

[Choose appropriate license - MIT, Apache 2.0, etc.]

## Contact

For questions or feedback, please open an issue in this repository.

---

**The Moderate Populist** - Seeking knowledge, furthering understanding - Beyond the political Divide.
