import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useWorkspaceStore } from '../store/workspace'

export const Nav: React.FC = () => {
  const { theme, toggleTheme } = useWorkspaceStore()

  return (
    <header className="w-full z-40 relative px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none rounded-lg">
          <div className="w-7 h-7 rounded-lg bg-[#0A0A0A] flex items-center justify-center shadow-md border border-white/10 transition-transform group-hover:scale-105">
            <svg
              className="w-4 h-4 text-[#F97316]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12c-2-2.5-4-3.5-6-3.5A4.5 4.5 0 0 0 1.5 13 4.5 4.5 0 0 0 6 17.5c2.5 0 4.5-1.5 6-4 1.5 2.5 3.5 4 6 4a4.5 4.5 0 0 0 4.5-4.5 4.5 4.5 0 0 0-4.5-4.5c-2 0-4 1-6 3.5z" />
            </svg>
          </div>
          <span className="font-bold text-base tracking-tight text-white flex items-center gap-1 drop-shadow-sm">
            Solopreneur <span className="font-extrabold text-[#F97316]">OS</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-white/90">
          <a href="#modules" className="hover:text-white transition-colors">
            Modules
          </a>
          <a href="#problem" className="hover:text-white transition-colors">
            Why us
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-white" />}
          </button>

          <a
            href="#request-access"
            className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors"
          >
            Sign in
          </a>

          <a
            href="#request-access"
            className="inline-flex items-center justify-center text-xs font-bold px-4 py-2 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  )
}
