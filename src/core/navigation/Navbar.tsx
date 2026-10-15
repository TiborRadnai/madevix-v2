'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Téma betöltése induláskor
  useEffect(() => {
    const savedTheme = localStorage.getItem('madevix-theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Téma váltás kezelése
  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('madevix-theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('madevix-theme', 'dark');
    }
  };

  // Scroll eseményfigyelő useRef-fel (elkerüli a felesleges re-render loopokat)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/development', label: 'Leistungen' },
    { href: '/projects', label: 'Projekte' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 bg-[#FAF8F5]/80 dark:bg-[#0A0F1D]/85 backdrop-blur-md border-b border-[#222222]/5 dark:border-white/10 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-12 py-5">
          {/* Márkanév */}
          <Link
            href="/"
            className="text-base font-semibold tracking-[0.25em] text-[#111111] dark:text-white uppercase transition-opacity hover:opacity-80"
          >
            madevix<span className="text-[#0F62FE]">.</span>
          </Link>

          {/* Asztali menüpontok és Téma váltó */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex items-center gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? 'text-[#111111] dark:text-white font-medium'
                        : 'text-[#222222]/70 dark:text-white/70 hover:text-[#111111] dark:hover:text-white'
                    } group`}
                  >
                    {link.label}
                    {/* Középről kétfelé szétnyíló aláhúzás */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-[#0F62FE] transition-all duration-500 ease-out -translate-x-1/2 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Téma váltó gomb */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#222222]/80 dark:text-white/80 hover:text-[#0F62FE] dark:hover:text-[#0F62FE] transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobil jobb oldali elemek (váltó + hamburger) */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#222222]/80 dark:text-white/80 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#111111] dark:bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#111111] dark:bg-white transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#111111] dark:bg-white transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil teljes képernyős / lenyíló menü */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] dark:bg-[#0A0F1D] flex flex-col justify-center items-center md:hidden pt-20">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? 'text-[#0F62FE]'
                      : 'text-[#111111]/90 dark:text-white/90 hover:text-[#0F62FE]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}