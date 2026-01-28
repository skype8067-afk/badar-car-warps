
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <a href="#" className="text-3xl font-serif font-black tracking-tighter">
              BADAR<span className="text-zinc-600">.</span>
            </a>
            <p className="text-zinc-500 mt-4 max-w-xs text-sm">
              Premium design and vehicle branding solutions since 2015. 
              Built on precision, innovation, and trust.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Projects</a>
            <a href="#consultant" className="hover:text-white transition-colors">Design Lab</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
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
