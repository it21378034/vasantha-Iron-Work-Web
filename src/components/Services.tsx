import React from 'react';
import { Shield, DoorOpen, Home, Layers, Flame, Wrench, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (name: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'iron-grills',
      title: 'Iron Grills',
      icon: Shield,
      image: '/images/custom_window_grill_2.png',
      description: 'Custom-designed iron grills that blend maximum security with architectural elegance.',
      features: ['Window Security Grills', 'Door Protection Grills', 'Custom Decorative Patterns'],
      accent: 'from-orange-500 to-amber-500',
      light: 'bg-orange-50 border-orange-100 text-orange-600',
    },
    {
      id: 'gates',
      title: 'Iron Gates',
      icon: DoorOpen,
      image: '/images/custom_iron_gate.png',
      description: 'Strong and stylish iron gates engineered for security, durability, and stunning curb appeal.',
      features: ['Driveway Main Gates', 'Sliding & Folding Gates', 'Custom Swing Security Gates'],
      accent: 'from-amber-500 to-yellow-500',
      light: 'bg-amber-50 border-amber-100 text-amber-600',
    },
    {
      id: 'roofing-structures',
      title: 'Roofing Structures',
      icon: Home,
      image: '/images/school_roof_completed.jpg',
      description: 'Durable steel and iron roofing frameworks built to withstand heavy loads and harsh weather.',
      features: ['Steel Roof Trusses', 'Curved Canopy Framing', 'Carport & Shed Structures'],
      accent: 'from-blue-500 to-cyan-500',
      light: 'bg-blue-50 border-blue-100 text-blue-600',
    },
    {
      id: 'ceiling-structures',
      title: 'Ceiling Structures',
      icon: Layers,
      image: '/images/ceiling_project_completed.jpg',
      description: 'Reliable metal ceiling frameworks, modern wood-grain finish modular paneling, and recessed lighting installations.',
      features: ['Metal Frame Ceilings', 'Wood-Finish Ceiling Panels', 'Recessed Downlight Integration'],
      accent: 'from-violet-500 to-purple-500',
      light: 'bg-violet-50 border-violet-100 text-violet-600',
    },
    {
      id: 'hand-railings',
      title: 'Hand Railings',
      icon: Wrench,
      image: '/images/stainless_steel_stair_railing.jpg',
      description: 'Durable, stylish hand railings for staircases, verandas, balconies, and elevated landings.',
      features: ['Stainless Steel Railings', 'Staircase Hand Railings', 'Veranda & Safety Gates'],
      accent: 'from-emerald-500 to-teal-500',
      light: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    },
    {
      id: 'custom-ironworks',
      title: 'Custom Ironworks',
      icon: Flame,
      image: '/images/garden_swing_chair.jpg',
      description: 'We turn your custom metalwork concepts into precision-welded structural steel reality.',
      features: ['Outdoor Metal Furniture', 'Architectural Metalwork', 'Custom Steel Fabrication'],
      accent: 'from-rose-500 to-orange-500',
      light: 'bg-rose-50 border-rose-100 text-rose-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Flame className="w-3.5 h-3.5" />
            What We Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our <span className="text-orange-gradient">Ironworks</span> Services
          </h2>
          <p className="text-slate-600 text-lg">
            Precision arc welding and heavy-duty steel fabrication — tailored for residential, commercial, and industrial clients.
          </p>
        </div>

        {/* ─── Services Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="card-premium rounded-3xl overflow-hidden group flex flex-col">

                {/* Image with gradient badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${service.id === 'iron-grills' ? 'object-contain bg-slate-100' : 'object-cover'}`}
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Service Icon Badge */}
                  <div className={`absolute top-4 right-4 p-3 rounded-2xl border ${service.light} bg-white/95 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-extrabold text-white font-['Outfit'] drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${service.light}`}>
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <a
                      href="#contact"
                      onClick={() => onSelectService && onSelectService(service.title)}
                      className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <span>Request Quote for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* ─── Bottom CTA Banner ─── */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
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
              <Flame className="w-4 h-4" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
