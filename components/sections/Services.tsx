'use client'

import { Target, Zap, Users, CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react'
import { config } from '@/config/professional'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const IconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Users,
}

export function Services() {
  const { services } = config

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <SectionHeader
          eyebrow={services.eyebrow}
          headline={services.headline}
          subheadline={services.subheadline}
          className="mb-16"
        />

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {services.items.map((service, i) => {
            const Icon = IconMap[service.icon] ?? Target
            const isPopular = !!service.badge

            return (
              <StaggerItem key={service.title}>
                <div
                  className={cn(
                    'relative flex flex-col rounded-2xl border p-6 sm:p-7 lg:p-8 transition-all duration-300 group hover:-translate-y-1',
                    isPopular
                      ? 'bg-slate-900 border-slate-800 shadow-xl'
                      : 'bg-white border-slate-150 hover:border-slate-200 hover:shadow-card-hover shadow-card'
                  )}
                >
                  {/* Popular badge */}
                  {service.badge && (
                    <div className="absolute -top-3.5 left-7">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-brand-700 text-white text-xs font-bold tracking-wide shadow-brand-sm">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      'w-11 h-11 rounded-xl flex items-center justify-center mb-6',
                      isPopular ? 'bg-brand-700/20' : 'bg-brand-50'
                    )}
                  >
                    <Icon
                      size={20}
                      className={isPopular ? 'text-brand-400' : 'text-brand-700'}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      'font-serif text-xl font-bold mb-3',
                      isPopular ? 'text-white' : 'text-slate-900'
                    )}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      'text-sm leading-relaxed mb-6',
                      isPopular ? 'text-slate-300' : 'text-slate-500'
                    )}
                  >
                    {service.description}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className={cn(
                            'shrink-0 mt-0.5',
                            isPopular ? 'text-brand-400' : 'text-brand-600'
                          )}
                        />
                        <span
                          className={cn(
                            'text-sm',
                            isPopular ? 'text-slate-300' : 'text-slate-600'
                          )}
                        >
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div
                    className={cn(
                      'pt-6 border-t flex items-end justify-between',
                      isPopular ? 'border-white/10' : 'border-slate-100'
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          'font-bold text-base',
                          isPopular ? 'text-white' : 'text-slate-900'
                        )}
                      >
                        {service.investment}
                      </p>
                      <p
                        className={cn(
                          'text-xs mt-0.5',
                          isPopular ? 'text-slate-400' : 'text-slate-400'
                        )}
                      >
                        {service.duration}
                      </p>
                    </div>

                    <button
                      onClick={() => handleScroll('#contact')}
                      className={cn(
                        'inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/btn',
                        isPopular
                          ? 'text-brand-400 hover:text-brand-300'
                          : 'text-brand-700 hover:text-brand-800'
                      )}
                    >
                      Get started
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Not sure which is right for you? The strategy call will answer that.{' '}
          <button
            onClick={() => handleScroll('#contact')}
            className="text-brand-700 font-medium hover:text-brand-800 underline underline-offset-2"
          >
            Book it free.
          </button>
        </p>
      </div>
    </section>
  )
}
