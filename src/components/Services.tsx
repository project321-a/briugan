import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Globe, Users } from 'lucide-react';

const services = [
  {
    title: 'Market Intelligence',
    description: 'Bespoke research identifying the top local buyers, distributors, and enterprise partners for your specific product category.',
    icon: Search,
    color: 'bg-brand-gold/10 text-brand-gold'
  },
  {
    title: 'Deal Infrastructure',
    description: 'Structured execution for verified deals. We manage the capture-to-completion pipeline, including verification and escrow.',
    icon: Shield,
    color: 'bg-brand-gold/10 text-brand-gold'
  },
  {
    title: 'On-the-ground Outreach',
    description: 'We represent you in-person, navigating local procurement and cultural nuances to close agreements without you leaving home.',
    icon: Globe,
    color: 'bg-brand-gold/10 text-brand-gold'
  },
  {
    title: 'Strategic Networking',
    description: 'Access the most anticipated African industry meet-ups and connect with prominent business leaders across the continent.',
    icon: Users,
    color: 'bg-brand-gold/10 text-brand-gold'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">A Unified Platform for Pan-African Success</h3>
          <p className="text-gray-600 text-lg">
            We've merged market intelligence, deal execution, and high-level networking into
            a single, exquisite infrastructure for your expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/20 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
