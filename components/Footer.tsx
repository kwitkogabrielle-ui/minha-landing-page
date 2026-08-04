const facial = ["Toxina Botulínica", "Preenchimento de Olheiras", "Preenchimento de Sulco Nasogeniano", "Preenchimento de Mento", "Preenchimento de Malar", "Preenchimento Labial", "Preenchimento de Mandíbula", "Rinomodelação", "Bioestimulador"];
const corporal = ["Harmonização Glútea", "Harmonização de Mamas", "Escleroterapia"];
const contato = [
  { href: "https://wa.me/5548984730581", label: "(48) 98473-0581" },
  { href: "#", label: "R. Delminda Silveira, 827 – sala 206" },
  { href: "#", label: "Agronômica, Florianópolis – SC · 88025-500" },
  { href: "https://www.instagram.com/dragabriellekwitko", label: "@dragabriellekwitko" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Dra. <span>Gabrielle</span> Kwitko</div>
          <p className="footer-desc">Especialista em injetáveis e harmonização facial e corporal. Florianópolis, Santa Catarina.</p>
          <p className="footer-desc" style={{ marginTop: "0.75rem" }}>Enfermeira Esteta · COREN 652.755</p>
        </div>

        <div>
          <div className="footer-heading">Tratamentos</div>
          <div className="footer-links">
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.25rem", display: "block" }}>Facial</span>
            {facial.map((t) => <a key={t} href="#servicos">{t}</a>)}
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginTop: "0.75rem", marginBottom: "0.25rem", display: "block" }}>Corporal</span>
            {corporal.map((t) => <a key={t} href="#servicos">{t}</a>)}
          </div>
        </div>

        <div>
          <div className="footer-heading">Contato</div>
          <div className="footer-links">
            {contato.map(({ href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}>{label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dra. Gabrielle Kwitko. Todos os direitos reservados.</span>
        <span>Site desenvolvido por <a href="https://ccypher.com.br" target="_blank">CCypher</a></span>
      </div>
    </footer>
  );
}
