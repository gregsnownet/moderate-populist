'use client';

import { useState } from 'react';
import { issues } from '@/lib/data/issues';
import IssueCard from '@/components/IssueCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Issues', icon: '🏛️' },
    { id: 'civic-engagement', name: 'Civic Dialogue', icon: '🗳️' },
    { id: 'affordability', name: 'Affordability', icon: '💰' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'economic-opportunity', name: 'Economy', icon: '📈' },
    { id: 'education', name: 'Education', icon: '🎓' },
  ];

  const filteredIssues = selectedCategory === 'all'
    ? issues
    : issues.filter(issue => issue.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-bipartisan opacity-10"></div>

        {/* USA Map Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: 'url(/usa-outline.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '80% auto'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Beyond the Divide
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              Seeking knowledge, furthering understanding - Beyond the Political Divide
            </p>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              A one-person effort with the help of a large language model to build this website with the goal to help all Americans find new ways of communicating, expressing and respecting our differences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#issues"
                className="px-8 py-4 gradient-purple text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Explore Issues
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all"
              >
                Learn Our Mission
              </a>
            </div>
          </div>
        </div>

        {/* Political Spectrum Indicator */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-sm font-medium text-gray-600">Progressive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <span className="text-sm font-medium text-gray-600">Moderate Center</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <span className="text-sm font-medium text-gray-600">Conservative</span>
              </div>
            </div>
            <div className="relative h-2 rounded-full overflow-hidden">
              <div className="absolute inset-0 gradient-bipartisan"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full shadow-lg"></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Most Americans occupy the moderate center—rejecting extremes and demanding practical change
            </p>
          </div>
        </div>
      </section>

      {/* What is Moderate Populism */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              What is Moderate Populism?
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Combining citizen empowerment with practical, evidence-based solutions—
            rejecting both corporate-controlled politics and partisan extremism
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 gradient-bipartisan rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                💪
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Populist</h3>
              <p className="text-gray-600 leading-relaxed">
                Power belongs with the people, not corporations or special interests. Democracy requires active citizen engagement.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 gradient-bipartisan rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Moderate</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical solutions based on evidence and results, not ideology. Most Americans reject partisan extremes.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 gradient-bipartisan rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                🔄
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Change-Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                The status quo isn't working. Moderates can and must drive meaningful reform in how democracy functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Stand - Core Values */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 border-y-4 border-slate-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Where We Stand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common-sense values that unite Americans across the political spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Borders</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A nation has the right and duty to control who enters. Secure borders and compassionate immigration policy aren't mutually exclusive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Safe & Clean Cities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every American deserves to live in communities that are safe, clean, and well-maintained. Public safety is not a partisan issue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Racism is Wrong</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Judging people by skin color or ethnicity is morally wrong. Period. We stand against racism in all its forms, from all directions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🗽</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Individual Freedom</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personal liberty is foundational to America. Government should protect rights, not control how citizens live their lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Markets</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Economic freedom creates prosperity. Markets work best with fair rules, not crony capitalism or government picking winners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Self-Worth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every person has inherent dignity and value. Work, family, and community contribution build self-respect and purpose.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Individualism</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Judge people as individuals, not as members of groups. Personal responsibility and merit matter. Identity politics divides us.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mutual Respect</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Disagreement doesn't require disrespect. We can debate ideas vigorously while treating fellow citizens with dignity.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-1">
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-lg text-gray-800 font-semibold">
                These aren't radical positions—they're the common-sense values most Americans share.
                We reject the extremes that caricature these principles to divide us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-y-4 border-amber-300">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                  <span className="text-2xl">🔵</span> To Those on the Left:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Your fellow citizens who vote conservative aren't your enemies—they're neighbors with different priorities.
                  Checks and balances protect our democracy regardless of who's in power. Participation beats panic.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-700 flex items-center gap-2">
                  <span className="text-2xl">🔴</span> To Those on the Right:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Your fellow citizens who vote progressive aren't trying to destroy America—they're neighbors
                  with different solutions to shared problems. Our system protects everyone's rights. Disagreement is healthy; contempt is not.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-1">
              <div className="bg-white rounded-lg p-6">
                <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
                  Most Americans want the same things: safe communities, good schools, affordable healthcare, economic opportunity, and a government that works.
                  The answer isn't online—it's in real conversations with real people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section with Category Filter */}
      <section id="issues" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Explore the Issues
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Each issue clearly identifies <span className="font-bold text-purple-600">areas of common ground</span> where most Americans agree,
              provides evidence-based facts, and presents questions for thoughtful debate
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Common ground highlighted on every issue
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Issues Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>

          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">No issues in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Key Priorities Section */}
      <section className="py-16 bg-white border-y-2 border-purple-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Our Priorities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical solutions that empower citizens over special interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Defend Democratic Institutions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Protect checks and balances, free press, independent courts, and peaceful transfer of power. Authoritarianism begins when citizens tolerate erosion of democratic norms—regardless of party.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Respect for All Americans</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reject racism, bigotry, and scapegoating in all forms. Our differences in race, religion, background, and beliefs make America stronger—not weaker. Common humanity comes first.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚖️</div>
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Evidence Over Ideology</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Champion policies that actually work, not partisan theater. Most Americans reject extremes on both sides. Solutions require listening to different perspectives with respect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Real Conversations Matter</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Social media amplifies division. Face-to-face conversations with neighbors, coworkers, and fellow citizens reveal our shared humanity and common concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Cs Section */}
      <section className="py-16 px-4 bg-white border-y-4 border-purple-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                The 4 Cs of Democratic Engagement
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we engage matters as much as what we believe. These four principles guide productive dialogue across differences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover-lift">
              <div className="text-4xl mb-4 text-center">💬</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">Communication</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Listen to understand, not just to respond. Ask questions. Seek clarity before disagreement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 hover-lift">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">Collaboration</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Build coalitions across divides. Find allies where you can. Democracy requires teamwork.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200 hover-lift">
              <div className="text-4xl mb-4 text-center">⚖️</div>
              <h3 className="text-xl font-bold text-red-900 mb-3 text-center">Compromise</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Give ground without giving up principles. Half a loaf beats stalemate. Progress over purity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 hover-lift">
              <div className="text-4xl mb-4 text-center">📢</div>
              <h3 className="text-xl font-bold text-green-900 mb-3 text-center">Make Your Case</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Persuade with evidence and values. Appeal to shared interests. Win hearts, not just arguments.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-8 text-white text-center stars-background">
            <h3 className="text-2xl font-bold mb-4">All Americans Welcome</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              Whether you voted for Trump or Biden, whether you identify as conservative, progressive, libertarian, or independent—
              if you believe citizens should have more power than corporations, you belong here. We respect Republicans and Democrats equally.
              We value MAGA supporters and progressives equally. This is a movement for <span className="font-bold">all Americans</span> who
              want practical change and reject the extremes on both sides.
            </p>
            <p className="text-lg italic opacity-90">
              "Moderates aren't passive centrists—we're active citizens demanding democracy that works for everyone."
            </p>
          </div>
        </div>
      </section>

      {/* Individual Power Section */}
      <section className="py-20 px-4 bg-white border-y-2 border-purple-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              The Power of Moderate Populism
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
              When citizens don't participate, corporations and special interests control everything
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-900">
                <span className="text-4xl">⚠️</span>
                The Gap You Leave
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">▸</span>
                  Lobbying spending: <strong>$4 billion annually</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">▸</span>
                  Only <strong>3%</strong> attend local government meetings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">▸</span>
                  Local elections: <strong>15-27%</strong> turnout
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 flex-shrink-0">▸</span>
                  Corporate interests <strong>34x</strong> citizen advocacy spending
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-purple-900">
                <span className="text-4xl">💪</span>
                The Power You Have
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  One person at a meeting changes decisions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  Your call to Congress influences votes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  Grassroots movements changed America
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  Engaged communities get better government
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-1">
            <div className="bg-white rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Democracy Isn't a Spectator Sport
              </h3>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium text-gray-800">
                Participate in your own governance, or let others govern you.
                Show up. Speak up. Your voice matters when you use it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/issues/citizen-participation"
                  className="px-8 py-4 gradient-purple text-white font-bold rounded-lg hover:shadow-lg transition-all text-lg"
                >
                  Learn How to Make a Difference
                </a>
                <a
                  href="/issues/civic-dialogue"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition-all text-lg"
                >
                  Start the Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group hover-lift bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border-2 border-purple-200">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-bold text-xl mb-3">Community Discussions</h3>
              <p className="text-gray-600 leading-relaxed">
                Moderated forums for respectful debate on each issue, with guidelines
                to keep conversations productive and solution-focused
              </p>
            </div>
            <div className="group hover-lift bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-3">Interactive Surveys</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in polls to see where Americans across the political spectrum
                find common ground on specific policy questions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
