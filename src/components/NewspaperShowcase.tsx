import { newspapers } from '../data/newspapersData'

export default function NewspaperShowcase() {
  return (
    <section className="section" id="jornais">
      <div className="container">
        <h2 className="section-title">Coleção de Jornais Históricos</h2>
        <p className="section-subtitle">
          Cada jornal é uma edição completa, com layout de jornal real, imagens históricas,
          timeline e textos que fazem os alunos lerem de verdade.
        </p>
        <div className="newspapers-grid">
          {newspapers.map((np) => (
            <div key={np.id} className="newspaper-card">
              <img src={np.image} alt={np.title} />
              <div className="newspaper-card-body">
                <div className="newspaper-card-era">{np.era}</div>
                <h3>{np.title}</h3>
                <p>{np.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
