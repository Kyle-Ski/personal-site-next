"use client"

import Link from 'next/link'
import { ReactNode, ComponentProps } from 'react'

interface CtaButtonBaseProps {
  children: ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

interface CtaLinkProps extends CtaButtonBaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
}

interface CtaActionProps extends CtaButtonBaseProps {
  href?: never
  external?: never
  onClick?: ComponentProps<'button'>['onClick']
  type?: ComponentProps<'button'>['type']
}

type CtaButtonProps = CtaLinkProps | CtaActionProps

const baseClasses =
  'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-text-accent)]'

const solidStyle = {
  backgroundColor: 'var(--color-text-accent)',
  color: 'white',
}

const outlineStyle = {
  borderColor: 'var(--color-text-accent)',
  color: 'var(--color-text-accent)',
  borderWidth: 1,
  borderStyle: 'solid' as const,
  backgroundColor: 'transparent',
}

export default function CtaButton(props: CtaButtonProps) {
  const { children, variant = 'solid', className = '' } = props
  const style = variant === 'solid' ? solidStyle : outlineStyle
  const classes = `${baseClasses} ${className}`

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
      style={style}
    >
      {children}
    </button>
  )
}
