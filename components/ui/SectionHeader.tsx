import { cn } from '@/lib/utils'
import { AnimatedSection } from './AnimatedSection'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark'
  const isCenter = align === 'center'

  return (
    <div className={cn(isCenter ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <AnimatedSection delay={0}>
          <p
            className={cn(
              'text-xs font-bold tracking-[0.18em] uppercase mb-4',
              isDark ? 'text-brand-400' : 'text-brand-700'
            )}
          >
            {eyebrow}
          </p>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.08}>
        <h2
          className={cn(
            'font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] sm:leading-[1.08] tracking-tight mb-5',
            isDark ? 'text-white' : 'text-slate-900'
          )}
        >
          {headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>
      </AnimatedSection>

      {subheadline && (
        <AnimatedSection delay={0.16}>
          <p
            className={cn(
              'text-lg leading-relaxed max-w-2xl',
              isCenter && 'mx-auto',
              isDark ? 'text-slate-300' : 'text-slate-500'
            )}
          >
            {subheadline}
          </p>
        </AnimatedSection>
      )}
    </div>
  )
}
