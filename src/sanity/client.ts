import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Biztonságos fallback a projekt azonosítóra, hogy a Vercel build soha ne fusson 404/konfigurációs hibára
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f4bp1j6v';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ lekérdezés a projektekre
export async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      domain,
      image,
      featured,
      challenge,
      solution,
      outcome
    }
  `);
}