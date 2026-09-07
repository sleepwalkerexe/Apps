import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsMarquee } from './components/ClientsMarquee';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesOverview } from './components/ServicesOverview';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { Play, Sparkles, Laptop, Smartphone, CheckCircle } from 'lucide-react';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoId, setSelectedDemoId] = useState<string>('kromalux');
  const [prefilledContactProject, setPrefilledContactProject] = useState<string>('');

  const handleOpenDemo = (projectId?: string) => {
    if (projectId) {
      setSelectedDemoId(projectId);
    }
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contatti');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactForProject = (projectName: string) => {
    setPrefilledContactProject(projectName);
    setDemoModalOpen(false);
    setTimeout(() => {
      const contactElement = document.getElementById('contatti');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenProjectDemo={handleOpenDemo}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenDemo={handleOpenDemo}
        />

        {/* 2. Animated Client Logos Gallery */}
        <ClientsMarquee />

        {/* 3. Selected Recent Projects */}
        <ProjectShowcase
          onOpenDemo={handleOpenDemo}
          onOpenContactForProject={handleContactForProject}
        />

        {/* Interactive Demo Showcase Callout Banner */}
        <section
          id="demo-section"
          className="py-16 bg-[#080809] border-b border-neutral-800/80 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="border border-neutral-800 bg-neutral-900/30 p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-mono">
                  <Play className="w-3 h-3 fill-current" />
                  <span>DEMO VIEWER INTERATTIVO DISPONIBILE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
                  Vuoi provare il lavoro finito prima di avviare il tuo?
                </h3>
                <p className="text-sm text-neutral-400 font-sans">
                  Entra nel nostro simulatore per esplorare le piattaforme reali che abbiamo sviluppato:
                  testa il carrello e-commerce di Kromalux, l'orologio virtuale di Solstice, il calcolo di rendimento di Strata o il monitor cluster di Veloce.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => handleOpenDemo('kromalux')}
                  id="banner-open-all-demos-btn"
                  className="px-6 py-4 bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Laptop className="w-4 h-4" />
                  <span>Lancia Simulatore Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Client Reviews & Independent Scores */}
        <ReviewsSection
          onOpenContact={handleOpenContact}
          onOpenProjectDemo={handleOpenDemo}
        />

        {/* 5. Method, Architecture & Discipline */}
        <ServicesOverview />

        {/* 6. Contact Form & Briefing */}
        <ContactSection
          prefilledProject={prefilledContactProject}
          onClearPrefilledProject={() => setPrefilledContactProject('')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Demo Modal */}
      {demoModalOpen && (
        <ProjectDemoModal
          initialProjectId={selectedDemoId}
          onClose={handleCloseDemo}
          onOpenContactForProject={handleContactForProject}
        />
      )}
    </div>
  );
}
