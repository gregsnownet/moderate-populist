'use client';

import { useState } from 'react';
import { articles } from '@/lib/data/articles';
import ArticleCard from '@/components/ArticleCard';

export default function CurrentAffairsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'government', name: 'Government' },
    { id: 'politics', name: 'Politics' },
    { id: 'technology', name: 'Technology' },
    { id: 'economy', name: 'Economy' },
    { id: 'society', name: 'Society' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-red-50 border-b-4 border-blue-200 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Current Affairs
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Reflections on the Conversations Shaping America
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Exploring today's most important topics through a bipartisan lens—
            finding common ground even on the most divisive issues
          </p>
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
                    ? 'gradient-navy text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {sortedArticles.length > 0 ? (
            <>
              <div className="mb-8 text-gray-600 text-center">
                {sortedArticles.length} {sortedArticles.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'all' && (
                  <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {sortedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <p className="text-xl text-gray-600">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contributing Notice */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-50 border-t-2 border-blue-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Conversation
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            These articles are starting points for deeper dialogue. We're building a platform where
            Americans from all political perspectives can engage thoughtfully with current events.
          </p>
          <p className="text-gray-600">
            More articles coming soon. Have a suggestion for a topic? We're listening.
          </p>
        </div>
      </section>
    </div>
  );
}
