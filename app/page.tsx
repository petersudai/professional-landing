import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { Testimonials } from '@/components/sections/Testimonials'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero — Immediate value prop + CTAs */}
        <Hero />

        {/* 2. Trust Bar — Instant authority signals */}
        <TrustBar />

        {/* 3. About — Story + credentials */}
        <About />

        {/* 4. Services — Clear offers */}
        <Services />

        {/* 5. Results — Social proof with numbers */}
        <Results />

        {/* 6. Testimonials — Voice of the client */}
        <Testimonials />

        {/* 7. Process — Demystify the journey */}
        <Process />

        {/* 8. FAQ — Objection handling */}
        <FAQ />

        {/* 9. Contact — Conversion */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
