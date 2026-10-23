import React from 'react'
import { motion } from 'framer-motion'
import { Users, CheckCircle2 } from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'
import { INITIAL_CLIENTS } from '../../data/mock'

export const CrmView: React.FC = () => {
  const { crmTag, invoice, openClient } = useWorkspaceStore()

  return (
    <div className="p-3 sm:p-5 space-y-4 bg-white text-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#F97316]" />
            Client Directory & CRM
          </h4>
          <p className="text-[11px] text-slate-500">
            Every deal, invoice, and deliverable attached to a single contact card.
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] border border-slate-200 text-slate-500">
          4 Clients Active
        </span>
      </div>

      <div className="divide-y divide-slate-100 rounded-lg border border-slate-200/90 bg-white overflow-hidden shadow-2xs">
        {/* Brightline Row */}
        <div
          onClick={openClient}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') openClient()
          }}
          className="p-3 sm:p-3.5 hover:bg-[#F8FAFC] transition-colors cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#F97316] font-bold text-xs flex items-center justify-center border border-orange-200 shrink-0">
              BL
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                  Brightline Studio
                </span>
                <motion.span
                  key={crmTag}
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    crmTag === 'Active customer'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  {crmTag}
                </motion.span>
                {crmTag === 'Active customer' && (
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Upgraded on payment
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5 truncate">
                <span>David Vance (CEO)</span>
                <span>•</span>
                <span>david@brightline.design</span>
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs sm:text-sm font-bold font-mono text-slate-900 block">
              ${(18400 + (invoice.status === 'paid' ? 1200 : 0)).toLocaleString()} LTV
            </span>
            <span className="text-[10px] text-slate-500">
              {invoice.status === 'paid' ? 'Paid INV-198 today' : '1 pending invoice'}
            </span>
          </div>
        </div>

        {/* Other Clients */}
        {INITIAL_CLIENTS.filter((c) => c.name !== 'Brightline').map((c) => (
          <div
            key={c.id}
            className="p-3 sm:p-3.5 opacity-80 hover:opacity-100 hover:bg-[#F8FAFC] transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                {c.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-slate-900">
                    {c.name}
                  </span>
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                    {c.tag}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {c.contactPerson} • {c.email}
                </div>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs font-mono font-semibold text-slate-900 block">
                ${c.totalLtv.toLocaleString()} LTV
              </span>
              <span className="text-[10px] text-slate-500">{c.lastTouch}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
