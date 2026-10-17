import { Suspense } from 'react';
import ContactView from '@/features/subpages/contact/ContactView';

export const metadata = {
  title: 'Kontakt | Madevix',
  description:
    'Bereit für dein nächstes Projekt? Sprich direkt mit dem Entwickler über deine Ideen, Ziele und Anforderungen.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0F1D]" />}>
      <ContactView />
    </Suspense>
  );
}