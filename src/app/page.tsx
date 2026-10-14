import type { Metadata } from 'next';
import Hero from "@/features/home/Hero";
import ProjectsPreview from "@/features/home/ProjectsPreview";
import WebDevelopmentPreview from "@/features/home/WebDevelopmentPreview";
import WhyMadevix from "@/features/home/WhyMadevix";
import FinalCTA from "@/features/home/FinalCTA";

export const metadata: Metadata = {
  title: 'Madevix | Individuelle Webentwicklung für Unternehmen',
  description: 'Unabhängiges digitales Studio für maßgefertigte Websites. Ohne Baukästen, ohne Agentur-Umwege. Sauber entwickelt, schnell und direkt vom Entwickler in Deutschland.',
  keywords: [
    'Webentwicklung Deutschland',
    'Individuelle Websites',
    'Webdesign Deutschland',
    'Digitale Lösungen',
    'Unternehmenswebsite',
    'Freelance Webentwickler',
    'Next.js Entwicklung',
    'Madevix'
  ],
  authors: [{ name: 'Madevix' }],
  creator: 'Madevix',
  publisher: 'Madevix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Madevix | Individuelle Webentwicklung für Unternehmen',
    description: 'Maßgefertigte Websites für Unternehmen, die online überzeugen wollen. Klar strukturiert und direkt vom Entwickler.',
    url: 'https://madevix.com',
    siteName: 'Madevix',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madevix | Individuelle Webentwicklung für Unternehmen',
    description: 'Maßgefertigte Websites für Unternehmen. Klar strukturiert und direkt vom Entwickler.',
  },
  alternates: {
    canonical: 'https://madevix.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <WebDevelopmentPreview />
      <WhyMadevix />
      <FinalCTA />
    </>
  );
}