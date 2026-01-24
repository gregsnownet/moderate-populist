import { Issue } from "@/types/issue";

export const issues: Issue[] = [
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
      surveySource: "Multiple polls from KFF, Pew Research, and Gallup (2023-2024)"
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
          statement: "U.S. healthcare spending reached $4.5 trillion in 2022, or $13,493 per person",
          source: "CMS National Health Expenditure Data",
          sourceUrl: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data"
        },
        {
          statement: "41% of adults have medical debt, with 23% owing more than $1,000",
          source: "KFF Health Care Debt Survey 2022",
          sourceUrl: "https://www.kff.org"
        },
        {
          statement: "Average annual family premium for employer-sponsored insurance is over $23,000",
          source: "KFF Employer Health Benefits Survey 2023",
          sourceUrl: "https://www.kff.org"
        },
        {
          statement: "8.6% of U.S. population (28 million) were uninsured in 2023",
          source: "U.S. Census Bureau",
          sourceUrl: "https://www.census.gov"
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
      surveySource: "Pew Research Center Economic Surveys (2023)"
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
          statement: "60% of Americans live paycheck to paycheck, including 40% of those earning over $100k",
          source: "LendingClub Report 2023",
          sourceUrl: "https://www.lendingclub.com"
        },
        {
          statement: "Manufacturing employment has declined from 17.5 million (1998) to 13 million (2023)",
          source: "Bureau of Labor Statistics",
          sourceUrl: "https://www.bls.gov"
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
      surveySource: "PDK Poll of the Public's Attitudes Toward Public Schools (2023)"
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
          statement: "Average student loan debt is $37,000; total U.S. student debt exceeds $1.7 trillion",
          source: "Federal Reserve",
          sourceUrl: "https://www.federalreserve.gov"
        },
        {
          statement: "National teacher shortage has grown, with 36,000+ vacant positions at start of 2023 school year",
          source: "Department of Education",
          sourceUrl: "https://www.ed.gov"
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
      surveySource: "Pew Research Center, Harvard Joint Center for Housing Studies (2023-2024)"
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
          statement: "The median U.S. home price is $417,700 (Q3 2024), up 37% from 2019",
          source: "Federal Reserve Economic Data (FRED)",
          sourceUrl: "https://fred.stlouisfed.org"
        },
        {
          statement: "46% of renters are cost-burdened, paying more than 30% of income on housing",
          source: "Joint Center for Housing Studies, Harvard University",
          sourceUrl: "https://www.jchs.harvard.edu"
        },
        {
          statement: "Average rent increased 30% nationally from 2019 to 2023",
          source: "U.S. Census Bureau",
          sourceUrl: "https://www.census.gov"
        },
        {
          statement: "Only 35% of renters can afford the median-priced home in their area",
          source: "National Association of Realtors",
          sourceUrl: "https://www.nar.realtor"
        },
        {
          statement: "Childcare costs average $10,000-$20,000 per year per child, often exceeding rent",
          source: "U.S. Department of Health and Human Services",
          sourceUrl: "https://www.hhs.gov"
        },
        {
          statement: "Grocery prices increased 25% from 2019 to 2023, outpacing wage growth",
          source: "Bureau of Labor Statistics",
          sourceUrl: "https://www.bls.gov"
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
      surveySource: "Pew Research Center, More in Common, Public Agenda (2023-2024)"
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
      surveySource: "Pew Research Center, FairVote surveys (2023-2024)"
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
          source: "Pew Research Center 2024",
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
      surveySource: "Pew Research Center, Gallup, Hidden Tribes Study (2023-2024)"
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
      surveySource: "Pew Research Center, Knight Foundation, Civic Engagement Studies (2023-2024)"
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
      content: "Immigration remains one of America's most contentious political issues, with 73% of Republicans and significant numbers of Democrats citing it as a top concern. The debate often polarizes into 'open borders' vs. 'close borders' extremes, obscuring substantial common ground. The U.S. immigration system hasn't seen comprehensive reform since 1986, leaving millions in legal limbo while border enforcement remains inconsistent. Both humanitarian concerns and rule-of-law principles deserve serious consideration."
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
      surveySource: "Pew Research Center 2024, AP-NORC 2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Immigration is a human rights issue, not just a law enforcement problem",
          "Pathways to citizenship for undocumented immigrants recognize their contributions and humanity",
          "Border wall and mass deportation policies are cruel, expensive, and ineffective",
          "Asylum seekers fleeing violence and persecution deserve compassion and protection",
          "Anti-immigrant rhetoric fuels racism and scapegoating of vulnerable communities",
          "Immigration detention centers have inhumane conditions that violate human rights"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Border security is national security, illegal immigration undermines rule of law",
          "Amnesty for illegal immigrants rewards lawbreaking and encourages more illegal immigration",
          "Sanctuary cities endanger public safety by protecting criminal illegal immigrants",
          "Chain migration and visa lottery should end in favor of merit-based immigration",
          "American workers' jobs and wages are threatened by illegal immigration and cheap labor",
          "Complete the border wall and enforce existing immigration laws before any reform"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Immigration court backlog exceeds 3 million cases with average wait times of 4+ years",
          source: "TRAC Immigration (Syracuse University)",
          sourceUrl: "https://trac.syr.edu"
        },
        {
          statement: "Undocumented immigrants paid $96.7 billion in federal, state, and local taxes in 2022",
          source: "Institute on Taxation and Economic Policy",
          sourceUrl: "https://itep.org"
        },
        {
          statement: "Border apprehensions fluctuate significantly: 1.7 million in 2021, varied by administration policies",
          source: "U.S. Customs and Border Protection",
          sourceUrl: "https://www.cbp.gov"
        },
        {
          statement: "Legal immigration processing times have increased significantly, with some green cards taking 10+ years",
          source: "U.S. Citizenship and Immigration Services",
          sourceUrl: "https://www.uscis.gov"
        },
        {
          statement: "Immigrant-founded companies employ millions of Americans and include 55% of U.S. billion-dollar startups",
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
      surveySource: "Yale Climate Opinion Maps 2024, Pew Research 2025"
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
          statement: "Global temperatures have risen approximately 1.1°C since pre-industrial times",
          source: "NASA Global Climate Change",
          sourceUrl: "https://climate.nasa.gov"
        },
        {
          statement: "The U.S. has reduced CO2 emissions by 12% since 2005 while GDP grew",
          source: "U.S. Environmental Protection Agency",
          sourceUrl: "https://www.epa.gov"
        },
        {
          statement: "Renewable energy jobs in the U.S. grew to over 3.2 million in 2023",
          source: "U.S. Department of Energy",
          sourceUrl: "https://www.energy.gov"
        },
        {
          statement: "Climate-related disasters cost the U.S. over $165 billion in 2022",
          source: "NOAA National Centers for Environmental Information",
          sourceUrl: "https://www.ncei.noaa.gov"
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
      surveySource: "Pew Research Center 2024, Johns Hopkins Gun Policy Survey"
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
          statement: "Approximately 49,000 Americans died from gun-related injuries in 2023, with suicide accounting for over half",
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
      surveySource: "Pew Research Center 2024, Gallup Abortion Polling"
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
          statement: "About 60% of Americans believe abortion should be legal in all or most cases",
          source: "Pew Research Center 2024",
          sourceUrl: "https://www.pewresearch.org"
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
          statement: "Since Dobbs, 14 states have near-total abortion bans while others expanded access",
          source: "Guttmacher Institute State Tracking",
          sourceUrl: "https://www.guttmacher.org"
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
      content: "The federal government spends more than it collects in revenue, adding to a national debt that now exceeds $34 trillion. Interest payments on this debt consume an ever-larger share of the federal budget. While 57% of Americans express concern about the deficit, politicians from both parties have contributed to the problem—Republicans through tax cuts and defense spending, Democrats through social programs and healthcare expansion. The challenge is addressing unsustainable debt without harming vulnerable Americans or economic growth."
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
      surveySource: "Pew Research Center 2025, Committee for a Responsible Federal Budget"
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
          statement: "U.S. national debt exceeded $34 trillion in 2024, over 120% of GDP",
          source: "U.S. Treasury Department",
          sourceUrl: "https://www.treasurydirect.gov"
        },
        {
          statement: "Net interest on the debt cost $659 billion in 2023, exceeding defense spending",
          source: "Congressional Budget Office",
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
      surveySource: "Pew Research Center 2024, Police Reform Polling"
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
          statement: "Violent crime rates are down 49% from 1993 peaks, though up slightly from 2019",
          source: "FBI Uniform Crime Report",
          sourceUrl: "https://ucr.fbi.gov"
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
      content: "Americans debate how engaged the U.S. should be globally. Some advocate 'America First' policies focused on domestic priorities, while others argue international engagement protects American interests and values. Challenges include managing relationships with China and Russia, supporting allies in Europe and Asia, addressing terrorism and nuclear proliferation, and determining when and how to use military force. With conflicts in Ukraine, the Middle East, and tensions over Taiwan, these questions have real consequences."
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
      surveySource: "Pew Research Center Global Attitudes 2024, Chicago Council Survey"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "Military-industrial complex drives endless wars that cost trillions and countless lives",
          "America must support Ukraine's democracy against Russian aggression and authoritarianism",
          "Climate change is the greatest national security threat facing the world",
          "Human rights and democracy should guide foreign policy, not just narrow interests",
          "Defense budget is bloated while diplomacy and development are underfunded",
          "America's role is to lead international cooperation, not act as world police"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Peace through strength—robust military prevents war more than diplomacy alone",
          "America First means prioritizing our interests over endless foreign commitments",
          "China is the primary threat requiring focus, not conflicts in Europe or Middle East",
          "NATO allies must pay their fair share instead of relying on American protection",
          "Biden's weakness invited Russian aggression in Ukraine and chaos in Afghanistan",
          "International organizations undermine American sovereignty and should be resisted"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "U.S. defense spending exceeds $800 billion annually, more than the next 10 countries combined",
          source: "Department of Defense Budget",
          sourceUrl: "https://comptroller.defense.gov"
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
      surveySource: "Pew Research Center 2024, AI Trust Survey"
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
          statement: "95% of Americans have encountered misinformation online, with 63% saying they see it regularly",
          source: "Pew Research Center 2024",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "Deepfake videos increased by 900% from 2022 to 2024",
          source: "Deeptrace/Sensity AI Report",
          sourceUrl: "https://sensity.ai"
        },
        {
          statement: "80% of Americans can't reliably distinguish AI-generated images from real photos",
          source: "MIT Media Lab Study 2024",
          sourceUrl: "https://www.media.mit.edu"
        },
        {
          statement: "Foreign influence operations using AI targeted the 2024 election from Russia, China, and Iran",
          source: "U.S. Intelligence Community Assessment",
          sourceUrl: "https://www.dni.gov"
        },
        {
          statement: "AI-generated scam calls and messages cost Americans over $10 billion in 2024",
          source: "Federal Trade Commission",
          sourceUrl: "https://www.ftc.gov"
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
      surveySource: "Pew Research Center - Americans' Views on Religion and Politics (2024)"
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
          source: "Pew Research Center 2024",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "First Amendment: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof'",
          source: "U.S. Constitution",
          sourceUrl: "https://constitution.congress.gov"
        },
        {
          statement: "63% of Americans say churches and religious organizations do more good than harm in American society",
          source: "Pew Research Center 2023",
          sourceUrl: "https://www.pewresearch.org"
        },
        {
          statement: "Religious 'nones' (atheist, agnostic, or 'nothing in particular') now make up 28% of U.S. adults, up from 16% in 2007",
          source: "Pew Research Center 2024",
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
    description: "Trump's interest in acquiring Greenland reignites debates about American territorial expansion and strategic interests",
    explainer: {
      title: "What's the Challenge?",
      content: "President-elect Donald Trump has repeatedly expressed interest in the United States purchasing or acquiring Greenland, the world's largest island, which is an autonomous territory of Denmark. Trump first raised this idea in 2019 (calling it 'essentially a large real estate deal'), and has renewed the discussion in 2025, refusing to rule out military or economic coercion to achieve this goal. Greenland is strategically important for Arctic military positioning, mineral resources including rare earth elements critical for technology and defense, and melting ice opening new shipping routes. Denmark and Greenland have firmly rejected any sale, but Trump's statements have sparked debate about American territorial ambitions, sovereignty, alliance relationships, and whether 19th-century-style territorial expansion has any place in 21st-century geopolitics."
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
      surveySource: "Arctic Policy Polling, Foreign Policy Surveys 2024-2025"
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
        }
      ]
    },
    resources: {
      title: "Learn More",
      links: [
        {
          title: "Department of Defense Arctic Strategy",
          url: "https://www.defense.gov",
          description: "U.S. strategic interests and security concerns in the Arctic region",
          source: "U.S. Department of Defense"
        },
        {
          title: "Wilson Center - Arctic Research",
          url: "https://www.wilsoncenter.org/program/polar-initiative",
          description: "Nonpartisan research on Arctic geopolitics and climate",
          source: "Wilson Center"
        },
        {
          title: "Government of Greenland",
          url: "https://naalakkersuisut.gl",
          description: "Official information on Greenland's self-governance and perspectives",
          source: "Naalakkersuisut (Greenland Self-Government)"
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
    title: "Venezuela Crisis & U.S. Intervention",
    category: "government",
    description: "Venezuela's authoritarian collapse, humanitarian crisis, and debates over American intervention and regime change",
    explainer: {
      title: "What's the Challenge?",
      content: "Venezuela has collapsed from South America's wealthiest nation into an authoritarian dictatorship with hyperinflation, widespread poverty, and over 7 million refugees fleeing the country. Nicolás Maduro's socialist regime has maintained power through rigged elections, political repression, and support from Cuba, Russia, and China. In recent weeks, opposition leader Edmundo González claims to have won the 2024 presidential election, with the U.S. and several Latin American countries recognizing him as the legitimate president-elect, while Maduro refuses to relinquish power. Trump has taken a harder line, with his administration recognizing González and considering stronger measures including potential military options. The crisis raises fundamental questions: What responsibility does the U.S. have to support democracy in Latin America? When, if ever, should America intervene to remove dictators? How do we balance humanitarian concerns with the lessons learned from failed regime-change operations in Iraq, Libya, and Afghanistan? And what about the millions of Venezuelan refugees—many now attempting to reach the U.S. southern border?"
    },
    commonGround: {
      title: "Where Most Americans Agree",
      points: [
        "The Venezuelan people are suffering under a brutal authoritarian regime",
        "Maduro is a dictator who has destroyed Venezuela's economy and democracy",
        "The humanitarian crisis and refugee situation demand attention",
        "Venezuelan refugees deserve compassion while border security remains important",
        "China, Russia, and Cuba's support for Maduro threatens regional stability and U.S. interests",
        "Socialist economic policies destroyed what was once Latin America's wealthiest country",
        "The international community should support free and fair elections in Venezuela",
        "American intervention should be carefully considered given past failures in regime change"
      ],
      surveySource: "Americas Barometer, Pew Research Latin America Surveys 2024-2025"
    },
    perspectives: {
      left: {
        title: "Progressive Perspective",
        points: [
          "U.S. sanctions have worsened humanitarian suffering for ordinary Venezuelans while failing to remove Maduro",
          "American regime-change operations have repeatedly failed and cost countless lives—Iraq, Libya, Afghanistan prove military intervention doesn't work",
          "Support for Venezuelan democracy shouldn't mean another disastrous U.S. military invasion",
          "The U.S. has historically backed right-wing dictators in Latin America—our intervention track record is terrible",
          "Diplomacy, humanitarian aid, and regional multilateral approaches are better than unilateral American military action",
          "We should welcome Venezuelan refugees with compassion rather than treating them as border security threats",
          "U.S. economic imperialism and oil interests in Venezuela complicate our motives"
        ]
      },
      right: {
        title: "Conservative Perspective",
        points: [
          "Maduro is a brutal socialist dictator backed by America's enemies—China, Russia, and Cuba—and must go",
          "Venezuela proves socialism destroys prosperity and freedom every time it's tried",
          "The Monroe Doctrine obligates America to prevent hostile foreign powers from dominating our hemisphere",
          "Millions of Venezuelan refugees are destabilizing the region and flooding toward our southern border",
          "Trump's strong stance and willingness to use all options shows leadership Biden lacked",
          "Supporting free elections and democracy in Latin America serves American security interests",
          "Maduro's regime threatens regional stability, supports drug trafficking, and harbors terrorists",
          "The U.S. should support the legitimate president-elect González with all necessary means"
        ]
      }
    },
    keyFacts: {
      title: "Evidence-Based Facts",
      facts: [
        {
          statement: "Over 7.7 million Venezuelans have fled the country since 2015—one of the world's largest refugee crises",
          source: "UNHCR (UN Refugee Agency)",
          sourceUrl: "https://www.unhcr.org"
        },
        {
          statement: "Venezuela's GDP has contracted by over 75% since 2013, with hyperinflation reaching 1,000,000% at its peak",
          source: "World Bank, IMF Data",
          sourceUrl: "https://www.worldbank.org"
        },
        {
          statement: "The U.S., EU, and over 50 countries recognized Juan Guaidó as interim president in 2019, but he failed to dislodge Maduro",
          source: "U.S. State Department",
          sourceUrl: "https://www.state.gov"
        },
        {
          statement: "In 2024 presidential election, opposition claims González won by a large margin based on voter tally sheets, but Maduro's regime declared itself the winner without releasing detailed results",
          source: "Carter Center Election Observation, OAS Reports",
          sourceUrl: "https://www.cartercenter.org"
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
          title: "Council on Foreign Relations - Venezuela Crisis",
          url: "https://www.cfr.org/backgrounder/venezuela-crisis",
          description: "Comprehensive analysis of Venezuela's political and economic collapse",
          source: "Council on Foreign Relations"
        },
        {
          title: "Human Rights Watch - Venezuela",
          url: "https://www.hrw.org/americas/venezuela",
          description: "Documentation of human rights abuses under Maduro regime",
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
        "What responsibility does the U.S. have to support democracy in Venezuela vs. respecting sovereignty?",
        "Have U.S. sanctions helped or hurt the Venezuelan people?",
        "When, if ever, is military intervention justified to remove a dictator?",
        "How should the U.S. balance supporting Venezuelan democracy with avoiding another failed regime-change operation?",
        "What's the right approach to Venezuelan refugees at the southern border?",
        "Should the U.S. work multilaterally through regional partners or act unilaterally?",
        "How do we counter Chinese and Russian influence in Latin America?",
        "What lessons from Iraq, Libya, and Afghanistan apply to Venezuela?",
        "If Maduro refuses to leave despite losing the election, what should the U.S. do?",
        "Does supporting democracy in Latin America serve American interests or represent imperialism?"
      ]
    }
  }
];

export function getIssueById(id: string): Issue | undefined {
  return issues.find(issue => issue.id === id);
}

export function getIssuesByCategory(category: string): Issue[] {
  return issues.filter(issue => issue.category === category);
}
