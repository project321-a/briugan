import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';
import { RegistrationModal } from '../components/RegistrationModal';

export const ServicesPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar onJoin={() => setIsRegModalOpen(true)} />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
    </div>
  );
};
