import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { REVIEWS, AGENCY_STATS } from '../data/portfolioData';
import { Review } from '../types';

interface ReviewsSectionProps {
  onOpenContact: () => void;
  onOpenProjectDemo: (projectId?: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenContact,
  onOpenProjectDemo,
}) => {
  const [platformFilter, setPlatformFilter] = useState<string>('all');

  const filteredReviews =
    platformFilter === 'all'
      ? REVIEWS
      : REVIEWS.filter((r) => r.platform.toLowerCase() === platformFilter.toLowerCase());

  return (
    <section id="recensioni" className="py-24 md:py-32 border-b border-neutral-800/60 bg-[#090a0b]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              03 / Reputazione & Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display leading-[0.95]">
              Punteggi & Recensioni<br />
              <span className="text-neutral-500">dei Nostri Clienti.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm text-neutral-400 font-normal leading-relaxed">
              La qualità di un’agenzia web si misura dall’impatto commerciale e dalla soddisfazione di chi
              investe con noi. Tutti i punteggi provengono da audit e piattaforme indipendenti verificate.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Recensioni con commessa verificata</span>
            </div>
          </div>
        </div>

        {/* Aggregate Ratings Grid Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Main Average Score */}
          <div className="border border-white/20 bg-neutral-900/60 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Punteggio Globale
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold font-display text-white tracking-tighter">
                  {AGENCY_STATS.averageRating}
                </span>
                <span className="text-sm font-mono text-neutral-400">/ 5.0</span>
              </div>
              <div className="flex gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-4 pt-3 border-t border-neutral-800">
              Media ponderata da {AGENCY_STATS.totalReviews} recensioni
            </div>
          </div>

          {/* Clutch Score */}
          <div className="border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Clutch.co</span>
                <span className="text-white font-bold">Top Agency</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-display text-white tracking-tighter">
                  {AGENCY_STATS.clutchScore}
                </span>
                <span className="text-xs font-mono text-neutral-400">/ 5.0</span>
              </div>
              <div className="text-xs text-neutral-300 font-sans mt-2">
                Top Web Development & UX Firm 2024–2025
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-4 pt-3 border-t border-neutral-800">
              Interviste telefoniche verificate da analisti
            </div>
          </div>

          {/* Google Reviews */}
          <div className="border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Google Reviews</span>
                <span className="text-emerald-400 text-[10px] font-mono">Verificato</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-display text-white tracking-tighter">
                  {AGENCY_STATS.googleScore}
                </span>
                <span className="text-xs font-mono text-neutral-400">/ 5.0</span>
              </div>
              <div className="text-xs text-neutral-300 font-sans mt-2">
                48 Valutazioni a 5 Stelle di imprenditori e CTO
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-4 pt-3 border-t border-neutral-800">
              Nessuna recensione sotto 4.8 stelle
            </div>
          </div>

          {/* Awwwards & Industry Recognition */}
          <div className="border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Design Riconoscimenti</span>
                <span className="text-white font-bold">Awwwards</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-display text-white tracking-tighter">
                  {AGENCY_STATS.awwwardsHonors}×
                </span>
                <span className="text-xs font-mono text-neutral-400">Honors</span>
              </div>
              <div className="text-xs text-neutral-300 font-sans mt-2">
                Site of the Day, Developer Award & Mobile Excellence
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-4 pt-3 border-t border-neutral-800">
              Giudizio da giuria internazionale di design
            </div>
          </div>
        </div>

        {/* Platform Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'Tutte le Recensioni' },
              { key: 'clutch', label: 'Clutch (5.0)' },
              { key: 'google', label: 'Google (4.9)' },
              { key: 'awwwards', label: 'Awwwards' },
              { key: 'trustpilot', label: 'Trustpilot' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setPlatformFilter(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  platformFilter === tab.key
                    ? 'bg-white text-black font-bold'
                    : 'bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-neutral-400">
            Mostrando {filteredReviews.length} recensioni dettagliate
          </div>
        </div>

        {/* Individual Client Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="border border-neutral-800/80 bg-neutral-900/30 p-6 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 group"
            >
              <div>
                {/* Header: Score & Platform Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-display font-bold text-lg">{review.score.toFixed(1)}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-neutral-800">
                    <span>{review.platform}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-neutral-300 text-sm font-normal leading-relaxed mb-6 font-sans">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Project Connection Footer */}
              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover grayscale contrast-125 border border-neutral-700"
                  />
                  <div>
                    <div className="font-display font-bold text-xs text-white uppercase tracking-tight">
                      {review.author}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      {review.role} · <span className="text-neutral-300">{review.company}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Demo Trigger for the referenced project */}
                {review.projectRef && (
                  <button
                    onClick={() => onOpenProjectDemo(review.projectRef)}
                    title="Guarda la demo del progetto di questo cliente"
                    className="p-2 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-colors rounded-xs text-neutral-400"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
