const WA = "https://wa.me/5548984730581?text=";

// Monta o link do WhatsApp já com "vim pelo Google" e o nome do procedimento.
const linkProcedimento = (titulo: string) =>
  `${WA}${encodeURIComponent(`Olá, vim pelo Google e quero saber mais sobre ${titulo}.`)}`;

const facial = [
  { icon: "💉", title: "Tratamento de Linhas de Expressão",    desc: "Suavização de rugas dinâmicas na testa, ao redor dos olhos e pescoço com resultado natural." },
  { icon: "👁️", title: "Preenchimento de Olheiras",            desc: "Correção com ácido hialurônico para aspecto descansado e rejuvenescido." },
  { icon: "😊", title: "Preenchimento de Sulco Nasogeniano",   desc: "Suavização do bigode chinês com preenchimento preciso e natural." },
  { icon: "🫦", title: "Preenchimento de Mento",               desc: "Definição e projeção do queixo para mais equilíbrio e harmonia facial." },
  { icon: "✨", title: "Preenchimento de Malar",               desc: "Volumização da maçã do rosto para um contorno suave e estruturado." },
  { icon: "💋", title: "Preenchimento Labial",                 desc: "Lábios mais volumosos e definidos, proporcionais ao seu rosto." },
  { icon: "💎", title: "Preenchimento de Mandíbula",           desc: "Contorno e definição da mandíbula para uma face mais simétrica e elegante." },
  { icon: "👃", title: "Rinomodelação",                        desc: "Correção estética do nariz sem cirurgia, com resultado perceptível já na sessão, conforme avaliação individual." },
  { icon: "🌟", title: "Bioestimulador",                       desc: "Estimulação natural de colágeno para rejuvenescimento profundo e progressivo." },
];

const corporal = [
  { icon: "🍑", title: "Harmonização Glútea",   desc: "Modelagem glútea não cirúrgica com volume, firmeza e forma definida — resultados variam conforme avaliação individual." },
  { icon: "🌸", title: "Harmonização de Mamas", desc: "Bioestimuladores e preenchedores para firmeza e contorno mamário sem cirurgia — resultados variam conforme avaliação individual." },
  { icon: "💫", title: "Escleroterapia",         desc: "Tratamento de varizes e vasinhos realizado em sessões, com avaliação prévia de indicação." },
];

function CategoryLabel({ label }: { label: string }) {
  return (
    <div className="container" style={{ maxWidth: 1160, margin: "2.5rem auto 1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--rose)" }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>
    </div>
  );
}

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="servicos-header container">
        <div className="section-eyebrow"><span>Tratamentos</span></div>
        <h2 className="section-title">
          O que posso fazer<br />
          pelo seu <em className="serif" style={{ color: "var(--rose)", fontStyle: "italic" }}>sorriso e confiança</em>
        </h2>
        <p className="section-subtitle">Procedimentos injetáveis com precisão e foco em resultado natural. Todo tratamento exige avaliação prévia.</p>
      </div>

      <CategoryLabel label="Facial" />
      <div className="servicos-grid">
        {facial.map(({ icon, title, desc }) => (
          <div key={title} className="servico-card">
            <div className="servico-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={linkProcedimento(title)} target="_blank" className="servico-link">Saber mais →</a>
          </div>
        ))}
      </div>

      <CategoryLabel label="Corporal" />
      <div className="servicos-grid">
        {corporal.map(({ icon, title, desc }) => (
          <div key={title} className="servico-card">
            <div className="servico-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={linkProcedimento(title)} target="_blank" className="servico-link">Saber mais →</a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a href={`${WA}${encodeURIComponent("Olá, vim pelo Google e gostaria de saber mais sobre os tratamentos.")}`} target="_blank" className="btn-primary">
          Agendar avaliação
        </a>
      </div>
    </section>
  );
}
