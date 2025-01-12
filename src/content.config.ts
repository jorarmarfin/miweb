import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesContent = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/services' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        imagen: z.string(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { servicesContent };