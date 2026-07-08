import React from 'react';

export const StatsBar: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years combined experience' },
    { value: '9', label: 'Active trade markets' },
    { value: '87', label: 'Verified partners' },
    { value: 'KES 9.6M', label: 'Active pipeline' },
    { value: '67%', label: 'Inquiry-to-close rate' },
  ];

  return (
    <div className="bg-brand-gold py-[22px] px-7">
      <div className="max-w-[1180px] mx-auto flex flex-wrap justify-around items-center gap-4">
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div className="text-center">
              <div className="text-[28px] font-extrabold text-brand-navy font-display leading-none">{s.value}</div>
              <div className="text-[10px] font-bold text-brand-navy2/70 uppercase tracking-[0.8px] mt-1">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div className="hidden lg:block w-px h-10 bg-brand-navy/20"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
