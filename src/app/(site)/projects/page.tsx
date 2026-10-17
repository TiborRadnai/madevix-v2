import { Suspense } from 'react';
import ProjectsView from '@/features/subpages/projects/ProjectsView';

export const metadata = {
  title: 'Projekte & Referenzen | Madevix',
  description:
    'Projekte statt Versprechen. Ausgewählte digitale Plattformen, moderne Websites und individuelle Lösungen aus realen Projekten.',
  alternates: {
    canonical: '/projects',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0F1D]" />}>
      <ProjectsView />
    </Suspense>
  );
}