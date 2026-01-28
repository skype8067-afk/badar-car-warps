
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-10">Start the <br /><span className="text-zinc-600">Conversation.</span></h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Our Studio</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    123 Design District, Suite 500<br />
                    Creative Hub, NY 10013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Email Us</h4>
                  <p className="text-zinc-400 text-lg">hello@badar.design</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-zinc-900 rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Call Directly</h4>
                  <p className="text-zinc-400 text-lg">+1 (555) 0123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-zinc-900">
              <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-600 mb-6">Social Connection</h4>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-10 md:p-16 border border-zinc-900">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input type="text" className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Needed</label>
                <select className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors appearance-none">
                  <option className="bg-black">Vehicle & Car Wraps</option>
                  <option className="bg-black">Storefront & Signage</option>
                  <option className="bg-black">Brand Identity</option>
                  <option className="bg-black">Web & Digital</option>
                  <option className="bg-black">Print & Marketing</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Description</label>
                <textarea className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-colors min-h-[120px] resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-all">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
