const WA = "https://wa.me/5548984730581?text=";

const facial = [
  { icon: "💉", title: "Botox",                                desc: "Suavização de rugas de expressão na testa, ao redor dos olhos e pescoço com resultado natural.",          msg: "Quero%20saber%20mais%20sobre%20Botox." },
  { icon: "👁️", title: "Preenchimento de Olheiras",            desc: "Correção com ácido hialurônico para aspecto descansado e rejuvenescido.",                                  msg: "Quero%20saber%20mais%20sobre%20Preenchimento%20de%20Olheiras." },
  { icon: "😊", title: "Preenchimento de Sulco Nasogeniano",   desc: "Suavização do bigode chinês com preenchimento preciso e natural.",                                          msg: "Quero%20saber%20mais%20sobre%20Sulco%20Nasogeniano." },
  { icon: "🫦", title: "Preenchimento de Mento",               desc: "Definição e projeção do queixo para mais equilíbrio e harmonia facial.",                                   msg: "Quero%20saber%20mais%20sobre%20Preenchimento%20de%20Mento." },
  { icon: "✨", title: "Preenchimento de Malar",               desc: "Volumização da maçã do rosto para um contorno suave e estruturado.",                                       msg: "Quero%20saber%20mais%20sobre%20Preenchimento%20Malar." },
  { icon: "💋", title: "Preenchimento Labial",                 desc: "Lábios mais volumosos e definidos, proporcionais ao seu rosto.",                                           msg: "Quero%20saber%20mais%20sobre%20Preenchimento%20Labial." },
  { icon: "💎", title: "Preenchimento de Mandíbula",           desc: "Contorno e definição da mandíbula para uma face mais simétrica e elegante.",                              msg: "Quero%20saber%20mais%20sobre%20Preenchimento%20de%20Mandibula." },
  { icon: "👃", title: "Rinomodelação",                        desc: "Correção estética do nariz sem cirurgia, com resultados imediatos e seguros.",                             msg: "Quero%20saber%20mais%20sobre%20Rinomodelacao." },
  { icon: "🌟", title: "Bioestimulador",                       desc: "Estimulação natural de colágeno para rejuvenescimento profundo e progressivo.",                            msg: "Quero%20saber%20mais%20sobre%20Bioestimulador." },
];

const corporal = [
  { icon: "🍑", title: "Harmonização Glútea",   desc: "Modelagem glútea não cirúrgica com volume, firmeza e forma definida.",                              msg: "Quero%20saber%20mais%20sobre%20Harmoniza%C3%A7%C3%A3o%20Gl%C3%BAtea." },
  { icon: "🌸", title: "Harmonização de Mamas", desc: "Bioestimuladores e preenchedores para firmeza e contorno mamário sem cirurgia.",                   msg: "Quero%20saber%20mais%20sobre%20Harmoniza%C3%A7%C3%A3o%20de%20Mamas." },
  { icon: "💫", title: "Escleroterapia",         desc: "Tratamento de varizes e vasinhos com segurança e eficácia comprovada.",                            msg: "Quero%20saber%20mais%20sobre%20Escleroterapia." },
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
        <p className="section-subtitle">Procedimentos injetáveis com precisão, resultados naturais e duradouros.</p>
      </div>

      <CategoryLabel label="Facial" />
      <div className="servicos-grid">
        {facial.map(({ icon, title, desc, msg }) => (
          <div key={title} className="servico-card">
            <div className="servico-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={`${WA}${msg}`} target="_blank" className="servico-link">Saber mais →</a>
          </div>
        ))}
      </div>

      <CategoryLabel label="Corporal" />
      <div className="servicos-grid">
        {corporal.map(({ icon, title, desc, msg }) => (
          <div key={title} className="servico-card">
            <div className="servico-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={`${WA}${msg}`} target="_blank" className="servico-link">Saber mais →</a>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a href={`${WA}Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos.`} target="_blank" className="btn-primary">
          Agendar avaliação
        </a>
      </div>
    </section>
  );
}
