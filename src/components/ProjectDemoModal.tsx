import React, { useState } from 'react';
import {
  X,
  Laptop,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCw,
  Lock,
  ShoppingBag,
  Sliders,
  CheckCircle2,
  Activity,
  Cpu,
  Eye,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Server,
  Terminal,
  Shield,
  Plus,
  Minus,
  Trash2,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectDemoModalProps {
  initialProjectId?: string;
  onClose: () => void;
  onOpenContactForProject: (projectName: string) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({
  initialProjectId = 'kromalux',
  onClose,
  onOpenContactForProject,
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjectId);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="w-full h-full max-w-[1500px] flex flex-col bg-[#0c0d0e] border border-neutral-800 shadow-2xl overflow-hidden">
        
        {/* Top Header Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-neutral-800 bg-[#090a0a]">
          {/* Project Selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-display font-bold text-sm tracking-tight text-white pr-2 border-r border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NDS DEMO VIEWER</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-md scrollbar-none py-0.5">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProjectId(p.id)}
                  className={`px-3 py-1 text-xs font-mono whitespace-nowrap transition-all ${
                    activeProjectId === p.id
                      ? 'bg-white text-black font-semibold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {p.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Device Switcher */}
          <div className="hidden sm:flex items-center gap-1 border border-neutral-800 bg-neutral-900/90 p-1 rounded-sm">
            <button
              onClick={() => setDeviceMode('desktop')}
              title="Visualizzazione Desktop (100%)"
              className={`p-1.5 rounded transition-colors ${
                deviceMode === 'desktop' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              title="Visualizzazione Tablet (768px)"
              className={`p-1.5 rounded transition-colors ${
                deviceMode === 'tablet' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              title="Visualizzazione Mobile (375px)"
              className={`p-1.5 rounded transition-colors ${
                deviceMode === 'mobile' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenContactForProject(activeProject.title)}
              className="hidden md:flex items-center gap-1.5 bg-white text-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wider font-display hover:bg-neutral-200 transition-colors"
            >
              <span>Richiedi Progetto Simile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              id="close-demo-modal-btn"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
              title="Chiudi demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Simulated Browser URL Bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-neutral-800/80 bg-[#121315] text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          </div>

          <button
            onClick={handleRefresh}
            className={`p-1 hover:text-white transition-transform ${isRefreshing ? 'rotate-180 duration-300' : ''}`}
            title="Ricarica interfaccia"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          <div className="flex-1 flex items-center gap-2 bg-[#090a0a] border border-neutral-800 px-3 py-1 text-[11px] text-neutral-300 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{activeProject.demoUrl}</span>
            <span className="ml-auto text-[10px] text-neutral-400 uppercase tracking-widest shrink-0 font-bold">
              BUILD LIVE V3.4
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
            <span>Stack:</span>
            <span className="text-neutral-300">{activeProject.technologies.slice(0, 3).join(' · ')}</span>
          </div>
        </div>

        {/* Stage Container with responsive frame */}
        <div className="flex-1 overflow-auto bg-[#070708] flex items-center justify-center p-2 sm:p-6">
          <div
            className={`transition-all duration-300 h-full flex flex-col bg-[#0f1012] border border-neutral-800 overflow-hidden shadow-2xl relative ${
              deviceMode === 'desktop'
                ? 'w-full max-w-full'
                : deviceMode === 'tablet'
                ? 'w-[768px] max-w-full rounded-2xl border-4 border-neutral-700'
                : 'w-[385px] max-w-full rounded-3xl border-4 border-neutral-700'
            }`}
          >
            {/* Interactive Demo Content based on active project */}
            {activeProject.demoType === 'ecommerce' && <KromaluxEcommerceDemo />}
            {activeProject.demoType === 'saas' && <VeloceSaasDemo />}
            {activeProject.demoType === 'editorial' && <SolsticeEditorialDemo />}
            {activeProject.demoType === 'fintech' && <StrataFintechDemo />}
            {activeProject.demoType === 'architecture' && <NexusArchitectureDemo />}
          </div>
        </div>

        {/* Bottom Project Metadata Drawer Bar */}
        <div className="border-t border-neutral-800 bg-[#090a0a] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-bold text-white uppercase font-display">{activeProject.title}</span>
            <span className="text-neutral-500 font-mono">/</span>
            <span className="text-neutral-400 font-mono">{activeProject.categoryLabel}</span>
            <span className="hidden sm:inline text-neutral-500 font-mono">/</span>
            <span className="hidden sm:inline text-neutral-400 font-mono">Anno {activeProject.year}</span>
          </div>

          <div className="flex items-center gap-6">
            {activeProject.metrics.map((m, idx) => (
              <div key={idx} className="flex items-center gap-1.5 font-mono">
                <span className="text-neutral-400 text-[11px]">{m.label}:</span>
                <span className="text-white font-bold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   1. KROMALUX STUDIO (E-COMMERCE DEMO)
   ========================================================================= */
function KromaluxEcommerceDemo() {
  const [ambientLight, setAmbientLight] = useState<'neutral' | 'warm' | 'dark' | 'gallery'>('neutral');
  const [cart, setCart] = useState<Array<{ id: string; name: string; price: number; quantity: number }>>([
    { id: '1', name: 'Lumen Arch 01 — Sospensione Ottone', price: 680, quantity: 1 },
  ]);
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: '1',
      name: 'Lumen Arch 01',
      type: 'Sospensione Scultorea',
      price: 680,
      material: 'Ottone Brunito & Vetro Soffiato',
      temp: '2700K Dimmerabile',
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '2',
      name: 'Monolith Table Beacon',
      type: 'Lampada da Tavolo',
      price: 490,
      material: 'Granito Nero Spazzolato',
      temp: '3000K Touch Control',
      img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '3',
      name: 'Strata Linear Tube',
      type: 'Profilo Architetturale',
      price: 840,
      material: 'Alluminio Anodizzato Opaco',
      temp: 'Tunable White 2200-4000K',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '4',
      name: 'Eclipse Wall Sconce',
      type: 'Applique a Parete',
      price: 360,
      material: 'Acciaio Cerato & Opale',
      temp: 'Luce Indiretta 2500K',
      img: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const getAmbientStyles = () => {
    switch (ambientLight) {
      case 'warm':
        return 'bg-[#14120e] text-[#fbf7ee]';
      case 'dark':
        return 'bg-[#060607] text-[#e4e4e7]';
      case 'gallery':
        return 'bg-[#18191c] text-[#f4f4f6]';
      default:
        return 'bg-[#0d0e10] text-[#f4f4f5]';
    }
  };

  return (
    <div className={`h-full overflow-y-auto flex flex-col font-sans transition-colors duration-500 ${getAmbientStyles()} relative`}>
      {/* Demo Nav */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-black/40 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-display font-black tracking-widest text-base">KROMALUX</div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 border-l border-neutral-700 pl-3">
            COPENHAGEN
          </span>
        </div>

        {/* Ambient Mode Switcher */}
        <div className="hidden md:flex items-center gap-1 text-[11px] font-mono border border-white/10 p-1 rounded">
          <span className="px-2 text-neutral-400">Luce:</span>
          {(['neutral', 'warm', 'dark', 'gallery'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setAmbientLight(mode)}
              className={`px-2 py-0.5 uppercase tracking-wider rounded-xs text-[10px] transition-colors ${
                ambientLight === mode ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Cart Trigger */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="flex items-center gap-2 border border-white/20 px-3 py-1.5 hover:bg-white hover:text-black transition-colors text-xs font-mono"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Carrello ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="px-6 py-12 md:py-16 max-w-5xl mx-auto w-full text-center">
        <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
          Collezione Architetturale 2025
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight mb-4">
          La scultura incontra la pura incidenza della luce.
        </h2>
        <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto mb-6">
          Ogni corpo illuminante è forgiato a mano in Danimarca e collaudato con sorgenti LED a spettro solare continuo (CRI 98+).
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto w-full px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="group border border-white/10 bg-white/[0.02] hover:border-white/40 transition-all flex flex-col justify-between"
          >
            <div className="relative aspect-square overflow-hidden bg-neutral-900">
              <img
                src={item.img}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-[10px] font-mono px-2 py-0.5 border border-white/10 text-white">
                €{item.price}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  {item.type}
                </div>
                <h3 className="font-display font-bold text-sm tracking-tight mb-1 text-white">
                  {item.name}
                </h3>
                <div className="text-[11px] text-neutral-400 font-mono mb-3 leading-tight">
                  {item.material} · {item.temp}
                </div>
              </div>

              <button
                onClick={() => addToCart(item)}
                className="w-full mt-2 py-2 bg-white text-black font-display font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Acquista / Prova</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Slide-Over Drawer */}
      {cartOpen && (
        <div className="absolute inset-y-0 right-0 w-full sm:w-96 bg-[#0c0d0e] border-l border-neutral-800 z-30 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div className="font-display font-bold text-base uppercase">Carrello Scultoreo</div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12 text-neutral-400 font-mono text-xs">
                Il carrello è vuoto. Seleziona un corpo illuminante.
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((c) => (
                  <div key={c.id} className="border border-neutral-800 p-3 flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-xs text-white">{c.name}</div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        €{c.price} × {c.quantity} = €{c.price * c.quantity}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setCart((prev) =>
                            prev
                              .map((i) => (i.id === c.id ? { ...i, quantity: i.quantity - 1 } : i))
                              .filter((i) => i.quantity > 0)
                          )
                        }
                        className="p-1 border border-neutral-700 hover:bg-neutral-800 rounded"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono">{c.quantity}</span>
                      <button
                        onClick={() =>
                          setCart((prev) =>
                            prev.map((i) => (i.id === c.id ? { ...i, quantity: i.quantity + 1 } : i))
                          )
                        }
                        className="p-1 border border-neutral-700 hover:bg-neutral-800 rounded"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-4 font-mono text-sm">
              <span className="text-neutral-400">Totale stimato:</span>
              <span className="text-white font-bold text-base">€{total}</span>
            </div>
            <button
              onClick={() => alert('Demo checkout interattivo: transazione simulata completata con successo!')}
              className="w-full py-3 bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Procedi al Checkout Sub-Second
            </button>
            <div className="text-center text-[10px] text-neutral-400 font-mono mt-2">
              Spedizione assicurata con cassa in legno massello
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. VELOCE TELEMETRY OS (SAAS DEMO)
   ========================================================================= */
function VeloceSaasDemo() {
  const [selectedCluster, setSelectedCluster] = useState<'eu-west' | 'us-east' | 'ap-tokyo'>('eu-west');
  const [simulatedLoad, setSimulatedLoad] = useState(42);
  const [logs, setLogs] = useState<string[]>([
    '[21:44:02.102] INGRESS router: healthy routing to 12 edge worker pods',
    '[21:44:02.390] K8S scaler: auto-balance cpu pool delta = 0.04%',
    '[21:44:03.012] TLS Handshake: 1.2ms zero-rtt session verified',
    '[21:44:03.440] CACHE hit ratio: 99.82% on static distributed assets',
  ]);

  const addSimulatedLog = () => {
    const newLogs = [
      `[${new Date().toLocaleTimeString()}.${Math.floor(Math.random() * 900 + 100)}] POD: worker-${Math.floor(
        Math.random() * 90 + 10
      )} synced latency = ${(Math.random() * 4 + 0.8).toFixed(2)}ms`,
      ...logs.slice(0, 5),
    ];
    setLogs(newLogs);
    setSimulatedLoad(Math.floor(Math.random() * 30 + 35));
  };

  return (
    <div className="h-full overflow-y-auto bg-[#0a0b0d] text-neutral-200 font-sans p-4 sm:p-6 flex flex-col gap-6">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-black font-display text-sm">
            V
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-white">
              VELOCE TELEMETRY ENGINE
            </div>
            <div className="text-[10px] font-mono text-neutral-400">
              Cluster Orchestrator v4.2.1-prod
            </div>
          </div>
        </div>

        {/* Region Selector */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-neutral-400">Regione:</span>
          {(['eu-west', 'us-east', 'ap-tokyo'] as const).map((region) => (
            <button
              key={region}
              onClick={() => {
                setSelectedCluster(region);
                addSimulatedLog();
              }}
              className={`px-2.5 py-1 uppercase text-[10px] font-bold border ${
                selectedCluster === region
                  ? 'bg-white text-black border-white'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
        <div className="border border-neutral-800 bg-neutral-900/50 p-3">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span>CPU Cluster</span>
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-bold text-white">{simulatedLoad}%</div>
          <div className="w-full bg-neutral-800 h-1 mt-2">
            <div
              className="bg-white h-1 transition-all duration-500"
              style={{ width: `${simulatedLoad}%` }}
            />
          </div>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/50 p-3">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span>Throughput</span>
            <Activity className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-bold text-white">1.84M req/s</div>
          <div className="text-[10px] text-emerald-400 mt-1">▲ +8.2% picco medio</div>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/50 p-3">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span>Latenza P99</span>
            <Server className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-bold text-white">2.14 ms</div>
          <div className="text-[10px] text-neutral-400 mt-1">SLA 99.999% garantito</div>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/50 p-3">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span>Nodi Attivi</span>
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold text-white">128 / 128</div>
          <div className="text-[10px] text-neutral-400 mt-1">0 allarmi critici</div>
        </div>
      </div>

      {/* Nodes Table */}
      <div className="border border-neutral-800 bg-neutral-900/30">
        <div className="p-3 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
          <span className="font-bold text-white uppercase">Stato Microservizi Ingress ({selectedCluster})</span>
          <button
            onClick={addSimulatedLog}
            className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 border border-neutral-700 px-2 py-0.5"
          >
            <RotateCw className="w-3 h-3" />
            <span>Simula Traffico</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="text-[10px] text-neutral-400 uppercase bg-neutral-900/80 border-b border-neutral-800">
              <tr>
                <th className="p-3">Nodo</th>
                <th className="p-3">Ruolo</th>
                <th className="p-3">Utilizzo</th>
                <th className="p-3">Memoria</th>
                <th className="p-3">Stato</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {[
                { node: 'edge-auth-01', role: 'Authentication Gateway', cpu: '18%', mem: '1.2 GB', status: 'HEALTHY' },
                { node: 'edge-api-core', role: 'GraphQL Federation', cpu: '44%', mem: '4.8 GB', status: 'HEALTHY' },
                { node: 'edge-cache-redis', role: 'In-Memory Cache L1', cpu: '12%', mem: '8.1 GB', status: 'OPTIMAL' },
                { node: 'edge-stream-kafka', role: 'Event Broker Engine', cpu: '39%', mem: '6.4 GB', status: 'HEALTHY' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-neutral-800/30">
                  <td className="p-3 font-semibold text-white">{row.node}</td>
                  <td className="p-3 text-neutral-400">{row.role}</td>
                  <td className="p-3 text-neutral-300">{row.cpu}</td>
                  <td className="p-3 text-neutral-300">{row.mem}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Live Stream Terminal */}
      <div className="border border-neutral-800 bg-black p-3 font-mono text-xs">
        <div className="flex items-center justify-between text-neutral-400 text-[11px] pb-2 border-b border-neutral-800 mb-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-neutral-300" />
            <span>FLUSSO LOGS IN TEMPO REALE</span>
          </div>
          <span className="text-[10px] text-emerald-400">● STREAM ATTIVO</span>
        </div>
        <div className="space-y-1 text-neutral-400 text-[11px]">
          {logs.map((log, idx) => (
            <div key={idx} className="font-mono hover:text-neutral-200">
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. SOLSTICE GENÈVE (EDITORIAL LUXURY DEMO)
   ========================================================================= */
function SolsticeEditorialDemo() {
  const [activeAngle, setActiveAngle] = useState<'front' | 'movement' | 'wrist'>('front');
  const [inquireModal, setInquireModal] = useState(false);

  return (
    <div className="h-full overflow-y-auto bg-[#070708] text-neutral-100 font-sans p-6 sm:p-10 flex flex-col justify-between relative">
      <div className="max-w-4xl mx-auto w-full">
        {/* Editorial Header */}
        <div className="text-center mb-10">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 mb-3">
            MANUFACTURE D’HORLOGERIE · GENÈVE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mb-2">
            CALIBRE SOL-9002 TOURBILLON
          </h2>
          <div className="text-xs font-mono text-neutral-400 tracking-wider">
            Edizione Limitata a 12 Esemplari Numerati
          </div>
        </div>

        {/* Visual Showcase with Angle Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-neutral-800 p-6 bg-neutral-900/30 mb-8">
          <div className="md:col-span-7 aspect-square relative bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden">
            <img
              src={
                activeAngle === 'front'
                  ? 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
                  : activeAngle === 'movement'
                  ? 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80'
                  : 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
              }
              alt="Solstice Watch Preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 text-[10px] font-mono text-white border border-neutral-700">
              Vista: {activeAngle.toUpperCase()}
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="text-[11px] font-mono uppercase text-neutral-400 mb-2">
                Esplora Angolazioni & Dettagli
              </div>
              <div className="flex flex-col gap-2 font-mono text-xs">
                {[
                  { key: 'front', label: '01 / Quadrante Squelette in Titanio' },
                  { key: 'movement', label: '02 / Ponte a Tre Bracci & Scappamento' },
                  { key: 'wrist', label: '03 / Cassa 39.5mm & Cinturino Alligatore' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveAngle(item.key as any)}
                    className={`text-left p-2.5 border transition-all text-[11px] ${
                      activeAngle === item.key
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specs List */}
            <div className="border-t border-neutral-800 pt-4 space-y-2 text-[11px] font-mono">
              <div className="flex justify-between text-neutral-400">
                <span>Riserva di carica:</span>
                <span className="text-white font-bold">72 Ore</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Frequenza:</span>
                <span className="text-white font-bold">28.800 A/h (4Hz)</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Componenti:</span>
                <span className="text-white font-bold">248 finiti a mano</span>
              </div>
            </div>

            <button
              onClick={() => setInquireModal(true)}
              className="w-full py-3 bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Prenota Visione Privata a Ginevra
            </button>
          </div>
        </div>
      </div>

      {inquireModal && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 flex items-center justify-center p-6">
          <div className="max-w-md w-full border border-neutral-700 bg-[#0c0d0e] p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
              <span className="font-display font-bold text-sm uppercase">Richiesta Visita Salon Privé</span>
              <button onClick={() => setInquireModal(false)} className="text-neutral-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-neutral-400 mb-4 font-mono">
              La presentazione del Calibre SOL-9002 avviene esclusivamente su invito presso il salon di Place de la Fusterie, Ginevra.
            </p>
            <div className="space-y-3 font-mono text-xs mb-4">
              <input
                type="text"
                placeholder="Nome & Cognome"
                defaultValue="Edoardo Visconti"
                className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white"
              />
              <input
                type="email"
                placeholder="Indirizzo Email"
                defaultValue="visconti@luxury-holding.ch"
                className="w-full bg-neutral-900 border border-neutral-800 p-2.5 text-white"
              />
            </div>
            <button
              onClick={() => {
                alert('Richiesta privata inviata al Concierge Solstice Genève.');
                setInquireModal(false);
              }}
              className="w-full py-2.5 bg-white text-black font-display font-bold text-xs uppercase"
            >
              Invia al Concierge VIP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   4. STRATA CAPITAL (FINTECH ASSET ALLOCATION DEMO)
   ========================================================================= */
function StrataFintechDemo() {
  const [capital, setCapital] = useState<number>(250000);
  const [profile, setProfile] = useState<'conservativo' | 'bilanciato' | 'crescita'>('bilanciato');
  const [years, setYears] = useState<number>(5);

  const rate = profile === 'conservativo' ? 0.058 : profile === 'bilanciato' ? 0.092 : 0.134;
  const projectedValue = Math.round(capital * Math.pow(1 + rate, years));
  const estimatedGain = projectedValue - capital;

  return (
    <div className="h-full overflow-y-auto bg-[#0a0b0d] text-neutral-200 font-sans p-6 sm:p-8 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-6">
          <div>
            <div className="font-display font-bold text-base text-white uppercase tracking-tight">
              STRATA PRIVATE ASSET SIMULATOR
            </div>
            <div className="text-[10px] font-mono text-neutral-400">
              Modello Quantitativo Monte Carlo per Investitori Qualificati
            </div>
          </div>
          <div className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-emerald-400">
            Regolamentato FCA & BaFin
          </div>
        </div>

        {/* Interactive Controls & Projected Results */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="md:col-span-6 space-y-6 border border-neutral-800 p-6 bg-neutral-900/30">
            {/* Capital Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-neutral-400">Capitale Iniziale:</span>
                <span className="text-white font-bold">€{capital.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="25000"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>€50k</span>
                <span>€1M</span>
                <span>€2M+</span>
              </div>
            </div>

            {/* Profile Selector */}
            <div>
              <div className="text-xs font-mono text-neutral-400 mb-2">Strategia di Rendimento:</div>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {(['conservativo', 'bilanciato', 'crescita'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setProfile(p)}
                    className={`py-2 px-1 text-center capitalize border transition-all text-[11px] ${
                      profile === p
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-neutral-400">Orizzonte Temporale:</span>
                <span className="text-white font-bold">{years} Anni</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="md:col-span-6 border border-neutral-800 p-6 bg-neutral-900/50 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
                Valore Finale Proiettato
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                €{projectedValue.toLocaleString()}
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1">
                +€{estimatedGain.toLocaleString()} rendimento composto cumulato (~{(rate * 100).toFixed(1)}% p.a.)
              </div>

              {/* Asset Allocation Breakdown */}
              <div className="mt-6 pt-4 border-t border-neutral-800">
                <div className="text-xs font-mono text-neutral-400 mb-3">Asset Allocation Target:</div>
                <div className="w-full h-3 flex overflow-hidden rounded-xs">
                  <div className="bg-white h-full" style={{ width: profile === 'conservativo' ? '60%' : profile === 'bilanciato' ? '35%' : '15%' }} title="Private Debt" />
                  <div className="bg-neutral-400 h-full" style={{ width: profile === 'conservativo' ? '25%' : profile === 'bilanciato' ? '45%' : '50%' }} title="Direct Equity" />
                  <div className="bg-neutral-600 h-full" style={{ width: profile === 'conservativo' ? '15%' : profile === 'bilanciato' ? '20%' : '35%' }} title="Real Assets" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-2">
                  <span>■ Private Debt</span>
                  <span>■ Direct Equity</span>
                  <span>■ Real Assets</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Accesso alla Data Room Istituzionale Strata autorizzato per la sessione di test.')}
              className="mt-6 w-full py-3 bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Richiedi Accesso Data Room Crittografata
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. NEXUS SPATIAL (ARCHITECTURE & URBANISM DEMO)
   ========================================================================= */
function NexusArchitectureDemo() {
  const [viewMode, setViewMode] = useState<'render' | 'blueprint' | 'wireframe'>('render');

  return (
    <div className="h-full overflow-y-auto bg-[#0a0a0b] text-neutral-100 p-6 sm:p-10 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-end pb-6 border-b border-neutral-800 mb-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
              PROGETTO #104 / RESIDENZA BAVIERA
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
              Padiglione nel Bosco di Betulle
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 text-right">
            Superficie: 480 m²<br />Stato: Completato 2024
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex gap-2 mb-4 font-mono text-xs">
          <button
            onClick={() => setViewMode('render')}
            className={`px-3 py-1.5 border ${
              viewMode === 'render' ? 'bg-white text-black font-bold' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
            }`}
          >
            Fotografia & Render
          </button>
          <button
            onClick={() => setViewMode('blueprint')}
            className={`px-3 py-1.5 border ${
              viewMode === 'blueprint' ? 'bg-white text-black font-bold' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
            }`}
          >
            Planimetria Tecnica CAD
          </button>
          <button
            onClick={() => setViewMode('wireframe')}
            className={`px-3 py-1.5 border ${
              viewMode === 'wireframe' ? 'bg-white text-black font-bold' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
            }`}
          >
            Studio Volumetrico & Solare
          </button>
        </div>

        {/* Canvas Display */}
        <div className="aspect-video relative border border-neutral-800 bg-black overflow-hidden flex items-center justify-center">
          <img
            src={
              viewMode === 'render'
                ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
                : viewMode === 'blueprint'
                ? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
                : 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
            }
            alt="Nexus Spatial Model"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-700 ${
              viewMode === 'blueprint' ? 'invert contrast-200 hue-rotate-180' : 'grayscale contrast-125'
            }`}
          />
          <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[11px] font-mono border border-neutral-700">
            {viewMode === 'render' && '● FOTOGRAFIA LUCE NATURALE'}
            {viewMode === 'blueprint' && '● SVILUPPO ASSETTO SEZIONALE 1:50'}
            {viewMode === 'wireframe' && '● SIMULAZIONE IRRAGGIAMENTO SOLARE'}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6 border-t border-neutral-800 pt-4 font-mono text-xs text-neutral-400">
          <div>
            <span className="block text-white font-bold mb-0.5">Materiali:</span>
            Calcestruzzo a vista, Legno di Cedro Carbonizzato, Vetro basso emissivo
          </div>
          <div>
            <span className="block text-white font-bold mb-0.5">Efficienza Energetica:</span>
            Classe A4 NZEB (Near Zero Energy Building)
          </div>
          <div>
            <span className="block text-white font-bold mb-0.5">Premi:</span>
            Mies van der Rohe Award Nominee 2025
          </div>
        </div>
      </div>
    </div>
  );
}
