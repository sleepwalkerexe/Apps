import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Star, ShieldCheck } from 'lucide-react';
import { AGENCY_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenDemo: (projectId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-neutral-800/60 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2023_1px,transparent_1px),linear-gradient(to_bottom,#1f2023_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Subheader Tagline */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-neutral-800 bg-neutral-900/80 rounded-full mb-8 text-xs font-mono text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span>NDS DIGITAL STUDIO — ARCHITETTURA WEB & INTERACTION DESIGN</span>
        </div>

        {/* Hero Title: Modern, Impactful, Editorial Minimalist */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase font-display leading-[0.95] max-w-5xl mb-8">
          Progettiamo <br />
          <span className="text-neutral-500 hover:text-neutral-300 transition-colors duration-300">
            lavori finiti
          </span>{' '}
          che definiscono il futuro.
        </h1>

        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <p className="lg:col-span-7 text-lg md:text-xl text-neutral-400 font-normal leading-relaxed">
            NDS è un’agenzia web contemporanea fondata sull’essenzialità visiva e la perfezione
            ingegneristica. Realizziamo piattaforme headless, e-commerce d'autore ed esperienze digitali
            monocromatiche ad altissima velocità. Nessun elemento superfluo: solo codice impeccabile e risultati misurabili.
          </p>

          {/* Quick Metrics Badge */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 border border-neutral-800 p-5 bg-neutral-900/40">
            <div>
              <div className="flex items-center gap-1 text-white font-display font-bold text-2xl">
                <span>{AGENCY_STATS.averageRating}</span>
                <span className="text-xs text-neutral-400 font-mono">/ 5.0</span>
                <div className="flex text-amber-400 ml-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <div className="text-xs text-neutral-400 font-mono mt-0.5">
                Valutazione verificata ({AGENCY_STATS.totalReviews} recensioni)
              </div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">
                {AGENCY_STATS.projectsDelivered}+
              </div>
              <div className="text-xs text-neutral-400 font-mono mt-0.5">
                Progetti & piattaforme live
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#progetti"
            id="hero-explore-projects-cta"
            className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3.5 text-sm font-display uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200"
          >
            <span>Esplora i Progetti Recenti</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenDemo('kromalux')}
            id="hero-open-demo-cta"
            className="flex items-center gap-3 border border-neutral-700 bg-neutral-900/60 hover:border-white text-white font-medium px-6 py-3.5 text-sm font-display uppercase tracking-wider transition-all duration-200 group"
          >
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </div>
            <span>Visita Demo Interattiva</span>
          </button>

          <button
            onClick={onOpenContact}
            id="hero-contact-cta"
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium px-4 py-3.5 transition-colors underline-offset-4 hover:underline"
          >
            <span>Richiedi preventivo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
