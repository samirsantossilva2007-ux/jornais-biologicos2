import { newspapers, bonuses } from '../data/newspapersData'

export default function OfferSection() {
  return (
    <section className="section offer" id="oferta">
      <div className="container">
        <h2 className="section-title">Oferta Especial</h2>
        <p className="section-subtitle" style={{ color: '#C8D8C0' }}>
          Acesso imediato a toda a coleção + todos os bônus
        </p>
        <div className="offer-box">
          <div className="offer-price-old">De R$ 197,00</div>
          <div className="offer-price-new">R$ 47,00</div>
          <div className="offer-price-sub">pagamento único • acesso vitalício</div>
          <ul className="offer-includes">
            <li>{newspapers.length} jornais históricos completos</li>
            <li>{bonuses.length} bônus exclusivos de Biologia</li>
            <li>Índice mestre com 500 jornais catalogados</li>
            <li>Guias de utilização práticos</li>
            <li>Acesso imediato após a compra</li>
          </ul>
          <a href="#" className="offer-cta">Quero Acesso Agora</a>
          <p className="offer-guarantee">🔒 Compra 100% segura • Garantia de 7 dias</p>
        </div>
      </div>
    </section>
  )
}
