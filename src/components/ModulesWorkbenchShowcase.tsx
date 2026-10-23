import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowRight,
  Check,
} from 'lucide-react'

export interface ModulesWorkbenchShowcaseProps {
  initialSlide?: number
}

export const ModulesWorkbenchShowcase: React.FC<ModulesWorkbenchShowcaseProps> = ({
  initialSlide = 0,
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)

  useEffect(() => {
    if (initialSlide !== undefined) {
      setCurrentSlide(initialSlide)
    }
  }, [initialSlide])

  const [taskChecked, setTaskChecked] = useState<Record<number, boolean>>({
    4: true,
  })

  const totalSlides = 4

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const toggleTask = (index: number) => {
    setTaskChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const slideTabs = [
    { index: 0, label: 'Billing' },
    { index: 1, label: 'CRM' },
    { index: 2, label: 'Bookings' },
    { index: 3, label: 'Tasks' },
  ]

  return (
    <section
      id="modules-workbench"
      className="relative py-12 sm:py-16 bg-white overflow-hidden border-b border-slate-100"
    >
      {/* Subtle background technical dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Atmospheric Brand Blue Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-[#1772F2]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with Eyebrow in Brand Blue */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-xs font-semibold mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1772F2] ring-2 ring-blue-300" />
            <span>Interactive Workbench</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight">
            See modules in the workbench
          </h2>

          {/* Quick Module Tab Switcher in Brand Blue */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4">
            {slideTabs.map((tab) => {
              const isActive = currentSlide === tab.index
              return (
                <button
                  key={tab.index}
                  onClick={() => setCurrentSlide(tab.index)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1772F2] text-white shadow-xs shadow-blue-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#1772F2]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div className="relative min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {/* SLIDE 1: BILLING (Text on Left, Mac Window on Right) */}
            {currentSlide === 0 && (
              <motion.div
                key="billing-slide"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
              >
                {/* Left: Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-[11px] font-bold tracking-tight mb-3">
                    Billing
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug mb-2.5">
                    Invoice once. Get paid without the chase.
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
                    Estimates, invoices, what is overdue — in the same OS as the client and the work. For retainers, shoots, and project fees. Not a separate billing tab you forget to open.
                  </p>

                  <a
                    href="#request-access"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1772F2] text-xs sm:text-sm hover:text-blue-700 transition-colors group w-fit"
                  >
                    <span>Explore Billing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Right: Mac Window Preview */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-slate-200/90 bg-white shadow-md shadow-slate-100 overflow-hidden">
                    {/* Mac Window Titlebar */}
                    <div className="bg-slate-50/90 px-3.5 py-2 border-b border-slate-200/70 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium ml-1">
                        Solopreneur OS · Billing
                      </span>
                    </div>

                    {/* Window Subheader */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Invoices
                        </span>
                        <span className="text-xs font-medium text-slate-400">48</span>
                      </div>
                      <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1772F2] hover:bg-blue-600 text-white text-[11px] font-bold shadow-xs shadow-blue-500/20 transition-colors cursor-pointer">
                        <Plus className="w-3 h-3" />
                        <span>New</span>
                      </button>
                    </div>

                    {/* Table View */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-2 px-4">Invoice</th>
                            <th className="py-2 px-4">Client</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                          {/* Row 1 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4 font-bold text-slate-900">INV-204</td>
                            <td className="py-2.5 px-4 text-slate-600">Alex Rivera</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">₹42,000</td>
                            <td className="py-2.5 px-4 text-right font-bold text-emerald-600">
                              Paid
                            </td>
                          </tr>

                          {/* Row 2 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4 font-bold text-slate-900">INV-203</td>
                            <td className="py-2.5 px-4 text-slate-600">Orbit Media</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">₹18,500</td>
                            <td className="py-2.5 px-4 text-right font-bold text-slate-900">
                              Sent
                            </td>
                          </tr>

                          {/* Row 3 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4 font-bold text-slate-900">INV-198</td>
                            <td className="py-2.5 px-4 text-slate-600">Brightline</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">₹9,200</td>
                            <td className="py-2.5 px-4 text-right font-bold text-rose-600">
                              Overdue
                            </td>
                          </tr>

                          {/* Row 4 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4 font-bold text-slate-900">INV-197</td>
                            <td className="py-2.5 px-4 text-slate-600">Frame Work</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">₹27,000</td>
                            <td className="py-2.5 px-4 text-right font-medium text-slate-500">
                              Draft
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 2: CRM (Mac Window on Left, Text on Right) */}
            {currentSlide === 1 && (
              <motion.div
                key="crm-slide"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
              >
                {/* Left: Mac Window Preview */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="rounded-xl border border-slate-200/90 bg-white shadow-md shadow-slate-100 overflow-hidden">
                    {/* Mac Window Titlebar */}
                    <div className="bg-slate-50/90 px-3.5 py-2 border-b border-slate-200/70 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium ml-1">
                        Solopreneur OS · CRM
                      </span>
                    </div>

                    {/* Window Subheader */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Clients
                        </span>
                        <span className="text-xs font-medium text-slate-400">128</span>
                      </div>
                      <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1772F2] hover:bg-blue-600 text-white text-[11px] font-bold shadow-xs shadow-blue-500/20 transition-colors cursor-pointer">
                        <Plus className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>

                    {/* Table View */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Lead Status</th>
                            <th className="py-2 px-4">Core Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                          {/* Row 1 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <img
                                  src="/avatar-alex.png"
                                  alt="Alex Rivera"
                                  className="w-6 h-6 rounded-full object-cover border border-slate-200"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none'
                                  }}
                                />
                                <span className="font-bold text-slate-900">Alex Rivera</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-slate-600">Converted</td>
                            <td className="py-2.5 px-4 font-bold text-blue-900">Active Customer</td>
                          </tr>

                          {/* Row 2 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                                  JS
                                </div>
                                <span className="font-bold text-slate-900">Jordan Smith</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-slate-600">Contacted</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">Lead</td>
                          </tr>

                          {/* Row 3 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[10px] font-bold">
                                  TB
                                </div>
                                <span className="font-bold text-slate-900">Taylor Brooks</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-slate-600">Qualified</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">Prospect</td>
                          </tr>

                          {/* Row 4 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-[10px] font-bold">
                                  CM
                                </div>
                                <span className="font-bold text-slate-900">Casey Morgan</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-slate-600">New</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">Lead</td>
                          </tr>

                          {/* Row 5 */}
                          <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-2.5 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1772F2] flex items-center justify-center text-[10px] font-bold">
                                  SP
                                </div>
                                <span className="font-bold text-slate-900">Sam Parker</span>
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-slate-600">Converted</td>
                            <td className="py-2.5 px-4 font-bold text-slate-900">Client</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
                  <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-[11px] font-bold tracking-tight mb-3">
                    CRM
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug mb-2.5">
                    Clients and deals where the work already lives.
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
                    Pipeline, people, and notes next to invoices and tasks. Stop keeping the real list in a sheet.
                  </p>

                  <a
                    href="#request-access"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1772F2] text-xs sm:text-sm hover:text-blue-700 transition-colors group w-fit"
                  >
                    <span>Explore CRM</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* SLIDE 3: BOOKINGS (Text on Left, Mac Window on Right) */}
            {currentSlide === 2 && (
              <motion.div
                key="bookings-slide"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
              >
                {/* Left: Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-[11px] font-bold tracking-tight mb-3">
                    Bookings
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug mb-2.5">
                    Public booking that lands in your OS.
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
                    A page clients can book. It shows up next to CRM and the calendar you already run. Built for consults, sessions, and studio time — not another Calendly island.
                  </p>

                  <a
                    href="#request-access"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1772F2] text-xs sm:text-sm hover:text-blue-700 transition-colors group w-fit"
                  >
                    <span>Explore Bookings</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Right: Mac Window Preview */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-slate-200/90 bg-white shadow-md shadow-slate-100 overflow-hidden">
                    {/* Mac Window Titlebar */}
                    <div className="bg-slate-50/90 px-3.5 py-2 border-b border-slate-200/70 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium ml-1">
                        Solopreneur OS · Bookings
                      </span>
                    </div>

                    {/* Window Subheader */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Today
                        </span>
                        <span className="text-xs font-medium text-slate-400">Solopreneur OS</span>
                      </div>
                      <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-slate-200 bg-white hover:border-blue-400 hover:text-[#1772F2] text-slate-700 text-[11px] font-medium shadow-2xs transition-colors cursor-pointer">
                        <span>Public link</span>
                      </button>
                    </div>

                    {/* Schedule List View */}
                    <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {/* Row 1 */}
                      <div className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-400 text-xs w-11">
                            10:00
                          </span>
                          <div>
                            <div className="font-bold text-slate-900">Maya Chen</div>
                            <div className="text-[11px] text-slate-400">Studio session</div>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 text-xs">Confirmed</span>
                      </div>

                      {/* Row 2 */}
                      <div className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-400 text-xs w-11">
                            11:30
                          </span>
                          <div>
                            <div className="font-bold text-slate-900">Jordan Ellis</div>
                            <div className="text-[11px] text-slate-400">Consult</div>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 text-xs">Confirmed</span>
                      </div>

                      {/* Row 3 */}
                      <div className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-400 text-xs w-11">
                            14:00
                          </span>
                          <div>
                            <div className="font-medium text-slate-700">Open</div>
                            <div className="text-[11px] text-slate-400">Available</div>
                          </div>
                        </div>
                        <span className="font-medium text-slate-400 text-xs">Open</span>
                      </div>

                      {/* Row 4 */}
                      <div className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-400 text-xs w-11">
                            16:00
                          </span>
                          <div>
                            <div className="font-bold text-slate-900">Sofia Rossi</div>
                            <div className="text-[11px] text-slate-400">Retainer call</div>
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 text-xs">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SLIDE 4: TASKS (Mac Window on Left, Text on Right) */}
            {currentSlide === 3 && (
              <motion.div
                key="tasks-slide"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
              >
                {/* Left: Mac Window Preview */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="rounded-xl border border-slate-200/90 bg-white shadow-md shadow-slate-100 overflow-hidden">
                    {/* Mac Window Titlebar */}
                    <div className="bg-slate-50/90 px-3.5 py-2 border-b border-slate-200/70 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium ml-1">
                        Solopreneur OS · Tasks
                      </span>
                    </div>

                    {/* Window Subheader */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          Delivery
                        </span>
                        <span className="text-xs font-medium text-slate-400">Q3 board</span>
                      </div>
                      <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1772F2] hover:bg-blue-600 text-white text-[11px] font-bold shadow-xs shadow-blue-500/20 transition-colors cursor-pointer">
                        <Plus className="w-3 h-3" />
                        <span>Task</span>
                      </button>
                    </div>

                    {/* Checklist View */}
                    <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {/* Task 1 */}
                      <div
                        onClick={() => toggleTask(0)}
                        className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                              taskChecked[0]
                                ? 'bg-[#1772F2] border-[#1772F2] text-white'
                                : 'border-slate-300 group-hover:border-slate-400'
                            }`}
                          >
                            {taskChecked[0] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div
                              className={`font-bold transition-all ${
                                taskChecked[0] ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              Send revised estimate to Northwind
                            </div>
                            <div className="text-[11px] text-slate-400">
                              In Progress · You
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">Today</span>
                      </div>

                      {/* Task 2 */}
                      <div
                        onClick={() => toggleTask(1)}
                        className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                              taskChecked[1]
                                ? 'bg-[#1772F2] border-[#1772F2] text-white'
                                : 'border-slate-300 group-hover:border-slate-400'
                            }`}
                          >
                            {taskChecked[1] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div
                              className={`font-bold transition-all ${
                                taskChecked[1] ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              Brand kit delivery — final assets
                            </div>
                            <div className="text-[11px] text-slate-400">To Do · You</div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">Yesterday</span>
                      </div>

                      {/* Task 3 */}
                      <div
                        onClick={() => toggleTask(2)}
                        className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                              taskChecked[2]
                                ? 'bg-[#1772F2] border-[#1772F2] text-white'
                                : 'border-slate-300 group-hover:border-slate-400'
                            }`}
                          >
                            {taskChecked[2] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div
                              className={`font-bold transition-all ${
                                taskChecked[2] ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              Follow up unpaid invoice INV-198
                            </div>
                            <div className="text-[11px] text-slate-400">To Do · Emily</div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">Fri</span>
                      </div>

                      {/* Task 4 */}
                      <div
                        onClick={() => toggleTask(3)}
                        className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                              taskChecked[3]
                                ? 'bg-[#1772F2] border-[#1772F2] text-white'
                                : 'border-slate-300 group-hover:border-slate-400'
                            }`}
                          >
                            {taskChecked[3] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div
                              className={`font-bold transition-all ${
                                taskChecked[3] ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              Prepare shoot checklist — Studio A
                            </div>
                            <div className="text-[11px] text-slate-400">
                              In Progress · James
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">Mon</span>
                      </div>

                      {/* Task 5 */}
                      <div
                        onClick={() => toggleTask(4)}
                        className="py-2.5 px-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-3.5 h-3.5 rounded mt-0.5 border flex items-center justify-center transition-colors ${
                              taskChecked[4]
                                ? 'bg-[#1772F2] border-[#1772F2] text-white'
                                : 'border-slate-300 group-hover:border-slate-400'
                            }`}
                          >
                            {taskChecked[4] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div
                              className={`font-bold transition-all ${
                                taskChecked[4] ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}
                            >
                              Update CRM tags for Q3 leads
                            </div>
                            <div className="text-[11px] text-slate-400">Done · You</div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">Done</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
                  <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#1772F2] text-[11px] font-bold tracking-tight mb-3">
                    Tasks
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-snug mb-2.5">
                    Delivery next to the client who is waiting.
                  </h3>

                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
                    Tasks sit on the job, the invoice, and the person. Not a second board you stop updating mid-project.
                  </p>

                  <a
                    href="#request-access"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1772F2] text-xs sm:text-sm hover:text-blue-700 transition-colors group w-fit"
                  >
                    <span>Explore Tasks</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Controls: < 1/4 > */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous module slide"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-[#1772F2] transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <span className="text-xs sm:text-sm font-semibold text-slate-600 px-2 select-none">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            aria-label="Next module slide"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-[#1772F2] transition-colors cursor-pointer shadow-2xs"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
