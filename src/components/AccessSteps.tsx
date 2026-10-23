import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const AccessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Request access and pick a plan',
      desc: 'Apply. Choose Solo ($29), Hustler ($59), or Empire ($129) when you apply — that is the plan you run if we take you.',
    },
    {
      num: '02',
      title: 'If approved, no card, 90 days',
      desc: 'You get that plan’s full module set for 90 days. No credit card required. White-glove founder onboarding.',
    },
    {
      num: '03',
      title: 'Day 91, monthly billing',
      desc: 'That plan bills monthly: Solo $29, Hustler $59, Empire $129. Team members included. Change or cancel plans anytime from Settings.',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Background dot matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 ring-2 ring-blue-300" />
            <span>Onboarding & Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
            Live in minutes, not a week of setup
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
            Invite only. You pick the plan before you start. Run 90 days free with zero card required.
          </p>
        </div>

        {/* 3 Step Cards matching UI reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-white via-sky-50/20 to-blue-50/40 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-md shadow-blue-500/25">
                    {s.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
                <span>Phase {s.num}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center flex flex-col items-center gap-2">
          <a
            href="#request-access"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>Request access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <p className="text-xs text-neutral-400">
            Invite only · 90 days free on the plan you pick · No card required
          </p>
        </div>
      </div>
    </section>
  )
}
