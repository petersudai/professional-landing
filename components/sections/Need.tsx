import { config } from '@/config/professional'

export function Need() {
  const { need } = config

  return (
    <section className="border-b border-rule bg-white">
      <div className="container-page grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:col-span-4">
          {need.heading}
        </h2>
        <ul className="divide-y divide-rule border-y border-rule lg:col-span-8">
          {need.items.map((item) => (
            <li key={item} className="py-5 text-lg leading-snug sm:text-xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
