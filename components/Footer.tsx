import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[#172327] py-16 text-[#f5efe4]">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <span className="font-[family:var(--font-display)] text-[2rem] tracking-[-0.05em]">
              {siteConfig.name}
            </span>
            <p className="mt-5 text-base leading-7 text-[rgba(245,239,228,0.72)]">
              Practical eSIM guidance for Maldives arrivals, from device checks before you fly to
              support once you land.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[rgba(245,239,228,0.48)]">
              Built for resort stays, yacht charters, and island transfers
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgba(245,239,228,0.48)]">
              Guides
            </h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/best-esim-maldives" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Best eSIM for Maldives</Link></li>
              <li><Link href="/stay-connected-maldives" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">How to Stay Connected</Link></li>
              <li><Link href="/esim-yacht-charter" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Yacht Charter Guide</Link></li>
              <li><Link href="/gcc-travellers" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Gulf Travellers Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgba(245,239,228,0.48)]">
              Support
            </h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/device-checker" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Device Compatibility</Link></li>
              <li><Link href="/faq" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Common Questions</Link></li>
              <li><Link href="/signup" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Early Access</Link></li>
              <li><Link href="/partners" className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">Partner Inquiries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgba(245,239,228,0.48)]">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li><a href={siteConfig.supportMailto} className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">{siteConfig.supportEmail}</a></li>
              <li><a href={siteConfig.partnersMailto} className="text-sm text-[rgba(245,239,228,0.72)] hover:text-white">{siteConfig.partnersEmail}</a></li>
              <li><span className="text-sm text-[rgba(245,239,228,0.72)]">Response target: within one business day</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(245,239,228,0.12)] pt-8 text-sm text-[rgba(245,239,228,0.62)] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.domain}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
