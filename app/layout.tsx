import type {Metadata} from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { siteConfig } from '@/lib/site';

const displayFont = localFont({
  src: '../public/fonts/Marcellus-Regular.ttf',
  variable: '--font-display',
  weight: '400',
  display: 'swap',
});

const bodyFont = localFont({
  src: '../public/fonts/SourceSans3-Variable.ttf',
  variable: '--font-body',
  weight: '400 700',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Maldives eSIM for Resorts, Yachts, and Island Travel`,
  description:
    'Practical eSIM setup for Maldives travel, with local network coverage guidance, device checks, and pre-arrival support.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${bodyFont.variable} min-h-screen flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
        <Analytics />
      </body>
    </html>
  );
}
