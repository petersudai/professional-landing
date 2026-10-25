import Image from 'next/image'
import { config } from '@/config/professional'

export function Hero() {
  const { hero } = config

  return (
    <section id="top" className="border-b border-rule">
      <div className="container-page fade-in grid gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[2.375rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">{hero.sub}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href={hero.cta.href} className="btn">
              {hero.cta.label}
            </a>
            <a href={hero.secondary.href} className="link">
              {hero.secondary.label}
            </a>
          </div>
          <p className="mt-5 text-[0.9375rem] text-graphite">{hero.note}</p>
        </div>

        <figure className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-rule">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 560px, 100vw"
              className="h-full w-full object-cover object-[50%_35%]"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
