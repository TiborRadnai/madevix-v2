'use client';

import Link from 'next/link';
import { ArrowRight, Compass, Code, CheckCircle2 } from 'lucide-react';

export default function WebDevelopmentPreview() {
  const steps = [
    {
      title: 'Planung',
      description: 'Wir definieren gemeinsam die Ziele und die Struktur deines Projekts.',
      icon: Compass,
    },
    {
      title: 'Entwicklung',
      description: 'Individuell entwickelt, ohne Baukästen und Templates.',
      icon: Code,
    },
    {
      title: 'Übergabe',
      description: 'Eine Website, die schnell, modern und einfach verwaltbar ist.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-28 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 border-t border-[#222222]/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Szekció fejléc: Webentwicklung */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Webentwicklung & Prozess
          </h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.15]">
            Strukturierte Vorgehensweise. <br />
            <span className="text-[#222222]/60 dark:text-white/60 font-normal">Echte Ergebnisse statt Marketing.</span>
          </p>
        </div>

        {/* 3 Egyszerű Blokkolt Elrendezés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="rounded-3xl bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-8 shadow-xl shadow-black/2 dark:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0F62FE]/10 flex items-center justify-center text-[#0F62FE] mb-6">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#0F62FE] uppercase block mb-2">
                    Schritt 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA a részletes aloldalra */}
        <div className="flex justify-start">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white hover:text-[#0F62FE] dark:hover:text-[#0F62FE] transition-colors group"
          >
            Webentwicklung entdecken
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}