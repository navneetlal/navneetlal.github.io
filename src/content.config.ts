import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      'Distributed Systems',
      'Data Platforms',
      'Migrations',
      'Notes',
    ]),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().int().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverColor: z.string().optional(),
    coverEyebrow: z.string().optional(),
    coverTitle: z.string().optional(),
    coverSubtitle: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    order: z.number().int(),
    stack: z.array(z.string()),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    coverColor: z.string(),
    coverEyebrow: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, work };
