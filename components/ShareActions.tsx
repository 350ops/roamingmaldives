'use client';

import { useState } from 'react';
import { Copy, Mail } from 'lucide-react';

type ShareActionsProps = {
  title: string;
};

export function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const emailHref =
    typeof window === 'undefined'
      ? `mailto:?subject=${encodeURIComponent(title)}`
      : `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button type="button" onClick={handleCopy} className="btn-secondary">
        <Copy className="h-4 w-4" />
        {copied ? 'Link Copied' : 'Copy Link'}
      </button>
      <a href={emailHref} className="btn-secondary">
        <Mail className="h-4 w-4" />
        Email This Guide
      </a>
    </div>
  );
}
