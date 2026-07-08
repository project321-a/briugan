import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-brand-navy relative overflow-hidden flex flex-col justify-center pt-[68px]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] top-[-100px] right-[-100px] pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(30,80,160,0.2)_0%,transparent_70%)] bottom-[-100px] left-[10%] pointer-events-none"></div>

      <div className="max-w-[1180px] mx-auto px-7 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center relative z-[2]">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-gold/12 border border-brand-gold/25 rounded-full px-3.5 py-1.5 mb-5.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
            <span className="text-[10px] font-bold text-brand-gold tracking-[1.5px] uppercase">East & Central Africa Trade Platform</span>
          </div>
          <h1 className="text-[clamp(36px,4.5vw,62px)] text-white leading-[1.12] mb-5.5 font-bold">
            Your deals.<br />Your markets.<br /><em className="text-brand-gold not-italic">Your growth.</em>
          </h1>
          <p className="text-[15px] leading-[1.75] text-white/60 mb-9.5 max-w-[480px]">
            Briugan Consulting connects companies to verified trade partners, manages the deal lifecycle, and drives commercial growth across East and Central Africa — from first inquiry to signed contract.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-12.5">
            <Link to="/connect" className="btn-primary">
              <i className="ti ti-rocket text-[15px]"></i> Access the Platform
            </Link>
            <a href="mailto:info@briugan.com?subject=Briugan Trade Platform — New Company Request&body=Hello Briugan team,%0A%0AI would like to discuss a trade opportunity.%0A%0ACompany:%0ACountry:%0ATrade goal:%0A" className="btn-ghost">
              <i className="ti ti-calendar text-[15px]"></i> Book a Call
            </a>
          </div>
          <div className="flex gap-7 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-brand-gold/15 flex items-center justify-center text-brand-gold text-[14px]">
                <i className="ti ti-circle-check"></i>
              </div>
              <div className="text-[11px] text-white/50 font-medium">Verified buyers & distributors</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-brand-gold/15 flex items-center justify-center text-brand-gold text-[14px]">
                <i className="ti ti-lock"></i>
              </div>
              <div className="text-[11px] text-white/50 font-medium">Secure deal rooms</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[7px] bg-brand-gold/15 flex items-center justify-center text-brand-gold text-[14px]">
                <i className="ti ti-globe"></i>
              </div>
              <div className="text-[11px] text-white/50 font-medium">9 active markets</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute bg-brand-navy/90 border border-brand-gold/25 rounded-xl p-[11px_14px] backdrop-blur-md animate-[float_3s_ease-in-out_infinite] top-[-22px] right-[-28px]">
            <div className="text-[8px] text-white/40 uppercase tracking-[1px] mb-1">Pipeline</div>
            <div className="text-[16px] font-extrabold text-brand-gold font-display">KES 9.6M</div>
            <div className="text-[9px] text-white/50 mt-0.5">↑ +24% this quarter</div>
          </div>

          <div className="bg-white/6 border border-white/12 rounded-[20px] p-6 backdrop-blur-md">
            <div className="flex items-center gap-2.5 mb-4.5">
              <div className="w-9 h-9 rounded-[9px] bg-brand-gold flex items-center justify-center text-brand-navy text-[11px] font-extrabold">NI</div>
              <div>
                <div className="text-[12px] font-bold text-white">New Italycor Ltd.</div>
                <div className="text-[10px] text-white/45 mt-0.5">Premium Italian Food · Nairobi, Kenya</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <div className="bg-white/5 border border-white/8 rounded-[11px] p-3">
                <div className="text-[20px] font-extrabold text-brand-gold font-display mb-0.5">5</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.6px]">Active deals</div>
              </div>
              <div className="bg-white/5 border border-white/8 rounded-[11px] p-3">
                <div className="text-[20px] font-extrabold text-brand-gold font-display mb-0.5">4</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.6px]">Markets</div>
              </div>
              <div className="bg-white/5 border border-white/8 rounded-[11px] p-3">
                <div className="text-[20px] font-extrabold text-brand-gold font-display mb-0.5">KES 5.4M</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.6px]">Pipeline</div>
              </div>
              <div className="bg-white/5 border border-white/8 rounded-[11px] p-3">
                <div className="text-[20px] font-extrabold text-brand-gold font-display mb-0.5">Phase 3</div>
                <div className="text-[9px] text-white/40 uppercase tracking-[0.6px]">Expansion</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-[10px] p-[10px_12px]">
                <div className="text-[18px]">🇺🇬</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-white truncate">Kampala FMCG Distribution</div>
                  <div className="text-[9px] text-white/40 mt-0.5">Retail · Uganda</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-extrabold text-brand-gold">KES 2.1M</div>
                  <div className="mt-0.5"><span className="text-[8px] font-bold p-[3px_9px] rounded-full bg-blue-500/15 text-blue-400">Negotiating</span></div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-[10px] p-[10px_12px]">
                <div className="text-[18px]">🇹🇿</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-white truncate">Dar es Salaam Hotels</div>
                  <div className="text-[9px] text-white/40 mt-0.5">HORECA · Tanzania</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-extrabold text-brand-gold">KES 1.4M</div>
                  <div className="mt-0.5"><span className="text-[8px] font-bold p-[3px_9px] rounded-full bg-emerald-500/15 text-emerald-400">Closing</span></div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-[10px] p-[10px_12px]">
                <div className="text-[18px]">🇷🇼</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-white truncate">Kigali Premium Food</div>
                  <div className="text-[9px] text-white/40 mt-0.5">Distribution · Rwanda</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] font-extrabold text-brand-gold">KES 850K</div>
                  <div className="mt-0.5"><span className="text-[8px] font-bold p-[3px_9px] rounded-full bg-amber-500/15 text-amber-400">Verification</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bg-brand-navy/90 border border-brand-gold/25 rounded-xl p-[11px_14px] backdrop-blur-md animate-[float_3s_ease-in-out_infinite_1.5s] bottom-[-18px] left-[-24px]">
            <div className="text-[8px] text-white/40 uppercase tracking-[1px] mb-1">Match score</div>
            <div className="text-[16px] font-extrabold text-brand-gold font-display">94%</div>
            <div className="text-[9px] text-white/50 mt-0.5">AI partner match · Confirmed</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};
