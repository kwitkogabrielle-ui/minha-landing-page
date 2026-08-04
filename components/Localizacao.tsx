const WA = "https://wa.me/5548984730581?text=" + encodeURIComponent("Olá, Dra. Gabrielle! Vim pelo Google e gostaria de agendar uma avaliação personalizada.");

export default function Localizacao() {
  return (
    <section id="localizacao">
      <div className="loc-grid">
        <div>
          <div className="section-eyebrow" style={{ marginBottom: "1.5rem" }}><span>Contato</span></div>
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
            Estamos em<br /><em style={{ fontStyle: "italic", color: "var(--rose)" }}>Florianópolis</em>
          </h2>
          <div className="loc-items">
            <div className="loc-item">
              <div className="loc-icon">📍</div>
              <div>
                <div className="loc-item-label">Endereço</div>
                <div className="loc-item-val">R. Delminda Silveira, 827 – sala 206<br />Centro Empresarial Prof. Silvio Coelho dos Santos<br />Agronômica, Florianópolis – SC · 88025-500</div>
                <a href="https://maps.google.com/?q=R.+Delminda+Silveira+827+Agronomica+Florianopolis+SC+88025-500" target="_blank" className="loc-item-link">Ver no mapa →</a>
              </div>
            </div>
            <div className="loc-item">
              <div className="loc-icon">💬</div>
              <div>
                <div className="loc-item-label">WhatsApp</div>
                <div className="loc-item-val">(48) 98473-0581</div>
                <a href={WA} target="_blank" className="loc-item-link">Enviar mensagem →</a>
              </div>
            </div>
            <div className="loc-item">
              <div className="loc-icon">📱</div>
              <div>
                <div className="loc-item-label">Redes Sociais</div>
                <div className="loc-item-val">@dragabriellekwitko</div>
                <a href="https://www.instagram.com/dragabriellekwitko" target="_blank" className="loc-item-link" style={{ display: "block" }}>Ver Instagram →</a>
                <a href="https://www.facebook.com/profile.php?id=100084080649001" target="_blank" className="loc-item-link" style={{ display: "block", marginTop: "0.25rem" }}>Ver Facebook →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="loc-cta-box">
          <h3>Pronta para o seu<br /><em style={{ fontStyle: "italic", color: "var(--rose-dark)" }}>melhor resultado?</em></h3>
          <p>Agende sua avaliação personalizada. A Dra. Gabrielle vai entender o que você deseja e criar o plano ideal para você.</p>
          <a href={WA} target="_blank" className="btn-primary" style={{ width: "100%" }}>Agendar avaliação</a>
        </div>
      </div>
    </section>
  );
}
