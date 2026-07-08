import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, CheckCircle, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  onJoin?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoin }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-[60px] overflow-hidden bg-brand-navy">
      {/* Grid Pattern */}
      <div className="absolute inset-0 hero-grid pointer-events-none opacity-100"></div>

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/22 rounded-full px-3.5 py-1.5 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
              <span className="text-[9px] font-bold text-brand-gold tracking-[1.5px] uppercase">East & Central Africa Trade Platform</span>
            </div>

            <h1 className="font-display text-[34px] md:text-[56px] text-white leading-[1.13] mb-5 font-bold">
              Your deals.<br />
              Your markets.<br />
              <span className="text-brand-gold italic">Your growth.</span>
            </h1>

            <p className="text-sm md:text-[14px] leading-relaxed text-white/60 mb-8 max-w-[460px]">
              Briugan connects companies to verified trade partners, manages the deal lifecycle, and drives commercial growth across East and Central Africa — from first inquiry to signed contract.
            </p>

            <div className="flex flex-wrap gap-3 mb-11">
              <button
                onClick={onJoin}
                className="flex items-center gap-2 text-xs font-extrabold px-6 py-3.5 bg-brand-gold text-brand-navy rounded-lg cursor-pointer transition-all hover:bg-brand-gold2 hover:-translate-y-0.5 shadow-lg shadow-brand-gold/10"
              >
                <Rocket size={14} /> Join the Network
              </button>
              <button className="flex items-center gap-2 text-xs font-extrabold px-6 py-3.5 bg-transparent text-white/80 border-[1.5px] border-white/20 rounded-lg cursor-pointer transition-all hover:border-brand-gold hover:text-brand-gold">
                <Eye size={14} /> Browse Opportunities
              </button>
            </div>

            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-[11px] text-white/45 font-medium">
                <CheckCircle size={14} className="text-brand-gold" /> Verified partners only
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/45 font-medium">
                <Lock size={14} className="text-brand-gold" /> Secure deal rooms
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/45 font-medium">
                <Sparkles size={14} className="text-brand-gold" /> AI-matched leads
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="absolute top-[-16px] right-[-20px] bg-brand-navy/92 border border-brand-gold/22 rounded-xl p-3 px-4 z-20 animate-float shadow-2xl">
              <div className="text-[8px] text-white/35 uppercase tracking-[0.8px] mb-1">Pipeline</div>
              <div className="font-display text-sm font-extrabold text-brand-gold">KES 9.6M</div>
              <div className="text-[9px] text-white/40 mt-0.5">↑ +24% this quarter</div>
            </div>

            <div className="absolute bottom-[-14px] left-[-18px] bg-brand-navy/92 border border-brand-gold/22 rounded-xl p-3 px-4 z-20 animate-float-delayed shadow-2xl">
              <div className="text-[8px] text-white/35 uppercase tracking-[0.8px] mb-1">AI match score</div>
              <div className="font-display text-sm font-extrabold text-brand-gold">94%</div>
              <div className="text-[9px] text-white/40 mt-0.5">Verified partner · Confirmed</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[18px] p-5 relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center text-xs font-extrabold text-brand-navy">
                  NI
                </div>
                <div>
                  <div className="text-xs font-bold text-white">New Italycor Ltd.</div>
                  <div className="text-[9px] text-white/40 mt-0.5">Premium Italian Food · Nairobi, Kenya</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-display text-lg font-bold text-brand-gold">5</div>
                  <div className="text-[8px] text-white/35 uppercase tracking-[0.5px] mt-0.5">Active deals</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-display text-lg font-bold text-brand-gold">KES 5.4M</div>
                  <div className="text-[8px] text-white/35 uppercase tracking-[0.5px] mt-0.5">Pipeline</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-display text-lg font-bold text-brand-gold">4</div>
                  <div className="text-[8px] text-white/35 uppercase tracking-[0.5px] mt-0.5">Markets</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-display text-lg font-bold text-brand-gold">Phase 3</div>
                  <div className="text-[8px] text-white/35 uppercase tracking-[0.5px] mt-0.5">Expansion</div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { flag: '🇺🇬', name: 'Kampala FMCG Distribution', value: '2.1M', status: 'Negotiating', color: 'text-blue-400', bg: 'bg-blue-400/15' },
                  { flag: '🇹🇿', name: 'Dar es Salaam Hotels', value: '1.4M', status: 'Closing', color: 'text-emerald-400', bg: 'bg-emerald-400/15' },
                  { flag: '🇷🇼', name: 'Kigali Premium Food', value: '850K', status: 'Verification', color: 'text-amber-400', bg: 'bg-amber-400/15' }
                ].map((deal, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <div className="text-sm">{deal.flag}</div>
                    <div className="text-[10px] font-bold text-white/75 flex-1 truncate">{deal.name}</div>
                    <div className="text-right">
                      <div className="text-[10px] font-extrabold text-brand-gold">{deal.value}</div>
                      <div className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${deal.bg} ${deal.color} mt-0.5`}>{deal.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
