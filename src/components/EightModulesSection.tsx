import React from 'react'
import {
  CreditCard,
  Users,
  CheckSquare,
  Calendar,
  Contact,
  Package,
  Wallet,
  Megaphone,
  ArrowRight,
  Layers,
} from 'lucide-react'

interface EightModulesSectionProps {
  onSelectModule?: (moduleId: string) => void
}

export const EightModulesSection: React.FC<EightModulesSectionProps> = ({ onSelectModule }) => {
  const modules = [
    {
      id: 'billing',
      name: 'Billing',
      icon: CreditCard,
      iconBg: 'bg-blue-50 text-[#1772F2] border-blue-200/70',
    },
    {
      id: 'crm',
      name: 'CRM',
      icon: Users,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/70',
    },
    {
      id: 'tasks',
      name: 'Tasks',
      icon: CheckSquare,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/70',
    },
    {
      id: 'bookings',
      name: 'Bookings',
      icon: Calendar,
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200/70',
    },
    {
      id: 'team',
      name: 'Team',
      icon: Contact,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200/70',
    },
    {
      id: 'gear',
      name: 'Gear',
      icon: Package,
      iconBg: 'bg-slate-50 text-slate-700 border-slate-200/70',
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: Wallet,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70',
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: Megaphone,
      iconBg: 'bg-violet-50 text-violet-600 border-violet-200/70',
    },
  ]

  const marqueeItems = [
    'CRM',
    'Tasks',
    'Bookings',
    'Team',
    'Gear',
    'Finance',
    'Marketing',
    'Billing',
  ]

  const handleModuleClick = (id: string) => {
    if (onSelectModule) {
      onSelectModule(id)
    }
    const showcase = document.getElementById('modules-workbench')
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="features" className="relative py-12 sm:py-16 bg-white overflow-hidden border-b border-slate-100">
      <span id="modules" className="absolute -top-16" />
      
      {/* Subtle background technical dot grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Atmospheric Brand Blue Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-[#1772F2]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Faint floating decorative icons in our brand blue theme */}
      <div className="absolute left-8 lg:left-14 top-1/2 -translate-y-8 hidden xl:flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/60 text-[#1772F2] opacity-75 shadow-2xs pointer-events-none">
        <CreditCard className="w-4 h-4" />
      </div>

      <div className="absolute right-8 lg:right-14 top-1/3 hidden xl:flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/60 text-[#1772F2] opacity-75 shadow-2xs pointer-events-none">
        <Users className="w-4 h-4" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top small icon badge in brand blue */}
        <div className="mb-3 w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1772F2] shadow-2xs">
          <Layers className="w-4 h-4" />
        </div>

        {/* Eyebrow Pill in our Brand Blue UI Theme */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-xs font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-[#1772F2] ring-2 ring-blue-200" />
          <span>Modular Power</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight text-center leading-[1.2]">
          Eight modules. One login.
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto text-center mt-2.5 leading-relaxed">
          Billing, CRM, tasks, bookings, team, gear, finance, and marketing share the same clients and money. Turn modules on when you need them.
        </p>

        {/* 8 Module Pills Container */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl">
          {modules.map((mod) => {
            const Icon = mod.icon
            return (
              <button
                key={mod.id}
                onClick={() => handleModuleClick(mod.id)}
                className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer text-left"
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border text-xs ${mod.iconBg} transition-transform group-hover:scale-105`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-slate-800 tracking-tight group-hover:text-blue-900">
                  {mod.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Ticker Row */}
        <div className="w-full max-w-3xl mt-7 sm:mt-8 relative overflow-hidden py-2 border-y border-slate-100/80">
          {/* Gradient edge masks */}
          <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-8 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-400 select-none">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-[#1772F2] transition-colors cursor-default whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Dedicated Request Access BUTTON in Brand Blue */}
        <div className="mt-6 sm:mt-7 flex items-center justify-center">
          <a
            href="#request-access"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#1772F2] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>Request access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
