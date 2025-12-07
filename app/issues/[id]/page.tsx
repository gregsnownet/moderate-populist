import { notFound } from 'next/navigation';
import { getIssueById, issues } from '@/lib/data/issues';
import IssuePage from '@/components/IssuePage';
import { Metadata } from 'next';

interface IssuePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return issues.map((issue) => ({
    id: issue.id,
  }));
}

export async function generateMetadata({ params }: IssuePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const issue = getIssueById(resolvedParams.id);

  if (!issue) {
    return {
      title: 'Issue Not Found',
    };
  }

  return {
    title: `${issue.title} | The Moderate Populist`,
    description: issue.description,
  };
}

export default async function Page({ params }: IssuePageProps) {
  const resolvedParams = await params;
  const issue = getIssueById(resolvedParams.id);

  if (!issue) {
    notFound();
  }

  return <IssuePage issue={issue} />;
}
