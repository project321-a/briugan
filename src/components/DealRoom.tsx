import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Clock, MapPin, TrendingUp, ArrowRight } from 'lucide-react';

const deals = [
  {
    id: 'TR-492',
    title: 'East Africa FMCG Distribution',
    location: 'Nairobi, Kenya',
    valuation: 'KES 5.4M',
    status: 'Structuring',
    flag: '🇰🇪',
    type: 'Trade'
  },
  {
    id: 'TR-501',
    title: 'Kigali Premium Food Supply',
    location: 'Kigali, Rwanda',
    valuation: 'KES 850K',
    status: 'Verified',
    flag: '🇷🇼',
    type: 'HORECA'
  },
  {
    id: 'TR-512',
    title: 'Dar es Salaam Hotels',
    location: 'Dar es Salaam, TZ',
    valuation: 'KES 1.4M',
    status: 'Closing',
    flag: '🇹🇿',
    type: 'Contracts'
  }
];

export const DealRoom: React.FC = () => {
  return (
    <section id="deals" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[10px] font-bold text-brand-gold tracking-[2px] uppercase">The Deal Room</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Live Verified <span className="text-brand-gold italic">Opportunities</span></h3>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Browse our current pipeline of structured and verified deals. Every inquiry is market-verified by our Deal Stewards before appearing here.
            </p>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold px-6 py-3 border border-brand-gold/30 text-brand-gold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all mb-2">
            View All Deals <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-gold/40 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-wider text-white/40">
                  {deal.id}
                </span>
                <div className="flex items-center text-brand-gold text-[10px] font-bold uppercase tracking-tight">
                  <BadgeCheck size={14} className="mr-1.5" />
                  {deal.status}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{deal.flag}</span>
                <h4 className="text-lg font-bold group-hover:text-brand-gold transition-colors">{deal.title}</h4>
              </div>

              <div className="flex items-center text-white/40 text-xs mb-8">
                <MapPin size={14} className="mr-1.5" />
                {deal.location}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10 pt-8 border-t border-white/5">
                <div>
                  <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Value</p>
                  <p className="text-lg font-playfair font-bold text-brand-gold">{deal.valuation}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Sector</p>
                  <p className="text-lg font-playfair font-bold">{deal.type}</p>
                </div>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all text-xs font-bold flex items-center justify-center gap-2">
                Access Prospectus <TrendingUp size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-brand-gold/15 to-transparent border border-brand-gold/20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Subscription Required for Engagement</h4>
              <p className="text-white/40 text-sm leading-relaxed max-w-lg">To engage with verified deals and our Deal Stewards, a professional subscription is required. Gain full access to the Briugan network.</p>
            </div>
          </div>
          <button className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold text-sm whitespace-nowrap shadow-xl shadow-brand-gold/10 hover:bg-brand-gold2 transition-all active:scale-95">
            Explore Subscriptions
          </button>
        </div>
      </div>
    </section>
  );
};
