'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Globe, ExternalLink } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectCard({ project, imageUrl }: { project: any; imageUrl: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const rawDomain = project.domain || '';
  const externalUrl = rawDomain.startsWith('http') ? rawDomain : `https://${rawDomain}`;

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group rounded-2xl bg-white dark:bg-[#111827] border transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer p-6 sm:p-8 md:p-12 shadow-xl shadow-black/2 dark:shadow-black/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        isExpanded 
          ? 'border-[#0F62FE]/60 ring-2 ring-[#0F62FE]/25 md:p-14 bg-white/90 dark:bg-[#111827]/95' 
          : 'border-[#222222]/10 dark:border-white/10 hover:border-[#0F62FE]/40'
      }`}
    >
      {/* Bal oldal: Tartalom */}
      <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
        <span className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-3">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mb-4">
          {project.title}
        </h3>
        <p className="text-base text-[#222222]/70 dark:text-white/70 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Esettanulmány mezők - Szép lanyhán, komótosan nyíló animáció */}
        {(project.challenge || project.solution || project.outcome) && (
          <div className="w-full mb-6 overflow-hidden">
            <div 
              className={`w-full space-y-4 pt-6 border-t border-[#222222]/10 dark:border-white/10 text-sm transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                isExpanded 
                  ? 'opacity-100 translate-y-0 max-h-200' 
                  : 'opacity-0 -translate-y-3 max-h-0 pointer-events-none pt-0 border-t-0'
              }`}
            >
              {project.challenge && (
                <div>
                  <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-1">Challenge / Ziel</span>
                  <p className="text-[#222222]/80 dark:text-white/80">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-1">Solution / Lösung</span>
                  <p className="text-[#222222]/80 dark:text-white/80">{project.solution}</p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-1">Outcome / Ergebnis</span>
                  <p className="text-[#222222]/80 dark:text-white/80">{project.outcome}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Külső élő oldal link */}
        {project.domain && (
          <div className="mt-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white hover:text-[#0F62FE] transition-colors"
            >
              Live-Projekt ansehen
              <ExternalLink size={16} className="transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>

      {/* Jobb oldal: Reszponzív Mockup kép sima, lassú átmenettel */}
      <div className="lg:col-span-7 w-full rounded-xl bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 overflow-hidden shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8F5]/80 dark:bg-[#0A0F1D]/90 border-b border-[#222222]/5 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          {project.domain && (
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-white dark:bg-white/5 border border-[#222222]/5 dark:border-white/10 text-[10px] font-mono text-[#222222]/50 dark:text-white/50 truncate max-w-35 sm:max-w-xs">
              <Globe size={10} className="text-[#0F62FE] shrink-0" />
              <span className="truncate">{project.domain}</span>
            </div>
          )}
          <div className="w-10" />
        </div>

        <div className={`relative w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden bg-gray-100 dark:bg-gray-900 ${
          isExpanded ? 'h-65 sm:h-85 md:h-110' : 'h-55 sm:h-70 md:h-90'
        }`}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
            />
          )}
        </div>
      </div>

    </div>
  );
}