# Guide content conventions

## Files

- One guide = one `.mdx` file in this directory.
- Filename = URL slug, e.g. `beginners-guide.mdx` → `/guides/beginners-guide`.
- Files starting with `_` are never published (templates, drafts).

## Frontmatter (required)

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

- `category`: one of `getting-started`, `story`, `characters`, `money`,
  `vehicles`, `weapons`, `map`, `activities`, `tips`, `technical`.
- `status`: `verified` only when the guide's key facts are confirmed from
  public sources. Use `updating` for anything still emerging — the page
  shows an "information still being confirmed" notice.
- `featured`: `true` for a small number of flagship guides shown on the home page.
- `updated`: date the guide was last checked, `YYYY-MM-DD`.

## Writing rules

- **English only.** This site is English-only by the owner's decision.
- **Original writing.** Never copy text verbatim from Fandom, PowerPyx, IGN
  or any other site. Research facts, then write them in your own words.
- **Never invent game facts.** No fabricated mission names, collectible
  counts, locations, cheat codes or prices. If a fact cannot be verified
  from a public source, omit it or mark it clearly as unconfirmed.
- **Internal links**: link to other guides as `[Text](/guides/slug)`.
- **Structure**: short intro, `##` sections, lists for steps. Aim for
  400-900 words per guide. Spoilers: warn the reader before story details.
- **No em dashes** in guide text is not required — but keep the tone plain
  and direct, no filler.
