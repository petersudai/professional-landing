import { config } from '@/config/professional'

export function About() {
  const { about } = config

  return (
    <section id="about" className="border-b border-rule">
      <div className="container-page grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:col-span-4">
          {about.heading}
        </h2>

        <div className="lg:col-span-8">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 divide-y divide-rule border-y border-rule">
            {about.facts.map((fact) => (
              <div key={fact.term} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <dt className="text-[0.9375rem] font-semibold text-graphite">{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
