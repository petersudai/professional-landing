'use client'

import { useState } from 'react'
import { config } from '@/config/professional'

export function Navbar() {
  const { nav } = config
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="flex min-h-[44px] items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ledger"
        >
          <span className="font-display text-xl font-semibold tracking-tight">{nav.wordmark}</span>
          <span className="hidden text-sm text-graphite sm:inline">{nav.descriptor}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-[0.9375rem] font-medium text-graphite transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a href={nav.cta.href} className="btn !min-h-[44px] !px-5 !py-2 !text-[0.9375rem]">
            {nav.cta.label}
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex min-h-[44px] items-center px-2 text-base font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-rule bg-paper lg:hidden">
          <div className="container-page flex flex-col py-2">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-display text-2xl font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a href={nav.cta.href} onClick={() => setOpen(false)} className="btn my-5">
              {nav.cta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
