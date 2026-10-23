import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Table,
  Calendar,
  FileText,
  Mail,
  StickyNote,
  ArrowRight,
  Zap,
} from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'

interface FragmentsIntroProps {
  onComplete: () => void
}

export const FragmentsIntro: React.FC<FragmentsIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'mess' | 'assembling' | 'done'>('mess')
  const [toolCount, setToolCount] = useState(6)
  const { setIntroPhase } = useWorkspaceStore()

  useEffect(() => {
    // Phase 0 -> 1: Assemble after 1.4s
    const assembleTimer = setTimeout(() => {
      setPhase('assembling')
      setIntroPhase('assemble')

      // Animate tool count 6 -> 1
      let count = 6
      const interval = setInterval(() => {
        count -= 1
        setToolCount(count)
        if (count <= 1) {
          clearInterval(interval)
        }
      }, 180)
    }, 1400)

    // Phase 1 -> 2: Ready workbench after 2.8s
    const readyTimer = setTimeout(() => {
      setPhase('done')
      setIntroPhase('ready')
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(assembleTimer)
      clearTimeout(readyTimer)
    }
  }, [onComplete, setIntroPhase])

  const handleSkip = () => {
    setPhase('done')
    setIntroPhase('ready')
    onComplete()
  }

  const fragments = [
    {
      id: 'chat',
      icon: MessageSquare,
      title: 'WhatsApp Chat',
      text: '"Did you get my payment?"',
      meta: 'Brightline · 2m ago',
      color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800',
      initial: { x: -40, y: -30, rotate: -6 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
    {
      id: 'sheet',
      icon: Table,
      title: 'Google Sheet',
      text: 'Brightline | $1,200 | ? Status',
      meta: 'Row 48 · Unsynced',
      color: 'border-blue-500/30 bg-blue-50 text-blue-800',
      initial: { x: 50, y: -20, rotate: 5 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
    {
      id: 'cal',
      icon: Calendar,
      title: 'Calendar Slot',
      text: 'Tue 14:00 · Strategy call?',
      meta: 'Google Cal invite',
      color: 'border-purple-500/30 bg-purple-50 text-purple-800',
      initial: { x: -60, y: 40, rotate: 4 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
    {
      id: 'pdf',
      icon: FileText,
      title: 'Drive Attachment',
      text: 'INV-198_v2_FINAL.pdf',
      meta: '142 KB · Stored in Drive',
      color: 'border-amber-500/30 bg-amber-50 text-amber-800',
      initial: { x: 60, y: 30, rotate: -4 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
    {
      id: 'mail',
      icon: Mail,
      title: 'Gmail Thread',
      text: 'Re: Estimate & Scope revision',
      meta: '3 unread replies',
      color: 'border-rose-500/30 bg-rose-50 text-rose-800',
      initial: { x: -20, y: 90, rotate: -3 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
    {
      id: 'sticky',
      icon: StickyNote,
      title: 'Sticky Note',
      text: 'REMEMBER: follow up Brightline Fri!',
      meta: 'Desktop note',
      color: 'border-yellow-500/30 bg-yellow-50 text-yellow-800',
      initial: { x: 45, y: 95, rotate: 6 },
      target: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
    },
  ]

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] flex flex-col items-center justify-center overflow-hidden p-4 rounded-b-xl bg-gradient-to-b from-white to-[#F8FAFC]">
      {/* Top Banner Status */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white">
            <Zap className="w-3 h-3 text-[#F97316]" />
            {phase === 'mess' ? 'Your stack today' : 'Consolidating into Solopreneur OS...'}
          </span>
          <span className="text-xs font-mono font-medium text-slate-500">
            {phase === 'mess' ? '6 unlinked tools' : `${toolCount} tools → 1 workspace`}
          </span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-200 transition-colors shadow-2xs cursor-pointer"
        >
          <span>Skip to demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Scattered Fragments Container */}
      <div className="relative w-full max-w-lg h-72 flex items-center justify-center">
        {fragments.map((frag) => {
          const Icon = frag.icon
          const isAssembling = phase === 'assembling' || phase === 'done'

          return (
            <motion.div
              key={frag.id}
              initial={frag.initial}
              animate={
                isAssembling
                  ? frag.target
                  : {
                      x: frag.initial.x,
                      y: frag.initial.y,
                      rotate: frag.initial.rotate,
                    }
              }
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`absolute w-52 sm:w-60 p-3 rounded-lg border shadow-md transition-shadow backdrop-blur-sm ${frag.color}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-semibold uppercase tracking-wider opacity-80 truncate">
                  {frag.title}
                </span>
              </div>
              <p className="text-xs font-bold leading-tight line-clamp-2 text-slate-900">
                {frag.text}
              </p>
              <span className="block mt-1 text-[10px] opacity-70 font-mono">
                {frag.meta}
              </span>
            </motion.div>
          )
        })}

        {/* Center Target Core when assembling */}
        {phase === 'assembling' && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="z-10 p-4 rounded-xl bg-white border-2 border-[#F97316] shadow-xl text-center"
          >
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#0A0A0A] flex items-center justify-center mb-2">
              <span className="text-[#F97316] font-black text-sm">OS</span>
            </div>
            <p className="text-xs font-bold text-slate-900">Connecting all 6 streams</p>
            <p className="text-[11px] text-slate-500">Syncing invoices, CRM & tasks...</p>
          </motion.div>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 text-center">
        <span className="text-[11px] text-slate-500 tracking-wide">
          {phase === 'mess'
            ? 'Fragmented data creates forgotten invoices and double work'
            : 'Unifying into one shared customer timeline...'}
        </span>
      </div>
    </div>
  )
}
