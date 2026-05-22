# Future post ideas (parking lot)

Drawn from the résumé but not seeded as stubs in the initial site build.
Promote any of these into `src/content/writing/` when you're ready to draft.

- **Building a CI/CD pipeline solo, from zero.** Jenkins-era story —
  deploy frequency 1/wk → 2-3/day at the logistics-startup role. Tag:
  Migrations / Notes.
- **Keycloak as the customer-facing SSO layer — replacing hand-rolled auth.**
  Identity-flow migration without a maintenance window. Tag: Distributed
  Systems / Auth.
- **Why Cassandra for write-heavy multi-source activity ingestion.** The
  schema-design and partition-key story behind picking C* over Postgres for
  the activity-stream collector. Tag: Data Platforms.
- **Bulk-provisioning 1000+ students into self-hosted VCS.** The boring,
  high-leverage onboarding pipeline behind the assessment platform. Tag:
  Notes.
- **ANTLR4 for automated code-quality grading.** Parsing student
  submissions for automated structural feedback at scale. Tag: Distributed
  Systems / Notes.

When promoting an idea:

1. Create `src/content/writing/<kebab-slug>.mdx`.
2. Fill out the frontmatter — match the schema in `src/content.config.ts`.
3. Anonymize per the rules in `/Users/navneetlalgupta/.claude/plans/portfolio-blog-zazzy-cocke.md`
   ("Content seeding" section).
