import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { DealRoom } from '../components/DealRoom';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { PublicFeed } from '../components/PublicFeed';
import { RegistrationModal } from '../components/RegistrationModal';

export const LandingPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  const openRegModal = () => setIsRegModalOpen(true);
  const closeRegModal = () => setIsRegModalOpen(false);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar onJoin={openRegModal} />
      <main>
        <Hero onJoin={openRegModal} />

        {/* Stats Bar */}
        <div className="bg-brand-gold py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8">
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-brand-navy">312</div>
              <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">Live opportunities</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-brand-navy/15"></div>
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-brand-navy">87</div>
              <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">Verified partners</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-brand-navy/15"></div>
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-brand-navy">9</div>
              <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">Active markets</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-brand-navy/15"></div>
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-brand-navy">KES 9.6M</div>
              <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">Pipeline tracked</div>
            </div>
            <div className="hidden md:block w-px h-10 bg-brand-navy/15"></div>
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-brand-navy">24h</div>
              <div className="text-[9px] font-bold text-brand-navy/60 uppercase tracking-widest mt-1">Response window</div>
            </div>
          </div>
        </div>

        <PublicFeed onJoin={openRegModal} />
        <Services />
        <DealRoom />
        <Contact />
      </main>
      <Footer />

      <RegistrationModal isOpen={isRegModalOpen} onClose={closeRegModal} />
    </div>
  );
};
