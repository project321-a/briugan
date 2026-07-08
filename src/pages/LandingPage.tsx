import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { RegistrationModal } from '../components/RegistrationModal';
import { useNavigate } from 'react-router-dom';
import { LayoutList, Briefcase, Zap, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const LandingPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const navigate = useNavigate();

  const openRegModal = () => setIsRegModalOpen(true);
  const closeRegModal = () => setIsRegModalOpen(false);

  const discoverCards = [
    {
      title: "Trade Feed",
      desc: "Live opportunities from verified regional partners.",
      icon: <LayoutList size={28} className="text-brand-gold" />,
      path: "/feed",
      color: "bg-emerald-500/5",
    },
    {
      title: "Deal Room",
      desc: "Structured opportunities ready for execution.",
      icon: <Briefcase size={28} className="text-brand-gold" />,
      path: "/deals",
      color: "bg-blue-500/5",
    },
    {
      title: "Our Services",
      desc: "Comprehensive infrastructure for African trade.",
      icon: <Zap size={28} className="text-brand-gold" />,
      path: "/services",
      color: "bg-amber-500/5",
    },
    {
      title: "Get in Touch",
      desc: "Ready to scale? Connect with our experts.",
      icon: <Phone size={28} className="text-brand-gold" />,
      path: "/contact",
      color: "bg-purple-500/5",
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar onJoin={openRegModal} />

      <main>
        <Hero onJoin={openRegModal} />

        {/* Stats Bar */}
        <div className="bg-brand-gold py-6 px-6 relative z-10 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8">
            {[
              { v: "312", l: "Live opportunities" },
              { v: "87", l: "Verified partners" },
              { v: "9", l: "Active markets" },
              { v: "KES 9.6M", l: "Pipeline tracked" },
              { v: "24h", l: "Response window" }
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div className="text-center">
                  <div className="font-display text-2xl font-extrabold text-brand-navy">{s.v}</div>
                  <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">{s.l}</div>
                </div>
                {i < 4 && <div className="hidden lg:block w-px h-10 bg-brand-navy/15"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Discovery Grid */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">Explore the <span className="text-brand-gold italic">Network</span></h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">Access direct market entry infrastructure. Select a portal to discover verified trade opportunities and solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discoverCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => navigate(card.path)}
                  className={`group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col items-center text-center`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{card.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight size={12} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-5"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
             <h3 className="font-display text-3xl md:text-4xl text-white font-bold mb-6 leading-tight">Your product is ready for <span className="text-brand-gold italic">Africa.</span> We open the door.</h3>
             <p className="text-white/50 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">Join hundreds of verified companies scaling their trade operations across East and Central Africa with Briugan.</p>
             <button
               onClick={openRegModal}
               className="bg-brand-gold text-brand-navy px-10 py-4 rounded-xl font-extrabold text-sm shadow-xl shadow-brand-gold/10 hover:bg-brand-gold2 transition-all active:scale-95"
             >
               Get Started — Join the Network
             </button>
          </div>
        </section>

      </main>

      <Footer />

      <RegistrationModal isOpen={isRegModalOpen} onClose={closeRegModal} />
    </div>
  );
};
