import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Bot, X, CheckCircle, Clock } from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'

export const SolosPreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { revenue, outstanding, step } = useWorkspaceStore()

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
        <span>Ask Solos</span>
        <span className="text-[9px] uppercase tracking-wider px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">
          In dev
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 mb-2 w-80 sm:w-96 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl z-40 text-xs text-slate-900"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#F97316] text-white flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                    Solos Executive AI Summary
                  </div>
                  <span className="text-[10px] text-amber-600 font-mono">
                    Direction / In Development
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              "What happened today?"
            </p>

            <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 space-y-1.5 leading-relaxed text-[11px]">
              {step === 3 ? (
                <>
                  <div className="flex items-start gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                    <span>
                      <strong>Brightline paid $1,200</strong> via Stripe for INV-198. Total revenue is now ${revenue.toLocaleString()}.
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                    <span>
                      Task <strong>"Follow up INV-198"</strong> closed automatically for Emily Chen.
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                    <span>
                      2 invoices remain open (${outstanding.toLocaleString()} outstanding). Next scheduled call: 14:00 Strategy Sync.
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-1.5 text-amber-700 font-medium">
                    <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                    <span>
                      <strong>Brightline invoice #INV-198 ($1,200) is overdue</strong> since Oct 15. Task assigned to Emily Chen.
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500">
                    <span>
                      Collected revenue stands at ${revenue.toLocaleString()} with ${outstanding.toLocaleString()} receivables pending across 2 accounts.
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="mt-2 text-[10px] text-slate-400 italic text-right">
              Built on shared database state · No manual data entry
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
