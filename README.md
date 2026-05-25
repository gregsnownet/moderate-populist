# Moderate Populist — Redesign port to Next.js

This folder contains the production-ready Next.js files implementing the new
"Common Ground" design. Mirror the folder layout into your repo root.

## What to copy

```
nextjs/
├── app/
│   ├── layout.tsx              → replace moderate-populist/app/layout.tsx
│   ├── globals.css             → replace moderate-populist/app/globals.css
│   ├── page.tsx                → replace moderate-populist/app/page.tsx
│   ├── issues/page.tsx         → replace moderate-populist/app/issues/page.tsx (was IssuesClient? check)
│   ├── solutions/page.tsx      → replace moderate-populist/app/solutions/page.tsx
│   ├── talking-points/page.tsx → replace moderate-populist/app/talking-points/page.tsx
│   ├── resources/page.tsx      → replace moderate-populist/app/resources/page.tsx
│   └── about/page.tsx          → replace moderate-populist/app/about/page.tsx
├── components/
│   ├── Header.tsx              → NEW
│   ├── Footer.tsx              → NEW
│   ├── PageHeader.tsx          → NEW
│   ├── PullQuote.tsx           → NEW
│   ├── CrossLinks.tsx          → NEW
│   ├── WhereDoYouStand.tsx     → NEW (client component)
│   └── IssueCard.tsx           → replace moderate-populist/components/IssueCard.tsx
└── lib/
    ├── site-content.ts         → NEW (values, 4Cs, scripts, resources, etc.)
    └── stance-questions.ts     → NEW (WDYS questions)
```

## One-time setup steps

1. **Install lucide-react** (used for all line icons):
   ```
   npm install lucide-react
   ```

2. **Drop the old logo treatments.** `components/Logo.tsx` is no longer used.
   You can either delete it or leave it unreferenced.

3. **Wire fonts.** `app/layout.tsx` now loads Funnel Display, Funnel Sans, and
   keeps Geist Mono. Geist Sans is no longer used by the design but Next.js
   will tree-shake it if you remove the import.

4. **Keep AuthProvider.** I've left `<AuthProvider>` wrapping the layout, and
   `<UserMenu>` is still surfaced via the header's mobile/account slot. Your
   login/register/admin routes are untouched.

5. **Keep your issue data.** `lib/data/issues.ts` is unchanged. The new
   `components/IssueCard.tsx` reads the same `Issue` type. If you want the new
   "common ground %" badge to be data-driven, add an optional
   `commonGroundPercent?: number` field to your `Issue` type and the issues
   themselves; the card falls back to a default if missing.

## After copying

```
npm run build       # sanity-check the build
npm run dev         # see it locally
git add -A
git commit -m "Redesign: Common Ground theme, slim home, 5 subpages, WDYS widget"
git push
```

Amplify (`amplify.yml`) will pick up the push and redeploy automatically.

## What's new in this version

- **Personalized recommendations** at the end of the WDYS quiz. The widget
  picks the two topics the user had the strongest opinion on, and offers
  direct links to the matching issue page + talking-points script + a generic
  Solutions CTA.
- **Email capture** on the WDYS result screen and on the home newsletter
  section. Both POST to `/api/newsletter`.
- **`app/api/newsletter/route.ts`** scaffolds the endpoint — log-only by
  default; wire your ESP into the `storeEmail` function.
- **`relatedIssueId` / `relatedScript` fields** on every stance question in
  `lib/stance-questions.ts`. Important: these IDs must match `issues` in
  `lib/data/issues.ts`. The current values assume the IDs below — sanity-check
  against your data file and adjust if any are missing:
  - `healthcare-access`, `immigration-reform`, `economic-opportunity`,
    `climate-environment`, `education-quality`, `gun-rights`,
    `civic-dialogue`, `electoral-reform`

## Files in your repo that are now superseded

These existed in the old version and are no longer used by the redesign. You
can delete them (or leave them — they're harmless dead code):

- `components/Logo.tsx` — old SVG-logo treatment; the new header uses a typographic wordmark.
- `components/IssueSection.tsx` — section wrapper from the old home page.
- `app/resources/layout.tsx` — only set metadata; the new `app/resources/page.tsx` exports its own.
- `public/old/` — old hero / logo assets if present.

## Things you might want to migrate

- **Issue detail pages.** I haven't redesigned `app/issues/[id]/page.tsx` —
  the existing one will still work but won't match the new theme. Tell me when
  you want this one polished and I'll do it next.
- **Search.** The header has a search icon but no implementation. Easy add
  when you want it.
- **Auth screens** (`app/login`, `app/register`) are untouched. They'll look
  different than the rest of the site until restyled. Worth doing eventually.
- **Newsletter signup.** The home page newsletter form and the WDYS result
  screen both POST to `/api/newsletter`. A starter route is included at
  `app/api/newsletter/route.ts` — it validates the email and currently just
  `console.log`s. Replace the `storeEmail` function with your ESP integration
  (Mailchimp / Buttondown / ConvertKit / Substack) when ready.
- **Submit-source form.** The resources page form posts to `/api/submit-source`
  — not wired yet. Either remove the form, swap to a mailto link, or add a
  route that emails you the URL.

## Sanity checklist

After copying everything, this is what should be true:

- [ ] `npm install lucide-react` succeeds
- [ ] `npm run build` completes with no errors
- [ ] `/` shows hero → WDYS widget → 3 featured issues → newsletter
- [ ] `/issues` shows the full grid with category filter
- [ ] `/solutions`, `/talking-points`, `/resources`, `/about` all render
- [ ] Header nav highlights the current page
- [ ] WDYS widget on home works: drag sliders, advance through 8 questions, see result
- [ ] Mobile widths still render (might need responsive tweaks; ping me)
