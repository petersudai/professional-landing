import { config } from '@/config/professional'

export function Services() {
  const { services } = config

  return (
    <section id="services" className="border-b border-rule bg-white">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {services.heading}
          </h2>
          <p className="mt-3 text-lg text-graphite">{services.sub}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {services.items.map((item) => (
            <article key={item.title} className="flex flex-col border-t-4 border-ink pt-5">
              <p className="h-6 text-sm font-semibold uppercase tracking-wide text-stamp">{item.tag}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 font-display text-4xl font-semibold tabular-nums">{item.price}</p>
              <p className="mt-1 text-[0.9375rem] text-graphite">{item.length}</p>

              <p className="mt-5 leading-relaxed">{item.description}</p>

              <ul className="mt-6 flex-1 divide-y divide-rule border-y border-rule text-[0.9375rem]">
                {item.includes.map((line) => (
                  <li key={line} className="py-3">
                    {line}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="link mt-6 self-start">
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
