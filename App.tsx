
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Star } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        
        {/* Trusted Partners & Recommendations */}
        <Clients />

        <section id="stats" className="py-24 bg-zinc-950 border-y border-zinc-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center items-center">
              <div className="space-y-2">
                <h3 className="text-5xl font-black mb-2">9+</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Years of Expertise</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FACC15" className="text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-4xl font-black mb-2">5.0</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Google Rating</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-black mb-2">125+</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Verified Reviews</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-black mb-2">1.2k+</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Flawless Projects</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-zinc-400 text-sm tracking-widest uppercase font-medium">
                "Consistently the highest-rated agency in the region for precision branding and wraps."
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
