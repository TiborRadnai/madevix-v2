'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-20 px-6 md:px-12 overflow-hidden bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Bal oldal: Szöveges tartalom (7 oszlop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Hero Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#111111]/5 dark:bg-white/10 border border-[#222222]/10 dark:border-white/10 mb-8 backdrop-blur-sm">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#111111]/70 dark:text-white/70">
              Unabhängiges digitales Studio
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-white mb-6 leading-[1.1]">
            Weniger Chaos. <br />
            <span className="text-[#0F62FE]">Mehr Wirkung.</span>
          </h1>

          {/* Hero Description */}
          <p className="text-base sm:text-lg text-[#222222]/70 dark:text-white/70 mb-10 font-normal leading-relaxed max-w-xl">
            Individuelle Websites für Unternehmen, die professionell auftreten und online überzeugen möchten.
          </p>

          {/* CTA Gombok */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/kapcsolat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#0F62FE] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-lg shadow-[#0F62FE]/15"
            >
              Projekt anfragen
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/referenciak"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[#111111]/15 dark:border-white/20 px-8 py-4 text-sm font-medium text-[#111111] dark:text-white transition-all hover:bg-[#111111]/5 dark:hover:bg-white/10 backdrop-blur-sm"
            >
              Projekte ansehen
            </Link>
          </div>

        </div>

        {/* Jobb oldal: Vizuális fókuszpont / Saját munkák prémium preview (5 oszlop) */}
        <div className="lg:col-span-5 w-full flex flex-col gap-4">
          
          <div className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 dark:text-white/40 mb-1">
            Ausgewählte Referenzen / Preview
          </div>

          {/* 82.SEOUL Preview Kártya */}
          <div className="group relative rounded-2xl bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-6 shadow-xl shadow-black/3 transition-all duration-300 hover:-translate-y-0.75 hover:shadow-2xl hover:border-[#0F62FE]/40 overflow-hidden">
            
            {/* Nagyon halvány, háttérbe ágyazott thumbnail ízelítő (10-15% opacity) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-[#0F62FE]/10 dark:from-[#0F62FE]/15 to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="text-xs font-mono tracking-widest text-[#0F62FE]">82.SEOUL PORTAL</span>
              <ExternalLink size={16} className="text-[#222222]/40 dark:text-white/40 group-hover:text-[#0F62FE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <h3 className="relative z-10 text-lg font-semibold text-[#111111] dark:text-white mb-1">K-Culture & Media</h3>
            <p className="relative z-10 text-xs text-[#222222]/60 dark:text-white/60">
              Immersive, visuell getriebene Plattform für internationale Communitys.
            </p>
          </div>

          {/* Madeirise Preview Kártya */}
          <div className="group relative rounded-2xl bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-6 shadow-xl shadow-black/3 transition-all duration-300 hover:-translate-y-0.75 hover:shadow-2xl hover:border-[#0F62FE]/40 overflow-hidden">
            
            {/* Nagyon halvány, háttérbe ágyazott thumbnail ízelítő (10-15% opacity) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-l from-[#0F62FE]/10 dark:from-[#0F62FE]/15 to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="text-xs font-mono tracking-widest text-[#0F62FE]">MADEIRISE STUDIO</span>
              <ExternalLink size={16} className="text-[#222222]/40 dark:text-white/40 group-hover:text-[#0F62FE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <h3 className="relative z-10 text-lg font-semibold text-[#111111] dark:text-white mb-1">Mehrsprachige Reiseplattform</h3>
            <p className="relative z-10 text-xs text-[#222222]/60 dark:text-white/60">
              Umfangreiches Destinationsportal für internationale Besucher.
            </p>
          </div>

        </div>

      </div>

      {/* Alsó 3 elemű értékblokk */}
      <div className="max-w-6xl mx-auto w-full relative z-10 mt-28 pt-12 border-t border-[#222222]/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-2">INDIVIDUELLE ENTWICKLUNG</h4>
          <p className="text-sm font-semibold text-[#111111] dark:text-white mb-1">Kein Baukasten.</p>
          <p className="text-xs text-[#222222]/60 dark:text-white/60">Kein Template.</p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-2">DIREKTE ZUSAMMENARBEIT</h4>
          <p className="text-sm font-semibold text-[#111111] dark:text-white mb-1">Vom ersten Gespräch</p>
          <p className="text-xs text-[#222222]/60 dark:text-white/60">bis zur Übergabe.</p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-2">LANGFRISTIG ERWEITERBAR</h4>
          <p className="text-sm font-semibold text-[#111111] dark:text-white mb-1">Saubere Architektur</p>
          <p className="text-xs text-[#222222]/60 dark:text-white/60">ohne technische Schulden.</p>
        </div>

      </div>

    </section>
  );
}