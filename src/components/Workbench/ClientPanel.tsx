import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Send,
  CheckCircle2,
  Calendar,
  CheckSquare,
  Receipt,
  Users,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'

export const ClientPanel: React.FC = () => {
  const {
    isClientPanelOpen,
    closeClient,
    invoice,
    task,
    crmTag,
    step,
    sendReminder,
    isCascadeRunning,
    setView,
    replay,
  } = useWorkspaceStore()

  if (!isClientPanelOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute inset-y-0 right-0 w-full sm:w-[360px] bg-white border-l border-slate-200 shadow-2xl z-30 flex flex-col justify-between overflow-y-auto text-slate-900"
      >
        {/* Panel Header */}
        <div className="p-4 border-b border-slate-200 bg-[#F8FAFC] flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F97316] font-bold text-xs flex items-center justify-center border border-orange-200">
              BL
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-slate-900 tracking-tight">
                  Brightline Studio
                </h4>
                <motion.span
                  key={crmTag}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    crmTag === 'Active customer'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {crmTag}
                </motion.span>
              </div>
              <span className="text-[11px] text-slate-500">
                David Vance (Founder & CEO)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeClient}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close client panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Panel Body: Cross-Module Unified View */}
        <div className="p-4 space-y-4 flex-1 text-xs">
          {/* Explanation badge */}
          <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-slate-800 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
            <div className="leading-snug">
              <span className="font-bold block text-[11px] text-[#F97316]">
                Shared Data Layer
              </span>
              <span className="text-[11px] text-slate-600">
                This client record is automatically linked across CRM, Billing, Calendar, and Tasks.
              </span>
            </div>
          </div>

          {/* Module 1: Billing & Invoice */}
          <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-2 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <Receipt className="w-3.5 h-3.5 text-blue-500" />
                Invoice #{invoice.id}
              </span>
              <span className="font-mono font-bold text-sm text-slate-900">
                ${invoice.amount.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
              <span className="text-slate-500">Status</span>
              <span
                className={`font-semibold capitalize px-2 py-0.5 rounded text-[10px] ${
                  invoice.status === 'paid'
                    ? 'bg-emerald-100 text-emerald-800'
                    : invoice.status === 'reminded'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {invoice.status}
              </span>
            </div>
          </div>

          {/* Module 2: Project Tasks */}
          <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-2 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <CheckSquare className="w-3.5 h-3.5 text-[#F97316]" />
                Linked Deliverables
              </span>
              <span className="text-[10px] text-slate-500">Assignee: Emily Chen</span>
            </div>

            <div className="p-2 rounded bg-[#F8FAFC] flex items-center gap-2 border border-slate-100">
              <input
                type="checkbox"
                checked={task.done}
                readOnly
                className="w-4 h-4 rounded text-[#F97316] accent-[#F97316] cursor-pointer"
              />
              <span
                className={`text-[11px] font-medium transition-all ${
                  task.done
                    ? 'line-through text-slate-400'
                    : 'text-slate-900'
                }`}
              >
                {task.title}
              </span>
              {task.done && (
                <span className="ml-auto text-[9px] font-bold uppercase text-emerald-600 bg-emerald-100 px-1 py-0.2 rounded">
                  Done
                </span>
              )}
            </div>
          </div>

          {/* Module 3: Calendar & Bookings */}
          <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-2 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <Calendar className="w-3.5 h-3.5 text-purple-500" />
                Upcoming Meeting
              </span>
              <span className="text-[10px] text-emerald-600 font-medium">Confirmed</span>
            </div>

            <div className="text-[11px] p-2 rounded bg-[#F8FAFC] border border-slate-100">
              <div className="font-semibold text-slate-900">Strategy Sync with David</div>
              <div className="text-slate-500 mt-0.5">Tue 14:00 (Today) · Google Meet</div>
            </div>
          </div>

          {/* Step 3 Explored Chips */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 space-y-2"
            >
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Cascade Complete!
              </div>
              <p className="text-[11px] text-emerald-700">
                Payment verified. Invoices updated, receivables reduced, task checked off, and CRM upgraded.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setView('crm')
                    closeClient()
                  }}
                  className="px-2 py-1 rounded bg-white border border-slate-200 hover:border-[#F97316] text-[10px] font-semibold text-slate-900 flex items-center gap-1 cursor-pointer shadow-2xs"
                >
                  <Users className="w-3 h-3 text-[#F97316]" />
                  View in CRM →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setView('tasks')
                    closeClient()
                  }}
                  className="px-2 py-1 rounded bg-white border border-slate-200 hover:border-[#F97316] text-[10px] font-semibold text-slate-900 flex items-center gap-1 cursor-pointer shadow-2xs"
                >
                  <CheckSquare className="w-3 h-3 text-[#F97316]" />
                  View in Tasks →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setView('bookings')
                    closeClient()
                  }}
                  className="px-2 py-1 rounded bg-white border border-slate-200 hover:border-[#F97316] text-[10px] font-semibold text-slate-900 flex items-center gap-1 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-3 h-3 text-[#F97316]" />
                  View in Bookings →
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Panel Footer Action Button */}
        <div className="p-4 border-t border-slate-200 bg-[#F8FAFC] space-y-2">
          {invoice.status === 'overdue' && (
            <button
              type="button"
              id="send-reminder-button"
              onClick={sendReminder}
              disabled={isCascadeRunning}
              className="w-full py-2.5 px-4 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Step 2: Send payment reminder</span>
            </button>
          )}

          {invoice.status === 'reminded' && (
            <div className="w-full py-2.5 px-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 font-bold text-xs flex items-center justify-center gap-2 animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin text-[#F97316]" />
              <span>Reminder dispatched · Simulating payment (~2s)...</span>
            </div>
          )}

          {invoice.status === 'paid' && (
            <div className="space-y-2">
              <div className="w-full py-2 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Invoice Paid · $1,200 Collected</span>
              </div>
              <button
                type="button"
                onClick={replay}
                className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 border border-transparent hover:border-slate-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset demo to start again</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
