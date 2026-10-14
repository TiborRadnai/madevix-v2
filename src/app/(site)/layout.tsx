import { Suspense } from 'react';
import Navbar from '@/core/navigation/Navbar';
import Footer from '@/core/navigation/Footer';
import BackToTop from '@/core/navigation/BackToTop'; 

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}