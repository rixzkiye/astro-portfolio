import { defineCollection, z } from 'astro:content';

// Koleksi untuk Proyek
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    category: z.enum(['code', 'music', 'video']),
    tags: z.array(z.string()),
    date: z.date(),
    views: z.number().default(0),
    externalLink: z.string().optional(),
    githubLink: z.string().optional(),
    youtubeLink: z.string().optional(),
    spotifyLink: z.string().optional(),
    privacyLink: z.string().optional(), // <-- TAMBAHKAN INI
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

// Koleksi untuk Tulisan (Papers)
const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    category: z.enum(['esai', 'puisi', 'artikel', 'cerpen']),
    tags: z.array(z.string()),
    date: z.date(),
    views: z.number().default(0),
    pdfUrl: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'published']).default('published'),
    readTime: z.number().optional(), // in minutes
  }),
});

// BARU: Koleksi untuk Policies
const policiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['privacy-policy', 'terms-of-service']), // Added policy type
  }),
});


export const collections = {
  'projects': projectsCollection,
  'papers': papersCollection,
  'policies': policiesCollection, // Added policies collection
};
