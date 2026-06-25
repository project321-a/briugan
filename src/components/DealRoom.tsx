import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Clock, MapPin, TrendingUp } from 'lucide-react';

const deals = [
  {
    id: 'TR-492',
    title: 'East Africa FMCG Distribution',
    location: 'Nairobi, Kenya',
    valuation: '$4.2M',
    status: 'Structuring',
    type: 'Trade'
  },
  {
    id: 'TR-501',
    title: 'West Africa FinTech Gateway',
    location: 'Lagos, Nigeria',
    valuation: '$12.5M',
    status: 'Verified',
    type: 'Infrastructure'
  },
  {
    id: 'TR-512',
    title: 'Mining Equipment Procurement',
    location: 'Dar es Salaam, TZ',
    valuation: '$1.8M',
    status: 'Closing',
    type: 'Logistics'
  }
];

export const DealRoom: React.FC = () => {
  return (
    <section id="deals" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4">The Deal Room</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Live Verified Opportunities</h3>
            <p className="text-gray-400 text-lg">
              Browse our current pipeline of structured and verified deals across the continent.
              Our Deal Stewards ensure every inquiry is capture-ready and market-verified.
            </p>
          </div>
          <button className="btn-outline border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy mb-2">
            View All Deals
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-charcoal border border-white/10 rounded-2xl p-6 hover:border-brand-gold/40 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  {deal.id}
                </span>
                <div className="flex items-center text-brand-gold text-xs font-bold uppercase tracking-tight">
                  <BadgeCheck size={14} className="mr-1" />
                  {deal.status}
                </div>
              </div>

              <h4 className="text-xl font-bold mb-2">{deal.title}</h4>
              <div className="flex items-center text-gray-400 text-sm mb-6">
                <MapPin size={14} className="mr-1" />
                {deal.location}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Target Value</p>
                  <p className="text-lg font-bold">{deal.valuation}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Sector</p>
                  <p className="text-lg font-bold">{deal.type}</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold flex items-center justify-center group">
                Access Prospectus <TrendingUp size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-full bg-brand-gold/20 text-brand-gold">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Subscription Required for Engagement</h4>
              <p className="text-gray-400 text-sm">To engage with verified deals and Deal Stewards, a professional subscription is required.</p>
            </div>
          </div>
          <button className="btn-primary whitespace-nowrap">Explore Subscription</button>
        </div>
      </div>
    </section>
  );
};
