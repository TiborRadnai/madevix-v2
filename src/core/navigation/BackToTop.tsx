'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Figyeljük a görgetést
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-[#111827] text-[#111111] dark:text-white border border-[#222222]/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 transition-all duration-300 hover:border-[#0F62FE] hover:text-[#0F62FE] dark:hover:text-[#0F62FE] hover:scale-105 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}