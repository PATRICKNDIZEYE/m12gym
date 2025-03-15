import { Hero } from './@Codebase/components/Hero/Hero'
import { Navbar } from './@Codebase/components/Navbar/Navbar'
import { About } from './@Codebase/components/About/About'
import { Programs } from './@Codebase/components/Programs/Programs'
import { Gallery } from './@Codebase/components/Gallery/Gallery'
import { Reviews } from './@Codebase/components/Reviews/Reviews'
import { Contact } from './@Codebase/components/Contact/Contact'
import { Footer } from './@Codebase/components/Footer/Footer'
import { Map } from './@Codebase/components/Map/Map'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
      </main>
      <Footer />
    </>
  )
}
