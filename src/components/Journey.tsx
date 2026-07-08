import React from 'react';

export const Journey: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Diagnostic & Opportunity Assessment',
      copy: 'We analyse your business, products, pricing, and target markets. Within 30 days you have a clear revenue opportunity assessment and a go-to-market plan ready for immediate execution.'
    },
    {
      num: 2,
      title: 'Sales Development & Customer Acquisition',
      copy: 'We build your sales pipeline, generate leads in priority sectors, and manage outreach to qualified buyers — putting a structured commercial engine behind your trade growth.'
    },
    {
      num: 3,
      title: 'Market Expansion & Export Development',
      copy: 'Once your home market model is proven, we replicate across Uganda, Tanzania, Rwanda, Ethiopia and DRC — with local distributor recruitment and trade promotion support in each corridor.'
    },
    {
      num: 4,
      title: 'Partnership & Revenue Growth',
      copy: 'Strategic commercial partnerships with retailers, hotel groups, food service operators, and wholesale distributors — generating sustainable, recurring revenue streams across multiple markets.'
    }
  ];

  return (
    <section className="py-[90px] px-7 bg-brand-cream" id="journey">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[52px] fade-up visible">
          <div className="flex items-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">Client Journey</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-brand-navy leading-[1.18] mb-4 font-bold">
            How companies grow <em className="text-brand-gold2 not-italic">with Briugan</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-brand-muted max-w-[560px]">
            We work with companies at every stage — from a first-time export to a structured multi-market distribution business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px] items-center mt-[52px]">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <div key={i} className={`flex gap-[18px] py-[22px] ${i < steps.length - 1 ? 'border-b border-gray-200' : ''} fade-up visible`}>
                <div className="w-9 h-9 rounded-full bg-brand-navy text-brand-gold text-[13px] font-extrabold flex items-center justify-center flex-shrink-0 font-display">{s.num}</div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-brand-navy mb-1.5">{s.title}</h3>
                  <p className="text-[12px] leading-[1.7] text-brand-muted">{s.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-navy rounded-[20px] p-7 relative overflow-hidden fade-up visible">
            <div className="text-[9px] font-bold text-brand-gold tracking-[1.5px] uppercase mb-4.5">Deal Pipeline · New Italycor Ltd.</div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Inquiry', count: '3 deals', color: 'bg-purple-800' },
                { name: 'Verification', count: '3 deals', color: 'bg-amber-800' },
                { name: 'Negotiation', count: '3 deals · KES 3.0M', color: 'bg-brand-gold', active: true },
                { name: 'Closing', count: '2 deals · KES 2.0M', color: 'bg-brand-ok' },
                { name: 'Completed', count: '2 deals · KES 4.3M', color: 'bg-gray-700' }
              ].map((stage, i) => (
                <div key={i} className={`bg-white/5 border border-white/8 rounded-[10px] p-[12px_14px] flex items-center justify-between gap-3 transition-all duration-200 ${stage.active ? 'bg-brand-gold/10 border-brand-gold/30' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${stage.color}`}></div>
                    <div className={`text-[11px] font-semibold ${stage.active ? 'text-brand-gold' : 'text-white/70'}`}>{stage.name}</div>
                  </div>
                  <div className={`text-[10px] font-bold ${stage.active ? 'text-brand-gold' : 'text-white/30'}`}>{stage.count}</div>
                </div>
              ))}
            </div>
            <div className="mt-[18px] pt-[18px] border-t border-white/8">
              <div className="text-[9px] font-bold text-white/30 uppercase tracking-[1px] mb-2.5">Markets active</div>
              <div className="flex gap-2 flex-wrap">
                {['🇰🇪 Kenya', '🇺🇬 Uganda', '🇹🇿 Tanzania', '🇷🇼 Rwanda'].map(m => (
                  <span key={m} className="text-[10px] font-semibold bg-brand-gold/12 border border-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-full">{m}</span>
                ))}
                <span className="text-[10px] font-semibold bg-white/5 border border-white/10 text-white/40 px-2.5 py-1 rounded-full">🇪🇹 Expanding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
