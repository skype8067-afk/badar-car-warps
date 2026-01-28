
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
        <a href="#" className="text-2xl font-serif font-black tracking-tighter hover:text-zinc-300 transition-colors">
          BADAR<span className="text-zinc-600">.</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-widest uppercase">
          <a href="#services" className="hover:text-zinc-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-zinc-400 transition-colors">Work</a>
          <a href="#consultant" className="hover:text-zinc-400 transition-colors">AI Brief</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleFullScreen}
            className="p-2 text-zinc-400 hover:text-white transition-colors border border-zinc-800 rounded-md bg-black/20"
            title="Toggle Full Screen"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
          
          <a 
            href="#contact" 
            className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Enquire
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
