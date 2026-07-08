import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      initials: 'JN',
      name: 'John Ngugi',
      role: 'Director · New Italycor Ltd. · Nairobi',
      bg: 'bg-[#ecfdf5]',
      color: 'text-[#065f46]',
      quote: '"Briugan opened Uganda for us in four months. They handled the buyer introductions, the compliance paperwork, and the first shipment coordination. We closed our first KES 2.1M deal and now have three more in the pipeline."'
    },
    {
      initials: 'SN',
      name: 'Sarah Nankunda',
      role: 'F&B Manager · HospiBridge Ltd. · Tanzania',
      bg: 'bg-[#eff6ff]',
      color: 'text-[#1e40af]',
      quote: '"The deal room makes managing multiple markets actually manageable. Every document, every conversation, every compliance deadline is in one place. Our team stopped chasing emails and started closing deals."'
    },
    {
      initials: 'PH',
      name: 'Philippe Habimana',
      role: 'CEO · Rwanda Fresh Foods · Kigali',
      bg: 'bg-[#fdf4ff]',
      color: 'text-[#6b21a8]',
      quote: '"The AI match engine found us three qualified buyers in Rwanda within 48 hours of onboarding. The introductions were warm, credible, and led to a real conversation. That kind of speed changes how you think about market entry."'
    }
  ];

  return (
    <section className="py-[90px] px-7 bg-white" id="testimonials">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[52px] fade-up visible">
          <div className="flex items-center justify-center gap-[7px] mb-3.5">
            <div className="w-7 h-0.5 bg-brand-gold rounded-sm"></div>
            <span className="text-[10px] font-bold text-brand-gold2 tracking-[1.5px] uppercase">What Clients Say</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-brand-navy leading-[1.18] mb-4 font-bold">
            Results that <em className="text-brand-gold2 not-italic">speak for themselves</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[52px]">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-cream border border-gray-200 rounded-[14px] p-7 fade-up visible">
              <div className="flex gap-0.5 mb-3.5">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-brand-gold text-[14px]">★</span>)}
              </div>
              <div className="text-[13px] leading-[1.8] text-brand-text mb-5 italic">{t.quote}</div>
              <div className="flex items-center gap-3">
                <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center text-[13px] font-extrabold flex-shrink-0 ${t.bg} ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[12px] font-extrabold text-brand-navy">{t.name}</div>
                  <div className="text-[10px] text-brand-muted mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
