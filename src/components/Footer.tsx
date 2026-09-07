import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Milan (CET/CEST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('it-IT', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-neutral-800/80 text-neutral-400 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Big Typography Callout */}
        <div className="pb-16 mb-16 border-b border-neutral-800 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tighter text-white uppercase leading-none">
              NDS Studio
            </div>
            <div className="text-sm font-mono text-neutral-400 mt-2">
              Sviluppo web essenziale, architettura software & interazione digitale.
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Milano, Italia: <strong className="text-white">{currentTime || '14:15:00'} CET</strong></span>
            </div>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors border border-neutral-800 p-2 hover:border-neutral-500"
              title="Torna in cima"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] uppercase">Top</span>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16 text-xs font-mono">
          <div>
            <div className="text-white uppercase tracking-wider mb-4 font-display font-semibold">
              Esplora
            </div>
            <ul className="space-y-2">
              <li><a href="#progetti" className="hover:text-white transition-colors">Progetti Recenti</a></li>
              <li><a href="#clienti" className="hover:text-white transition-colors">Clienti & Brand</a></li>
              <li><a href="#recensioni" className="hover:text-white transition-colors">Punteggi Recensioni</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">Standard & Metodo</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white uppercase tracking-wider mb-4 font-display font-semibold">
              Demo Interattive
            </div>
            <ul className="space-y-2">
              <li><span className="text-neutral-500">Kromalux (E-Commerce)</span></li>
              <li><span className="text-neutral-500">Veloce OS (SaaS Cloud)</span></li>
              <li><span className="text-neutral-500">Solstice (Haute Horlogerie)</span></li>
              <li><span className="text-neutral-500">Strata Capital (Fintech)</span></li>
            </ul>
          </div>

          <div>
            <div className="text-white uppercase tracking-wider mb-4 font-display font-semibold">
              Network
            </div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a href="https://awwwards.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>Awwwards Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>Clutch Reviews</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white uppercase tracking-wider mb-4 font-display font-semibold">
              Informativa
            </div>
            <div className="text-neutral-500 text-[11px] leading-relaxed">
              NDS Digital Agency S.r.l.<br />
              P.IVA / CF: IT09847120963<br />
              Tutti i diritti riservati © {new Date().getFullYear()}.<br />
              Codice sorgente artigianale.
            </div>
          </div>
        </div>

        {/* Bottom Micro Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400 pt-8 border-t border-neutral-900">
          <div>
            DESIGN MONOCROMATICO AD ALTE PRESTAZIONI · ZERO TRACCIAMENTO PUBBLICITARIO
          </div>
          <div>
            PRECISIONE SVIZZERA · INGEGNERIA ITALIANA
          </div>
        </div>
      </div>
    </footer>
  );
};
