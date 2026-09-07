import React, { useState } from 'react';
import { ArrowUpRight, Play, Sparkles, Layers, Cpu, CheckCircle } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectShowcaseProps {
  onOpenDemo: (projectId: string) => void;
  onOpenContactForProject: (projectName: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'Tutti',
  'E-commerce',
  'Web Platform',
  'Luxury & Architecture',
  'Fintech',
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onOpenDemo,
  onOpenContactForProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Tutti');

  const filteredProjects =
    activeCategory === 'Tutti'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="progetti" className="py-24 md:py-32 border-b border-neutral-800/60 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              02 / Lavori Selezionati
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display leading-[0.95]">
              Progetti Recenti &<br />
              <span className="text-neutral-500">Lavori Finiti.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-md">
            <p className="text-sm text-neutral-400 font-normal leading-relaxed">
              Ogni progetto sviluppato da NDS include una demo interattiva liberamente testabile.
              Puoi ispezionare l’interfaccia completata sia in formato desktop che mobile prima di contattarci.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-mono transition-all duration-200 uppercase tracking-wider ${
                    activeCategory === cat
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects List Grid */}
        <div className="space-y-24 md:space-y-32">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
              id={`project-${project.id}`}
            >
              {/* Media Thumbnail Container with Interactive Overlay */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-[16/10] bg-neutral-900 border border-neutral-800/80 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-white border border-neutral-700/80">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-white text-black px-2.5 py-1 text-[11px] font-mono font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Center Floating "Vedi Demo" Action on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <button
                      onClick={() => onOpenDemo(project.id)}
                      className="flex items-center gap-3 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest font-display shadow-2xl hover:bg-neutral-200 transition-transform hover:scale-105"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Avvia Demo Interattiva</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content Meta */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                    <span>{project.client}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display uppercase tracking-tight text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Key Real Metrics */}
                <div className="grid grid-cols-3 gap-3 border-y border-neutral-800/80 py-4 font-mono">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-lg font-bold text-white tracking-tight font-display">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-tight mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono text-neutral-400 bg-neutral-900/60 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenDemo(project.id)}
                    id={`btn-open-demo-${project.id}`}
                    className="flex items-center gap-2.5 bg-white text-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-display hover:bg-neutral-200 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Visita Demo del Lavoro Finito</span>
                  </button>

                  <button
                    onClick={() => onOpenContactForProject(project.title)}
                    className="flex items-center gap-2 border border-neutral-700 hover:border-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider font-display text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>Richiedi un Progetto Simile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
