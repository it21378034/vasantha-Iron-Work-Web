import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  DoorOpen, 
  Home, 
  Layers, 
  Flame, 
  Wrench, 
  Droplets, 
  Sun, 
  Plane, 
  Umbrella,
  CheckCircle2,
  ArrowRight,
  Search,
  X,
  Phone,
  MessageSquare,
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (name: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  contactService: string;
  category: 'security' | 'roofing' | 'interiors';
  tagline: string;
  tag: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    material: string;
    finish: string;
    applications: string;
    warranty: string;
  };
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  accent: string;
  badgeText: string;
  glow: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalService(null);
    };
    if (activeModalService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalService]);

  const services: ServiceItem[] = [
    {
      id: 'iron-grills',
      title: 'Iron Grills',
      contactService: 'Iron Grills',
      category: 'security',
      tagline: 'Security Meets Architectural Beauty',
      tag: 'Anti-Burglary',
      image: '/images/iron_grill.jpg',
      description: 'Solid steel window security grills and barrier frames built for maximum home defense while preserving natural light and architectural charm.',
      features: [
        'Solid square & wrought bar steel',
        'Zinc-phosphate anti-rust primer finish',
        'Custom fittings for wood or concrete frames',
      ],
      specs: {
        material: 'Solid Mild Steel / 12mm–16mm Square Bars',
        finish: 'Zinc-Phosphate Anti-Rust Primer + Enamel Topcoat',
        applications: 'Residential windows, balconies, veranda perimeter enclosures',
        warranty: '10-Year Structural Weld & Joint Integrity Assurance',
      },
      icon: Shield,
      accent: 'from-orange-500 to-amber-500',
      badgeText: 'text-orange-600',
      glow: 'group-hover:border-orange-300',
    },
    {
      id: 'gates',
      title: 'Iron Gates',
      contactService: 'Gates',
      category: 'security',
      tagline: 'Sliding, Swing & Folding Systems',
      tag: 'Perimeter Security',
      image: '/images/custom_iron_gate.png',
      description: 'Heavy-duty driveway entrance gates fabricated with thick structural box tubing, smooth bearing rollers, and decorative steel panels.',
      features: [
        'Heavy structural steel box section framing',
        'Smooth ground-track roller & hinge motion',
        'Weatherproof matte black anti-corrosion coat',
      ],
      specs: {
        material: 'Structural Steel Box Tubing (2×2, 3×3) & Steel Plates',
        finish: 'Weather-Shield Anti-Corrosion Primer + Matte Black Finish',
        applications: 'Residential driveways, commercial perimeters, factory entrances',
        warranty: 'Heavy-duty track & roller alignment guarantee',
      },
      icon: DoorOpen,
      accent: 'from-amber-500 to-yellow-500',
      badgeText: 'text-amber-600',
      glow: 'group-hover:border-amber-300',
    },
    {
      id: 'roofing-structures',
      title: 'Roofing Structures',
      contactService: 'Roofing Structures',
      category: 'roofing',
      tagline: 'Engineered Trusses & Sheds',
      tag: 'Structural Steel',
      image: '/images/roofing_structure.jpg',
      description: 'Commercial sheds, residential roof trusses, and scenic cabana frames engineered to withstand mountain winds and heavy rainfall.',
      features: [
        'C-channel & GI pipe truss framing',
        'High-load wind & storm resistance',
        'Amano & Zincalume sheet roofing compatibility',
      ],
      specs: {
        material: 'Galvanized GI Tubing, C-Channels & Heavy Box Bars',
        finish: 'Zinc-Chromate Anti-Corrosion Primer',
        applications: 'Houses, hotel cabanas, warehouses, commercial sheds',
        warranty: 'Engineered wind load & structural guarantee',
      },
      icon: Home,
      accent: 'from-blue-500 to-cyan-500',
      badgeText: 'text-blue-600',
      glow: 'group-hover:border-blue-300',
    },
    {
      id: 'window-canopy',
      title: 'Window Canopies',
      contactService: 'Window Canopies',
      category: 'roofing',
      tagline: 'Sun & Rain Weather Shield',
      tag: 'Weather Protection',
      image: '/images/service_window_canopy.jpg',
      description: 'Durable steel-framed awnings and doorway canopies designed to shield exterior walls, doors, and windows from monsoons and UV glare.',
      features: [
        'Rigid all-weather steel framework',
        'Curved, pitched or modern minimalist profiles',
        'Secure masonry anchor bracket mounting',
      ],
      specs: {
        material: 'Lightweight & High-Tensile Steel Profiles',
        finish: 'Multi-layer all-weather enamel coating',
        applications: 'Home windows, shop fronts, entrance doorways',
        warranty: 'Leak-free perimeter flashing installation',
      },
      icon: Umbrella,
      accent: 'from-indigo-500 to-blue-500',
      badgeText: 'text-indigo-600',
      glow: 'group-hover:border-indigo-300',
    },
    {
      id: 'polycarbonate-roofing',
      title: 'Polycarbonate Roofing',
      contactService: 'Polycarbonate Roofing',
      category: 'roofing',
      tagline: 'Translucent Daylight Canopies',
      tag: 'Natural Light',
      image: '/images/service_polycarbonate_roofing.jpg',
      description: 'Impact-resistant polycarbonate sheet canopies on sleek steel frames, perfect for carports, verandas, and outdoor relaxation patios.',
      features: [
        'Blocks 99% harmful UV with soft natural light',
        'Shatter-proof & high impact resistance',
        'Ideal for car porches, verandas & terraces',
      ],
      specs: {
        material: 'Multi-wall Polycarbonate Sheets + Steel Box Section Framing',
        finish: 'Weatherproof EPDM rubber gaskets & waterproof sealants',
        applications: 'Car porches, swimming pool decks, garden pergolas',
        warranty: 'UV degradation & discoloration resistance',
      },
      icon: Sun,
      accent: 'from-amber-500 to-orange-500',
      badgeText: 'text-orange-600',
      glow: 'group-hover:border-orange-300',
    },
    {
      id: 'gutter-service',
      title: 'Gutter Service',
      contactService: 'Gutter Service',
      category: 'roofing',
      tagline: 'Rainwater Channels & Downpipes',
      tag: 'Roof Drainage',
      image: '/images/service_gutter_system.jpg',
      description: 'Complete roof drainage systems featuring heavy-duty Zincalume and PVC rain gutters, downpipes, and leak-free bracket installation.',
      features: [
        'High-volume continuous water flow channels',
        'Corrosion-proof brackets & downpipes',
        'Fascia board sealing & leak maintenance',
      ],
      specs: {
        material: 'Zincalume / Colorbond / Heavy-Gauge PVC',
        finish: 'Color-matched anti-corrosion coating',
        applications: 'Residential roofs, multi-pitch villas, factory sheds',
        warranty: 'Leak-tested joints & overflow assurance',
      },
      icon: Droplets,
      accent: 'from-teal-500 to-emerald-500',
      badgeText: 'text-teal-600',
      glow: 'group-hover:border-teal-300',
    },
    {
      id: 'airport-mesh',
      title: 'Airport Mesh & Safety Mesh',
      contactService: 'Airport Mesh & Safety Mesh',
      category: 'security',
      tagline: 'Perimeter Barrier & Safety Wire',
      tag: 'Industrial Barrier',
      image: '/images/airport_safety_mesh.jpg',
      description: 'High-tensile galvanized wire mesh barriers, chain-link safety fencing, and rooftop solar hot water anti-monkey protective cages installed on rigid steel frames for maximum wildlife deterrence and perimeter defense.',
      features: [
        'Heavy-gauge galvanized steel chain-link & wire mesh',
        'Rigid welded boundary perimeter frames & posts',
        'Rooftop solar hot water anti-monkey guard cages',
      ],
      specs: {
        material: 'High-Tensile Galvanized Steel / PVC-Coated Wire Mesh',
        finish: 'Hot-Dip Galvanized / Anti-Rust Weatherproof Coating',
        applications: 'Solar water heaters, airports, industrial perimeters, sports grounds, boundary enclosures',
        warranty: 'Sag-free tension and perimeter security guarantee',
      },
      icon: Plane,
      accent: 'from-sky-500 to-blue-600',
      badgeText: 'text-sky-600',
      glow: 'group-hover:border-sky-300',
    },
    {
      id: 'ceiling-structures',
      title: 'Ceilings & Wall Panelling',
      contactService: 'Ceilings & Wall Panelling',
      category: 'interiors',
      tagline: 'Waterproof i-Panel PVC Systems',
      tag: 'Modern Interiors',
      image: '/images/ceiling_project_completed.jpg',
      description: 'Architectural false ceilings and moisture-proof wall cladding using wood-grain PVC i-Panels, steel subframes, and recessed LED lights.',
      features: [
        '100% moisture, mold & termite proof',
        'Warm natural wood-grain aesthetic finish',
        'Concealed framing with neat LED downlights',
      ],
      specs: {
        material: 'Premium PVC i-Panel Sheets + Galvanized Metal Studs',
        finish: 'Textured Wood-Grain / Matte Interior Finishes',
        applications: 'Living rooms, damp wall restoration, office lobbies',
        warranty: 'Moisture barrier & termite-free guarantee',
      },
      icon: Layers,
      accent: 'from-violet-500 to-purple-500',
      badgeText: 'text-violet-600',
      glow: 'group-hover:border-violet-300',
    },
    {
      id: 'hand-railings',
      title: 'Hand Railings',
      contactService: 'Hand Railings',
      category: 'interiors',
      tagline: 'Verandas, Stairs & Balconies',
      tag: 'Fall Safety',
      image: '/images/hand_railing.jpg',
      description: 'Custom architectural hand railings and balustrades crafted from solid steel or 304-grade stainless steel for homes and commercial spaces.',
      features: [
        'Child-safe vertical bar spacing',
        'Smooth polished welds & ergonomic rails',
        'Stainless steel or powder-coated steel',
      ],
      specs: {
        material: 'Stainless Steel (304 grade) or Heavy Mild Steel Box Tubing',
        finish: 'Brushed Stainless / Matte Black Powder Coat',
        applications: 'Verandas, internal staircases, roof terraces',
        warranty: 'Wobble-free anchor mounting guarantee',
      },
      icon: Wrench,
      accent: 'from-emerald-500 to-teal-500',
      badgeText: 'text-emerald-600',
      glow: 'group-hover:border-emerald-300',
    },
    {
      id: 'custom-ironworks',
      title: 'Custom Ironworks',
      contactService: 'Custom Ironworks & Welding',
      category: 'interiors',
      tagline: 'Bespoke Metal Fabrication',
      tag: 'Made to Order',
      image: '/images/service_custom_ironworks.jpg',
      description: 'Tailor-made metal craftsmanship built to your blueprints or reference photos — garden swing chairs, spiral stairs, and workshop tables.',
      features: [
        'Crafted to your exact blueprint or photo',
        'Precision MIG & Arc welding joints',
        'Custom protective color coating',
      ],
      specs: {
        material: 'Mild Steel, Sheet Metal, Tubular Steel & Solid Bar',
        finish: 'Custom Color Primer & High-Gloss / Matte Finish',
        applications: 'Outdoor swings, custom worktables, bespoke decor',
        warranty: '100% craftsmanship satisfaction guarantee',
      },
      icon: Flame,
      accent: 'from-rose-500 to-orange-500',
      badgeText: 'text-rose-600',
      glow: 'group-hover:border-rose-300',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'security', label: 'Perimeter & Gates', count: services.filter(s => s.category === 'security').length },
    { id: 'roofing', label: 'Roofing & Canopies', count: services.filter(s => s.category === 'roofing').length },
    { id: 'interiors', label: 'Interiors & Railings', count: services.filter(s => s.category === 'interiors').length },
  ];

  // Filtering by category and search
  const filteredServices = services.filter((svc) => {
    const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      svc.title.toLowerCase().includes(query) ||
      svc.tagline.toLowerCase().includes(query) ||
      svc.description.toLowerCase().includes(query) ||
      svc.tag.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const buildServiceWhatsAppUrl = (svcTitle: string) => {
    const msg = `Hello Vasantha Iron Works, I am interested in your *${svcTitle}* service. Could you please provide me with more details and a free quotation?`;
    return `https://wa.me/94763207873?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="section-badge mb-4">
            <Flame className="w-3.5 h-3.5" aria-hidden="true" />
            What We Fabricate & Install
          </div>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 font-['Outfit'] tracking-tight">
            Our <span className="text-orange-gradient">Ironworks</span> Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Certified arc welding, structural steel frameworks, and decorative architectural ironworks — built with heavy-gauge steel for long-lasting durability across Sri Lanka.
          </p>
        </div>

        {/* ─── User-Friendly Controls: Category Tabs & Search Bar ─── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. gates, roofs)..."
              className="w-full pl-9.5 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white text-slate-800 transition-all"
              aria-label="Filter ironworks services"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ─── Zero Results State ─── */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 my-6">
            <Info className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching services found</h3>
            <p className="text-slate-500 text-sm mb-4">
              We couldn't find any ironworks service matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ─── Services Visual Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((svc) => {
            const SvcIcon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* ── Clean, Unobstructed Landscape Photo ── */}
                <div 
                  className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setActiveModalService(svc)}
                  title={`View details for ${svc.title}`}
                >
                  <img
                    src={svc.image}
                    alt={`${svc.title} by Vasantha Iron Works`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Clean Top-Left Tag Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-950/85 backdrop-blur-md text-white shadow-md border border-white/10">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Top-Right "View Details" Pill on hover */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-orange-600 text-white shadow-md">
                      <Maximize2 className="w-3 h-3" />
                      <span>Details</span>
                    </span>
                  </div>
                </div>

                {/* ── Card Content Body ── */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon + Title + Tagline */}
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${svc.accent} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                        <SvcIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit'] group-hover:text-orange-600 transition-colors leading-snug">
                          {svc.title}
                        </h3>
                        <p className="text-xs font-semibold text-orange-600 tracking-wide mt-0.5">
                          {svc.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Clear, Complete Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    {/* Key Feature Bullets */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 mb-5">
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Card Action Buttons (Quote & Specs) ── */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleSelect(svc.contactService)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all cursor-pointer group/btn"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveModalService(svc)}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors cursor-pointer"
                      title="View specifications & material details"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Quality & Trust Pillars ─── */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Custom Dimensions</p>
              <p className="text-[11px] text-slate-500">Fabricated to exact millimetres</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Anti-Rust Primer</p>
              <p className="text-[11px] text-slate-500">Zinc phosphate weather protection</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Free Site Visit</p>
              <p className="text-[11px] text-slate-500">Bandarawela & surrounding areas</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Fast 24h Quotation</p>
              <p className="text-[11px] text-slate-500">Itemized transparent pricing</p>
            </div>
          </div>
        </div>

        {/* ─── Bottom CTA Banner ─── */}
        <div className="mt-10 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold mb-3 border border-orange-500/30">
                <Flame className="w-3.5 h-3.5" />
                <span>Need a Custom Size or Unique Design?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-['Outfit']">
                Have a Blueprint or Photo of What You Want?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Send us your sketch, site measurements, or reference photo. We calculate exact steel gauges and provide a transparent quotation within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a 
                href="#contact" 
                onClick={() => handleSelect('Custom Ironworks & Welding')}
                className="btn-primary text-sm px-7 py-3.5 w-full sm:w-auto justify-center"
              >
                <Flame className="w-4 h-4" aria-hidden="true" />
                <span>Get Free Quotation</span>
              </a>
              <a
                href="https://wa.me/94763207873?text=Hello%20Vasantha%20Iron%20Works,%20I%20have%20a%20custom%20fabrication%20requirement."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ─── Service Detail Modal (User-Friendly Specs & Direct Quote) ─── */}
      {activeModalService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setActiveModalService(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Tag in Header */}
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-600 text-white mb-2 inline-block">
                  {activeModalService.tag}
                </span>
                <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                  {activeModalService.title}
                </h3>
                <p className="text-amber-300 text-xs sm:text-sm font-medium mt-0.5">
                  {activeModalService.tagline}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Service Overview</h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeModalService.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-orange-600" />
                  Technical Specifications & Materials
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <p className="font-semibold text-slate-500 uppercase text-[10px] mb-1">Standard Materials</p>
                    <p className="text-slate-800 font-medium">{activeModalService.specs.material}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <p className="font-semibold text-slate-500 uppercase text-[10px] mb-1">Surface Finish</p>
                    <p className="text-slate-800 font-medium">{activeModalService.specs.finish}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <p className="font-semibold text-slate-500 uppercase text-[10px] mb-1">Common Applications</p>
                    <p className="text-slate-800 font-medium">{activeModalService.specs.applications}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <p className="font-semibold text-slate-500 uppercase text-[10px] mb-1">Quality Assurance</p>
                    <p className="text-slate-800 font-medium">{activeModalService.specs.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    const svc = activeModalService.contactService;
                    setActiveModalService(null);
                    handleSelect(svc);
                  }}
                  className="w-full sm:flex-1 btn-primary py-3 px-6 text-xs sm:text-sm font-bold justify-center cursor-pointer"
                >
                  <Flame className="w-4 h-4" />
                  <span>Request Quote for {activeModalService.title}</span>
                </button>

                <a
                  href={buildServiceWhatsAppUrl(activeModalService.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
