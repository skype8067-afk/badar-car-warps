
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-3xl font-serif font-black tracking-tighter"
            >
              BADAR<span className="text-zinc-600">.</span>
            </button>
            <p className="text-zinc-500 mt-4 max-w-xs text-sm">
              Premium design and vehicle branding solutions since 2015. 
              Built on precision, innovation, and trust.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="text-xs text-zinc-600 font-medium">
            &copy; {new Date().getFullYear()} Badar Creative. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
