import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  CheckSquare,
  Calendar,
  ChevronRight,
  Receipt,
  MessageSquare,
  Table,
  StickyNote,
  FileText,
  AlertCircle,
  MessageCircle,
  Video,
  Clock,
} from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'

export const OverviewView: React.FC = () => {
  const {
    revenue,
    activeClients,
    tasksDue,
    bookingsToday,
    openClient,
    introPhase,
  } = useWorkspaceStore()

  const isMess = introPhase === 'mess'

  return (
    <div className={`p-3 sm:p-4 space-y-2.5 bg-white text-neutral-900 transition-colors relative ${isMess ? 'min-h-[460px] sm:min-h-[490px]' : ''}`}>
      <div className="relative z-30 pb-2.5 border-b border-neutral-100 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {isMess ? (
            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 text-[#F97316] text-[10px] font-extrabold uppercase tracking-wider mb-1 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                <span>Your Current Chaos</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-neutral-900 tracking-tight leading-none">
                This is your stack today.
              </h2>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-neutral-400 mt-1">
                SCROLL — WATCH THE MESS BECOME YOUR DASHBOARD
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 tracking-tight flex items-center gap-1.5">
                <span>Good afternoon, Michael</span>
                <span>👋</span>
              </h3>
              <p className="text-[11px] text-neutral-500">
                Here's what's happening in your workspace.
              </p>
            </div>
          )}

          {!isMess ? (
            <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-neutral-200">
              <Calendar className="w-3 h-3 text-[#F97316]" />
              <span>Tue, 27 Oct 2026</span>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-200 font-bold">
                14 fragmented apps
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {isMess && (
            <motion.div
              key="clutter-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
            >
              <motion.div
                animate={{ rotate: -8, x: [0, 4, 0], y: [0, -3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1 left-2 sm:left-4 px-3 py-2 rounded-xl bg-white border border-neutral-200/90 shadow-xl flex items-center gap-2.5 text-left w-44 z-20"
              >
                <img
                  src="/michael-circle.png"
                  alt="Michael"
                  className="w-7 h-7 rounded-full border border-neutral-200 object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-xs text-neutral-900 truncate">Michael Carter</div>
                  <div className="text-[10px] text-neutral-500">Founder</div>
                  <div className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Working · Remote</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -5, x: [0, -2, 0], y: [0, 2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 left-2 sm:left-5 px-3 py-1 rounded-full bg-white border border-neutral-300 shadow-md text-[10px] font-bold text-neutral-700 flex items-center gap-1 z-20"
              >
                <span>+ New invoice</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -10, x: [0, -4, 0], y: [0, 4, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-28 left-2 sm:left-4 px-3 py-2 rounded-xl bg-white border border-neutral-200/90 shadow-xl flex items-center gap-2.5 text-left w-44 z-20"
              >
                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
                  SM
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-neutral-900 truncate">Sarah Miller</div>
                  <div className="text-[10px] text-neutral-500">Project Manager</div>
                  <div className="text-[9px] font-semibold text-blue-600 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Working</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 4, x: [0, 3, 0], y: [0, -2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-44 left-2 sm:left-4 px-2.5 py-1.5 rounded-lg bg-rose-50 border border-rose-300 shadow-md flex items-center gap-1.5 text-[10px] text-rose-800 font-semibold z-20"
              >
                <AlertCircle className="w-3 h-3 text-rose-600 shrink-0" />
                <span>Stripe: Failed charge $850</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -3, x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 3.0, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-2 left-2 sm:left-4 px-3 py-1.5 rounded-xl bg-white border border-neutral-200/90 shadow-xl flex items-center gap-2 text-left z-20"
              >
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[9px] flex items-center justify-center shrink-0">JW</div>
                <div className="min-w-0">
                  <div className="font-bold text-[10px] text-neutral-900 truncate">James Wilson</div>
                  <div className="text-[8px] text-neutral-400">Lead Designer</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -4, x: [0, 5, 0], y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1 left-48 sm:left-54 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 shadow-md flex items-center gap-1.5 text-[10px] text-emerald-800 font-medium z-20"
              >
                <MessageSquare className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp: "Did you get my payment?"</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -5, x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 left-48 sm:left-54 px-2.5 py-1.5 rounded-lg bg-yellow-50 border border-yellow-300 shadow-md flex items-center gap-1.5 text-[10px] text-yellow-800 font-medium z-20"
              >
                <StickyNote className="w-3 h-3 text-yellow-600" />
                <span>Sticky Note: Follow up Brightline INV-198!</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 3, x: [0, -3, 0], y: [0, 2, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-30 left-48 sm:left-54 px-2.5 py-1.5 rounded-lg bg-purple-50 border border-purple-300 shadow-md flex items-center gap-1.5 text-[10px] text-purple-800 font-medium z-20"
              >
                <MessageCircle className="w-3 h-3 text-purple-600" />
                <span>Slack: "Hey, send the invoice again?"</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -4, x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-46 left-48 sm:left-54 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 shadow-md flex items-center gap-1.5 text-[10px] text-slate-800 font-medium z-20"
              >
                <FileText className="w-3 h-3 text-slate-600" />
                <span>Notion: Client Brief v4_FINAL.doc</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -4, x: [0, 3, 0], y: [0, -2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-2 left-48 sm:left-54 px-4 py-2 rounded-xl bg-white border border-neutral-200/90 shadow-xl text-left z-20"
              >
                <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">TASKS DUE</div>
                <div className="text-lg sm:text-xl font-black font-mono text-neutral-900 mt-0.5">7</div>
              </motion.div>

              <motion.div
                animate={{ rotate: -2, x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1 right-48 sm:right-60 px-2.5 py-1 rounded-full bg-white border border-neutral-300 shadow-md text-[10px] font-bold text-neutral-700 flex items-center gap-1 z-20"
              >
                <span>+ New work item</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 4, x: [0, -5, 0], y: [0, 4, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 right-48 sm:right-60 px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-300 shadow-md flex items-center gap-1.5 text-[10px] text-blue-800 font-medium z-20"
              >
                <Table className="w-3 h-3 text-blue-600" />
                <span>Sheet: Brightline | $1,200 | Overdue</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 6, x: [0, -5, 0], y: [0, 4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-30 right-48 sm:right-60 px-2.5 py-1.5 rounded-lg bg-rose-50 border border-rose-300 shadow-md flex items-center gap-1.5 text-[10px] text-rose-800 font-medium z-20"
              >
                <FileText className="w-3 h-3 text-rose-600" />
                <span>Drive: INV-198_v2_FINAL.pdf</span>
              </motion.div>

              <motion.div
                animate={{ rotate: -3, x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-46 right-48 sm:right-60 px-2.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300 shadow-md flex items-center gap-1.5 text-[10px] text-amber-800 font-medium z-20"
              >
                <Clock className="w-3 h-3 text-amber-600" />
                <span>Cal Clash: 2:00 PM Jordan vs Maya</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 3, x: [0, -2, 0], y: [0, 2, 0] }}
                transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-2 right-48 sm:right-60 px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-300 shadow-md flex items-center gap-1.5 text-[10px] text-blue-800 font-medium z-20"
              >
                <Video className="w-3 h-3 text-blue-600" />
                <span>Zoom: Kickoff with Northwind (5m)</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 7, x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 3.0, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1 right-2 sm:right-6 px-4 py-2 rounded-xl bg-white border border-neutral-200/90 shadow-xl text-left z-20"
              >
                <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">REVENUE</div>
                <div className="text-lg sm:text-xl font-black font-mono text-emerald-600 mt-0.5">$24,000</div>
              </motion.div>

              <motion.div
                animate={{ rotate: 5, x: [0, -3, 0], y: [0, 3, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-18 right-2 sm:right-6 px-4 py-2 rounded-xl bg-white border border-neutral-200/90 shadow-xl text-left z-20"
              >
                <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">OUTSTANDING</div>
                <div className="text-lg sm:text-xl font-black font-mono text-amber-500 mt-0.5">$4,820</div>
              </motion.div>

              <motion.div
                animate={{ rotate: -3, x: [0, -3, 0], y: [0, 3, 0] }}
                transition={{ duration: 3.0, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-34 right-2 sm:right-6 px-2.5 py-1 rounded-full bg-white border border-neutral-300 shadow-md text-[10px] font-bold text-neutral-700 flex items-center gap-1 z-20"
              >
                <span>+ New Client</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 4, x: [0, 2, 0], y: [0, -2, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-48 right-2 sm:right-6 px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-200 shadow-md text-[10px] font-bold text-red-700 flex items-center gap-1 z-20"
              >
                <span>INV-201: $3,400 overdue</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 4, x: [0, -2, 0], y: [0, 2, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-2 right-2 sm:right-6 px-3 py-1.5 rounded-xl bg-white border border-neutral-200/90 shadow-xl flex items-center gap-2 text-left z-20"
              >
                <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 font-bold text-[9px] flex items-center justify-center shrink-0">ED</div>
                <div className="min-w-0">
                  <div className="font-bold text-[10px] text-neutral-900 truncate">Emily Davis</div>
                  <div className="text-[8px] text-emerald-600 font-medium">Working</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{ opacity: isMess ? 0.06 : 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          <motion.div
          animate={
            isMess
              ? { x: -28, y: -16, rotate: -6 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-[#F97316]/50 transition-colors group cursor-default"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#FFF2EB] text-[#F97316] flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div className="w-5 h-5 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
          <div className="text-[11px] font-medium text-neutral-500">Revenue</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <motion.span
              key={revenue}
              initial={{ scale: 1.15, color: '#F97316' }}
              animate={{ scale: 1, color: 'inherit' }}
              className="text-lg sm:text-xl font-black font-mono tracking-tight text-neutral-900"
            >
              ${revenue.toLocaleString()}
            </motion.span>
          </div>
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#EAF7EE] text-[#1E8E3E] text-[10px] font-semibold mt-1">
            <span>↑ 12%</span>
            <span className="text-neutral-500 font-normal">+$2,560 from last month</span>
          </div>
        </motion.div>

        <motion.div
          animate={
            isMess
              ? { x: 26, y: -20, rotate: 7 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-blue-400/50 transition-colors group cursor-default"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#EBF3FE] text-[#1A73E8] flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="w-5 h-5 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
          <div className="text-[11px] font-medium text-neutral-500">Active clients</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <motion.span
              key={activeClients}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              className="text-lg sm:text-xl font-black font-mono tracking-tight text-neutral-900"
            >
              {activeClients}
            </motion.span>
          </div>
          <div className="text-[10px] text-neutral-500 font-normal mt-1">
            3 new this month
          </div>
        </motion.div>

        <motion.div
          animate={
            isMess
              ? { x: -32, y: 14, rotate: -7 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-blue-400/50 transition-colors group cursor-default"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#EBF3FE] text-[#1A73E8] flex items-center justify-center">
              <CheckSquare className="w-3.5 h-3.5" />
            </div>
            <div className="w-5 h-5 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
          <div className="text-[11px] font-medium text-neutral-500">Tasks due</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <motion.span
              key={tasksDue}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              className="text-lg sm:text-xl font-black font-mono tracking-tight text-neutral-900"
            >
              {tasksDue}
            </motion.span>
          </div>
          <div className="text-[10px] text-amber-600 font-semibold mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>2 overdue</span>
          </div>
        </motion.div>

        <motion.div
          animate={
            isMess
              ? { x: 30, y: 18, rotate: 6 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 rounded-xl bg-white border border-neutral-200/80 shadow-2xs hover:border-[#F97316]/50 transition-colors group cursor-default"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#FFF2EB] text-[#F97316] flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div className="w-5 h-5 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
          <div className="text-[11px] font-medium text-neutral-500">Bookings today</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-lg sm:text-xl font-black font-mono tracking-tight text-neutral-900">
              {bookingsToday}
            </span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>2 confirmed</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
        <motion.div
          animate={
            isMess
              ? { x: -20, y: 22, rotate: -4 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-2xs"
        >
          <div className="flex items-center justify-between pb-2 mb-2">
            <h4 className="font-bold text-xs text-neutral-900">Recent activity</h4>
            <button
              type="button"
              onClick={openClient}
              className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View all</span>
              <span className="text-xs">→</span>
            </button>
          </div>

          <div className="space-y-2">
            <div
              id="target-overdue-row"
              onClick={openClient}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openClient()
              }}
              className="py-1 flex items-center justify-between group cursor-pointer hover:bg-neutral-50/80 px-1 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#EAF7EE] text-[#1E8E3E] flex items-center justify-center shrink-0">
                  <Receipt className="w-4 h-4" />
                </div>
                <img
                  src="/avatar-alex.png"
                  alt="Alex Rivera"
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-100"
                />
                <div className="min-w-0">
                  <div className="font-bold text-xs text-neutral-900 group-hover:text-[#1A73E8] transition-colors truncate">
                    Invoice paid
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    Alex Rivera · $4,200
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                2h ago
              </span>
            </div>

            <div className="py-1 flex items-center justify-between group cursor-pointer hover:bg-neutral-50/80 px-1 rounded-lg transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FE] text-[#1A73E8] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <img
                  src="/avatar-northwind.png"
                  alt="Northwind Studio"
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-100"
                />
                <div className="min-w-0">
                  <div className="font-bold text-xs text-neutral-900 truncate">
                    New client added
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    Northwind Studio
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                4h ago
              </span>
            </div>

            <div className="py-1 flex items-center justify-between group cursor-pointer hover:bg-neutral-50/80 px-1 rounded-lg transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FE] text-[#1A73E8] flex items-center justify-center shrink-0">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <img
                  src="/avatar-task.png"
                  alt="Designer"
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-100"
                />
                <div className="min-w-0">
                  <div className="font-bold text-xs text-neutral-900 truncate">
                    Task completed
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    Brand assets delivered
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                1d ago
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={
            isMess
              ? { x: 22, y: 24, rotate: 3 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-2xs"
        >
          <div className="flex items-center justify-between pb-2 mb-2">
            <h4 className="font-bold text-xs text-neutral-900">Today's schedule</h4>
            <button
              type="button"
              onClick={openClient}
              className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View calendar</span>
              <span className="text-xs">→</span>
            </button>
          </div>

          <div className="space-y-1 relative">
            <div className="absolute left-[54px] top-3 bottom-3 w-[1px] bg-neutral-200 pointer-events-none" />

            <div className="py-1 flex items-center justify-between relative z-10 px-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-500 w-10">10:00</span>
                <div className="w-2 h-2 rounded-full bg-[#1A73E8] ring-4 ring-white shrink-0" />
                <div>
                  <span className="font-bold text-xs text-neutral-900 block leading-tight">Maya Chen</span>
                  <span className="text-[11px] text-neutral-500">Studio session</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF7EE] text-[#1E8E3E]">
                Confirmed
              </span>
            </div>

            <div className="py-1 flex items-center justify-between relative z-10 px-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-500 w-10">11:30</span>
                <div className="w-2 h-2 rounded-full bg-[#1A73E8] ring-4 ring-white shrink-0" />
                <div>
                  <span className="font-bold text-xs text-neutral-900 block leading-tight">Jordan Ellis</span>
                  <span className="text-[11px] text-neutral-500">Consult</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF7EE] text-[#1E8E3E]">
                Confirmed
              </span>
            </div>

            <div className="py-1 flex items-center justify-between relative z-10 px-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400 w-10">14:00</span>
                <div className="w-2 h-2 rounded-full bg-neutral-300 ring-4 ring-white shrink-0" />
                <div>
                  <span className="font-medium text-xs text-neutral-700 block leading-tight">Open slot</span>
                  <span className="text-[11px] text-neutral-400">Available</span>
                </div>
              </div>
            </div>

            <div className="py-1 flex items-center justify-between relative z-10 px-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-500 w-10">16:00</span>
                <div className="w-2 h-2 rounded-full bg-[#F97316] ring-4 ring-white shrink-0" />
                <div>
                  <span className="font-bold text-xs text-neutral-900 block leading-tight">Sofia Rossi</span>
                  <span className="text-[11px] text-neutral-500">Retainer call</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFF2EB] text-[#F97316]">
                Pending
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</div>
)
}
