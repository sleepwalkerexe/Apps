import React from 'react';
import { Layout, Terminal, Zap, Check } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Design dei Sistemi & UX Radicale',
      desc: 'Progettiamo interfacce utente senza orpelli decorativi: tipografia rigorosa, proporzioni matematiche e layout reattivi che guidano l’utente alla conversione senza frizioni.',
      items: ['Design System su misura', 'Architettura dell’informazione', 'Micro-interazioni 60fps', 'Direzione artistica minimalista'],
    },
    {
      num: '02',
      title: 'Ingegneria Frontend Headless',
      desc: 'Sviluppiamo con React, Vite, Next.js e TypeScript. Nessun CMS monolitico e lento: architetture API-first per garantire scalabilità e sicurezza enterprise.',
      items: ['Stack Headless & JAMStack', 'E-Commerce Shopify Storefront', 'Piattaforme SaaS complesse', 'Standard di codice e test rigorosi'],
    },
    {
      num: '03',
      title: 'Prestazioni Estreme & Lighthouse 100',
      desc: 'Ogni millisecondo conta. Ottimizziamo il Largest Contentful Paint (LCP) e il Cumulative Layout Shift (CLS) per posizionare il tuo brand al vertice su Google.',
      items: ['Core Web Vitals eccellenti', 'CDN Edge Globale', 'SEO semantico & Accessibilità WCAG AA', 'Sub-second page transitions'],
    },
  ];

  return (
    <section id="metodo" className="py-24 md:py-32 border-b border-neutral-800/60 bg-[#0c0d0e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              04 / Disciplina & Standard
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display leading-[0.95]">
              Come Lavoriamo.<br />
              <span className="text-neutral-500">Niente Fuffa. Solo Risultati.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Rifiutiamo i template preconfezionati e gli effetti speciali fini a se stessi.
              Il nostro valore risiede nella convergenza esatta tra estetica d’avanguardia e codice performante.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="border border-neutral-800 bg-neutral-900/20 p-8 flex flex-col justify-between hover:border-neutral-600 transition-colors"
            >
              <div>
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
                  {pillar.num} / Standard
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  {pillar.desc}
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-6 space-y-2.5">
                {pillar.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
