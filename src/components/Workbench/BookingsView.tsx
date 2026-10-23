import React from 'react'
import { Calendar, Video, ChevronRight } from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'
import { INITIAL_BOOKINGS } from '../../data/mock'

export const BookingsView: React.FC = () => {
  const { openClient } = useWorkspaceStore()

  return (
    <div className="p-3 sm:p-5 space-y-4 bg-white text-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#F97316]" />
            Bookings & Calendar Sync
          </h4>
          <p className="text-[11px] text-slate-500">
            Client bookings connect straight to invoices, call notes, and CRM records.
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] border border-slate-200 text-slate-500">
          Google Cal Synced
        </span>
      </div>

      <div className="divide-y divide-slate-100 rounded-lg border border-slate-200/90 bg-white overflow-hidden shadow-2xs">
        {INITIAL_BOOKINGS.map((b, idx) => {
          const isBrightline = b.client === 'Brightline'

          return (
            <div
              key={b.id}
              onClick={isBrightline ? openClient : undefined}
              role={isBrightline ? 'button' : undefined}
              tabIndex={isBrightline ? 0 : undefined}
              className={`p-3 sm:p-3.5 flex items-center justify-between transition-colors ${
                isBrightline
                  ? 'hover:bg-[#F8FAFC] cursor-pointer group'
                  : 'opacity-85'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    idx === 0
                      ? 'bg-purple-100 text-purple-700 border border-purple-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Video className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold text-xs sm:text-sm ${
                        isBrightline
                          ? 'text-slate-900 group-hover:text-[#F97316]'
                          : 'text-slate-900'
                      }`}
                    >
                      {b.title}
                    </span>
                    {idx === 0 && (
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">
                        Next Up
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                    <span>{b.client}</span>
                    <span>•</span>
                    <span className="font-medium text-slate-700">{b.dateTime}</span>
                    <span>•</span>
                    <span>{b.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  {b.attendee}
                </span>
                {isBrightline && (
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all" />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
