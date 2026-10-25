'use client'

import { useState, type FormEvent } from 'react'
import { config } from '@/config/professional'
import { cn } from '@/lib/utils'

type Values = { name: string; email: string; company: string; size: string; message: string }
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'sending' | 'sent' | 'failed'

const empty: Values = { name: '', email: '', company: '', size: '', message: '' }

const fieldClass =
  'w-full rounded-md border bg-white px-4 py-3 text-base text-ink placeholder:text-graphite/70 focus:border-ledger focus:outline focus:outline-2 focus:outline-ledger/30'

// Defined outside Contact so the inputs keep focus while the user types.
function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.9375rem] font-semibold">
        {label}
        {required ? (
          <span className="font-normal text-graphite"> (required)</span>
        ) : (
          <span className="font-normal text-graphite"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-stamp">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const { contact } = config
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please tell me your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter an email address I can reply to.'
    if (!values.message.trim()) next.message = 'A sentence or two is enough.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      // Set NEXT_PUBLIC_FORM_ENDPOINT (Formspree, your own API route, etc.).
      // Without it the form only shows the confirmation, which is fine for a demo.
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
      }
      setStatus('sent')
      setValues(empty)
    } catch {
      setStatus('failed')
    }
  }

  const border = (key: keyof Values) => (errors[key] ? 'border-stamp' : 'border-ink/40 hover:border-ink')
  const describe = (key: keyof Values) => (errors[key] ? `${key}-error` : undefined)

  return (
    <section id="contact" className="bg-ledger text-white">
      <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#C9D6CE]">{contact.sub}</p>
          <p className="mt-6 text-[#C9D6CE]">{contact.when}</p>
        </div>

        <div className="bg-paper p-6 text-ink sm:p-8 lg:col-span-7">
          {status === 'sent' ? (
            <div role="status" className="py-8">
              <h3 className="font-display text-2xl font-semibold">Thanks. I have your message.</h3>
              <p className="mt-3 max-w-md text-graphite">
                I reply within one working day with times for a call.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={describe('name')}
                    className={cn(fieldClass, border('name'))}
                  />
                </Field>
                <Field id="email" label="Email" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={describe('email')}
                    className={cn(fieldClass, border('email'))}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="company" label="Business name">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={set('company')}
                    className={cn(fieldClass, 'border-ink/40 hover:border-ink')}
                  />
                </Field>
                <Field id="size" label="People in the business">
                  <select
                    id="size"
                    name="size"
                    value={values.size}
                    onChange={set('size')}
                    className={cn(fieldClass, 'border-ink/40 hover:border-ink')}
                  >
                    <option value="">Choose one</option>
                    {contact.sizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label="What's slow right now?" required error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={set('message')}
                  placeholder={contact.placeholder}
                  aria-invalid={!!errors.message}
                  aria-describedby={describe('message')}
                  className={cn(fieldClass, 'resize-y', border('message'))}
                />
              </Field>

              {status === 'failed' && (
                <p role="alert" className="text-sm font-medium text-stamp">
                  That didn&apos;t send. Please try again in a moment.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn w-full disabled:opacity-70 sm:w-auto">
                {status === 'sending' ? 'Sending' : 'Send and book a call'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
