import { config } from '@/config/professional'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

export function Results() {
  const { results } = config

  return (
    <section id="results" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={results.eyebrow}
          headline={results.headline}
          theme="dark"
          className="mb-16"
        />

        {/* Stats */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16"
          staggerDelay={0.1}
        >
          {results.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-slate-950 hover:bg-slate-900/80 transition-colors duration-200 px-6 py-10 md:px-10 md:py-12 text-center">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-3 max-w-[180px] mx-auto leading-snug">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          {results.caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.company} delay={i * 0.12}>
              <div className="bg-slate-900 border border-white/8 rounded-2xl p-6 md:p-8 hover:border-white/12 transition-all duration-300 group hover:-translate-y-0.5">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{cs.company}</h3>
                    <span className="text-xs text-slate-500 font-medium">{cs.industry}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-serif font-bold text-3xl text-brand-400">{cs.metric}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{cs.metricLabel}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                    The Challenge
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-white/8" />
                  <ArrowRight size={14} className="text-brand-600" />
                  <div className="flex-1 h-px bg-white/8" />
                </div>

                {/* Result */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                    The Result
                  </p>
                  <p className="text-slate-200 text-sm leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
