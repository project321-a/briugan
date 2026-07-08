import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DealRoom } from '../components/DealRoom';
import { RegistrationModal } from '../components/RegistrationModal';

export const DealsPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar onJoin={() => setIsRegModalOpen(true)} />
      <main className="pt-16">
        <DealRoom />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
    </div>
  );
};
