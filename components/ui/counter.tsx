"use client"

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CounterProps {
  to: number
  from?: number
  duration?: number
  /** Optional suffix appended to the displayed value (e.g. "+", "%"). */
  suffix?: string
  /** Optional prefix prepended to the displayed value. */
  prefix?: string
  /** Number of decimal places to show. */
  decimals?: number
  className?: string
}

export default function Counter({
  to,
  from = 0,
  duration = 1.2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const prefersReducedMotion = useReducedMotion()
  const [value, setValue] = useState(prefersReducedMotion ? to : from)

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      if (prefersReducedMotion) setValue(to)
      return
    }

    const startTime = performance.now()
    let frameId: number

    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * eased
      setValue(current)
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [inView, from, to, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
