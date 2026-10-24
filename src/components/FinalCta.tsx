import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, Sparkles } from 'lucide-react'

export const FinalCta: React.FC = () => {
  const [email, setEmail] = useState('')
  const [plan, setPlan] = useState('Hustler ($59/mo)')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="request-access" className="relative py-20 sm:py-28 bg-white overflow-hidden border-b border-slate-100">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>October Cohort · Invites Open</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-neutral-900 leading-[1.18] mb-3">
          Request access. Run 90 days<br className="hidden sm:inline" /> on the plan you pick.
        </h2>

        <p className="text-sm sm:text-base text-neutral-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Invite only. No card required. Solo $29, Hustler $59, Empire $129 a month after the 90 days. Team members included.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-emerald-900">
              Invitation Requested!
            </h3>
            <p className="text-xs text-emerald-700">
              We've reserved your 90-day free access for <strong>{email}</strong> on the <strong>{plan}</strong>. Our team will send your private onboarding credentials shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            <div className="flex items-center justify-center gap-2">
              {['Solo ($29/mo)', 'Hustler ($59/mo)', 'Empire ($129/mo)'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlan(p)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    plan === p
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs scale-105'
                      : 'bg-white border-slate-200 text-neutral-600 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="p-1.5 sm:p-2 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center gap-2 transition-all focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
              <div className="pl-3 sm:pl-4 text-slate-400">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 bg-transparent py-2.5 px-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
              />

              <button
                type="submit"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer hover:scale-[1.02] active:scale-98"
              >
                <span>Request access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
              <span>Invite only · 90 days free · No card</span>
              <span>·</span>
              <span>Already in? <a href="#request-access" className="font-semibold text-neutral-900 underline">Sign in</a></span>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
