'use client';

export default function WhyMadevix() {
  const principles = [
    {
      number: '01',
      title: 'Qualität',
      description: 'Sauber geplant. Sauber entwickelt. Ohne schnelle Kompromisse oder billige Templates.',
    },
    {
      number: '02',
      title: 'Struktur',
      description: 'Klare Prozesse und nachvollziehbare Entscheidungen, die das Geschäft voranbringen.',
    },
    {
      number: '03',
      title: 'Direktkontakt',
      description: 'Keine Vermittler oder Projektmanager. Du arbeitest direkt mit demjenigen, der den Code schreibt.',
    },
    {
      number: '04',
      title: 'Weitblick',
      description: 'Architekturen, die auch in Jahren stabil laufen und mit dem Unternehmen mitwachsen.',
    },
  ];

  return (
    <section className="py-36 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 border-t border-[#222222]/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Aszimmetrikus fő elrendezés */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Bal oszlop: Óriási, statement jellegű felütés (Stúdió Haltung) - Mobilon normális, nagyméretű képernyőn sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#111111]/5 dark:bg-white/10 border border-[#222222]/10 dark:border-white/10 mb-8 backdrop-blur-sm">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#111111]/70 dark:text-white/70">
                Warum Madevix?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.1] mb-6">
              Weniger Agentur. <br />
              <span className="text-[#0F62FE]">Mehr Partnerschaft.</span>
            </h2>

            <div className="text-base text-[#222222]/70 dark:text-white/70 leading-relaxed font-medium space-y-1">
              <p>Ohne Vermittler.</p>
              <p>Ohne Baukästen.</p>
              <p>Ohne unnötige Komplexität.</p>
            </div>
          </div>

          {/* Jobb oszlop: A 4 pont letisztult, keret nélküli áramlása */}
          <div className="lg:col-span-7 flex flex-col gap-12 pt-2">
            {principles.map((item, index) => (
              <div 
                key={index} 
                className="group pb-10 border-b border-[#222222]/10 dark:border-white/10 last:border-none flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8"
              >
                <span className="text-xs font-mono text-[#0F62FE] tracking-widest pt-1">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-2 group-hover:text-[#0F62FE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#222222]/70 dark:text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}