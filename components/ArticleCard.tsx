import Link from 'next/link';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

const categoryColors: Record<string, string> = {
  government: 'bg-blue-100 text-blue-700 border-blue-300',
  politics: 'bg-blue-100 text-blue-900 border-blue-300',
  technology: 'bg-green-100 text-green-700 border-green-300',
  economy: 'bg-orange-100 text-orange-700 border-orange-300',
  society: 'bg-pink-100 text-pink-700 border-pink-300',
  international: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  opinion: 'bg-gray-100 text-gray-700 border-gray-300'
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const categoryColor = categoryColors[article.category] || categoryColors.opinion;
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/current-affairs/${article.id}`} className="block group">
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-200 hover:border-blue-300 hover-lift">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColor}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            {article.featured && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
            {article.title}
          </h3>

          {/* Subtitle */}
          {article.subtitle && (
            <p className="text-lg text-gray-600 mb-3 font-medium">
              {article.subtitle}
            </p>
          )}

          {/* Summary */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span>{formattedDate}</span>
              {article.readTime && (
                <span>• {article.readTime} min read</span>
              )}
            </div>
            <div className="text-blue-900 font-semibold group-hover:text-blue-900 flex items-center gap-1">
              Read More
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
