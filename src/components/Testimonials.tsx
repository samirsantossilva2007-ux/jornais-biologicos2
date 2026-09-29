import { testimonials } from '../data/newspapersData'

export default function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <h2 className="section-title">O que os professores dizem</h2>
        <p className="section-subtitle">
          Professores reais usando os Jornais Históricos em sala de aula.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <img src={t.image} alt={`Depoimento — ${t.name}`} />
              <div className="testimonial-card-body">
                <h3>{t.name}</h3>
                {t.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`testimonial-bubble ${msg.from === 'teacher' ? 'teacher' : ''}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
