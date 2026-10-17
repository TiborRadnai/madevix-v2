import { Suspense } from 'react';
import DevelopmentView from '@/features/subpages/development/DevelopmentView';

export const metadata = {
  title: 'Webentwicklung | Madevix',
  description:
    'Individuell entwickelte Websites und digitale Lösungen. Klar geplant, sauber entwickelt und langfristig wartbar.',
  alternates: {
    canonical: '/development',
  },
};


export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0F1D]" />}>
      <DevelopmentView />
    </Suspense>
  );
}