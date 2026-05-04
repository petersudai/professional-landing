'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { config } from '@/config/professional'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { nav } = config

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={cn(
              'font-serif font-bold text-lg transition-colors',
              scrolled ? 'text-slate-900' : 'text-white'
            )}
          >
            {nav.logo}
            {nav.logoSuffix && (
              <span className="text-brand-600 font-sans font-normal text-sm ml-1">
                {nav.logoSuffix}
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={nav.cta.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(nav.cta.href)
              }}
              className={cn(
                'hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.97]',
                scrolled
                  ? 'bg-brand-700 text-white hover:bg-brand-800 shadow-brand-sm hover:shadow-brand-md'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              )}
            >
              {nav.cta.label}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col pt-20 px-6 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav className="flex flex-col gap-2 mt-4">
              {nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/80 hover:text-white text-2xl font-serif py-3 border-b border-white/10 last:border-0"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <a
              href={nav.cta.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(nav.cta.href)
              }}
              className="mt-8 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-700 text-white text-base font-semibold hover:bg-brand-800 transition-colors"
            >
              {nav.cta.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
