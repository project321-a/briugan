import React from 'react';
import { Ship, Building, Target, Zap, Layout, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe className="text-brand-gold" size={28} />,
    title: "Market Infrastructure",
    description: "Direct access to verified buyers, distributors, and HORECA networks across 6 regional markets."
  },
  {
    icon: <Target className="text-brand-gold" size={28} />,
    title: "Deal Structuring",
    description: "We don't just connect; we architect. We structure commercial agreements to ensure legal and financial safety."
  },
  {
    icon: <Layout className="text-brand-gold" size={28} />,
    title: "The Deal Room",
    description: "A private, secure workspace for every partnership—centralizing documentation, communication, and pipeline."
  },
  {
    icon: <Zap className="text-brand-gold" size={28} />,
    title: "AI Match Engine",
    description: "Our proprietary algorithm scores and matches your profile against thousands of verified opportunities."
  },
  {
    icon: <Ship className="text-brand-gold" size={28} />,
    title: "Export Hub",
    description: "Full-stack support for logistics, customs, RICA compliance, and regional distribution logistics."
  },
  {
    icon: <Building className="text-brand-gold" size={28} />,
    title: "Corporate Strategy",
    description: "Executive advisory for market entry, pricing strategy, and competitive positioning in Africa."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[10px] font-bold text-brand-gold tracking-[2px] uppercase">Full Stack Solutions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-brand-navy font-bold mb-6 leading-tight">
            Comprehensive infrastructure for <span className="text-brand-gold italic">African trade.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            We provide the end-to-end framework necessary to convert market potential into verified revenue. No office setup, no overhead—just deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-gold/10 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
