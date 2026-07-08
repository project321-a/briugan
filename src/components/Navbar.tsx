import React, { useState, useEffect } from 'react';
import { Menu, X, Search, LogIn, UserPlus, LayoutList, Briefcase, Zap, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onJoin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Feed', path: '/feed', icon: <LayoutList size={15} /> },
    { name: 'Deals', path: '/deals', icon: <Briefcase size={15} /> },
    { name: 'Services', path: '/services', icon: <Zap size={15} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={15} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 h-[60px] flex items-center px-6 gap-0 border-b border-white/10 ${isScrolled ? 'bg-brand-navy/96 backdrop-blur-md' : 'bg-brand-navy/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center">
          <div onClick={() => navigate('/')} className="font-display text-lg text-brand-gold tracking-[2px] font-bold mr-8 no-underline cursor-pointer">
            BRIUGAN
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => navigate(link.path)}
                className={`text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-all flex items-center gap-1.5 ${location.pathname === link.path ? 'text-brand-gold bg-brand-gold/10' : 'text-white/55 hover:text-brand-gold hover:bg-brand-gold/10'}`}
              >
                {link.icon}
                {link.name}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 w-[220px]">
            <Search size={13} className="text-white/30 flex-shrink-0" />
            <input
              placeholder="Search the network..."
              className="bg-transparent border-none text-[11px] font-sans text-white w-full outline-none placeholder:text-white/30"
            />
          </div>
          <button
            onClick={() => navigate('/portal')}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-transparent border-[1.5px] border-white/25 rounded-lg px-3.5 py-1.5 cursor-pointer transition-all hover:border-brand-gold hover:text-brand-gold"
          >
            <LogIn size={13} /> Sign In
          </button>
          <button
            onClick={onJoin}
            className="flex items-center gap-1.5 text-xs font-extrabold text-brand-navy bg-brand-gold rounded-lg px-4 py-1.5 cursor-pointer transition-all hover:bg-brand-gold2 border-none"
          >
            <UserPlus size={12} /> Join Free
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => navigate('/portal')}
            className="text-white/80 p-1"
          >
            <LogIn size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full bg-brand-navy/98 backdrop-blur-xl border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300 z-[190]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => { navigate(link.path); setIsMobileMenuOpen(false); }}
                className={`block px-3 py-4 text-sm font-semibold border-b border-white/5 flex items-center gap-3 cursor-pointer ${location.pathname === link.path ? 'text-brand-gold' : 'text-white/70'}`}
              >
                {link.icon}
                {link.name}
              </div>
            ))}
            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => { navigate('/portal'); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/20 text-white rounded-lg font-bold"
              >
                <LogIn size={16} /> Sign In
              </button>
              <button
                onClick={() => { onJoin?.(); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-gold text-brand-navy rounded-lg font-extrabold"
              >
                <UserPlus size={16} /> Join Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
