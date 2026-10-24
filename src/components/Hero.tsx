import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Workbench } from './Workbench/Workbench'
import { Nav } from './Nav'

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[92vh] lg:min-h-[960px] pb-10 overflow-hidden bg-[#1772F2] flex flex-col justify-between"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 85px), 50% calc(100% - 25px), 0 calc(100% - 85px))',
      }}
    >
      <div className="absolute inset-0 bg-[#1772F2] pointer-events-none" />

      <motion.div
        className="absolute -inset-10 bg-cover bg-center pointer-events-none will-change-transform z-0"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
        animate={{
          x: [-12, 12, -12],
          scale: [1.02, 1.03, 1.02],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />

      <Nav />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl drop-shadow-sm mb-2">
          Run your business.<br />
          Not five different tools.
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-snug mb-3 font-normal drop-shadow-2xs">
          Clients, invoices, bookings, tasks, team, finance, and marketing — all in one workspace. A product you run, not another doc you maintain.
        </p>

        <div className="flex items-center justify-center gap-2.5 mb-2.5">
          <a
            href="#request-access"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>Request access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-900 font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>See pricing</span>
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/35 backdrop-blur-md border border-white/35 text-white shadow-xs mb-3 transition-transform hover:scale-105 cursor-default">
          <img
            src="/avatars-highres.png"
            alt="Built for teams"
            className="h-5 w-auto object-contain rounded-full shadow-2xs"
          />
          <span className="text-[11px] sm:text-xs font-semibold tracking-tight text-white/95">
            Built for freelancers, studios & small teams
          </span>
        </div>

        <div className="w-full relative z-20">
          <Workbench />
        </div>
      </div>

    </section>
  )
}
