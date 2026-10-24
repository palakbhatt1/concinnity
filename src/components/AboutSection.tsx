import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F97316] text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F97316] ring-2 ring-orange-200" />
              <span>Why this exists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-[1.18]">
              Replace five subscriptions<br className="hidden sm:inline" /> with one workspace.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-500 max-w-md leading-relaxed lg:pb-1">
            You already know the leak: invoices in chat, clients in a sheet, delivery in a second app. Solopreneur OS keeps clients, money, and work in one workbench so the week actually runs.
          </p>
        </div>

        <div className="relative pt-4 pb-2">
          <div className="flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 z-20 cursor-default"
            >
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
            </motion.div>

            <div className="w-full max-w-4xl h-14 relative hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 800 60" fill="none" preserveAspectRatio="none">
                <line x1="400" y1="0" x2="400" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="140" y1="30" x2="660" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="140" y1="30" x2="140" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="400" y1="30" x2="400" y2="60" stroke="#3B82F6" strokeWidth="2" />
                <line x1="660" y1="30" x2="660" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6 md:mt-0">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Tax #1
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">$240+/mo saved</span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400 line-through">
                    Subscriptions stacking up across 5 tools with per-seat fees
                  </p>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-neutral-900 leading-snug">
                    One transparent plan, team members included at no extra cost
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-white via-blue-50/60 to-blue-100/50 border-2 border-blue-400/80 shadow-lg shadow-blue-500/10 text-left flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/15 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-blue-600">
                  90 Days
                </div>
                <div className="font-bold text-sm text-neutral-900 mt-2">
                  Zero Card Required
                </div>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Run the full module set on your chosen plan. Invite-only cohorts with direct founder onboarding.
                </p>
                <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-[11px] font-bold text-blue-700">
                  <span>Solo $29 · Hustler $59 · Empire $129</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Tax #2
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">Zero silos</span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400 line-through">
                    Customer data scattered across Slack, Gmail, Sheets and Trello
                  </p>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-neutral-900 leading-snug">
                    One unified record shared across CRM, billing, and tasks
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full max-w-2xl h-10 mx-auto relative hidden md:block mt-1">
            <svg className="w-full h-full" viewBox="0 0 600 40" fill="none" preserveAspectRatio="none">
              <line x1="300" y1="0" x2="300" y2="20" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="160" y1="20" x2="440" y2="20" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="160" y1="20" x2="160" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="440" y1="20" x2="440" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-4 md:mt-0">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Tax #3
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">Automatic sync</span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400 line-through">
                    Unpaid invoices buried in chat — manual chasing wastes days
                  </p>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-neutral-900 leading-snug">
                    One-click reminders with automatic payment detection and task closure
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Tax #4
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">100% control</span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-neutral-400 line-through">
                    Tab hopping spends the afternoon you meant for deep work
                  </p>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-neutral-900 leading-snug">
                    Live unified financial workbench with instant actionable controls
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
