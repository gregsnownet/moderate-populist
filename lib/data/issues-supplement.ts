// lib/data/issues-supplement.ts
//
// New issues added August 2026. Merge into the main export:
//
//   // lib/data/issues.ts (bottom of file)
//   import { supplementalIssues } from "./issues-supplement";
//   export const issues: Issue[] = [ ...baseIssues, ...supplementalIssues ];
//
// …or paste these objects directly into the `issues` array. Either works.

import { Issue } from "@/types/issue";

export const supplementalIssues: Issue[] = [
  {
    id: "housing-supply-zoning",
    title: "Housing Supply & Zoning Reform",
    category: "affordability",
    description:
      "Why housing costs so much, why building more is so hard, and why this is one of the few issues where a real cross-partisan coalition already exists",
    explainer: {
      title: "What's the Challenge?",
      content:
        "Housing affordability is usually debated as a demand problem — wages, interest rates, investor buyers. But a large and growing body of research points at supply: the United States has under-built housing relative to household formation for most of the last two decades, and the shortfall is concentrated in the metros with the most jobs. Local zoning is the primary constraint. Roughly three-quarters of residential land in most American cities is reserved for detached single-family homes, a designation that makes duplexes, townhouses, and small apartment buildings illegal to build. Parking minimums, lot-size rules, height caps, and discretionary review add cost and delay. The politics are unusual: the coalition for reform includes free-market conservatives who object to land-use regulation and progressives who want more affordable units, while the opposition includes homeowners of every party who worry about neighborhood change and property values. It is one of the few major issues where the fault line is not partisan.",
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Housing costs too much, and it costs more than it did a decade ago in real terms",
        "Young people and working families are being priced out of the places with the most opportunity",
        "Homelessness is worse in the metros where housing is most expensive, and that is not a coincidence",
        "Local government should not take years to approve a building that meets the rules",
        "People should be able to live near where they work",
        "Neighborhoods should have a voice in how they change — but a voice is not a veto",
      ],
      surveySource:
        "Harvard Joint Center for Housing Studies, Pew Research Center, and state-level polling on land-use reform (2024–2026)",
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Exclusionary zoning has racist origins and continues to segregate American cities by income and race",
          "Market-rate construction alone won't reach the lowest-income households; subsidized and public housing are also required",
          "Tenant protections and anti-displacement measures have to accompany upzoning, or reform just accelerates gentrification",
          "Corporate and institutional buyers distort local markets and should face limits",
          "Housing is a human need, and treating it purely as an investment asset is the underlying error",
        ],
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Zoning is government regulation of private property, and it is among the most restrictive regulation most Americans encounter",
          "Permitting delay and discretionary review are a hidden tax that gets passed to buyers and renters",
          "Rent control reduces long-run supply and is not a substitute for building",
          "Reform should happen at the state and local level, not through federal mandates",
          "Property owners have legitimate interests in neighborhood character and should not be steamrolled",
        ],
      },
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement:
            "Estimates of the U.S. housing shortfall range from roughly 1.5 million to 5.5 million units depending on methodology, with most credible estimates clustering in the 3–4 million range",
          source: "Harvard Joint Center for Housing Studies; Freddie Mac; Up for Growth",
          sourceUrl: "https://www.jchs.harvard.edu/state-nations-housing-2025",
        },
        {
          statement:
            "In most large American cities, roughly 70–75% of residential land is zoned exclusively for detached single-family housing, making multi-unit construction illegal on the majority of buildable land",
          source: "New York Times / UrbanFootprint zoning analysis; Mercatus Center",
          sourceUrl: "https://www.mercatus.org/research/policy-briefs/zoning-and-housing-supply",
        },
        {
          statement:
            "Oregon, California, Montana, Maine, Washington, and several other states have passed laws since 2019 preempting local single-family-only zoning — with bipartisan majorities in several cases, including Montana's 2023 reforms signed by a Republican governor",
          source: "National Conference of State Legislatures; Sightline Institute",
          sourceUrl: "https://www.ncsl.org/human-services/housing-supply-legislation",
        },
        {
          statement:
            "Regulatory costs — permitting, impact fees, code compliance, and delay — account for an estimated 24% of the final price of a new single-family home and roughly 40% of the cost of a multifamily development",
          source: "National Association of Home Builders regulatory cost studies",
          sourceUrl: "https://www.nahb.org/news-and-economics/housing-economics",
        },
        {
          statement:
            "Metro areas that permitted more housing per capita over the 2010s saw meaningfully slower rent growth than comparable metros that permitted less, controlling for job growth",
          source: "Federal Reserve Bank research; Journal of Urban Economics literature",
          sourceUrl: "https://fred.stlouisfed.org/series/PERMIT",
        },
      ],
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "The State of the Nation's Housing",
          description: "The annual reference report on U.S. housing supply, cost, and demographics",
          url: "https://www.jchs.harvard.edu/state-nations-housing-2025",
          source: "Harvard Joint Center for Housing Studies",
        },
        {
          title: "Building Permits Survey",
          description: "Monthly primary data on how much housing is actually being permitted, by metro",
          url: "https://www.census.gov/construction/bps/",
          source: "U.S. Census Bureau",
        },
        {
          title: "Housing Supply Legislation Tracker",
          description: "State-by-state record of zoning and permitting reform bills",
          url: "https://www.ncsl.org/human-services/housing-supply-legislation",
          source: "National Conference of State Legislatures",
        },
      ],
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Should states be able to override local zoning decisions, and if so, where is the limit?",
        "How much of the affordability problem can market-rate construction solve, and where does subsidy become necessary?",
        "What do existing homeowners legitimately deserve a say over, and what should they not be able to block?",
        "Is the right unit of decision-making the neighborhood, the city, the metro, or the state?",
        "If your own neighborhood were upzoned tomorrow, what would you actually want protected?",
      ],
    },
  },

  {
    id: "care-economy",
    title: "Childcare, Elder Care & the Caregiving Crunch",
    category: "families",
    description:
      "Americans are squeezed between the cost of raising children and the cost of caring for aging parents — a problem felt by nearly everyone and politicized by almost no one",
    explainer: {
      title: "What's the Challenge?",
      content:
        "The care economy is where household budgets actually break. Childcare in much of the country costs more per year than in-state college tuition, and the supply of licensed slots falls short of demand in wide stretches of rural and suburban America. At the other end of life, roughly 10,000 Americans turn 65 every day, and the cost of assisted living or nursing care routinely exceeds most families' savings. Between the two sits a large and growing group — often called the sandwich generation — paying for both at once while working. The paid caregiving workforce is chronically underpaid and has high turnover, which drives both cost and quality problems. What makes this issue unusual is how little partisan heat it carries relative to how universally it is felt: the disagreements are real but they are about mechanism, not about whether the problem exists.",
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Childcare costs are unsustainable for typical working families",
        "Caring for aging parents should not require impoverishing yourself or your children",
        "Care workers are underpaid relative to the difficulty and importance of the work",
        "Families should have real choice about how care is provided — including care at home by a relative",
        "Rural and small-town families face a genuine supply shortage, not just a price problem",
        "The current patchwork is confusing, and people find out how it works only in a crisis",
      ],
      surveySource:
        "AARP caregiving surveys, KFF long-term care polling, Pew Research family economics surveys (2024–2026)",
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Care is infrastructure; public investment in childcare and home-based care pays for itself in labor force participation",
          "Direct subsidy and expanded eligibility reach families faster than tax credits, which favor those with tax liability",
          "Care workers need higher wages, benefits, and a right to organize — the workforce shortage is a wage problem",
          "Universal or near-universal programs avoid the administrative burden and stigma of means-tested ones",
          "Paid family and medical leave is standard in peer nations and overdue here",
        ],
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Money should follow the family, not the institution — parents should be able to choose home care, a relative, a faith-based provider, or a center",
          "Licensing rules and staffing ratios drive up cost and reduce supply, particularly for home-based and small providers",
          "Expanded child tax credits and HSA-style accounts give families flexibility without building new bureaucracy",
          "Extended family and community institutions have historically carried this load and policy should not crowd them out",
          "Long-term care obligations are a fiscal problem that entitlement reform has to reckon with honestly",
        ],
      },
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement:
            "The average annual price of center-based infant care exceeds in-state public college tuition in a majority of U.S. states",
          source: "U.S. Department of Labor National Database of Childcare Prices; Child Care Aware of America",
          sourceUrl: "https://www.dol.gov/agencies/wb/topics/childcare/price-by-age-care-setting",
        },
        {
          statement:
            "Roughly 53 million Americans provide unpaid care to an adult family member or friend, with an estimated economic value in the hundreds of billions of dollars annually",
          source: "AARP and National Alliance for Caregiving, Caregiving in the U.S.",
          sourceUrl: "https://www.aarp.org/caregiving/",
        },
        {
          statement:
            "The median annual cost of a private room in a nursing home exceeds $100,000, and the median cost of assisted living exceeds $60,000 — both rising faster than general inflation",
          source: "Genworth Cost of Care Survey",
          sourceUrl: "https://www.genworth.com/aging-and-you/finances/cost-of-care.html",
        },
        {
          statement:
            "More than half of U.S. counties qualify as childcare deserts, defined as having either no licensed provider or more than three children for every licensed slot",
          source: "Center for American Progress childcare desert analysis; Bipartisan Policy Center",
          sourceUrl: "https://bipartisanpolicy.org/explainer/child-care-gap/",
        },
        {
          statement:
            "Medicaid — not Medicare — is the primary payer for long-term care in the United States, which means most families reach it only after spending down assets",
          source: "KFF Medicaid and long-term care briefs",
          sourceUrl: "https://www.kff.org/medicaid/issue-brief/medicaid-and-long-term-services-and-supports/",
        },
      ],
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "National Database of Childcare Prices",
          description: "Federal county-level data on what care actually costs",
          url: "https://www.dol.gov/agencies/wb/topics/childcare/price-by-age-care-setting",
          source: "U.S. Department of Labor",
        },
        {
          title: "Caregiving in the U.S.",
          description: "The standard reference survey on unpaid family caregiving",
          url: "https://www.aarp.org/caregiving/",
          source: "AARP / National Alliance for Caregiving",
        },
        {
          title: "Medicaid and Long-Term Services and Supports",
          description: "How long-term care is actually financed in America",
          url: "https://www.kff.org/medicaid/issue-brief/medicaid-and-long-term-services-and-supports/",
          source: "KFF",
        },
      ],
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Should public support go to providers, or directly to families to spend as they choose?",
        "Which licensing and staffing rules protect children and which ones simply restrict supply?",
        "How should the cost of long-term care be shared between families, states, and the federal government?",
        "Is paid family leave better delivered as a federal program, a state program, or an employer mandate?",
        "What do we owe people who leave the workforce to care for a parent — and how would we pay for it?",
      ],
    },
  },
];
