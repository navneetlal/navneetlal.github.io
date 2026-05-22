import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return rss({
    title: 'navneetlal — writing',
    description:
      'Field notes on distributed systems, data platforms, and large-scale migrations.',
    site: context.site ?? 'https://navneetlal.in',
    items: posts
      .sort(
        (a, b) =>
          b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
      )
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishedAt,
        link: `/writing/${post.id}/`,
        categories: [...new Set([post.data.category, ...post.data.tags])],
      })),
    customData: '<language>en-us</language>',
  });
}
