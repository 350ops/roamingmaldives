import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import contentData from '@/data/content.json';
import ReactMarkdown from 'react-markdown';
import { ShareActions } from '@/components/ShareActions';
import { siteConfig } from '@/lib/site';

const getPageContent = (slug: string) => {
  return contentData.find(page => page.slug === slug);
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getPageContent(resolvedParams.slug);
  
  if (!page) {
    return {
      title: `Page Not Found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return contentData.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = getPageContent(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="section-shell min-h-screen">
      <div className="page-shell max-w-5xl">
        <Link href="/" className="btn-quiet inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="surface-panel mt-8 overflow-hidden">
          <div className="border-b border-[color:var(--line)] px-6 py-8 sm:px-10 sm:py-10">
            <p className="muted-label">{siteConfig.name} guide</p>
            <h1 className="display-title mt-5 max-w-4xl">{page.title}</h1>
            <p className="body-large mt-6 max-w-3xl">{page.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-[color:var(--foreground-muted)]">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                4 min read
              </span>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="article-prose max-w-none">
              <ReactMarkdown>{page.content}</ReactMarkdown>
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-[color:var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 font-semibold text-[color:var(--foreground-muted)]">
                <Share2 className="h-5 w-5" />
                Share this guide
              </div>
              <ShareActions title={page.title} />
            </div>
          </div>
        </article>

        <div className="surface-card mt-10 grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
          <div className="max-w-2xl">
            <p className="muted-label">Next step</p>
            <h2 className="mt-3 text-2xl">Check your device before you buy.</h2>
            <p className="body-copy mt-3">
              If this guide matches your trip, confirm compatibility first and keep the setup
              straightforward.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/device-checker" className="btn-primary">
              Check Device
            </Link>
            <Link href="/signup" className="btn-secondary">
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
