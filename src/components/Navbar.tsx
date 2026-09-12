import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-orange-500/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative p-1 rounded-full bg-white shadow-md border border-orange-500/30 group-hover:border-orange-500 transition-all duration-300">
            <img
              src="/logo.png"
              alt="Vasantha Iron Works Logo"
              className="h-11 w-11 sm:h-13 sm:w-13 object-contain rounded-full"
            />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-orange-500 rounded-full animate-ping opacity-75"></span>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-orange-500 rounded-full border-2 border-slate-900"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase text-white group-hover:text-orange-400 transition-colors font-['Outfit']">
              Vasantha
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-orange-400 uppercase -mt-1 font-['Space_Grotesk']">
              Iron Works & Welding
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#contact"
            onClick={onOpenQuoteModal}
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold tracking-wide text-white uppercase bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
          >
            <Flame className="w-4 h-4 mr-2 text-white animate-pulse" />
            <span>Get a Free Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-3">
          <a
            href="#contact"
            className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            aria-label="Get Quote"
          >
            <PhoneCall className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-orange-500/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-orange-400 hover:bg-slate-800 border-l-2 border-transparent hover:border-orange-500 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl shadow-lg shadow-orange-500/30"
            >
              <Flame className="w-5 h-5 mr-2 text-white" />
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
