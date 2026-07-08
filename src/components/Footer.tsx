import React from 'react';
import { Ship, Building, ShoppingCart, Globe, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/10 py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-display text-2xl text-brand-gold tracking-[2px] font-bold">BRIUGAN</div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Direct market entry infrastructure for Africa. We identify buyers, structure deals, and facilitate execution—compressing months into weeks.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-gold hover:border-brand-gold transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[2px] mb-6">Active Markets</h4>
            <ul className="space-y-3">
              {['Kenya (HQ)', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'DRC'].map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm text-white/50 hover:text-brand-gold cursor-pointer transition-colors">
                  <div className="w-1 h-1 rounded-full bg-brand-gold/30"></div> {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[2px] mb-6">Solutions</h4>
            <ul className="space-y-3">
              {[
                { name: 'Export Hub', icon: <Ship size={14} /> },
                { name: 'Deal Room', icon: <Globe size={14} /> },
                { name: 'AI Matching', icon: <Building size={14} /> },
                { name: 'Trade Finance', icon: <ShoppingCart size={14} /> }
              ].map((s) => (
                <li key={s.name} className="flex items-center gap-3 text-sm text-white/50 hover:text-brand-gold cursor-pointer transition-colors">
                  <span className="text-brand-gold/40">{s.icon}</span> {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[2px] mb-6">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={16} className="text-brand-gold/40" />
                <span>deals@briugan.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={16} className="text-brand-gold/40" />
                <span>+254 700 000 000</span>
              </div>
              <div className="pt-2">
                <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-3">
                  <div className="text-[10px] font-bold text-brand-gold mb-1 uppercase">Office</div>
                  <p className="text-xs text-white/40 leading-relaxed">Riverside Square, Westlands<br/>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30">
            © 2026 Briugan Consulting. All rights reserved. Registered in Kenya & UK.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
