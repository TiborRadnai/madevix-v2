'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Ellenőrizzük, hogy döntött-e már a felhasználó
    const consent = localStorage.getItem('madevix_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('madevix_cookie_consent', JSON.stringify({ necessary: true, analytics: true }));
    setIsVisible(false);
    // Itt indítható el pl. a Google Analytics, ha be van kötve
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('madevix_cookie_consent', JSON.stringify({ necessary: true, analytics: false }));
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem('madevix_cookie_consent', JSON.stringify({ necessary: true, analytics: analyticsConsent }));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#FAF8F5]/95 dark:bg-[#0A0F1D]/95 backdrop-blur-md border-t border-[#222222]/10 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Szöveges rész */}
        <div className="space-y-1 max-w-3xl">
          <h3 className="text-xs font-mono uppercase tracking-[0.20em] text-[#0F62FE]">
            Cookie-Hinweis
          </h3>
          <p className="text-sm text-[#222222]/80 dark:text-white/80 leading-relaxed">
            Wir nutzen Cookies, um den technischen Betrieb der Website sicherzustellen und (mit deiner Einwilligung) anonymisierte Analysen zur Verbesserung durchzuführen.{' '}
            <Link href="/cookies" className="underline hover:text-[#0F62FE] transition-colors">
              Mehr erfahren
            </Link>
          </p>
        </div>

        {/* Gombok / Beállítások */}
        {!showSettings ? (
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setShowSettings(true)}
              className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#222222]/20 dark:border-white/20 text-[#111111] dark:text-white hover:border-[#0F62FE] transition-colors w-full sm:w-auto"
            >
              Einstellungen
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#222222]/20 dark:border-white/20 text-[#111111] dark:text-white hover:border-[#0F62FE] transition-colors w-full sm:w-auto"
            >
              Nur Notwendige
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider bg-[#0F62FE] text-white hover:bg-[#0F62FE]/90 transition-colors w-full sm:w-auto shadow-sm"
            >
              Alle akzeptieren
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
            <label className="flex items-center gap-3 text-xs font-mono text-[#111111] dark:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="w-4 h-4 accent-[#0F62FE]"
              />
              Analyse-Cookies (Google Analytics) zulassen
            </label>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleSaveCustom}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider bg-[#0F62FE] text-white hover:bg-[#0F62FE]/90 transition-colors"
              >
                Speichern
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 hover:text-[#111111] dark:hover:text-white"
              >
                Zurück
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}