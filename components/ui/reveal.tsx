"use client"

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** Distance in px to translate from. Default 10 (subtle). */
  distance?: number
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  distance = 10,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
