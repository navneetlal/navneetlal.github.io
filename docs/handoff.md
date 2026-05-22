# Handoff

State of in-progress work and what's next, for the next session / next agent. Read [AGENTS.md](../AGENTS.md) first — that has the hard rules. This file is the changelog.

Last updated: 2026-05-22.

## Status

| Area | State |
| --- | --- |
| Astro 6 + Tailwind 4 + MDX scaffold | shipping |
| Site IA (home, `/writing`, `/writing/[slug]`, `/writing/tag/[tag]`, `/work`, `/work/[slug]`, `/about`, `/rss.xml`) | built, type-checked, visually verified |
| GitHub Pages deploy workflow | committed; **needs one-time toggle in repo Settings → Pages** |
| Content collection schemas | done |
| Work case studies | 3 of 5 have full bodies; 2 still skeletons |
| Blog post bodies | 7 stubs, all need full bodies |
| Anonymization across tracked files | clean as of last commit |

## First-time deploy step (manual, only needed once)

The workflow at `.github/workflows/deploy.yml` is committed but won't run until GitHub Pages source is switched from "Deploy from a branch" to "GitHub Actions":

1. Open the repo's **Settings → Pages**.
2. Source → **GitHub Actions**.
3. Push to `master` (or manually trigger from the Actions tab) and confirm `https://navneetlal.in` serves the new site.

## Work case studies — interview-then-compose pattern

The five case studies in `src/content/work/` are being fleshed out one at a time. Pattern documented in [case-study-format.md](case-study-format.md).

| Slug | Order | State |
| --- | --- | --- |
| `ec2-to-eks-migration` | 1 | full body shipped |
| `realtime-analytics-platform` | 2 | full body shipped |
| `gps-telemetry-platform` | 3 | full body shipped |
| `runtime-upgrade-program` | 4 | skeleton — next up |
| `activity-ingestion-platform` | 5 | skeleton |

### To pick up case 04 or 05

1. Read the existing skeleton MDX to see the frontmatter and the résumé-derived premise.
2. Send the user the five-question interview (template in [case-study-format.md](case-study-format.md), adapted to the specific case).
3. Wait for their answers.
4. Compose the full body, preserving the existing frontmatter exactly.
5. After writing, surface 2–3 specific extrapolations or judgment calls in the response — things you inferred that they should sanity-check.
6. Wait for "looks good" or a redirect before moving on.

### Voice notes from the cases shipped so far

- 600–800 words is the sweet spot.
- 5 H2 sections; the TOC renders from them.
- Concrete > general. Specific failure modes, specific decisions, specific numbers.
- If the user's hindsight is "I'd change nothing," **honor it.** Don't fabricate regrets. Reframe the confidence as a senior-IC virtue (e.g., "the next maintainer will recognize the design on sight").

## Blog post bodies (deferred)

All 7 posts in `src/content/writing/` have complete frontmatter and a one-paragraph stub body. The user has indicated this is off the critical path — don't pick these up unless they ask. When they do, the case-study-format interview pattern is a reasonable starting point (adapt for the narrower scope).

| Slug | Companion case |
| --- | --- |
| `migrating-45-services-to-eks` | case 01 |
| `replacing-mongo-analytics-with-starrocks` | case 02 |
| `cdc-pipeline-with-debezium` | case 02 |
| `lakehouse-with-iceberg-and-airflow` | case 02 |
| `normalizing-gps-from-8k-vehicles` | case 03 |
| `java-8-to-17-cascading-dep-hell` | case 04 (write after case 04 lands) |
| `opentelemetry-stack-trace-log-metric` | standalone |

Future post ideas the user has flagged: see [../archive/post-ideas.md](../archive/post-ideas.md).

## Open decision: archive/ in git history

The `archive/` directory contains the old Hugo site, which has real company/customer names baked into HTML/CSS/etc. (it was previously the live site). The user is aware. Three options were presented but not picked:

1. **Leave as-is** — those names were already public on the previous live site.
2. **Delete `archive/` from `HEAD`** — disappears from current tree but stays reachable via `git log --all`.
3. **Rewrite history** with `git filter-repo` or BFG to expunge entirely — force-push required, rewrites SHAs, breaks any existing clones.

The choice belongs to the user. Don't decide on their behalf; ask if it comes up.

## Parking lot (do not implement unless asked)

- Functional search on `/writing` — the input is intentionally disabled. When revisited, Pagefind or Fuse.js.
- Per-post OG image generation — currently uses `/og-default.png`; that file doesn't exist yet, OG falls back to text-only previews on social.
- Real `/about` page content — currently a placeholder pointing at the résumé.
- Newsletter wiring — the SubscribeCard intentionally points at the RSS feed only.
- Migrating any of the old Hugo content from `archive/` into new MDX.

## Useful context

- Visual design follows three wireframes in `archive/0[1-3]_*.svg`. Compare against them when adding new UI surface.
- Case-study writing voice/structure: [case-study-format.md](case-study-format.md).
- Hard rules and stack pins: [../AGENTS.md](../AGENTS.md).
- Project README (for humans browsing on GitHub): [../README.md](../README.md).
