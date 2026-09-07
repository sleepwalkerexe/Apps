import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenProjectDemo: (projectId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenProjectDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Progetti', href: '#progetti' },
    { label: 'Demo Live', href: '#demo-section', onClick: () => onOpenProjectDemo('kromalux') },
    { label: 'Clienti', href: '#clienti' },
    { label: 'Recensioni', href: '#recensioni' },
    { label: 'Metodo', href: '#metodo' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-bold font-display text-lg tracking-tighter transition-transform duration-300 group-hover:scale-105">
            NDS
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-neutral-200 uppercase">
              Studio Digitale
            </span>
            <span className="text-[10px] text-neutral-500 font-mono tracking-tight">
              Design & High-Perf Web
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="hover:text-white transition-colors duration-200 relative py-1"
            >
              {link.label}
              {link.label === 'Demo Live' && (
                <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] text-neutral-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
            <span>Disponibilità Q3/Q4</span>
          </div>

          <button
            onClick={onOpenContact}
            id="nav-cta-contact-btn"
            className="flex items-center gap-2 bg-white text-black text-xs font-semibold px-4 py-2 hover:bg-neutral-200 transition-all duration-200 font-display tracking-tight"
          >
            <span>Avvia Progetto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenContact}
            className="text-xs bg-white text-black font-semibold px-3 py-1.5 font-display"
          >
            Contatto
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d0e] border-b border-neutral-800 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="text-neutral-300 hover:text-white py-2 border-b border-neutral-900 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 bg-white text-black font-semibold text-center text-xs tracking-wider uppercase font-display"
              >
                Richiedi Consulenza
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
