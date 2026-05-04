'use client'

import { config } from '@/config/professional'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Process() {
  const { process } = config

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <SectionHeader
          eyebrow={process.eyebrow}
          headline={process.headline}
          subheadline={process.subheadline}
          className="mb-20"
        />

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 relative"
          staggerDelay={0.12}
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-slate-200 -z-0" />

          {process.steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-28 h-28 rounded-full bg-white border-2 border-slate-200 flex flex-col items-center justify-center shadow-card group-hover:border-brand-300 group-hover:shadow-brand-sm transition-all duration-300">
                    <span className="font-serif font-bold text-3xl text-slate-900 leading-none">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-1 mt-1.5">
                      <Clock size={10} className="text-brand-600" />
                      <span className="text-[10px] font-medium text-slate-400">{step.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] md:max-w-[220px]">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA strip */}
        <div className="mt-20 bg-white border border-slate-100 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <p className="font-serif text-xl font-bold text-slate-900">
              Ready to start with Step 01?
            </p>
            <p className="text-slate-500 text-sm mt-1">
              The strategy call is free, focused, and 30 minutes.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="shrink-0 inline-flex items-center px-7 py-3.5 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-800 active:scale-[0.97] transition-all duration-200 shadow-brand-sm hover:shadow-brand-md"
          >
            Book Your Free Call
          </a>
        </div>

      </div>
    </section>
  )
}
