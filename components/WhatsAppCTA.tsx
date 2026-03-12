'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function WhatsAppCTA() {
  return (
    <a
      href={siteConfig.supportMailto}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[rgba(255,253,249,0.94)] px-4 py-3 text-[color:var(--foreground)] shadow-[0_18px_35px_rgba(23,35,39,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
      aria-label="Email support"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:block">
        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--foreground-muted)]">
          Support
        </span>
        <span className="block text-sm font-semibold">
          Email our team
        </span>
      </span>
    </a>
  );
}
