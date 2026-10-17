import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { getProjects, urlFor } from '@/sanity/client';
import ProjectCard from './ProjectCard';

export default async function ProjectsView() {
  const allProjects = await getProjects();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = (allProjects || []).sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const featuredProject = projects.find((p: any) => p.featured) || projects[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridProjects = projects.filter((p: any) => p._id !== featuredProject?._id);

  const featuredImageUrl = featuredProject?.image ? urlFor(featuredProject.image).url() : '';

  return (
    <main className="min-h-screen pt-36 pb-28 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0A0F1D] transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Megnövelt távolsággal alatta */}
        <div className="mb-32 max-w-2xl">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            AUSGEWÄHLTE PROJEKTE
          </h1>
          <p className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.1] mb-6">
            Projekte statt Versprechen.
          </p>
          <p className="text-lg text-[#222222]/70 dark:text-white/70 leading-relaxed">
            Jedes Projekt löst ein anderes Problem. Einblicke in unsere Arbeiten und die Denkweise dahinter.
          </p>
        </div>

        {/* 1. Kiemelt Projekt (Featured) - Elegánsabb, arányosabb vertikális layout */}
        {featuredProject && (() => {
          const rawDomain = featuredProject.domain || '';
          const externalUrl = rawDomain.startsWith('http') ? rawDomain : `https://${rawDomain}`;

          return (
            <div className="mb-32">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 dark:text-white/40">
                  Fokus-Projekt
                </span>
              </div>

              {/* A kártya most egy optimális, széles de nem túlméretezett konténerben van */}
              <div className="group rounded-3xl bg-white dark:bg-[#111827] border border-[#222222]/10 dark:border-white/10 p-8 sm:p-12 md:p-16 shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300 hover:border-[#0F62FE]/40 flex flex-col gap-12 max-w-5xl mx-auto">
                
                {/* Felső rész: Tartalom */}
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0F62FE] mb-3">
                    {featuredProject.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-white mb-6 tracking-tight">
                    {featuredProject.title}
                  </h2>
                  <p className="text-lg text-[#222222]/70 dark:text-white/70 leading-relaxed mb-8">
                    {featuredProject.description}
                  </p>

                  {/* 3 szövegblokk: Balra, Középre/Elegánsan, Jobbra elrendezésben */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8 pt-8 border-t border-[#222222]/10 dark:border-white/10 text-sm">
                    {featuredProject.challenge && (
                      <div className="text-left">
                        <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-2">Challenge / Ziel</span>
                        <p className="text-[#222222]/80 dark:text-white/80 leading-relaxed">{featuredProject.challenge}</p>
                      </div>
                    )}
                    {featuredProject.solution && (
                      <div className="text-left md:text-center md:px-4 md:border-x border-[#222222]/10 dark:border-white/10">
                        <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-2">Solution / Lösung</span>
                        <p className="text-[#222222]/80 dark:text-white/80 leading-relaxed">{featuredProject.solution}</p>
                      </div>
                    )}
                    {featuredProject.outcome && (
                      <div className="text-left md:text-right">
                        <span className="font-mono uppercase text-xs text-[#0F62FE] block mb-2">Outcome / Ergebnis</span>
                        <p className="text-[#222222]/80 dark:text-white/80 leading-relaxed">{featuredProject.outcome}</p>
                      </div>
                    )}
                  </div>

                  {featuredProject.domain && (
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white hover:text-[#0F62FE] transition-colors"
                    >
                      Live-Projekt ansehen
                      <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                {/* Alsó rész: Arányos, mégis tágas Browser Mockup */}
                <div className="w-full rounded-2xl bg-[#FAF8F5] dark:bg-[#050811] border border-[#222222]/10 dark:border-white/10 overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-5 py-3.5 bg-[#FAF8F5]/80 dark:bg-[#0A0F1D]/90 border-b border-[#222222]/5 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <span className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    {featuredProject.domain && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-white dark:bg-white/5 border border-[#222222]/5 dark:border-white/10 text-xs font-mono text-[#222222]/50 dark:text-white/50">
                        <Globe size={12} className="text-[#0F62FE] shrink-0" />
                        <span>{featuredProject.domain}</span>
                      </div>
                    )}
                    <div className="w-12" />
                  </div>

                  <div className="relative w-full h-80 sm:h-105 md:h-135 lg:h-155 overflow-hidden bg-white dark:bg-[#050811]">
                    {featuredImageUrl && (
                      <Image
                        src={featuredImageUrl}
                        alt={featuredProject.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* 2. További Projektek Grid */}
        <div className="space-y-16">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 dark:text-white/40">
              Weitere Referenzen
            </span>
          </div>

          {gridProjects && gridProjects.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            gridProjects.map((project: any) => {
              const imageUrl = project.image ? urlFor(project.image).url() : '';
              return <ProjectCard key={project._id} project={project} imageUrl={imageUrl} />;
            })
          ) : null}
        </div>

        {/* CTA */}
        <div className="mt-32 pt-20 border-t border-[#222222]/10 dark:border-white/10 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
            Gefällt dir dieser Ansatz?
          </h2>
          <p className="text-base text-[#222222]/70 dark:text-white/70 mb-8 max-w-xl">
            Lass uns über dein Projekt sprechen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#0F62FE] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-lg shadow-[#0F62FE]/15"
          >
            Projekt anfragen
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </main>
  );
}