import { wa, ENDERECO, MAPS_URL, HORARIO, TELEFONE, TELEFONE_E164, INSTAGRAM, FACEBOOK } from "./dados";

const WA = wa("Olá, Dra. Gabrielle! Vim pelo Google e gostaria de agendar uma avaliação personalizada.");

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
              <div className="loc-icon" aria-hidden="true">📍</div>
              <div>
                <div className="loc-item-label">Endereço</div>
                <address className="loc-item-val" style={{ fontStyle: "normal" }}>{ENDERECO.rua}<br />{ENDERECO.predio}<br />{ENDERECO.bairro}, {ENDERECO.cidade} – {ENDERECO.uf} · {ENDERECO.cep}</address>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="loc-item-link">Ver no mapa →</a>
              </div>
            </div>
            <div className="loc-item">
              <div className="loc-icon" aria-hidden="true">🕘</div>
              <div>
                <div className="loc-item-label">Horário</div>
                <div className="loc-item-val">{HORARIO.texto}<br />Domingo fechado</div>
              </div>
            </div>
            <div className="loc-item">
              <div className="loc-icon" aria-hidden="true">💬</div>
              <div>
                <div className="loc-item-label">WhatsApp e telefone</div>
                <a href={`tel:${TELEFONE_E164}`} className="loc-item-val" style={{ display: "block" }}>{TELEFONE}</a>
                <a href={WA} target="_blank" rel="noopener" className="loc-item-link">Enviar mensagem →</a>
              </div>
            </div>
            <div className="loc-item">
              <div className="loc-icon" aria-hidden="true">📱</div>
              <div>
                <div className="loc-item-label">Redes Sociais</div>
                <div className="loc-item-val">@dragabriellekwitko</div>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="loc-item-link" style={{ display: "block" }}>Ver Instagram →</a>
                <a href={FACEBOOK} target="_blank" rel="noopener" className="loc-item-link" style={{ display: "block", marginTop: "0.25rem" }}>Ver Facebook →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="loc-cta-box">
          <h3>Pronta para o seu<br /><em style={{ fontStyle: "italic", color: "var(--rose-dark)" }}>melhor resultado?</em></h3>
          <p>Agende sua avaliação personalizada. A Dra. Gabrielle vai entender o que você deseja e criar o plano ideal para você.</p>
          <a href={WA} target="_blank" rel="noopener" className="btn-primary" style={{ width: "100%" }}>Agendar avaliação</a>
        </div>
      </div>
    </section>
  );
}
