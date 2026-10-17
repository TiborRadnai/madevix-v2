'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht.');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Etwas ist schiefgelaufen. Bitte versuche es später noch einmal oder schreib direkt an info@madevix.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-36 pb-28 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Contact Hero */}
        <section className="mb-20 max-w-3xl">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Kontakt
          </h1>
          <p className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.08] mb-6">
            Lass uns über dein Projekt sprechen.
          </p>
          <p className="text-lg md:text-xl text-[#222222]/70 dark:text-white/70 leading-relaxed">
            Ob neue Website, Redesign oder individuelle Webanwendung – der erste Schritt ist immer ein Gespräch.
          </p>
        </section>

        {/* Asymmetrisches Grid: Űrlap + Direkter Kontakt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Bal oldal: Minimalista űrlap vagy sikerüzenet */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-8 sm:p-12">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 size={48} className="text-[#0F62FE] mx-auto" />
                <h3 className="text-2xl font-bold text-[#111111] dark:text-white">
                  Nachricht erhalten.
                </h3>
                <p className="text-sm text-[#222222]/70 dark:text-white/70 max-w-md mx-auto leading-relaxed">
                  Vielen Dank für deine Nachricht. Wir melden uns in der Regel innerhalb von 24 Stunden bei dir.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="inline-block mt-4 text-xs font-mono uppercase tracking-widest text-[#0F62FE] hover:underline"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 text-[#111111] dark:text-white placeholder-[#222222]/30 dark:placeholder-white/30 text-sm focus:outline-none focus:border-[#0F62FE] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 text-[#111111] dark:text-white placeholder-[#222222]/30 dark:placeholder-white/30 text-sm focus:outline-none focus:border-[#0F62FE] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzähle kurz von deinem Projekt..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 text-[#111111] dark:text-white placeholder-[#222222]/30 dark:placeholder-white/30 text-sm focus:outline-none focus:border-[#0F62FE] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-mono">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 w-full bg-[#0F62FE] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-lg shadow-[#0F62FE]/15 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </div>

{/* Jobb oldal: Direkter Kontakt */}
          <div className="lg:col-span-5 space-y-10 lg:pt-2">
            <div className="p-8 bg-white/60 dark:bg-[#111827]/60 border border-[#222222]/10 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] block mb-3">
                Direkter Kontakt
              </span>
              
              <a
                href="mailto:info@madevix.com"
                className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-white hover:text-[#0F62FE] transition-colors inline-block tracking-tight mb-6 break-all"
              >
                info@madevix.com
              </a>

              <div className="flex items-center gap-3 text-sm pt-6 border-t border-[#222222]/10 dark:border-white/10">
                <Clock size={16} className="text-[#0F62FE] shrink-0" />
                <span className="font-semibold text-[#111111] dark:text-white">
                  Antwort in der Regel innerhalb von 24 Stunden.
                </span>
              </div>
            </div>

            <div className="p-8 border border-dashed border-[#222222]/20 dark:border-white/20">
              <h3 className="text-sm font-bold text-[#111111] dark:text-white uppercase tracking-wider mb-2">
                Kein CRM. Kein Bullshit.
              </h3>
              <p className="text-sm text-[#222222]/70 dark:text-white/70 leading-relaxed">
                Kein endloser Fragebogen. Schreib uns kurz, worum es geht. Den Rest besprechen wir persönlich.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}