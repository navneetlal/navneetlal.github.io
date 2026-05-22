# navneetlal.github.io

Personal portfolio + blog. Served at [navneetlal.in](https://navneetlal.in) via GitHub Pages with a custom domain.

## Local dev

```sh
yarn install
yarn dev          # http://localhost:4321
yarn build        # produce dist/
yarn astro check  # type-check Astro + content collections
```

Requires Node ≥ 22.12 (Astro 6). Local dev uses Yarn Classic 1.22.

## Stack

- **[Astro](https://astro.build) 6** with the Content Layer API (`glob()` loaders)
- **[Tailwind](https://tailwindcss.com) 4** via `@tailwindcss/vite` — CSS-first config (`@theme` directives in [src/styles/global.css](src/styles/global.css))
- **MDX 5** for both blog posts and case studies, with `rehype-slug` + `rehype-autolink-headings` for TOC anchors
- **Shiki** (bundled with Astro) for code-block syntax highlighting
- **RSS** via `@astrojs/rss` at [/rss.xml](src/pages/rss.xml.ts); sitemap via `@astrojs/sitemap`

## Layout

```
src/
├── components/
│   ├── cards/        WorkCard, PostCard, FeaturedPostCard
│   ├── home/         Hero, ArchDiagram, CurrentlyStrip
│   ├── layout/       Header, Footer, Container, BaseHead
│   ├── post/         PostHeader, PostBody, TableOfContents,
│   │                 ShareCard, SubscribeCard, AuthorBio,
│   │                 RelatedPosts, WorkHeader
│   └── ui/           EyebrowLabel, Pill, Tag, StatBlock, ArrowLink
├── content/
│   ├── work/         Case-study MDX
│   └── writing/      Blog post MDX
├── content.config.ts Collection schemas
├── layouts/          BaseLayout, PostLayout
├── lib/              tags.ts (tag/category slug helpers)
├── pages/
│   ├── work/         /work/, /work/[slug]
│   ├── writing/      /writing/, /writing/[slug], /writing/tag/[tag]
│   ├── about.astro
│   ├── index.astro
│   └── rss.xml.ts
└── styles/global.css Design tokens (@theme)
```

The old Hugo site is under [archive/](archive/) for reference — not built, not served. The wireframes that drove this build live there too.

## Adding content

**A new blog post** — create `src/content/writing/<kebab-slug>.mdx`. Frontmatter schema is in [src/content.config.ts](src/content.config.ts):

```yaml
---
title: "..."
description: "..."
publishedAt: 2026-06-01
category: "Distributed Systems"  # or Data Platforms / Migrations / Notes
tags: ["EKS", "Kafka"]
readingMinutes: 8
featured: false                  # only one post at a time should be true
coverColor: "#0f172a"
coverEyebrow: "// distributed systems"
coverTitle: "..."
coverSubtitle: "..."
---
```

**A new case study** — `src/content/work/<kebab-slug>.mdx`. Lower `order` numbers float to the top of `/work`; the home page shows the top 3 by `order`.

**Future-post backlog** lives in [archive/post-ideas.md](archive/post-ideas.md).

## Deploy

Pushes to `master` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds with Yarn + Node 24, copies the root `CNAME` into the artifact, and publishes via `actions/deploy-pages`.

First-time setup: Repo **Settings → Pages → Source = "GitHub Actions"**.

## Parking lot

Things deliberately out of scope for v1:

- Functional search on `/writing` (input is disabled — Pagefind or Fuse.js TODO).
- Per-post OG image generation.
- Real About-page content.
- Newsletter — the [SubscribeCard](src/components/post/SubscribeCard.astro) points at the RSS feed only.
