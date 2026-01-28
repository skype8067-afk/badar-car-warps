
import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable full-screen mode: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-zinc-900' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between pointer-events-auto">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 text-2xl font-serif font-black tracking-tighter hover:text-zinc-300 transition-colors group"
        >
          <span className="flex items-end">
            BADAR
            <span className="w-1.5 h-1.5 bg-zinc-600 ml-1 mb-1.5"></span>
          </span>
        </button>
        
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase">
          <button onClick={() => scrollToSection('services')} className="hover:text-zinc-400 transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-zinc-400 transition-colors">Work</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-zinc-400 transition-colors">Reviews</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-zinc-400 transition-colors">Contact</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleFullScreen}
            className="p-2 text-zinc-400 hover:text-white transition-colors border border-zinc-800 rounded-md bg-black/20"
            title="Toggle Full Screen"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Enquire
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
