import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Shield, Calendar, Mail, HardDrive, MessageCircle, CreditCard } from 'lucide-react'

export const IntegrationsSection: React.FC = () => {
  const tools = [
    {
      name: 'Google Drive',
      label: 'Drive Contracts',
      pos: 'top-[12%] left-[26%]',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 87.3 78" fill="none">
          <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
          <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
          <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.5 9.5z" fill="#ea4335"/>
          <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.25z" fill="#00832d"/>
          <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
          <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
        </svg>
      ),
    },
    {
      name: 'Google Calendar',
      label: 'Booking Sync',
      pos: 'top-[16%] right-[24%]',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'Gmail',
      label: 'Email Reminders',
      pos: 'top-[48%] left-[10%]',
      color: 'bg-red-50 text-red-600 border-red-200',
      icon: <Mail className="w-5 h-5 text-red-500" />,
    },
    {
      name: 'WhatsApp API',
      label: 'Live Client Chat',
      pos: 'top-[48%] right-[10%]',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
    },
    {
      name: 'Stripe & Razorpay',
      label: 'Digital Payouts',
      pos: 'bottom-[15%] left-[24%]',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: 'HardDrive',
      label: 'Shared Assets',
      pos: 'bottom-[16%] right-[25%]',
      color: 'bg-slate-50 text-slate-700 border-slate-200',
      icon: <HardDrive className="w-5 h-5 text-slate-700" />,
    },
  ]

  return (
    <section id="integrations" className="relative py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Background dot matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from 02-design-spec.md */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 ring-2 ring-blue-300" />
            <span>Zero Migration Friction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
            Connects With Tools Your Clients Already Use
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
            Gmail, Google Calendar, Google Drive, WhatsApp Business API, and Stripe/Razorpay payment gateways. No painful setup.
          </p>
        </div>

        {/* Concentric Orbital Radar Diagram matching UI reference */}
        <div className="relative max-w-4xl mx-auto h-[380px] sm:h-[460px] rounded-3xl bg-gradient-to-b from-sky-50/50 via-blue-50/30 to-white border border-slate-200/90 shadow-sm flex items-center justify-center overflow-hidden mb-12">
          {/* Ambient center blue glow */}
          <div className="absolute w-72 h-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          {/* Concentric Circles */}
          <div className="absolute w-[560px] h-[560px] rounded-full border border-sky-200/50 pointer-events-none" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-sky-200/60 pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-sky-300/70 pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-300/80 pointer-events-none" />

          {/* Central Blue Glowing Node */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-xl shadow-blue-500/35 z-20 cursor-default"
          >
            <svg
              className="w-9 h-9 sm:w-10 sm:h-10 text-white"
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

          {/* Horizontal and Vertical Radar Axis Lines */}
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-300/60 to-transparent pointer-events-none" />
          <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-sky-300/60 to-transparent pointer-events-none" />

          {/* Orbiting Tool Nodes */}
          {tools.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.12, y: -2 }}
              className={`absolute ${t.pos} p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-2 z-20 cursor-pointer transition-shadow hover:shadow-xl`}
              title={t.name}
            >
              {t.icon}
              <span className="hidden sm:inline font-bold text-xs text-neutral-800">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Where it's going: Solos AI Section from 00-overview.md & 02-design-spec.md */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-blue-400 flex items-center justify-center border border-neutral-700 shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-base sm:text-lg text-neutral-900">
                    Where it’s going: Meet Solos AI
                  </h3>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 uppercase tracking-wider">
                    In Development · Roadmap
                  </span>
                </div>
                <p className="text-xs text-neutral-500">
                  Founder priority: ironclad database logic first, executive AI intelligence next.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Grounded only in your real records</span>
            </div>
          </div>

          <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <span className="font-bold text-neutral-900 block mb-1">
                "What happened today?"
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Answers morning standup queries in plain English—summarizing collected cash, active client delays, and pending deliverables.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <span className="font-bold text-neutral-900 block mb-1">
                Proactive Overdue Alerts
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Flags uncollected invoices before cash flow dips, drafting WhatsApp or email reminders tailored to client payment history.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-xs">
              <span className="font-bold text-neutral-900 block mb-1">
                Autonomous Record Sync
              </span>
              <p className="text-neutral-500 leading-relaxed">
                Once approved, updates client tags, marks milestone tasks complete, and logs booking notes without manual clicking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
