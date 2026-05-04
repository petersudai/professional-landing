import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentProps<'a'> {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 active:scale-[0.97] shadow-brand-sm hover:shadow-brand-md',
  secondary:
    'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.97]',
  ghost:
    'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:scale-[0.97]',
  'outline-light':
    'border border-white/25 text-white hover:bg-white/10 active:scale-[0.97]',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-[0.9375rem] gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  )
}
