import React from 'react';

interface IssueSectionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'resources';
}

export default function IssueSection({
  title,
  children,
  variant = 'default'
}: IssueSectionProps) {
  const styles = {
    default: {
      bg: 'bg-white',
      border: 'border-gray-200',
      title: 'text-gray-900',
      accent: 'border-blue-800'
    },
    highlight: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-50',
      border: 'border-blue-200',
      title: 'bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent',
      accent: 'border-blue-900'
    },
    resources: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      title: 'text-gray-900',
      accent: 'border-blue-500'
    }
  }[variant];

  return (
    <section className={`${styles.bg} rounded-xl p-8 md:p-10 shadow-md mb-8 border ${styles.border} hover:shadow-lg transition-shadow`}>
      <h2 className={`text-3xl font-bold ${styles.title} mb-6 pb-3 border-b-4 ${styles.accent}`}>
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
