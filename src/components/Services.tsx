import React from 'react';
import { Shield, DoorOpen, Home, Layers, Flame, Wrench, Droplets, Sun, Plane, Umbrella } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (name: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'iron-grills',
      title: 'Iron Grills',
      tagline: 'Security meets artistry',
      icon: Shield,
      accent: 'from-orange-500 to-amber-500',
      badgeText: 'text-orange-600',
      glow: 'group-hover:border-orange-300',
    },
    {
      id: 'gates',
      title: 'Iron Gates',
      tagline: 'Commanding entrances',
      icon: DoorOpen,
      accent: 'from-amber-500 to-yellow-500',
      badgeText: 'text-amber-600',
      glow: 'group-hover:border-amber-300',
    },
    {
      id: 'roofing-structures',
      title: 'Roofing Structures',
      tagline: 'Engineered for durability',
      icon: Home,
      accent: 'from-blue-500 to-cyan-500',
      badgeText: 'text-blue-600',
      glow: 'group-hover:border-blue-300',
    },
    {
      id: 'window-canopy',
      title: 'Window Canopies',
      tagline: 'Sun & rain protection',
      icon: Umbrella,
      accent: 'from-indigo-500 to-blue-500',
      badgeText: 'text-indigo-600',
      glow: 'group-hover:border-indigo-300',
    },
    {
      id: 'polycarbonate-roofing',
      title: 'Polycarbonate Roofing',
      tagline: 'Light-transmitting canopies',
      icon: Sun,
      accent: 'from-amber-500 to-orange-500',
      badgeText: 'text-orange-600',
      glow: 'group-hover:border-orange-300',
    },
    {
      id: 'gutter-service',
      title: 'Gutter Service',
      tagline: 'Rainwater drainage & pipes',
      icon: Droplets,
      accent: 'from-teal-500 to-emerald-500',
      badgeText: 'text-teal-600',
      glow: 'group-hover:border-teal-300',
    },
    {
      id: 'airport-nets',
      title: 'Airport Nets',
      tagline: 'Safety & bird barrier mesh',
      icon: Plane,
      accent: 'from-sky-500 to-blue-600',
      badgeText: 'text-sky-600',
      glow: 'group-hover:border-sky-300',
    },
    {
      id: 'ceiling-structures',
      title: 'Ceilings & Wall Panelling',
      tagline: 'Modern interior cladding',
      icon: Layers,
      accent: 'from-violet-500 to-purple-500',
      badgeText: 'text-violet-600',
      glow: 'group-hover:border-violet-300',
    },
    {
      id: 'hand-railings',
      title: 'Hand Railings',
      tagline: 'Safe, sleek, long-lasting',
      icon: Wrench,
      accent: 'from-emerald-500 to-teal-500',
      badgeText: 'text-emerald-600',
      glow: 'group-hover:border-emerald-300',
    },
    {
      id: 'custom-ironworks',
      title: 'Custom Ironworks',
      tagline: 'Your vision, precision-welded',
      icon: Flame,
      accent: 'from-rose-500 to-orange-500',
      badgeText: 'text-rose-600',
      glow: 'group-hover:border-rose-300',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-badge mb-4">
            <Flame className="w-3.5 h-3.5" aria-hidden="true" />
            What We Offer
          </div>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 font-['Outfit']">
            Our <span className="text-orange-gradient">Ironworks</span> Services
          </h2>
          <p className="text-slate-600 text-lg">
            Precision arc welding and heavy-duty steel fabrication — tailored for residential, commercial, and industrial clients.
          </p>
        </div>

        {/* ─── Services Card Grid (No Photos, Icon Badge Top-Right + Title & Tagline) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((svc) => {
            const SvcIcon = svc.icon;
            return (
              <a
                key={svc.id}
                href="#contact"
                onClick={() => onSelectService && onSelectService(svc.title)}
                className={`group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl ${svc.glow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[190px] overflow-hidden cursor-pointer`}
                aria-label={`${svc.title} – ${svc.tagline}`}
              >
                {/* Subtle top ambient glow */}
                <div
                  className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br ${svc.accent} opacity-10 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none`}
                  aria-hidden="true"
                />

                {/* Top Row: 🔶 Gradient Icon Badge (top-right corner) */}
                <div className="flex items-start justify-end w-full">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.accent} flex items-center justify-center shadow-md shadow-slate-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <SvcIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Bottom Row: 📝 Title + Tagline */}
                <div className="mt-6 z-10">
                  <p className={`text-[11px] font-bold uppercase tracking-wider ${svc.badgeText} mb-1.5`}>
                    {svc.tagline}
                  </p>
                  <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit'] leading-tight group-hover:text-orange-600 transition-colors">
                    {svc.title}
                  </h3>

                  {/* Bottom accent pill */}
                  <div className={`mt-3 h-1 w-6 rounded-full bg-gradient-to-r ${svc.accent} group-hover:w-12 transition-all duration-300`} aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>

        {/* ─── Bottom CTA Banner ─── */}
        <div className="mt-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-['Outfit']">
                Need a Custom Ironwork Design?
              </h3>
              <p className="text-slate-300 text-sm max-w-lg">
                Tell us your vision — dimensions, design style, and location. We'll create a detailed quotation within 24 hours.
              </p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0 text-sm px-8 py-4">
              <Flame className="w-4 h-4" aria-hidden="true" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
