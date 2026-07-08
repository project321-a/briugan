import React from 'react';

export const Results: React.FC = () => {
  const results = [
    {
      icon: '📈',
      stat: '+24%',
      label: 'Average Pipeline Growth',
      copy: 'Clients on the Briugan platform see consistent quarter-on-quarter growth in active deal pipeline within the first six months.'
    },
    {
      icon: '🤝',
      stat: '67%',
      label: 'Inquiry-to-Close Rate',
      copy: 'Over two-thirds of qualified trade inquiries entering the Briugan Deal Room progress to a signed contract or supply agreement.'
    },
    {
      icon: '🌍',
      stat: '4.2d',
      label: 'Average Transit Time',
      copy: 'Briugan-managed shipments clear customs and reach destination warehouses in an average of 4.2 days across the Mombasa-to-region corridors.'
    },
    {
      icon: '🔍',
      stat: '87',
      label: 'Verified Network Partners',
      copy: 'Every buyer, distributor, and trade partner in the Briugan network has been independently verified for business registration and commercial capacity.'
    },
    {
      icon: '⚡',
      stat: '24h',
      label: 'Onboarding to First Deal',
      copy: 'New clients receive their first partner match recommendations and an open deal room within 24 hours of completing the Briugan onboarding process.'
    },
    {
      icon: '💰',
      stat: 'KES 9.6M',
      label: 'Active Deal Pipeline',
      copy: 'Combined value of deals currently being managed across the Briugan client portfolio — from initial inquiry through to signed supply agreements.'
    }
  ];

  return (
    <section className="py-[90px] px-7 bg-brand-navy" id="results">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[52px] fade-up visible">
          <div className="flex items-center justify-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">Results</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-white leading-[1.18] mb-4 font-bold">
            Numbers that reflect <em className="text-brand-gold2 not-italic">real trade outcomes</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-white/50 max-w-[560px] mx-auto">
            Our platform and advisory team exist to convert market access opportunities into closed deals and growing revenue streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[52px]">
          {results.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/9 rounded-[14px] p-7 fade-up visible">
              <div className="text-[28px] mb-4">{r.icon}</div>
              <div className="text-[36px] font-extrabold text-brand-gold font-display leading-none mb-1">{r.stat}</div>
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-[0.8px] mb-3">{r.label}</div>
              <p className="text-[12px] leading-[1.7] text-white/45">{r.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
