import Image from 'next/image'
import { config } from '@/config/professional'

export function Hero() {
  const { hero } = config

  return (
    // On laptops the hero fills the window under the 64px header and centres its content.
    // Type size and spacing are tied to the window height (svh), so a short screen
    // compresses the hero instead of pushing the buttons below the fold.
    <section id="top" className="border-b border-rule lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center">
      <div className="container-page grid gap-[clamp(1.5rem,4svh,2.5rem)] pb-[clamp(2rem,6svh,4rem)] pt-[clamp(1.5rem,5svh,3.5rem)] lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[clamp(2.25rem,2.2vw+3.2svh,3.5rem)] font-semibold leading-[1.08] tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-[clamp(1rem,2.4svh,1.5rem)] max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">
            {hero.sub}
          </p>

          <div className="mt-[clamp(1.25rem,3.4svh,2rem)] flex flex-wrap items-center gap-x-7 gap-y-1">
            <a href={hero.cta.href} className="btn">
              {hero.cta.label}
            </a>
            <a href={hero.secondary.href} className="link">
              {hero.secondary.label}
            </a>
          </div>
          <p className="mt-[clamp(0.75rem,2svh,1.25rem)] text-[0.9375rem] text-graphite">{hero.note}</p>
        </div>

        <figure className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-rule lg:max-h-[calc(100svh-10rem)]">
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
