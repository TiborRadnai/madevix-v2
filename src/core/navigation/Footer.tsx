'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#FAF8F5] dark:bg-[#0A0F1D] text-[#111111] dark:text-white pt-24 pb-16 px-6 md:px-12 border-t border-[#222222]/5 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* 1. Felső rész: Márkanév, Tagline & Direkter Kontakt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-16 border-b border-[#222222]/10 dark:border-white/10">
          <div>
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase inline-block mb-4 transition-opacity hover:opacity-80"
            >
              madevix<span className="text-[#0F62FE]">.</span>
            </Link>
            <p className="text-sm text-[#222222]/70 dark:text-white/70 max-w-sm leading-relaxed">
              Klare digitale Auftritte für moderne Unternehmen.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-start">
            <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40 mb-2">
              Direkter Kontakt
            </span>
            <a
              href="mailto:info@madevix.com"
              className="text-base sm:text-lg font-medium hover:text-[#0F62FE] transition-colors"
            >
              info@madevix.com
            </a>
          </div>
        </div>

        {/* 2. Alsó rész: Tiszta, szellős elrendezés helyes térközökkel */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-xs text-[#222222]/60 dark:text-white/60">
          
          {/* Fő oldali linkek */}
          <div className="flex flex-row flex-nowrap items-center gap-6 sm:gap-8 uppercase tracking-[0.15em] font-medium text-[#111111] dark:text-white text-[11px] sm:text-xs overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
            <Link href="/development" className="hover:text-[#0F62FE] transition-colors shrink-0">
              Web Development
            </Link>
            <Link href="/projects" className="hover:text-[#0F62FE] transition-colors shrink-0">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-[#0F62FE] transition-colors shrink-0">
              Contact
            </Link>
          </div>

          {/* Jogi linkek és Dinamikus Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 w-full lg:w-auto justify-between">
            <div className="flex flex-row flex-wrap items-center gap-6 text-[11px] sm:text-xs">
              <Link href="/impressum" className="hover:text-[#0F62FE] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#0F62FE] transition-colors">
                Datenschutz
              </Link>
              <Link href="/cookies" className="hover:text-[#0F62FE] transition-colors">
                Cookies
              </Link>
            </div>
            
            <span className="font-mono text-[10px] sm:text-[11px] text-[#222222]/40 dark:text-white/40">
              © {currentYear} Madevix. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}