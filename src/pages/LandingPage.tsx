import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { PlatformPreview } from '../components/PlatformPreview';
import { Features } from '../components/Features';
import { Results } from '../components/Results';
import { Journey } from '../components/Journey';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <HowItWorks />
        <PlatformPreview />
        <Features />
        <Results />
        <Journey />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
