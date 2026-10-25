import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Need } from '@/components/sections/Need'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

// Order: story (hero), need, who, offer, proof, how it runs, objections, ask.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Need />
        <About />
        <Services />
        <Results />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
