import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Company Onboarding',
      copy: 'You complete a structured company profile. Briugan verifies your business, opens your private dashboard, and identifies your first trade opportunities.'
    },
    {
      num: '2',
      title: 'Partner Matching',
      copy: 'Our AI engine finds the best-fit verified buyers and distributors in your target markets. Briugan facilitates warm introductions and first meetings.'
    },
    {
      num: '3',
      title: 'Deal Management',
      copy: 'Every opportunity gets its own deal room with messaging, documents, stage tracking, compliance checklists, and Briugan-led negotiation support.'
    },
    {
      num: '4',
      title: 'Close & Scale',
      copy: 'Once the first market is proven, we replicate across corridors — new partners, new markets, faster timelines built on a track record that already exists.'
    }
  ];

  return (
    <section className="bg-brand-navy py-[90px] px-7" id="how">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[52px] fade-up visible">
          <div className="flex items-center justify-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">How It Works</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-white leading-[1.18] mb-4 font-bold">
            From inquiry to <em className="text-brand-gold2 not-italic">signed contract</em> — we manage every step
          </h2>
          <p className="text-[15px] leading-[1.75] text-white/50 max-w-[560px] mx-auto">
            Every client gets a private deal room on the Briugan platform. We track every opportunity, manage every document, and push every deal toward closure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative mt-[52px]">
          <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-px bg-brand-gold/20 z-0"></div>
          {steps.map((s, i) => (
            <div key={i} className="text-center relative z-[1] px-4 fade-up visible">
              <div className="w-[64px] h-[64px] rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mx-auto mb-5 text-[20px] text-brand-gold font-extrabold font-display relative transition-all duration-200 after:content-[''] after:absolute after:inset-[-4px] after:rounded-full after:border after:border-dashed after:border-brand-gold/20">
                {s.num}
              </div>
              <h3 className="text-[14px] font-extrabold text-white mb-2.5">{s.title}</h3>
              <p className="text-[12px] leading-[1.7] text-white/50">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
