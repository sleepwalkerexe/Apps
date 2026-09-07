import React from 'react';
import { CLIENT_BRANDS } from '../data/portfolioData';

export const ClientsMarquee: React.FC = () => {
  // Duplicate list to ensure a truly seamless infinite loop
  const brands = [...CLIENT_BRANDS, ...CLIENT_BRANDS];

  return (
    <section id="clienti" className="py-16 md:py-20 border-b border-neutral-800/60 bg-[#090a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            01 / Network & Partner
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase font-display">
            Aziende & Brand che si affidano a NDS
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-400">
          Collaborazioni in Europa, Svizzera e USA
        </div>
      </div>

      {/* Infinite Animated Marquee Container */}
      <div className="relative w-full overflow-hidden border-y border-neutral-800/40 py-8 bg-[#0c0d0e]/60">
        {/* Soft edge masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#0c0d0e] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#0c0d0e] to-transparent" />

        <div className="animate-marquee flex items-center gap-12 md:gap-16">
          {brands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-4 px-6 py-3 border border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-300 group cursor-default"
            >
              {/* Monochromatic SVG Icon */}
              <div className="w-8 h-8 rounded bg-neutral-800/80 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white group-hover:text-black transition-colors">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={brand.svgMark} />
                </svg>
              </div>

              {/* Brand Typography & Meta */}
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wider text-neutral-200 group-hover:text-white font-display uppercase whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 whitespace-nowrap">
                  {brand.sector} · {brand.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
