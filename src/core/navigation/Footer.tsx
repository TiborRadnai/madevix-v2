'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = '2026';

  return (
    <footer className="bg-[#FAF8F5] dark:bg-[#0A0F1D] text-[#111111] dark:text-white pt-28 pb-16 px-6 md:px-12 border-t border-[#222222]/5 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-70">
        
        {/* Felső rész: Kicsit nagyobb, hangsúlyosabb márkanév, Tagline, Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20 border-b border-[#222222]/10 dark:border-white/10">
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

        {/* Alsó rész: Gyorslinkek, Jogi elemek, Copyright */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs text-[#222222]/60 dark:text-white/60">
          
          {/* Fő oldali linkek */}
          <div className="flex flex-wrap items-center gap-8 uppercase tracking-[0.15em] font-medium text-[#111111] dark:text-white">
            <Link href="/leistungen" className="hover:text-[#0F62FE] transition-colors">
              Web Development
            </Link>
            <Link href="/referenciak" className="hover:text-[#0F62FE] transition-colors">
              Projects
            </Link>
            <Link href="/kapcsolat" className="hover:text-[#0F62FE] transition-colors">
              Contact
            </Link>
          </div>

          {/* Jogi linkek és Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex items-center gap-6">
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
            <span className="font-mono text-[11px] text-[#222222]/40 dark:text-white/40">
              © {currentYear} Madevix. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}