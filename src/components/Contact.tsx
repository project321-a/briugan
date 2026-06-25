import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8">Ready to enter Africa?</h3>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Tell us about your product and the market you're targeting. We'll come back
              with a clear picture of the opportunity, the right entry point, and exactly
              how bruigan gets you there.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-white shadow-sm text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-500">agui@bruigan.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-white shadow-sm text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-500">+254 714 112 066</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-white shadow-sm text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-lg mb-1">Based In</h4>
                  <p className="text-gray-500">Nairobi, Kenya — Africa market access</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-navy/5 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-0 transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-0 transition-colors outline-none" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-0 transition-colors outline-none" placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-navy mb-2">Your Product / Inquiry</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-0 transition-colors outline-none" placeholder="Describe your product and target market..."></textarea>
              </div>
              <button type="button" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
