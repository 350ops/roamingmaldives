import type {Metadata} from 'next';
import { Marcellus, Source_Sans_3 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { siteConfig } from '@/lib/site';

const displayFont = Marcellus({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
});

const bodyFont = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
