import React, { useState } from 'react';
import {
  LayoutDashboard, List, Briefcase, Users, Ship, Coins, FileCheck, Sparkles, Globe,
  Search, Bell, Settings, LogOut, ChevronRight, TrendingUp, Plus,
  ThumbsUp, MessageSquare, Share2, BadgeCheck, Package, Star, Home
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ALL_POSTS = [
  { av: 'NI', bg: 'bg-emerald-50', col: 'text-emerald-700', name: 'New Italycor Ltd.', verified: true, type: 'offering', typeLabel: 'Offering', company: 'John Ngugi · New Italycor Ltd.', country: '🇰🇪 Kenya', date: 'Jul 4', text: 'Premium Italian food products available for regional distribution. Pasta, olive oil, canned goods, wines. 25+ years in Kenya market. Seeking verified distributors in Uganda, Tanzania, Rwanda, Ethiopia.', tags: ['Premium Food', 'Italian Import', 'HORECA', 'Retail'], emoji: '🍝' },
  { av: 'KH', bg: 'bg-blue-50', col: 'text-blue-700', name: 'Kampala Hotel Group', verified: true, type: 'seeking', typeLabel: 'Seeking', company: 'James Ochieng · KHG Procurement', country: '🇺🇬 Uganda', date: 'Jul 3', text: 'Actively sourcing premium European food for 6 hotel properties in Kampala. Need olive oil (500L/mo), Italian pasta, specialty canned goods, wines. Long-term supply partnership preferred.', tags: ['HORECA', 'Uganda', 'European Food'], emoji: '🏨' },
  { av: 'HB', bg: 'bg-amber-50', col: 'text-amber-700', name: 'HospiBridge Tanzania', verified: true, type: 'opportunity', typeLabel: 'Opportunity', company: 'Sarah Nankunda · HospiBridge Ltd.', country: '🇹🇿 Tanzania', date: 'Jul 2', text: 'Annual supply contract opportunity — KES 1.4M. Dar es Salaam coastal hotel cluster (8 properties) consolidating F&B supply chain under one anchor Italian food supplier. 12-month framework.', tags: ['Annual Contract', 'Tanzania', 'KES 1.4M'], emoji: '🏖️' },
  { av: 'RF', bg: 'bg-purple-50', col: 'text-purple-700', name: 'Rwanda Fresh Foods', verified: true, type: 'offering', typeLabel: 'Offering', company: 'Philippe Habimana · Rwanda Fresh Foods', country: '🇷🇼 Rwanda', date: 'Jul 1', text: 'Export-ready Rwandan coffee, tea and specialty processed foods. Full export certifications. Regular monthly shipment capacity. Seeking importers and wholesale buyers in Kenya, Uganda, Tanzania.', tags: ['Coffee', 'Tea', 'Rwanda', 'Export'], emoji: '☕' }
];

const MATCHES = [
  { av: 'SH', bg: 'bg-emerald-50', col: 'text-emerald-700', name: 'Serena Hotels Group', sub: 'Hospitality · East Africa', score: '98%' },
  { av: 'NK', bg: 'bg-blue-50', col: 'text-blue-700', name: 'Nakumatt International', sub: 'Retail · Kenya', score: '94%' },
  { av: 'EA', bg: 'bg-emerald-50', col: 'text-emerald-700', name: 'Ethiopian Airlines', sub: 'Food Service · Ethiopia', score: '91%' }
];

export const ClientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuGroups = [
    {
      label: 'Command',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={14} /> },
        { id: 'feed', label: 'Feed', icon: <List size={14} />, count: 312 },
      ]
    },
    {
      label: 'Deals & Clients',
      items: [
        { id: 'deals', label: 'Deal Room', icon: <Briefcase size={14} />, count: 5 },
        { id: 'crm', label: 'CRM', icon: <Users size={14} /> },
      ]
    },
    {
      label: 'Operations',
      items: [
        { id: 'export', label: 'Export Hub', icon: <Ship size={14} /> },
        { id: 'finance', label: 'Trade Finance', icon: <Coins size={14} /> },
        { id: 'policy', label: 'Policy Tracker', icon: <FileCheck size={14} /> },
      ]
    },
    {
      label: 'Growth',
      items: [
        { id: 'match', label: 'AI Match Engine', icon: <Sparkles size={14} /> },
        { id: 'marketplace', label: 'Marketplace', icon: <Globe size={14} /> },
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-brand-cream overflow-hidden text-brand-navy">
      {/* Sidebar */}
      <aside className={`bg-brand-navy flex-shrink-0 transition-all duration-300 flex flex-col overflow-y-auto z-50 ${isSidebarOpen ? 'w-[200px]' : 'w-0 md:w-[60px]'}`}>
        <div
          onClick={() => navigate('/')}
          className="p-4 border-b border-white/5 whitespace-nowrap cursor-pointer hover:bg-white/5 transition-colors"
        >
          <div className="font-display text-sm text-brand-gold tracking-[1px] flex items-center gap-2">
             <Home size={14} className="md:hidden lg:block" /> BRIUGAN
          </div>
          <div className="text-[7px] text-white/25 tracking-[2px] uppercase mt-0.5">Trade Platform · 2026</div>
        </div>

        <nav className="flex-1 py-4 overflow-x-hidden">
          {menuGroups.map((group, i) => (
            <div key={i} className="mb-6">
              <div className={`px-4 mb-2 text-[7px] font-extrabold text-white/20 uppercase tracking-[2px] ${!isSidebarOpen && 'hidden md:block opacity-0'}`}>{group.label}</div>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); if(window.innerWidth < 768) setIsSidebarOpen(false); }}
                  className={`flex items-center gap-2.5 px-4 py-2 cursor-pointer transition-all border-l-2 text-[11px] font-medium group ${activeTab === item.id ? 'bg-brand-gold/10 border-brand-gold text-brand-gold' : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white'}`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className={`truncate ${!isSidebarOpen && 'hidden md:hidden'}`}>{item.label}</span>
                  {item.count && isSidebarOpen && <span className="ml-auto text-[7px] font-extrabold bg-brand-gold text-brand-navy px-1.5 py-0.5 rounded-md">{item.count}</span>}
                </div>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-brand-gold flex items-center justify-center text-[10px] font-bold text-brand-navy shrink-0">NI</div>
            <div className={`truncate ${!isSidebarOpen ? 'hidden' : ''}`}>
              <div className="text-[10px] font-bold text-white/75 truncate">New Italycor Ltd.</div>
              <div className="text-[7px] text-white/25">Client · Nairobi, Kenya</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-[50px] bg-white border-b border-gray-100 flex items-center px-5 gap-4 shrink-0 shadow-sm z-10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-brand-navy p-1 transition-colors"
          >
            <List size={20} />
          </button>

          <div className="hidden md:block w-px h-5 bg-gray-100"></div>
          <div className="hidden sm:block text-[10px] font-semibold text-gray-400 truncate">New Italycor Ltd. — Client Portal</div>

          <div className="flex-1 max-w-[240px] bg-brand-cream border border-gray-100 rounded-lg px-3 py-1 flex items-center gap-2 ml-auto md:ml-0">
            <Search size={13} className="text-gray-300 shrink-0" />
            <input placeholder="Search deals, partners..." className="bg-transparent border-none text-[11px] outline-none w-full" />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <div className="relative w-8 h-8 rounded-lg bg-brand-cream border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-all">
              <Bell size={14} />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-gold border-2 border-white rounded-full flex items-center justify-center text-[6px] font-bold text-brand-navy">3</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-brand-cream border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition-all hidden sm:flex">
              <Settings size={14} />
            </div>
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
            >
              <LogOut size={13} /> <span className="hidden xs:inline">Exit</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 relative">

          {activeTab === 'dashboard' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <div className="w-7 h-0.5 bg-brand-gold rounded-full mb-1"></div>
                  <h2 className="text-sm font-extrabold uppercase tracking-widest">My Trade Dashboard</h2>
                  <p className="text-[10px] text-gray-400 mt-0.5 font-medium">New Italycor Ltd. · Nairobi, Kenya · July 2026</p>
                </div>
                <button
                   onClick={() => setActiveTab('feed')}
                   className="bg-brand-navy text-brand-gold text-[10px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-brand-navy/10 active:scale-95 transition-all"
                >
                  <List size={14} /> View Feed
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {[
                  { label: 'Active Deals', value: '5', trend: '↑ +2 this month', trendCol: 'text-emerald-500' },
                  { label: 'Pipeline', value: '5.4M', trend: '↑ +18% MoM', trendCol: 'text-emerald-500' },
                  { label: 'Markets', value: '4', trend: 'KE · UG · TZ · RW', trendCol: 'text-gray-400' },
                  { label: 'In Transit', value: '3', trend: 'Shipments active', trendCol: 'text-blue-500' }
                ].map((kpi, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 border-l-4 border-l-brand-gold shadow-sm">
                    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">{kpi.label}</div>
                    <div className="font-display text-xl font-bold">{kpi.value}</div>
                    <div className={`text-[9px] mt-1 font-semibold ${kpi.trendCol}`}>{kpi.trend}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 mb-4">
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center">
                    <h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Deal Pipeline</h3>
                    <span onClick={() => setActiveTab('deals')} className="text-[9px] font-bold text-brand-gold2 cursor-pointer">View all →</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-50">
                          <th className="px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">Deal</th>
                          <th className="px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest text-center">Market</th>
                          <th className="px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">Value</th>
                          <th className="px-4 py-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">Stage</th>
                        </tr>
                      </thead>
                      <tbody className="text-[10px]">
                        {[
                          { name: 'Kampala FMCG', market: '🇺🇬', val: '2.1M', stage: 'Negotiating', stageBg: 'bg-blue-50 text-blue-600' },
                          { name: 'Dar Hotels', market: '🇹🇿', val: '1.4M', stage: 'Closing', stageBg: 'bg-emerald-50 text-emerald-600' },
                          { name: 'Kigali Premium', market: '🇷🇼', val: '850K', stage: 'Verification', stageBg: 'bg-amber-50 text-amber-600' },
                          { name: 'EU Delegation', market: '🇰🇪', val: '920K', stage: 'Negotiating', stageBg: 'bg-blue-50 text-blue-600' }
                        ].map((d, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-brand-gold/[0.03] transition-all">
                            <td className="px-4 py-2.5 font-bold">{d.name}</td>
                            <td className="px-4 py-2.5 text-center text-sm">{d.market}</td>
                            <td className="px-4 py-2.5 font-bold">{d.val}</td>
                            <td className="px-4 py-2.5">
                              <span className={`px-2 py-0.5 rounded-full font-bold text-[8px] ${d.stageBg}`}>{d.stage}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-gray-50"><h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Market Reach</h3></div>
                    <div className="p-4 space-y-3">
                      {[
                        { m: '🇰🇪 Kenya', p: 88 }, { m: '🇺🇬 Uganda', p: 64 }, { m: '🇹🇿 Tanzania', p: 47 }, { m: '🇷🇼 Rwanda', p: 39 }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[9px] font-bold mb-1.5">
                            <span>{item.m}</span>
                            <span className="text-gray-400">{item.p}%</span>
                          </div>
                          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-gold rounded-full" style={{ width: `${item.p}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-gray-50"><h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Alerts</h3></div>
                    <div className="p-3 space-y-1">
                      {[
                        { icon: '⚡', text: 'KES/EUR favourable — Act within 30 days' },
                        { icon: '⚠️', text: 'RICA Rwanda — Renewal due August 2026' },
                        { icon: '🤝', text: 'New match — Ethiopian Airlines Catering · 94%' }
                      ].map((alert, i) => (
                        <div key={i} className="flex gap-2.5 p-2 border-b border-gray-50 last:border-0 items-start">
                          <span className="text-sm shrink-0">{alert.icon}</span>
                          <span className="text-[10px] font-medium leading-tight">{alert.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Kanban View */}
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-gray-50"><h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Deal Room — Pipeline View</h3></div>
                <div className="p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                      { label: 'Inquiry', count: 2, deals: [{ f: '🇨🇩', t: 'Kinshasa Retail Pilot', c: 'AfroRetail Partners', v: '420K' }, { f: '🇸🇸', t: 'Juba Supermarket', c: 'SunFresh Ltd.', v: '310K' }] },
                      { label: 'Verification', count: 2, deals: [{ f: '🇷🇼', t: 'Kigali Premium Food', c: 'Rwanda Fresh Foods', v: '850K' }, { f: '🇪🇹', t: 'Addis HORECA', c: 'EastAfrica Foods', v: '680K' }] },
                      { label: 'Negotiating', count: 2, deals: [{ f: '🇺🇬', t: 'Kampala FMCG', c: 'New Italycor Ltd.', v: '2.1M' }, { f: '🇰🇪', t: 'EU Delegation', c: 'EU Delegation', v: '920K' }] },
                      { label: 'Closing', count: 1, deals: [{ f: '🇹🇿', t: 'Dar es Salaam Hotels', c: 'HospiBridge Ltd.', v: '1.4M', active: true }] },
                      { label: 'Completed', count: 2, deals: [{ f: '🇰🇪', t: 'QuickMart Supply', c: 'QuickMart Kenya', v: '3.2M', opacity: true }] }
                    ].map((col, i) => (
                      <div key={i} className="bg-brand-cream/50 rounded-lg p-2.5 flex flex-col gap-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">{col.label}</span>
                          <span className="bg-brand-navy text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full">{col.count}</span>
                        </div>
                        {col.deals.map((deal, di) => (
                          <div key={di} className={`bg-white border rounded-lg p-3 shadow-sm cursor-pointer hover:border-brand-gold transition-all ${deal.active ? 'border-brand-gold ring-1 ring-brand-gold/10' : 'border-gray-100'} ${deal.opacity && 'opacity-60'}`}>
                            <div className="text-sm mb-1">{deal.f}</div>
                            <div className="text-[9px] font-bold leading-tight mb-0.5 truncate">{deal.t}</div>
                            <div className="text-[8px] text-gray-400 truncate mb-1.5">{deal.c}</div>
                            <div className="text-[10px] font-extrabold text-brand-navy">KES {deal.v}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'feed' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-5xl mx-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="w-7 h-0.5 bg-brand-gold rounded-full mb-1"></div>
                  <h2 className="text-sm font-extrabold uppercase tracking-widest">Trade Feed</h2>
                  <p className="text-[10px] text-gray-400 mt-0.5">Live opportunities · 312 active · All East & Central Africa</p>
                </div>
                <button className="bg-brand-navy text-brand-gold text-[10px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 active:scale-95 transition-all">
                  <Plus size={14} /> Post Opportunity
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
                <div className="space-y-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mb-2">
                    <div className="flex gap-3 items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold text-[10px] font-bold">NI</div>
                      <div className="flex-1 bg-brand-cream border border-gray-200 rounded-full px-4 py-2 text-[11px] text-gray-400 cursor-pointer hover:bg-gray-50 transition-all font-medium">What opportunity are you posting?</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['I Need', 'I Can Supply', 'Opportunity', 'Market Signal'].map(t => (
                        <button key={t} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:border-brand-navy hover:text-brand-navy transition-all">
                          {t === 'I Need' && <Search size={12} />}
                          {t === 'I Can Supply' && <Package size={12} />}
                          {t === 'Opportunity' && <Star size={12} />}
                          {t === 'Market Signal' && <TrendingUp size={12} />}
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {ALL_POSTS.map((post, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-gray-200 transition-all">
                       <div className="p-4 pb-2 flex justify-between items-start">
                         <div className="flex gap-3 items-start">
                           <div className={`w-9 h-9 rounded-full ${post.bg} ${post.col} flex items-center justify-center text-[11px] font-extrabold shrink-0`}>{post.av}</div>
                           <div>
                             <div className="flex items-center gap-1.5 mb-0.5">
                               <span className="text-[11px] font-extrabold">{post.name}</span>
                               {post.verified && <BadgeCheck size={13} className="text-emerald-500" />}
                               <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${post.type === 'offering' ? 'bg-emerald-50 text-emerald-600' : post.type === 'seeking' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                                 {post.typeLabel}
                               </span>
                             </div>
                             <div className="text-[10px] text-gray-400 font-medium">{post.company} · <span className="bg-brand-cream px-1.5 py-0.5 rounded-full text-[8px] font-bold">{post.country}</span></div>
                             <div className="text-[9px] text-gray-300 mt-0.5">{post.date}, 2026</div>
                           </div>
                         </div>
                         <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-[10px] font-bold hover:border-brand-gold transition-all"><Plus size={12} /> <span className="hidden xs:inline">Connect</span></button>
                       </div>
                       <div className="px-4 py-2">
                         <p className="text-[11px] leading-relaxed mb-3 text-gray-700">{post.text}</p>
                         <div className="flex flex-wrap gap-1.5 mb-3">
                           {post.tags.map(t => <span key={t} className="bg-gray-50 text-brand-navy px-2 py-0.5 rounded-full text-[9px] font-bold border border-gray-100">{t}</span>)}
                         </div>
                       </div>
                       <div className="border-t border-gray-50 flex divide-x divide-gray-50">
                         <button className="flex-1 py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><ThumbsUp size={14} /> <span className="hidden sm:inline">Interested</span></button>
                         <button className="flex-1 py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><MessageSquare size={14} /> <span className="hidden sm:inline">Message</span></button>
                         <button className="flex-1 py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 hover:bg-gray-50 hover:text-brand-navy transition-all"><Share2 size={14} /> <span className="hidden sm:inline">Share</span></button>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 lg:sticky lg:top-0">
                  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-gray-50"><h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Top Matches</h3></div>
                    <div className="p-4 space-y-4">
                       {MATCHES.map((m, i) => (
                         <div key={i} className="flex items-center gap-3">
                           <div className={`w-8 h-8 rounded-lg ${m.bg} ${m.col} flex items-center justify-center text-[10px] font-bold shrink-0`}>{m.av}</div>
                           <div className="flex-1 min-w-0">
                             <div className="text-[10px] font-bold truncate">{m.name}</div>
                             <div className="text-[9px] text-gray-400 truncate mt-0.5">{m.sub}</div>
                           </div>
                           <div className="text-[11px] font-extrabold text-brand-gold2">{m.score}</div>
                         </div>
                       ))}
                       <button onClick={() => setActiveTab('match')} className="w-full py-2 bg-white border border-gray-100 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-all">
                         View all matches <ChevronRight size={14} />
                       </button>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-3 border-b border-gray-50"><h3 className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60">Market Signals</h3></div>
                    <div className="p-3 space-y-3">
                      {[
                        { icon: '📈', text: 'Italian food demand +40% in Nairobi HORECA' },
                        { icon: '💱', text: 'KES/EUR 5.7% favourable swing' },
                        { icon: '🇺🇬', text: 'Uganda hotel occupancy at 5-year high' }
                      ].map((s, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <span className="text-sm shrink-0">{s.icon}</span>
                          <span className="text-[9px] font-medium leading-normal text-brand-navy/80">{s.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stubs for other tabs */}
          {['deals', 'crm', 'export', 'finance', 'policy', 'match', 'marketplace'].includes(activeTab) && activeTab !== 'dashboard' && activeTab !== 'feed' && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-300">
               <div className="w-16 h-16 rounded-2xl bg-brand-cream border border-gray-100 flex items-center justify-center text-gray-300 mb-4">
                 {menuGroups.flatMap(g => g.items).find(i => i.id === activeTab)?.icon}
               </div>
               <h2 className="text-lg font-bold mb-1">{menuGroups.flatMap(g => g.items).find(i => i.id === activeTab)?.label}</h2>
               <p className="text-[11px] text-gray-400 mb-6">This section is currently under development.</p>
               <button onClick={() => setActiveTab('dashboard')} className="bg-brand-navy text-brand-gold text-[10px] font-bold px-6 py-2.5 rounded-lg active:scale-95 transition-all">Return to Dashboard</button>
            </div>
          )}

        </main>
      </div>

      {/* Sidebar Toggle Overlay for Mobile (if open) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-brand-navy/20 z-[40] md:hidden backdrop-blur-[1px]"
        ></div>
      )}
    </div>
  );
};
