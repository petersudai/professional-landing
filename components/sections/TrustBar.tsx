import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { config } from '@/config/professional'

export function TrustBar() {
  const { trustBar } = config

  return (
    <section className="bg-white border-b border-slate-100 py-12">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Credentials row */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
            {trustBar.credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-600" />
                <span className="text-slate-500 text-sm font-medium">{cred}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Logos divider */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1 h-px bg-slate-100" />
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-slate-400 whitespace-nowrap">
            {trustBar.eyebrow}
          </p>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Logo tiles */}
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustBar.logos.map((logo) => (
            <StaggerItem key={logo.name}>
              <div className="group flex items-center justify-center px-6 py-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200 min-w-[130px]">
                <span className="text-slate-400 font-bold text-sm tracking-wide group-hover:text-slate-600 transition-colors">
                  {logo.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
