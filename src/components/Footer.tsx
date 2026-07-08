import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070f1e] py-[56px] px-7">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div className="footer-brand">
            <div className="font-display text-[22px] text-brand-gold tracking-[2px] font-bold mb-3 flex items-center">
              BRIUGAN
            </div>
            <p className="text-[12px] leading-[1.75] text-white/35 max-w-[240px] mb-[18px]">
              Business growth, market access, and strategic partnership advisory for companies expanding across East and Central Africa.
            </p>
            <div className="flex flex-col gap-[7px]">
              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <i className="ti ti-mail text-[14px] text-brand-gold"></i>
                <span>info@briugan.com</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <i className="ti ti-phone text-[14px] text-brand-gold"></i>
                <span>+254 7XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <i className="ti ti-map-pin text-[14px] text-brand-gold"></i>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-extrabold text-white/50 uppercase tracking-[1.2px] mb-4">Services</div>
            <ul className="space-y-[9px] p-0 list-none">
              {['Business Development', 'Market Expansion', 'Export Facilitation', 'Trade Finance Access', 'Compliance & Regulatory', 'AI Partner Matching'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-[12px] text-white/40 no-underline transition-colors hover:text-brand-gold">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-extrabold text-white/50 uppercase tracking-[1.2px] mb-4">Platform</div>
            <ul className="space-y-[9px] p-0 list-none">
              {['Trade Dashboard', 'Deal Room', 'Partner Marketplace', 'Export Hub', 'Proposal Generator', 'Sign In'].map(s => (
                <li key={s}>
                  <a href="/connect" className="text-[12px] text-white/40 no-underline transition-colors hover:text-brand-gold">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-extrabold text-white/50 uppercase tracking-[1.2px] mb-4">Markets</div>
            <ul className="space-y-[9px] p-0 list-none">
              {['🇰🇪 Kenya', '🇺🇬 Uganda', '🇹🇿 Tanzania', '🇷🇼 Rwanda', '🇪🇹 Ethiopia', '🇨🇩 DRC'].map(s => (
                <li key={s}>
                  <a href="#" className="text-[12px] text-white/40 no-underline transition-colors hover:text-brand-gold">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/7 pt-6 flex justify-between items-center flex-wrap gap-3">
          <div className="text-[11px] text-white/20">© 2026 Briugan Consulting. All rights reserved. Nairobi, Kenya.</div>
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-3 py-1 text-[10px] text-brand-gold font-semibold">
            <i className="ti ti-shield-check text-[13px]"></i> Secure Trade Platform
          </div>
        </div>
      </div>
    </footer>
  );
};
