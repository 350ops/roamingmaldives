# CLAUDE.md

## Project Overview

This repository is the main `roaming-maldives` website and should remain the primary product experience.

It is a Next.js App Router site that has already been through a visual refinement pass. The goal is not to turn it into a generic SaaS landing page. The design direction is:

- premium
- calm
- restrained
- editorial
- trustworthy
- travel-specific

Avoid:

- generic startup UI
- dashboard-looking components
- bright AI-template styling
- gradient/blob/glassmorphism effects
- repetitive "3 cards under a heading" sections unless truly necessary

Typography, spacing, and proportion should carry most of the design quality.

## Current Architecture

Main app:

- `app/`
- `components/`
- `lib/`
- `data/`

Key shared files:

- `app/layout.tsx`: root layout, fonts, navbar/footer/support bubble
- `app/globals.css`: brand tokens, surfaces, buttons, fields, typography helpers
- `lib/site.ts`: site-wide constants and brand strings
- `components/BrandWordmark.tsx`: renders the `roamingmaldives` wordmark with split emphasis

## Brand / Design System Notes

The site has been intentionally moved away from default Tailwind/SaaS styling.

Important design primitives already in use:

- `surface-panel`
- `surface-card`
- `surface-muted`
- `btn-primary`
- `btn-secondary`
- `btn-quiet`
- `field-input`
- `field-select`
- `field-textarea`
- `eyebrow`
- `display-hero`
- `display-title`
- `section-title`

Use these before inventing one-off styles.

## Support Chat: First Merge Pass

There is now a first-pass native support chat inside this repo.

Added files:

- `app/support/page.tsx`
- `app/api/chat/route.ts`
- `app/api/chat/schema.ts`
- `components/support/SupportChat.tsx`
- `components/support/SupportMessages.tsx`
- `components/support/SupportComposer.tsx`
- `components/support/SupportSuggestions.tsx`
- `lib/ai/prompts.ts`
- `lib/ai/providers.ts`
- `lib/ai/models.ts`

What this support chat is right now:

- text-only
- stateless
- no auth
- no history
- no attachments
- no artifact/document tools
- styled to match the main site

The support launcher:

- `components/WhatsAppCTA.tsx`

It no longer opens WhatsApp or email. It routes users to `/support`.

## AI Provider / Environment

The support API route uses the AI SDK with Google.

Required environment variable:

- `GEMINI_API_KEY`

The route returns a 500 response if that key is missing.

Relevant files:

- `lib/ai/providers.ts`
- `lib/ai/prompts.ts`
- `app/api/chat/route.ts`

Default model:

- `gemini-2.5-flash-lite`

defined in:

- `lib/ai/models.ts`

## Nested `aichat` Project

There is a separate `aichat/` project in this repo. It is **not** currently part of the main app build.

Important:

- `aichat/` contains a larger Vercel AI chat template with auth, DB, history, tools, artifacts, and extra UI.
- We are **not** using that full app directly.
- We only started porting a minimal support-chat layer into the main site.

To prevent the nested project from breaking the main app:

- `tsconfig.json` excludes `aichat`
- `eslint.config.mjs` ignores `aichat/**`

Do not remove those exclusions unless you are intentionally doing a deeper full merge.

## Why The Exclusions Exist

Without excluding `aichat`, root lint/build fails because the nested app has its own unresolved dependencies and template code paths that are not wired into this repo's main runtime.

Current exclusion points:

- `tsconfig.json`
- `eslint.config.mjs`

These exclusions are deliberate and currently necessary.

## If Continuing The Chat Merge

Preferred direction:

- keep this app as the host product
- keep this site's design system as the source of truth
- transplant only useful AI/chat logic from `aichat`
- do not transplant the Vercel template UI wholesale

Recommended next steps for future work:

1. Turn `/support` into a desktop drawer + mobile full-page experience.
2. Improve message rendering polish while keeping the current brand language.
3. Optionally add persistence only if it is actually needed.
4. Only later consider selective `aichat` features like history or authentication.

Do not bring over:

- sidebar history
- artifact/document UI
- weather tool
- attachment uploads
- auth flows
- generic chat template chrome

unless there is a clear product reason.

## Important Existing Content Decisions

The site already went through:

- homepage refinement
- shared chrome redesign
- secondary page refinement
- copy tightening
- support route introduction

Try to preserve the current calmer tone and not regress back toward:

- louder CTAs
- bright blue generic UI
- default startup copy
- fake trust patterns

## Commands

Main app commands:

- `pnpm dev`
- `pnpm lint`
- `pnpm build`

These should run from the repo root.

## Validation Status

At the time this file was created:

- root `pnpm lint` passes
- root `pnpm build` passes
- `/support` exists
- `/api/chat` exists

## Guidance For Future Agents

When making changes:

- preserve the refined brand direction
- prefer extending existing tokens/components
- keep support chat feeling like concierge support, not a separate AI product
- keep answers and UI grounded in Maldives travel connectivity use cases
- do not reintroduce template-like Vercel AI UI patterns

If you touch support chat, check:

- `app/support/page.tsx`
- `components/support/*`
- `app/api/chat/route.ts`
- `lib/ai/*`

If you touch visual design, check:

- `app/globals.css`
- `app/layout.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/BrandWordmark.tsx`
