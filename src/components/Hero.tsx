import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,_rgba(212,175,55,0.1),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-gold mr-2"></span>
              Africa Market Entry Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Your Product is Ready for <span className="text-brand-gold">Africa.</span> <br />
              We Open the Door.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              bruigan is your on-the-ground revenue partner in Nairobi. We identify buyers,
              structure deals, and facilitate execution—compressing 12 months of setup into weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center bg-brand-gold text-brand-navy hover:bg-brand-gold/90">
                Book a discovery call <ArrowRight className="ml-2" size={18} />
              </button>
              <button className="btn-outline border-white/20 text-white hover:bg-white/10 flex items-center justify-center">
                See how it works <ChevronRight className="ml-1" size={18} />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">60</p>
                <p className="text-gray-500 text-sm">Days to Lead</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">Zero</p>
                <p className="text-gray-500 text-sm">Office Setup</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">54</p>
                <p className="text-gray-500 text-sm">Countries</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-brand-charcoal p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-2 w-12 bg-brand-gold rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded bg-brand-gold/20 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-sm bg-brand-gold"></div>
                        </div>
                        <div>
                          <div className="h-3 w-32 bg-gray-500 rounded mb-2"></div>
                          <div className="h-2 w-20 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div className="h-6 w-16 bg-brand-gold/10 border border-brand-gold/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded bg-brand-gold text-brand-navy font-bold text-center">
                  Verified Opportunity: East Africa Pipeline
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
