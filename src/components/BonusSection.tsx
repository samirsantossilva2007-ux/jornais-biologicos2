import { bonuses } from '../data/newspapersData'

export default function BonusSection() {
  return (
    <section className="section bonus-section" id="bonus">
      <div className="container">
        <h2 className="section-title">Bônus Exclusivos de Biologia</h2>
        <p className="section-subtitle">
          Além dos Jornais Históricos, você recebe estes materiais de Biologia gratuitamente.
        </p>
        <div className="bonus-grid">
          {bonuses.map((b) => (
            <div key={b.id} className="bonus-card">
              <span className="bonus-badge">{b.badge}</span>
              <img src={b.image} alt={b.title} />
              <div className="bonus-card-body">
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
