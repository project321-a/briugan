import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, Package, Ship, RefreshCcw, Building, ShoppingCart, School, Loader, LayoutDashboard, Briefcase, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [mkts, setMkts] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const roles = [
    { id: 'importer', icon: <Package size={22} />, title: 'Importer / Buyer', sub: 'Source products from outside your country' },
    { id: 'exporter', icon: <Ship size={22} />, title: 'Exporter / Seller', sub: 'Sell into new markets across the region' },
    { id: 'distributor', icon: <RefreshCcw size={22} />, title: 'Distributor / Agent', sub: 'Represent or distribute brands locally' },
    { id: 'horeca', icon: <Building size={22} />, title: 'Hotel / Restaurant', sub: 'Procure for hospitality operations' },
    { id: 'retail', icon: <ShoppingCart size={22} />, title: 'Retailer', sub: 'Stock shelves and serve end consumers' },
    { id: 'institution', icon: <School size={22} />, title: 'Institutional Buyer', sub: 'School, hospital, corporate entity' },
  ];

  const toggleMkt = (m: string) => {
    setMkts(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]);
  };

  const goals = [
    { id: 'partners', title: 'Find buyers or distribution partners', sub: 'Introductions to verified companies that will buy from me' },
    { id: 'expand', title: 'Enter a new market or country', sub: 'Strategy, compliance and local contacts for a new market' },
    { id: 'deals', title: 'Close deals faster', sub: 'Deal rooms and Briugan support to close open opportunities' },
    { id: 'finance', title: 'Trade finance or cash flow support', sub: 'Pre-export finance, invoice financing or FX solutions' },
  ];

  const nextStep = () => {
    if (step === 1 && !role) return alert('Please select a role.');
    if (step === 3) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1500);
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="fixed inset-0 bg-brand-navy/70 backdrop-blur-sm z-[500] flex items-center justify-center p-4">
      <div className="bg-white rounded-[18px] w-full max-w-[920px] max-h-[90vh] overflow-hidden grid grid-cols-1 md:grid-cols-[300px_1fr] shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-cream border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-brand-navy transition-all z-10"
        >
          <X size={16} />
        </button>

        {/* Left Side */}
        <div className="bg-brand-navy p-8 md:p-10 flex flex-col hidden md:flex">
          <div className="font-display text-lg text-brand-gold tracking-[2px] mb-1">BRIUGAN</div>
          <div className="text-[8px] text-white/30 tracking-[2px] uppercase mb-8">Trade Platform</div>

          <h2 className="font-display text-2xl text-white leading-tight mb-4">Your trade workspace in 3 minutes</h2>
          <p className="text-[11px] text-white/45 leading-relaxed mb-8">
            Tell Briugan about your company and goals. We review your profile and open your private deal room and first partner matches within 24 hours.
          </p>

          <div className="space-y-0 relative">
            {[
              { n: 1, lbl: 'Your Role' },
              { n: 2, lbl: 'Company' },
              { n: 3, lbl: 'Trade Details' },
              { n: 4, lbl: 'Submit' }
            ].map((s, i) => (
              <div key={s.n} className="flex items-start gap-3 py-2.5 relative">
                {i < 3 && <div className={`absolute left-[14px] top-[32px] bottom-[-10px] w-px ${step > s.n ? 'bg-emerald-500' : 'bg-white/10'}`}></div>}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 transition-all z-10 ${step > s.n ? 'bg-emerald-500 text-white' : step === s.n ? 'bg-brand-gold text-brand-navy' : 'bg-white/5 text-white/30 border border-white/10'}`}>
                  {step > s.n ? <Check size={12} /> : s.n}
                </div>
                <div className={`text-[11px] font-semibold mt-1.5 transition-colors ${step === s.n ? 'text-white' : step > s.n ? 'text-white/45' : 'text-white/30'}`}>
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="overflow-y-auto p-8 md:p-10 flex flex-col">
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-8">
            <div className="h-full bg-brand-gold transition-all duration-500" style={{ width: `${(step/4)*100}%` }}></div>
          </div>

          {step === 1 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2">Step 1 of 4</div>
              <h3 className="font-display text-2xl text-brand-navy font-bold mb-2">How do you trade?</h3>
              <p className="text-xs text-gray-500 mb-8">Select your company's role. This shapes which partners and opportunities Briugan shows you.</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {roles.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${role === r.id ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100 hover:border-brand-gold/50'}`}
                  >
                    <div className={`mb-2 mx-auto flex justify-center ${role === r.id ? 'text-brand-gold2' : 'text-brand-navy'}`}>{r.icon}</div>
                    <div className="text-[11px] font-bold text-brand-navy">{r.title}</div>
                    <div className="text-[9px] text-gray-400 mt-1">{r.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-end">
                <button onClick={nextStep} className="bg-brand-navy text-brand-gold text-[11px] font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-navy2 transition-all">
                  Continue <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2">Step 2 of 4</div>
              <h3 className="font-display text-2xl text-brand-navy font-bold mb-2">Your company</h3>
              <p className="text-xs text-gray-500 mb-8">This creates your Briugan workspace. All information is treated as confidential.</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Company Name *</label>
                  <input placeholder="e.g. New Italycor Ltd." className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Country *</label>
                  <select className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all appearance-none">
                    <option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Rwanda</option><option>Ethiopia</option><option>DRC</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5 mb-4">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Sector *</label>
                <select className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all appearance-none">
                  <option>Food & Beverage Import</option><option>Hospitality / HORECA</option><option>Retail Distribution</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Your Name *</label>
                  <input placeholder="Full name" className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Business Email *</label>
                  <input type="email" placeholder="you@company.com" className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all" />
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between">
                <button onClick={() => setStep(1)} className="text-gray-400 text-[11px] font-semibold px-4 py-2.5 rounded-lg border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-all">
                  <ArrowLeft size={14} /> Back
                </button>
                <button onClick={nextStep} className="bg-brand-navy text-brand-gold text-[11px] font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-navy2 transition-all">
                  Continue <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="text-[9px] font-bold text-brand-gold2 tracking-[1.5px] uppercase mb-2">Step 3 of 4</div>
              <h3 className="font-display text-2xl text-brand-navy font-bold mb-2">Your trade details</h3>
              <p className="text-xs text-gray-500 mb-8">This helps Briugan find the right partners and opportunities for you immediately.</p>

              <div className="space-y-1.5 mb-6">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Products / Services *</label>
                <input placeholder="e.g. Premium Italian pasta, olive oil, wines" className="w-full bg-brand-cream border border-gray-200 rounded-lg px-3.5 py-2.5 text-[11px] outline-none focus:bg-white focus:border-brand-gold transition-all" />
              </div>

              <div className="space-y-1.5 mb-6">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Target Markets *</label>
                <div className="flex flex-wrap gap-2">
                  {['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'DRC'].map(m => (
                    <div
                      key={m}
                      onClick={() => toggleMkt(m)}
                      className={`px-3 py-1.5 rounded-full border cursor-pointer text-[10px] font-bold transition-all ${mkts.includes(m) ? 'bg-brand-gold/10 border-brand-gold text-brand-navy' : 'bg-white border-gray-200 text-gray-400 hover:border-brand-gold/50'}`}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 mb-8">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Primary Goal *</label>
                <div className="space-y-2">
                  {goals.map(g => (
                    <div
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${goal === g.id ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100 hover:border-brand-gold/50'}`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${goal === g.id ? 'border-brand-gold bg-brand-gold' : 'border-gray-300'}`}>
                        {goal === g.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-navy"></div>}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-brand-navy">{g.title}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">{g.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between">
                <button onClick={() => setStep(2)} className="text-gray-400 text-[11px] font-semibold px-4 py-2.5 rounded-lg border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-all">
                  <ArrowLeft size={14} /> Back
                </button>
                <button onClick={nextStep} disabled={isSubmitting} className="bg-brand-gold text-brand-navy text-[11px] font-extrabold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-gold2 transition-all disabled:opacity-50 min-w-[140px] justify-center">
                  {isSubmitting ? <><Loader size={14} className="animate-spin" /> Submitting...</> : <><Send size={14} /> Submit to Briugan</>}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="font-display text-2xl text-brand-navy font-bold mb-2">You're in!</h3>
              <p className="text-xs text-gray-500 mb-8 max-w-[340px]">Your workspace is being set up. The Briugan team will review your profile and reach out within 24 hours with your first partner matches.</p>

              <div className="w-full bg-brand-cream border border-gray-100 rounded-xl p-5 text-left mb-8">
                <div className="text-[9px] font-bold text-brand-navy uppercase tracking-wider mb-4">What happens next</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-brand-navy font-medium">
                    <Check size={16} className="text-emerald-500" /> Application received
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-brand-navy font-medium">
                    <Loader size={16} className="text-amber-500 animate-spin" /> Briugan reviewing your profile
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <Briefcase size={16} className="text-gray-200" /> Private deal room opening
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <Sparkles size={16} className="text-gray-200" /> AI partner matching queued
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/portal')}
                className="w-full bg-brand-gold text-brand-navy text-xs font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold2 transition-all shadow-lg shadow-brand-gold/10"
              >
                <LayoutDashboard size={16} /> Open My Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
