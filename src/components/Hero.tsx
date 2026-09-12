import React from 'react';
import { WeldingSparksCanvas } from './WeldingSparksCanvas';
import { Flame, ShieldCheck, Hammer, ArrowRight, Star, CheckCircle, Zap, Clock } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const stats = [
    { value: '500+', label: 'Projects Done' },
    { value: '100%', label: 'Quality Guarantee' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const services = ['Iron Grills', 'Custom Gates', 'Roofing', 'Railings', 'Ceilings', 'Steel Fab'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0c10 0%, #0f1520 40%, #121820 100%)',
      }}
    >
      {/* Welding Sparks Animation */}
      <WeldingSparksCanvas />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-orange-600/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center min-h-[calc(100vh-96px)]">

          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-left space-y-7">

            {/* Top Live Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-bold tracking-widest text-orange-300 uppercase font-['Space_Grotesk']">
                  Sri Lanka's Expert Iron & Welding Specialists
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] font-['Outfit']">
                Strong{' '}
                <span
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Designs.
                </span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] font-['Outfit']">
                Expert{' '}
                <span
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Craft.
                </span>
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] font-['Outfit']">
                Built to{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white">Last.</span>
                  <span
                    className="absolute bottom-1 left-0 right-0 h-2 opacity-50 rounded"
                    style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24)' }}
                  />
                </span>
              </h1>
            </div>

            {/* Sub Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional ironworks and welding solutions for homes, businesses, and construction projects. From heavy-duty gates and grills to roofing structures, ceilings, and custom steel fabrication.
            </p>

            {/* Service Pill Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm hover:border-orange-500/50 hover:text-orange-300 transition-all cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                onClick={onOpenQuoteModal}
                className="relative w-full sm:w-auto group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl text-white font-bold text-sm uppercase tracking-wider shadow-2xl">
                  <Flame className="w-5 h-5 animate-pulse" />
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-slate-600/80 bg-white/5 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-wider hover:border-slate-400 hover:bg-white/10 transition-all"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-2 border-t border-slate-800 mt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Free Quotation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Custom Fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[500px]">

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 group"
                style={{ background: 'linear-gradient(145deg, #1a1f2e, #111520)' }}
              >
                {/* Inner Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-orange-500/20 pointer-events-none z-20" />

                {/* Hero Image */}
                <div className="relative h-[380px] sm:h-[430px] overflow-hidden">
                  <img
                    src="/images/hero_welding.jpg"
                    alt="Vasantha Iron Works Welder Arc Welding Steel Beam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'brightness(0.85) contrast(1.1)' }}
                  />

                  {/* Rich Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1520] via-[#0f1520]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f1520]/50 via-transparent to-transparent" />

                  {/* Welding Arc Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-orange-500/25 rounded-full blur-3xl animate-spark-pulse pointer-events-none" />

                  {/* ── Floating Logo Badge ── */}
                  <div className="absolute top-4 left-4 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/80">
                    <img
                      src="/logo.png"
                      alt="Vasantha Iron Works"
                      className="w-10 h-10 rounded-full object-contain border border-slate-200 shadow-sm"
                    />
                    <div>
                      <div className="text-xs font-black uppercase text-slate-900 tracking-wider font-['Outfit']">Vasantha</div>
                      <div className="text-[10px] font-bold uppercase text-orange-600 tracking-widest">Iron Works</div>
                    </div>
                  </div>

                  {/* ── Rating Floating Badge ── */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 shadow-xl">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                    <span className="text-xs font-black text-white">5.0 Rated</span>
                  </div>

                  {/* ── Status Bottom Bar ── */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80">
                    <div>
                      <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-0.5">Heavy Duty Fabrication</div>
                      <div className="text-[11px] text-slate-300 font-medium">Grills • Gates • Roofing • Railings</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-bold">Active</span>
                    </div>
                  </div>
                </div>

                {/* ── Stats Row inside card ── */}
                <div className="grid grid-cols-3 divide-x divide-slate-700/60 border-t border-slate-700/60">
                  {stats.map((stat) => (
                    <div key={stat.label} className="py-4 px-3 text-center hover:bg-slate-800/40 transition-colors">
                      <div
                        className="text-xl font-black font-['Outfit']"
                        style={{
                          background: 'linear-gradient(135deg, #f97316, #fbbf24)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Corner Welding Bracket Decorations ── */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-orange-500 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-orange-500 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-orange-500 rounded-br-lg" />

              {/* ── Floating Feature Cards ── */}
              <div className="absolute -left-5 top-1/4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Hammer className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Precision</div>
                  <div className="text-xs font-bold text-white">Arc Welding</div>
                </div>
              </div>

              <div className="absolute -right-5 bottom-28 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Guaranteed</div>
                  <div className="text-xs font-bold text-white">Quality Finish</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
