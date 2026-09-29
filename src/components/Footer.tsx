export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-tagline">Conhecer ontem. Construir amanhã.</p>
        <p>Jornais Históricos — Materiais educativos para professores de História</p>
        <p>© {new Date().getFullYear()} Jornais Históricos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
