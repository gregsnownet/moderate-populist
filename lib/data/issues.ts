import { Issue } from "@/types/issue";
import { supplementalIssues } from "./issues-supplement";

const baseIssues: Issue[] = [
  {
    id: "healthcare-access",
    title: "Healthcare Access & Affordability",
    category: "healthcare",
    description: "Examining the challenges Americans face accessing affordable, quality healthcare",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans across the political spectrum struggle with healthcare costs. Despite spending more per capita on healthcare than any other developed nation, millions face high premiums, deductibles, and prescription drug costs. Medical bills remain a leading cause of bankruptcy. The debate often focuses on different solutions rather than the underlying shared concern about affordability and access."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Healthcare costs are too high and creating financial hardship for families",
        "Prescription drug prices need to be more affordable",
        "People with pre-existing conditions should be able to get coverage",
        "Price transparency would help consumers make better decisions",
        "Rural areas face unique challenges accessing quality care",
        "Mental healthcare should be more accessible and less stigmatized"
      ],
      surveySource: "Multiple polls from KFF, Pew Research, and Gallup (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Healthcare is a human right, not a privilege based on ability to pay",
          "Medicare for All or a public option would provide universal coverage and reduce costs",
          "Pharmaceutical companies price-gouge Americans while other countries pay far less",
          "Private insurance companies profit from denying care and limiting coverage",
          "The Affordable Care Act expanded coverage to millions but didn't go far enough",
          "Corporate hospitals prioritize profits over patients"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Government-run healthcare leads to rationing, long waits, and reduced quality",
          "Free market competition and consumer choice drive innovation and efficiency",
          "The ACA's mandates and regulations increased costs for many Americans",
          "Individual responsibility and personal health savings accounts empower consumers",
          "Reducing regulations on insurance markets would lower premiums",
          "Government should focus on transparency and anti-trust enforcement, not takeovers"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "U.S. healthcare spending reached $4.9 trillion in 2024 (roughly $14,570 per person)—about 17.6% of GDP, more than any other developed nation",
          source: "CMS National Health Expenditure Data",
          sourceUrl: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data"
        },
        {
          statement: "Roughly 4 in 10 U.S. adults report having some form of medical debt, with millions owing more than $1,000",
          source: "KFF Health Care Debt Survey",
          sourceUrl: "https://www.kff.org/health-costs/issue-brief/the-burden-of-medical-debt-in-the-united-states/"
        },
        {
          statement: "Average annual family premium for employer-sponsored insurance reached approximately $25,572 in 2024, with workers contributing about $6,300 of that cost",
          source: "KFF Employer Health Benefits Survey 2024",
          sourceUrl: "https://www.kff.org/report-section/ehbs-2024-summary-of-findings/"
        },
        {
          statement: "Approximately 8% of the U.S. population (about 26 million people) were uninsured in 2024, the lowest rate on record",
          source: "U.S. Census Bureau, Health Insurance Coverage in the U.S.",
          sourceUrl: "https://www.census.gov/topics/health/health-insurance.html"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "National Health Expenditure Accounts",
          description: "Official government data on U.S. healthcare spending trends",
          url: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data",
          source: "Centers for Medicare & Medicaid Services"
        },
        {
          title: "Health System Tracker",
          description: "Non-partisan analysis comparing U.S. healthcare performance internationally",
          url: "https://www.healthsystemtracker.org",
          source: "Peterson-KFF"
        },
        {
          title: "Healthcare Cost and Utilization Project",
          description: "Database of hospital care statistics and costs",
          url: "https://www.hcup-us.ahrq.gov",
          source: "Agency for Healthcare Research and Quality"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What role should government play in regulating healthcare prices?",
        "How can we balance innovation in medical technology with cost control?",
        "What can we learn from healthcare systems in other countries?",
        "How do we expand access without compromising quality of care?",
        "What's the right balance between individual choice and collective solutions?"
      ]
    }
  },
  {
    id: "economic-opportunity",
    title: "Economic Opportunity & Job Stability",
    category: "economic-opportunity",
    description: "Creating pathways to financial security and meaningful work",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans want stable jobs that provide a decent living and opportunities for advancement. While unemployment rates fluctuate, concerns about wage stagnation, job security, cost of living, and preparing for economic transitions remain constant. People across political divides worry about their children's economic prospects and whether the American Dream is still attainable."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Working full-time should provide enough to support a family",
        "Access to job training and education should be affordable",
        "Small businesses are vital to local economies and should be supported",
        "Infrastructure investment creates jobs and improves quality of life",
        "Workers need portable benefits in an evolving economy",
        "Economic growth should benefit workers, not just executives and shareholders"
      ],
      surveySource: "Pew Research Center Economic Surveys (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Corporations prioritize shareholder profits over worker wages and job security",
          "Unions are essential to balance power between workers and employers",
          "The federal minimum wage of $7.25 hasn't kept pace with inflation and needs significant increase",
          "Worker protections including paid family leave, sick days, and overtime rules should be expanded",
          "Tax policies favor the wealthy while working families struggle with stagnant wages",
          "Corporate consolidation and monopolies harm workers, consumers, and small businesses"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Economic growth and job creation come from reducing regulations and taxes on businesses",
          "Right-to-work laws protect individual freedom and attract business investment",
          "High minimum wages force small businesses to cut jobs and raise prices for consumers",
          "Government welfare programs can discourage work and create dependency",
          "Free market competition, not government mandates, drives innovation and opportunity",
          "Excessive labor regulations make American businesses less competitive globally"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Real wages (adjusted for inflation) have grown only 0.3% annually since 1979 for most workers",
          source: "Economic Policy Institute",
          sourceUrl: "https://www.epi.org"
        },
        {
          statement: "Cost of living has increased faster than wages in most metro areas over the past 20 years",
          source: "Bureau of Labor Statistics",
          sourceUrl: "https://www.bls.gov"
        },
        {
          statement: "More than half of U.S. adults consistently report living paycheck to paycheck, including a significant share of households earning over $100,000",
          source: "Bank surveys (LendingClub, Bank of America Institute), Federal Reserve Survey of Household Economics and Decisionmaking (SHED)",
          sourceUrl: "https://www.federalreserve.gov/consumerscommunities/shed.htm"
        },
        {
          statement: "Manufacturing employment has declined from 17.5 million (1998) to approximately 12.9 million in 2024-2025, though some sectors have stabilized in recent years",
          source: "Bureau of Labor Statistics",
          sourceUrl: "https://www.bls.gov/iag/tgs/iag31-33.htm"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "Bureau of Labor Statistics Economic Data",
          description: "Official government statistics on employment, wages, and economic indicators",
          url: "https://www.bls.gov",
          source: "U.S. Department of Labor"
        },
        {
          title: "State of Working America",
          description: "Analysis of wages, jobs, and economic mobility",
          url: "https://www.epi.org/publication/swa/",
          source: "Economic Policy Institute"
        },
        {
          title: "Opportunity Insights",
          description: "Research on economic mobility and pathways out of poverty",
          url: "https://opportunityinsights.org",
          source: "Harvard University"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should we prepare workers for automation and AI disruption?",
        "What's the right balance between worker protections and business flexibility?",
        "How can rural and urban economies both thrive?",
        "Should minimum wage be set federally or locally based on cost of living?",
        "What policies best support entrepreneurship and small business growth?"
      ]
    }
  },
  {
    id: "education",
    title: "Education Quality & Accessibility",
    category: "education",
    description: "Ensuring all children have access to quality education",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans value education as a pathway to opportunity, but disagree on how to improve it. Parents across the political spectrum want their children to receive a quality education that prepares them for success. Challenges include achievement gaps, school funding disparities, teacher shortages, college affordability, and debates over curriculum. Most agree the current system isn't serving all students equally well."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Quality education should not depend on zip code",
        "Teachers are underpaid for the importance of their work",
        "Students need both academic skills and practical life skills",
        "Early childhood education has significant long-term benefits",
        "School safety is a paramount concern",
        "College costs have become unsustainable for most families",
        "Career and technical education should be valued alongside college prep"
      ],
      surveySource: "PDK Poll of the Public's Attitudes Toward Public Schools (2024-2025), EdChoice and Pew education polling"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Public education is chronically underfunded, especially in low-income communities",
          "School privatization and vouchers drain resources from public schools that serve most students",
          "Student loan debt is a crisis requiring forgiveness and free public college options",
          "Standardized testing narrows curriculum and disadvantages students from diverse backgrounds",
          "Teachers' unions protect educators from exploitation and ensure quality working conditions",
          "Schools should teach accurate history including systemic racism and social justice"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "School choice and vouchers empower parents to find the best education for their children",
          "Accountability through testing ensures students learn core academic skills",
          "Schools should focus on academics, not social engineering or political ideology",
          "Parents have the right to control what their children learn, especially regarding controversial topics",
          "Teachers' unions often protect bad teachers and resist needed reforms",
          "Competition from charter schools and private options improves all schools"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Per-pupil spending varies from $8,000 to over $30,000 depending on location",
          source: "U.S. Census Bureau",
          sourceUrl: "https://www.census.gov"
        },
        {
          statement: "Average federal student loan debt per borrower is approximately $38,000; total U.S. student loan debt remains around $1.7 trillion across roughly 43 million borrowers",
          source: "Federal Reserve, Federal Student Aid",
          sourceUrl: "https://studentaid.gov/data-center/student/portfolio"
        },
        {
          statement: "Teacher vacancies and shortages have persisted nationwide, with tens of thousands of unfilled positions and high turnover concentrated in math, science, special education, and high-poverty schools",
          source: "U.S. Department of Education, NCES",
          sourceUrl: "https://nces.ed.gov"
        },
        {
          statement: "Achievement gaps between high and low-income students persist, though narrowing in some areas",
          source: "National Assessment of Educational Progress (NAEP)",
          sourceUrl: "https://nces.ed.gov/nationsreportcard"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "National Center for Education Statistics",
          description: "Comprehensive data on American education at all levels",
          url: "https://nces.ed.gov",
          source: "U.S. Department of Education"
        },
        {
          title: "The Nation's Report Card",
          description: "National assessment of student achievement across subjects and grades",
          url: "https://nces.ed.gov/nationsreportcard",
          source: "NAEP"
        },
        {
          title: "EdBuild",
          description: "Analysis of school funding equity across states",
          url: "https://edbuild.org",
          source: "EdBuild (archived research)"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should we fund schools to ensure equity without creating inefficiency?",
        "What's the right balance between local control and national standards?",
        "How can we attract and retain quality teachers?",
        "Should college be more affordable through public investment or market reform?",
        "How do we measure educational success beyond test scores?",
        "What role should parents have in curriculum decisions?"
      ]
    }
  },
  {
    id: "affordability",
    title: "Affordability: Cost of Living & Housing",
    category: "affordability",
    description: "Addressing the rising costs of housing and everyday essentials that impact family budgets",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans across all income levels are struggling with the rising cost of living. Housing costs have outpaced wage growth for decades, with rent and home prices consuming an increasing share of household budgets. Basic necessities like groceries, utilities, childcare, and transportation have become less affordable. Many families find themselves one emergency away from financial crisis, even when working full-time jobs. The challenge spans both urban areas with high housing costs and rural areas with limited economic opportunities and lower wages."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Housing costs have become unsustainable for working families",
        "Wages have not kept pace with the cost of living",
        "Young people face unprecedented barriers to homeownership",
        "Renters need stronger protections and more affordable options",
        "Zoning and building regulations should balance community input with housing supply needs",
        "Childcare costs are a major burden preventing workforce participation",
        "More affordable housing near jobs and public transit is needed"
      ],
      surveySource: "Pew Research Center, Harvard Joint Center for Housing Studies (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Corporate landlords and private equity firms are buying up housing and driving up rents",
          "Rent control and tenant protections prevent displacement and exploitation",
          "Wealthy NIMBYs use zoning laws to exclude affordable housing and maintain segregation",
          "Housing is a human right requiring massive public investment in affordable units",
          "Wall Street speculation in real estate harms working families and communities",
          "Universal childcare and paid family leave are essential for working parents"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Rent control reduces housing supply and quality, making affordability worse",
          "Excessive regulations and zoning restrictions drive up construction costs",
          "Government-mandated affordable housing quotas interfere with property rights and markets",
          "The solution is building more housing through deregulation, not price controls",
          "Individual responsibility and financial planning enable homeownership and stability",
          "Childcare should be a family choice, not a government entitlement"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "The median U.S. existing-home sale price reached approximately $420,000 in 2025, more than 40% above pre-pandemic 2019 levels, with 30-year mortgage rates hovering near 6.5-7%",
          source: "Federal Reserve Economic Data (FRED), National Association of Realtors",
          sourceUrl: "https://fred.stlouisfed.org/series/MSPUS"
        },
        {
          statement: "About half of all U.S. renters (a record share) are cost-burdened, paying more than 30% of income on housing",
          source: "Joint Center for Housing Studies, Harvard University (State of the Nation's Housing)",
          sourceUrl: "https://www.jchs.harvard.edu/state-nations-housing-2024"
        },
        {
          statement: "Median asking rent grew more than 30% between 2019 and 2024, before flattening or modestly declining in some metros in 2025",
          source: "U.S. Census Bureau, Zillow Observed Rent Index",
          sourceUrl: "https://www.census.gov"
        },
        {
          statement: "By most estimates, fewer than 4 in 10 renters can afford the median-priced home in their area at current rates",
          source: "National Association of Realtors",
          sourceUrl: "https://www.nar.realtor"
        },
        {
          statement: "Childcare costs average $10,000-$20,000 per year per child in most states, often exceeding rent or in-state college tuition",
          source: "U.S. Department of Health and Human Services",
          sourceUrl: "https://www.hhs.gov"
        },
        {
          statement: "Grocery prices rose roughly 25-28% from 2019 through 2024, outpacing wage growth in most income groups before stabilizing in 2025",
          source: "Bureau of Labor Statistics CPI",
          sourceUrl: "https://www.bls.gov/cpi/"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "The State of the Nation's Housing",
          description: "Annual report on housing affordability, conditions, and trends across America",
          url: "https://www.jchs.harvard.edu/state-nations-housing",
          source: "Harvard Joint Center for Housing Studies"
        },
        {
          title: "Consumer Price Index Data",
          description: "Official tracking of inflation and cost of living changes",
          url: "https://www.bls.gov/cpi/",
          source: "Bureau of Labor Statistics"
        },
        {
          title: "Housing Data & Research",
          description: "Comprehensive housing market statistics and analysis",
          url: "https://www.census.gov/topics/housing.html",
          source: "U.S. Census Bureau"
        },
        {
          title: "Childcare Costs Analysis",
          description: "Research on childcare affordability and its economic impact",
          url: "https://www.americanprogress.org",
          source: "Center for American Progress"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How can we increase housing supply without sacrificing community character?",
        "What's the right balance between rent control and encouraging new development?",
        "Should zoning laws prioritize single-family homes or mixed-use density?",
        "How can we make homeownership achievable for younger generations?",
        "What role should government play in subsidizing childcare and other essentials?",
        "How do we address housing costs without displacing existing residents?",
        "Should minimum wage be tied to local cost of living?",
        "What policies best support both renters and small landlords?"
      ]
    }
  },
  {
    id: "civic-dialogue",
    title: "Constructive Dialogue & Democratic Engagement",
    category: "civic-engagement",
    description: "How we talk to each other matters: Communication, collaboration, compromise, and making your case",
    explainer: {
      title: "What's the Challenge?",
      content: "American democracy depends on our ability to engage constructively with those who disagree with us. Yet political polarization, echo chambers, and hostile rhetoric have made productive dialogue increasingly difficult. We've forgotten essential civic skills: listening to understand rather than to respond, finding common ground before debating differences, making persuasive arguments based on shared values, and compromising without compromising principles. Democracy isn't just about voting—it's about the daily work of engaging fellow citizens, building coalitions, and governing together despite our differences."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Political discourse has become too hostile and unproductive",
        "We need to listen more and assume good faith in others",
        "Finding common ground is more important than winning arguments",
        "Compromise is necessary for a functioning democracy, not a sign of weakness",
        "Understanding different perspectives makes us better citizens",
        "Local communities work best when people collaborate across differences",
        "Teaching civic engagement skills should start in schools",
        "We can disagree strongly while still respecting each other's dignity"
      ],
      surveySource: "Pew Research Center, More in Common, Public Agenda (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Right-wing media and misinformation spread conspiracy theories and undermine democracy",
          "Some issues involve fundamental rights where compromise means accepting injustice",
          "Bothsidesism falsely equates legitimate policy with extremism and authoritarianism",
          "Dialogue requires good faith, which is absent when one side denies basic facts",
          "Civility politics can silence marginalized voices demanding necessary change",
          "We must resist fascism and protect democracy, not just have polite conversations"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Left-wing cancel culture shuts down debate and punishes dissenting views",
          "Universities and mainstream media create liberal echo chambers that exclude conservative perspectives",
          "Political correctness prevents honest discussion of important issues",
          "The left labels legitimate conservative positions as hate speech to avoid debate",
          "Free speech is under attack from those who claim to value tolerance",
          "Cultural elites look down on traditional values and ordinary Americans"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "87% of Americans say political debate has become less respectful in recent years",
          source: "Pew Research Center",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "67% believe compromise is necessary, but most say their own side should not have to compromise on key issues",
          source: "Public Agenda Hidden Common Ground Study",
          sourceUrl: "https://www.publicagenda.org"
        },
        {
          statement: "Americans are increasingly living in politically homogeneous communities, reducing cross-partisan interactions",
          source: "Carnegie Corporation Political Segregation Report",
          sourceUrl: "https://www.carnegie.org"
        },
        {
          statement: "Structured dialogue programs have shown 40-60% improvement in participants' ability to engage across differences",
          source: "National Institute for Civil Discourse",
          sourceUrl: "https://nicd.arizona.edu"
        },
        {
          statement: "77% of Americans rarely or never discuss politics with someone who disagrees with them",
          source: "More in Common Hidden Tribes Study",
          sourceUrl: "https://www.moreincommon.com"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "Better Arguments: A Guide",
          description: "Framework for having productive disagreements and finding common ground",
          url: "https://www.aspeninstitute.org/programs/citizenship-and-american-identity/better-arguments/",
          source: "The Aspen Institute"
        },
        {
          title: "Bridging Differences Program",
          description: "Research-backed methods for constructive cross-partisan dialogue",
          url: "https://greatergood.berkeley.edu/bridging_differences",
          source: "UC Berkeley Greater Good Science Center"
        },
        {
          title: "Hidden Common Ground Research",
          description: "Studies showing Americans agree more than they realize on many issues",
          url: "https://www.publicagenda.org/projects/hidden-common-ground/",
          source: "Public Agenda"
        },
        {
          title: "National Institute for Civil Discourse",
          description: "Resources for improving democratic dialogue and civic engagement",
          url: "https://nicd.arizona.edu",
          source: "University of Arizona"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "The Four Cs of Democratic Engagement: How do we teach communication, collaboration, compromise, and case-making?",
        "What conditions make people willing to listen to opposing viewpoints?",
        "How can we create more opportunities for cross-partisan dialogue in communities?",
        "What's the difference between principled compromise and abandoning core values?",
        "How do we balance free expression with maintaining respectful discourse?",
        "What role should social media platforms play in encouraging constructive dialogue?",
        "How can we make political persuasion more effective and less divisive?",
        "What civic education would best prepare young people for democratic participation?"
      ]
    }
  },
  {
    id: "electoral-reform",
    title: "Electoral Reform & Voting Systems",
    category: "government",
    description: "Exploring ranked choice voting and electoral reforms to reduce polarization and increase representation",
    explainer: {
      title: "What's the Challenge?",
      content: "America's winner-take-all electoral system incentivizes polarization and partisan extremism. In primaries, candidates appeal to the most ideological voters. In general elections, voters often choose the 'lesser of two evils' rather than their preferred candidate. Gerrymandering creates safe seats where general elections don't matter. Third-party candidates act as spoilers. The result: elected officials who represent the extremes rather than the mainstream, and voters who feel their choices are limited. Electoral reforms like ranked choice voting offer potential solutions to reduce polarization and increase genuine representation."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The current system forces voters to choose between two options they may not fully support",
        "Primary elections often select more extreme candidates than general election voters want",
        "Gerrymandering undermines fair representation and should be limited",
        "More voices and choices in elections would improve democracy",
        "The electoral system should encourage coalition-building and compromise",
        "Voting should be easier and more accessible to all eligible citizens",
        "Election integrity and voter confidence are essential to democracy"
      ],
      surveySource: "Pew Research Center, FairVote surveys (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Ranked choice voting would reduce negative campaigning and empower progressive coalition-building",
          "The Electoral College is undemocratic and should be replaced with a national popular vote",
          "Automatic voter registration and Election Day as a holiday would increase participation",
          "Republican gerrymandering and voter suppression tactics undermine democracy",
          "Money in politics gives disproportionate power to wealthy donors and corporations",
          "Proportional representation would better reflect the diversity of American voters"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Ranked choice voting is confusing and could enable fringe candidates to win",
          "The Electoral College protects smaller states and rural areas from being ignored",
          "Voter ID laws and election security measures prevent fraud and maintain integrity",
          "Democrat-controlled courts and commissions gerrymander under the guise of 'fairness'",
          "States should control their own election systems without federal interference",
          "Current system has worked for 200+ years and radical changes carry unknown risks"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Over 50 U.S. jurisdictions now use ranked choice voting, including Maine, Alaska, and New York City",
          source: "FairVote",
          sourceUrl: "https://www.fairvote.org"
        },
        {
          statement: "67% of voters support allowing ranked choice voting in their state",
          source: "Pew Research Center 2024-2025",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "In ranked choice elections, candidates spend less time on negative campaigning and more on coalition-building",
          source: "MIT Election Data + Science Lab Study",
          sourceUrl: "https://electionlab.mit.edu"
        },
        {
          statement: "Countries using proportional representation or ranked systems tend to have higher voter turnout",
          source: "International Institute for Democracy and Electoral Assistance",
          sourceUrl: "https://www.idea.int"
        },
        {
          statement: "83% of primary elections are decided by less than 30% of eligible voters",
          source: "Unite America",
          sourceUrl: "https://www.uniteamerica.org"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "How Ranked Choice Voting Works",
          description: "Clear explanation of ranked choice voting mechanics and benefits",
          url: "https://www.fairvote.org/rcv",
          source: "FairVote"
        },
        {
          title: "Electoral Systems Around the World",
          description: "Comparison of different voting systems used in democracies",
          url: "https://www.idea.int/data-tools/data/electoral-system-design",
          source: "International IDEA"
        },
        {
          title: "The Politics Industry",
          description: "Analysis of how electoral rules shape political outcomes",
          url: "https://www.hbs.edu/competitiveness/Documents/politics-industry-theory.pdf",
          source: "Harvard Business School"
        },
        {
          title: "Redistricting and Gerrymandering",
          description: "Research on how district drawing affects representation",
          url: "https://www.brennancenter.org/issues/gerrymandering-fair-representation",
          source: "Brennan Center for Justice"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Should ranked choice voting be adopted nationwide for federal elections?",
        "How can we balance state control of elections with national standards?",
        "What's the best way to draw district lines: independent commissions or other methods?",
        "Should we move toward proportional representation systems?",
        "How do we make voting more accessible while maintaining election security?",
        "Would open primaries reduce polarization?",
        "What role should technology play in voting systems?",
        "How can electoral reforms reduce the influence of money in politics?"
      ]
    }
  },
  {
    id: "two-party-system",
    title: "Beyond Binary Politics: The Two-Party Trap",
    category: "government",
    description: "How the Democrat-Republican duopoly creates divisiveness and discourages nuanced thinking",
    explainer: {
      title: "What's the Challenge?",
      content: "America's two-party system creates a false binary: you're either with the Democrats or with the Republicans, progressive or conservative, right or wrong. This structure incentivizes division rather than coalition-building. Politicians gain power by demonizing the other side, not by finding common ground. Primaries reward candidates who appeal to the most partisan voters, pushing both parties toward their extremes. Nuanced positions become political liabilities. Complex problems get reduced to talking points. The system treats 330 million Americans as if they fit into two boxes, when reality is far more complex. Both Republicans and Democrats contain diverse viewpoints, yet party loyalty often trumps principle. The result: manufactured outrage, tribal thinking, and a democracy that struggles to solve problems because compromise looks like betrayal."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The two-party system forces false choices and oversimplifies complex issues",
        "Both parties contain good people who genuinely want to help America",
        "Politicians spend too much time attacking opponents instead of solving problems",
        "Primary elections reward extremism rather than pragmatism",
        "Most Americans' views don't fit neatly into either party's platform",
        "The system encourages 'us vs them' thinking that damages civic discourse",
        "Party loyalty often conflicts with representing constituents' actual interests",
        "We need more voices, choices, and coalition-building in our politics",
        "Treating political opponents as enemies rather than fellow citizens is destructive"
      ],
      surveySource: "Pew Research Center, Gallup, Hidden Tribes Study (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "The Democratic Party often compromises progressive values to chase corporate donors and centrist voters",
          "Both parties serve wealthy elites while working Americans lose ground",
          "Republicans have embraced authoritarianism and extremism that threatens democracy itself",
          "The two-party system prevents needed transformation on climate, healthcare, and inequality",
          "Democrats must move left to energize voters and address systemic injustice",
          "Third parties can't win under current rules, trapping voters in a broken system"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "The Republican establishment has betrayed conservative principles and working-class voters",
          "Both parties support endless government growth and deficit spending",
          "Democrats have moved so far left that they've abandoned moderate Americans",
          "The Deep State and entrenched bureaucracy resist anyone who challenges the status quo",
          "Republicans must fight harder against woke ideology and cultural decline",
          "Third parties split the vote and help Democrats win elections"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "62% of Americans believe neither party represents them well and want a third major party",
          source: "Gallup 2024",
          sourceUrl: "https://news.gallup.com"
        },
        {
          statement: "Over 40% of Americans identify as independent rather than Republican or Democrat",
          source: "Pew Research Center",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "Primary election turnout averages only 27%, meaning small groups select major party nominees",
          source: "Unite America",
          sourceUrl: "https://www.uniteamerica.org"
        },
        {
          statement: "Congressional 'party unity' votes have increased from 50% (1970s) to over 90% today",
          source: "CQ Roll Call Vote Studies",
          sourceUrl: "https://www.cqrollcall.com"
        },
        {
          statement: "Americans' policy preferences are more nuanced than party platforms suggest, with majorities supporting mixed approaches",
          source: "More in Common Hidden Tribes Study",
          sourceUrl: "https://www.moreincommon.com"
        },
        {
          statement: "Countries with multi-party systems tend to have higher compromise rates and coalition governments",
          source: "Comparative Politics Research",
          sourceUrl: "https://www.cambridge.org"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "Hidden Tribes: America's Polarization",
          description: "Research showing most Americans don't fit partisan stereotypes",
          url: "https://www.moreincommon.com/hidden-tribes",
          source: "More in Common"
        },
        {
          title: "Why Americans Don't Join a Third Party",
          description: "Analysis of structural barriers to multi-party democracy",
          url: "https://www.pewresearch.org/politics/",
          source: "Pew Research Center"
        },
        {
          title: "The Politics Industry",
          description: "How party duopoly shapes American democracy",
          url: "https://www.hbs.edu/competitiveness/Documents/politics-industry-theory.pdf",
          source: "Harvard Business School"
        },
        {
          title: "Partisan Polarization Research",
          description: "Academic studies on increasing party polarization",
          url: "https://www.pewresearch.org/politics/2022/08/09/as-partisan-hostility-grows-signs-of-frustration-with-the-two-party-system/",
          source: "Pew Research Center"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How can we break the cycle of binary, right-vs-wrong political thinking?",
        "Would electoral reforms (ranked choice, open primaries) reduce two-party dominance?",
        "Can Democrats and Republicans reform from within, or do we need new parties?",
        "How do we encourage politicians to work across party lines without being punished?",
        "What role does media coverage play in reinforcing the two-party framework?",
        "Should we move toward a multi-party parliamentary system?",
        "How can voters reward nuance and compromise instead of ideological purity?",
        "What would it take for Americans to see political opponents as fellow citizens rather than enemies?",
        "How do we build coalitions that cross traditional party lines?",
        "Can you be a loyal Republican or Democrat while also working with the other side?"
      ]
    }
  },
  {
    id: "citizen-participation",
    title: "The Power of Individual Participation",
    category: "civic-engagement",
    description: "Why individual citizens must engage in democracy—or corporations and special interests will fill the void",
    explainer: {
      title: "What's the Challenge?",
      content: "When ordinary citizens disengage from the political process, they create a vacuum that corporations, wealthy donors, and special interests eagerly fill. Democracy isn't a spectator sport—it requires active participation from everyday Americans. Yet voter turnout remains low, especially in local and primary elections where decisions are often made. Town halls sit empty. School board meetings lack parent attendance. Congressional offices rarely hear from constituents. This silence empowers those with money and lobbyists to shape policy unchallenged. Individual citizens have enormous power when they choose to use it: one person showing up at a city council meeting, one call to a representative, one conversation with a neighbor can shift outcomes. But that power only exists when exercised. The choice is simple: participate in your own governance, or let others govern you. Your voice matters, but only if you use it."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Individual citizens have more power than they realize when they engage",
        "When regular people don't participate, special interests and corporations fill the gap",
        "Democracy requires active participation, not just voting every few years",
        "Local engagement (school boards, town halls) directly affects daily life",
        "One person can make a real difference in their community",
        "Politicians listen to those who show up and speak up",
        "Civic duty means more than just complaining—it requires action",
        "Corporate and monied interests have too much influence in politics",
        "Grassroots organizing and citizen movements have changed America repeatedly",
        "Teaching civic participation should be a priority in schools and communities"
      ],
      surveySource: "Pew Research Center, Knight Foundation, Civic Engagement Studies (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Voter suppression tactics deliberately make participation harder for marginalized communities",
          "Corporate money drowns out ordinary citizens' voices in politics",
          "Systemic barriers like poverty, discrimination, and work schedules prevent civic engagement",
          "Grassroots movements for civil rights, labor, and climate demonstrate the power of collective action",
          "Citizens must organize against wealthy elites who rig the system in their favor",
          "Community organizing and protest are essential tools for demanding change"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Individual responsibility and local action are more effective than federal programs",
          "Citizens should focus on community service and voluntary associations, not government",
          "Too much government involvement crowds out individual initiative and civic virtue",
          "Grassroots Tea Party and parent movements show conservative citizens fighting back against overreach",
          "Traditional civic institutions like churches and local organizations build stronger communities than government",
          "School board activism protects children from ideological indoctrination"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Lobbying spending exceeds $4 billion annually, with corporations and interest groups spending 34 times more than citizen advocacy groups",
          source: "OpenSecrets.org",
          sourceUrl: "https://www.opensecrets.org"
        },
        {
          statement: "Voter turnout in local elections averages 15-27%, meaning small groups of engaged citizens determine outcomes",
          source: "Knight Foundation",
          sourceUrl: "https://www.knightfoundation.org"
        },
        {
          statement: "Members of Congress report that constituent contact significantly influences their votes, especially from regular constituents",
          source: "Congressional Management Foundation",
          sourceUrl: "https://www.congressfoundation.org"
        },
        {
          statement: "Only 3% of Americans attend a local government meeting in a given year, leaving decisions to a tiny fraction",
          source: "National Civic League",
          sourceUrl: "https://www.nationalcivicleague.org"
        },
        {
          statement: "Grassroots movements (civil rights, women's suffrage, labor rights) achieved major reforms through sustained citizen participation",
          source: "Historical Studies on Social Movements",
          sourceUrl: "https://www.loc.gov"
        },
        {
          statement: "Communities with higher civic engagement rates show better government responsiveness and accountability",
          source: "Harvard Kennedy School Research",
          sourceUrl: "https://www.hks.harvard.edu"
        }
      ]
    },
    resources: {
      title: "Learn More from Reputable Sources",
      links: [
        {
          title: "How to Contact Your Representatives Effectively",
          description: "Practical guide to making your voice heard by elected officials",
          url: "https://www.congressfoundation.org/contact-your-representative",
          source: "Congressional Management Foundation"
        },
        {
          title: "Local Government Participation Guide",
          description: "How to get involved in city councils, school boards, and community decisions",
          url: "https://www.nationalcivicleague.org",
          source: "National Civic League"
        },
        {
          title: "Money in Politics Research",
          description: "Data on lobbying, campaign finance, and special interest influence",
          url: "https://www.opensecrets.org",
          source: "Center for Responsive Politics"
        },
        {
          title: "Grassroots Organizing Resources",
          description: "Tools and strategies for citizen-led political action",
          url: "https://www.pewresearch.org/politics/",
          source: "Pew Research Center"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What's the most effective way for an individual citizen to make their voice heard?",
        "How can we reduce the influence of money in politics while protecting free speech?",
        "What barriers prevent ordinary citizens from participating, and how do we remove them?",
        "Should civic participation be taught more explicitly in schools?",
        "How do we balance citizen participation with the expertise needed for complex policy?",
        "What's the relationship between individual action and systemic change?",
        "How can working people participate when time and resources are limited?",
        "What happens when corporate interests directly conflict with citizen interests?",
        "How do we build a culture where civic participation is the norm, not the exception?",
        "Can individual participation truly counter well-funded special interests, or do we need systemic reform?"
      ]
    }
  },
  {
    id: "immigration-reform",
    title: "Immigration Reform",
    category: "government",
    description: "Border security, legal immigration pathways, and addressing the status of undocumented immigrants",
    explainer: {
      title: "What's the Challenge?",
      content: "Immigration remains one of America's most contentious political issues. The Trump administration that took office in January 2025 launched the largest interior enforcement operation in modern U.S. history—greatly expanding ICE detention, ending many parole programs, invoking the Alien Enemies Act, and issuing an executive order to limit birthright citizenship now under court challenge. Encounters at the southern border have dropped sharply from their 2023-2024 highs. Debates about due process, the role of local police, the economic impact of mass deportation, and the future of legal immigration have intensified. The U.S. immigration system hasn't seen comprehensive legislative reform since 1986, leaving millions in legal limbo. Both humanitarian concerns and rule-of-law principles deserve serious consideration."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The current immigration system is broken and needs comprehensive reform",
        "Border security is important and should be enforced",
        "Legal immigration should have clear, fair pathways that work efficiently",
        "Children brought here illegally (Dreamers) shouldn't be punished for their parents' decisions",
        "Immigration courts are massively backlogged and need more resources",
        "Employers who knowingly hire undocumented workers should face consequences",
        "Asylum seekers deserve fair hearings, but the system shouldn't be exploited",
        "America benefits from attracting talented immigrants who contribute to the economy",
        "Human trafficking and smuggling operations should be stopped",
        "Local law enforcement shouldn't be forced to do federal immigration enforcement"
      ],
      surveySource: "Pew Research Center 2024-2025, AP-NORC 2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Mass deportation operations separate families, harm U.S. citizens with mixed-status relatives, and damage communities and the economy",
          "Use of the Alien Enemies Act and removal of long-settled residents without full due process raises serious constitutional concerns",
          "Ending birthright citizenship would overturn 150 years of constitutional interpretation",
          "Pathways to citizenship for Dreamers and long-settled undocumented residents recognize their contributions",
          "Asylum seekers fleeing violence and persecution deserve compassion and fair hearings",
          "Detention conditions and rapid expansion of contract detention facilities raise human-rights concerns"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Border security is national security, and the sharp drop in encounters since 2025 shows enforcement works",
          "Deporting people who entered illegally upholds rule of law and protects American workers from labor undercutting",
          "Sanctuary policies that block cooperation with federal immigration enforcement endanger public safety",
          "The visa lottery and chain migration should be replaced with a merit-based legal immigration system",
          "Birthright citizenship for children of unauthorized migrants creates incentives the framers did not anticipate",
          "Comprehensive reform should follow—not precede—proven enforcement of existing law"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "The immigration court backlog has grown to more than 3.7 million pending cases with average wait times of multiple years",
          source: "TRAC Immigration (Syracuse University)",
          sourceUrl: "https://trac.syr.edu/immigration/"
        },
        {
          statement: "Undocumented immigrants paid an estimated $96.7 billion in federal, state, and local taxes in 2022, including Social Security and Medicare taxes for benefits they cannot collect",
          source: "Institute on Taxation and Economic Policy",
          sourceUrl: "https://itep.org/undocumented-immigrants-taxes-2024/"
        },
        {
          statement: "Southwest border encounters fell sharply from a monthly peak of about 250,000 in late 2023 to much lower levels in 2025, following both late-Biden-administration actions and the Trump administration's expanded enforcement",
          source: "U.S. Customs and Border Protection",
          sourceUrl: "https://www.cbp.gov/newsroom/stats/nationwide-encounters"
        },
        {
          statement: "ICE detention capacity expanded substantially in 2025 to support large-scale interior enforcement; the Trump administration's executive order limiting birthright citizenship is the subject of ongoing federal court litigation",
          source: "DHS / ICE statements; Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "Legal immigration processing times remain long, with some employment-based green cards from certain countries taking a decade or more",
          source: "U.S. Citizenship and Immigration Services",
          sourceUrl: "https://www.uscis.gov"
        },
        {
          statement: "Immigrant-founded companies employ millions of Americans and account for roughly 55% of U.S. billion-dollar startups",
          source: "National Foundation for American Policy",
          sourceUrl: "https://nfap.com"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Migration Policy Institute - Immigration Data Hub",
          url: "https://www.migrationpolicy.org",
          description: "Nonpartisan research on immigration statistics, trends, and policy analysis",
          source: "Migration Policy Institute"
        },
        {
          title: "Bipartisan Policy Center - Immigration Task Force",
          url: "https://bipartisanpolicy.org/policy-area/immigration/",
          description: "Proposals for comprehensive immigration reform with bipartisan support",
          source: "Bipartisan Policy Center"
        },
        {
          title: "Congressional Budget Office - Immigration's Economic Effects",
          url: "https://www.cbo.gov",
          description: "Nonpartisan analysis of immigration's fiscal and economic impacts",
          source: "Congressional Budget Office"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How do we balance border security with humanitarian obligations to asylum seekers?",
        "What should happen to the estimated 11 million undocumented immigrants already in the U.S.?",
        "How many immigrants should the U.S. admit annually, and with what criteria?",
        "Should there be a pathway to citizenship for Dreamers? What about their parents?",
        "How do we fix the legal immigration system so people don't wait decades?",
        "What's the appropriate role of local law enforcement in immigration enforcement?",
        "How do we stop employer demand for undocumented labor while protecting workers?"
      ]
    }
  },
  {
    id: "climate-environment",
    title: "Climate Change & Environmental Protection",
    category: "government",
    description: "Addressing climate change, protecting natural resources, and balancing environmental and economic concerns",
    explainer: {
      title: "What's the Challenge?",
      content: "Climate change presents both environmental and political challenges. While 67% of Democrats view it as a major problem, only 13% of Republicans share that concern—one of the sharpest partisan divides. Yet underneath the political polarization, Americans across the spectrum care about clean air, clean water, and preserving natural spaces for future generations. The debate often focuses on whether and how fast to transition from fossil fuels, who should bear the costs, and whether economic growth must be sacrificed for environmental protection."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Clean air and clean water are essential and worth protecting",
        "America's natural parks, forests, and wilderness should be preserved",
        "Renewable energy sources (solar, wind) should be developed alongside traditional energy",
        "Energy independence and national security matter",
        "Pollution from other countries (especially China) should be addressed",
        "Technology and innovation can help solve environmental challenges",
        "Local communities should have input on environmental decisions affecting them",
        "Extreme weather events are becoming more frequent and costly",
        "Conservation and responsible stewardship of resources benefit everyone",
        "Jobs and economic security matter when making energy policy"
      ],
      surveySource: "Yale Climate Opinion Maps 2024-2025, Pew Research 2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Climate change is an existential crisis requiring immediate, massive government action",
          "Fossil fuel companies knew about climate change for decades and lied for profit",
          "The Green New Deal approach can create millions of jobs while saving the planet",
          "Environmental racism means pollution disproportionately harms communities of color",
          "We must end fossil fuel subsidies and keep oil and gas in the ground",
          "Climate denial is driven by corporate propaganda and must be rejected"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Climate regulations kill American jobs while China and India pollute freely",
          "Green energy mandates raise costs for families and make America less competitive",
          "Free market innovation, not government mandates, will develop better energy solutions",
          "Climate models have been wrong before and don't justify economic destruction",
          "Energy independence through domestic oil and gas protects national security",
          "Nuclear power and natural gas are practical alternatives to unreliable renewables"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Global average temperatures have risen approximately 1.3°C above pre-industrial levels, with 2024 the warmest year on record and 2025 among the warmest",
          source: "NASA Global Climate Change; NOAA; Copernicus Climate Change Service",
          sourceUrl: "https://climate.nasa.gov"
        },
        {
          statement: "U.S. energy-related CO2 emissions are roughly 15-20% below 2005 levels even as GDP has grown, primarily driven by coal-to-gas switching and renewables",
          source: "U.S. Environmental Protection Agency; EIA",
          sourceUrl: "https://www.epa.gov/ghgemissions"
        },
        {
          statement: "Renewable energy employed roughly 3.4 million Americans in 2024, with solar and battery storage the fastest-growing segments",
          source: "U.S. Department of Energy U.S. Energy and Employment Report",
          sourceUrl: "https://www.energy.gov/policy/us-energy-employment-jobs-report-useer"
        },
        {
          statement: "Climate- and weather-related disasters have cost the U.S. more than $180 billion in each of several recent years; 2024 alone produced 27 billion-dollar disaster events",
          source: "NOAA National Centers for Environmental Information",
          sourceUrl: "https://www.ncei.noaa.gov/access/billions/"
        },
        {
          statement: "China produces more CO2 emissions than the U.S., EU, and Japan combined",
          source: "Global Carbon Project",
          sourceUrl: "https://www.globalcarbonproject.org"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "NASA Climate Change Resources",
          url: "https://climate.nasa.gov",
          description: "Scientific data and evidence on climate change from NASA",
          source: "NASA"
        },
        {
          title: "Citizens' Climate Lobby",
          url: "https://citizensclimatelobby.org",
          description: "Bipartisan grassroots organization advocating for climate solutions",
          source: "Citizens' Climate Lobby"
        },
        {
          title: "Resources for the Future",
          url: "https://www.rff.org",
          description: "Nonpartisan research on environmental economics and policy",
          source: "Resources for the Future"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How fast should the U.S. transition to renewable energy, and who pays for it?",
        "What's the right balance between environmental protection and economic growth?",
        "How do we address climate change when countries like China continue increasing emissions?",
        "Should nuclear power be part of the clean energy solution?",
        "What role should government mandates vs. market incentives play?",
        "How do we help workers in fossil fuel industries transition to new jobs?",
        "What climate policies can gain bipartisan support?"
      ]
    }
  },
  {
    id: "gun-rights-safety",
    title: "Gun Rights & Gun Safety",
    category: "public-safety",
    description: "Balancing Second Amendment rights with public safety and reducing gun violence",
    explainer: {
      title: "What's the Challenge?",
      content: "Gun policy divides Americans along partisan and cultural lines, yet gun violence affects communities across the political spectrum. The debate often frames gun rights and gun safety as opposing values, when most Americans—including gun owners—support both responsible gun ownership and reasonable safety measures. Mass shootings, urban violence, and suicide by firearm all demand serious attention. The question is whether Americans can move beyond all-or-nothing positions to find practical solutions."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Gun violence is a serious problem that affects too many communities",
        "The Second Amendment protects an individual right to own firearms",
        "People with serious mental illness shouldn't have access to guns",
        "Violent criminals should not be able to purchase firearms",
        "Background checks should apply to gun purchases",
        "Gun safety training is important for gun owners",
        "Parents are responsible for securing firearms away from children",
        "Red flag laws can prevent some tragedies if applied with due process",
        "Enforcing existing laws should be a priority",
        "Mental health services need better funding and accessibility"
      ],
      surveySource: "Pew Research Center 2024-2025, Johns Hopkins Gun Policy Survey"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Gun lobby and NRA obstruct common-sense gun safety laws that save lives",
          "Assault weapons and high-capacity magazines have no place in civilian hands",
          "Universal background checks and waiting periods reduce gun deaths",
          "Other developed countries have proven that gun control works",
          "Gun violence is a public health crisis requiring comprehensive action",
          "The Second Amendment was written for muskets, not AR-15s"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "The Second Amendment is an individual right that shall not be infringed",
          "Gun control only disarms law-abiding citizens, not criminals",
          "Good guys with guns stop bad guys with guns and prevent mass casualties",
          "Gun bans and confiscation lead to tyranny, as history repeatedly shows",
          "Mental health and criminal enforcement are the real issues, not guns themselves",
          "Self-defense is a fundamental human right that government cannot take away"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "More than 46,000 Americans died from gun-related injuries in 2023 (the most recent year with finalized CDC data), with suicide accounting for over half; provisional 2024 data suggests a modest decline",
          source: "CDC WONDER Database",
          sourceUrl: "https://wonder.cdc.gov"
        },
        {
          statement: "There are an estimated 400+ million civilian-owned firearms in the U.S.",
          source: "Small Arms Survey",
          sourceUrl: "https://www.smallarmssurvey.org"
        },
        {
          statement: "Background checks have blocked over 4 million prohibited purchases since 1998",
          source: "FBI National Instant Criminal Background Check System",
          sourceUrl: "https://www.fbi.gov/services/cjis/nics"
        },
        {
          statement: "Gun ownership rates vary significantly by region: highest in rural areas and the South",
          source: "Pew Research Center",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "States with universal background checks have 15% lower gun homicide rates",
          source: "Johns Hopkins Center for Gun Violence Solutions",
          sourceUrl: "https://publichealth.jhu.edu/gun-violence"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "RAND Gun Policy Research",
          url: "https://www.rand.org/research/gun-policy.html",
          description: "Comprehensive, evidence-based analysis of gun policies and their effects",
          source: "RAND Corporation"
        },
        {
          title: "National Shooting Sports Foundation - Project ChildSafe",
          url: "https://projectchildsafe.org",
          description: "Gun safety education and free firearm safety kit program",
          source: "NSSF"
        },
        {
          title: "Brady Campaign - Gun Violence Prevention",
          url: "https://www.bradyunited.org",
          description: "Research and advocacy for gun violence prevention policies",
          source: "Brady Campaign"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What gun safety measures are both effective and constitutional?",
        "How do we reduce gun suicides while respecting privacy and rights?",
        "What's the right balance between gun rights and public safety in different contexts?",
        "How can red flag laws protect both safety and due process?",
        "What role should mental health interventions play in gun violence prevention?",
        "How do we address illegal guns and straw purchases more effectively?",
        "Can technology (smart guns, better tracking) help reduce gun deaths?"
      ]
    }
  },
  {
    id: "reproductive-rights",
    title: "Reproductive Rights & Abortion",
    category: "healthcare",
    description: "Abortion access, reproductive healthcare, and the balance between different values and rights",
    explainer: {
      title: "What's the Challenge?",
      content: "Since the Supreme Court's Dobbs decision overturned Roe v. Wade in 2022, abortion has returned to state-level politics with a patchwork of laws across America. This issue involves deeply held moral, religious, and philosophical beliefs about when life begins and what rights women have over their own bodies. The debate is further complicated by medical situations including life-threatening complications, rape, incest, and fetal abnormalities. Most Americans occupy a middle ground that both extreme positions ignore."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Abortion is a serious moral issue that deserves thoughtful consideration",
        "Life-threatening medical emergencies should allow for abortion to save the mother's life",
        "Contraception should be accessible to prevent unwanted pregnancies",
        "Accurate sex education helps reduce unintended pregnancies",
        "Supporting pregnant women with healthcare and resources is important",
        "Adoption services should be improved and accessible",
        "Parental consent laws for minors have substantial support",
        "Late-term abortions (third trimester) should be rare and restricted",
        "Cases of rape and incest deserve special consideration",
        "Foster care and child welfare systems need improvement"
      ],
      surveySource: "Pew Research Center 2024-2025, Gallup Abortion Polling"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Bodily autonomy is a fundamental right—government shouldn't control reproductive decisions",
          "Abortion bans disproportionately harm poor women and women of color",
          "Forced pregnancy is a human rights violation and form of state violence",
          "Access to safe, legal abortion is essential healthcare, not a political issue",
          "The anti-abortion movement seeks to control women, not protect life",
          "Dobbs decision stripped away constitutional rights and threatens other freedoms"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Life begins at conception, and abortion ends an innocent human life",
          "Roe v. Wade was unconstitutional judicial overreach, Dobbs correctly returned power to states",
          "The unborn deserve legal protection just as born children do",
          "Adoption is a loving alternative to abortion in virtually all circumstances",
          "Abortion industry prioritizes profit over women's health and informed consent",
          "Pro-life position is the ultimate defense of the vulnerable and voiceless"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "About 6 in 10 Americans consistently believe abortion should be legal in all or most cases—a share that has been stable in polling since the Dobbs decision",
          source: "Pew Research Center 2024-2025; Gallup",
          sourceUrl: "https://www.pewresearch.org/religion/fact-sheet/public-opinion-on-abortion/"
        },
        {
          statement: "91% of abortions occur in the first 13 weeks of pregnancy",
          source: "CDC Abortion Surveillance Report",
          sourceUrl: "https://www.cdc.gov"
        },
        {
          statement: "Unintended pregnancy rates are highest among low-income women",
          source: "Guttmacher Institute",
          sourceUrl: "https://www.guttmacher.org"
        },
        {
          statement: "Since the 2022 Dobbs decision, more than a dozen states have enacted near-total abortion bans while several others have passed ballot measures or laws expanding access; the precise count shifts as litigation and ballot measures continue",
          source: "Guttmacher Institute State Tracking; KFF abortion policy tracker",
          sourceUrl: "https://www.guttmacher.org/state-policy/explore/overview-abortion-laws"
        },
        {
          statement: "Maternal mortality rates in the U.S. are higher than other developed nations",
          source: "CDC National Center for Health Statistics",
          sourceUrl: "https://www.cdc.gov/nchs"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Guttmacher Institute - Abortion Data & Research",
          url: "https://www.guttmacher.org",
          description: "Comprehensive research on reproductive health and abortion statistics",
          source: "Guttmacher Institute"
        },
        {
          title: "Charlotte Lozier Institute - Pro-Life Research",
          url: "https://lozierinstitute.org",
          description: "Research from a pro-life perspective on abortion and women's health",
          source: "Charlotte Lozier Institute"
        },
        {
          title: "American College of Obstetricians and Gynecologists",
          url: "https://www.acog.org",
          description: "Medical perspectives on reproductive healthcare",
          source: "ACOG"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How do we balance a woman's autonomy with concerns about fetal life?",
        "What restrictions on abortion, if any, do different gestational stages warrant?",
        "How should state and federal roles in abortion policy be determined?",
        "What support should be provided for women facing unintended pregnancies?",
        "How do we handle medically complex situations involving maternal health risks?",
        "What's the role of healthcare providers' conscience rights vs. patient access?",
        "Can Americans with different moral views coexist with different state laws?"
      ]
    }
  },
  {
    id: "federal-budget-deficit",
    title: "Federal Budget & National Debt",
    category: "economic-opportunity",
    description: "Managing government spending, the federal deficit, and long-term fiscal sustainability",
    explainer: {
      title: "What's the Challenge?",
      content: "The federal government spends more than it collects in revenue, adding to a national debt that crossed $39 trillion in March 2026 and continues to grow by roughly $2.7 trillion per year. Interest payments on this debt now consume more than $1 trillion annually—more than defense spending. While most Americans express concern about the deficit, politicians from both parties have contributed to the problem—Republicans through tax cuts and defense spending, Democrats through social programs and healthcare expansion. The challenge is addressing unsustainable debt without harming vulnerable Americans or economic growth."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The current path of federal spending is unsustainable long-term",
        "Government waste and inefficiency should be eliminated",
        "Both spending cuts and revenue increases will likely be needed",
        "Social Security and Medicare face funding shortfalls that need addressing",
        "Interest payments on the debt are crowding out other priorities",
        "Politicians in both parties have contributed to the problem",
        "Defense spending should be efficient and auditable",
        "Tax loopholes that benefit special interests should be closed",
        "Future generations shouldn't bear unfair burdens from today's decisions",
        "Economic growth helps but won't solve the problem alone"
      ],
      surveySource: "Pew Research Center 2025-2026, Committee for a Responsible Federal Budget"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Tax cuts for the wealthy and corporations created the deficit crisis",
          "We can afford social programs if billionaires and corporations pay their fair share",
          "Cutting Social Security and Medicare benefits harms vulnerable Americans",
          "Defense spending is bloated and filled with waste from contractors",
          "Investing in infrastructure, education, and healthcare grows the economy and pays for itself",
          "Republicans only care about deficits when Democrats propose helping working families"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Excessive government spending and entitlement programs drive unsustainable debt",
          "We have a spending problem, not a revenue problem—government takes enough already",
          "Raising taxes kills economic growth and punishes success",
          "Entitlement reform is essential but Democrats demagogue any proposed changes",
          "Waste, fraud, and abuse in government programs must be eliminated",
          "Democrats only propose tax increases, never real spending cuts"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "U.S. national debt crossed $39 trillion in March 2026 and reached approximately $38.9 trillion as of May 2026, well over 120% of GDP",
          source: "U.S. Treasury Fiscal Data; Joint Economic Committee monthly debt updates",
          sourceUrl: "https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/"
        },
        {
          statement: "Net interest on the debt now exceeds $1 trillion per year—approximately $3 billion per day—surpassing defense spending",
          source: "Congressional Budget Office; CBO Budget Outlook",
          sourceUrl: "https://www.cbo.gov"
        },
        {
          statement: "Social Security and Medicare together account for about 40% of federal spending",
          source: "Office of Management and Budget",
          sourceUrl: "https://www.whitehouse.gov/omb/"
        },
        {
          statement: "Deficits have exceeded $1 trillion annually under both Republican and Democratic presidents",
          source: "Congressional Budget Office",
          sourceUrl: "https://www.cbo.gov"
        },
        {
          statement: "Without policy changes, CBO projects debt will reach 180% of GDP by 2050",
          source: "Congressional Budget Office Long-Term Outlook",
          sourceUrl: "https://www.cbo.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Committee for a Responsible Federal Budget",
          url: "https://www.crfb.org",
          description: "Nonpartisan fiscal policy analysis and budget education",
          source: "CRFB"
        },
        {
          title: "Congressional Budget Office",
          url: "https://www.cbo.gov",
          description: "Nonpartisan budget and economic analysis for Congress",
          source: "CBO"
        },
        {
          title: "U.S. Treasury - Fiscal Data",
          url: "https://fiscaldata.treasury.gov",
          description: "Official data on federal revenue, spending, and debt",
          source: "U.S. Department of Treasury"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What combination of spending cuts and revenue increases is fair and effective?",
        "How do we reform Social Security and Medicare to ensure long-term solvency?",
        "Should we prioritize deficit reduction or economic growth?",
        "What government programs provide the best return on investment?",
        "How do we reduce waste without harming people who depend on government services?",
        "What's a sustainable level of debt relative to GDP?",
        "Should we require balanced budgets except in emergencies?"
      ]
    }
  },
  {
    id: "crime-public-safety",
    title: "Crime & Public Safety",
    category: "public-safety",
    description: "Addressing violent crime, property crime, policing reform, and community safety",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans across the political spectrum want safe communities, but disagree on how to achieve them. The 'defund the police' vs. 'law and order' debate obscures common ground on criminal justice reform. While crime rates have fluctuated—with violent crime declining overall from 1990s peaks but spiking during the pandemic—perception of crime often differs from reality. Communities of color face both higher crime victimization and more negative police interactions. Effective public safety requires both accountability and adequate resources."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Everyone deserves to live in a safe community free from crime",
        "Both police and communities they serve deserve respect and protection",
        "Violent criminals should face serious consequences",
        "Police misconduct should be investigated and punished",
        "Mental health crises often require specialized response, not just police",
        "Addiction treatment can be more effective than incarceration for non-violent offenders",
        "Poverty and lack of opportunity contribute to crime",
        "Victims of crime deserve support and justice",
        "Police departments need proper training, standards, and accountability",
        "Community investment and crime prevention matter as much as enforcement"
      ],
      surveySource: "Pew Research Center 2024-2025, Police Reform Polling"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Systemic racism in policing leads to disproportionate violence against Black and brown communities",
          "Mass incarceration has failed and destroyed families without making communities safer",
          "Police departments need fundamental reform including accountability, training, and demilitarization",
          "Investing in jobs, education, and social services prevents crime more effectively than prisons",
          "Cash bail system keeps poor people in jail while wealthy criminals go free",
          "War on Drugs has been racist, destructive, and must end"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Defund the police rhetoric and soft-on-crime policies have made cities more dangerous",
          "Prosecutors who refuse to enforce laws enable criminals and betray victims",
          "Strict enforcement and tough sentencing deter crime and protect law-abiding citizens",
          "Police are heroes who risk their lives daily, not the enemy",
          "Bail reform puts dangerous criminals back on streets to reoffend",
          "Crime is a choice—criminals must face consequences, not excuses"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Violent crime rates remain near multi-decade lows: roughly half their 1993 peak. After a pandemic-era spike, 2023 and 2024 saw notable nationwide declines in murder and overall violent crime",
          source: "FBI Uniform Crime Report; Council on Criminal Justice analysis",
          sourceUrl: "https://www.fbi.gov/services/cjis/ucr"
        },
        {
          statement: "Over 60% of crimes go unreported to police according to victim surveys",
          source: "Bureau of Justice Statistics National Crime Victimization Survey",
          sourceUrl: "https://bjs.ojp.gov"
        },
        {
          statement: "U.S. incarceration rate is highest in the world: 629 per 100,000 population",
          source: "Prison Policy Initiative",
          sourceUrl: "https://www.prisonpolicy.org"
        },
        {
          statement: "Black Americans are victimized by violent crime at higher rates than other groups",
          source: "Bureau of Justice Statistics",
          sourceUrl: "https://bjs.ojp.gov"
        },
        {
          statement: "Police officers have one of the most dangerous jobs, with 60,000+ assaults annually",
          source: "FBI Law Enforcement Officers Killed and Assaulted",
          sourceUrl: "https://ucr.fbi.gov/leoka"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Bureau of Justice Statistics",
          url: "https://bjs.ojp.gov",
          description: "Comprehensive crime statistics and criminal justice data",
          source: "U.S. Department of Justice"
        },
        {
          title: "Police Executive Research Forum",
          url: "https://www.policeforum.org",
          description: "Research and best practices in policing and public safety",
          source: "PERF"
        },
        {
          title: "Brennan Center for Justice",
          url: "https://www.brennancenter.org/issues/reform-criminal-justice",
          description: "Research on criminal justice reform and evidence-based policy",
          source: "Brennan Center"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What police reforms improve both accountability and public safety?",
        "How do we address violent crime while reducing mass incarceration?",
        "What's the right balance between enforcement and prevention investment?",
        "How should mental health crises and addiction be handled?",
        "What can reduce crime without relying solely on police and prisons?",
        "How do we rebuild trust between police and communities of color?",
        "What criminal justice policies have the best evidence of effectiveness?"
      ]
    }
  },
  {
    id: "foreign-policy-security",
    title: "Foreign Policy & National Security",
    category: "government",
    description: "America's role in the world, defense spending, and relationships with allies and adversaries",
    explainer: {
      title: "What's the Challenge?",
      content: "Americans debate how engaged the U.S. should be globally. Some advocate 'America First' policies focused on domestic priorities, while others argue international engagement protects American interests and values. Challenges include managing relationships with China and Russia, supporting allies in Europe and Asia, addressing terrorism and nuclear proliferation, and determining when and how to use military force. In the Trump second term these debates have sharpened: the administration has used economic pressure on allies (including tariff threats over Greenland), reshaped U.S. policy on Ukraine and the Middle East, and conducted direct military action in Venezuela. With ongoing conflicts and great-power competition, these questions have real consequences."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "America's military should be strong enough to deter adversaries",
        "Terrorism and nuclear proliferation pose serious threats",
        "Alliances with democracies generally serve American interests",
        "China's growing military and economic power requires serious attention",
        "American troops shouldn't be deployed without clear objectives and exit strategies",
        "Diplomacy should be tried before military action when possible",
        "Cybersecurity and protecting critical infrastructure matter",
        "International trade should benefit American workers and companies",
        "Veterans deserve full support and quality healthcare",
        "Foreign aid should serve American interests and be spent effectively"
      ],
      surveySource: "Pew Research Center Global Attitudes 2025, Chicago Council on Global Affairs Survey 2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Threatening allies like Denmark and pressuring NATO weakens America's standing and emboldens authoritarians",
          "Cutting support to Ukraine rewards Russian aggression and erodes the post-war order America helped build",
          "Direct military action like the Venezuela operation sets dangerous precedents and risks escalation",
          "Climate change is a long-term national security threat that current policy ignores",
          "Defense budget is bloated while diplomacy and development are underfunded",
          "Human rights and democracy should guide foreign policy, not just narrow interests"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Peace through strength—a robust military and willingness to act prevent war more than diplomacy alone",
          "America First means prioritizing our interests over endless foreign commitments and unfair trade arrangements",
          "China is the primary long-term threat and deserves the most focus",
          "NATO allies must pay their fair share instead of relying on American protection",
          "Decisive action—like removing a narcoterrorist regime in Venezuela—shows resolve adversaries respect",
          "International organizations often undermine American sovereignty and should be resisted"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "U.S. defense spending exceeds $900 billion annually, more than the next 10 countries combined",
          source: "Department of Defense Budget; SIPRI Military Expenditure Database",
          sourceUrl: "https://www.sipri.org/databases/milex"
        },
        {
          statement: "The U.S. has mutual defense treaties with over 50 countries including NATO members",
          source: "U.S. State Department",
          sourceUrl: "https://www.state.gov"
        },
        {
          statement: "China's defense budget has grown over 700% since 2000",
          source: "Stockholm International Peace Research Institute",
          sourceUrl: "https://www.sipri.org"
        },
        {
          statement: "Foreign aid represents less than 1% of the federal budget",
          source: "Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "Russia, China, and North Korea have significantly expanded nuclear arsenals",
          source: "Arms Control Association",
          sourceUrl: "https://www.armscontrol.org"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Council on Foreign Relations",
          url: "https://www.cfr.org",
          description: "Nonpartisan foreign policy analysis and educational resources",
          source: "CFR"
        },
        {
          title: "Chicago Council on Global Affairs",
          url: "https://www.thechicagocouncil.org",
          description: "Public opinion research on American views of foreign policy",
          source: "Chicago Council"
        },
        {
          title: "Center for Strategic and International Studies",
          url: "https://www.csis.org",
          description: "Bipartisan policy research on national security and international affairs",
          source: "CSIS"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should the U.S. respond to China's military expansion and human rights abuses?",
        "What's America's responsibility to support democracies facing authoritarian aggression?",
        "Should defense spending increase, decrease, or be reallocated?",
        "When should the U.S. use military force vs. diplomacy and sanctions?",
        "How do we balance international commitments with domestic priorities?",
        "What role should NATO play 75 years after its founding?",
        "How can the U.S. address nuclear threats from North Korea and Iran?"
      ]
    }
  },
  {
    id: "ai-misinformation-trust",
    title: "AI, Deepfakes & the Crisis of Truth",
    category: "technology",
    description: "How artificial intelligence is making it impossible to know what's real online—and what we can do about it",
    explainer: {
      title: "What's the Challenge?",
      content: "Artificial intelligence has created a crisis of trust in information. AI-generated images, videos, and text are now indistinguishable from reality. Deepfake technology can put anyone's face on anyone's body, make politicians say things they never said, and create entirely fabricated 'evidence' of events that never happened. Meanwhile, AI-powered bots flood social media with propaganda, and sophisticated algorithms manipulate what information you see. The result: it's increasingly difficult to know what's real and what's fake online. This threatens democracy itself—when citizens can't agree on basic facts, self-governance becomes impossible."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "It's becoming impossible to know what's real online",
        "AI-generated misinformation poses serious threats to democracy",
        "Social media companies should do more to combat fake content",
        "Deepfake technology is dangerous and should have guardrails",
        "Children are especially vulnerable to AI-generated manipulation",
        "Foreign adversaries are using AI to spread propaganda and division",
        "Journalists and fact-checkers face an impossible task against AI-generated content",
        "The speed of AI advancement has outpaced our ability to regulate it",
        "We need better tools to verify what's authentic",
        "This problem will only get worse without action"
      ],
      surveySource: "Pew Research Center 2024-2025, AI Trust Survey"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Tech companies prioritized profit over truth and enabled this crisis",
          "AI is amplifying existing problems of disinformation and hate speech",
          "Unregulated AI threatens marginalized communities who are targeted by deepfakes",
          "We need strong government regulation of AI development and deployment",
          "AI-generated misinformation undermines climate science and public health",
          "Big Tech's AI tools are being used to manipulate elections and suppress votes"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Mainstream media already spreads misinformation—AI just makes it more obvious",
          "Government regulation of AI will be used to censor conservative speech",
          "Big Tech companies use 'fact-checking' to suppress conservative viewpoints",
          "The real problem is lack of media literacy, not AI technology itself",
          "Free market and technology innovation will solve these problems better than regulation",
          "Government can't be trusted to determine what's true or false"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "The large majority of Americans report encountering misinformation online; more than 6 in 10 say they see it regularly",
          source: "Pew Research Center 2024-2025",
          sourceUrl: "https://www.pewresearch.org/topic/internet-technology/"
        },
        {
          statement: "The volume of identified deepfake content online has grown by orders of magnitude since 2022, with rapid growth continuing into 2025-2026",
          source: "Sensity AI; Reality Defender industry reports",
          sourceUrl: "https://sensity.ai"
        },
        {
          statement: "Multiple peer-reviewed studies have found that most Americans cannot reliably distinguish AI-generated images from real photos without help",
          source: "MIT Media Lab and academic studies",
          sourceUrl: "https://www.media.mit.edu"
        },
        {
          statement: "Foreign influence operations using AI targeted the 2024 U.S. election from Russia, China, and Iran; U.S. intelligence officials have warned of similar activity ahead of the 2026 midterms",
          source: "Office of the Director of National Intelligence",
          sourceUrl: "https://www.dni.gov"
        },
        {
          statement: "AI-generated scam calls, texts, and impersonation losses cost Americans well over $10 billion in 2024, with FTC data showing continued growth in 2025",
          source: "Federal Trade Commission Consumer Sentinel data",
          sourceUrl: "https://www.ftc.gov/news-events/topics/consumer-protection/consumer-sentinel-network"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "AI Incident Database",
          url: "https://incidentdatabase.ai",
          description: "Comprehensive catalog of AI harms and incidents",
          source: "Partnership on AI"
        },
        {
          title: "NewsGuard - Misinformation Tracking",
          url: "https://www.newsguardtech.com",
          description: "Real-time tracking of misinformation and AI-generated fake news",
          source: "NewsGuard Technologies"
        },
        {
          title: "MIT Center for Constructive Communication",
          url: "https://www.ccc.mit.edu",
          description: "Research on combating online misinformation and restoring trust",
          source: "MIT"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How do we regulate AI-generated content without enabling censorship?",
        "Should AI-generated images and videos be required to carry watermarks or labels?",
        "What responsibility do tech platforms have for AI-generated misinformation?",
        "How can we teach people to be more skeptical of online content without promoting conspiracy thinking?",
        "Should creating malicious deepfakes be a federal crime?",
        "Can we develop technology to detect AI-generated content faster than AI can fool it?",
        "What role should government play in determining what information is true or false?",
        "How do we protect democracy when citizens can't agree on basic facts?"
      ]
    }
  },
  {
    id: "faith-and-politics",
    title: "Faith and Politics",
    category: "civic-engagement",
    description: "Balancing religious freedom with pluralistic democracy—respecting the role of faith in public life while protecting everyone's rights.",
    explainer: {
      title: "Understanding Faith in American Politics",
      content: "For millions of Americans, faith is not just a personal belief—it's a fundamental part of their identity and worldview that naturally influences how they think about justice, community, and the common good. The Founders protected religious freedom as the First Amendment right while also prohibiting the establishment of a state religion. Today's debates center on where to draw lines: How do we honor the deep religious convictions that guide many citizens while ensuring government doesn't favor one faith over others? How do we protect religious liberty while also protecting people from discrimination? These aren't abstract questions—they affect everything from education and healthcare to marriage equality and end-of-life care. The challenge is creating a society where people of all faiths (and no faith) can live according to their convictions while respecting others' rights to do the same."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Religious freedom is a fundamental American right that must be protected",
        "People of faith have every right to participate in politics and advocate for their values",
        "Government shouldn't tell religious institutions what to believe or how to worship",
        "No single religion should control government policy in a diverse democracy",
        "We can disagree deeply on moral questions while still respecting each other's humanity",
        "Faith-based charities and organizations provide invaluable community services",
        "Both religious liberty and protection from discrimination are important values"
      ],
      surveySource: "Pew Research Center - Americans' Views on Religion and Politics (2024-2025)"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Separation of church and state protects both religious freedom and secular governance—government shouldn't favor any religion",
          "Religious liberty can't be used as license to discriminate against LGBTQ+ people, women, or religious minorities",
          "Public policy should be based on evidence and secular reasoning accessible to citizens of all faiths and none",
          "Christian nationalism—the idea that America should be officially Christian—threatens democracy and religious pluralism",
          "We must protect people from having others' religious beliefs imposed on them through law (abortion bans, restrictions on contraception, etc.)",
          "Faith communities can be powerful voices for justice, inclusion, and care for the marginalized"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "America was founded on Judeo-Christian values and that heritage should be honored, not erased from public life",
          "People of faith shouldn't have to 'check their religion at the door' when entering politics—their values are valid",
          "Religious liberty is under attack from progressive policies that force people to violate their conscience (contraception mandates, etc.)",
          "Faith-based institutions (schools, hospitals, charities) should be free to operate according to their beliefs without government interference",
          "Moral truths derived from religious tradition provide essential foundations for law and society",
          "The phrase 'separation of church and state' doesn't appear in the Constitution—it means government can't establish a religion, not that faith has no place in public life",
          "Secular progressivism has become its own kind of religion imposed on everyone through government and culture"
        ]
      }
    },
    keyFacts: {
      title: "Key Facts",
      facts: [
        {
          statement: "76% of Americans say religion is losing influence in American life, while 56% say this is a bad thing",
          source: "Pew Research Center 2024-2025",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "First Amendment: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof'",
          source: "U.S. Constitution",
          sourceUrl: "https://constitution.congress.gov"
        },
        {
          statement: "63% of Americans say churches and religious organizations do more good than harm in American society",
          source: "Pew Research Center 2023-2024",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "Religious 'nones' (atheist, agnostic, or 'nothing in particular') now make up 28% of U.S. adults, up from 16% in 2007",
          source: "Pew Research Center 2024-2025",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "69% of Democrats and 49% of Republicans say churches should keep out of political matters",
          source: "Pew Research Center 2024",
          sourceUrl: "https://www.pewresearch.org"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Pew: Religion & Politics Research",
          url: "https://www.pewresearch.org/topic/religion/",
          description: "Comprehensive data on Americans' religious beliefs and political engagement",
          source: "Pew Research Center"
        },
        {
          title: "Freedom Forum - First Amendment Center",
          url: "https://www.freedomforum.org",
          description: "Education and resources on religious liberty and First Amendment rights",
          source: "Freedom Forum Institute"
        },
        {
          title: "Interfaith Alliance",
          url: "https://www.interfaithalliance.org",
          description: "Protecting faith and freedom while defending religious diversity",
          source: "Interfaith Alliance"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How do we protect religious liberty without enabling discrimination?",
        "Should religious organizations that receive government funding be exempt from anti-discrimination laws?",
        "What role should religious moral frameworks play in shaping public policy?",
        "How do we balance parents' religious freedom with children's rights (medical care, education, etc.)?",
        "Should public schools allow religious expression by students? By teachers?",
        "Where is the line between honoring America's religious heritage and establishing a state religion?",
        "Can a pluralistic democracy function when citizens disagree fundamentally about moral truth?",
        "How do we create space for people to live by their religious convictions without imposing them on others?"
      ]
    }
  },
  {
    id: "greenland-territorial-expansion",
    title: "Greenland & U.S. Territorial Expansion",
    category: "government",
    description: "The Trump administration's push to acquire Greenland has driven an ongoing diplomatic crisis with Denmark and a debate about American territorial ambitions",
    explainer: {
      title: "What's the Challenge?",
      content: "Since returning to office in January 2025, President Trump has pursued American acquisition of Greenland—the world's largest island and an autonomous territory of Denmark—triggering an ongoing diplomatic crisis. Trump first floated the idea in 2019, but in 2025 and early 2026 he refused to rule out military force or economic coercion, threatened 25% tariffs on European goods unless Denmark relinquished the island, and dispatched senior officials to advance the effort. At the World Economic Forum in Davos in January 2026, Trump publicly pulled back from threats of force or tariffs and described a 'framework' for a future arrangement after meeting with NATO Secretary General Mark Rutte, though no agreement was announced. Denmark and Greenland have repeatedly stated the island is not for sale; Greenland's prime minister Jens-Frederik Nielsen has reaffirmed Greenlandic self-determination. Greenland is strategically important for Arctic military positioning, rare earth and mineral resources critical for technology and defense, and new shipping routes opened by melting ice. The episode has sparked debate about American territorial ambitions, NATO cohesion, alliance relationships, and whether 19th-century-style territorial expansion has any place in 21st-century geopolitics."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The Arctic region is strategically important for U.S. national security",
        "China and Russia are expanding their presence in the Arctic and it deserves attention",
        "Rare earth minerals and natural resources matter for American economic security",
        "Climate change is opening new Arctic shipping routes and creating new strategic considerations",
        "Greenland's location is geographically significant for military and economic purposes",
        "Alliance relationships with democratic partners like Denmark are valuable",
        "Any territorial changes should respect the self-determination of people involved",
        "The U.S. should protect its strategic interests in the Arctic region"
      ],
      surveySource: "Arctic Policy Polling, Pew Research and Chicago Council Foreign Policy Surveys 2025-2026"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Trump's Greenland obsession is neo-colonial thinking that treats people and land as commodities to be bought",
          "Threatening allies like Denmark with military or economic coercion is dangerous and alienates democratic partners",
          "Greenlandic people have a right to self-determination—their land isn't for sale regardless of American desires",
          "This rhetoric damages America's credibility and makes us look like an imperial bully",
          "The focus should be on climate change in the Arctic, not territorial conquest",
          "Trump's transactional approach to foreign policy treats alliances as business deals rather than shared values"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Trump is right to think strategically about American interests in the Arctic as China and Russia expand there",
          "Greenland's strategic location and resources are too important to ignore in great power competition",
          "The U.S. has successfully acquired territory before (Louisiana Purchase, Alaska) when strategic interests demanded it",
          "Denmark hasn't adequately defended or developed Greenland—American investment could benefit everyone",
          "Being willing to use economic and military leverage shows strength, not weakness",
          "Liberal critics mock Trump but offer no alternative strategy for countering China and Russia in the Arctic",
          "America First means protecting American strategic interests, including in the Arctic"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Greenland has a population of about 57,000 people, predominantly Inuit, and has been self-governing under Danish sovereignty since 1979",
          source: "Government of Greenland",
          sourceUrl: "https://naalakkersuisut.gl"
        },
        {
          statement: "The U.S. already has Pituffik Space Base (formerly Thule Air Base) in Greenland, a critical early warning radar installation",
          source: "U.S. Space Force",
          sourceUrl: "https://www.spaceforce.mil"
        },
        {
          statement: "Greenland holds significant deposits of rare earth elements, uranium, and other minerals increasingly important for technology and defense",
          source: "U.S. Geological Survey",
          sourceUrl: "https://www.usgs.gov"
        },
        {
          statement: "The U.S. offered to purchase Greenland in 1946 for $100 million; Denmark refused then as now",
          source: "Historical Records, U.S. State Department",
          sourceUrl: "https://history.state.gov"
        },
        {
          statement: "China has attempted investments in Greenland's mining and infrastructure, raising U.S. security concerns",
          source: "Department of Defense Arctic Strategy",
          sourceUrl: "https://www.defense.gov"
        },
        {
          statement: "In early 2026 the Trump administration threatened 25% tariffs on European goods over Greenland; at Davos in January 2026 Trump publicly stepped back from threats of force and described a 'framework' for a future deal, without announcing terms",
          source: "Council on Foreign Relations, Al Jazeera reporting",
          sourceUrl: "https://www.cfr.org/articles/greenlands-independence-what-would-mean-us-interests"
        },
        {
          statement: "Greenland's prime minister Jens-Frederik Nielsen and Denmark's government have publicly and repeatedly stated the island is not for sale",
          source: "Government of Greenland statements; House of Commons Library briefing",
          sourceUrl: "https://commonslibrary.parliament.uk/research-briefings/cbp-10472/"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Council on Foreign Relations - Greenland and U.S. Interests",
          url: "https://www.cfr.org/articles/greenlands-independence-what-would-mean-us-interests",
          description: "Non-partisan analysis of U.S. strategic interests and Greenland's independence movement",
          source: "Council on Foreign Relations"
        },
        {
          title: "Wilson Center - Polar Initiative",
          url: "https://www.wilsoncenter.org/program/polar-initiative",
          description: "Nonpartisan research on Arctic geopolitics, security, and climate",
          source: "Wilson Center"
        },
        {
          title: "Government of Greenland",
          url: "https://naalakkersuisut.gl",
          description: "Official information on Greenland's self-governance and perspectives",
          source: "Naalakkersuisut (Greenland Self-Government)"
        },
        {
          title: "House of Commons Library - Trump and Greenland",
          url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10472/",
          description: "UK Parliament's non-partisan briefing on the diplomatic dispute",
          source: "UK House of Commons Library"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should the U.S. balance strategic interests in the Arctic with respecting allies and self-determination?",
        "Is territorial expansion an appropriate strategy for 21st-century great power competition?",
        "What alternative approaches could protect U.S. Arctic interests without threatening to purchase Greenland?",
        "How should America respond to Chinese and Russian expansion in the Arctic?",
        "Does Trump's willingness to use economic or military coercion strengthen or weaken America's position?",
        "What's the right balance between strategic resource security and alliance relationships?",
        "Should the U.S. increase investment in Arctic military capabilities regardless of Greenland acquisition?"
      ]
    }
  },
  {
    id: "venezuela-regime-change",
    title: "Venezuela After Maduro: U.S. Intervention & Transition",
    category: "government",
    description: "The U.S. military capture of Nicolás Maduro in January 2026 and Venezuela's contested transition reopen long-standing debates about American intervention abroad",
    explainer: {
      title: "What's the Challenge?",
      content: "On January 3, 2026, U.S. military forces conducted a strike in Venezuela that captured Nicolás Maduro, who had clung to power despite widespread evidence that opposition candidate Edmundo González won the July 2024 presidential election. Maduro was transferred to New York and indicted on narcoterrorism charges; he pleaded not guilty in Manhattan federal court on January 5. Venezuela's former vice president Delcy Rodríguez—a member of Maduro's inner circle—was sworn in as acting president, and the Trump administration has formally recognized her interim government rather than González (who fled to Spain) or Nobel laureate opposition leader María Corina Machado. President Trump has stated the United States will play a role in stabilizing the country. Venezuela had already collapsed from South America's wealthiest nation into an authoritarian state with hyperinflation, mass poverty, and over 7 million refugees. The new chapter raises fundamental questions: Was a U.S. military operation to remove a foreign head of state lawful, wise, and effective? What obligations follow capture—rebuilding institutions, holding elections, or stepping back? Why was the opposition leader most associated with the democratic movement (Machado) sidelined? And what happens to the millions of Venezuelan refugees, many of whom hoped to return home?"
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The Venezuelan people have suffered under years of authoritarian rule and economic collapse",
        "Maduro repressed political opponents, rigged elections, and destroyed Venezuela's economy",
        "The humanitarian and refugee situation demands sustained attention",
        "Venezuelan refugees deserve compassion alongside reasonable border security",
        "Foreign backing of Maduro by Russia, Cuba, and China threatened regional stability",
        "A legitimate, accountable transition is preferable to either continued authoritarianism or chaos",
        "Lessons from Iraq, Libya, and Afghanistan should inform how the U.S. handles the aftermath",
        "Any new Venezuelan government should ultimately be chosen by Venezuelans in free elections"
      ],
      surveySource: "Americas Barometer, Pew Research and Chicago Council Latin America Surveys 2025-2026"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Using U.S. military force to capture a foreign head of state sets a dangerous precedent and may violate international law",
          "Recognizing Delcy Rodríguez—a Maduro insider—while sidelining Nobel laureate María Corina Machado betrays the democracy movement",
          "Iraq, Libya, and Afghanistan show that toppling regimes is the easy part; rebuilding is where America has repeatedly failed",
          "Years of broad U.S. sanctions deepened humanitarian suffering for ordinary Venezuelans long before the military operation",
          "Venezuelans, not Washington, must lead any legitimate transition; permanent U.S. stewardship would be neocolonial",
          "Venezuelan refugees in the U.S. deserve protected status and a clear path to safety, not enforcement-first policy",
          "Oil interests and great-power competition with China and Russia complicate America's stated humanitarian motives"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Removing Maduro—indicted on narcoterrorism charges and propped up by Russia, Cuba, and China—was a long-overdue act of strength",
          "Venezuela stands as a cautionary example of how socialist policy can destroy a once-prosperous nation",
          "The Monroe Doctrine remains relevant: hostile foreign powers should not be allowed to entrench themselves in the Western Hemisphere",
          "A stable post-Maduro Venezuela can reduce the regional refugee flows that have strained the U.S. southern border",
          "Working with a transitional government, even an imperfect one like Rodríguez's, may be more practical than insisting on perfect outcomes",
          "American leadership in supporting transitions can deter other authoritarians backed by U.S. adversaries",
          "Targeted action against an indicted narcoterrorist regime is different from open-ended nation-building"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Over 7.7 million Venezuelans have fled the country since 2015—one of the world's largest displacement crises",
          source: "UNHCR (UN Refugee Agency)",
          sourceUrl: "https://www.unhcr.org"
        },
        {
          statement: "Venezuela's GDP contracted by over 75% from 2013, with hyperinflation reaching extreme highs before partial dollarization stabilized prices",
          source: "World Bank, IMF Data",
          sourceUrl: "https://www.worldbank.org"
        },
        {
          statement: "The U.S., EU, and over 50 countries recognized Juan Guaidó as interim president in 2019, but he failed to dislodge Maduro",
          source: "U.S. State Department",
          sourceUrl: "https://www.state.gov"
        },
        {
          statement: "Independent vote-tally records published by opposition observers indicated Edmundo González won the July 2024 presidential election; Maduro's electoral authority declared him winner without releasing detailed results",
          source: "Carter Center Election Observation, OAS Reports",
          sourceUrl: "https://www.cartercenter.org"
        },
        {
          statement: "On January 3, 2026, U.S. forces captured Nicolás Maduro in Venezuela; he was transferred to New York and indicted on narcoterrorism charges, pleading not guilty on January 5",
          source: "U.S. Department of Justice indictment; CNN reporting",
          sourceUrl: "https://www.cnn.com/world/live-news/venezuela-explosions-caracas-intl-hnk-01-03-26"
        },
        {
          statement: "Delcy Rodríguez was sworn in as acting president of Venezuela on January 5, 2026; the U.S. has formally recognized her interim government while opposition leader María Corina Machado, who won the Nobel Peace Prize for promoting Venezuelan democracy, has been excluded from the transition plan",
          source: "Atlantic Council, France 24, CFR analysis",
          sourceUrl: "https://www.cfr.org/expert-brief/assessing-venezuelas-future-after-nicolas-maduros-bold-capture"
        },
        {
          statement: "Venezuela has the world's largest proven oil reserves but production has collapsed under mismanagement and sanctions",
          source: "U.S. Energy Information Administration",
          sourceUrl: "https://www.eia.gov"
        },
        {
          statement: "Russia, China, and Iran have provided Venezuela with billions in loans, weapons, and technical support",
          source: "Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Council on Foreign Relations - Venezuela After Maduro",
          url: "https://www.cfr.org/expert-brief/assessing-venezuelas-future-after-nicolas-maduros-bold-capture",
          description: "Comprehensive analysis of Venezuela's transition after Maduro's capture",
          source: "Council on Foreign Relations"
        },
        {
          title: "International Crisis Group - Venezuela After Maduro",
          url: "https://www.crisisgroup.org/latin-america-caribbean/venezuela-united-states/venezuela-after-maduro-transaction-or-transition",
          description: "Non-partisan analysis of whether the transition leads to genuine democratic change",
          source: "International Crisis Group"
        },
        {
          title: "Human Rights Watch - Venezuela",
          url: "https://www.hrw.org/americas/venezuela",
          description: "Documentation of human rights abuses and transition concerns",
          source: "Human Rights Watch"
        },
        {
          title: "Wilson Center - Venezuela Program",
          url: "https://www.wilsoncenter.org/program/latin-american-program",
          description: "Policy research on Venezuela crisis and U.S. response options",
          source: "Wilson Center"
        },
        {
          title: "UNHCR - Venezuelan Refugee Crisis",
          url: "https://www.unhcr.org/venezuela-emergency.html",
          description: "Data and humanitarian response to Venezuelan displacement",
          source: "UN Refugee Agency"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Was the U.S. military operation to capture Maduro legal under international law and the U.S. Constitution?",
        "Was recognizing Delcy Rodríguez—a Maduro insider—the right call, or should the U.S. have backed Machado or González?",
        "What obligations does the U.S. have for Venezuela's reconstruction after a military intervention?",
        "How can the transition lead to genuinely free elections rather than another authoritarian government?",
        "What lessons from Iraq, Libya, and Afghanistan should shape the post-Maduro period?",
        "Have years of U.S. sanctions hurt the Venezuelan people more than they hurt the regime?",
        "What's the right approach to Venezuelan refugees in the U.S. now that the regime that drove them out has fallen?",
        "Does the precedent of capturing a foreign head of state make America safer or invite future retaliation?",
        "How do we counter Russian, Cuban, and Chinese influence in Latin America going forward?",
        "Does supporting transitions in Latin America serve American interests or represent imperialism?"
      ]
    }
  },
  {
    id: "tariffs-trade-policy",
    title: "Tariffs & Trade Policy",
    category: "economic-opportunity",
    description: "The Trump administration's tariff agenda has reshaped U.S. trade policy and prompted debate over its impact on prices, manufacturing, and alliances",
    explainer: {
      title: "What's the Challenge?",
      content: "Since January 2025 the Trump administration has used tariffs more aggressively than any U.S. government in nearly a century: broad-based tariffs on most imports, sharply higher tariffs on China, targeted tariffs on steel, aluminum, autos, and other sectors, and the threat of new tariffs as a negotiating tool with allies like Canada, Mexico, and the EU. Supporters argue tariffs are needed to revive American manufacturing, reduce dependence on China, and force trading partners to negotiate fairer terms. Critics argue tariffs are taxes paid largely by U.S. importers and consumers, raise costs across the supply chain, invite retaliation, and have not historically restored lost manufacturing jobs. Court challenges to the administration's use of emergency powers to impose tariffs are ongoing. Americans broadly agree trade should be fair and that manufacturing matters—but disagree sharply on whether tariffs are the right tool."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Fair trade matters—agreements should be honored and enforced",
        "China's industrial policy, IP theft, and market access barriers warrant a serious response",
        "American manufacturing capability matters for national security and good jobs",
        "Workers and communities hurt by past trade liberalization deserve real support",
        "Supply chains for critical goods (medicines, semiconductors, defense) shouldn't be dangerously concentrated",
        "Trade policy should consider impact on consumers, workers, and farmers—not just one constituency",
        "Long-running trade deficits with strategic rivals deserve scrutiny",
        "Sudden, unpredictable policy changes are hard on businesses and farmers"
      ],
      surveySource: "Chicago Council on Global Affairs Surveys 2024-2025, Pew Research Center"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Tariffs are largely paid by U.S. importers and passed on to consumers, acting as a regressive tax on working families",
          "Targeting allies with tariffs damages relationships America needs to counter China",
          "Decades of evidence shows tariffs alone don't revive manufacturing—investment, training, and industrial policy do",
          "Farmers and exporters bear the cost of retaliation while bailouts paper over the harm",
          "Using emergency powers to set tariff policy bypasses Congress's constitutional authority over trade",
          "Workers deserve adjustment assistance, training, and worker-power policies—not just tariff walls"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Decades of free trade hollowed out American manufacturing and devastated working-class communities",
          "China's mercantilist practices require leverage, not lectures—tariffs are leverage",
          "Tariff threats have already produced new trade concessions and onshoring announcements",
          "National security depends on producing essential goods domestically",
          "The cost of cheap imports has been paid by American workers for forty years; rebalancing has trade-offs but is overdue",
          "America has the largest consumer market in the world and should use that leverage in negotiations"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Economic studies of the 2018-2019 tariffs found the cost was paid largely by U.S. importers and consumers, with limited evidence of foreign exporters absorbing the increase",
          source: "Peer-reviewed research summarized by the National Bureau of Economic Research",
          sourceUrl: "https://www.nber.org"
        },
        {
          statement: "The Tax Foundation estimates that the 2025 tariff measures, if sustained, would reduce U.S. GDP by roughly 0.8% and household after-tax income by about $1,200 on average",
          source: "Tax Foundation tariff tracker",
          sourceUrl: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/"
        },
        {
          statement: "The U.S. goods trade deficit with China narrowed from its peak but remains large; manufacturing employment has been roughly flat-to-slightly-down since 2019",
          source: "U.S. Bureau of Economic Analysis; Bureau of Labor Statistics",
          sourceUrl: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
        },
        {
          statement: "Federal court challenges to the administration's use of the International Emergency Economic Powers Act (IEEPA) for broad tariffs are pending; lower court rulings have been mixed",
          source: "Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "The federal government provided multi-billion-dollar payments to farmers harmed by retaliatory tariffs during the 2018-2019 trade war",
          source: "USDA, GAO reports",
          sourceUrl: "https://www.gao.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Peterson Institute for International Economics — Trade",
          url: "https://www.piie.com/research/trade-investment",
          description: "Non-partisan economic research on trade, tariffs, and globalization",
          source: "Peterson Institute"
        },
        {
          title: "Tax Foundation Tariff Tracker",
          url: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/",
          description: "Ongoing estimates of the economic impact of U.S. tariff policy",
          source: "Tax Foundation"
        },
        {
          title: "U.S. International Trade Commission",
          url: "https://www.usitc.gov",
          description: "Official data on U.S. trade flows, tariff schedules, and industry impact",
          source: "USITC"
        },
        {
          title: "Cato Institute — Trade Policy",
          url: "https://www.cato.org/trade-policy",
          description: "Free-market perspective on trade and tariffs",
          source: "Cato Institute"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Can tariffs actually rebuild U.S. manufacturing, or do they mainly raise prices for consumers?",
        "Should Congress reclaim its constitutional authority over trade, or are emergency tariff powers appropriate?",
        "How should the U.S. respond to China's industrial policy without harming American workers and farmers?",
        "What's the right balance between protecting strategic industries and avoiding broad consumer price increases?",
        "Are bilateral tariff deals more effective than multilateral trade agreements?",
        "How should the government help workers and communities hit by either trade or trade restrictions?"
      ]
    }
  },
  {
    id: "federal-workforce-restructuring",
    title: "Federal Workforce & Government Restructuring",
    category: "government",
    description: "The 2025 Department of Government Efficiency push to shrink and restructure the federal workforce has reignited debate about the size, expertise, and accountability of the federal government",
    explainer: {
      title: "What's the Challenge?",
      content: "In 2025 the Trump administration launched the most aggressive restructuring of the federal civilian workforce in decades. The Department of Government Efficiency (DOGE) drove rapid headcount reductions through deferred-resignation offers, probationary terminations, and reductions in force across many agencies; Schedule F-style executive orders sought to reclassify thousands of career employees as at-will; and entire offices and programs were cut, consolidated, or paused. Supporters argued the federal workforce had grown too large, too expensive, and too unaccountable to voters, and that aggressive action was the only way to deliver promised efficiency. Critics argued the changes were chaotic, often illegal, bypassed Congress's spending power, hollowed out essential expertise, and degraded services Americans rely on. Many actions are under court review."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Government should deliver services efficiently and respect taxpayer dollars",
        "Genuine waste, fraud, and abuse should be eliminated wherever found",
        "Agencies should be accountable to elected leaders and to the public",
        "Career civil servants with deep expertise are an asset worth preserving",
        "Reorganizations should be deliberate enough to avoid breaking essential services",
        "Veterans, retirees, and others who depend on federal programs shouldn't lose services through executive chaos",
        "Congress, not unilateral executive action, has the constitutional power of the purse"
      ],
      surveySource: "Pew Research Center, Partnership for Public Service 2024-2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Mass firings of career civil servants are illegal, capricious, and have already disrupted critical services from Social Security to air traffic control",
          "DOGE operated outside normal oversight, with limited transparency about who decided what to cut and why",
          "Eliminating offices that protect consumers, workers, and the environment doesn't 'cut waste'—it removes guardrails",
          "Schedule F-style reclassification politicizes the civil service and invites cronyism",
          "Cutting expertise hollows out the government's ability to do anything well, including the policies conservatives say they want",
          "Congress, not the executive branch, decides what programs are funded—unilateral cuts violate the Impoundment Control Act"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "The federal workforce had grown bloated and unresponsive; voters elected a president to fix that",
          "Career civil servants too often resist policy direction from elected leadership, undermining democratic accountability",
          "Decades of bipartisan promises to streamline government produced little; aggressive action was the only path to results",
          "Initial DOGE estimates point to real savings that benefit taxpayers and reduce long-term debt pressure",
          "Many agency functions are duplicative, outdated, or could be delivered better by states or the private sector",
          "Making it easier to fire poor performers brings federal employment closer to how the rest of the country works"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "The federal civilian workforce numbered roughly 2.4 million before the 2025 restructuring; DOGE-driven actions and deferred-resignation offers reduced headcount by an estimated several hundred thousand over 2025",
          source: "Office of Personnel Management; Partnership for Public Service tracker",
          sourceUrl: "https://ourpublicservice.org"
        },
        {
          statement: "The civilian workforce is about the same size today as it was in the early 1970s, even though federal spending and population have grown substantially",
          source: "Office of Personnel Management historical data",
          sourceUrl: "https://www.opm.gov/data/"
        },
        {
          statement: "Multiple federal courts have issued injunctions or rulings against portions of the 2025 reductions, including mass terminations of probationary employees and the dismantling of certain congressionally established agencies",
          source: "Congressional Research Service; ongoing federal court rulings",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "DOGE's own public savings claims have been substantially revised downward by independent analysts and the Government Accountability Office",
          source: "Government Accountability Office; New York Times and AP analyses",
          sourceUrl: "https://www.gao.gov"
        },
        {
          statement: "Federal employee compensation accounts for less than 5% of total federal spending; entitlements and interest dominate the budget",
          source: "Congressional Budget Office",
          sourceUrl: "https://www.cbo.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Partnership for Public Service",
          url: "https://ourpublicservice.org",
          description: "Non-partisan research on the federal workforce and good government",
          source: "Partnership for Public Service"
        },
        {
          title: "Government Accountability Office",
          url: "https://www.gao.gov",
          description: "Non-partisan congressional watchdog assessing federal programs and spending",
          source: "GAO"
        },
        {
          title: "Congressional Research Service Reports",
          url: "https://crsreports.congress.gov",
          description: "Non-partisan analysis of federal workforce law and executive authority",
          source: "CRS"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should the federal workforce be sized and structured for the 21st century?",
        "What's the right balance between political accountability and an independent, expert civil service?",
        "When can the executive branch reduce or eliminate programs without Congress?",
        "How do we distinguish genuine waste from services someone depends on?",
        "Should reorganizations be paced to avoid breaking essential services, even if slower?",
        "How should pay, hiring, and firing rules differ between government and the private sector?"
      ]
    }
  },
  {
    id: "birthright-citizenship",
    title: "Birthright Citizenship & the 14th Amendment",
    category: "government",
    description: "The Trump administration's executive order to limit birthright citizenship has triggered one of the most consequential constitutional cases of the decade",
    explainer: {
      title: "What's the Challenge?",
      content: "On his first day back in office in January 2025, President Trump signed an executive order directing federal agencies to refuse U.S. citizenship documents to children born in the United States if neither parent is a citizen or lawful permanent resident. The order challenges more than a century of settled constitutional interpretation: the 14th Amendment's Citizenship Clause—'All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States'—has been understood since United States v. Wong Kim Ark (1898) to extend citizenship to nearly all children born on U.S. soil. The executive order has been blocked in part or in whole by multiple federal courts. The Supreme Court has been asked to weigh in. At stake: whether birthright citizenship can be narrowed by executive action, whether 'subject to the jurisdiction thereof' excludes children of unauthorized immigrants, and what the policy consequences would be either way."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The Constitution, including the 14th Amendment, should be respected",
        "Major changes to constitutional interpretation deserve serious legal and democratic deliberation",
        "Citizenship is a profound legal status that shouldn't be left in administrative limbo for children",
        "The U.S. immigration system needs comprehensive reform",
        "Federal courts have a legitimate role in deciding constitutional questions",
        "Whatever the rule, it should be applied predictably and fairly"
      ],
      surveySource: "Pew Research Center, Gallup 2024-2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "The text of the 14th Amendment is clear: nearly all children born on U.S. soil are citizens at birth, full stop",
          "Wong Kim Ark settled this question in 1898 and has been relied on by generations of Americans, courts, and federal agencies",
          "Ending birthright citizenship would create a permanent underclass of U.S.-born children with no country—a recipe for civil rights crisis",
          "Constitutional amendments require the amendment process; an executive order cannot override the 14th Amendment",
          "The change would force every American to prove their parents' immigration status at birth, fundamentally altering how citizenship works",
          "Most peer comparison countries do extend citizenship at birth, especially in the Americas; the U.S. is in good company, not an outlier"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "The 14th Amendment was written to confer citizenship on freed slaves; extending it to children of unauthorized immigrants distorts the framers' intent",
          "The phrase 'subject to the jurisdiction thereof' was meant to exclude people who owe primary allegiance elsewhere—originally Native Americans and foreign diplomats, but arguably others",
          "Most developed countries in Europe and Asia do not grant automatic citizenship by birth on their soil",
          "Birthright citizenship creates a powerful incentive for unauthorized immigration and 'birth tourism'",
          "The Supreme Court hasn't squarely ruled on the children of unauthorized immigrants since the 14th Amendment was ratified—this is a legitimate question to revisit",
          "Settling the question through litigation is appropriate even if the courts ultimately reject the executive order"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "The 14th Amendment's Citizenship Clause reads: 'All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.'",
          source: "U.S. Constitution, Amendment XIV",
          sourceUrl: "https://constitution.congress.gov/constitution/amendment-14/"
        },
        {
          statement: "In United States v. Wong Kim Ark (1898), the Supreme Court held that a child born in the U.S. to non-citizen parents was a U.S. citizen at birth",
          source: "Supreme Court of the United States; Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "President Trump's January 2025 executive order directing agencies not to recognize birthright citizenship for certain children has been blocked in whole or in part by multiple federal district and appellate courts; cases are proceeding to the Supreme Court",
          source: "Federal court rulings; CRS legal analysis",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "Of major developed countries, the United States and Canada grant unconditional birthright citizenship; most European and Asian nations do not",
          source: "Library of Congress comparative law research",
          sourceUrl: "https://www.loc.gov/law/help/citizenship-pathways/"
        },
        {
          statement: "Estimates of the number of children born annually in the U.S. to at least one unauthorized parent are around 250,000-300,000—about 6-7% of all U.S. births in recent years",
          source: "Pew Research Center analysis of Census data",
          sourceUrl: "https://www.pewresearch.org"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Constitution Annotated — Citizenship Clause",
          url: "https://constitution.congress.gov/browse/essay/amdt14-S1-2/ALDE_00013744/",
          description: "Library of Congress's official annotated guide to the 14th Amendment",
          source: "Congress.gov"
        },
        {
          title: "Congressional Research Service — Birthright Citizenship",
          url: "https://crsreports.congress.gov",
          description: "Non-partisan legal analysis of the citizenship clause and the executive order",
          source: "CRS"
        },
        {
          title: "Migration Policy Institute",
          url: "https://www.migrationpolicy.org",
          description: "Non-partisan research on immigration law and policy",
          source: "Migration Policy Institute"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Can the president change the meaning of the 14th Amendment by executive order?",
        "Does 'subject to the jurisdiction thereof' exclude children of unauthorized immigrants?",
        "What policy effects—on incentives, on a potential stateless underclass—would follow either outcome?",
        "If the U.S. wanted to change the rule, would that require a constitutional amendment?",
        "How should U.S. practice compare to peer democracies on this question?",
        "How should the courts balance long-standing precedent against new constitutional arguments?"
      ]
    }
  },
  {
    id: "entitlement-solvency",
    title: "Social Security & Medicare Solvency",
    category: "economic-opportunity",
    description: "Social Security and Medicare trust funds face insolvency in the next decade unless Congress acts—forcing hard choices about taxes, benefits, and the social contract",
    explainer: {
      title: "What's the Challenge?",
      content: "Social Security and Medicare together support more than 70 million Americans and are the largest items in the federal budget. Both programs face approaching insolvency in their trust funds: Social Security's combined trust funds are projected to run short around 2034-2035, after which incoming payroll taxes would cover only about 80% of scheduled benefits. Medicare's Hospital Insurance trust fund faces a similar deadline. Without congressional action, beneficiaries would face automatic across-the-board cuts. Every year Congress waits, the eventual fix gets harder. The debate cuts across party lines: how much through new revenue, how much through structural changes (retirement age, benefit formulas, means-testing), and how to protect lower-income seniors. Most politicians have promised never to touch benefits for current retirees, narrowing the realistic options."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Social Security and Medicare are essential programs millions depend on",
        "Current retirees and those near retirement should not face benefit cuts they couldn't prepare for",
        "Doing nothing is worse than acting—automatic 20%+ cuts would devastate vulnerable seniors",
        "The longer Congress waits, the harder and more painful the fix becomes",
        "Healthcare costs are a major driver of Medicare's fiscal challenge",
        "Both programs should remain reliable for future generations, not just current beneficiaries",
        "Tax loopholes and gimmicks shouldn't be how we paper over a structural problem"
      ],
      surveySource: "Pew Research Center, AARP, Committee for a Responsible Federal Budget 2024-2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Raising or eliminating the payroll-tax cap so high earners pay on all wages would extend Social Security solvency for decades",
          "Tax wealth, capital gains, and corporate profits—not benefits earned by working people",
          "Raising the retirement age is effectively a benefit cut that hits manual laborers and shorter-lived populations hardest",
          "Means-testing risks undermining political support for universal programs",
          "Allowing Medicare to negotiate drug prices and expanding negotiation authority would slow Medicare cost growth",
          "Cutting these earned benefits while passing tax cuts for the wealthy is morally indefensible"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Demographic reality—fewer workers per retiree, longer lifespans—requires structural reform, not just more taxes",
          "Gradually raising the retirement age tracks rising life expectancy and is already long overdue",
          "Means-testing benefits or slowing cost-of-living growth at the top can preserve the program for those who depend on it most",
          "Allowing personal accounts for younger workers could improve long-term returns and ownership",
          "Tax increases on the most productive earners slow growth and ultimately shrink the base supporting the programs",
          "Medicare reform should empower seniors with choice, not concentrate decisions in Washington"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Social Security's combined trust funds are projected to be depleted around 2034-2035; after depletion, incoming payroll taxes would cover roughly 80% of scheduled benefits",
          source: "Social Security Trustees Report",
          sourceUrl: "https://www.ssa.gov/oact/TR/"
        },
        {
          statement: "Medicare's Hospital Insurance trust fund is projected to be depleted in the early 2030s under current law",
          source: "Medicare Trustees Report",
          sourceUrl: "https://www.cms.gov/oact/tr"
        },
        {
          statement: "Social Security paid benefits to about 69 million people in 2024; Medicare covers more than 67 million beneficiaries",
          source: "Social Security Administration; CMS",
          sourceUrl: "https://www.ssa.gov/news/press/factsheets/basicfact-alt.pdf"
        },
        {
          statement: "Removing the Social Security taxable-wage cap entirely would close roughly two-thirds of the program's long-term shortfall, depending on benefit-credit assumptions",
          source: "Social Security Administration Office of the Chief Actuary; CRFB",
          sourceUrl: "https://www.ssa.gov/oact/solvency/provisions/"
        },
        {
          statement: "Allowing Medicare to negotiate prices for selected drugs (under the 2022 Inflation Reduction Act) is projected to reduce Medicare drug spending by tens of billions of dollars over a decade",
          source: "Congressional Budget Office",
          sourceUrl: "https://www.cbo.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Social Security Trustees Report",
          url: "https://www.ssa.gov/oact/TR/",
          description: "Official annual assessment of Social Security's long-term financial outlook",
          source: "Social Security Administration"
        },
        {
          title: "Medicare Trustees Report",
          url: "https://www.cms.gov/oact/tr",
          description: "Official annual assessment of Medicare's long-term financial outlook",
          source: "CMS"
        },
        {
          title: "Committee for a Responsible Federal Budget",
          url: "https://www.crfb.org/topics/social-security",
          description: "Non-partisan analysis of Social Security and Medicare reform options",
          source: "CRFB"
        },
        {
          title: "AARP Public Policy Institute",
          url: "https://www.aarp.org/ppi/",
          description: "Research on retirement security and the impact of reform options on older Americans",
          source: "AARP"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "How should the burden of fixing Social Security and Medicare be split between revenue increases and benefit changes?",
        "Is the payroll-tax cap on Social Security still defensible as wages have concentrated at the top?",
        "Should the retirement age rise with life expectancy, even if that hits manual workers harder?",
        "Should benefits be means-tested—and would that undermine support for universal programs?",
        "How can Medicare slow cost growth without reducing access to needed care?",
        "Why has Congress repeatedly postponed reform, and what would force action?"
      ]
    }
  },
  {
    id: "fentanyl-cartels",
    title: "Fentanyl, the Overdose Crisis & Cartels",
    category: "public-safety",
    description: "Fentanyl has driven the deadliest overdose crisis in American history and reshaped debates over drug policy, border enforcement, and U.S. action against Mexican cartels",
    explainer: {
      title: "What's the Challenge?",
      content: "Synthetic opioids—principally fentanyl—are the leading cause of death for American adults under 50 and have killed more than 100,000 Americans per year in recent years, though provisional 2024 and 2025 data show meaningful declines from the peak. Most fentanyl is produced by Mexican cartels using precursor chemicals largely sourced from China, then smuggled into the United States primarily by U.S. citizens at official border crossings. The Trump administration in 2025 designated several major cartels as Foreign Terrorist Organizations and pursued aggressive border enforcement; debate has intensified over whether and how the U.S. military could be used against cartels operating in Mexico without that country's consent. Public health advocates argue overdose deaths cannot be solved with enforcement alone—treatment access, harm reduction, and stable mental healthcare matter at least as much. Critics argue decades of demand-side policy have failed and that supply-side disruption deserves a much bigger role."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The overdose crisis is a public health emergency that demands a serious national response",
        "Mexican cartels are dangerous, well-armed criminal organizations that harm Americans and Mexicans alike",
        "China-sourced precursor chemicals are part of the problem and need diplomatic and enforcement pressure",
        "Addiction is both a public health and a criminal justice issue, not one or the other",
        "Treatment, recovery support, and mental healthcare access need expansion",
        "First responders, families, and communities on the front lines need more support",
        "Stopping the flow of fentanyl at the border is a legitimate priority"
      ],
      surveySource: "Pew Research Center, KFF, RAND Drug Policy Research Center 2024-2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Decades of supply-side enforcement haven't stopped drug crises; expanding treatment, naloxone access, and harm reduction saves lives now",
          "Most fentanyl is smuggled through legal ports of entry by U.S. citizens—a border wall does not address that vector",
          "Designating cartels as terrorists and contemplating U.S. military strikes inside Mexico risks war and undermines the cooperation needed to actually disrupt them",
          "Recent declines in overdose deaths track expanded access to naloxone, methadone, and buprenorphine—evidence that the public-health approach works",
          "Mental illness, untreated pain, and economic despair are root causes that punishment cannot fix",
          "Criminalizing users without offering treatment fills prisons without reducing supply or demand"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Cartels are paramilitary organizations behaving like terrorists; treating them that way unlocks tools to disrupt them",
          "Securing the border—including disrupting the smuggling networks—is essential to reducing supply",
          "China's failure to crack down on precursor exports is a deliberate hostile act and should bear costs",
          "Aggressive prosecution of traffickers, especially those dealing fatal doses, is justice for victims and their families",
          "Permissive policies that tolerate open drug use entrench addiction and harm communities",
          "While treatment matters, treating supply-side enforcement as a failure ignores how much worse the crisis would be without it"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "U.S. drug-overdose deaths peaked at roughly 111,000-112,000 in 2023, with synthetic opioids (mainly fentanyl) involved in about 70% of those deaths; provisional CDC data show meaningful declines in 2024 and 2025",
          source: "CDC National Center for Health Statistics; CDC Provisional Drug Overdose Death Counts",
          sourceUrl: "https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm"
        },
        {
          statement: "DEA and CBP data indicate the great majority of fentanyl seized at the border is intercepted at official ports of entry; about 80-90% of fentanyl-trafficking convictions involve U.S. citizens",
          source: "Drug Enforcement Administration; U.S. Sentencing Commission",
          sourceUrl: "https://www.dea.gov"
        },
        {
          statement: "In February 2025 the U.S. government designated six Mexican cartels and several other transnational criminal groups as Foreign Terrorist Organizations",
          source: "U.S. Department of State",
          sourceUrl: "https://www.state.gov"
        },
        {
          statement: "Medications for opioid use disorder (methadone, buprenorphine, naltrexone) reduce overdose mortality by roughly half in randomized and observational studies",
          source: "National Institute on Drug Abuse; New England Journal of Medicine reviews",
          sourceUrl: "https://nida.nih.gov"
        },
        {
          statement: "China announced in 2019 broader scheduling of fentanyl analogues but enforcement of precursor chemical exports has been a continuing point of contention between U.S. and Chinese officials",
          source: "Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "CDC Drug Overdose Data",
          url: "https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm",
          description: "Official provisional and final U.S. overdose mortality data",
          source: "CDC NCHS"
        },
        {
          title: "RAND Drug Policy Research Center",
          url: "https://www.rand.org/well-being/justice-policy/centers/dprc.html",
          description: "Non-partisan analysis of drug policy effectiveness",
          source: "RAND"
        },
        {
          title: "National Institute on Drug Abuse",
          url: "https://nida.nih.gov",
          description: "Federal scientific research on addiction and effective treatments",
          source: "NIDA / NIH"
        },
        {
          title: "Congressional Research Service — Counternarcotics",
          url: "https://crsreports.congress.gov",
          description: "Non-partisan analysis of cartel designations and counternarcotics policy",
          source: "CRS"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "What's the right balance between supply-side enforcement and demand-side treatment and prevention?",
        "Should the U.S. military be used against cartels in Mexico—and under what legal authority?",
        "Has the cartel terrorist designation made the problem easier or harder to manage diplomatically?",
        "How should we measure progress: overdose deaths, drug seizures, prosecutions, treatment access, or all of the above?",
        "What role should harm reduction (naloxone, syringe services) play in federal and state policy?",
        "How can China and the U.S. cooperate to disrupt precursor chemical supply chains?"
      ]
    }
  },
  {
    id: "ai-governance",
    title: "AI Governance & Regulation",
    category: "government",
    description: "Artificial intelligence is reshaping the economy, national security, and daily life faster than government can write rules—forcing hard choices about how, and how much, to regulate",
    explainer: {
      title: "What's the Challenge?",
      content: "Artificial intelligence is advancing faster than U.S. law and regulation. The technology touches almost every part of life—healthcare diagnoses, hiring decisions, lending, education, child safety, copyright, elections, and national security—and policy is being made in pieces: federal executive orders, state laws (notably in California, Colorado, and New York), agency guidance, and industry self-regulation. The European Union's AI Act takes a comprehensive risk-based approach; China is pursuing both heavy regulation and aggressive state investment. The U.S. debate centers on whether federal preemption is needed to prevent a patchwork of 50 state rules, what guardrails (if any) apply to the largest frontier models, how to protect children and consumers from AI-driven harms, and how to preserve American leadership against the very real possibility that China overtakes the U.S. in capability."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "AI is a transformative technology with both significant benefits and significant risks",
        "U.S. leadership in AI matters for the economy and national security",
        "Children and consumers deserve protection from clear AI-driven harms (CSAM, fraud, impersonation)",
        "AI systems that make consequential decisions (lending, hiring, healthcare) should be auditable",
        "Election integrity in the face of AI-generated content matters",
        "Workers displaced by automation deserve support and retraining options",
        "Government use of AI on citizens should be transparent and accountable"
      ],
      surveySource: "Pew Research Center AI Surveys 2024-2025, KFF AI in Health"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Enforceable federal safety, transparency, and bias-testing standards for high-risk AI systems are needed now—self-regulation has not worked",
          "AI systems used in hiring, lending, and healthcare must be tested for and prevented from producing discriminatory outcomes",
          "Workers and creators whose data trains AI deserve compensation, consent, and protection from displacement",
          "Concentration of AI power in a few large corporations and a few wealthy nations is itself a public-interest problem",
          "States like California and Colorado have moved ahead because Congress has not; broad federal preemption that wipes them out would be a step backward",
          "Government use of AI to surveil citizens or make benefits decisions needs strong civil-liberties protections"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Heavy-handed AI regulation risks ceding U.S. leadership to China, with serious national-security consequences",
          "A patchwork of conflicting state AI laws makes it impossible to build national products and should be preempted by a light-touch federal framework",
          "Markets, tort liability, and existing law (civil rights, fraud, product safety) cover most AI harms already",
          "Mandating 'fairness' tests risks turning into ideological speech control over AI outputs",
          "American AI companies should be supported, not burdened, in a global race",
          "Parents and individuals, not federal agencies, should be the primary decision-makers about AI use in personal contexts"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "In January 2025 the Trump administration rescinded the 2023 Biden AI executive order and issued a new framework emphasizing American AI leadership and reduced regulatory burden",
          source: "White House executive orders; Congressional Research Service",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "By 2025, hundreds of AI-related bills had been introduced across U.S. state legislatures; California, Colorado, Texas, and New York have enacted some of the most significant",
          source: "National Conference of State Legislatures AI tracker",
          sourceUrl: "https://www.ncsl.org/technology-and-communication/artificial-intelligence-2024-legislation"
        },
        {
          statement: "The EU AI Act, fully effective in stages through 2026-2027, sets risk-tier obligations on AI providers including outright bans on certain uses",
          source: "European Commission AI Act overview",
          sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
        },
        {
          statement: "Federal agencies—including DOD, NIST, and the FTC—have issued AI guidance under existing authorities; the AI Safety Institute (NIST) coordinates voluntary frontier-model evaluations",
          source: "NIST; FTC; DOD",
          sourceUrl: "https://www.nist.gov/aisi"
        },
        {
          statement: "Independent surveys find roughly 6 in 10 Americans favor more government regulation of AI, with majorities in both parties concerned about misuse",
          source: "Pew Research Center 2024-2025",
          sourceUrl: "https://www.pewresearch.org/topic/internet-technology/"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "NIST AI Safety Institute",
          url: "https://www.nist.gov/aisi",
          description: "U.S. government's technical organization for AI safety testing and standards",
          source: "NIST"
        },
        {
          title: "Stanford HAI — AI Index",
          url: "https://aiindex.stanford.edu",
          description: "Annual non-partisan report on AI capabilities, deployment, and policy",
          source: "Stanford HAI"
        },
        {
          title: "NCSL Artificial Intelligence Legislation Tracker",
          url: "https://www.ncsl.org/technology-and-communication/artificial-intelligence-2024-legislation",
          description: "Non-partisan tracker of state AI legislation",
          source: "National Conference of State Legislatures"
        },
        {
          title: "Center for AI Safety",
          url: "https://www.safe.ai",
          description: "Research on technical and policy aspects of frontier AI risk",
          source: "Center for AI Safety"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "Should Congress preempt state AI laws to create a single national framework?",
        "What categories of AI use (if any) warrant outright bans or pre-deployment approval?",
        "How do we keep America competitive in AI without abandoning safety guardrails?",
        "Who should be liable when an AI system causes harm—the developer, the deployer, or the user?",
        "How should AI-generated content be labeled, especially in political contexts?",
        "What protections do workers and creators need as AI reshapes their industries?"
      ]
    }
  },
  {
    id: "higher-ed-federal-funding",
    title: "Higher Education, Federal Funding & DEI",
    category: "education",
    description: "The 2025 federal funding fights with major universities, antisemitism investigations, and broad rollback of DEI programs have reopened debate about the relationship between Washington and U.S. higher education",
    explainer: {
      title: "What's the Challenge?",
      content: "In 2025 the federal government's relationship with American universities changed dramatically. The Trump administration paused or canceled billions of dollars in federal research grants to elite institutions including Harvard, Columbia, and others; opened or expanded Title VI investigations into campus antisemitism; required universities to make significant policy changes (admissions, discipline, foreign funding disclosure, DEI office structure) as conditions for resuming federal support; and across the executive branch dismantled diversity, equity, and inclusion programs. Supporters argued universities had tolerated antisemitism, hired and admitted on ideological grounds, and grew dependent on federal money while flouting federal civil-rights law; critics argued the funding pressure amounts to political coercion of independent institutions, that broad research cuts harm science and U.S. competitiveness, and that civil-rights enforcement is being weaponized."
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "Federal research funding has been a critical engine of U.S. scientific and economic leadership",
        "Antisemitism, racism, and other forms of harassment are wrong and have no place on campus",
        "Universities accepting federal money should comply with federal civil-rights law",
        "Free speech and open inquiry are core to what universities are for",
        "Tuition has grown faster than inflation and student debt is a serious problem",
        "Universities should be transparent about foreign funding and influence",
        "Accountability for billions in federal grants is legitimate"
      ],
      surveySource: "Pew Research Center Higher Education Surveys 2024-2025, Gallup"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Using research funding as leverage to coerce universities into ideological compliance is a serious threat to academic freedom",
          "Pausing billions in NIH, NSF, and other research grants harms cancer research, basic science, and U.S. competitiveness with China",
          "DEI offices were created in response to real disparities—dismantling them does not make those disparities go away",
          "Civil-rights enforcement is being used selectively to punish institutions for protected political speech",
          "International students and scholars are essential to U.S. universities and to American innovation",
          "Debate over campus protest deserves nuance—not blanket characterizations of all critics of Israeli policy as antisemites"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Universities have a serious antisemitism problem they failed to address; federal action is overdue",
          "DEI bureaucracies grew into ideological machinery that discriminated based on race and political viewpoint",
          "After the Supreme Court ended race-based admissions in SFFA v. Harvard (2023), many institutions visibly tried to work around the ruling",
          "Federal grants come with conditions; if universities don't like the conditions, they don't have to take the money",
          "Foreign funding from China, Qatar, and elsewhere into U.S. universities raises legitimate national-security concerns",
          "Conservative scholars and students have faced years of hostile campus climates; federal accountability is balance, not coercion"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Federal research and development obligations to U.S. universities exceeded $50 billion annually before the 2025 funding actions; NIH alone provides more than $30 billion per year in research grants",
          source: "National Science Foundation; National Institutes of Health",
          sourceUrl: "https://ncses.nsf.gov"
        },
        {
          statement: "In 2025 the federal government paused or terminated billions of dollars in research funding to Harvard, Columbia, and other institutions, citing antisemitism and related compliance concerns; some actions have been challenged in federal court",
          source: "Congressional Research Service; federal court filings and rulings",
          sourceUrl: "https://crsreports.congress.gov"
        },
        {
          statement: "The U.S. Department of Education's Office for Civil Rights has opened a substantially expanded number of Title VI investigations concerning campus antisemitism since late 2023",
          source: "U.S. Department of Education Office for Civil Rights",
          sourceUrl: "https://www2.ed.gov/about/offices/list/ocr/"
        },
        {
          statement: "In Students for Fair Admissions v. Harvard (2023), the Supreme Court held that race-based admissions practices at Harvard and the University of North Carolina violated the Equal Protection Clause and Title VI",
          source: "Supreme Court of the United States",
          sourceUrl: "https://www.supremecourt.gov"
        },
        {
          statement: "Trust in higher education has declined sharply among Americans across the political spectrum, with the largest drop among Republicans, according to multiple long-running surveys",
          source: "Gallup; Pew Research Center",
          sourceUrl: "https://news.gallup.com/poll/508352/americans-confidence-higher-education-down-sharply.aspx"
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Inside Higher Ed",
          url: "https://www.insidehighered.com",
          description: "News and analysis on policy, funding, and politics in higher education",
          source: "Inside Higher Ed"
        },
        {
          title: "American Council on Education",
          url: "https://www.acenet.edu",
          description: "Higher education policy analysis and advocacy",
          source: "ACE"
        },
        {
          title: "FIRE — Foundation for Individual Rights and Expression",
          url: "https://www.thefire.org",
          description: "Non-partisan civil liberties organization tracking campus free-speech issues",
          source: "FIRE"
        },
        {
          title: "Congressional Research Service — Higher Education",
          url: "https://crsreports.congress.gov",
          description: "Non-partisan analysis of federal higher-education law and funding",
          source: "CRS"
        }
      ]
    },
    openQuestions: {
      title: "Questions for Thoughtful Debate",
      questions: [
        "When does enforcing civil-rights law shade into political coercion of independent institutions?",
        "Can the federal government withhold research funding to pressure universities without harming science itself?",
        "What is the right way to address campus antisemitism while protecting legitimate political speech?",
        "How should universities respond to the Supreme Court's ruling against race-based admissions?",
        "Did DEI offices serve students or themselves—and what should replace them?",
        "How should U.S. universities handle foreign funding and influence?"
      ]
    }
  }
];

export const issues: Issue[] = [...baseIssues, ...supplementalIssues];

export function getIssueById(id: string): Issue | undefined {
  return issues.find(issue => issue.id === id);
}

export function getIssuesByCategory(category: string): Issue[] {
  return issues.filter(issue => issue.category === category);
}
