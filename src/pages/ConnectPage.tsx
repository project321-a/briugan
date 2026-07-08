import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const TOTAL_STEPS = 5;

const roleLabels: Record<string, string> = {
  importer: 'Importer / Buyer',
  exporter: 'Exporter / Seller',
  distributor: 'Distributor / Agent',
  horeca: 'Hotel / Restaurant',
  retail: 'Retailer / Supermarket',
  institution: 'Institutional Buyer',
};

const dealLabels: Record<string, string> = {
  under250: 'Under KES 250K',
  '250k-1m': 'KES 250K – 1M',
  '1m-5m': 'KES 1M – 5M',
  above5m: 'Above KES 5M',
};

const goalLabels: Record<string, string> = {
  partners: 'Find buyers / distributors',
  expand: 'Enter a new market',
  deals: 'Close deals faster',
  finance: 'Trade finance access',
  compliance: 'Compliance & documentation',
};

const timelineLabels: Record<string, string> = {
  asap: 'Immediately',
  '1month': 'Within 1 month',
  quarter: 'This quarter',
  year: 'This year',
};

export const ConnectPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    role: '',
    company: '',
    country: '',
    city: '',
    sector: '',
    size: '',
    name: '',
    title: '',
    email: '',
    phone: '',
    web: '',
    products: '',
    desc: '',
    markets: [] as string[],
    deal: '',
    frequency: '',
    goal: '',
    timeline: '',
    source: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);

  const update = (key: string, value: any) => setForm((prev) => ({ ...prev, [key]: value }));

  const goTo = (n: number) => {
    if (n < 1 || n > TOTAL_STEPS) return;
    setStep(n);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  };

  const validateStep = (n: number) => {
    const err: Record<string, string> = {};
    if (n === 1 && !form.role) err.role = 'Please select a role';
    if (n === 2) {
      if (!form.company.trim()) err.company = 'Company name required';
      if (!form.country) err.country = 'Country required';
      if (!form.city.trim()) err.city = 'City required';
      if (!form.sector) err.sector = 'Sector required';
      if (!form.name.trim()) err.name = 'Your name required';
      if (!form.title.trim()) err.title = 'Job title required';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        err.email = 'Valid email required';
    }
    if (n === 3) {
      if (!form.products.trim()) err.products = 'Products required';
      if (!form.desc.trim()) err.desc = 'Description required';
      if (form.markets.length === 0) err.markets = 'Select at least one market';
      if (!form.deal) err.deal = 'Select a deal size';
    }
    if (n === 4) {
      if (!form.goal) err.goal = 'Select a goal';
      if (!form.timeline) err.timeline = 'Select a timeline';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    if (step === TOTAL_STEPS) {
      handleSubmit();
      return;
    }
    goTo(step + 1);
  };

  const prev = () => goTo(step - 1);

  const handleSubmit = () => {
    setIsSubmitting(true);

    const subject = encodeURIComponent('New Company Connection — ' + form.company);
    const body = encodeURIComponent(
      'BRIUGAN TRADE PLATFORM — NEW COMPANY APPLICATION\n' +
      '═══════════════════════════════════════\n\n' +
      'COMPANY PROFILE\n' +
      'Company: ' + form.company + '\n' +
      'Country: ' + form.country + ' · City: ' + form.city + '\n' +
      'Sector: ' + form.sector + '\n' +
      'Size: ' + form.size + '\n' +
      'Website: ' + form.web + '\n\n' +
      'CONTACT\n' +
      'Name: ' + form.name + ' · ' + form.title + '\n' +
      'Email: ' + form.email + '\n' +
      'Phone: ' + form.phone + '\n\n' +
      'TRADE DETAILS\n' +
      'Role: ' + (roleLabels[form.role] || '—') + '\n' +
      'Products: ' + form.products + '\n' +
      'Description: ' + form.desc + '\n' +
      'Target markets: ' + form.markets.join(', ') + '\n' +
      'Deal size: ' + (dealLabels[form.deal] || '—') + '\n' +
      'Frequency: ' + form.frequency + '\n\n' +
      'GOALS\n' +
      'Primary goal: ' + (goalLabels[form.goal] || '—') + '\n' +
      'Timeline: ' + (timelineLabels[form.timeline] || '—') + '\n' +
      'How heard: ' + form.source + '\n' +
      'Notes: ' + form.notes + '\n\n' +
      '═══════════════════════════════════════\n' +
      'Submitted via Briugan Trade Platform — Connect Page'
    );

    setTimeout(() => {
      window.location.href = 'mailto:info@briugan.com?subject=' + subject + '&body=' + body;
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1400);
  };

  const renderStep = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return null;
    }
  };

  const renderStep1 = () => (
    <div className="animate-[fadeIn_0.3s_ease]">
      <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2.5">Step 1 — Who are you?</div>
      <h1 className="font-display text-[clamp(22px,2.5vw,30px)] text-brand-navy font-bold leading-[1.2] mb-2">How do you trade?</h1>
      <p className="text-[13px] text-brand-muted leading-[1.7] mb-8 max-w-[520px]">Select the role that best describes your company. This helps Briugan match you to the right partners and open the correct deal room type.</p>
      <div className="bg-brand-navy/4 border border-brand-navy/8 rounded-[9px] p-[10px_14px] mb-6 flex items-center gap-2">
        <i className="ti ti-building-skyscraper text-[18px] text-brand-navy shrink-0"></i>
        <div className="text-[10px] text-brand-muted leading-[1.4]"><strong className="text-brand-navy">Facilitated by Briugan Consulting</strong> — Your connection will be reviewed by the Briugan team and matched to verified partners in your target markets within 24 hours.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-7">
        {[
          { key: 'importer', icon: '📦', desc: 'You source products from outside your country and distribute or sell them locally.' },
          { key: 'exporter', icon: '🚢', desc: 'You manufacture or source products and want to sell into new markets across the region.' },
          { key: 'distributor', icon: '🔁', desc: 'You distribute or represent brands within a specific country or corridor.' },
          { key: 'horeca', icon: '🏨', desc: 'You procure food, beverage, or consumable products for hospitality operations.' },
          { key: 'retail', icon: '🛒', desc: 'You operate retail outlets and source products to stock on your shelves.' },
          { key: 'institution', icon: '🏛️', desc: 'You procure food, supplies, or goods for an institution, school, or corporate entity.' },
        ].map((item) => (
          <div
            key={item.key}
            className={`role-card ${form.role === item.key ? 'selected after:content-["✓"] after:absolute after:top-2.5 after:right-3 after:text-[11px] after:font-extrabold after:text-brand-ok' : ''}`}
            onClick={() => { update('role', item.key); setErrors((prev) => ({ ...prev, role: '' })); }}
          >
            <span className="text-[32px] mb-3 block">{item.icon}</span>
            <div className="text-[13px] font-extrabold text-brand-navy mb-1.5">{roleLabels[item.key]}</div>
            <div className="text-[11px] text-brand-muted leading-[1.5]">{item.desc}</div>
          </div>
        ))}
      </div>
      {errors.role && <div className="error-msg">{errors.role}</div>}
      <div className="flex justify-between items-center pt-2 mt-6 border-t border-gray-200">
        <div></div>
        <button className="bg-brand-navy text-brand-gold text-[12px] font-bold px-7 py-3 rounded-[10px] transition-all hover:bg-brand-navy2 hover:-translate-y-0.5 flex items-center gap-2" onClick={next}>
          Continue <i className="ti ti-arrow-right text-[14px]"></i>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-[fadeIn_0.3s_ease]">
      <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2.5">Step 2 — Company Profile</div>
      <h1 className="font-display text-[clamp(22px,2.5vw,30px)] text-brand-navy font-bold leading-[1.2] mb-2">Tell us about your company</h1>
      <p className="text-[13px] text-brand-muted leading-[1.7] mb-8 max-w-[520px]">This forms the core of your Briugan company workspace. Be as specific as possible — it helps us match you faster.</p>

      <div className="frow mb-4">
        <label htmlFor="company-name" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Company Name *</label>
        <input id="company-name" type="text" value={form.company} onChange={e => update('company', e.target.value)} placeholder="e.g. New Italycor Ltd." className={errors.company ? 'error' : ''} />
        <div className="text-[10px] text-brand-light mt-1">Enter your full registered company name.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
        <div className="frow">
          <label htmlFor="country" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Country of Operation *</label>
          <select id="country" value={form.country} onChange={e => update('country', e.target.value)} className={errors.country ? 'error' : ''}>
            <option value="">Select country…</option>
            <option>Kenya</option><option>Uganda</option><option>Tanzania</option>
            <option>Rwanda</option><option>Ethiopia</option><option>Democratic Republic of Congo</option>
            <option>Burundi</option><option>South Sudan</option><option>Zanzibar</option>
            <option>Other (East Africa)</option>
          </select>
        </div>
        <div className="frow">
          <label htmlFor="city" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">City / HQ Location *</label>
          <input id="city" type="text" value={form.city} onChange={e => update('city', e.target.value)} placeholder="e.g. Nairobi" className={errors.city ? 'error' : ''} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
        <div className="frow">
          <label htmlFor="sector" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Industry / Sector *</label>
          <select id="sector" value={form.sector} onChange={e => update('sector', e.target.value)} className={errors.sector ? 'error' : ''}>
            <option value="">Select sector…</option>
            <option>Food & Beverage Import</option>
            <option>Hospitality / HORECA</option>
            <option>Retail Distribution</option>
            <option>Food Service</option>
            <option>Manufacturing</option>
            <option>Wholesale / Logistics</option>
            <option>Agriculture & Agri-processing</option>
            <option>Consumer Goods</option>
            <option>Other</option>
          </select>
        </div>
        <div className="frow">
          <label htmlFor="company-size" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Company Size</label>
          <select id="company-size" value={form.size} onChange={e => update('size', e.target.value)}>
            <option value="">Select size…</option>
            <option>1–10 employees</option>
            <option>11–50 employees</option>
            <option>51–200 employees</option>
            <option>200+ employees</option>
          </select>
        </div>
      </div>

      <div className="h-px bg-gray-200 my-5"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
        <div className="frow">
          <label htmlFor="full-name" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Your Full Name *</label>
          <input id="full-name" type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="First and last name" className={errors.name ? 'error' : ''} />
        </div>
        <div className="frow">
          <label htmlFor="job-title" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Your Job Title *</label>
          <input id="job-title" type="text" value={form.title} onChange={e => update('title', e.target.value)} placeholder="e.g. Managing Director" className={errors.title ? 'error' : ''} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
        <div className="frow">
          <label htmlFor="business-email" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Business Email *</label>
          <input id="business-email" type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@company.com" className={errors.email ? 'error' : ''} />
        </div>
        <div className="frow">
          <label htmlFor="phone" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Phone / WhatsApp</label>
          <input id="phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+254 7XX XXX XXX" />
        </div>
      </div>

      <div className="frow mb-4">
        <label htmlFor="website" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Company Website (if any)</label>
        <input id="website" type="url" value={form.web} onChange={e => update('web', e.target.value)} placeholder="https://www.yourcompany.com" />
      </div>

      <div className="flex justify-between items-center pt-2 mt-6 border-t border-gray-200">
        <button className="inline-flex items-center gap-2 bg-transparent text-brand-muted text-[12px] font-semibold px-5 py-3 rounded-[10px] border border-gray-200 transition-all hover:border-gray-300 hover:text-brand-navy" onClick={prev}>
          <i className="ti ti-arrow-left text-[13px]"></i> Back
        </button>
        <button className="bg-brand-navy text-brand-gold text-[12px] font-bold px-7 py-3 rounded-[10px] transition-all hover:bg-brand-navy2 hover:-translate-y-0.5 flex items-center gap-2" onClick={next}>
          Continue <i className="ti ti-arrow-right text-[14px]"></i>
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-[fadeIn_0.3s_ease]">
      <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2.5">Step 3 — Trade Details</div>
      <h1 className="font-display text-[clamp(22px,2.5vw,30px)] text-brand-navy font-bold leading-[1.2] mb-2">What do you trade?</h1>
      <p className="text-[13px] text-brand-muted leading-[1.7] mb-8 max-w-[520px]">The more specific you are here, the better Briugan can match you to the right partner, finance instrument, or corridor.</p>

      <div className="frow mb-4">
        <label htmlFor="products" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Products or Services *</label>
        <input id="products" type="text" value={form.products} onChange={e => update('products', e.target.value)} placeholder="e.g. Premium Italian pasta, olive oil, canned goods, wines" className={errors.products ? 'error' : ''} />
        <div className="text-[10px] text-brand-light mt-1">List your main product categories or services.</div>
      </div>

      <div className="frow mb-4">
        <label htmlFor="business-desc" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Brief Business Description *</label>
        <textarea id="business-desc" value={form.desc} onChange={e => update('desc', e.target.value)} placeholder="In 2–3 sentences, describe what your company does and what makes your product or service valuable to buyers in East Africa…" className={errors.desc ? 'error' : ''} />
      </div>

      <div className="h-px bg-gray-200 my-5"></div>

      <div className="frow mb-4">
        <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Target Markets — Select all that apply *</label>
        <div className="flex flex-wrap gap-2 mb-1">
          {['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'DRC', 'Burundi', 'South Sudan', 'Zanzibar'].map((m) => {
            const flagMap: Record<string, string> = { Kenya: '🇰🇪', Uganda: '🇺🇬', Tanzania: '🇹🇿', Rwanda: '🇷🇼', Ethiopia: '🇪🇹', DRC: '🇨🇩', Burundi: '🇧🇮', 'South Sudan': '🇸🇸', Zanzibar: '🏝️' };
            return (
              <div
                key={m}
                className={`mkt-pill ${form.markets.includes(m) ? 'selected' : ''}`}
                onClick={() => {
                  const newMarkets = form.markets.includes(m) ? form.markets.filter(x => x !== m) : [...form.markets, m];
                  update('markets', newMarkets);
                }}
              >
                {flagMap[m]} {m}
              </div>
            );
          })}
        </div>
        <div className="text-[10px] text-brand-light mt-1">{form.markets.length > 0 ? `${form.markets.length} market(s) selected.` : 'Select at least one target market.'}</div>
        {errors.markets && <div className="error-msg">{errors.markets}</div>}
      </div>

      <div className="h-px bg-gray-200 my-5"></div>

      <div className="frow mb-4">
        <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Typical Deal / Order Size *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {Object.entries(dealLabels).map(([key, label]) => (
            <div key={key} className={`deal-opt ${form.deal === key ? 'selected' : ''}`} onClick={() => update('deal', key)}>
              <div className="text-[14px] font-extrabold text-brand-navy mb-0.5">{label}</div>
              <div className="text-[10px] text-brand-muted">{key === 'under250' ? 'Smaller or pilot orders' : key === '250k-1m' ? 'Growth-stage deals' : key === '1m-5m' ? 'Established volumes' : 'Large-scale supply'}</div>
            </div>
          ))}
        </div>
        {errors.deal && <div className="error-msg">{errors.deal}</div>}
      </div>

      <div className="frow mb-4">
        <label htmlFor="trade-frequency" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Trade Frequency</label>
        <select id="trade-frequency" value={form.frequency} onChange={e => update('frequency', e.target.value)}>
          <option value="">Select frequency…</option>
          <option>One-time / pilot</option>
          <option>Quarterly supply</option>
          <option>Monthly replenishment</option>
          <option>Weekly distribution</option>
          <option>Ongoing framework</option>
        </select>
      </div>

      <div className="flex justify-between items-center pt-2 mt-6 border-t border-gray-200">
        <button className="inline-flex items-center gap-2 bg-transparent text-brand-muted text-[12px] font-semibold px-5 py-3 rounded-[10px] border border-gray-200 transition-all hover:border-gray-300 hover:text-brand-navy" onClick={prev}>
          <i className="ti ti-arrow-left text-[13px]"></i> Back
        </button>
        <button className="bg-brand-navy text-brand-gold text-[12px] font-bold px-7 py-3 rounded-[10px] transition-all hover:bg-brand-navy2 hover:-translate-y-0.5 flex items-center gap-2" onClick={next}>
          Continue <i className="ti ti-arrow-right text-[14px]"></i>
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="animate-[fadeIn_0.3s_ease]">
      <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2.5">Step 4 — Your Goals</div>
      <h1 className="font-display text-[clamp(22px,2.5vw,30px)] text-brand-navy font-bold leading-[1.2] mb-2">What do you need from Briugan?</h1>
      <p className="text-[13px] text-brand-muted leading-[1.7] mb-8 max-w-[520px]">Tell us what success looks like for you. This shapes how Briugan prioritises your case and what your first 90 days together should achieve.</p>

      <div className="frow mb-4">
        <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Primary Goal *</label>
        <div className="flex flex-col gap-2">
          {[
            { key: 'partners', label: 'Find verified buyers or distribution partners', sub: 'I need introductions to companies that will buy from me or stock my products.' },
            { key: 'expand', label: 'Enter a new market or country', sub: 'I want to expand beyond my current market and need help with strategy, compliance, and local contacts.' },
            { key: 'deals', label: 'Close deals faster and manage my pipeline', sub: 'I have opportunities in progress but need structure, deal rooms, and Briugan\'s support to close them.' },
            { key: 'finance', label: 'Access trade finance or improve cash flow', sub: 'I need pre-export finance, invoice financing, or FX solutions to fund my trade operations.' },
            { key: 'compliance', label: 'Navigate compliance and export documentation', sub: 'I need help with product certification, import permits, and regulatory requirements across markets.' }
          ].map((item) => (
            <div key={item.key} className={`radio-item ${form.goal === item.key ? 'selected' : ''}`} onClick={() => update('goal', item.key)}>
              <div className={`w-[18px] h-[18px] rounded-full border-2 border-gray-300 shrink-0 flex items-center justify-center transition-all ${form.goal === item.key ? 'border-brand-gold bg-brand-gold after:content-[""] after:w-1.5 after:h-1.5 after:rounded-full after:bg-brand-navy' : ''}`}></div>
              <div>
                <div className="text-[12px] font-semibold text-brand-navy">{item.label}</div>
                <div className="text-[10px] text-brand-muted mt-0.25">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
        {errors.goal && <div className="error-msg">{errors.goal}</div>}
      </div>

      <div className="h-px bg-gray-200 my-5"></div>

      <div className="frow mb-4">
        <label className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Timeline — When do you want results? *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {Object.entries(timelineLabels).map(([key, label]) => (
            <div key={key} className={`deal-opt ${form.timeline === key ? 'selected' : ''}`} onClick={() => update('timeline', key)}>
              <div className="text-[14px] font-extrabold text-brand-navy mb-0.5">{label}</div>
              <div className="text-[10px] text-brand-muted">{key === 'asap' ? 'I have an active opportunity' : key === '1month' ? 'Planning ahead' : key === 'quarter' ? 'Building the pipeline' : 'Long-term growth'}</div>
            </div>
          ))}
        </div>
        {errors.timeline && <div className="error-msg">{errors.timeline}</div>}
      </div>

      <div className="frow mb-4">
        <label htmlFor="source" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">How did you hear about Briugan?</label>
        <select id="source" value={form.source} onChange={e => update('source', e.target.value)}>
          <option value="">Select…</option>
          <option>Referral from a contact</option>
          <option>Online search</option>
          <option>Social media</option>
          <option>Trade event or conference</option>
          <option>Briugan team outreach</option>
          <option>Other</option>
        </select>
      </div>

      <div className="frow mb-4">
        <label htmlFor="notes" className="block text-[10px] font-bold text-brand-muted uppercase tracking-[0.6px] mb-1.5">Anything else Briugan should know?</label>
        <textarea id="notes" value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Share any context that would help Briugan prioritise your case — e.g. specific partner types you need, compliance hurdles you face, or deadlines you are working toward…" />
      </div>

      <div className="flex justify-between items-center pt-2 mt-6 border-t border-gray-200">
        <button className="inline-flex items-center gap-2 bg-transparent text-brand-muted text-[12px] font-semibold px-5 py-3 rounded-[10px] border border-gray-200 transition-all hover:border-gray-300 hover:text-brand-navy" onClick={prev}>
          <i className="ti ti-arrow-left text-[13px]"></i> Back
        </button>
        <button className="bg-brand-navy text-brand-gold text-[12px] font-bold px-7 py-3 rounded-[10px] transition-all hover:bg-brand-navy2 hover:-translate-y-0.5 flex items-center gap-2" onClick={next}>
          Review my application <i className="ti ti-arrow-right text-[14px]"></i>
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="animate-[fadeIn_0.3s_ease]">
      <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2.5">Step 5 — Review & Submit</div>
      <h1 className="font-display text-[clamp(22px,2.5vw,30px)] text-brand-navy font-bold leading-[1.2] mb-2">Review your application</h1>
      <p className="text-[13px] text-brand-muted leading-[1.7] mb-8 max-w-[520px]">Check your details below. Once you submit, the Briugan team will review your profile and open your private workspace within 24 hours.</p>

      <div className="bg-brand-cream border-[1.5px] border-gray-200 rounded-[12px] p-5 mb-3.5">
        <div className="text-[10px] font-extrabold text-brand-muted uppercase tracking-[0.8px] mb-3.5 flex items-center gap-2"><i className="ti ti-id-badge text-[14px] text-brand-gold"></i>Company Profile</div>
        <div className="space-y-2">
          {[
            { k: 'Company', v: form.company },
            { k: 'Country', v: form.country },
            { k: 'City', v: form.city },
            { k: 'Sector', v: form.sector },
            {
              k: 'Contact',
              v: form.name && form.title ? `${form.name} · ${form.title}` : (form.name || form.title || '—')
            },
            { k: 'Email', v: form.email }
          ].map(r => (
            <div key={r.k} className="flex justify-between items-start gap-4 pb-2 border-b border-gray-200 last:border-0 last:pb-0">
              <span className="text-[11px] text-brand-muted font-medium shrink-0">{r.k}</span>
              <span className="text-[11px] font-bold text-brand-navy text-right">{r.v || '—'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-cream border-[1.5px] border-gray-200 rounded-[12px] p-5 mb-3.5">
        <div className="text-[10px] font-extrabold text-brand-muted uppercase tracking-[0.8px] mb-3.5 flex items-center gap-2"><i className="ti ti-package text-[14px] text-brand-gold"></i>Trade Details</div>
        <div className="space-y-2">
          {[
            { k: 'Role', v: roleLabels[form.role] },
            { k: 'Products', v: form.products },
            { k: 'Target Markets', v: form.markets.join(', ') },
            { k: 'Deal Size', v: dealLabels[form.deal] }
          ].map(r => (
            <div key={r.k} className="flex justify-between items-start gap-4 pb-2 border-b border-gray-200 last:border-0 last:pb-0">
              <span className="text-[11px] text-brand-muted font-medium shrink-0">{r.k}</span>
              <span className="text-[11px] font-bold text-brand-navy text-right">{r.v || '—'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-cream border-[1.5px] border-gray-200 rounded-[12px] p-5 mb-5">
        <div className="text-[10px] font-extrabold text-brand-muted uppercase tracking-[0.8px] mb-3.5 flex items-center gap-2"><i className="ti ti-target text-[14px] text-brand-gold"></i>Goals & Timeline</div>
        <div className="space-y-2">
          {[
            { k: 'Primary Goal', v: goalLabels[form.goal] },
            { k: 'Timeline', v: timelineLabels[form.timeline] }
          ].map(r => (
            <div key={r.k} className="flex justify-between items-start gap-4 pb-2 border-b border-gray-200 last:border-0 last:pb-0">
              <span className="text-[11px] text-brand-muted font-medium shrink-0">{r.k}</span>
              <span className="text-[11px] font-bold text-brand-navy text-right">{r.v || '—'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3 p-3.5 bg-brand-cream border-[1.5px] border-gray-200 rounded-[10px] cursor-pointer mb-5" onClick={() => setTermsAccepted(!termsAccepted)}>
        <input id="terms-cb" type="checkbox" checked={termsAccepted} onChange={() => {}} className="w-[18px] h-[18px] shrink-0 accent-brand-gold cursor-pointer mt-0.5" />
        <label htmlFor="terms-cb" className="text-[11px] text-brand-muted leading-[1.6] cursor-pointer">I confirm the information I have provided is accurate. I understand Briugan will review this application and contact me within 24 hours to discuss next steps. I agree that my information will be handled confidentially and used only to facilitate trade connections through the Briugan network. I accept the <a href="mailto:info@briugan.com?subject=Terms of Service Request" className="text-brand-gold2 font-semibold no-underline">Terms of Service</a> and <a href="mailto:info@briugan.com?subject=Privacy Policy Request" className="text-brand-gold2 font-semibold no-underline">Privacy Policy</a>.</label>
      </div>

      <div className="flex justify-between items-center pt-2 mt-6 border-t border-gray-200">
        <button className="inline-flex items-center gap-2 bg-transparent text-brand-muted text-[12px] font-semibold px-5 py-3 rounded-[10px] border border-gray-200 transition-all hover:border-gray-300 hover:text-brand-navy" onClick={prev}>
          <i className="ti ti-arrow-left text-[13px]"></i> Back
        </button>
        <button
          className="bg-brand-gold text-brand-navy text-[12px] font-extrabold px-7 py-3 rounded-[10px] transition-all flex items-center gap-2 enabled:hover:bg-brand-gold2 enabled:hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed min-w-[180px] justify-center"
          onClick={next}
          disabled={!termsAccepted || isSubmitting}
        >
          {isSubmitting ? (
            <><span className="spinner"></span> Submitting...</>
          ) : (
            <><i className="ti ti-send text-[14px]"></i> Submit to Briugan</>
          )}
        </button>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="connect-page min-h-screen">
        <div className="shell min-h-screen">
          <div className="left flex">
             <div className="p-8 pb-0">
               <div className="font-display text-[22px] text-brand-gold tracking-[2px] font-bold mb-1">BRIUGAN</div>
               <div className="text-[9px] text-white/30 tracking-[2px] uppercase">Trade Platform · Nairobi</div>
             </div>
             <div className="p-[36px_32px_28px] flex-1 flex flex-col justify-center">
               <div className="inline-flex items-center gap-1.5 bg-brand-gold/12 border border-brand-gold/20 rounded-full p-[5px_12px] mb-5 w-fit">
                 <span className="text-[9px] font-bold text-brand-gold tracking-[1px] uppercase">Company Onboarding</span>
               </div>
               <h2 className="font-display text-[28px] text-white leading-[1.25] mb-4 font-bold">Your trade journey<br />starts <em className="text-brand-gold not-italic">here</em></h2>
               <p className="text-[12px] leading-[1.8] text-white/50 mb-8">Briugan will review your profile, open a private deal room, and connect you to verified partners in your target markets within 24 hours.</p>
             </div>
             <div className="p-[20px_32px_28px] border-t border-white/7">
               <div className="flex gap-2.5 flex-wrap mb-3.5">
                 <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-lock text-[12px] text-brand-gold"></i>Secure & Confidential</div>
                 <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-clock text-[12px] text-brand-gold"></i>24h Response</div>
                 <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-shield-check text-[12px] text-brand-gold"></i>Verified Network</div>
               </div>
             </div>
          </div>
          <div className="right flex items-center justify-center p-7">
            <div className="text-center p-[60px_40px] animate-[fadeIn_0.4s_ease]">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-[36px]">🎉</div>
              <h2 className="font-display text-[30px] text-brand-navy font-bold mb-3">Application submitted!</h2>
              <p className="text-[14px] text-brand-muted leading-[1.7] max-w-[460px] mx-auto mb-8">Your company workspace is being prepared. The Briugan team will review your profile and reach out within 24 hours to open your private deal room and discuss your first match.</p>
              <div className="bg-brand-cream border-[1.5px] border-gray-200 rounded-[14px] p-6 mx-auto mb-8 max-w-[440px] text-left">
                {[
                  { icon: 'ti ti-circle-check', text: 'Application received & logged', status: '✓ Done', color: 'text-brand-ok' },
                  { icon: 'ti ti-search', text: 'Briugan team reviewing your profile', status: 'In progress', color: 'text-brand-warn' },
                  { icon: 'ti ti-briefcase', text: 'Private deal room being prepared', status: 'Pending', color: 'text-brand-light' },
                  { icon: 'ti ti-sparkles', text: 'AI partner matching queued', status: 'Pending', color: 'text-brand-light' },
                  { icon: 'ti ti-mail', text: 'Briugan intro call scheduled', status: '24h window', color: 'text-brand-light' }
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy/6 flex items-center justify-center text-[15px] text-brand-navy shrink-0"><i className={row.icon}></i></div>
                    <div className="text-[11px] text-brand-text font-medium">{row.text}</div>
                    <span className={`ml-auto text-[10px] font-bold ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/" className="inline-flex items-center gap-2 bg-brand-navy text-brand-gold text-[12px] font-bold px-7 py-3.5 rounded-[10px] no-underline transition-all hover:bg-brand-navy2 hover:-translate-y-0.5">
                  <i className="ti ti-layout-dashboard text-[15px]"></i> Preview the Platform
                </Link>
                <Link to="/" className="inline-flex items-center gap-2 bg-transparent text-brand-muted text-[12px] font-semibold px-6 py-3.5 rounded-[10px] no-underline border-[1.5px] border-gray-200 transition-all hover:border-gray-300 hover:text-brand-navy">
                  <i className="ti ti-home text-[15px]"></i> Back to site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="connect-page min-h-screen">
      <div className="fixed top-0 left-0 lg:left-[380px] right-0 h-[3px] bg-brand-gold origin-left transition-all duration-400 z-50" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}></div>
      <div className="shell">
        {/* LEFT PANEL */}
        <div className="left flex">
          <div className="p-8 pb-0">
            <Link to="/" className="font-display text-[22px] text-brand-gold tracking-[2px] font-bold mb-1 no-underline block text-center lg:text-left">BRIUGAN</Link>
            <div className="text-[9px] text-white/30 tracking-[2px] uppercase text-center lg:text-left">Trade Platform · Nairobi</div>
          </div>
          <div className="p-[36px_32px_28px] flex-1 flex flex-col justify-center">
            <div className="hidden lg:inline-flex items-center gap-1.5 bg-brand-gold/12 border border-brand-gold/20 rounded-full p-[5px_12px] mb-5 w-fit">
              <span className="text-[9px] font-bold text-brand-gold tracking-[1px] uppercase">Company Onboarding</span>
            </div>
            <h2 className="font-display text-[20px] lg:text-[28px] text-white leading-[1.25] mb-4 font-bold text-center lg:text-left">Your trade journey starts <em className="text-brand-gold not-italic">here</em></h2>
            <p className="hidden lg:block text-[12px] leading-[1.8] text-white/50 mb-8">Briugan will review your profile, open a private deal room, and connect you to verified partners in your target markets within 24 hours.</p>
            <div className="flex flex-row lg:flex-col gap-0 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {[
                { n: 1, l: 'Your Role', s: 'Buyer, seller or distributor' },
                { n: 2, l: 'Company Profile', s: 'Name, country, sector' },
                { n: 3, l: 'Trade Details', s: 'Products, markets, deal size' },
                { n: 4, l: 'Your Goals', s: 'What you need from Briugan' },
                { n: 5, l: 'Review & Submit', s: 'Confirm and send' }
              ].map((s) => (
                <div key={s.n} className="flex items-center lg:items-start gap-3.5 py-3 px-4 lg:px-0 relative group shrink-0">
                  {s.n < TOTAL_STEPS && <div className="hidden lg:block absolute left-[15px] top-9 bottom-[-4px] w-px bg-white/10"></div>}
                  <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0 transition-all border ${step > s.n ? 'bg-brand-ok border-brand-ok text-white' : step === s.n ? 'bg-brand-gold border-brand-gold text-brand-navy' : 'bg-white/4 border-white/15 text-white/25'}`}>
                    {step > s.n ? <i className="ti ti-check text-[11px]"></i> : s.n}
                  </div>
                  <div className="hidden lg:block">
                    <div className={`text-[12px] font-semibold transition-colors ${step === s.n ? 'text-white' : step > s.n ? 'text-white/50' : 'text-white/35'}`}>{s.l}</div>
                    <div className={`text-[10px] transition-colors ${step === s.n ? 'text-white/50' : 'text-white/25'}`}>{s.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block p-[20px_32px_28px] border-t border-white/7">
            <div className="flex gap-2.5 flex-wrap mb-3.5">
              <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-lock text-[12px] text-brand-gold"></i>Secure & Confidential</div>
              <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-clock text-[12px] text-brand-gold"></i>24h Response</div>
              <div className="flex items-center gap-1.25 text-[9px] text-white/35 font-semibold"><i className="ti ti-shield-check text-[12px] text-brand-gold"></i>Verified Network</div>
            </div>
            <div className="text-[10px] text-white/25 leading-[1.6]">Your company profile is reviewed by the Briugan team before any introductions are made. All information is treated as strictly confidential.</div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right min-h-screen flex flex-col">
          <div className="p-[28px_48px_0] flex items-center justify-between border-b border-gray-200 flex-wrap gap-4">
            <div className="flex items-center gap-2.5 pb-4.5">
              <div className="text-[10px] font-bold text-brand-muted">Step {step} of {TOTAL_STEPS}</div>
              <div className="w-[120px] h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-brand-gold transition-all duration-400" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}></div>
              </div>
            </div>
            <div className="flex items-center gap-0 pb-4.5">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
                <React.Fragment key={n}>
                  <div className={`w-2 h-2 rounded-full transition-all ${step > n ? 'bg-brand-ok' : step === n ? 'bg-brand-gold shadow-[0_0_0_3px_rgba(212,175,55,0.2)]' : 'bg-gray-200'}`}></div>
                  {n < TOTAL_STEPS && <div className={`w-10 h-px transition-all ${step > n ? 'bg-brand-ok' : 'bg-gray-200'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <Link to="/" className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-muted cursor-pointer pb-4.5 no-underline transition-colors hover:text-brand-navy">
              <i className="ti ti-arrow-left text-[13px]"></i> Back to site
            </Link>
          </div>

          <div className="flex-1 p-[40px_48px] overflow-y-auto max-h-[calc(100vh-70px)]" ref={bodyRef}>
            {renderStep()}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
