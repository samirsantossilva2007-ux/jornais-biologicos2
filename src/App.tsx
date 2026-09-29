import Hero from './components/Hero'
import NewspaperShowcase from './components/NewspaperShowcase'
import Testimonials from './components/Testimonials'
import BonusSection from './components/BonusSection'
import OfferSection from './components/OfferSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <span className="header-logo">JORNAIS HISTÓRICOS</span>
          <a href="#oferta" className="header-cta">Quero Agora</a>
        </div>
      </header>
      <Hero />
      <NewspaperShowcase />
      <Testimonials />
      <BonusSection />
      <OfferSection />
      <Footer />
    </div>
  )
}
