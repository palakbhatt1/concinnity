import React from 'react'
import { CheckSquare, Check, User, AlertTriangle } from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'
import { INITIAL_TASKS } from '../../data/mock'

export const TasksView: React.FC = () => {
  const { task, openClient } = useWorkspaceStore()

  return (
    <div className="p-3 sm:p-5 space-y-4 bg-white text-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-[#F97316]" />
            Project Tasks & Client Deliverables
          </h4>
          <p className="text-[11px] text-slate-500">
            Tasks automatically complete when linked invoices or milestones are cleared.
          </p>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] border border-slate-200 text-slate-500">
          {task.done ? '1 task completed automatically' : '3 tasks active'}
        </span>
      </div>

      <div className="divide-y divide-slate-100 rounded-lg border border-slate-200/90 bg-white overflow-hidden shadow-2xs">
        <div
          onClick={openClient}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') openClient()
          }}
          className={`p-3 sm:p-3.5 flex items-center justify-between transition-colors cursor-pointer group ${
            task.done
              ? 'bg-emerald-50/50'
              : 'hover:bg-[#F8FAFC]'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                task.done
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'border-slate-300 bg-white group-hover:border-[#F97316]'
              }`}
            >
              {task.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={`font-semibold text-xs sm:text-sm transition-all ${
                    task.done
                      ? 'line-through text-slate-400'
                      : 'text-slate-900 group-hover:text-[#F97316]'
                  }`}
                >
                  {task.title}
                </span>
                {task.done ? (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    Resolved by payment cascade
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <AlertTriangle className="w-2.5 h-2.5" /> High
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                <span>Brightline Studio</span>
                <span>•</span>
                <span>Due today</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <User className="w-3 h-3 text-slate-400" />
                  {task.assignee}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-mono text-slate-400">T-12</span>
          </div>
        </div>

        {INITIAL_TASKS.filter((t) => t.id !== 'T-12').map((t) => (
          <div
            key={t.id}
            className="p-3 sm:p-3.5 flex items-center justify-between opacity-80 hover:opacity-100 hover:bg-[#F8FAFC] transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border ${
                  t.done
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {t.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-medium text-xs sm:text-sm ${
                      t.done
                        ? 'line-through text-slate-400'
                        : 'text-slate-900'
                    }`}
                  >
                    {t.title}
                  </span>
                  {t.priority === 'High' && !t.done && (
                    <span className="text-[10px] font-semibold text-red-600 bg-red-50 px-1.5 py-0.2 rounded">
                      High
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                  <span>{t.client}</span>
                  <span>•</span>
                  <span>Due {t.dueDate}</span>
                  <span>•</span>
                  <span>{t.assignee}</span>
                </div>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs font-mono text-slate-400">{t.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
