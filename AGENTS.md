# AGENTS.md

Instructions for AI agents (Claude Code, Cursor, etc.) working in this repo.

This is a personal portfolio + blog for Navneet Lal Gupta. Built with Astro 6 + Tailwind 4 + MDX, deployed to GitHub Pages with custom domain navneetlal.in.

## Hard rules

Non-negotiable. Violating these means the work has to be redone.

### 1. Never name real employers or customers in tracked files

The site uses anonymized "role-of-company" phrases throughout — "a multi-tenant SaaS platform", "a logistics startup", "an e-learning company", "a quick-commerce customer", "a carrier API".

When editing existing content, match the anonymized phrases already there. When the user gives you interview answers for a new case study or post, expect real names — anonymize them on the compose pass. If you're unsure which anonymized phrase maps to a name they mention, ask the user.

**Do not write a real-name → anonymized-phrase mapping into any tracked file** — not in code comments, not in README/AGENTS/docs, not in commit messages, not in PR descriptions. The mapping lives only in the user's private notes outside this repo. If you need it to do your job, ask.

This rule applies to:
- All `.mdx` files in `src/content/`
- `README.md`, `AGENTS.md`, `docs/*`
- Commit messages and PR descriptions
- Filenames and URL slugs (use generic descriptors — `ec2-to-eks-migration`, not the employer name)

### 2. Stack pins

Don't downgrade or replace without asking:

- **Astro ^6.3** with the Content Layer API (`defineCollection({ loader: glob(...) })`, not the legacy `type: 'content'`)
- **Tailwind ^4.3** via `@tailwindcss/vite` — CSS-first config in `src/styles/global.css`, no `tailwind.config.mjs`
- **MDX ^5**
- **Yarn 1.22 (Classic)** — not npm, not pnpm. Lockfile is `yarn.lock`. Don't commit a `package-lock.json` if one appears.
- **Node ^22.12** (Astro 6 minimum). Local dev typically uses Node 24 via nvm.

### 3. Don't add features beyond what's asked

The plan has explicit parking-lot items (functional search on `/writing`, OG image generation, real About-page content, newsletter wiring). Don't quietly implement these. If you think one is worth doing, propose it; let the user decide.

### 4. Commit identity

Use the personal git identity: `Navneet Lal Gupta <navneetlalg@gmail.com>`. Local repo config is already set; don't change it. Remote uses SSH host alias `github.com-navneetlal` (not plain `github.com`). For AI-assisted commits, include the standard co-author trailer.

## Local dev

```sh
yarn install
yarn dev          # http://localhost:4321
yarn build        # produce dist/
yarn astro check  # type-check (must be 0 errors)
```

`astro check` may report ~30 hints from Astro's internal Zod re-export deprecation. Hints are fine; errors and warnings are not.

## Where things live

| Domain | Path |
| --- | --- |
| Page templates | `src/pages/` |
| Reusable components | `src/components/{layout,ui,cards,home,post}/` |
| Layouts (BaseLayout, PostLayout) | `src/layouts/` |
| Content schemas | `src/content.config.ts` |
| Blog post MDX | `src/content/writing/<slug>.mdx` |
| Case-study MDX | `src/content/work/<slug>.mdx` |
| Design tokens (`@theme`) | `src/styles/global.css` |
| RSS feed generator | `src/pages/rss.xml.ts` |
| Tag / category helpers | `src/lib/tags.ts` |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Old Hugo site (reference only, not built) | `archive/` |
| Wireframes (reference) | `archive/0[1-3]_*.svg` |
| Docs for future agents | `docs/` |

## Writing content

### A new blog post

Create `src/content/writing/<kebab-slug>.mdx`. Frontmatter schema is in `src/content.config.ts` — copy from an existing post and adjust. `featured: true` should only ever be on one post at a time (the FeaturedPostCard on `/writing` grabs the first match).

### A new case study

Create `src/content/work/<kebab-slug>.mdx`. The home page shows top 3 by `order`; `/work` shows all sorted by `order`. **Voice and structure are documented in [docs/case-study-format.md](docs/case-study-format.md).** Read it before drafting.

## Things to know before touching

- **The dev server needs Node 22+.** If you spawn it via a process manager that inherits an old PATH (e.g. the Claude Preview MCP), use a wrapper that prepends `~/.nvm/versions/node/v24.x/bin` to PATH. There's an example pattern in `.claude/dev-server.sh` (gitignored — recreate locally if needed).
- **Tailwind 4 has no `tailwind.config.mjs`.** Tokens live in `@theme` directives in `src/styles/global.css`. Adding tokens there is how you extend the palette/fonts/etc.
- **GitHub Pages requires the `CNAME` file at the root of the published artifact.** The deploy workflow copies `./CNAME` into `dist/CNAME` before upload. Don't move `CNAME` into `public/`.

## Commits

- Prefer small, focused commits. The initial rebuild was one commit because it was a coherent atomic event; subsequent changes should split along logical lines (one case study per commit is a good rule).
- Use HEREDOC for multi-line commit messages.
- Include the AI co-author trailer when you author the commit.
- Never bypass hooks (`--no-verify`) or signing without explicit user approval.

## Handoff

For the current state of in-progress work and what's next, read [docs/handoff.md](docs/handoff.md).
