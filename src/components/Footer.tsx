import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Share2, Globe, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Top gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* ─── Main Footer Grid ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Col 1-4: Brand */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-xl border border-slate-800 flex-shrink-0">
                <img src="/logo.png" alt="Vasantha Iron Works" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white font-['Outfit'] leading-tight">Vasantha Iron Works</div>
                <div className="text-xs text-orange-500 font-bold uppercase tracking-widest">Welding & Construction Metalwork</div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professional ironworks, custom welding, iron grills, gates, roofing structures, ceiling frameworks, hand railings, and precision steel fabrication — built to last.
            </p>

            {/* Social placeholders */}
            <div className="flex items-center gap-2.5">
              {[Globe, Share2, MessageCircle, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTA card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-600/10 border border-orange-500/20">
              <p className="text-sm text-slate-200 font-medium mb-3">Ready to start your ironwork project?</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors group">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 5-6: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white font-['Outfit'] border-b border-slate-800 pb-3">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[['Home', '#hero'], ['About Us', '#about'], ['Our Services', '#services'], ['Portfolio', '#gallery'], ['Why Choose Us', '#why-choose-us'], ['Our Process', '#process'], ['Contact', '#contact']].map(([name, href]) => (
                <li key={name}>
                  <a href={href} className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 7-9: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white font-['Outfit'] border-b border-slate-800 pb-3">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['Iron Grills', 'Security Gates', 'Roofing Structures', 'Ceiling Frameworks', 'Hand Railings', 'Custom Ironworks', 'Arc Welding Services'].map((s) => (
                <li key={s}>
                  <a href="#services" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 10-12: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white font-['Outfit'] border-b border-slate-800 pb-3">Get in Touch</h4>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: '+94 718 658 998', href: 'tel:+94718658998' },
                { icon: Mail, label: 'Email', value: 'vasanthaironworks@gmail.com', href: 'mailto:vasanthaironworks@gmail.com' },
                { icon: MapPin, label: 'Workshop', value: '100/E Railway Cross Road Diyathalawa.', href: 'https://maps.google.com/?q=100/E+Railway+cross+road+Diyathalawa' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-orange-600/20 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-600/30 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5 font-mono group-hover:text-orange-400 transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/94763207873?text=Hello%20Vasantha%20Iron%20Works%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/30 hover:scale-105"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="leading-none">Chat on WhatsApp</span>
              </span>
            </a>
          </div>

        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()}{' '}
            <strong className="text-slate-300">Vasantha Iron Works</strong>. All rights reserved.
            Professional Ironworks, Welding &amp; Steel Fabrication.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </button>
        </div>
      </div>

      {/* ─── Developer Watermark ─── */}
      <div className="border-t border-slate-900/60 mt-2 py-3">
        <p className="text-center text-[10px] text-slate-600 tracking-wide select-none">
          ✦ Software developed by{' '}
          <span className="text-slate-500 font-semibold">Deshitha Nayanajith</span>
          {' '}·{' '}
          <a
            href="tel:+94719468713"
            className="text-slate-500 hover:text-slate-400 transition-colors font-mono"
          >
            0719 468 713
          </a>
          {' '}✦
        </p>
      </div>
    </footer>
  );
};
