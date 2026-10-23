import React from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Send,
  Check,
  ChevronRight,
  DollarSign,
} from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'
import { INITIAL_INVOICES } from '../../data/mock'

export const BillingView: React.FC = () => {
  const { invoice, revenue, outstanding, tasksDue, openClient, step } = useWorkspaceStore()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <Check className="w-3 h-3" />
            Paid
          </span>
        )
      case 'reminded':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
            <Send className="w-3 h-3" />
            Reminder sent
          </span>
        )
      case 'overdue':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-800 border border-red-300">
            <AlertCircle className="w-3 h-3" />
            Overdue
          </span>
        )
      case 'sent':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-300">
            <Clock className="w-3 h-3" />
            Sent
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-3 sm:p-5 space-y-4 bg-white text-slate-900">
      {/* Money-First KPI Cards */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        {/* Revenue */}
        <div className="p-3 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Collected Revenue</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={revenue}
              initial={{ scale: 1.15, color: '#16A34A' }}
              animate={{ scale: 1, color: 'inherit' }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 font-mono"
            >
              ${revenue.toLocaleString()}
            </motion.span>
          </div>
          <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="w-3 h-3 inline" />
            {step === 3 ? '+$1,200 just now' : '+18% this month'}
          </span>
        </div>

        {/* Outstanding Receivables */}
        <div className="p-3 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Outstanding</span>
            <DollarSign className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={outstanding}
              initial={{ scale: 1.15, color: '#F97316' }}
              animate={{ scale: 1, color: 'inherit' }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 font-mono"
            >
              ${outstanding.toLocaleString()}
            </motion.span>
          </div>
          <span className="text-[10px] text-slate-500 mt-0.5 block truncate">
            {step === 3 ? '1 overdue resolved' : '2 invoices pending'}
          </span>
        </div>

        {/* Tasks Due */}
        <div className="p-3 rounded-lg bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
            <span>Tasks Due</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
          </div>
          <div className="flex items-baseline gap-1">
            <motion.span
              key={tasksDue}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 font-mono"
            >
              {tasksDue}
            </motion.span>
          </div>
          <span className="text-[10px] text-slate-500 mt-0.5 block truncate">
            {step === 3 ? 'Emily task completed' : 'Follow up pending'}
          </span>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="rounded-lg border border-slate-200/90 overflow-hidden bg-white shadow-2xs">
        <div className="px-3 py-2 bg-[#F8FAFC] border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Invoices & Receivables
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-600 font-mono font-medium">
              4 total
            </span>
          </div>
          <span className="text-[11px] text-[#F97316] font-semibold flex items-center gap-1">
            USD Currency
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {/* Target Interactive Row: Brightline INV-198 */}
          <div
            id="target-overdue-row"
            onClick={openClient}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openClient()
              }
            }}
            className={`group px-3 py-2.5 sm:py-3 flex items-center justify-between transition-all cursor-pointer relative ${
              invoice.status === 'overdue'
                ? 'bg-orange-50/70 hover:bg-orange-100/70 ring-1 ring-orange-400/40'
                : 'hover:bg-[#F8FAFC]'
            }`}
          >
            {/* Visual pulsing affordance indicator when overdue */}
            {invoice.status === 'overdue' && (
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-7 bg-[#F97316] rounded-r-md animate-attention" />
            )}

            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-transform group-hover:scale-105 ${
                  invoice.status === 'paid'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-orange-100 text-orange-900'
                }`}
              >
                BL
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                    {invoice.client}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {invoice.id}
                  </span>
                  {invoice.status === 'overdue' && (
                    <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F97316] bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                      Click to test flow →
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                  <span>Due Oct 15</span>
                  <span>•</span>
                  <span>Brand Strategy Package</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="font-bold text-xs sm:text-sm text-slate-900 font-mono block">
                  ${invoice.amount.toLocaleString()}
                </span>
                <div className="mt-0.5">{getStatusBadge(invoice.status)}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>

          {/* Supporting Mock Invoices */}
          {INITIAL_INVOICES.filter((inv) => inv.id !== 'INV-198').map((inv) => (
            <div
              key={inv.id}
              className="px-3 py-2.5 flex items-center justify-between opacity-80 hover:opacity-100 hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                  {inv.client.substring(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs sm:text-sm text-slate-900">
                      {inv.client}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {inv.id}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Due {inv.dueDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 font-mono block">
                    ${inv.amount.toLocaleString()}
                  </span>
                  <div className="mt-0.5">{getStatusBadge(inv.status)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
