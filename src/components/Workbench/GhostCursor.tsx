import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MousePointer2 } from 'lucide-react'
import { useWorkspaceStore } from '../../store/workspace'

interface GhostCursorProps {
  targetElementId?: string
}

export const GhostCursor: React.FC<GhostCursorProps> = () => {
  const { hasInteracted, isClientPanelOpen, step, setHasInteracted } = useWorkspaceStore()
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    if (hasInteracted || isClientPanelOpen || step > 0) {
      setShowCursor(false)
      return
    }

    const timer = setTimeout(() => {
      setShowCursor(true)
    }, 3000)

    const dismiss = () => {
      setShowCursor(false)
      setHasInteracted()
    }

    window.addEventListener('mousemove', dismiss, { once: true })
    window.addEventListener('keydown', dismiss, { once: true })
    window.addEventListener('touchstart', dismiss, { once: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', dismiss)
      window.removeEventListener('keydown', dismiss)
      window.removeEventListener('touchstart', dismiss)
    }
  }, [hasInteracted, isClientPanelOpen, step, setHasInteracted])

  if (!showCursor) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 260, y: 320, scale: 0.8 }}
        animate={{
          opacity: 1,
          x: [240, 160, 140],
          y: [300, 220, 205],
          scale: [0.9, 1, 0.95, 1],
        }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 1.8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        className="absolute z-30 pointer-events-none top-0 left-0 hidden sm:flex items-center gap-2"
        style={{ transformOrigin: 'top left' }}
      >
        <div className="relative">
          <MousePointer2 className="w-6 h-6 text-[var(--accent)] fill-[var(--accent)] drop-shadow-md" />
        </div>
        <div className="bg-[#0A0A0A] text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow-lg border border-neutral-700 whitespace-nowrap animate-bounce">
          Try it: click Brightline
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
