# Building **RoamingMaldives.com**: Implementation Guide

This guide describes how to build a modern, search‑optimised and conversion‑focused web experience for **RoamingMaldives.com**.  The site should transition from a single chatbot page to a full Next.js application with a strong landing page, multiple SEO‑driven content pages, a device‑compatibility checker, FAQs, lead‑capture mechanisms, a WhatsApp call‑to‑action and analytics integration.

## 1. Project overview

RoamingMaldives.com aims to be the go‑to resource for travellers seeking premium eSIM connectivity in the Maldives.  High‑intent search traffic should be captured through country‑specific guides and how‑to content, because travellers rarely search generic terms such as “buy eSIM”【864867139537363†L82-L89】.  A clear funnel – landing page → device check → signup or purchase – builds trust and reduces hesitation【864867139537363†L71-L89】.

## 2. Tech stack and environment setup

1. **Install prerequisites**: Node.js (v18+), pnpm or npm, Git and the Vercel CLI.  Create a new Next.js project with TypeScript support:

   ```bash
   pnpm create next-app@latest roaming-maldives --typescript --tailwind
   cd roaming-maldives
   pnpm install
   ```

2. **Configure Tailwind CSS**: The starter project will already include Tailwind.  In `tailwind.config.ts`, extend the colour palette and font settings to reflect your brand.  Use Tailwind components consistently for layout, cards and forms.

3. **Enable Vercel analytics**: In the Vercel dashboard, go to **Analytics** for your project and click **Enable**.  Then install the `@vercel/analytics` package and add the `<Analytics />` component to your root layout.  The official quick‑start shows that enabling analytics adds new insight routes and requires adding `<Analytics />` in the layout file【980247625809324†L1748-L1784】:

   ```bash
   pnpm i @vercel/analytics
   ```

   In `app/layout.tsx`:

   ```tsx
   import { Analytics } from '@vercel/analytics/next';

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

## 3. Site structure and pages

### 3.1 Landing page (`app/page.tsx`)

- **Hero section**: Create a full‑width hero with a Maldives background image, a headline such as *“Stay Connected in the Maldives”* and a sub‑heading explaining the value proposition.  Include two primary buttons: **Check device compatibility** and **Get Early Access / Buy Plan**.
- **Three‑step process**: Use icons to depict *Choose plan → Activate eSIM → Enjoy your trip*.  This reduces perceived complexity and educates users【864867139537363†L71-L89】.
- **Trust indicators**: Display network operator icons, 4G/5G badges and security icons to build credibility.
- **Targeted badges**: Add small badges for "Yacht guests", "Resort visitors" and "Gulf travellers" to reflect your niche.
- **WhatsApp CTA**: Implement a floating WhatsApp button linking to `https://wa.me/<business-number>?text=I'm%20interested%20in%20a%20Maldives%20eSIM`.  On desktop, also place a link in the hero section.

### 3.2 SEO content pages (`app/[slug]/page.tsx`)

Create 8–15 pages targeting specific search queries.  Each page should export a unique slug and use `generateMetadata` to define its title, description and canonical URL.  The Next.js SEO guide recommends using the Metadata API to centralise canonical, OpenGraph and Twitter data【230654344952021†L25-L38】.  Suggested pages include:

| Slug | Focus | Notes |
| --- | --- | --- |
| `best-esim-maldives` | Best eSIM for Maldives 2026 | Compare your service with other options and highlight instant activation. |
| `stay-connected-maldives` | How to stay connected in the Maldives | Explain local SIMs vs. roaming vs. eSIM; provide step‑by‑step installation guides【864867139537363†L71-L89】. |
| `esim-yacht-charter` | eSIM for yacht charter guests | Tailor copy to marine tourism and crew scenarios. |
| `resort-connectivity` | Premium resort connectivity | Position as a partner‑oriented page for hotels. |
| `gcc-travellers` | Maldives data plans for Gulf travellers | Localise content for Qatar/UAE outbound travellers. |
| `device-compatibility` | List of eSIM compatible devices | Summarise supported devices for 2026【609271128632861†screenshot】. |
| `how-to-activate-esim` | Activation guides | Provide device‑specific steps (iPhone, Android). |
| `maldives-data-plan-comparison` | Plan comparisons | Compare your bundles to other providers (Nomad, Airalo). |
| `faq` | FAQ | Frequently asked questions (see below). |

For dynamic pages, use `generateMetadata` to compute metadata from content; include structured data (JSON‑LD) for articles and breadcrumbs【230654344952021†L25-L38】.

### 3.3 Device checker (`app/device-checker/page.tsx`)

Implement a page where users can verify eSIM support in two ways:

1. **Dial method** – Instruct users to dial `*#06#` and look for an **EID** number.  Presence of an EID indicates eSIM support; devices must also be unlocked and not jail‑broken【609271128632861†screenshot】.  Provide a small step‑by‑step box describing this method.
2. **Device list lookup** – Present a searchable dropdown of brands and models.  Source the list from a JSON file (`data/devices-2026.json`) that can be periodically updated.  After selection, display “Supported” or “Not supported” with guidance.

Include a call‑to‑action for unsupported devices (“Get notified when your phone is supported”) that captures email addresses for future marketing.

### 3.4 FAQ page (`app/faq/page.tsx`)

Create a page answering common questions.  Use accordions or collapsible sections for better usability.  Topics should include what an eSIM is, how to purchase and install, data bundle details, tethering capability, coverage across islands and refund policy.  According to industry advice, questions that appear in your customer inbox should be turned into FAQ entries【864867139537363†L71-L80】.

### 3.5 Lead capture and signup (`app/signup/page.tsx`)

Design a simple signup form for early access or plan purchase.  Capture name, email, travel dates, device type and optional WhatsApp number.  Add a checkbox for consent to receive marketing emails.  Connect the form to a backend handler (e.g., a Next.js API route `/api/signup`) that stores submissions in a database or CRM.  Place signup snippets throughout the site (e.g., after device check results and at the bottom of content pages).

### 3.6 Partner inquiry (`app/partners/page.tsx`)

The partner page should target resorts, yacht charters and travel agencies.  Describe benefits such as pre‑arrival codes, revenue sharing, improved guest experience and cross‑selling.  Add a form capturing organisation name, role, monthly guest numbers and contact details.  Provide an option to request a demo or meeting.

## 4. SEO and metadata

Follow these best practices from the 2025 Next.js SEO checklist【230654344952021†L25-L38】:

- Define site‑wide defaults in `app/metadata.ts` (metadataBase, default title, description, canonical URL, OpenGraph and Twitter cards).
- Implement `robots.ts` and `sitemap.ts` in the `app/` folder.  Use the `MetadataRoute` type and generate entries for each public route【230654344952021†L25-L38】.  Noindex low‑value pages (e.g., search, preview).  Ensure the sitemap is available at `/sitemap.xml`.
- Use dynamic OpenGraph images for blog/guide pages to improve social click‑through rates.  Generate them via `app/[slug]/opengraph-image.tsx` and the `ImageResponse` API【230654344952021†L25-L38】.
- Add structured data (JSON‑LD) for articles, product offerings and breadcrumbs【230654344952021†L25-L38】.
- Optimise Core Web Vitals by lazy‑loading images, using `next/image`, and avoiding large JavaScript bundles.【230654344952021†L25-L38】.

## 5. Lead capture & WhatsApp integration

To encourage conversions:

- Embed a floating WhatsApp button globally.  Use WhatsApp’s click‑to‑chat link with a pre‑filled message.
- Place “Get Early Access” or “Buy Now” buttons prominently.  Each CTA should scroll to or open the signup form.
- Offer incentives (launch discounts, extra data) to encourage signups.  Clarify that email addresses will only be used for marketing opt‑ins.

## 6. Analytics & performance

Enable Vercel Web Analytics, as shown above, for basic page‑level insights【980247625809324†L1748-L1784】.  Optionally integrate Google Analytics 4 for detailed behaviour tracking and advertising.  Ensure consent banners comply with regional privacy laws (GDPR/CCPA) if you track personally identifiable data.

## 7. Deployment

1. **Version control**: Commit your code to a Git repository (GitHub/GitLab).  Include the `data/devices-2026.json` file and ensure environment variables are managed via `.env.local` (e.g., API keys for CRM).
2. **Vercel deployment**: Push the repository to GitHub and import the project into Vercel.  Connect your `roamingmaldives.com` domain via the Vercel dashboard.  Enable automatic deployments for the `main` branch.
3. **Environment variables**: Add secrets (e.g., email service API keys) in the Vercel dashboard under Environment Variables.
4. **Monitoring**: Check analytics dashboards and error logs post‑deployment.  Test forms, device checker, and WhatsApp links across desktop and mobile devices.

## 8. Next steps

- Expand content coverage to neighbouring regions (e.g., Seychelles, Sri Lanka) using the same framework when ready.
- Integrate payment processing (Stripe Checkout) to enable direct plan purchases once a supplier contract is finalised.  Add secure account pages for users to view purchases and top up.
- Explore influencer partnerships, referral programmes and loyalty tie‑ins;  industry guidance recommends such tactics to boost traffic and conversions【864867139537363†L100-L115】.

By following these instructions, RoamingMaldives.com can transition from a simple AI chatbot page to a comprehensive, high‑intent travel‑connectivity platform that appeals to both consumers and enterprise partners.
