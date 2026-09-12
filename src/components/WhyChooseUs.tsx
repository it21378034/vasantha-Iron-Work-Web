import React from 'react';
import { ShieldCheck, Hammer, Sparkles, CheckCircle2, Clock, HeartHandshake, Flame, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    { icon: ShieldCheck, title: 'Quality Materials', description: 'High-grade structural steel and anti-corrosion iron for long-term strength in all projects.', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-100', hover: 'group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600' },
    { icon: Flame, title: 'Skilled Welding', description: 'Master arc welders ensuring deep joint penetration, clean seams, and precision load-bearing reliability.', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100', hover: 'group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600' },
    { icon: Sparkles, title: 'Custom Designs', description: 'Every project is tailored to your property dimensions, architectural layout, and style preferences.', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100', hover: 'group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600' },
    { icon: Hammer, title: 'Attention to Detail', description: 'Exact alignment, precise measurements, and immaculate surface finishes on every piece.', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100', hover: 'group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600' },
    { icon: Clock, title: 'Reliable & On-Time', description: 'Punctual project delivery and installation schedules you can always depend on.', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100', hover: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600' },
    { icon: HeartHandshake, title: 'Customer-First', description: 'Transparent quotes, open communication, and dedicated support from start to finish.', color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100', hover: 'group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600' },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-orange-300 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Two-column intro ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="section-badge mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Built on <span className="text-orange-gradient">Trust,</span>
              <br />Precision &amp; Strength
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We don't just build metal structures — we craft lasting value for your home, business, or construction project. Every weld, every joint, every finish is held to the highest standard.
            </p>
            <a href="#contact" className="btn-primary inline-flex">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: stacked testimonial-style trust block */}
          <div className="space-y-4">
            {[
              { percent: '100%', label: 'Client Satisfaction Rate', color: 'from-orange-500 to-amber-500' },
              { percent: '500+', label: 'Projects Successfully Completed', color: 'from-emerald-500 to-teal-500' },
              { percent: '0', label: 'Compromise on Quality Standards', color: 'from-blue-500 to-cyan-500' },
            ].map((item) => (
              <div key={item.label} className="card-premium rounded-2xl p-5 flex items-center gap-5">
                <div className={`text-3xl font-black stat-number font-['Outfit'] flex-shrink-0 w-24 text-center`}>{item.percent}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-700">{item.label}</div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: item.percent === '0' ? '100%' : item.percent }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 6 Pillar Cards ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card-premium rounded-2xl p-7 group cursor-default">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 transition-all duration-300 ${p.bg} ${p.color} ${p.hover}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-['Outfit'] group-hover:text-orange-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Our Promise
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
