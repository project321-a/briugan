import React from 'react';

export const PlatformPreview: React.FC = () => {
  return (
    <section className="py-[90px] px-7 bg-brand-cream" id="platform">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[52px] fade-up visible">
          <div className="flex items-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">The Platform</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-brand-navy leading-[1.18] mb-4 font-bold">
            One dashboard for every deal, <em className="text-brand-gold2 not-italic">every market</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-brand-muted max-w-[560px]">
            The Briugan Trade Platform gives every client a live view of their pipeline, active deals, compliance status, shipments, and partner introductions — all in one place.
          </p>
        </div>

        <div className="bg-brand-navy rounded-[20px] overflow-hidden shadow-[0_40px_80px_rgba(11,29,58,0.35)] mt-[52px] fade-up visible">
          <div className="bg-white/5 border-b border-white/8 p-[12px_20px] flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#28ca41]"></div>
            </div>
            <div className="flex-1 bg-white/6 rounded-md p-[5px_12px] text-[10px] text-white/30 font-semibold max-w-[280px] mx-auto text-center">
              briugan.com/platform · Secure
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] min-h-[360px]">
            <div className="bg-black/20 border-r border-white/6 py-4 hidden md:block">
              <div className="p-[8px_16px_14px] border-b border-white/6 mb-2">
                <div className="font-display text-[14px] text-brand-gold tracking-[1px]">BRIUGAN</div>
                <div className="text-[7px] text-white/20 tracking-[2px] uppercase mt-0.5">Trade Platform</div>
              </div>
              <div className="text-[7px] font-extrabold tracking-[1.5px] uppercase text-white/18 p-[10px_16px_4px]">Command</div>
              <div className="flex items-center gap-2 p-[7px_16px] text-[10px] text-brand-gold bg-brand-gold/8 border-l-2 border-brand-gold">
                <i className="ti ti-layout-dashboard text-[13px] w-3.5"></i>Dashboard
              </div>
              <div className="flex items-center gap-2 p-[7px_16px] text-[10px] text-white/40">
                <i className="ti ti-chart-bar text-[13px] w-3.5"></i>Analytics
              </div>
              <div className="text-[7px] font-extrabold tracking-[1.5px] uppercase text-white/18 p-[10px_16px_4px]">Operations</div>
              <div className="flex items-center gap-2 p-[7px_16px] text-[10px] text-white/40">
                <i className="ti ti-briefcase text-[13px] w-3.5"></i>Deal Room
              </div>
              <div className="flex items-center gap-2 p-[7px_16px] text-[10px] text-white/40">
                <i className="ti ti-ship text-[13px] w-3.5"></i>Export Hub
              </div>
              <div className="flex items-center gap-2 p-[7px_16px] text-[10px] text-white/40">
                <i className="ti ti-coin text-[13px] w-3.5"></i>Trade Finance
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3.5">
                {[
                  { v: 'KES 9.6M', l: 'Total Pipeline', d: '↑ +24% YoY' },
                  { v: '10', l: 'Active Deals', d: '↑ +3 month' },
                  { v: '87', l: 'Verified Partners', d: '↑ +12 new' },
                  { v: '9', l: 'Active Markets', d: 'E&C Africa' }
                ].map((k, i) => (
                  <div key={i} className="bg-white/5 border border-white/7 rounded-[9px] p-[11px_12px] border-l-2 border-brand-gold">
                    <div className="text-[17px] font-extrabold text-brand-gold font-display">{k.v}</div>
                    <div className="text-[8px] text-white/35 uppercase tracking-[0.5px] mt-0.5">{k.l}</div>
                    <div className="text-[8px] text-brand-ok mt-0.75">{k.d}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-2.5">
                <div className="bg-white/5 border border-white/8 rounded-[10px] p-3">
                  <div className="text-[8px] font-extrabold text-white/40 uppercase tracking-[0.6px] mb-2.5 border-b border-white/7 pb-1.5">Active Deals</div>
                  <div className="space-y-1.75">
                    {[
                      { f: '🇺🇬', n: 'Kampala FMCG Distribution', v: '2.1M', s: 'Negotiating', b: 'bg-blue-500/15 text-blue-400' },
                      { f: '🇹🇿', n: 'Dar es Salaam Hotels', v: '1.4M', s: 'Closing', b: 'bg-emerald-500/15 text-emerald-400' },
                      { f: '🇷🇼', n: 'Kigali Premium Food', v: '850K', s: 'Verification', b: 'bg-amber-500/15 text-amber-400' },
                      { f: '🇪🇹', n: 'Addis HORECA Partner', v: '680K', s: 'Verification', b: 'bg-amber-500/15 text-amber-400' }
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-1.75">
                        <div className="text-[12px]">{d.f}</div>
                        <div className="text-[9px] font-semibold text-white/70 flex-1 truncate">{d.n}</div>
                        <div className="text-[9px] font-extrabold text-brand-gold">{d.v}</div>
                        <span className={`text-[7px] font-bold p-[2px_6px] rounded-[10px] ${d.b}`}>{d.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/8 rounded-[10px] p-3">
                  <div className="text-[8px] font-extrabold text-white/40 uppercase tracking-[0.6px] mb-2.5 border-b border-white/7 pb-1.5">Market Reach</div>
                  <div className="space-y-2">
                    {[
                      { l: '🇰🇪 Kenya', p: '88%' },
                      { l: '🇺🇬 Uganda', p: '64%' },
                      { l: '🇹🇿 Tanzania', p: '47%' },
                      { l: '🇷🇼 Rwanda', p: '39%' },
                      { l: '🇪🇹 Ethiopia', p: '23%' }
                    ].map((m, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[8px] text-white/40 mb-0.75">
                          <span>{m.l}</span><span>{m.p}</span>
                        </div>
                        <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-gold" style={{ width: m.p }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
