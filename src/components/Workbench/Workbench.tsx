import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  Briefcase,
  TrendingUp,
  Send,
  Search,
  Bell,
  CheckCircle2,
  X,
} from 'lucide-react'
import { useWorkspaceStore, type ModuleView } from '../../store/workspace'
import { OverviewView } from './OverviewView'
import { BillingView } from './BillingView'
import { CrmView } from './CrmView'
import { TasksView } from './TasksView'
import { BookingsView } from './BookingsView'
import { ClientPanel } from './ClientPanel'
import { GhostCursor } from './GhostCursor'

export const Workbench: React.FC = () => {
  const {
    view,
    setView,
    step,
    toastMessage,
    dismissToast,
    introPhase,
    setIntroPhase,
  } = useWorkspaceStore()

  // Pristine default state matching reference-full.png
  const isMess = introPhase === 'mess'
  const isReady = introPhase === 'ready'

  // Scroll listener: Reacts immediately on the very first scroll down (> 25px) to transition to organized dashboard!
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // React instantly on the very first scroll down
      if (scrollY > 25) {
        if (introPhase !== 'ready') {
          setIntroPhase('ready')
        }
      } else if (scrollY <= 10) {
        // When at the very top, show the cluttered stack
        if (introPhase !== 'mess') {
          setIntroPhase('mess')
        }
      }
    }

    // Check on mount to match current position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [introPhase, setIntroPhase])


  const sidebarItems: { id: ModuleView; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'crm', label: 'Clients', icon: Users },
    { id: 'billing', label: 'Invoices', icon: Receipt },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'team', label: 'Team', icon: Briefcase },
    { id: 'finance', label: 'Finance', icon: TrendingUp },
    { id: 'marketing', label: 'Marketing', icon: Send },
  ]

  return (
    <div className="w-full relative">
      {/* Main Workbench Outer Shell - Frosted Glass Rim with Solid Pristine White Inside matching reference-full.png */}
      <div
        id="workbench-section"
        className="relative w-full max-w-6xl xl:max-w-7xl mx-auto rounded-3xl p-1.5 sm:p-2 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(15,110,207,0.18)] transition-all [color-scheme:light]"
        style={{
          '--bg': '#FFFFFF',
          '--card-bg': '#FFFFFF',
          '--bg-subtle': '#F8FAFC',
          '--text': '#0F172A',
          '--muted': '#64748B',
          '--border': '#E2E8F0',
          '--border-subtle': '#F1F5F9',
        } as React.CSSProperties}
      >
        {/* Ghost Cursor idle guidance - only when ready so it doesn't distract while cards assemble */}
        {isReady && <GhostCursor />}

        {/* Main Inner Dashboard Wrapper - 100% Solid Pristine White */}
        <div className="relative rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-slate-900">
          {/* Top Header Bar */}
          <motion.div
            animate={{ opacity: isMess ? 0.08 : 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-100 bg-white flex items-center justify-between gap-3 text-slate-900"
          >
            {/* Left Brand inside workspace */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 rounded-md bg-[#0A0A0A] flex items-center justify-center shadow-2xs">
                <svg
                  className="w-3.5 h-3.5 text-[#F97316]"
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
              <span className="font-bold text-xs tracking-tight text-neutral-900 hidden sm:inline">
                Solopreneur OS
              </span>
            </div>

            {/* Center Search Input */}
            <div className="flex-1 max-w-sm mx-auto hidden sm:block">
              <div className="relative flex items-center">
                <Search className="w-3 h-3 text-neutral-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search clients, tasks, invoices..."
                  className="w-full pl-8 pr-10 py-1 rounded-md bg-[#F1F5F9] border border-neutral-200/60 text-[11px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none cursor-default"
                />
                <span className="absolute right-2 px-1 py-0.2 rounded text-[9px] font-mono font-medium text-neutral-500 bg-white border border-neutral-200 shadow-2xs">
                  ⌘K
                </span>
              </div>
            </div>

            {/* Right Area: Bell, Michael Profile Avatar matching reference-full.png */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Notification Bell */}
              <div className="relative p-1 rounded text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer">
                <Bell className="w-3.5 h-3.5" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              </div>

              {/* Michael's Profile Avatar from asset pack */}
              <div className="flex items-center gap-1.5 pl-0.5">
                <div className="relative">
                  <img
                    src="/michael-circle.png"
                    alt="Michael"
                    className="w-6 h-6 rounded-full border border-white shadow-2xs object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Body with Live Assembly Transition */}
          <div className="relative flex flex-col md:flex-row min-h-[300px] sm:min-h-[340px]">
            {/* Sidebar Navigation - Hidden in mess phase, slides in during assembly */}
            <motion.div
              animate={
                isMess
                  ? { opacity: 0, x: -36, width: 0, overflow: 'hidden', pointerEvents: 'none' }
                  : { opacity: 1, x: 0, width: 'auto', overflow: 'visible', pointerEvents: 'auto' }
              }
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-36 lg:w-40 border-b md:border-b-0 md:border-r border-neutral-100 bg-[#FBFBFC] p-1.5 flex md:flex-col gap-0.5 shrink-0 overflow-x-auto"
            >
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = view === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`flex-1 md:flex-none flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer text-left whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FFF1E6] text-[#F97316] font-bold shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                      isActive ? 'text-[#F97316]' : 'text-neutral-400'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.id === 'crm' && step === 3 && (
                    <span className="ml-auto text-[8px] px-1 rounded bg-emerald-100 text-emerald-800 font-bold hidden md:inline-block">
                      Sync
                    </span>
                  )}
                </button>
              )
            })}

            </motion.div>

          {/* Main Content View Container - Pure White */}
          <div className="relative flex-1 bg-white min-w-0 overflow-hidden text-neutral-900">
            {view === 'overview' && <OverviewView />}
            {view === 'billing' && <BillingView />}
            {view === 'crm' && <CrmView />}
            {view === 'tasks' && <TasksView />}
            {view === 'bookings' && <BookingsView />}
            {(view === 'team' || view === 'finance' || view === 'marketing') && <OverviewView />}

            {/* Slide-over Client Panel */}
            <ClientPanel />
          </div>
        </div>
      </div>



      {/* Polite Live Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 max-w-sm sm:max-w-md w-full px-4"
          >
            <div className="p-3 rounded-xl bg-neutral-900 text-white shadow-2xl border border-neutral-700 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span className="font-semibold truncate">{toastMessage}</span>
              </div>
              <button
                type="button"
                onClick={dismissToast}
                className="text-neutral-400 hover:text-white p-0.5 rounded cursor-pointer"
                aria-label="Dismiss toast"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
  )
}
