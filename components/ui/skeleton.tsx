import { CSSProperties } from 'react'

interface SkeletonProps {
  className?: string
  style?: CSSProperties
  /** Use a circular skeleton (e.g. for avatars). */
  circle?: boolean
}

export default function Skeleton({
  className = '',
  style,
  circle = false,
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-gradient-to-br from-[var(--color-bg-tertiary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] ${
        circle ? 'rounded-full' : 'rounded-lg'
      } ${className}`}
      style={style}
    />
  )
}
