import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Variant = 'default' | 'brand' | 'dark' | 'outline'

interface BadgeProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  default: 'bg-slate-100 text-slate-700',
  brand: 'bg-brand-100 text-brand-800',
  dark: 'bg-slate-900 text-white',
  outline: 'border border-slate-200 text-slate-600',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
