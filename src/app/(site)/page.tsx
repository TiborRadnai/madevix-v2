import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/features/home/Hero';
import ProjectsPreview from '@/features/home/ProjectsPreview';
import WebDevelopmentPreview from '@/features/home/WebDevelopmentPreview';
import WhyMadevix from '@/features/home/WhyMadevix';
import FinalCTA from '@/features/home/FinalCTA';

export const metadata: Metadata = {
  // A template miatt ez automatikusan "Madevix | Individuelle Webentwicklung für Unternehmen" lesz,
  // vagy ha fix címet akarsz, használd a title-t:
  title: 'Individuelle Webentwicklung für Unternehmen', 

  description:
    'Unabhängiges digitales Studio für moderne Unternehmen. Individuell entwickelte Websites, digitale Plattformen und klare Prozesse.',

  keywords: [
    'Webentwicklung Deutschland',
    'Individuelle Websites',
    'Digitale Plattformen',
    'Webdesign Deutschland',
    'Digitale Lösungen',
    'Unternehmenswebsite',
    'Madevix',
  ],
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-sm text-gray-400">Lade...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="py-28 text-center text-sm font-mono text-gray-400">Lade Projekte...</div>}>
        <ProjectsPreview />
      </Suspense>
      <WebDevelopmentPreview />
      <WhyMadevix />
      <FinalCTA />
    </>
  );
}