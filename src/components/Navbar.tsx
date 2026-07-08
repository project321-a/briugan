import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: 'mailto:info@briugan.com' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-brand-navy/97 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.18)]' : 'bg-transparent'} h-[68px] flex items-center`}>
      <div className="max-w-[1180px] mx-auto px-7 w-full flex items-center gap-6">
        <Link to="/" className="font-display text-[22px] text-brand-gold tracking-[2px] font-bold no-underline flex-shrink-0">
          BRIUGAN
        </Link>
        <div className="text-[9px] text-white/35 tracking-[2px] uppercase ml-[-4px]">Consulting</div>

        <div className="ml-auto flex items-center gap-1.5">
          {isHome && navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="hidden md:block text-[12px] font-semibold text-white/65 px-3 py-1.5 rounded-lg no-underline transition-all hover:text-brand-gold hover:bg-brand-gold/10"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hidden md:block text-[12px] font-semibold text-white/65 px-3 py-1.5 rounded-lg no-underline transition-all hover:text-brand-gold hover:bg-brand-gold/10"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/connect" className="bg-brand-gold text-brand-navy text-[12px] font-extrabold px-5 py-2.5 rounded-[9px] no-underline transition-all hover:bg-brand-gold2 hover:-translate-y-0.5 ml-1 flex items-center gap-2">
            <i className="ti ti-login text-[13px]"></i> Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};
