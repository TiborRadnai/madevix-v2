'use client';

import { useRouter } from 'next/navigation';

export default function ImpressumView() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      window.close();
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-28 bg-[#FAF8F5] dark:bg-[#0A0F1D] text-[#111111] dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Bezárás / Vissza gomb */}
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 hover:text-[#0F62FE] dark:hover:text-[#0F62FE] transition-colors mb-10 group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span>Schließen</span>
        </button>

        {/* Header */}
        <section className="mb-16">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Rechtliches
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Impressum
          </h2>
        </section>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base text-[#222222]/80 dark:text-white/80 leading-relaxed font-normal">
          
          {/* Angaben gemäß TMG */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40 mb-3">
              Angaben gemäß § 5 TMG
            </h3>
            <div className="space-y-1 font-medium text-[#111111] dark:text-white">
              <p>Madevix</p>
              <p>Inhaber: Tibor Radnai</p>
              <p>Einzelunternehmer</p>
            </div>
          </div>

          {/* Anschrift */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40 mb-3">
              Geschäftsanschrift
            </h3>
            <p>Am Schwedenkreuz 5</p>
            <p>87534 Oberstaufen</p>
            <p>Deutschland</p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40 mb-3">
              Kontakt
            </h3>
            <p>Telefon: +49 176 22214043</p>
            <p>
              E-Mail:{' '}
              <a href="mailto:info@madevix.com" className="text-[#0F62FE] hover:underline">
                info@madevix.com
              </a>
            </p>
          </div>

          {/* Steuer-ID */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40 mb-3">
              Wirtschafts-Identifikationsnummer
            </h3>
            <p className="font-mono">DE459609225</p>
          </div>

          <hr className="border-[#222222]/10 dark:border-white/10 my-10" />

          {/* Haftung für Inhalte */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              Haftung für Inhalte
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          {/* Haftung für Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              Haftung für Links
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}