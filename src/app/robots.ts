import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Ha lenne admin felület, azt itt tudnád tiltani:
      // disallow: '/private/',
    },
    sitemap: 'https://madevix.com/sitemap.xml',
  };
}