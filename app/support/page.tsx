import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SupportChat } from '@/components/support/SupportChat';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} Support | Maldives eSIM Assistant`,
  description:
    'Ask about Maldives eSIM compatibility, installation timing, coverage expectations, and arrival-day setup.',
};

export default function SupportPage() {
  return (
    <div className="section-shell min-h-screen">
      <div className="page-shell">
        <Link href="/" className="btn-quiet inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-lg">
            <span className="eyebrow">Support</span>
            <h1 className="display-title mt-6">
              Ask the assistant before you buy, install, or travel.
            </h1>
            <p className="body-large mt-6">
              This first support pass is designed for practical Maldives eSIM questions: whether
              your phone supports eSIM, when to install, how to keep your main number active, and
              what to expect once you land.
            </p>

            <div className="surface-muted mt-8 p-6">
              <p className="muted-label">Best for</p>
              <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-[color:var(--foreground-soft)]">
                <li>Checking if your device is compatible before purchase</li>
                <li>Understanding when to install and activate the eSIM</li>
                <li>Clarifying coverage for resorts, islands, and transfers</li>
                <li>Planning how to keep your home number active during the trip</li>
              </ul>
            </div>
          </div>

          <SupportChat />
        </div>
      </div>
    </div>
  );
}
