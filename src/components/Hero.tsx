import { newspapers } from '../data/newspapersData'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <span className="hero-badge">MATERIAIS EDUCATIVOS PREMIUM</span>
        <h1>Jornais Históricos</h1>
        <p className="hero-tagline">O passado ilumina o presente e constrói um futuro melhor</p>
        <p className="hero-subtagline">HISTÓRIA • SOCIEDADE • CULTURA • MEMÓRIA</p>
        <img src="/images/hero-mockup.png" alt="Jornais Históricos — coleção completa" className="hero-image" />
        <a href="#oferta" className="hero-cta">Quero os Jornais Históricos</a>
        <p className="hero-cta-sub">Acesso imediato • {newspapers.length} jornais temáticos + bônus exclusivos</p>
      </div>
    </section>
  )
}
