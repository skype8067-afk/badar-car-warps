
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-10 text-3xl md:text-5xl font-serif font-black tracking-tighter hover:text-white transition-colors group text-left"
            >
              {/* Logo container forced to a perfect circle - increased size slightly */}
              <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 flex-shrink-0 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-zinc-500">
                <img 
                  src="https://i.postimg.cc/pX2DsKGL/logo.png" 
                  alt="Badar Logo" 
                  className="w-full h-full object-cover rounded-full scale-110" 
                />
              </div>
              <span className="flex items-end">
                BADAR
                {/* Brand dot as a sharp square */}
                <span className="w-2.5 h-2.5 bg-zinc-600 ml-2 mb-2 md:mb-3"></span>
              </span>
            </button>
            <p className="text-zinc-500 mt-10 max-w-sm text-sm leading-relaxed">
              Premium design and high-performance vehicle branding solutions since 2015. 
              Built on a foundation of precision, creative innovation, and industry-leading trust.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>

          <div className="text-xs text-zinc-600 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} Badar Creative. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
