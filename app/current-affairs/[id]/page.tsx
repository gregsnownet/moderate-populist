import { notFound } from 'next/navigation';
import { getArticleById, articles } from '@/lib/data/articles';
import Link from 'next/link';
import { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | The Moderate Populist`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = getArticleById(resolvedParams.id);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/current-affairs"
            className="inline-flex items-center text-white hover:text-gray-100 mb-6 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Current Affairs
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-2xl text-gray-600 mb-6 font-light leading-relaxed">
              {article.subtitle}
            </p>
          )}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
            {article.readTime && (
              <>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </>
            )}
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              const text = paragraph.slice(2, -2);
              if (text.endsWith(':')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    {text}
                  </h2>
                );
              }
              return (
                <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {text}
                </h3>
              );
            }

            // Handle list items
            if (paragraph.match(/^[-•]\s/gm)) {
              const items = paragraph.split('\n').filter(line => line.trim());
              return (
                <ul key={index} className="space-y-2 my-6 list-disc list-inside">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      {item.replace(/^[-•]\s/, '')}
                    </li>
                  ))}
                </ul>
              );
            }

            // Handle numbered lists
            if (paragraph.match(/^\d+\.\s/gm)) {
              const items = paragraph.split('\n').filter(line => line.trim());
              return (
                <ol key={index} className="space-y-2 my-6 list-decimal list-inside">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      {item.replace(/^\d+\.\s/, '')}
                    </li>
                  ))}
                </ol>
              );
            }

            // Regular paragraphs
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Call to Action - Real Conversation */}
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-gray-900">
          <h3 className="text-2xl font-bold mb-4">💬 Now Have a Real Conversation</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Social media makes it easy to live in an echo chamber. Reading this article is step one.
            <strong className="block mt-2">Step two: Talk to an actual human who might disagree with you.</strong>
          </p>
          <div className="bg-white/90 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">Try This:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                Share this article with a friend or family member who sees things differently
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                Ask them: "What do you think about this? Where do you agree or disagree?"
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                Listen to understand their perspective, not just to respond
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">→</span>
                Have the conversation face-to-face or on the phone—not via text or comments
              </li>
            </ul>
          </div>
          <p className="text-sm mt-4 italic">
            Democracy requires real dialogue with real people. Break out of your echo chamber. Start a conversation.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
          <Link
            href="/current-affairs"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            ← Back to all Current Affairs articles
          </Link>
        </div>
      </article>
    </div>
  );
}
