import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Clock, Briefcase, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full px-3.5 py-1 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-navy"></div>
              <span className="text-[9px] font-bold text-brand-navy tracking-[1.5px] uppercase">Get Started</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-brand-navy font-bold leading-tight mb-6">
              Ready to scale your <span className="text-brand-gold italic">trade?</span>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-sm">
              Our team of experts will review your company profile and goals. Expect your private deal room and first partner matches within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: <CheckCircle className="text-emerald-500" size={20} />, text: 'Profile review & verification' },
                { icon: <Briefcase className="text-brand-gold" size={20} />, text: 'Private deal room setup' },
                { icon: <Sparkles className="text-blue-500" size={20} />, text: 'AI partner matching engine' },
                { icon: <Clock className="text-brand-navy/30" size={20} />, text: '24-hour turnaround' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-brand-navy/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. New Italycor Ltd."
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Market of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-brand-gold outline-none transition-all appearance-none cursor-pointer">
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                    <option>Rwanda</option>
                    <option>Ethiopia</option>
                    <option>Regional Expansion</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Contact Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Business Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Briefly describe your goals</label>
                <textarea
                  rows={4}
                  placeholder="What are you looking to achieve?"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:bg-white focus:border-brand-gold outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-brand-navy text-brand-gold py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-brand-navy2 hover:shadow-lg shadow-brand-navy/10 active:scale-[0.98]">
                <Send size={18} /> Submit to Briugan
              </button>

              <p className="text-[10px] text-center text-gray-400">
                By submitting, you agree to our terms and confidential data handling policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
