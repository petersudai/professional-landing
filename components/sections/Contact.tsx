'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle2, Send, ArrowRight } from 'lucide-react'
import { config } from '@/config/professional'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const trustSignals = [
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: CheckCircle2, text: 'No obligation, no pitch' },
  { icon: Calendar, text: '30-minute focused conversation' },
]

export function Contact() {
  const { contact } = config
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Please describe your challenge'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setState('submitting')
    // Replace with your form submission endpoint (e.g. Formspree, API route)
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  const Field = ({
    label,
    name,
    type = 'text',
    placeholder,
    required,
  }: {
    label: string
    name: keyof typeof form
    type?: string
    placeholder?: string
    required?: boolean
  }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-brand-600 ml-0.5">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => {
          setForm((f) => ({ ...f, [name]: e.target.value }))
          if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
        }}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-all duration-150 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400',
          errors[name]
            ? 'border-red-300 bg-red-50/50'
            : 'border-slate-200 hover:border-slate-300'
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1.5">{errors[name]}</p>
      )}
    </div>
  )

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-700/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Left — Copy */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand-400 mb-4">
                {contact.eyebrow}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.08] tracking-tight mb-6">
                {contact.headline.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < contact.headline.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="text-slate-300 leading-relaxed text-[1.0625rem] mb-10">
                {contact.subheadline}
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {trustSignals.map(({ icon: Icon, text }) => (
                <StaggerItem key={text}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-700/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-brand-400" />
                    </div>
                    <p className="text-slate-300 text-sm">{text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Availability */}
            <AnimatedSection delay={0.4} className="mt-10">
              <div className="flex items-center gap-2.5 p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
                <p className="text-slate-300 text-sm font-medium">{contact.availability}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection
            direction="left"
            delay={0.2}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              {state === 'success' ? (
                <motion.div
                  className="flex flex-col items-center text-center py-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                    Request received!
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    I&apos;ll review your message and reply within 24 hours with available times for a call.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1.5">
                    Book Your Free Strategy Call
                  </h3>
                  <p className="text-slate-500 text-sm mb-8">
                    Fill in a few details and I&apos;ll reach out to schedule a time.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Full Name" name="name" placeholder="Jane Smith" required />
                    <Field label="Email Address" name="email" type="email" placeholder="jane@company.com" required />
                  </div>

                  <div className="mb-5">
                    <Field label="Company Name" name="company" placeholder="Acme Corp" />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="revenue" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Annual Revenue Range
                    </label>
                    <select
                      id="revenue"
                      value={form.revenue}
                      onChange={(e) => setForm((f) => ({ ...f, revenue: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 hover:border-slate-300 px-4 py-3 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition-all duration-150"
                    >
                      <option value="">Select a range…</option>
                      {contact.revenueOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      What&apos;s your biggest challenge right now?
                      <span className="text-brand-600 ml-0.5">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, message: e.target.value }))
                        if (errors.message) setErrors((er) => ({ ...er, message: '' }))
                      }}
                      placeholder="Describe your current situation and the challenge you're trying to solve…"
                      className={cn(
                        'w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 text-sm resize-none transition-all duration-150 bg-white',
                        'focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400',
                        errors.message
                          ? 'border-red-300 bg-red-50/50'
                          : 'border-slate-200 hover:border-slate-300'
                      )}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className={cn(
                      'w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200',
                      state === 'submitting'
                        ? 'bg-brand-600 text-white cursor-wait opacity-80'
                        : 'bg-brand-700 text-white hover:bg-brand-800 active:scale-[0.98] shadow-brand-sm hover:shadow-brand-md'
                    )}
                  >
                    {state === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send My Request
                        <ArrowRight size={15} className="ml-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-xs mt-4">
                    No spam, no sales calls unless you want one. I read every message personally.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
