import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PublicFeed } from '../components/PublicFeed';
import { RegistrationModal } from '../components/RegistrationModal';

export const FeedPage: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar onJoin={() => setIsRegModalOpen(true)} />
      <main className="pt-16">
        <PublicFeed onJoin={() => setIsRegModalOpen(true)} />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
    </div>
  );
};
