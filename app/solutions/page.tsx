'use client';

import { useState } from 'react';

interface Solution {
  id: string;
  title: string;
  category: string;
  icon: string;
  problem: string;
  leftPerspective: {
    title: string;
    proposals: string[];
  };
  rightPerspective: {
    title: string;
    proposals: string[];
  };
  commonGround: string[];
}

const solutions: Solution[] = [
  {
    id: 'healthcare',
    title: 'Healthcare Access & Affordability',
    category: 'Healthcare',
    icon: '🏥',
    problem: 'Americans pay more for healthcare than any other developed nation, yet millions remain uninsured or underinsured.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Expand Medicare eligibility or create a public option to compete with private insurance',
        'Allow Medicare to negotiate prescription drug prices across all medications',
        'Cap out-of-pocket costs and eliminate surprise medical billing',
        'Invest in community health centers in underserved areas',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Increase price transparency so patients can compare costs before treatment',
        'Expand Health Savings Accounts (HSAs) and tax incentives for individual coverage',
        'Allow insurance purchases across state lines to increase competition',
        'Reduce regulations that drive up costs while maintaining safety standards',
      ],
    },
    commonGround: [
      'Lower prescription drug costs through negotiation or importation',
      'End surprise medical billing',
      'Increase price transparency in healthcare',
      'Maintain protections for pre-existing conditions',
    ],
  },
  {
    id: 'housing',
    title: 'Affordable Housing',
    category: 'Economy',
    icon: '🏘️',
    problem: 'Housing costs have outpaced wage growth, pricing families out of home ownership and stable rentals in many communities.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Invest in public housing and housing assistance programs',
        'Implement rent stabilization in high-cost areas',
        'Tax incentives for developers building affordable housing',
        'Crack down on corporate landlords and speculative buying',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Reform zoning laws to allow more housing construction (end restrictive zoning)',
        'Reduce building regulations and permitting delays that increase costs',
        'Incentivize private sector development through tax breaks',
        'Limit federal overreach; let local markets determine supply',
      ],
    },
    commonGround: [
      'Streamline zoning to allow more housing near jobs and transit',
      'Fix supply shortage through increased construction',
      'Reduce unnecessary regulatory barriers',
      'Support first-time homebuyer programs',
    ],
  },
  {
    id: 'education',
    title: 'Education & Opportunity',
    category: 'Education',
    icon: '📚',
    problem: 'Educational outcomes vary dramatically by ZIP code, and college costs burden families with crushing debt.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Increase funding for public schools, especially in low-income districts',
        'Make community college tuition-free',
        'Cancel or reduce student loan debt; make public college affordable',
        'Increase teacher pay and invest in early childhood education',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Expand school choice through charter schools and voucher programs',
        'Focus on vocational training and apprenticeships as alternatives to college',
        'Hold colleges accountable for outcomes; tie federal aid to job placement',
        'Empower parents with control over curriculum and school selection',
      ],
    },
    commonGround: [
      'Expand access to vocational training and apprenticeships',
      'Reduce administrative bloat in higher education',
      'Invest in career and technical education programs',
      'Make student loan repayment more manageable',
    ],
  },
  {
    id: 'immigration',
    title: 'Immigration Reform',
    category: 'Government',
    icon: '🗽',
    problem: 'The immigration system is broken—long backlogs, undocumented immigrants in limbo, and border security concerns.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Create pathway to citizenship for undocumented immigrants brought here as children (Dreamers)',
        'Increase refugee admissions and protect asylum seekers',
        'Reform visa system to reunite families faster',
        'Provide legal status to undocumented essential workers',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Secure the border with physical barriers, technology, and enforcement',
        'Increase deportations of criminals and those who entered illegally',
        'Shift to merit-based immigration prioritizing skills and employment',
        'End "catch and release" policies; detain those awaiting hearings',
      ],
    },
    commonGround: [
      'Secure borders while treating people humanely',
      'Clear the backlog in immigration courts with more judges',
      'Fix legal immigration system to reduce wait times',
      'E-Verify system to prevent illegal employment',
    ],
  },
  {
    id: 'gun-policy',
    title: 'Gun Rights & Safety',
    category: 'Public Safety',
    icon: '🛡️',
    problem: 'Gun violence kills tens of thousands annually, while millions of law-abiding gun owners value their Second Amendment rights.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Require universal background checks for all gun sales, including private sales',
        'Ban assault-style weapons and high-capacity magazines',
        'Implement red flag laws to temporarily remove guns from dangerous individuals',
        'Require safe storage laws and hold gun owners accountable for negligence',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Enforce existing gun laws strictly before creating new ones',
        'Improve mental health services and school security',
        'Allow trained teachers/staff to carry firearms in schools',
        'Protect Second Amendment rights and oppose registries/confiscation',
      ],
    },
    commonGround: [
      'Universal background checks (supported by 80-90% of Americans)',
      'Red flag laws with due process protections',
      'Improve mental health crisis intervention',
      'Keep guns away from domestic abusers and violent criminals',
    ],
  },
  {
    id: 'climate',
    title: 'Climate & Environment',
    category: 'Environment',
    icon: '🌱',
    problem: 'Climate change threatens communities through extreme weather, while energy costs and reliability matter to families.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Aggressive transition to renewable energy (solar, wind) with federal investment',
        'Regulate carbon emissions and hold polluters accountable',
        'Invest in green jobs and clean energy infrastructure',
        'Rejoin international climate agreements and lead global efforts',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Pursue energy independence through all sources (including natural gas, nuclear)',
        'Use market incentives rather than mandates to encourage clean energy',
        'Invest in innovation and technology rather than regulation',
        'Protect American jobs and avoid unilateral actions that harm competitiveness',
      ],
    },
    commonGround: [
      'Expand tax credits for solar, wind, and energy efficiency',
      'Invest in nuclear energy as clean baseload power',
      'Support American energy independence',
      'Encourage innovation through R&D funding',
    ],
  },
  {
    id: 'electoral-reform',
    title: 'Electoral Reform',
    category: 'Government',
    icon: '🗳️',
    problem: 'Gerrymandering, money in politics, and polarization undermine faith in democracy and block problem-solving.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'End partisan gerrymandering through independent redistricting commissions',
        'Overturn Citizens United; limit corporate money in politics',
        'Automatic voter registration and expanded early voting',
        'Public financing of campaigns to reduce dependence on wealthy donors',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Require voter ID to ensure election integrity',
        'Protect free speech rights for political contributions',
        'Empower states to manage their own election systems',
        'Term limits for Congress to reduce career politicians',
      ],
    },
    commonGround: [
      'End gerrymandering with independent redistricting',
      'Require disclosure of all political donors over $200',
      'Implement ranked choice voting to reduce polarization',
      'Term limits for Congress (polling shows broad support)',
    ],
  },
  {
    id: 'economy',
    title: 'Economic Opportunity',
    category: 'Economy',
    icon: '💼',
    problem: 'Wage growth has stagnated for working families while costs for essentials—housing, healthcare, childcare—have soared.',
    leftPerspective: {
      title: 'Progressive Approach',
      proposals: [
        'Raise the minimum wage to a living wage indexed to inflation',
        'Strengthen labor unions and collective bargaining rights',
        'Tax the wealthy and corporations more; invest in working families',
        'Universal childcare and paid family leave',
      ],
    },
    rightPerspective: {
      title: 'Conservative Approach',
      proposals: [
        'Cut taxes and regulations to boost economic growth and job creation',
        'Invest in vocational training and apprenticeships',
        'Keep minimum wage decisions at state/local level based on cost of living',
        'Encourage entrepreneurship and small business development',
      ],
    },
    commonGround: [
      'Expand Earned Income Tax Credit (EITC) for working families',
      'Invest in workforce training and apprenticeships',
      'Make childcare more affordable through tax credits',
      'Support small businesses and reduce bureaucratic barriers',
    ],
  },
];

const categories = [
  { id: 'all', name: 'All Solutions', icon: '🔍' },
  { id: 'Healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'Economy', name: 'Economy', icon: '💼' },
  { id: 'Education', name: 'Education', icon: '📚' },
  { id: 'Government', name: 'Government', icon: '🏛️' },
  { id: 'Public Safety', name: 'Public Safety', icon: '🛡️' },
  { id: 'Environment', name: 'Environment', icon: '🌱' },
];

export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSolutions = selectedCategory === 'all'
    ? solutions
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 border-b-4 border-purple-200 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
            Solutions & Recommendations
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Practical Approaches from Across the Political Spectrum
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Every major issue has solutions that both sides can support. Here's what the left and right propose—
            and where they find common ground.
          </p>
        </div>
      </section>

      {/* Common-Sense Solutions */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Common-Sense Solutions Americans Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't partisan talking points—they're practical reforms with broad support across the political spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">🗳️</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Ranked Choice Voting</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let voters rank candidates by preference, eliminating vote-splitting and reducing negative campaigning.
                Already working in Alaska and Maine—reducing polarization and empowering moderates.
              </p>
              <a href="/issues/electoral-reform" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-900">Campaign Finance Transparency</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Require disclosure of all political donors over $200. No more dark money hiding who's funding campaigns.
                Sunlight is the best disinfectant for corruption.
              </p>
              <a href="/issues/electoral-reform" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-2xl font-bold text-green-900">Medicare Drug Price Negotiation</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let Medicare negotiate prescription drug prices like the VA already does. Americans pay 3-4x more than other countries
                for the same medications. Both parties' voters support this.
              </p>
              <a href="/issues/healthcare-access" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900">Affordable Housing Reform</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Streamline zoning to allow more housing construction near jobs and transit. Fix the supply shortage
                that's pricing families out. Pro-market solution both left and right can support.
              </p>
              <a href="/issues/affordability" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-900">Universal Background Checks</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Require background checks for all gun sales, including private sales. Supported by 80-90% of Americans
                including gun owners. Common-sense safety without banning firearms.
              </p>
              <a href="/issues/gun-rights-safety" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-900">Clean Energy Tax Credits</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Expand tax credits for solar, wind, and energy efficiency. Create American jobs, lower energy costs,
                and reduce dependence on foreign oil. Free market climate solution.
              </p>
              <a href="/issues/climate-environment" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn more →
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-1">
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-xl text-gray-800 font-semibold mb-4">
                Notice a pattern? These solutions address real problems without requiring anyone to "win" the culture war.
              </p>
              <p className="text-lg text-gray-700">
                Most Americans—regardless of party—support practical reforms when they're presented without partisan framing.
                The divide isn't between citizens. It's between citizens and a political system that profits from division.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'gradient-purple text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border-2 border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredSolutions.length > 0 ? (
            <div className="space-y-12">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {/* Solution Header */}
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{solution.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {solution.title}
                        </h2>
                        <p className="text-lg text-white opacity-90">
                          {solution.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Perspectives Grid */}
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left Perspective */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">🔵</span>
                        <h3 className="text-2xl font-bold text-blue-900">
                          {solution.leftPerspective.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {solution.leftPerspective.proposals.map((proposal, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-blue-600 flex-shrink-0 mt-1">▸</span>
                            <span className="text-gray-700">{proposal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Perspective */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">🔴</span>
                        <h3 className="text-2xl font-bold text-red-900">
                          {solution.rightPerspective.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {solution.rightPerspective.proposals.map((proposal, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-red-600 flex-shrink-0 mt-1">▸</span>
                            <span className="text-gray-700">{proposal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Common Ground */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-t-2 border-green-200 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🤝</span>
                      <h3 className="text-2xl font-bold text-green-900">
                        Common Ground: Where We Can Agree
                      </h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {solution.commonGround.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                          <span className="text-gray-800 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">No solutions in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50 border-t-2 border-purple-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            From Ideas to Action
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            These solutions exist. The polling shows broad support. The only thing missing is the political will
            to compromise and get things done. Contact your representatives and demand they work across the aisle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-4 gradient-purple text-white font-bold rounded-lg hover:shadow-lg transition-all text-lg"
            >
              Explore the Issues
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all text-lg"
            >
              Learn More About Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
