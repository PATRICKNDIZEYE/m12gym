import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Programs } from './components/Programs/Programs'
import { Gallery } from './components/Gallery/Gallery'
import { Reviews } from './components/Reviews/Reviews'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Map } from './components/Map/Map'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Reviews />
      <Contact />
      <Map />
      <Footer />
    </main>
  )
}
