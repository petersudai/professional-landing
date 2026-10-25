import { config } from '@/config/professional'

// Native <details> elements: keyboard and screen reader support with no JavaScript.
export function FAQ() {
  const { faq } = config

  return (
    <section id="faq" className="border-b border-rule">
      <div className="container-page grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:col-span-4">
          {faq.heading}
        </h2>

        <div className="border-t border-rule lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-rule">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-xl font-semibold leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-3xl font-normal leading-none text-graphite transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-graphite">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
