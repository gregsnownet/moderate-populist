# Moderate Populist — Redesign port to Next.js (May 2026 revision)

This folder contains the production-ready Next.js files implementing the new
"Common Ground" design + the May 2026 content expansion.

## What's new in this revision

- **Issues**: How-to-read explainer + monthly Spotlight + Researching-Next pipeline
- **Solutions**: "Start here" + "Find your rep" tools + call/email templates with copy-button + Cleveland success story + "What NOT to do" counter-list
- **Talking Points**: Bridging-phrases section + 5 new conversation scripts (Education, Affordability, Welfare, Foreign policy, Free speech) + "When to walk away" warning signs + printable pocket card
- **Resources**: Books grid + curated newsletters & podcasts + "Read each side honestly" lists + Glossary of terms
- **About**: Editor's creator note + 8-question FAQ + 4-way Contribute grid + Privacy commitment

## File layout — copy these into your repo

```
moderate-populist/  ← YOUR REPO ROOT
├── app/
│   ├── layout.tsx                        ← REPLACE
│   ├── globals.css                       ← REPLACE
│   ├── page.tsx                          ← REPLACE  (home)
│   ├── api/
│   │   └── newsletter/route.ts           ← NEW or REPLACE
│   ├── issues/
│   │   ├── page.tsx                      ← REPLACE
│   │   └── IssuesIndex.tsx               ← NEW or REPLACE  (client component)
│   ├── solutions/
│   │   ├── page.tsx                      ← REPLACE
│   │   └── CopyButton.tsx                ← NEW   (client component)
│   ├── talking-points/
│   │   ├── page.tsx                      ← REPLACE
│   │   └── PocketCardActions.tsx         ← NEW   (client component)
│   ├── resources/page.tsx                ← REPLACE
│   └── about/page.tsx                    ← REPLACE
├── components/
│   ├── Header.tsx                        ← NEW or REPLACE
│   ├── Footer.tsx                        ← NEW or REPLACE
│   ├── PageHeader.tsx                    ← NEW or REPLACE
│   ├── PullQuote.tsx                     ← NEW or REPLACE
│   ├── CrossLinks.tsx                    ← NEW or REPLACE
│   ├── WhereDoYouStand.tsx               ← NEW or REPLACE
│   └── IssueCard.tsx                     ← REPLACE
└── lib/
    ├── site-content.ts                   ← REPLACE  (all editorial content)
    └── stance-questions.ts               ← REPLACE  (WDYS quiz)
```

**Don't put a `nextjs/` folder inside your repo** — copy the *contents* of
`nextjs/` into the matching folders under `moderate-populist/`.

## One-time setup

```
npm install lucide-react
npm run build
```

If the build complains about missing icons, run `npm install lucide-react@latest`.

## Push to live

```
git add -A
git commit -m "Redesign v3: subpage content expansion (issues spotlight, solutions tools, talking scripts, resources, FAQ)"
git push
```

Amplify (`amplify.yml`) picks up the push and redeploys automatically.

## Notes

- **Talking-point script IDs** — the WDYS widget links to anchors like
  `/talking-points#healthcare`. The new talking-points page generates these
  anchors automatically from the script topic (lowercased + dashes), so
  "Trust in elections" → `#trust-in-elections`, "Welfare & entitlements" →
  `#welfare-entitlements`. Update `relatedScriptTopic` in
  `lib/stance-questions.ts` if you ever rename topics.
- **Pocket card PDF** — the printable button calls `window.print()` and the
  PDF button looks for `/public/pocket-card.pdf`. Add a PDF there when ready
  or remove the button.
- **Mailto contributions** — Contribute and Suggest-a-topic links open the
  user's mail client to `hello@moderatepopulist.org`. Replace this with your
  preferred address or a real form when ready.
- **Newsletter signup** — POSTs to `/api/newsletter/route.ts`. Endpoint is
  scaffolded; wire your ESP into the `storeEmail` function.
- **Issue detail pages** — `app/issues/[id]/page.tsx` is still the old design.
  Tell me when you want it polished and I'll do that next.
- **Auth screens** (`login`, `register`, etc.) — untouched, still using old
  styling. They'll work but won't match the rest of the site until restyled.

## Files in your repo you can now delete

These were used by the old design and aren't referenced anywhere new:

- `components/Logo.tsx`
- `components/IssueSection.tsx`
- `app/resources/layout.tsx`
- `public/old/`
