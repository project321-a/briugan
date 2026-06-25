import React from 'react';
import logo from '../assets/logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="bruigan logo" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading Pan-African market entry and deal execution infrastructure.
              Connecting global ambition with local opportunity.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Market Intelligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deal Structuring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Outreach</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic Advisory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold mb-6 text-lg">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">Nairobi Office: Karen, Nairobi, Kenya</p>
            <p className="text-gray-400 text-sm mb-4">Email: agui@bruigan.com</p>
            <p className="text-gray-400 text-sm">+254 714 112 066</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2026 bruigan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
