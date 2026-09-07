import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledProject?: string;
  onClearPrefilledProject?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProject,
  onClearPrefilledProject,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: 'E-commerce Headless',
    budget: '€15.000 - €30.000',
    timeline: 'Entro 1-2 mesi',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Buongiorno NDS, vorrei discutere un progetto simile a "${prefilledProject}". Vorremmo approfondire fattibilità, tempistiche e budget.`,
      }));
    }
  }, [prefilledProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@nds-agency.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const services = [
    'E-commerce Headless',
    'Piattaforma Web / SaaS',
    'Sito Web Corporate & Portfolio',
    'Design System & Identità',
  ];

  const budgets = [
    '€8.000 - €15.000',
    '€15.000 - €30.000',
    '€30.000 - €60.000',
    '> €60.000',
  ];

  return (
    <section id="contatti" className="py-24 md:py-32 bg-[#090a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              05 / Iniziamo un Progetto
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-display leading-[0.95]">
              Parlaci della tua visione.<br />
              <span className="text-neutral-500">Rispondiamo in 24h.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Accettiamo un numero limitato di commesse a trimestre per garantire una cura artigianale
              e il rispetto rigoroso dei tempi di consegna.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border border-neutral-800 p-6 bg-neutral-900/30 space-y-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Contatto Diretto Studio
              </div>

              <div className="space-y-4 text-sm font-mono">
                <div>
                  <div className="text-xs text-neutral-400 uppercase mb-1">Email Generale</div>
                  <div className="flex items-center justify-between group">
                    <a
                      href="mailto:contact@nds-agency.com"
                      className="text-white hover:underline text-sm"
                    >
                      contact@nds-agency.com
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1 text-neutral-500 hover:text-white transition-colors"
                      title="Copia email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-neutral-400 uppercase mb-1">Telefono & WhatsApp</div>
                  <a
                    href="tel:+390287194022"
                    className="text-white hover:underline text-sm"
                  >
                    +39 02 8719 4022
                  </a>
                </div>

                <div>
                  <div className="text-xs text-neutral-400 uppercase mb-1">Sede & Operatività</div>
                  <div className="text-neutral-300 text-xs leading-relaxed font-sans">
                    Via Tortona 31, 20144 Milano (MI) · Italia<br />
                    Disponibili per commesse remote in tutta Europa e Svizzera.
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 flex items-center gap-2 text-xs text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Tempo medio di risposta: 4 ore</span>
                </div>
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="border border-neutral-800 p-6 bg-neutral-900/20 font-mono text-xs text-neutral-400 space-y-3">
              <div className="text-white font-bold uppercase tracking-wider font-display">
                Il Patto NDS:
              </div>
              <ul className="space-y-2 list-disc list-inside">
                <li>Audit preventivo gratuito del progetto</li>
                <li>Preventivo trasparente con milestone chiare</li>
                <li>Codice proprietario al 100% senza lock-in</li>
                <li>Garanzia post-lancio e monitoraggio SLA</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="border border-neutral-700 bg-neutral-900/50 p-8 md:p-12 text-center space-y-6">
                <div className="w-16 h-16 bg-white text-black mx-auto flex items-center justify-center rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                    Richiesta Ricevuta con Successo
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Grazie, <strong className="text-white">{formData.name}</strong>. Un nostro lead developer o partner analizzerà il brief entro 24 ore e ti risponderà all’indirizzo <strong className="text-white">{formData.email}</strong>.
                  </p>
                </div>

                <div className="border border-neutral-800 bg-black/40 p-4 max-w-md mx-auto text-left font-mono text-xs space-y-1 text-neutral-400">
                  <div><span className="text-neutral-500">Servizio:</span> {formData.service}</div>
                  <div><span className="text-neutral-500">Budget:</span> {formData.budget}</div>
                  <div><span className="text-neutral-500">Tempistiche:</span> {formData.timeline}</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onClearPrefilledProject) onClearPrefilledProject();
                  }}
                  className="px-6 py-2.5 bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  Invia Un Altro Messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" id="agency-contact-form">
                {prefilledProject && (
                  <div className="bg-neutral-900 border border-white/20 p-3.5 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-300">
                      Riferimento progetto selezionato: <strong className="text-white">{prefilledProject}</strong>
                    </span>
                    {onClearPrefilledProject && (
                      <button
                        type="button"
                        onClick={onClearPrefilledProject}
                        className="text-neutral-500 hover:text-white underline text-[11px]"
                      >
                        Azzera
                      </button>
                    )}
                  </div>
                )}

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                    01 / Tipologia di Intervento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`p-3 text-left text-xs font-mono border transition-all ${
                          formData.service === srv
                            ? 'bg-white text-black font-bold border-white'
                            : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                    02 / Budget Indicativo di Investimento
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`p-3 text-center text-xs font-mono border transition-all ${
                          formData.budget === b
                            ? 'bg-white text-black font-bold border-white'
                            : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Nome & Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="es. Carlo Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-white p-3 text-sm text-white font-sans outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Email Aziendale *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="es. carlo@azienda.it"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-white p-3 text-sm text-white font-sans outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Nome Brand o Società
                    </label>
                    <input
                      type="text"
                      placeholder="es. Rossi & Partners S.r.l."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-white p-3 text-sm text-white font-sans outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Tempistiche Desiderate
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-white p-3 text-sm text-white font-sans outline-hidden transition-colors"
                    >
                      <option value="Immediata (< 3 settimane)">Immediata (&lt; 3 settimane)</option>
                      <option value="Entro 1-2 mesi">Entro 1-2 mesi</option>
                      <option value="Q3/Q4 2025">Q3/Q4 2025</option>
                      <option value="Fase di studio / Esplorativa">Fase di studio / Esplorativa</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    03 / Dettagli del Progetto & Obiettivi
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descrivi brevemente gli obiettivi: mercato target, funzionalità desiderate, eventuali riferimenti o problemi attuali..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900/80 border border-neutral-800 focus:border-white p-3 text-sm text-white font-sans outline-hidden transition-colors resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs font-mono text-neutral-400">
                    * Tutti i dati sono trattati con accordo di non divulgazione (NDA).
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    id="submit-contact-form-btn"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Elaborazione brief...</span>
                    ) : (
                      <>
                        <span>Invia Richiesta Progetto</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
