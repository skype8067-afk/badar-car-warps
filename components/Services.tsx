
import React from 'react';
import { SERVICES } from '../constants.tsx';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">Expertise Across All Surfaces.</h2>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Our nine years of industry leadership mean we don't just design—we execute with absolute precision. 
            From 2D graphics to high-performance vehicle wraps, we handle everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className="bg-black p-12 group hover:bg-zinc-950 transition-all duration-500 border-b lg:border-r border-zinc-900"
              >
                <div className="mb-8 text-zinc-600 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={36} strokeWidth={1} />}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;