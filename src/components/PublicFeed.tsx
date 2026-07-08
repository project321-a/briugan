import React from 'react';
import { LayoutList, Compass, Briefcase, MapPin, Users, Search, Package, Star, TrendingUp, UserPlus, LogIn, MessageSquare, ThumbsUp, Share2, BadgeCheck, Lock, Building2, ArrowRight } from 'lucide-react';

interface PublicFeedProps {
  onJoin: () => void;
}

const POSTS = [
  {
    av: 'NI',
    avBg: 'bg-emerald-50',
    avCol: 'text-emerald-700',
    name: 'New Italycor Ltd.',
    verified: true,
    type: 'offering',
    typeLabel: 'Offering',
    company: 'John Ngugi · New Italycor Ltd.',
    country: '🇰🇪 Kenya',
    date: 'Jul 4',
    text: 'Premium Italian food products available for regional distribution across East Africa. We represent exclusive Italian brands in pasta, olive oil, canned tomatoes, specialty vinegars, wines and spirits. 25+ years supplying Kenya\'s top hotels and supermarkets.',
    tags: ['Premium Food', 'Italian Import', 'HORECA', 'Retail'],
    emoji: '🍝'
  },
  {
    av: 'KH',
    avBg: 'bg-blue-50',
    avCol: 'text-blue-700',
    name: 'Kampala Hotel Group',
    verified: true,
    type: 'seeking',
    typeLabel: 'Seeking',
    company: 'James Ochieng · KHG Procurement',
    country: '🇺🇬 Uganda',
    date: 'Jul 3',
    text: 'We are actively sourcing premium European food and beverage products for our 6 hotel properties across Kampala. Specifically looking for reliable suppliers of: Premium olive oil, Italian pasta, specialty canned goods and sauces.',
    tags: ['HORECA', 'Hospitality', 'Uganda', 'European Food'],
    emoji: '🏨'
  },
  {
    av: 'HB',
    avBg: 'bg-amber-50',
    avCol: 'text-amber-700',
    name: 'HospiBridge Tanzania',
    verified: true,
    type: 'opportunity',
    typeLabel: 'Opportunity',
    company: 'Sarah Nankunda · HospiBridge Ltd.',
    country: '🇹🇿 Tanzania',
    date: 'Jul 2',
    text: 'Annual supply contract opportunity — KES 1.4M · Dar es Salaam coastal hotel cluster (8 properties). We are consolidating our premium F&B supply chain and looking for one anchor supplier.',
    tags: ['Annual Contract', 'Tanzania', 'KES 1.4M', 'HORECA'],
    emoji: '🏖️',
    isFacilitated: true
  }
];

export const PublicFeed: React.FC<PublicFeedProps> = ({ onJoin }) => {
  return (
    <section id="feed-section" className="py-20 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr_240px] gap-8 items-start">

        {/* Left Sidebar */}
        <div className="hidden lg:block sticky top-20">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider mb-4">Browse</div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-brand-gold/10 text-brand-navy text-xs font-bold cursor-pointer">
                <LayoutList size={15} /> Feed <span className="ml-auto text-[9px] bg-brand-navy text-brand-gold px-1.5 py-0.5 rounded-md">312</span>
              </div>
              <div onClick={onJoin} className="flex items-center gap-3 p-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Compass size={15} /> Discover
              </div>
              <div onClick={onJoin} className="flex items-center gap-3 p-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Briefcase size={15} /> Opportunities
              </div>
              <div onClick={onJoin} className="flex items-center gap-3 p-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <MapPin size={15} /> By Country
              </div>
              <div onClick={onJoin} className="flex items-center gap-3 p-2.5 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Users size={15} /> Partners
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider mb-4">Filter by type</div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Search size={15} className="text-blue-500" /> I Need
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Package size={15} className="text-emerald-500" /> I Can Supply
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <Star size={15} className="text-amber-500" /> Opportunity
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg text-gray-500 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
                <TrendingUp size={15} className="text-purple-500" /> Market Signal
              </div>
            </div>
          </div>

          <div className="bg-brand-navy rounded-2xl p-5 border-none shadow-xl">
            <div className="text-[10px] font-bold text-brand-gold mb-2">Join to unlock all 312 opportunities</div>
            <p className="text-[10px] text-white/50 leading-relaxed mb-4">Sign up free to connect with verified partners and access the full Briugan network.</p>
            <button onClick={onJoin} className="w-full py-2.5 bg-brand-gold text-brand-navy text-[10px] font-extrabold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-gold2 transition-all">
              <UserPlus size={14} /> Join Free
            </button>
          </div>
        </div>

        {/* Main Feed */}
        <div className="space-y-4">
          {/* Compose Bar */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div onClick={onJoin} className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold cursor-pointer"><Users size={16} /></div>
              <div onClick={onJoin} className="flex-1 bg-brand-cream border border-gray-200 rounded-full px-5 py-2.5 text-xs text-gray-400 cursor-pointer hover:bg-gray-50 transition-all">
                What opportunity are you exploring?
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={onJoin} className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 hover:border-brand-navy transition-all"><Search size={14} /> I Need</button>
              <button onClick={onJoin} className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 hover:border-brand-navy transition-all"><Package size={14} /> I Can Supply</button>
              <button onClick={onJoin} className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 hover:border-brand-navy transition-all"><Star size={14} /> Opportunity</button>
            </div>
          </div>

          {/* Visible Posts */}
          {POSTS.map((post, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-all shadow-sm">
              <div className="p-5 pb-3 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full ${post.avBg} ${post.avCol} flex items-center justify-center text-[13px] font-extrabold`}>{post.av}</div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-extrabold text-brand-navy">{post.name}</span>
                      {post.verified && <BadgeCheck size={14} className="text-emerald-500" />}
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${post.type === 'offering' ? 'bg-emerald-50 text-emerald-600' : post.type === 'seeking' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                        {post.typeLabel}
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400">{post.company} · <span className="inline-flex items-center gap-1 bg-brand-cream border border-gray-100 rounded-full px-2 py-0.5 text-[9px] font-bold">{post.country}</span></div>
                    <div className="text-[10px] text-gray-300 mt-0.5">{post.date}, 2026</div>
                  </div>
                </div>
                <button onClick={onJoin} className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 border-[1.5px] border-gray-200 rounded-lg text-xs font-bold text-brand-navy hover:border-brand-gold hover:text-brand-gold2 transition-all">
                  <UserPlus size={13} /> Connect
                </button>
              </div>
              <div className="px-5 py-3">
                <p className="text-xs leading-relaxed text-gray-700 mb-4">{post.text}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(t => <span key={t} className="text-[10px] font-bold text-brand-navy bg-brand-navy/5 px-2.5 py-1 rounded-full">{t}</span>)}
                </div>
                {post.emoji && post.type === 'offering' && (
                   <div className="w-full h-36 bg-brand-cream border border-gray-100 rounded-xl flex items-center justify-center text-5xl">
                     {post.emoji}
                   </div>
                )}
                {post.isFacilitated && (
                  <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-4 flex items-center gap-3">
                    <Building2 size={20} className="text-brand-gold shrink-0" />
                    <p className="text-[10px] leading-normal text-brand-navy">
                      <strong>Briugan-facilitated</strong> — This opportunity is managed through the Briugan Deal Room. Sign up to submit an expression of interest.
                    </p>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-50 flex divide-x divide-gray-50">
                <button onClick={onJoin} className="flex-1 py-3 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><ThumbsUp size={15} /> Interested</button>
                <button onClick={onJoin} className="flex-1 py-3 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><MessageSquare size={15} /> Message</button>
                <button onClick={onJoin} className="flex-1 py-3 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><Share2 size={15} /> Share</button>
              </div>
            </div>
          ))}

          {/* Blur Gate */}
          <div className="relative mt-[-20px]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-brand-cream/90 to-brand-cream z-10"></div>

            <div className="opacity-40 blur-[4px] pointer-events-none select-none space-y-4">
               {/* Blurred Placeholder */}
               <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center text-[13px] font-extrabold">RF</div>
                    <div className="flex-1 h-10 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg"></div>
               </div>
            </div>

            <div className="relative z-20 bg-white border-2 border-brand-gold rounded-3xl p-10 text-center shadow-2xl shadow-brand-gold/20 max-w-2xl mx-auto my-10">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/25 rounded-full px-4 py-1.5 text-[11px] font-bold text-brand-gold2 mb-6">
                <Lock size={14} /> 309 more opportunities waiting for you
              </div>
              <h3 className="font-display text-3xl text-brand-navy font-bold mb-4">Sign up to see every deal</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Join the Briugan network to access all 312 live trade opportunities, post your own, connect with verified partners, and open a private deal room — for free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={onJoin} className="bg-brand-navy text-brand-gold px-8 py-3.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-brand-navy2 transition-all shadow-xl shadow-brand-navy/10">
                  <UserPlus size={16} /> Join Free — Unlock the Feed
                </button>
                <button onClick={onJoin} className="bg-white border-[1.5px] border-gray-200 text-brand-navy px-8 py-3.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 hover:border-brand-navy transition-all">
                  <LogIn size={16} /> Already a member? Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block sticky top-20">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider mb-5">Verified Partners Near You</div>
            <div className="space-y-4">
              {[
                { av: 'SH', bg: 'bg-emerald-50', col: 'text-emerald-700', name: 'Serena Hotels Group', sub: 'Hospitality · East Africa', match: '98%' },
                { av: 'NK', bg: 'bg-blue-50', col: 'text-blue-700', name: 'Nakumatt Intl.', sub: 'Retail · Kenya', match: '94%' },
                { av: 'WF', bg: 'bg-purple-50', col: 'text-purple-700', name: 'UN World Food Prog.', sub: 'Institutional · Regional', match: '91%' }
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${p.bg} ${p.col} flex items-center justify-center text-[11px] font-extrabold shrink-0`}>{p.av}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-brand-navy truncate">{p.name}</div>
                    <div className="text-[9px] text-gray-400 mt-0.5 truncate">{p.sub}</div>
                  </div>
                  <div className="text-[11px] font-extrabold text-brand-gold2">{p.match}</div>
                </div>
              ))}
            </div>
            <button onClick={onJoin} className="w-full mt-6 py-2.5 bg-white border border-gray-200 text-brand-navy text-[10px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              See all verified partners <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider mb-5">Market Signals</div>
            <div className="space-y-4">
              {[
                { ico: '📈', text: 'Premium Italian food demand up 40% in Nairobi HORECA', time: 'Jul 4' },
                { ico: '💱', text: 'KES/EUR favourable — 5.7% swing improving landed costs', time: 'Jul 3' },
                { ico: '🇺🇬', text: 'Uganda hotel occupancy at 5-year high — demand rising', time: 'Jul 2' }
              ].map((s, i) => (
                <div key={i} className="flex gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                  <span className="text-xl shrink-0">{s.ico}</span>
                  <div>
                    <div className="text-[10px] leading-normal text-gray-700 font-medium">{s.text}</div>
                    <div className="text-[9px] text-gray-300 mt-1">{s.time}, 2026</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="text-[10px] font-bold text-brand-navy uppercase tracking-wider mb-3">About Briugan</div>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">Briugan Consulting facilitates trade connections, manages deal rooms, and drives commercial growth across East and Central Africa.</p>
            <button onClick={onJoin} className="w-full py-2.5 bg-brand-navy text-brand-gold text-[10px] font-extrabold rounded-lg hover:bg-brand-navy2 transition-all">
              Join the network
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
