import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* ═══════════ DATA ═══════════ */
const CLIENTS = [
  { id: 'NI', name: 'New Italycor Ltd.', country: 'Kenya', flag: '🇰🇪', deals: 5, pipeline: 5400000, status: 'active', phase: 3, joined: 'Jan 2025', contact: 'John Ngugi', sector: 'Premium Italian Food', bg: '#ecfdf5', col: '#065f46' },
  { id: 'HB', name: 'HospiBridge Ltd.', country: 'Tanzania', flag: '🇹🇿', deals: 3, pipeline: 2100000, status: 'active', phase: 2, joined: 'Mar 2025', contact: 'Sarah Nankunda', sector: 'Hotel Procurement', bg: '#eff6ff', col: '#1e40af' },
  { id: 'RF', name: 'Rwanda Fresh Foods', country: 'Rwanda', flag: '🇷🇼', deals: 2, pipeline: 1050000, status: 'active', phase: 2, joined: 'Nov 2024', contact: 'Philippe Habimana', sector: 'Food Distribution', bg: '#fdf4ff', col: '#6b21a8' },
  { id: 'EA', name: 'EastAfrica Foods', country: 'Ethiopia', flag: '🇪🇹', deals: 1, pipeline: 680000, status: 'verification', phase: 1, joined: 'May 2026', contact: 'Amara Tekeste', sector: 'HORECA Supply', bg: '#fffbeb', col: '#92400e' },
  { id: 'AR', name: 'AfroRetail Partners', country: 'DRC', flag: '🇨🇩', deals: 1, pipeline: 420000, status: 'onboarding', phase: 1, joined: 'Jun 2026', contact: 'Celestin Mukendi', sector: 'Retail Chain', bg: '#fef2f2', col: '#991b1b' },
];

const DEALS = [
  { id: 'D001', clientId: 'NI', name: 'Kampala FMCG Distribution', market: 'Uganda', flag: '🇺🇬', value: 2100000, stage: 'negotiation', sector: 'Retail', lead: 'Briugan UG', docs: 5 },
  { id: 'D002', clientId: 'NI', name: 'Kigali Premium Food', market: 'Rwanda', flag: '🇷🇼', value: 850000, stage: 'verification', sector: 'Distribution', lead: 'Briugan RW', docs: 2 },
  { id: 'D003', clientId: 'NI', name: 'Dar es Salaam Hotels', market: 'Tanzania', flag: '🇹🇿', value: 1400000, stage: 'closing', sector: 'HORECA', lead: 'Briugan TZ', docs: 7 },
  { id: 'D004', clientId: 'NI', name: 'EU Delegation Supply', market: 'Kenya', flag: '🇰🇪', value: 920000, stage: 'negotiation', sector: 'Institutional', lead: 'Briugan KE', docs: 3 },
  { id: 'D005', clientId: 'NI', name: 'Addis HORECA Partner', market: 'Ethiopia', flag: '🇪🇹', value: 680000, stage: 'verification', sector: 'HORECA', lead: 'Briugan ET', docs: 1 },
  { id: 'D006', clientId: 'HB', name: 'Mombasa Port Hotels', market: 'Kenya', flag: '🇰🇪', value: 760000, stage: 'inquiry', sector: 'HORECA', lead: 'Briugan KE', docs: 0 },
  { id: 'D007', clientId: 'HB', name: 'Entebbe Airport Dining', market: 'Uganda', flag: '🇺🇬', value: 540000, stage: 'closing', sector: 'HORECA', lead: 'Briugan UG', docs: 4 },
  { id: 'D008', clientId: 'RF', name: 'Nairobi Specialty Stores', market: 'Kenya', flag: '🇰🇪', value: 380000, stage: 'negotiation', sector: 'Retail', lead: 'Briugan KE', docs: 2 },
  { id: 'D009', clientId: 'EA', name: 'Addis 5-star Hotels', market: 'Ethiopia', flag: '🇪🇹', value: 680000, stage: 'verification', sector: 'HORECA', lead: 'Briugan ET', docs: 1 },
  { id: 'D010', clientId: 'AR', name: 'Kinshasa Retail Pilot', market: 'DRC', flag: '🇨🇩', value: 420000, stage: 'inquiry', sector: 'Retail', lead: 'Briugan DRC', docs: 0 },
  { id: 'D011', clientId: 'NI', name: 'QuickMart Kenya Supply', market: 'Kenya', flag: '🇰🇪', value: 3200000, stage: 'completed', sector: 'Retail', lead: 'Briugan KE', docs: 10 },
  { id: 'D012', clientId: 'HB', name: 'Kempinski Nairobi', market: 'Kenya', flag: '🇰🇪', value: 890000, stage: 'completed', sector: 'HORECA', lead: 'Briugan KE', docs: 8 },
];

const INITIAL_NOTIFS = [
  { id: 1, bg: '#ecfdf5', col: '#065f46', ico: '✓', title: 'Deal verified', body: 'Dar es Salaam Hotel Supply cleared compliance review', time: '2h ago', read: false },
  { id: 2, bg: '#fef9ee', col: '#92400e', ico: '★', title: 'New client onboarded', body: 'AfroRetail Partners completed KYC — active on platform', time: '5h ago', read: false },
  { id: 3, bg: '#fffbeb', col: '#92400e', ico: '!', title: 'Action needed', body: 'RICA registration for New Italycor expires August 2026', time: '1d ago', read: false },
  { id: 4, bg: '#eff6ff', col: '#1e40af', ico: '✉', title: 'Counter-offer received', body: 'Kampala FMCG — 3rd round counter from buyer received', time: '1d ago', read: true },
  { id: 5, bg: '#fdf4ff', col: '#6b21a8', ico: '$', title: 'FX window open', body: 'KES/EUR at 140.2 — 30-day forward contract available', time: '2d ago', read: true },
  { id: 6, bg: '#ecfdf5', col: '#065f46', ico: '⚓', title: 'Shipment cleared', body: 'SHP-2026-0044 cleared at Kigali Airport', time: '2d ago', read: true }
];


const fmt = (n: number) => n >= 1e6 ? `KES ${(n / 1e6).toFixed(1)}M` : `KES ${(n / 1e3).toFixed(0)}K`;

const stageCol: any = { inquiry: '#6b21a8', verification: '#92400e', negotiation: '#1e40af', closing: '#065f46', completed: '#374151' };
const stageBg: any = { inquiry: '#fdf4ff', verification: '#fffbeb', negotiation: '#eff6ff', closing: '#ecfdf5', completed: '#f3f4f6' };
const stageLbl: any = { inquiry: 'Inquiry', verification: 'Verification', negotiation: 'Negotiating', closing: 'Closing', completed: 'Completed' };
const stageOrder = ['inquiry', 'verification', 'negotiation', 'closing', 'completed'];

export const ClientPortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<'admin' | 'client'>('admin');
  const [activePage, setActivePage] = useState('dashboard');
  const [notifs, setNotifs] = useState(INITIAL_NOTIFS);
  const [isNDOpen, setIsNDOpen] = useState(false);
  const [activeDeal, setActiveDeal] = useState<any>(null);
  const [dealTab, setDealTab] = useState('overview');
  const [clientData, setClientData] = useState<any>(null);

  // Check if we arrived from the contact form
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const company = params.get('company');
    if (company) {
      setRole('client');
      setIsAuthenticated(true);
      setClientData({
        name: company,
        status: 'onboarding',
        sector: 'New Inquiry',
        country: 'Kenya', // Default or from params
      });
    }
  }, [location]);

  const login = (r: 'admin' | 'client') => {
    setRole(r);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/portal');
  };

  const toggleNotif = (id: number) => {
    setNotifs(notifs.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllRead = () => {
    setNotifs(notifs.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifs.filter(n => !n.read).length;

  if (!isAuthenticated) {
    return (
      <div id="auth" className="fixed inset-0 bg-portal-n flex flex-col items-center justify-center z-[100] transition-opacity duration-400">
        <div className="text-[11px] font-bold text-white/25 tracking-[3px] uppercase mb-6">BRIUGAN CONSULTING · NAIROBI</div>
        <div className="font-display text-[52px] text-portal-g tracking-[4px] mb-2">BRIUGAN</div>
        <div className="text-[11px] text-portal-g tracking-[2px] uppercase font-semibold mb-2">Trade Platform</div>
        <div className="text-[11px] text-white/35 tracking-[3px] uppercase mb-[50px]">Business Growth · Market Access · Strategic Partnerships</div>
        <div className="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-portal-g to-transparent mx-auto mb-9"></div>
        <p className="text-[11px] text-white/30 mb-7">Select your access level to continue</p>
        <div className="flex gap-6">
          <div className="bg-white/5 border border-white/10 rounded-[18px] p-8 w-[220px] text-center cursor-pointer transition-all hover:bg-portal-g/20 hover:border-portal-g hover:-translate-y-1 hover:shadow-xl hover:shadow-portal-g/15" onClick={() => login('admin')}>
            <i className="ti ti-building-skyscraper text-4xl text-portal-g block mb-4"></i>
            <div className="text-sm font-extrabold text-white mb-2">Platform Admin</div>
            <div className="text-[10px] text-white/40 leading-relaxed">Manage all clients, deals, and Briugan platform operations</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[18px] p-8 w-[220px] text-center cursor-pointer transition-all hover:bg-portal-g/20 hover:border-portal-g hover:-translate-y-1 hover:shadow-xl hover:shadow-portal-g/15" onClick={() => login('client')}>
            <i className="ti ti-briefcase text-4xl text-portal-g block mb-4"></i>
            <div className="text-sm font-extrabold text-white mb-2">Client Portal</div>
            <div className="text-[10px] text-white/40 leading-relaxed">Access your active deals and market expansion progress</div>
          </div>
        </div>
        <p className="text-[9px] text-white/15 mt-12 tracking-[0.5px]">© 2026 Briugan Consulting · Nairobi, Kenya · info@briugan.com</p>
      </div>
    );
  }

  return (
    <div id="app" className="flex flex-col h-screen overflow-hidden bg-portal-cr font-sans text-portal-tx">
      <header className="h-[52px] bg-white border-b border-portal-bd flex items-center px-5 gap-3.5 shrink-0 shadow-sm z-10">
        <div className="font-display text-lg text-portal-n tracking-[2px] font-bold">BRIUGAN</div>
        <div className="w-[1px] h-[22px] bg-portal-bd"></div>
        <div className="text-[10px] text-portal-mu font-semibold">
          {role === 'admin' ? 'Platform Admin' : `${clientData?.name || 'New Italycor Ltd.'} — Client Portal`}
        </div>
        <div className="flex-1 max-w-[280px] flex items-center gap-2 bg-portal-cr border border-portal-bd rounded-lg px-3 py-1.5 ml-4">
          <i className="ti ti-search text-sm text-portal-li shrink-0"></i>
          <input className="bg-transparent border-none text-[11px] w-full outline-none" placeholder="Search deals, clients, partners…" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-[34px] h-[34px] rounded-lg bg-portal-cr border border-portal-bd flex items-center justify-center cursor-pointer text-portal-mu text-lg relative hover:bg-portal-cr2 hover:text-portal-n" onClick={() => setIsNDOpen(!isNDOpen)}>
            <i className="ti ti-bell"></i>
            {unreadCount > 0 && <div className="absolute top-1 right-1 w-[15px] h-[15px] bg-portal-g rounded-full text-[8px] font-extrabold text-portal-n flex items-center justify-center border-2 border-white">{unreadCount}</div>}
          </div>
          <div className="w-[34px] h-[34px] rounded-lg bg-portal-cr border border-portal-bd flex items-center justify-center cursor-pointer text-portal-mu text-base hover:bg-portal-cr2 hover:text-portal-n" onClick={() => setActivePage('settings')}>
            <i className="ti ti-settings"></i>
          </div>
          <div className="w-8 h-8 rounded-full bg-portal-n flex items-center justify-center text-[11px] font-extrabold text-portal-g cursor-pointer">
            {role === 'admin' ? 'AD' : (clientData?.name?.substring(0, 2).toUpperCase() || 'NI')}
          </div>
          <div className="text-[10px] font-semibold text-portal-mu cursor-pointer px-2 py-1.5 rounded-md flex items-center gap-1 hover:text-portal-er hover:bg-portal-er/10" onClick={logout}>
            <i className="ti ti-logout text-sm"></i> Logout
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-[210px] bg-portal-n flex flex-col overflow-y-auto shrink-0 border-r border-white/5">
          <div className="p-4 pb-3 border-b border-white/5">
            <div className="font-display text-base text-portal-g tracking-[1px]">BRIUGAN</div>
            <div className="text-[8px] text-white/30 tracking-[2.5px] uppercase mt-0.5">Trade Platform · 2026</div>
          </div>
          <div className="py-2.5">
            <div className="text-[8px] font-extrabold tracking-[2px] uppercase text-white/20 px-4 mb-1">Command</div>
            <NavItem active={activePage === 'dashboard'} icon="ti-layout-dashboard" label="Dashboard" onClick={() => setActivePage('dashboard')} />
            <NavItem active={activePage === 'analytics'} icon="ti-chart-bar" label="Analytics" onClick={() => setActivePage('analytics')} />
          </div>
          <div className="py-2.5">
            <div className="text-[8px] font-extrabold tracking-[2px] uppercase text-white/20 px-4 mb-1">Clients & Deals</div>
            {role === 'admin' && <NavItem active={activePage === 'clients'} icon="ti-users" label="Clients" count={CLIENTS.length} onClick={() => setActivePage('clients')} />}
            <NavItem active={activePage === 'deals'} icon="ti-briefcase" label="Deal Room" count={DEALS.filter(d => role === 'admin' || d.clientId === 'NI').length} onClick={() => setActivePage('deals')} />
            <NavItem active={activePage === 'crm'} icon="ti-address-book" label="CRM" onClick={() => setActivePage('crm')} />
          </div>
          <div className="py-2.5">
            <div className="text-[8px] font-extrabold tracking-[2px] uppercase text-white/20 px-4 mb-1">Operations</div>
            <NavItem active={activePage === 'export'} icon="ti-ship" label="Export Hub" onClick={() => setActivePage('export')} />
            <NavItem active={activePage === 'finance'} icon="ti-coin" label="Trade Finance" onClick={() => setActivePage('finance')} />
            <NavItem active={activePage === 'policy'} icon="ti-file-certificate" label="Policy Tracker" onClick={() => setActivePage('policy')} />
          </div>
          <div className="py-2.5">
            <div className="text-[8px] font-extrabold tracking-[2px] uppercase text-white/20 px-4 mb-1">Growth</div>
            <NavItem active={activePage === 'match'} icon="ti-sparkles" label="AI Match Engine" onClick={() => setActivePage('match')} />
            <NavItem active={activePage === 'proposals'} icon="ti-file-text" label="Proposals" onClick={() => setActivePage('proposals')} />
            <NavItem active={activePage === 'marketplace'} icon="ti-world" label="Marketplace" onClick={() => setActivePage('marketplace')} />
          </div>
          <div className="mt-auto p-3.5 border-t border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-7.5 h-7.5 rounded-full bg-portal-g flex items-center justify-center text-[10px] font-extrabold text-portal-n shrink-0">
                {role === 'admin' ? 'AD' : 'NI'}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold text-white/80 truncate">{role === 'admin' ? 'Briugan Admin' : (clientData?.name || 'New Italycor')}</div>
                <div className="text-[8px] text-white/30 mt-0.5 truncate">Nairobi, Kenya · {role}</div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto relative bg-portal-cr p-5 lg:p-6">
          {activePage === 'dashboard' && <Dashboard role={role} clientData={clientData} setActivePage={setActivePage} setDealTab={setDealTab} setActiveDeal={setActiveDeal} />}
          {activePage === 'analytics' && <Analytics />}
          {activePage === 'clients' && <Clients role={role} />}
          {activePage === 'deals' && <DealRoom role={role} setActiveDeal={setActiveDeal} />}
          {activePage === 'export' && <ExportHub />}
          {activePage === 'finance' && <TradeFinance />}
          {activePage === 'policy' && <PolicyTracker />}
          {activePage === 'match' && <AIMatch />}
          {activePage === 'proposals' && <Proposals />}
          {activePage === 'marketplace' && <Marketplace />}
          {activePage === 'settings' && <Settings role={role} />}
          {activePage === 'notifications' && <NotificationsPage notifs={notifs} toggleNotif={toggleNotif} markAllRead={markAllRead} />}
        </main>
      </div>

      {/* Deal Overlay */}
      {activeDeal && (
        <div id="deal-ov" className="fixed inset-0 bg-portal-n/65 z-50 flex justify-end backdrop-blur-[2px]">
          <div className="flex-1 cursor-pointer" onClick={() => setActiveDeal(null)}></div>
          <div className="w-full max-w-[660px] bg-white flex flex-col shadow-2xl animate-fadeIn">
            <div className="bg-portal-n p-4 px-5 flex items-center justify-between shrink-0">
              <div>
                <div className="text-sm font-extrabold text-white">{activeDeal.name}</div>
                <div className="text-[10px] text-white/50 mt-0.5">{activeDeal.flag} {activeDeal.market} · {fmt(activeDeal.value)} · {stageLbl[activeDeal.stage]}</div>
              </div>
              <div className="w-[30px] h-[30px] rounded-full bg-white/10 flex items-center justify-center cursor-pointer text-white/70 text-lg hover:bg-white/20 hover:text-white" onClick={() => setActiveDeal(null)}>
                <i className="ti ti-x"></i>
              </div>
            </div>
            <div className="border-b border-portal-bd flex shrink-0 bg-portal-cr">
              {['overview', 'messages', 'documents', 'timeline'].map(tab => (
                <div key={tab} className={`px-[18px] py-[11px] text-[11px] font-semibold cursor-pointer border-b-2 transition-all capitalize ${dealTab === tab ? 'text-portal-n border-portal-g bg-white' : 'text-portal-mu border-transparent hover:text-portal-n'}`} onClick={() => setDealTab(tab)}>
                  {tab}
                </div>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {dealTab === 'overview' && (
                <div>
                  <div className="grid grid-cols-2 gap-3.5 mb-4">
                    <div className="border border-portal-bd rounded-portal-r p-4">
                      <div className="space-y-2.5">
                        <StatItem label="Client" value={CLIENTS.find(c => c.id === activeDeal.clientId)?.name || '—'} />
                        <StatItem label="Target Market" value={`${activeDeal.flag} ${activeDeal.market}`} />
                        <StatItem label="Sector" value={activeDeal.sector} />
                        <StatItem label="Deal Value" value={fmt(activeDeal.value)} large />
                      </div>
                    </div>
                    <div className="border border-portal-bd rounded-portal-r p-4">
                      <div className="space-y-2.5">
                        <div>
                          <div className="text-[9px] font-bold uppercase text-portal-mu tracking-wider mb-1">Stage</div>
                          <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold" style={{ backgroundColor: stageBg[activeDeal.stage], color: stageCol[activeDeal.stage] }}>
                            {stageLbl[activeDeal.stage]}
                          </span>
                        </div>
                        <StatItem label="Lead Team" value={activeDeal.lead} />
                        <StatItem label="Documents" value={`${activeDeal.docs} files uploaded`} />
                      </div>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold uppercase text-portal-mu tracking-wider mb-2">Pipeline Progress</div>
                  <div className="flex rounded-md overflow-hidden h-6">
                    {stageOrder.map((s, idx) => {
                      const currentIdx = stageOrder.indexOf(activeDeal.stage);
                      const isDone = idx < currentIdx;
                      const isCurrent = idx === currentIdx;
                      return (
                        <div key={s} className={`flex-1 flex items-center justify-center text-[8px] font-semibold ${isDone ? 'bg-portal-n text-portal-g' : isCurrent ? 'bg-portal-g text-portal-n' : 'bg-portal-cr2 text-portal-mu'}`}>
                          {stageLbl[s]}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {dealTab === 'messages' && <div className="text-center py-10 text-portal-mu text-xs italic">Message thread integration coming soon.</div>}
              {dealTab === 'documents' && <div className="text-center py-10 text-portal-mu text-xs italic">Secure document vault access.</div>}
              {dealTab === 'timeline' && <div className="text-center py-10 text-portal-mu text-xs italic">Activity log and milestones.</div>}
            </div>
          </div>
        </div>
      )}

      {/* Notification Drawer */}
      {isNDOpen && (
        <div id="nd" className="fixed top-0 right-0 bottom-0 w-[320px] bg-white border-l border-portal-bd z-40 flex flex-col shadow-xl animate-fadeIn">
          <div className="p-4 px-[18px] border-b border-portal-bd flex items-center justify-between">
            <h3 className="text-[13px] font-extrabold text-portal-n">Notifications</h3>
            <div className="flex gap-2 items-center">
              <button className="px-2 py-1 border border-portal-bd2 rounded-md text-[10px] font-semibold hover:bg-portal-cr" onClick={markAllRead}>Mark all read</button>
              <span className="cursor-pointer text-portal-mu text-xl leading-none" onClick={() => setIsNDOpen(false)}>×</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {notifs.map(n => (
              <div key={n.id} className={`flex gap-2.5 p-3 px-4 border-b border-portal-bd cursor-pointer transition-all hover:bg-portal-cr ${n.read ? '' : 'bg-portal-g/5'}`} onClick={() => toggleNotif(n.id)}>
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[13px] font-extrabold shrink-0" style={{ backgroundColor: n.bg, color: n.col }}>{n.ico}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-portal-n">{n.title}</div>
                  <div className="text-[10px] text-portal-mu mt-0.5 leading-relaxed">{n.body}</div>
                  <div className="text-[9px] text-portal-li mt-1">{n.time}</div>
                </div>
                {!n.read && <div className="w-[7px] h-[7px] rounded-full bg-portal-g shrink-0 mt-1"></div>}
              </div>
            ))}
          </div>
          <div className="p-3 px-4 border-t border-portal-bd text-center">
            <button className="w-full py-2 border border-portal-bd2 rounded-md text-[10px] font-semibold hover:bg-portal-cr" onClick={() => { setActivePage('notifications'); setIsNDOpen(false); }}>View all notifications</button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════════ SUB-COMPONENTS ═══════════ */

const NavItem = ({ active, icon, label, count, onClick }: any) => (
  <div className={`flex items-center gap-2 px-4 py-2.5 cursor-pointer text-[11px] font-medium border-l-2 transition-all select-none hover:text-white/85 hover:bg-white/5 ${active ? 'text-portal-g border-portal-g bg-portal-g/10' : 'text-white/50 border-transparent'}`} onClick={onClick}>
    <i className={`ti ${icon} text-[15px] w-4 shrink-0`}></i>
    {label}
    {count !== undefined && <span className="ml-auto bg-portal-g text-portal-n text-[8px] font-extrabold px-1.5 py-0.5 rounded-lg">{count}</span>}
  </div>
);

const StatItem = ({ label, value, large }: any) => (
  <div>
    <div className="text-[9px] font-bold uppercase text-portal-mu tracking-wider mb-0.5">{label}</div>
    <div className={`${large ? 'text-[17px] font-extrabold font-display' : 'text-[13px] font-bold'} text-portal-n`}>{value}</div>
  </div>
);

const Dashboard = ({ role, clientData, setActivePage, setDealTab, setActiveDeal }: any) => {
  const filteredDeals = role === 'admin' ? DEALS : DEALS.filter(d => d.clientId === 'NI');
  const pipelineValue = filteredDeals.filter(d => d.stage !== 'completed').reduce((s, d) => s + d.value, 0);
  const activeCount = filteredDeals.filter(d => d.stage !== 'completed').length;

  return (
    <div className="animate-fadeIn">
      <div className="flex items-start justify-between mb-4.5">
        <div>
          <div className="w-[34px] h-[2px] bg-portal-g rounded-[1px] mb-1.5"></div>
          <h2 className="text-base font-extrabold text-portal-n">{role === 'admin' ? 'Admin Dashboard' : 'My Trade Portal'}</h2>
          <p className="text-[11px] text-portal-mu mt-1">{role === 'admin' ? 'All clients & deals · East Africa · July 2026' : `${clientData?.name || 'New Italycor Ltd.'} · Nairobi, Kenya · July 2026`}</p>
        </div>
        <button className="bg-portal-n text-portal-g px-3 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1.5 hover:bg-portal-n2" onClick={() => setActivePage(role === 'admin' ? 'clients' : 'deals')}>
          <i className={`ti ${role === 'admin' ? 'ti-user-plus' : 'ti-plus'}`}></i> {role === 'admin' ? 'Add Client' : 'New Deal Inquiry'}
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <KPI label="Total Pipeline" value={fmt(pipelineValue)} detail="↑ +24% YoY" positive />
        <KPI label="Active Deals" value={activeCount.toString()} detail="↑ +3 this month" positive />
        <KPI label={role === 'admin' ? 'Clients' : 'Success Rate'} value={role === 'admin' ? CLIENTS.length.toString() : '88%'} detail={role === 'admin' ? '3 active · 1 onboarding' : 'Closed vs Lost'} />
        <KPI label="Markets" value="9" detail="East & Central Africa" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        <Card title="Pipeline Status" action="View All →" onActionClick={() => setActivePage('deals')}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-portal-cr border-b border-portal-bd">
                  <th className="p-2.5 px-3 text-[9px] font-bold uppercase text-portal-mu tracking-wider">Entity</th>
                  <th className="p-2.5 px-3 text-[9px] font-bold uppercase text-portal-mu tracking-wider">Market</th>
                  <th className="p-2.5 px-3 text-[9px] font-bold uppercase text-portal-mu tracking-wider">Value</th>
                  <th className="p-2.5 px-3 text-[9px] font-bold uppercase text-portal-mu tracking-wider text-right">Stage</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeals.slice(0, 5).map(d => (
                  <tr key={d.id} className="border-b border-portal-bd last:border-0 hover:bg-portal-g/5 cursor-pointer" onClick={() => { setActiveDeal(d); setDealTab('overview'); }}>
                    <td className="p-2.5 px-3 text-[11px] font-bold text-portal-n">{d.name}</td>
                    <td className="p-2.5 px-3 text-[10px]">{d.flag} {d.market}</td>
                    <td className="p-2.5 px-3 text-[11px] font-bold">{fmt(d.value)}</td>
                    <td className="p-2.5 px-3 text-right">
                      <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: stageBg[d.stage], color: stageCol[d.stage] }}>{stageLbl[d.stage]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <div className="flex flex-col gap-3.5">
          <Card title="Market Reach">
            <div className="space-y-2.5">
              <ProgressBar label="🇰🇪 Kenya" value={88} />
              <ProgressBar label="🇺🇬 Uganda" value={64} />
              <ProgressBar label="🇹🇿 Tanzania" value={47} />
              <ProgressBar label="🇷🇼 Rwanda" value={39} />
            </div>
          </Card>
          <Card title="Recent Activity">
            <div className="space-y-2">
              {INITIAL_NOTIFS.slice(0, 3).map(n => (
                <div key={n.id} className="flex gap-2.5 py-1.5 border-b border-portal-bd last:border-0">
                  <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0" style={{ backgroundColor: n.bg, color: n.col }}>{n.ico}</div>
                  <div>
                    <div className="text-[10px] font-bold text-portal-n">{n.title}</div>
                    <div className="text-[9px] text-portal-mu mt-0.5">{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const KPI = ({ label, value, detail, positive }: any) => (
  <div className="bg-white border border-portal-bd rounded-portal-r p-3.5 border-l-[3px] border-l-portal-g">
    <div className="text-[9px] font-bold uppercase tracking-wider text-portal-mu">{label}</div>
    <div className="text-[23px] font-extrabold text-portal-n font-display mt-0.5">{value}</div>
    <div className={`text-[10px] mt-1 flex items-center gap-1 ${positive ? 'text-portal-ok' : 'text-portal-mu'}`}>
      {detail}
    </div>
  </div>
);

const Card = ({ title, children, action, onActionClick }: any) => (
  <div className="bg-white border border-portal-bd rounded-portal-r overflow-hidden flex flex-col">
    <div className="p-3 px-4 border-b border-portal-bd flex items-center justify-between">
      <h3 className="text-[10px] font-extrabold uppercase tracking-[0.6px] text-portal-n">{title}</h3>
      {action && <span className="text-[10px] text-portal-g2 font-bold cursor-pointer hover:underline" onClick={onActionClick}>{action}</span>}
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const ProgressBar = ({ label, value }: any) => (
  <div>
    <div className="flex justify-between text-[10px] mb-1">
      <span className="font-semibold text-portal-n">{label}</span>
      <span className="text-portal-mu">{value}%</span>
    </div>
    <div className="h-1 bg-portal-cr2 rounded-full overflow-hidden">
      <div className="h-full bg-portal-g" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const Analytics = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Market Analytics & Intelligence</h2><p className="text-portal-mu mt-2">Aggregated data and trend analysis coming soon.</p></div>;
const Clients = (_props: any) => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Client Management</h2><p className="text-portal-mu mt-2">Manage your client portfolio and onboarding status.</p></div>;
const DealRoom = ({ setActiveDeal }: any) => (
  <div className="animate-fadeIn">
    <div className="flex items-start justify-between mb-4.5">
      <div>
        <div className="w-[34px] h-[2px] bg-portal-g rounded-[1px] mb-1.5"></div>
        <h2 className="text-base font-extrabold text-portal-n">Deal Room</h2>
        <p className="text-[11px] text-portal-mu mt-1">Full pipeline view · Collaborative transaction management</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
      {stageOrder.map(s => (
        <div key={s} className="bg-portal-cr2 rounded-[10px] p-2.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[9px] font-extrabold uppercase tracking-wider text-portal-mu">{stageLbl[s]}</div>
            <div className="bg-portal-n text-white text-[8px] px-1.5 py-0.5 rounded-md">{DEALS.filter(d => d.stage === s).length}</div>
          </div>
          <div className="space-y-2">
            {DEALS.filter(d => d.stage === s).map(d => (
              <div key={d.id} className="bg-white border border-portal-bd rounded-lg p-3 cursor-pointer transition-all hover:border-portal-g hover:shadow-md hover:shadow-portal-g/10 hover:-translate-y-0.5" onClick={() => setActiveDeal(d)}>
                <div className="text-[15px] mb-1.5">{d.flag}</div>
                <div className="text-[11px] font-bold text-portal-n leading-tight mb-1">{d.name}</div>
                <div className="text-[9px] text-portal-mu mb-2">{CLIENTS.find(c => c.id === d.clientId)?.name}</div>
                <div className="flex justify-between items-center gap-1">
                  <div className="text-[11px] font-extrabold text-portal-n">{fmt(d.value)}</div>
                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: stageBg[s], color: stageCol[s] }}>{d.sector}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
const ExportHub = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Export & Logistics</h2><p className="text-portal-mu mt-2">Shipment tracking and corridor performance metrics.</p></div>;
const TradeFinance = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Trade Finance</h2><p className="text-portal-mu mt-2">Access credit facilities and FX solutions.</p></div>;
const PolicyTracker = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Regional Policy Tracker</h2><p className="text-portal-mu mt-2">AfCFTA updates and compliance requirements.</p></div>;
const AIMatch = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">AI Match Engine</h2><p className="text-portal-mu mt-2">Claude-powered buyer discovery engine.</p></div>;
const Proposals = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">AI Proposal Generator</h2><p className="text-portal-mu mt-2">Generate professional market entry proposals in seconds.</p></div>;
const Marketplace = () => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Partner Marketplace</h2><p className="text-portal-mu mt-2">Verified distributors and buyers across the continent.</p></div>;
const Settings = (_props: any) => <div className="text-center py-20 animate-fadeIn"><h2 className="text-xl font-bold text-portal-n">Settings</h2><p className="text-portal-mu mt-2">Manage your account and notification preferences.</p></div>;

const NotificationsPage = ({ notifs, toggleNotif, markAllRead }: any) => (
  <div className="animate-fadeIn">
    <div className="flex items-start justify-between mb-4.5">
      <div>
        <div className="w-[34px] h-[2px] bg-portal-g rounded-[1px] mb-1.5"></div>
        <h2 className="text-base font-extrabold text-portal-n">Notifications</h2>
        <p className="text-[11px] text-portal-mu mt-1">Platform-wide alerts and updates</p>
      </div>
      <button className="px-3 py-1.5 border border-portal-bd2 rounded-lg text-[10px] font-semibold hover:bg-portal-cr" onClick={markAllRead}>
        <i className="ti ti-checks"></i> Mark all read
      </button>
    </div>
    <div className="bg-white border border-portal-bd rounded-portal-r overflow-hidden">
      {notifs.map(n => (
        <div key={n.id} className={`flex gap-3 p-4 border-b border-portal-bd cursor-pointer transition-all hover:bg-portal-cr ${n.read ? '' : 'bg-portal-g/5'}`} onClick={() => toggleNotif(n.id)}>
          <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ backgroundColor: n.bg, color: n.col }}>{n.ico}</div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-portal-n">{n.title}</div>
            <div className="text-[11px] text-portal-mu mt-0.5 leading-relaxed">{n.body}</div>
            <div className="text-[10px] text-portal-li mt-1">{n.time}</div>
          </div>
          {!n.read && <div className="w-2 h-2 rounded-full bg-portal-g shrink-0 mt-1"></div>}
        </div>
      ))}
    </div>
  </div>
);
