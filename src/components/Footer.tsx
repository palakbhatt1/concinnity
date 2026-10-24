import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-t border-slate-100 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-base text-neutral-900 tracking-tight block leading-none">
                Solopreneur OS
              </span>
              <span className="text-[11px] text-neutral-400 leading-none mt-1 block">
                The operating system for boutique businesses & modern teams.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-500">
            <a href="#why-us" className="hover:text-neutral-900 transition-colors">
              Why us
            </a>
            <a href="#pick-business" className="hover:text-neutral-900 transition-colors">
              Models
            </a>
            <a href="#features" className="hover:text-neutral-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-neutral-900 transition-colors">
              Pricing
            </a>
            <a href="#integrations" className="hover:text-neutral-900 transition-colors">
              Integrations
            </a>
            <a href="#faq" className="hover:text-neutral-900 transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 text-xs">
            <span className="text-[11px] text-neutral-400">© 2026 Solopreneur OS. All rights reserved.</span>
          </div>
        </div>
      </div>

      <div className="w-full h-44 sm:h-64 md:h-80 relative overflow-hidden">
        <img
          src="/footer-hills.jpg"
          alt="Rolling green hills landscape"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none" />
      </div>
    </footer>
  )
}
