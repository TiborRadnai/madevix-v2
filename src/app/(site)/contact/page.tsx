import { Suspense } from 'react';
import ContactView from '@/features/subpages/contact/ContactView';

export const metadata = {
  title: 'Kontakt | Madevix',
  description: 'Lass uns über dein Projekt sprechen. Direkt, transparent und ohne Agentur-Umwege – direkt mit dem Entwickler.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0F1D]" />}>
      <ContactView />
    </Suspense>
  );
}