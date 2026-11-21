# Leonida Toolbox

An English GTA 6 guides + tools website. Guides are the content; **interactive
tools are the product** — a 100% completion checklist and an interactive
Leonida map lead the site, because a plain text wiki cannot compete with
Fandom, gta.wiki and PowerPyx.

> **Not affiliated with Rockstar Games or Take-Two Interactive.** All artwork
> on this site is original styling inspired by the Vice City / Leonida vibe —
> no Rockstar assets, logos, key art or game map images are used.

## Features

- **40 guides** in `content/guides/` (MDX) — story missions, money,
  vehicles, weapons, map locations, characters, tips and technical guides.
  Each guide is its own page with title/meta, category, and an
  "information still being confirmed" notice when its facts are still emerging.
- **100% completion checklist** (`/checklist`) — 169 checkable items in 5
  categories, progress bar, filters, search, reset, progress saved in
  localStorage, export/import as JSON.
- **Interactive Leonida map** (`/map`) — original stylised SVG illustration
  with 33 clickable, filterable locations. Marker positions are approximate
  on a fan-made illustration, not exact in-game coordinates.
- **Guides index** (`/guides`) — text search + category filter.
- **SEO** — per-page titles/meta, dynamic `sitemap.xml`, `robots.txt`,
  semantic HTML, fully static pages.
- **Affiliate-ready** — reusable `<AffiliateBox>` slots with NO live
  affiliate IDs (see below).

## Tech stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS v4
- Guides as **MDX** files (`gray-matter` + `next-mdx-remote`)
- **No database, no auth, no env vars** in the MVP. Checklist progress lives
  in the visitor's browser (localStorage).
- No paid services. Deploys on Vercel.

## Getting started (local)

```bash
npm install
npm run dev
```

Open http://localhost:3000. There are no environment variables to set.

## Deploy to Vercel

1. `git init`, commit, and push this project to GitHub.
2. Import the repo in Vercel (Framework: Next.js, defaults are fine).
3. No environment variables are needed.
4. Before deploying, change `SITE_URL` in `lib/site.ts` to the real domain
   (it is used for the sitemap, robots.txt and canonical metadata).

## How to add a guide

1. Create `content/guides/<slug>.mdx` (filename = URL slug).
2. Copy the frontmatter from `content/guides/_TEMPLATE.mdx`:

```yaml
---
title: "Guide Title Here"
description: "120-160 characters for search results."
category: getting-started
updated: "2026-11-20"
status: updating
featured: false
---
```

3. Categories: `getting-started`, `story`, `characters`, `money`,
   `vehicles`, `weapons`, `map`, `activities`, `tips`, `technical`.
4. Full conventions (including the accuracy rules) are in
   `content/guides/README.md`.

## How to update checklist / map data

- **Checklist**: edit `data/checklist.ts` (`CHECKLIST_ITEMS`). Format and
  rules are documented in the file header.
- **Map**: edit `data/map-locations.ts` (`MAP_LOCATIONS`). Same — format and
  rules are in the file header.
- **Never reuse or rename an existing checklist item `id`**: progress is
  saved by id in visitors' browsers, so renaming an id wipes that item's
  saved progress.
- Both files are the single source of truth — items are never hardcoded in
  components.

## Where affiliate IDs go

Affiliate links live in `lib/affiliates.ts` (`AFFILIATE_SLOTS`). Add your own
URLs (Daraz, Amazon, etc.) to a slot's `links` array and redeploy — the
`<AffiliateBox>` renders only when a slot has at least one link, so empty
slots stay invisible. **Never add AdSense or any ad-network script**: the
owner's AdSense account is permanently banned.

## Accuracy policy

GTA VI launched Nov 19, 2026 and facts are still emerging. The rules the
content was written under — and that every future edit should follow:

- Never invent game facts (mission names, counts, locations, cheat codes,
  prices). If a fact cannot be verified from a public source, omit it or
  mark it unconfirmed.
- Never copy text verbatim from Fandom, PowerPyx, IGN or any other site.
  Research facts, then write original summaries.
- Guides and data items carry a `verified` / `updating` (or `confirming`)
  status. `updating` content shows an "information still being confirmed"
  notice on the page.
- As confirmed information emerges, update the guide, flip its status to
  `verified`, and bump its `updated` date.

## Project structure

```
app/                  Next.js App Router pages
  page.tsx            Home (hero, tools, featured + latest guides)
  guides/             Guides index + [slug] guide pages (MDX)
  checklist/          100% checklist tool page
  map/                Interactive map page
  sitemap.ts          Dynamic sitemap
components/           Header, Footer, GuideCard, AffiliateBox, checklist/, map/
content/guides/       Guide MDX files (+ _TEMPLATE.mdx, README.md)
data/                 checklist.ts, map-locations.ts (single source of truth)
lib/                  guides.ts (MDX loader), site.ts, affiliates.ts
public/robots.txt     Crawler rules + sitemap pointer
```

## Scripts

- `npm run dev` — local development
- `npm run build` — production build (also typechecks)
- `npm run start` — serve the production build locally
- `npm run lint` — ESLint
