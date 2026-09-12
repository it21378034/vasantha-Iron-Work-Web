import React from 'react';
import { MessageSquare, ClipboardList, FileCheck, Hammer, Sparkles } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      icon: MessageSquare,
      description: 'Reach out via our website form, phone, or WhatsApp with your ironwork project details.',
      color: 'from-orange-500 to-amber-500',
      light: 'bg-orange-50 border-orange-200 text-orange-600',
    },
    {
      number: '02',
      title: 'Discuss Requirements',
      icon: ClipboardList,
      description: 'We consult on design preferences, site measurements, material choices, and structural requirements.',
      color: 'from-blue-500 to-cyan-500',
      light: 'bg-blue-50 border-blue-200 text-blue-600',
    },
    {
      number: '03',
      title: 'Receive Quotation',
      icon: FileCheck,
      description: 'Get a detailed, transparent quote — material specs, pricing breakdown, and estimated timeline.',
      color: 'from-emerald-500 to-teal-500',
      light: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    },
    {
      number: '04',
      title: 'Build & Install',
      icon: Hammer,
      description: 'Our craftsmen fabricate your ironwork with precision and complete seamless on-site installation.',
      color: 'from-violet-500 to-purple-500',
      light: 'bg-violet-50 border-violet-200 text-violet-600',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            How We Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Simple <span className="text-orange-gradient">4-Step</span> Process
          </h2>
          <p className="text-slate-600 text-lg">
            A transparent, stress-free workflow from first inquiry to completed installation.
          </p>
        </div>

        {/* ─── Steps ─── */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px z-0">
            <div className="mx-auto max-w-5xl h-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 via-emerald-500 to-violet-500 opacity-30 rounded-full" />
              {/* Dots at each step */}
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow-md"
                  style={{ left: `calc(${(i / 3) * 100}% - 6px)` }} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="card-premium rounded-3xl p-7 group cursor-default relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                  {/* Step number badge */}
                  <div className="flex items-start justify-between mb-6">
                    <span className={`text-5xl font-black font-['Outfit'] opacity-15 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r ${step.color} bg-clip-text`}
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${step.light} group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit'] group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>

                  {/* Arrow (not last) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Bottom guarantee strip ─── */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">Ready to start your project?</h4>
            <p className="text-sm text-slate-600 mt-1">Free quotation, no obligation. Response within 24 hours.</p>
          </div>
          <a href="#contact" className="btn-primary text-sm flex-shrink-0">Get Started Today</a>
        </div>

      </div>
    </section>
  );
};
