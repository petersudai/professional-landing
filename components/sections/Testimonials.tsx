'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { config } from '@/config/professional'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const { testimonials } = config
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length)
  const next = () => setActive((a) => (a + 1) % testimonials.items.length)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <SectionHeader
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          className="mb-16"
        />

        {/* Desktop: All cards */}
        <StaggerContainer
          className="hidden md:grid md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {testimonials.items.map((t) => (
            <StaggerItem key={t.name}>
              <div className="relative flex flex-col bg-white border border-slate-100 rounded-2xl p-6 lg:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-brand-500 text-brand-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 text-[0.9375rem] leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Result chip */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold">
                    {t.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-slate-200"
                  />
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {(() => {
                  const t = testimonials.items[active]
                  return (
                    <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-card">
                      <div className="flex gap-0.5 mb-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={13} className="fill-brand-500 text-brand-500" />
                        ))}
                      </div>
                      <blockquote className="text-slate-700 text-base leading-relaxed mb-5">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold mb-5">
                        {t.result}
                      </span>
                      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-slate-200" />
                        <div>
                          <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                          <p className="text-slate-400 text-xs">{t.title}, {t.company}</p>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-slate-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-200',
                    i === active ? 'w-6 bg-brand-700' : 'w-1.5 bg-slate-200'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} className="text-slate-600" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
