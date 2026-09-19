import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, X, Flame, ChevronRight, ChevronLeft, MapPin, Building2, Star, CheckCircle2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  slug: string;
  image: string;
  photos?: string[];
  description: string;
  tag: string;
}

interface ProjectPhoto {
  image: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [schoolPhoto, setSchoolPhoto] = useState<ProjectPhoto | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const schoolPhotos: ProjectPhoto[] = [
    {
      image: '/images/school_roof_completed.jpg',
      caption: 'Overall Contextual Site View — B/Athalapitiya Primary School',
    },
    {
      image: '/images/school_roof_installation.jpg',
      caption: 'Finishing Stage — Final Roofing Sheets Being Installed on Curved Steel Frame',
    },
    {
      image: '/images/school_roof_site_view.jpg',
      caption: 'Completed Front Elevation — Arched Canopy Roofing',
    },
    {
      image: '/images/school_roof_interior.jpg',
      caption: 'Interior Structural Detail — Curved Steel Frame & Roofing Sheet',
    },
  ];

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Gates', value: 'gates' },
    { label: 'Iron Grills', value: 'grills' },
    { label: 'Roofing', value: 'roofing' },
    { label: 'Ceiling Structures', value: 'ceiling-structures' },
    { label: 'Hand Railings', value: 'hand-railings' },
    { label: 'Outdoor Furniture', value: 'outdoor-furniture' },
    { label: 'Custom Work', value: 'custom-ironworks' },
  ];

  const items: GalleryItem[] = [
    { id: 1, title: 'Custom Matte Black Main Entrance Gate', category: 'Gates', slug: 'gates', image: '/images/custom_iron_gate.png', description: 'A custom-built double-swing main entrance driveway gate fabricated from heavy structural steel tubing and plates. Finished with a weather-resistant matte black coating, it features decorative 3D geometric pyramid panels, chrome boss accents, sturdy vertical security bars, and solid welded latch handles for maximum residential boundary protection.', tag: 'Heavy Gauge Steel' },
    { id: 2, title: 'Modern Security Window Grill', category: 'Iron Grills', slug: 'grills', image: '/images/custom_window_grill_2.png', description: 'High-strength steel window security grill designed for residential architectural aesthetics.', tag: 'Corrosion Resistant' },
    { id: 3, title: 'Heavy Structural Steel Roof Truss', category: 'Roofing', slug: 'roofing', image: '/images/roofing_structure.jpg', description: 'Welded steel roof truss framework engineered for commercial and industrial structures.', tag: 'Load Bearing' },
    {
      id: 12,
      title: 'Modern Wood-Finish Panel Ceiling with Recessed LED Lighting',
      category: 'Ceiling Structures',
      slug: 'ceiling-structures',
      image: '/images/ceiling_project_completed.jpg',
      photos: [
        '/images/ceiling_project_completed.jpg',
        '/images/ceiling_wood_finish_1.jpg',
        '/images/ceiling_wood_finish_2.jpg',
        '/images/ceiling_wood_finish_3.jpg',
        '/images/ceiling_wood_finish_4.jpg',
      ],
      description: 'A completed residential & commercial ceiling installation featuring premium wood-grain finish modular ceiling panels, durable metal framing structure, and neatly embedded circular LED downlights for a warm, modern aesthetic.',
      tag: 'Completed Work',
    },
    { id: 4, title: 'Exposed Steel Ceiling Framework', category: 'Ceiling Structures', slug: 'ceiling-structures', image: '/images/ceiling_structure.jpg', description: 'Industrial structural ceiling beam installation with precision welded cross bracing.', tag: 'Commercial Grade' },
    {
      id: 5,
      title: 'Veranda Safety Railing with Swing Gate',
      category: 'Hand Railings',
      slug: 'hand-railings',
      image: '/images/hand_railing_project.jpg',
      photos: [
        '/images/hand_railing_project.jpg',
        '/images/hand_railing_project_2.jpg',
      ],
      description: 'A precision-fabricated black steel veranda safety railing featuring modern vertical bars and an integrated swing gate. Constructed using 2 × 2 box bars and ¾ × ¾ box bars, the railing provides enhanced safety, durability, and a clean contemporary appearance, making it a practical and stylish addition to any home veranda.',
      tag: 'Heavy Gauge Steel',
    },
    { id: 6, title: 'Arc Welding Custom Fabrication', category: 'Custom Work', slug: 'custom-ironworks', image: '/images/hero_welding.jpg', description: 'Arc welding steel beam joinery crafted to custom client specifications in our workshop.', tag: 'Custom Build' },
    { id: 7, title: 'Small Vehicle Parking Canopy', category: 'Roofing', slug: 'roofing', image: '/images/parking_roof.jpg', description: 'A durable small vehicle parking structure designed with a strong steel frame and a protective roofing canopy. The structure is constructed using 2 × 2 box bars (4.7 mm thickness), GI pipes, and Amano roofing sheets, providing reliable support, weather protection, and long-lasting performance. It is suitable for protecting vehicles from sun and rain while maintaining a neat and practical appearance.', tag: 'Weather Protection' },
    { id: 8, title: 'Stainless Steel Staircase & Landing Railing', category: 'Hand Railings', slug: 'hand-railings', image: '/images/stainless_steel_stair_railing.jpg', description: 'A contemporary indoor stainless steel staircase and landing hand railing fabricated with durable stainless steel square tubing and vertical balusters. Delivers long-lasting rust-free durability, clean modern elegance, and reliable fall protection for homes and multi-story spaces.', tag: 'Stainless Steel' },
    { id: 10, title: 'Heavy-Duty Security Iron Grill', category: 'Iron Grills', slug: 'grills', image: '/images/iron_grill.jpg', description: 'Reinforced solid bar window grill offering maximum residential and business security.', tag: 'Maximum Security' },
    { id: 11, title: 'Steel Garden Swing Chair with Canopy', category: 'Outdoor Furniture', slug: 'outdoor-furniture', image: '/images/garden_swing_chair.jpg', description: 'A beautifully crafted outdoor garden swing seat fabricated from high-strength welded steel box tubing with a glossy white powder-coated finish. Features heavy-duty galvanised suspension chains, a slatted bench seat with armrests, and a protective blue polycarbonate sheet canopy roof for shade. Ideal for gardens, verandas, and outdoor relaxation spaces.', tag: 'Custom Build' },
  ];

  const filtered = activeCategory === 'all' ? items : items.filter(i => i.slug === activeCategory);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    } else {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
    }
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [activeCategory, filtered]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 390;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleScrollerTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: percentage * maxScroll,
      behavior: 'smooth',
    });
  };

  const selectCategory = (val: string) => {
    setActiveCategory(val);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-badge mb-4">
            <Flame className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our <span className="text-orange-gradient">Work</span> Showcase
          </h2>
          <p className="text-slate-600 text-lg">
            Real ironwork projects — from gates and grills to roofing structures and custom fabrication.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ─── FEATURED PROJECT: B/Athalapitiya Primary School ── */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-orange-100 shadow-2xl bg-white">

          {/* Project Header Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Decorative dots */}
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.6) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest">
                  ⭐ Featured Project
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                  Roofing Structure
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] leading-tight">
                B/Athalapitiya Primary School
              </h3>
              <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                Curved Arched Steel Canopy Roofing — Completed Project
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3">
              {[
                { icon: Building2, label: 'School Building', color: 'text-blue-400' },
                { icon: CheckCircle2, label: 'Fully Completed', color: 'text-emerald-400' },
                { icon: Star, label: 'Premium Finish', color: 'text-amber-400' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm">
                  <Icon className={`w-3.5 h-3.5 ${color} shrink-0`} />
                  <span className="text-xs font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="px-6 sm:px-10 py-5 bg-orange-50 border-b border-orange-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-slate-700 leading-relaxed flex-1">
              A landmark community project — Vasantha Iron Works designed and installed a large-span <strong className="text-orange-700">curved arched steel canopy roofing structure</strong> at the entrance of B/Athalapitiya Primary School. The structure features precision arc-welded steel frames with a beautiful curved arch profile, providing durable weather-resistant coverage.
            </p>
            <div className="flex-shrink-0 flex flex-col items-center px-5 py-3 rounded-2xl bg-orange-600 text-white text-center shadow-lg">
              <span className="text-2xl font-black font-['Outfit']">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Completed</span>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {schoolPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSchoolPhoto(photo)}
                className="group relative cursor-pointer overflow-hidden"
                style={{ height: '240px' }}
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Phase badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-lg bg-orange-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-sm shadow-md">
                    {idx === 0 ? 'Site View' : idx === 1 ? 'Finishing Stage' : idx === 2 ? 'Completed' : 'Interior Detail'}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white text-orange-600 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    {photo.caption.split('—')[0]}
                  </p>
                </div>

                {/* Dividers between photos */}
                {idx < schoolPhotos.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />
                )}
              </div>
            ))}
          </div>

          {/* Project Footer */}
          <div className="px-6 sm:px-10 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {['Arched Steel Frame', 'Curved Canopy Design', 'Arc Welding', 'Heavy Structural Steel', 'Community Project'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary text-xs py-2.5 px-5 flex-shrink-0">
              <span>Request Similar Project</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ─── More Projects Header & Category Tabs ─── */}
        <div className="mt-16 mb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">More Projects</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-orange-100 text-orange-600 border border-orange-200">
                  {filtered.length} {filtered.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>
              <p className="text-sm text-slate-500">
                Browse our completed ironworks — scroll with the bar below or use the arrows
              </p>
            </div>

            {/* Quick Navigation Buttons (Desktop & Tablet) */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${canScrollLeft
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 shadow-sm active:scale-95'
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                  }`}
                title="Scroll Left"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${canScrollRight
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 shadow-sm active:scale-95'
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                  }`}
                title="Scroll Right"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => selectCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.value
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Horizontal Project Scroller ─── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory project-scroller"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelected(item);
                setSelectedPhotoIdx(0);
              }}
              className="w-[85vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-white border border-slate-200"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${item.slug === 'grills' ? 'object-contain bg-slate-100' : 'object-cover'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 text-orange-600 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-orange-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white text-orange-600 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-base font-['Outfit'] group-hover:text-orange-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Interactive Scroller Bar Controls ─── */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Interactive Project Scroller</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 hidden sm:inline">Click or drag the scroller bar to explore</span>
          </div>

          {/* Interactive Scroller Track & Thumb */}
          <div className="flex items-center gap-3 w-full sm:w-auto flex-1 max-w-lg">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-1.5 rounded-lg border transition-all ${canScrollLeft
                ? 'bg-white text-slate-700 hover:text-orange-600 hover:border-orange-300 shadow-xs'
                : 'text-slate-300 border-transparent cursor-not-allowed'
                }`}
              title="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Clickable / Drag Scroller Bar */}
            <div
              onClick={handleScrollerTrackClick}
              className="relative flex-1 h-3.5 bg-slate-200/90 rounded-full cursor-pointer overflow-hidden p-0.5 shadow-inner hover:bg-slate-300/80 transition-colors"
              title="Click anywhere to jump scroll position"
            >
              {/* Dynamic Orange Scroller Thumb */}
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-sm transition-all duration-150"
                style={{
                  width: `${Math.max(20, Math.round(100 / Math.max(1, filtered.length)))}%`,
                  transform: `translateX(${scrollProgress * (1 - Math.max(0.2, 1 / Math.max(1, filtered.length))) * 1}%)`,
                }}
              />
            </div>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-1.5 rounded-lg border transition-all ${canScrollRight
                ? 'bg-white text-slate-700 hover:text-orange-600 hover:border-orange-300 shadow-xs'
                : 'text-slate-300 border-transparent cursor-not-allowed'
                }`}
              title="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <a href="#contact" className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors">
            <span>Discuss Custom Project</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* ─── School Photo Lightbox ─── */}
      {schoolPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setSchoolPhoto(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSchoolPhoto(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors shadow-2xl"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={schoolPhoto.image} alt={schoolPhoto.caption} className="w-full max-h-[75vh] object-contain bg-slate-900" />
              <div className="bg-slate-900 px-6 py-4 flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider">B/Athalapitiya Primary School</span>
                <p className="text-sm text-slate-200 font-medium">{schoolPhoto.caption}</p>
              </div>
            </div>
            {/* Navigate between photos */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {schoolPhotos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSchoolPhoto(p)}
                  className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${p.image === schoolPhoto.image ? 'border-orange-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Regular Item Lightbox ─── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
              <X className="w-5 h-5" />
            </button>
            <div className="h-[300px] sm:h-[450px] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={selected.photos && selected.photos[selectedPhotoIdx] ? selected.photos[selectedPhotoIdx] : selected.image}
                alt={selected.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Multiple Photos Thumbnail Strip */}
            {selected.photos && selected.photos.length > 1 && (
              <div className="bg-slate-900 px-6 py-2.5 border-t border-slate-800 flex items-center justify-center gap-2.5 overflow-x-auto">
                {selected.photos.map((photoSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIdx(idx)}
                    className={`h-12 w-16 sm:w-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      selectedPhotoIdx === idx
                        ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/40'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={photoSrc} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-lg bg-orange-100 text-orange-700 text-xs font-bold uppercase">{selected.category}</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold uppercase">{selected.tag}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">{selected.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{selected.description}</p>
              </div>
              <a href="#contact" onClick={() => setSelected(null)} className="btn-primary flex-shrink-0 text-xs py-3 px-6">
                <span>Inquire About This</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
