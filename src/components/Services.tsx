import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: 'ti ti-briefcase',
      title: 'Business Development',
      copy: 'We identify, qualify, and connect you to the right buyers, distributors, and trade partners so your sales pipeline grows faster with less guesswork.',
      tags: ['Buyer outreach', 'Partner matching', 'Introductions']
    },
    {
      icon: 'ti ti-map-pin',
      title: 'Market Expansion',
      copy: 'From Kenya to Uganda, Tanzania, Rwanda and beyond — we map the right entry strategy, identify local partners, and support your first successful trade across the border.',
      tags: ['Market entry', 'Corridor planning', 'Regional strategy']
    },
    {
      icon: 'ti ti-ship',
      title: 'Export Facilitation',
      copy: 'We manage the operational complexity of cross-border trade — shipment tracking, customs documentation, compliance requirements, and corridor route optimisation.',
      tags: ['Customs docs', 'Route planning', 'Clearance support']
    },
    {
      icon: 'ti ti-coin',
      title: 'Trade Finance Access',
      copy: 'We connect clients to pre-export finance, invoice financing, and favourable FX solutions through our banking and finance network — reducing cash flow friction on every deal.',
      tags: ['Pre-export finance', 'Invoice financing', 'FX hedging']
    },
    {
      icon: 'ti ti-file-certificate',
      title: 'Compliance & Regulatory',
      copy: 'Navigating product certification, import permits, and regulatory requirements across multiple markets simultaneously — we track deadlines and guide action so nothing blocks your shipments.',
      tags: ['Product compliance', 'Import permits', 'Regulatory tracking']
    },
    {
      icon: 'ti ti-sparkles',
      title: 'AI-Powered Matching',
      copy: 'Our Claude-powered match engine analyses your company profile and target markets, then surfaces the highest-fit verified partners across the Briugan network — ranked by deal potential and sector fit.',
      tags: ['AI partner match', 'Ranked leads', 'Deal scoring']
    }
  ];

  return (
    <section className="py-[90px] px-7 bg-brand-cream" id="services">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[52px] fade-up visible">
          <div className="flex items-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">What We Do</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-brand-navy leading-[1.18] mb-4 font-bold">
            Built for companies that want to <em className="text-brand-gold2 not-italic">grow across borders</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-brand-muted max-w-[560px]">
            Briugan provides hands-on trade advisory, partner introductions, and a dedicated platform to track every opportunity from inquiry to close.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-200 rounded-[14px] p-7 transition-all duration-200 relative overflow-hidden hover:border-brand-gold hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(212,175,55,0.12)] fade-up visible">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold to-brand-gold2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
              <div className="w-[50px] h-[50px] rounded-[13px] bg-brand-navy/6 flex items-center justify-center text-[22px] mb-[18px] text-brand-navy2 transition-all duration-200 group-hover:bg-brand-navy group-hover:text-brand-gold">
                <i className={s.icon}></i>
              </div>
              <h3 className="text-[15px] font-extrabold text-brand-navy mb-2.5">{s.title}</h3>
              <p className="text-[13px] leading-[1.75] text-brand-muted">{s.copy}</p>
              <div className="flex gap-1.5 flex-wrap mt-4">
                {s.tags.map((t, j) => (
                  <span key={j} className="text-[9px] font-bold text-brand-navy2 bg-brand-navy/6 px-[9px] py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
