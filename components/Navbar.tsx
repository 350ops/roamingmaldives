'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrandWordmark } from '@/components/BrandWordmark';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/device-checker', label: 'Device Check' },
    { href: '/faq', label: 'FAQ' },
    { href: '/partners', label: 'Partners' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(251,248,242,0.86)] backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <div className="flex items-center">
            <Link href="/" className="leading-none">
              <BrandWordmark
                className="font-[family:var(--font-display)] text-[1.7rem] tracking-[-0.05em] text-[color:var(--foreground)]"
                leadClassName="font-normal"
                trailClassName="font-semibold"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-[0.04em] text-[color:var(--foreground-soft)] hover:text-[color:var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/signup" className="btn-primary px-5 text-sm">
              Get Early Access
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[rgba(255,253,249,0.75)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[rgba(29,103,104,0.18)]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-[color:var(--line)] bg-[rgba(251,248,242,0.95)] md:hidden">
          <div className="page-shell pb-5">
            <div className="surface-card space-y-2 p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-[color:var(--foreground)] hover:bg-[rgba(236,229,216,0.55)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/signup"
                className="btn-primary mt-2 w-full"
                onClick={() => setIsOpen(false)}
              >
              Get Early Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
