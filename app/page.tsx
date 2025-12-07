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

        {/* Continental USA Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <svg
            viewBox="0 0 960 593"
            className="w-full max-w-4xl h-auto"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Continental USA Shape */}
            <path
              d="M 800 150 L 750 140 L 700 135 L 650 130 L 600 128 L 550 127 L 500 128 L 450 130 L 400 135 L 350 142 L 300 152 L 250 165 L 200 182 L 165 200 L 140 220 L 125 245 L 118 270 L 115 295 L 115 320 L 118 345 L 125 370 L 135 395 L 150 418 L 170 438 L 195 455 L 225 468 L 260 478 L 300 485 L 345 490 L 395 492 L 450 490 L 505 485 L 560 478 L 615 468 L 670 455 L 720 438 L 765 418 L 805 395 L 838 370 L 863 345 L 880 320 L 890 295 L 895 270 L 895 245 L 888 220 L 873 197 L 850 177 L 820 162 Z M 170 420 L 165 435 L 163 450 L 163 465 L 166 480 L 172 493 L 182 503 L 195 510 L 210 515 L 225 517 L 240 517 L 255 515 L 270 510 L 283 503 L 293 493 L 299 480 L 302 465 L 302 450 L 299 435 L 293 422 L 283 412 L 270 405 L 255 400 L 240 398 L 225 398 L 210 400 L 195 405 L 182 412 Z M 750 380 L 755 395 L 763 408 L 773 418 L 786 425 L 801 430 L 816 432 L 831 432 L 846 430 L 861 425 L 874 418 L 884 408 L 892 395 L 897 380 L 900 365 L 900 350 L 897 335 L 892 322 L 884 312 L 874 305 L 861 300 L 846 298 L 831 298 L 816 300 L 801 305 L 786 312 L 773 322 L 763 335 L 755 350 L 752 365 Z"
              fill="url(#usaBgGradient)"
              stroke="url(#usaBgGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="usaBgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Beyond the Divide
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              Where Moderates Reclaim American Democracy
            </p>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              A one-person effort to lower the political temperature and remind you:
              the situation we're in right now is <span className="font-bold text-gray-900">not the end of the world</span>.
              The answer isn't online—it's in real conversations with real people.
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

      {/* Core Mission: It's Not the End of the World */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-y-4 border-amber-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              It's Not the End of the World
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8 leading-relaxed">
              Despite what your feed says, America isn't falling apart
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-2xl text-purple-600">Here's the truth:</span> Social media and cable news profit from making you angry and scared.
              They amplify the extremes and bury the reality—that most Americans, regardless of party, want similar things:
              safe communities, good schools, affordable healthcare, economic opportunity, and a government that actually works.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-red-900 mb-3">❌ What Screens Show You:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• The most extreme 10% on each side</li>
                  <li>• Outrage bait designed to keep you scrolling</li>
                  <li>• The illusion that "the other side" is your enemy</li>
                  <li>• Division, fear, and hopelessness</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-green-900 mb-3">✅ What Real Life Shows You:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Neighbors who disagree politically but still help each other</li>
                  <li>• Reasonable people with legitimate concerns</li>
                  <li>• Common ground on most major issues</li>
                  <li>• Hope, nuance, and shared humanity</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-1 mt-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  The Solution Is Simple (But Not Easy)
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed text-center mb-6">
                  <span className="font-bold text-2xl">Get out from behind your screen.</span>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                  Have real conversations with real people—especially those who see things differently.
                  Talk to your Trump-supporting uncle. Talk to your progressive coworker. Talk to your libertarian neighbor.
                  Talk to your centrist friend. Listen more than you talk. Ask questions instead of making accusations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center font-semibold">
                  You'll discover that most people—even those who vote differently than you—are reasonable,
                  decent humans trying to do what they think is right for their families and communities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mt-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              A Word to Both Sides
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-700 flex items-center gap-2">
                  <span className="text-2xl">🔵</span> To Progressives and Democrats:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Don't be afraid of the Trump administration.</span> The system of checks and balances still works.
                  The courts, Congress, state governments, and civil society remain strong. America has survived much worse.
                  Your fellow citizens who voted for Trump aren't your enemies—they're neighbors with different priorities.
                  Democracy is resilient when we participate, not when we panic.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-700 flex items-center gap-2">
                  <span className="text-2xl">🔴</span> To Conservatives and Republicans:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Don't be afraid of progressive policies.</span> When Democrats are in power, the same checks and balances
                  protect your rights and interests. Your fellow citizens who vote progressive aren't trying to destroy America—they're neighbors
                  with different solutions to shared problems. Democratic disagreement is healthy. Fear and contempt are not.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
              <p className="text-lg text-gray-800 font-semibold">
                We've been through divided government, culture wars, and political turmoil before.
                We'll get through this too—together, as Americans.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xl text-gray-700 italic">
              "Democracy doesn't die in darkness—it dies in isolation. The cure is conversation."
            </p>
          </div>
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
              The moderate populist movement stands for practical solutions that empower citizens over special interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Citizen Power Over Corporate Control</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When ordinary citizens disengage, corporations and special interests fill the void. We fight to restore power to the people through active participation and accountability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚖️</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">Practical Solutions Over Partisan Theater</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most Americans reject extreme positions on both sides. We champion evidence-based policies that actually work, not ideological purity tests.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🗳️</div>
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Democratic Reform and Accountability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fix the broken systems that enable corruption and gridlock. Support ranked choice voting, campaign finance reform, and ending government dysfunction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Get Out From Behind Your Screen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Social media makes everything seem worse than it is. The real solution is simple: talk to your neighbors, coworkers, and fellow citizens face-to-face. Real people are far more reasonable than their online personas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-6 text-white">
              <p className="text-lg font-semibold">
                🇺🇸 These aren't left or right priorities—they're American priorities for citizens who believe democracy should work for everyone, not just the powerful.
              </p>
            </div>
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

      {/* Individual Power Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white stars-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Power of Moderate Populism
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              When citizens don't participate, corporations and special interests control everything
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">⚠️</span>
                The Gap You Leave
              </h3>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0">▸</span>
                  Lobbying spending: <strong>$4 billion annually</strong>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0">▸</span>
                  Only <strong>3%</strong> attend local government meetings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0">▸</span>
                  Local elections: <strong>15-27%</strong> turnout
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 flex-shrink-0">▸</span>
                  Corporate interests <strong>34x</strong> citizen advocacy spending
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 border-2 border-white/30">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">💪</span>
                The Power You Have
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✓</span>
                  One person at a meeting changes decisions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✓</span>
                  Your call to Congress influences votes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✓</span>
                  Grassroots movements changed America
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 flex-shrink-0">✓</span>
                  Engaged communities get better government
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 md:p-12 text-center text-gray-900">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Democracy Isn't a Spectator Sport
            </h3>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium">
              The choice is simple: participate in your own governance, or let others govern you.
              Show up. Speak up. Your voice matters, but only if you use it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/issues/citizen-participation"
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-lg"
              >
                Learn How to Make a Difference
              </a>
              <a
                href="/issues/civic-dialogue"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vote with Your Dollar */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              💵 Vote with Your Dollar
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
              The Most Powerful Action You Can Take Every Single Day
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Spending with Large Corporations</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Profits leave your community and go to distant shareholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Funds lobbying that drowns out your voice in politics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Creates low-wage jobs with minimal benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Homogenizes communities and kills local character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">Consolidates power in fewer and fewer hands</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Supporting Small Businesses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">Money recirculates in your local economy 3-4x longer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">Empowers neighbors and families, not distant executives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">Creates better jobs with personal investment in employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">Preserves unique community identity and culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">Distributes economic power to more citizens</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white text-center">
              <p className="text-xl md:text-2xl font-bold mb-2">
                For every $100 spent at a local business, $68 stays in your community.
              </p>
              <p className="text-lg opacity-90">
                At a chain store? Only $43 stays local. The rest leaves forever.
              </p>
              <p className="text-sm mt-3 italic opacity-80">
                Source: American Independent Business Alliance
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-2xl p-8 md:p-10 text-white text-center stars-background">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              This Is Citizen Power in Action
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl leading-relaxed">
              <p>
                You don't need to wait for politicians to change laws. You don't need permission from anyone.
                <strong className="block mt-2">Every dollar you spend is a vote for the kind of economy you want.</strong>
              </p>
              <p className="font-semibold text-yellow-300 text-2xl mt-6">
                Shop local. Eat local. Bank local. Hire local.
              </p>
              <p>
                When millions of moderate Americans make this choice, we shift billions of dollars away from corporate power
                and back into our communities. That's moderate populism in action—practical change that doesn't require
                anyone's permission.
              </p>
            </div>
            <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm italic">
                This single action—repeated daily—may be the most powerful thing you can do to strengthen your community and reduce corporate control over American democracy.
              </p>
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
