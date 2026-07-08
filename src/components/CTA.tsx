import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-brand-navy3 py-20 px-7 relative overflow-hidden" id="contact">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_width=%2260%22_height=%2260%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M0_0h1v1H0z%22_fill=%22rgba(212,175,55,0.05)%22/%3E%3C/svg%3E')] bg-[size:60px_60px]"></div>

      <div className="max-w-[700px] mx-auto text-center relative z-10 fade-up visible">
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-white mb-4 font-bold">
          Ready to grow your<br />trade business?
        </h2>
        <p className="text-[15px] text-white/60 mb-9 leading-[1.75]">
          Whether you are a first-time exporter or an established importer looking to scale — Briugan gives you the platform, the partners, and the team to make it happen.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link to="/connect" className="btn-primary">
            <i className="ti ti-rocket text-[15px]"></i> Access the Platform
          </Link>
          <a href="mailto:info@briugan.com?subject=New Company — Trade Platform Access Request&body=Hello Briugan team,%0A%0ACompany:%0ACountry:%0ASector:%0ATrade goal:%0A%0APlease activate my company workspace." className="btn-ghost">
            <i className="ti ti-user-plus text-[15px]"></i> Request Access
          </a>
        </div>
      </div>
    </section>
  );
};
