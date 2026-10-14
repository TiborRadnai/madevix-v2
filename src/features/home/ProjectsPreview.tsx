'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';

export default function ProjectsPreview() {
  const projects = [
    {
      title: 'Madeirise',
      category: 'Travel Platform',
      description: 'Mehrsprachiges Portal für internationale Besucher auf Madeira.',
      domain: 'madeirise.com',
      image: '/projects/madeirise.webp',
      href: '/referenciak/madeirise',
    },
    {
      title: '82.SEOUL',
      category: 'K-Culture & Commerce',
      description: 'Immersive Plattform für globale Communitys und Kulturfans.',
      domain: '82seoul.de',
      image: '/projects/seoul.webp',
      href: '/referenciak/seoul',
    },
    {
      title: 'Fitnessworld',
      category: 'Fitness & Demo',
      description: 'Moderne Webpräsenz mit klarem Fokus auf Mitgliederführung.',
      domain: 'fitnessworld.com',
      image: '/projects/fitnessworld.webp',
      href: '/referenciak/fitnessworld',
    },
  ];

  return (
    <section className="py-28 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500 border-t border-[#222222]/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Szekció fejléc: Projekte statt Versprechen */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Ausgewählte Projekte
          </h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.15]">
            Projekte statt Versprechen. <br />
            <span className="text-[#222222]/60 dark:text-white/60 font-normal">Echte Erfahrungen, die Probleme lösen.</span>
          </p>
        </div>

        {/* 3 Nagy Blokkos Elrendezés */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-3xl bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-8 md:p-12 shadow-xl shadow-black/2 dark:shadow-black/40 transition-all duration-300 hover:border-[#0F62FE]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Bal oldal: Tartalom (5 oszlop) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-base text-[#222222]/70 dark:text-white/70 leading-relaxed mb-8">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white group-hover:text-[#0F62FE] transition-colors"
                >
                  Projekt ansehen
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Jobb oldal: Hangsúlyosabb Böngésző Mockup Kép (7 oszlop) */}
              <div className="lg:col-span-7 w-full rounded-2xl bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-[#0F62FE]/30">
                
                {/* Böngésző fejléc */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8F5]/80 dark:bg-[#0A0F1D]/90 border-b border-[#222222]/5 dark:border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-white dark:bg-white/5 border border-[#222222]/5 dark:border-white/10 text-[10px] font-mono text-[#222222]/50 dark:text-white/50">
                    <Globe size={10} className="text-[#0F62FE]" />
                    <span>{project.domain}</span>
                    </div>
                  <div className="w-10" />
                </div>

                {/* Kép konténer hover zoom effekttel */}
                <div className="relative w-full h-70 md:h-90 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}