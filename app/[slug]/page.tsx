import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import contentData from '@/data/content.json';
import ReactMarkdown from 'react-markdown';

// This would typically come from a database or CMS
const getPageContent = (slug: string) => {
  return contentData.find(page => page.slug === slug);
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getPageContent(resolvedParams.slug);
  
  if (!page) {
    return {
      title: 'Page Not Found | Roaming Maldives',
    };
  }

  return {
    title: `${page.title} | Roaming Maldives`,
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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-64 sm:h-80 relative bg-blue-900 w-full overflow-hidden">
            {/* Abstract background pattern for header */}
            <div className="absolute inset-0 opacity-20">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
                {page.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Updated 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  4 min read
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl">
              <ReactMarkdown>{page.content}</ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                <Share2 className="w-5 h-5" />
                Share this guide
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-colors">Twitter</button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-colors">Facebook</button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-colors">LinkedIn</button>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-cta)" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to get connected?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who trust Roaming Maldives for their connectivity needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:-translate-y-1"
              >
                Get Early Access
              </Link>
              <Link
                href="/device-checker"
                className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:-translate-y-1"
              >
                Check Device
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
