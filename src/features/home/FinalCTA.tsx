'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-36 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 border-t border-[#222222]/5 dark:border-white/10 text-center relative overflow-hidden">
      
      {/* Háttér finom, elegáns fókuszfény */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#0F62FE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Kis badge */}
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#111111]/5 dark:bg-white/10 border border-[#222222]/10 dark:border-white/10 mb-8 backdrop-blur-sm">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#111111]/70 dark:text-white/70">
            Nächster Schritt
          </span>
        </div>

        {/* Főcím */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-[1.1]">
          Bereit für dein <br />
          <span className="text-[#0F62FE]">nächstes Projekt?</span>
        </h2>

        {/* Alcím / Leírás */}
        <p className="text-base sm:text-lg text-[#222222]/70 dark:text-white/70 max-w-xl mb-12 font-normal leading-relaxed">
          Ob neue Website, Redesign oder eine individuelle Lösung – gemeinsam finden wir den richtigen Weg. Lass uns darüber sprechen.
        </p>

        {/* CTA Gomb */}
        <div>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center gap-3 rounded-full bg-[#0F62FE] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-xl shadow-[#0F62FE]/20 group"
          >
            Projekt anfragen
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}