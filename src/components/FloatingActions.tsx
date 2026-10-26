import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick Contact & Actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Back To Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-2xl bg-slate-900/90 hover:bg-orange-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-orange-500 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Scroll back to top"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating Call & WhatsApp Buttons */}
      <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
        {/* Quick Phone Call Button */}
        <a
          href="tel:+94718658998"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/95 hover:bg-slate-800 text-white border border-orange-500/30 hover:border-orange-500 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Call Vasantha Iron Works"
          title="Call +94 718 658 998"
        >
          <div className="w-7 h-7 rounded-xl bg-orange-600/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide text-slate-200 group-hover:text-white">
            Call Us
          </span>
        </a>

        {/* Quick WhatsApp Chat Button */}
        <a
          href="https://wa.me/94763207873?text=Hello%20Vasantha%20Iron%20Works%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-600/40 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Chat with Vasantha Iron Works on WhatsApp"
        >
          {/* Subtle online beacon ping */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300 border-2 border-emerald-800"></span>
          </span>

          <MessageSquare className="w-5 h-5 shrink-0 fill-white/20" />
          <span className="text-xs font-black tracking-wide uppercase font-['Outfit']">
            WhatsApp Us
          </span>
        </a>
      </div>
    </aside>
  );
};
