import Link from 'next/link';
import { Issue } from '@/types/issue';

interface IssueCardProps {
  issue: Issue;
}

const categoryColors: Record<string, { gradient: string; badge: string; icon: string }> = {
  'healthcare': {
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    icon: '🏥'
  },
  'economic-opportunity': {
    gradient: 'from-green-500 to-emerald-500',
    badge: 'bg-green-100 text-green-700 border-green-200',
    icon: '📈'
  },
  'education': {
    gradient: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-100 text-purple-700 border-purple-200',
    icon: '🎓'
  },
  'affordability': {
    gradient: 'from-orange-500 to-red-500',
    badge: 'bg-orange-100 text-orange-700 border-orange-200',
    icon: '💰'
  },
  'civic-engagement': {
    gradient: 'from-violet-500 to-purple-500',
    badge: 'bg-violet-100 text-violet-700 border-violet-200',
    icon: '🗳️'
  },
  'community': {
    gradient: 'from-teal-500 to-cyan-500',
    badge: 'bg-teal-100 text-teal-700 border-teal-200',
    icon: '🏘️'
  },
  'families': {
    gradient: 'from-rose-500 to-pink-500',
    badge: 'bg-rose-100 text-rose-700 border-rose-200',
    icon: '👨‍👩‍👧‍👦'
  },
  'public-safety': {
    gradient: 'from-indigo-500 to-blue-500',
    badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    icon: '🛡️'
  },
  'government': {
    gradient: 'from-gray-600 to-gray-700',
    badge: 'bg-gray-100 text-gray-700 border-gray-200',
    icon: '🏛️'
  }
};

export default function IssueCard({ issue }: IssueCardProps) {
  const colors = categoryColors[issue.category] || categoryColors['government'];

  return (
    <Link href={`/issues/${issue.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-200 hover:border-purple-300 hover-lift">
        {/* Gradient Header */}
        <div className={`h-2 bg-gradient-to-r ${colors.gradient}`}></div>

        <div className="p-6">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{colors.icon}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
              {issue.category.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
            {issue.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {issue.description}
          </p>

          {/* Common Ground Preview */}
          <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
            <div className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Common Ground
            </div>
            <div className="text-xs text-gray-700">
              {issue.commonGround.points.length} areas of agreement
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 flex items-center gap-1">
              Explore Issue
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>

            {/* Political Spectrum Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
