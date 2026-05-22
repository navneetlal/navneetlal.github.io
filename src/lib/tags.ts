import type { CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

/** Lowercase, dash-separated slug for a tag or category name. */
export function tagSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** All unique slugs across categories + tags, ordered. */
export function collectTagSlugs(entries: WritingEntry[]): {
  slug: string;
  label: string;
  count: number;
}[] {
  const map = new Map<string, { slug: string; label: string; count: number }>();
  for (const entry of entries) {
    const labels = [entry.data.category, ...entry.data.tags];
    for (const label of labels) {
      const slug = tagSlug(label);
      if (!slug) continue;
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { slug, label, count: 1 });
    }
  }
  return [...map.values()].sort((a, b) =>
    b.count - a.count || a.label.localeCompare(b.label),
  );
}

/** Posts whose category OR any tag matches the slug. */
export function postsMatchingSlug(
  entries: WritingEntry[],
  slug: string,
): WritingEntry[] {
  return entries.filter((entry) => {
    if (tagSlug(entry.data.category) === slug) return true;
    return entry.data.tags.some((t) => tagSlug(t) === slug);
  });
}
