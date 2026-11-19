import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // "raport-ai" / "raport-gaming" = cykliczne raporty, "artykul" = Twój własny wpis
    category: z.enum(['raport-ai', 'raport-gaming', 'artykul']).default('artykul'),
    tags: z.array(z.string()).default([]),
    // draft: true = wpis jest w repozytorium, ale nie pojawia się na stronie
    draft: z.boolean().default(false),
    // Gotowy skrót do wklejenia na LinkedIn (nie jest wyświetlany na stronie)
    linkedin: z.string().optional(),
  }),
});

export const collections = { blog };
