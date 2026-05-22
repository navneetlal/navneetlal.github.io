# Case-study writing format

The case studies in `src/content/work/` follow a consistent voice and structure. Match it when adding new cases or editing existing ones. Read this before drafting.

## Voice

- Senior engineer's blog. Spare, precise. No marketing language ("synergies", "leveraging", "delighted to share").
- Active voice. Short paragraphs.
- Specific over general — "deploys took 90 minutes" beats "deploys were slow".
- Anonymized — see [../AGENTS.md](../AGENTS.md) hard-rule #1. Use role-of-company phrases that match the existing content. **Never write a real-name → anonymized-phrase mapping into any tracked file.** If a new mapping is needed, ask the user.
- Inline backticks for technical terms (`STREAM LOAD`, `initContainers`, `Active: active (running)`).
- 600–800 words is the sweet spot. Under 500 feels thin; over 1000 readers stop scrolling.

## Structure — 5 H2 sections

The TOC on case-study pages renders from H2 headings, so the section names matter. The arc:

### 0. Opening paragraph (no H2)

One or two sentences. What was built, what role, what scale. Pull anchor metrics in if natural.

### 1. The real problem behind the symptom

The résumé bullet has the *symptom*; this section names the *problem*. ("Deploys took 90 minutes" is the symptom; "the deploy was implicitly sequential because services post-unzip-scripted each other's readiness" is the problem.) Title varies — pick something concrete. Examples shipped:

- "The 90-minute deploy" (EKS case)
- "Ahead of the wall, not after it" (analytics case)
- "A platform for vehicles you don't own" (GPS case)

### 2. The key decision(s) + the alternatives you didn't pick

Bake-offs matter — they signal judgment. Use a short list of alternatives with a one-line reason each, then a short statement of what tipped it. Examples:

- "Why EKS, not the alternatives"
- "Two paths, one query engine" + "What we picked and why"
- "The gateway: one shape, many protocols"

### 3. Hardest week / what didn't go to plan

The dinner-table story. Not the PR-friendly version. Concrete failure mode + how it was caught + what was changed.

- "What the migration actually felt like"
- "Where it gets hard: replay + schema evolution"
- "When trucks teleport"

### 4. Beyond the numbers *(optional, only when there's a real second-order story)*

The headline metrics are in the résumé. This section is about second-order effects: team velocity, on-call quality, observability improvements, unlocked product surface, business outcomes.

- "What changed beyond the numbers" (EKS, analytics)
- "What the gateway unlocked" (GPS)

### 5. Hindsight

Honest. If the user says "I'd change nothing," honor it — don't fabricate regrets. Phrase the confidence as a senior-IC virtue ("the picks were industry-standard for a reason; the next maintainer will recognize the design on sight") rather than letting it read as glib.

- "What I'd do differently" (EKS — substantive change)
- "What I'd change" (analytics, GPS — minimal, confident)

## The 5-question interview

To produce body content, run a five-question interview with the user. Adapt to the specific case:

1. **The real problem behind the symptom.** What's under the résumé bullet? What was the actual hard part — not the polished version?
2. **Key decisions + alternatives.** For each significant tech pick, what was the runner-up and why didn't it win?
3. **Hardest week / what surprised you.** The dinner-table version. What broke, what was caught, what was changed.
4. **Beyond the numbers.** What changed for the team, customers, on-call, observability, or product velocity that wasn't a metric in the résumé?
5. **Hindsight.** What would you do differently with the experience you have now?

### Interview cadence

- Send all five questions in a single message; let the user batch-answer.
- After they answer, compose the full case study, then call out 2–3 specific extrapolations or judgment calls to check.
- Wait for "looks good" before moving to the next case. A redirect ("change this, the framing is off") is normal — iterate.
- The interview answers are the source material. Default to writing in the user's voice, not yours. If their answer is direct and confident, don't soften it.

## What to anonymize

In the interview answers, expect real names. On the compose pass, anonymize:

- Company names (current and prior employers).
- Customer / client names.
- Vendor names where context-sensitive (generic "MongoDB" is fine; a named customer-internal system isn't).

Use whatever role-of-company phrase is already established in the live content. If a new one is needed, ask the user. **Don't transcribe the new mapping into any tracked file** — that includes this document.

## Anti-patterns

- **Fabricating hindsight.** If the user answered "nothing to change," don't invent a regret to fill the section.
- **Over-quoting the résumé.** The numbers are signal-light when they're alone. Use them as anchors, not as the spine.
- **Generic alternatives.** "We picked Kubernetes because it's the standard" is not a decision story. "We picked EKS over ECS because we needed `initContainers` as a first-class primitive" is.
- **Marketing voice.** Read each paragraph and ask: would a senior engineer write this on their personal blog, or would a marketing team write this in a case study PDF? Aim for the former.
- **Over-long sections.** If a section runs past ~200 words, you're probably making three points where one would do.
