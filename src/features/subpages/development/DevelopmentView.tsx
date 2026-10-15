import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DevelopmentView() {
  return (
    <main className="min-h-screen pt-36 pb-28 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 overflow-hidden">
      
      {/* 1. HERO — Szélesebb, balra zárt editorial stílus */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            WEBENTWICKLUNG
          </h1>
          <p className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.05] mb-8 max-w-5xl">
            Individuell entwickelt.<br />
            <span className="text-[#222222]/40 dark:text-white/40">Ohne Baukästen.</span><br />
            Ohne unnötige Komplexität.
          </p>
          <p className="text-lg md:text-2xl text-[#222222]/70 dark:text-white/70 max-w-3xl leading-relaxed">
            Für Unternehmen, die mehr wollen als eine Standardlösung. Maßgeschneiderte Webanwendungen und Auftritte mit kompromissloser Performance.
          </p>
        </div>
      </section>

      {/* 2. WAS DU BEKOMMST — Szélesebb grid rácsban */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 dark:text-white/40">
              Leistungsanspruch
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mt-2">
              Was du bekommst.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0F62FE] uppercase block mb-3">01 / Design</span>
                <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-3">Individuelles Design</h3>
                <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                  Kein Template. Kein Baukasten. Jedes Element wird direkt für deine Marke konzipiert.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0F62FE] uppercase block mb-3">02 / Code</span>
                <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-3">Saubere Entwicklung</h3>
                <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                  Schnell, stabil und langfristig erweiterbar.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#0F62FE] uppercase block mb-3">03 / Partner</span>
                <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-3">Direkter Kontakt.</h3>
                <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                  Von der ersten Idee bis zum Launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNSER ANSATZ — max-w-6xl */}
      <section className="px-6 md:px-12 mb-36">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 dark:text-white/40">
              Prozess
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mt-2">
              Unser Ansatz.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/60 dark:bg-[#111827]/60 border border-[#222222]/10 dark:border-white/10">
              <span className="text-2xl font-mono font-bold text-[#0F62FE] block mb-3">01</span>
              <h4 className="font-bold text-[#111111] dark:text-white mb-2 text-lg">Strategie</h4>
              <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                Analyse deiner Ziele und der technischen Anforderungen.
              </p>
            </div>

            <div className="p-8 bg-white/60 dark:bg-[#111827]/60 border border-[#222222]/10 dark:border-white/10">
              <span className="text-2xl font-mono font-bold text-[#0F62FE] block mb-3">02</span>
              <h4 className="font-bold text-[#111111] dark:text-white mb-2 text-lg">Konzeption</h4>
              <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                Strukturierte Wireframes und visuelle Ausarbeitung.
              </p>
            </div>

            <div className="p-8 bg-white/60 dark:bg-[#111827]/60 border border-[#222222]/10 dark:border-white/10">
              <span className="text-2xl font-mono font-bold text-[#0F62FE] block mb-3">03</span>
              <h4 className="font-bold text-[#111111] dark:text-white mb-2 text-lg">Entwicklung</h4>
              <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                Clean Code Implementation und CMS-Anbindung.
              </p>
            </div>

            <div className="p-8 bg-white/60 dark:bg-[#111827]/60 border border-[#222222]/10 dark:border-white/10">
              <span className="text-2xl font-mono font-bold text-[#0F62FE] block mb-3">04</span>
              <h4 className="font-bold text-[#111111] dark:text-white mb-2 text-lg">Launch</h4>
              <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                Finaler Test, Optimierung und Live-Schaltung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KLARTEXT — Hatalmas, szélesebb sorok, monumentális méret (max-w-7xl) */}
      <section className="px-6 md:px-12 my-40 py-24 border-y border-[#222222]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] block mb-8">
            Klartext
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.05] text-[#111111] dark:text-white">
            Manchmal reicht eine einfache Website.<br />
            Manchmal braucht ein Projekt mehr.<br />
            <span className="text-[#0F62FE]">Wir bauen nur das, was wirklich notwendig ist.</span>
          </h2>
          <p className="text-lg md:text-2xl text-[#222222]/70 dark:text-white/70 max-w-4xl leading-relaxed">
            Keine aufgeblähten Features, keine unnötigen Software-Pakete. Fokus auf das Wesentliche, das messbare Resultate liefert.
          </p>
        </div>
      </section>

      {/* 5. CTA — Fókuszált lezárás */}
      <section className="px-6 md:px-12 text-center pt-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] dark:text-white mb-4 tracking-tight">
            Bereit für dein Projekt?
          </h2>
          <p className="text-base text-[#222222]/70 dark:text-white/70 mb-8 max-w-lg">
            Lass uns darüber sprechen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0F62FE] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-lg shadow-[#0F62FE]/15"
          >
            Projekt anfragen
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}