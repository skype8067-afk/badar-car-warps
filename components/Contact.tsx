
import React, { useState } from 'react';
import { Check, Loader2, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: 'Vehicle & Car Wraps',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwo1ums9xPcTHip0ixRHKAZe4sdwDUqV3Bf-L_Ruwv0QLmdcbqQxiDIZsaYAhbG-C5qbg/exec';

    try {
      const params = new URLSearchParams();
      params.append('fullName', formData.fullName);
      params.append('email', formData.email);
      params.append('service', formData.service);
      params.append('description', formData.description);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ 
          fullName: '', 
          email: '', 
          service: 'Vehicle & Car Wraps', 
          description: '' 
        });
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a connection error. Please try again or email info@badarai.site directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black">
      {/* Enhanced Visibility Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70 overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <iframe
            src="https://streamable.com/e/2knb6h?autoplay=1&muted=1&loop=1&controls=0"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 contrast-110"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 Aspect Ratio
              minHeight: '120vh',
              minWidth: '177.77vh',
              border: 'none',
              transform: 'translate(-50%, -50%) scale(1.1)',
            }}
            allow="autoplay; fullscreen"
            title="Contact Background Video"
          ></iframe>
        </div>
      </div>
      
      {/* Softer Gradient Overlay to allow video visibility at the top while keeping bottom text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-[1]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight tracking-tighter">
                Start the <br />
                <span className="text-zinc-500">Conversation.</span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
                Whether you're looking for a fleet of vehicle wraps or a total brand overhaul, 
                our team is ready to deliver the Badar standard of excellence.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Email Our Studio</h4>
                  <p className="text-lg font-bold">info@badarai.site</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Direct Line</h4>
                  <p className="text-lg font-bold">+1 (555) 000-BADAR</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-500 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Our Presence</h4>
                  <p className="text-lg font-bold leading-relaxed">
                    Flagship Studio & Production Hub<br />
                    Premium Vehicle Branding Center
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/80 backdrop-blur-xl p-8 md:p-14 border border-zinc-900 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                  <Check size={48} className="text-black" />
                </div>
                <h3 className="text-4xl font-serif font-black mb-4">Brief Received.</h3>
                <p className="text-zinc-400 max-w-xs mx-auto text-lg leading-relaxed">
                  The Badar team will analyze your project vision and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-black text-white">Project Enquiry</h3>
                  <p className="text-zinc-400 text-sm">Tell us about your brand vision and surface requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input 
                      required 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text" 
                      className="bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700" 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Services Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option className="bg-zinc-900 text-white">Vehicle & Car Wraps</option>
                    <option className="bg-zinc-900 text-white">Storefront Signage & Shop Graphics</option>
                    <option className="bg-zinc-900 text-white">Brand Identity & Logo Design</option>
                    <option className="bg-zinc-900 text-white">Digital / Web / App Design</option>
                    <option className="bg-zinc-900 text-white">Marketing & Packaging Design</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Project Description & Vision</label>
                  <textarea 
                    required 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-colors min-h-[140px] resize-none placeholder:text-zinc-700" 
                    placeholder="Describe your project vision..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-zinc-200 transition-all transform active:scale-95 shadow-xl shadow-white/5 disabled:bg-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Submit Project Brief'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
