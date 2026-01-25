import { Resource } from '@/types/resource';

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  article: '📄',
  podcast: '🎙️',
  video: '🎥',
  research: '📊'
};

const typeColors = {
  article: 'bg-blue-100 text-blue-800',
  podcast: 'bg-blue-100 text-blue-950',
  video: 'bg-red-100 text-red-800',
  research: 'bg-green-100 text-green-800'
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-400 h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${typeColors[resource.type]}`}>
          <span className="mr-1">{typeIcons[resource.type]}</span>
          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
        </div>
        {resource.featured && (
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
            ⭐ Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
        {resource.title}
      </h3>

      <p className="text-gray-600 mb-3 line-clamp-3">
        {resource.description}
      </p>

      <div className="flex flex-col gap-2 text-sm text-gray-500">
        <div className="font-medium text-gray-700">
          {resource.source}
          {resource.author && <span> • {resource.author}</span>}
        </div>

        {resource.publishedDate && (
          <div>
            {new Date(resource.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resource.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center text-blue-600 font-semibold mt-4">
        View Resource
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}
