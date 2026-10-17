'use client';

import { useRouter } from 'next/navigation';

export default function CookiePolicy() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      window.close();
    }
  };

  const resetConsent = () => {
    localStorage.removeItem('madevix_cookie_consent');
    window.location.reload(); // Újratölti az oldalt, mire a banner újra felugrik
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

        <section className="mb-16">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Rechtliches
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Cookie-Richtlinie
          </h2>
        </section>

        <div className="space-y-12 text-sm sm:text-base text-[#222222]/80 dark:text-white/80 leading-relaxed font-normal">
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              1. Verwendung von Cookies
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Diese Website verwendet technisch notwendige Cookies, um die grundlegende Funktionalität und Sicherheit der Website zu gewährleisten. Weitere Cookies (wie Analyse-Cookies) werden nur verwendet, sofern du ausdrücklich zugestimmt hast.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              2. Arten von Cookies
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#111111] dark:text-white mb-1">Notwendige Cookies</h4>
                <p className="text-[#222222]/70 dark:text-white/70">
                  Diese Cookies sind für den technischen Betrieb der Website zwingend erforderlich und können nicht deaktiviert werden.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#111111] dark:text-white mb-1">Analyse-Cookies (Google Analytics)</h4>
                <p className="text-[#222222]/70 dark:text-white/70">
                  Wir nutzen Google Analytics zur Auswertung der Websitenutzung, um unser Angebot kontinuierlich zu verbessern. Die Aktivierung erfolgt ausschließlich nach deiner ausdrücklichen Zustimmung.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              3. Cookie-Einstellungen & Widerruf
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70 mb-4">
              Du kannst deine einmal erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder anpassen.
            </p>
            <button
              onClick={resetConsent}
              className="px-6 py-3 text-xs font-mono uppercase tracking-wider border border-[#222222]/20 dark:border-white/20 text-[#111111] dark:text-white hover:border-[#0F62FE] hover:text-[#0F62FE] transition-colors"
            >
              Cookie-Einstellungen ändern
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              4. Kontakt
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Bei Fragen zum Einsatz von Cookies erreichst du uns unter:{' '}
              <a href="mailto:info@madevix.com" className="text-[#0F62FE] hover:underline font-medium">
                info@madevix.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}