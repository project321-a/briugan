import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'ti ti-layout-dashboard',
      title: 'Live Trade Dashboard',
      copy: 'A real-time command centre showing your total pipeline, active deals by market, recent activity, and alerts — all on one screen the moment you log in.'
    },
    {
      icon: 'ti ti-briefcase',
      title: 'Deal Room & Collaboration',
      copy: 'Every trade opportunity gets its own deal room — Kanban pipeline, deal chat, document folder, compliance checklist, and stage-by-stage progress tracking.'
    },
    {
      icon: 'ti ti-sparkles',
      title: 'AI Match Engine',
      copy: 'Claude AI analyses your company profile and target markets, then surfaces the highest-fit verified partners — ranked by deal potential, sector match, and readiness.'
    },
    {
      icon: 'ti ti-ship',
      title: 'Export Hub',
      copy: 'Track every shipment in real time — from Mombasa Port to Kampala, Kigali, or Dar es Salaam. Customs checklist, border alerts, and corridor performance data included.'
    },
    {
      icon: 'ti ti-coin',
      title: 'Trade Finance Desk',
      copy: 'Access pre-export finance, FX forward contracts, and invoice financing directly through the platform — with Briugan-negotiated terms from partner financial institutions.'
    },
    {
      icon: 'ti ti-file-text',
      title: 'AI Proposal Generator',
      copy: 'Generate a complete, branded commercial proposal in seconds using Claude AI — pre-filled with your client data, target markets, products, and deal context.'
    },
    {
      icon: 'ti ti-world',
      title: 'Partner Marketplace',
      copy: 'Browse and filter verified buyers, distributors, and institutional partners across East Africa — with match scores, sector tags, deal history, and direct connection requests.'
    },
    {
      icon: 'ti ti-file-certificate',
      title: 'Policy & Compliance Tracker',
      copy: 'Monitor import permits, product certificates, and regulatory requirements across all your active markets — with deadline alerts and direct action prompts before anything expires.'
    }
  ];

  return (
    <section className="py-[90px] px-7 bg-white" id="features">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[52px] fade-up visible">
          <div className="flex items-center justify-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">Platform Features</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-brand-navy leading-[1.18] mb-4 font-bold">
            Everything your trade operation needs, <em className="text-brand-gold2 not-italic">in one place</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-brand-muted max-w-[560px] mx-auto">
            Thirteen fully built modules. One login. Every deal, document, partner, shipment, and compliance requirement tracked from start to close.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[52px]">
          {features.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-[14px] p-7 flex gap-[18px] items-start transition-all duration-200 hover:border-brand-gold hover:shadow-[0_8px_24px_rgba(212,175,55,0.1)] fade-up visible">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/6 flex items-center justify-center text-[22px] text-brand-navy flex-shrink-0">
                <i className={f.icon}></i>
              </div>
              <div>
                <h3 className="text-[14px] font-extrabold text-brand-navy mb-2">{f.title}</h3>
                <p className="text-[12px] leading-[1.7] text-brand-muted">{f.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
