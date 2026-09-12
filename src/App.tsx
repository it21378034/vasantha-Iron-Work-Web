import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Gates');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuote} />

      {/* Hero Section */}
      <main>
        <Hero onOpenQuoteModal={handleOpenQuote} />
        <About />
        <Services onSelectService={handleSelectService} />
        <Gallery />
        <WhyChooseUs />
        <WorkProcess />
        <Testimonials />
        <Contact initialService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
