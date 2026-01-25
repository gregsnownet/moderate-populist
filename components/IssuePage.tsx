import { Issue } from '@/types/issue';
import IssueSection from './IssueSection';
import Link from 'next/link';
import { CommentSection } from './comments/CommentSection';

interface IssuePageProps {
  issue: Issue;
}

const categoryColors: Record<string, { gradient: string; badge: string; icon: string }> = {
  'healthcare': { gradient: 'from-blue-500 to-cyan-500', badge: 'bg-blue-100 text-blue-700 border-blue-300', icon: '🏥' },
  'economic-opportunity': { gradient: 'from-green-500 to-emerald-500', badge: 'bg-green-100 text-green-700 border-green-300', icon: '📈' },
  'education': { gradient: 'from-blue-500 to-pink-500', badge: 'bg-blue-100 text-blue-900 border-blue-300', icon: '🎓' },
  'affordability': { gradient: 'from-orange-500 to-red-500', badge: 'bg-orange-100 text-orange-700 border-orange-300', icon: '💰' },
  'civic-engagement': { gradient: 'from-violet-500 to-blue-500', badge: 'bg-violet-100 text-violet-700 border-violet-300', icon: '🗳️' },
  'community': { gradient: 'from-teal-500 to-cyan-500', badge: 'bg-teal-100 text-teal-700 border-teal-300', icon: '🏘️' },
  'families': { gradient: 'from-rose-500 to-pink-500', badge: 'bg-rose-100 text-rose-700 border-rose-300', icon: '👨‍👩‍👧‍👦' },
  'public-safety': { gradient: 'from-indigo-500 to-blue-500', badge: 'bg-indigo-100 text-indigo-700 border-indigo-300', icon: '🛡️' },
  'government': { gradient: 'from-gray-600 to-gray-700', badge: 'bg-gray-100 text-gray-700 border-gray-300', icon: '🏛️' }
};

export default function IssuePage({ issue }: IssuePageProps) {
  const colors = categoryColors[issue.category] || categoryColors['government'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className={`bg-gradient-to-r ${colors.gradient} py-16 px-4 mb-12`}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-gray-100 mb-6 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all issues
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{colors.icon}</span>
            <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${colors.badge} bg-white`}>
              {issue.category.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {issue.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            {issue.description}
          </p>

          {/* Political Spectrum Indicator */}
          <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between text-white/80 text-sm mb-2">
              <span>Progressive</span>
              <span className="font-semibold">Common Ground</span>
              <span>Conservative</span>
            </div>
            <div className="relative h-2 rounded-full bg-white/30 overflow-hidden">
              <div className="absolute inset-0 gradient-bipartisan opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Common Ground Callout - Featured at Top */}
        <div className="mb-8 -mt-6 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-xl p-1 shadow-2xl">
            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-bipartisan flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Areas of Common Ground
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                Despite partisan divides, most Americans agree on these key points:
              </p>
              <ul className="space-y-2">
                {issue.commonGround.points.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-900 font-bold mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-800 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              {issue.commonGround.points.length > 3 && (
                <p className="mt-4 text-blue-900 font-semibold">
                  + {issue.commonGround.points.length - 3} more areas of agreement below
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Explainer Section */}
        <IssueSection title={issue.explainer.title}>
          <p className="text-lg leading-relaxed text-gray-700">
            {issue.explainer.content}
          </p>
        </IssueSection>

        {/* Common Ground Section - Highlighted */}
        <IssueSection title={issue.commonGround.title} variant="highlight">
          <div className="space-y-4">
            {issue.commonGround.points.map((point, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full gradient-bipartisan flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-lg font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {issue.commonGround.surveySource && (
            <div className="mt-6 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600 italic flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span><strong>Source:</strong> {issue.commonGround.surveySource}</span>
              </p>
            </div>
          )}
        </IssueSection>

        {/* Left and Right Perspectives */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Current Perspectives from Both Sides
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding the full debate requires hearing what each side actually argues—not caricatures or strawmen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Perspective */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">{issue.perspectives.left.title}</h3>
              </div>
              <ul className="space-y-3">
                {issue.perspectives.left.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-800 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Perspective */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900">{issue.perspectives.right.title}</h3>
              </div>
              <ul className="space-y-3">
                {issue.perspectives.right.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-800 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 italic max-w-2xl mx-auto">
              These represent current talking points from each side of the political spectrum.
              Understanding both perspectives is essential for productive dialogue.
            </p>
          </div>
        </div>

        {/* Key Facts Section */}
        <IssueSection title={issue.keyFacts.title}>
          <div className="space-y-6">
            {issue.keyFacts.facts.map((fact, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-blue-800 py-2 hover:border-blue-900 transition-colors">
                <div className="absolute -left-2 top-4 w-4 h-4 rounded-full gradient-navy"></div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {fact.statement}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  <span>Source: </span>
                  {fact.sourceUrl ? (
                    <a
                      href={fact.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-blue-900 font-medium underline"
                    >
                      {fact.source}
                    </a>
                  ) : (
                    <span className="font-medium">{fact.source}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </IssueSection>

        {/* Resources Section */}
        <IssueSection title={issue.resources.title} variant="resources">
          <div className="grid gap-4">
            {issue.resources.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 mb-2 flex items-center gap-2">
                      {link.title}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {link.description}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {link.source}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </IssueSection>

        {/* Open Questions Section */}
        <IssueSection title={issue.openQuestions.title}>
          <div className="space-y-4 mb-6">
            {issue.openQuestions.questions.map((question, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-5 rounded-r-lg hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">❓</span>
                  <p className="text-lg font-medium text-gray-900 leading-relaxed">
                    {question}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </IssueSection>

        {/* Comments Section */}
        <CommentSection issueId={issue.id} />
      </article>
    </div>
  );
}
