import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: 'Solo',
      price: 29,
      desc: 'Single operator: CRM, billing, bookings, and tasks in one workbench.',
      features: [
        '90 days free on this plan, no card',
        'Lead and client pipeline tracking',
        'Invoicing & digital payments (Stripe/Razorpay)',
        'Direct calendar booking sync',
        'Personal task & project kanban',
        'Email receipts & reminders',
      ],
      cta: 'Request access',
      popular: false,
    },
    {
      name: 'Hustler',
      price: 59,
      desc: 'Growing studio: team roles, automated invoicing cascades, and full cash flow analytics.',
      features: [
        '90 days free on this plan, no card',
        'Everything in Solo, plus:',
        'Team members included at zero per-seat fees',
        'Automated overdue invoice cascades',
        'Full financial & cash flow analytics',
        'Shared client timelines & LTV tracking',
        'Priority founder support concierge',
      ],
      cta: 'Request access',
      popular: true,
    },
    {
      name: 'Empire',
      price: 129,
      desc: 'Multi-brand agencies: gear inventory, custom webhooks, dedicated concierge.',
      features: [
        '90 days free on this plan, no card',
        'Everything in Hustler, plus:',
        'Unlimited team seats & workspaces',
        'Equipment & gear asset inventory',
        'Custom webhook & API connections',
        'Enterprise SLA & 99.9% uptime contract',
        'Dedicated onboarding concierge',
      ],
      cta: 'Request access',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 ring-2 ring-blue-300" />
            <span>Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
            Pricing built for solopreneurs & studios
          </h2>

          <p className="text-sm sm:text-base text-neutral-500 mt-3 leading-relaxed max-w-xl mx-auto">
            Invite only · 90 days free on the plan you pick · No card required · Team members included with zero per-seat fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-white via-sky-50/40 to-blue-50/60 border-2 border-blue-500 shadow-xl shadow-blue-500/10'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-xl text-neutral-900">{tier.name}</h3>
                  {tier.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5 my-4">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-neutral-900">
                    ${tier.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">/ per month</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <a
                  href="#request-access"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 mb-7 cursor-pointer ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg'
                      : 'bg-slate-50 hover:bg-slate-100 text-neutral-800 border border-slate-200'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-neutral-700 block uppercase tracking-wider">
                    {tier.popular ? 'Everything in Solo, plus:' : 'Features:'}
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-neutral-600">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            tier.popular
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-neutral-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">
              Invite only · <strong className="text-neutral-900 font-semibold">90 days free</strong> on the plan you pick · No card required
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
