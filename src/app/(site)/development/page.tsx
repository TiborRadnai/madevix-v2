import { Suspense } from 'react';
import DevelopmentView from '@/features/subpages/development/DevelopmentView';

export const metadata = {
  title: 'Webentwicklung | Madevix',
  description: 'Individuell entwickelt. Ohne Baukästen. Ohne unnötige Komplexität. Maßgeschneiderte Webanwendungen direkt vom Entwickler.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0F1D]" />}>
      <DevelopmentView />
    </Suspense>
  );
}