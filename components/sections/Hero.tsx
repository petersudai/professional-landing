'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import { config } from '@/config/professional'

export function Hero() {
  const { hero } = config

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-brand-700/10 blur-[120px] pointer-events-none" />

      {/* Right gradient panel */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-gradient-to-l from-slate-900/80 to-transparent hidden lg:block pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-700/40 bg-brand-700/10 text-brand-400 text-xs font-bold tracking-[0.16em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] sm:leading-[1.05] tracking-tight text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {hero.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-brand-400">{line}</span>
                  ) : (
                    line
                  )}
                  {i < hero.headline.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
            >
              <button
                onClick={() => handleScroll(hero.primaryCta.href)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-700 text-white font-semibold text-base hover:bg-brand-800 active:scale-[0.97] transition-all duration-200 shadow-brand-md group"
              >
                {hero.primaryCta.label}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
              <button
                onClick={() => handleScroll(hero.secondaryCta.href)}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
              >
                {hero.secondaryCta.label}
              </button>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Calendar size={13} className="text-brand-500 shrink-0" />
              <p className="text-slate-400 text-sm">{hero.availability}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
            >
              {Object.values(hero.socialProof).map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-[10px] sm:text-xs mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Photo frame */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-white/5" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-white/[0.03]" />

              {/* Main image container */}
              <div className="relative rounded-[1.5rem] overflow-hidden bg-slate-800 aspect-[4/5]">
                <img
                  src={config.about.image}
                  alt={config.about.imageAlt}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for brand integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Floating result card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-semibold leading-tight">
                        TechScale Inc. — 6-month result
                      </p>
                      <p className="text-brand-700 font-bold text-lg mt-0.5">+$6M ARR</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Side credential pill */}
              <motion.div
                className="absolute -left-6 top-1/3 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <p className="text-white text-xs font-bold">MBA</p>
                <p className="text-slate-400 text-[10px] mt-0.5">Harvard Business</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
