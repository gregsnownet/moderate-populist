import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | The Moderate Populist',
  description: 'Curated articles, podcasts, videos, and research on political and social issues - fact-based resources for bridging divides.',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
