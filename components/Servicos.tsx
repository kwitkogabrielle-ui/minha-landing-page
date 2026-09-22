import Link from "next/link";
import { facial, corporal, urlProcedimento, type Servico } from "./procedimentos";
import { wa } from "./dados";

function CategoryLabel({ label }: { label: string }) {
  return (
    <div className="container" style={{ maxWidth: 1160, margin: "2.5rem auto 1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)" }}>{label}</h3>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>
    </div>
  );
}

function ServicoCard({ icon, title, slug, desc, oque, finalidade }: Servico) {
  const url = urlProcedimento(slug);
  return (
    <div className="servico-card">
      <div className="servico-icon" aria-hidden="true">{icon}</div>
      <h4><Link href={url}>{title}</Link></h4>
      <p>{desc}</p>
      <details className="servico-detalhes">
        <summary>
          Como funciona
          <span className="servico-seta" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 4.5 6 8l3.5-3.5" />
            </svg>
          </span>
        </summary>
        <dl className="servico-detalhes-corpo">
          <dt>O que é</dt>
          <dd>{oque}</dd>
          <dt>Finalidade</dt>
          <dd>{finalidade}</dd>
        </dl>
      </details>
      <Link href={url} className="servico-link" aria-label={`Saber mais sobre ${title}`}>Saber mais →</Link>
    </div>
  );
}

/* Na home o título da seção é h2; na página /tratamentos ele é o h1. */
export default function Servicos({ comoPagina = false }: { comoPagina?: boolean }) {
  const Titulo = comoPagina ? "h1" : "h2";
  return (
    <section id="servicos">
      <div className="servicos-header container">
        <div className="section-eyebrow"><span>Tratamentos</span></div>
        <Titulo className="section-title">
          Harmonização facial e corporal<br />
          em <em className="serif" style={{ color: "var(--rose)", fontStyle: "italic" }}>Florianópolis</em>
        </Titulo>
        <p className="section-subtitle">Procedimentos injetáveis com precisão e foco em resultado natural. Todo tratamento exige avaliação prévia.</p>
      </div>

      <CategoryLabel label="Harmonização Facial" />
      <div className="servicos-grid">
        {facial.map((s) => <ServicoCard key={s.slug} {...s} />)}
      </div>

      <CategoryLabel label="Harmonização Corporal" />
      <div className="servicos-grid">
        {corporal.map((s) => <ServicoCard key={s.slug} {...s} />)}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a href={wa("Olá, vim pelo Google e gostaria de saber mais sobre os tratamentos.")} target="_blank" rel="noopener" className="btn-primary">
          Agendar avaliação
        </a>
      </div>
    </section>
  );
}
