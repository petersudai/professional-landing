'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { config } from '@/config/professional'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

export function FAQ() {
  const { faq } = config
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">

        <SectionHeader
          eyebrow={faq.eyebrow}
          headline={faq.headline}
          className="mb-14"
        />

        <div className="space-y-2">
          {faq.items.map((item, i) => (
            <AnimatedSection key={item.question} delay={i * 0.06}>
              <div
                className={cn(
                  'border rounded-2xl overflow-hidden transition-all duration-200',
                  open === i
                    ? 'border-brand-200 bg-brand-50/50'
                    : 'border-slate-100 bg-white hover:border-slate-200'
                )}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-7 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span
                    className={cn(
                      'font-semibold text-base leading-snug transition-colors',
                      open === i ? 'text-slate-900' : 'text-slate-800'
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5',
                      open === i
                        ? 'bg-brand-700 text-white'
                        : 'bg-slate-100 text-slate-500'
                    )}
                  >
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <p className="px-7 pb-6 text-slate-600 leading-relaxed text-[0.9375rem]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Still have questions */}
        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Have a question not covered here?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-brand-700 font-medium hover:text-brand-800 underline underline-offset-2"
            >
              Reach out directly — I read every message.
            </a>
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
