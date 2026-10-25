import { config } from '@/config/professional'

export function Process() {
  const { process } = config

  return (
    <section id="process" className="border-b border-rule bg-white">
      <div className="container-page py-16 md:py-24">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {process.heading}
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink pt-4">
              <p className="text-sm font-semibold tabular-nums text-graphite">
                Step {i + 1}
                <span className="mx-2 text-rule" aria-hidden="true">
                  |
                </span>
                {step.when}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-graphite">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
