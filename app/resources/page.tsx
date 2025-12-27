'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';

// Note: Client components can't export metadata directly
// To add metadata, create a separate layout.tsx in this folder
// For now, metadata is set in the root layout
import { resources, getAllResourceTypes, getAllResourceCategories } from '@/lib/data/resources';
import ResourceCard from '@/components/ResourceCard';
import { ResourceType, ResourceCategory } from '@/types/resource';

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || resource.categories.includes(selectedCategory);
      const matchesSearch = searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesType && matchesCategory && matchesSearch;
    });
  }, [selectedType, selectedCategory, searchQuery]);

  const resourceTypes = getAllResourceTypes();
  const resourceCategories = getAllResourceCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 border-b-4 border-purple-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Curated articles, podcasts, videos, and research on the issues that matter
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6 px-4 sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as ResourceType | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {resourceTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Topic
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ResourceCategory | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Topics</option>
                {resourceCategories.map(category => (
                  <option key={category} value={category}>
                    {category.split('-').map(word =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedType !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedType !== 'all' && (
                <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {selectedType}
                  <button
                    onClick={() => setSelectedType('all')}
                    className="ml-2 hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {selectedCategory.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 hover:text-green-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                  "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-purple-900"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filteredResources.length > 0 ? (
            <>
              <div className="mb-6 text-gray-600">
                Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How to Add Resources */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-t-2 border-purple-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Add Your Own Resources
          </h2>
          <p className="text-gray-700 mb-4">
            To add articles, podcasts, or other resources to this page, edit the{' '}
            <code className="bg-white px-2 py-1 rounded text-sm border border-gray-300">lib/data/resources.ts</code> file.
          </p>
          <p className="text-gray-700">
            Follow the structure of the sample resources and add your own links. The page will automatically
            update with your new content and make it filterable by type and category.
          </p>
        </div>
      </section>
    </div>
  );
}
