import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // ← ついでにこれにすると安全
    tags: z.array(z.string()).optional(),

    // 👇 これを追加
    series: z.enum(['moba', 'diy']),
  }),
});

export const collections = {
  posts,
};
