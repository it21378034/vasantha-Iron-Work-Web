import React from 'react';
import { Award, Compass, ShieldCheck, ThumbsUp, Wrench, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Quality Assured' },
    { value: '10+', label: 'Years of Expertise' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const trustPoints = [
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'Heavy-gauge steel and precision arc welding for structures that stand the test of time.',
      color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: Compass,
      title: 'Custom Designs',
      description: 'Tailored dimensions and decorative patterns crafted exactly to your specifications.',
      color: 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Service',
      description: 'Dependable execution from your first quotation all the way to final installation.',
      color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: 'We go beyond expectations to ensure every client is thrilled with their ironwork.',
      color: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Wrench className="w-3.5 h-3.5" />
            About Vasantha Iron Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Built on <span className="text-orange-gradient">Passion</span> &{' '}
            <span className="text-orange-gradient">Precision</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From custom grills and gates to roofing structures, ceilings, and hand railings — we focus on strength, precision, and your complete satisfaction.
          </p>
        </div>

        {/* ─── Main Content Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: Premium Statement Card + Image */}
          <div className="relative">
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img
                src="/images/hero_welding.jpg"
                alt="Vasantha Iron Works Craftsmanship"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.9) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Overlay Logo Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="Vasantha Iron Works"
                  className="w-14 h-14 rounded-2xl object-contain border border-slate-200 shadow-md flex-shrink-0"
                />
                <div>
                  <div className="text-base font-extrabold text-slate-900 font-['Outfit']">Vasantha Iron Works</div>
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-widest">Professional Ironworks & Welding</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    <span className="text-xs text-slate-500 ml-1">5.0 Rated Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex flex-col items-center justify-center shadow-2xl text-white animate-float border-4 border-white">
              <div className="text-2xl font-black font-['Outfit']">10+</div>
              <div className="text-[10px] font-bold text-center leading-tight px-1">Years Exp.</div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <p className="text-slate-800 text-lg leading-relaxed font-medium italic">
                "At Vasantha Iron Works, we provide reliable and high-quality ironworks and welding solutions. From custom grills and gates to roofing structures, ceilings, and hand railings, we focus on strong construction, precise workmanship, and customer satisfaction."
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Whether you need residential security grills, automated entrance gates, structural steel roofing, or custom balcony hand railings — our welding craftsmen deliver top-tier finish and durable, corrosion-resistant metal structures.
            </p>

            {/* Trust point mini-list */}
            <ul className="space-y-3">
              {['Heavy-gauge structural steel & quality iron', 'Precision MIG & arc welding techniques', 'Residential, commercial & industrial projects', 'On-site installation & post-service support'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary inline-flex">
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ─── Stats Bar ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-premium rounded-2xl p-6 text-center">
              <div className="stat-number text-4xl mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ─── 4 Trust Cards ─── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="card-premium rounded-2xl p-6 group cursor-default">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${point.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-['Outfit'] group-hover:text-orange-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
