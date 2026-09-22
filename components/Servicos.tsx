const WA = "https://wa.me/5548984730581?text=";

// Monta o link do WhatsApp já com "vim pelo Google" e o nome do procedimento.
const linkProcedimento = (titulo: string) =>
  `${WA}${encodeURIComponent(`Olá, vim pelo Google e quero saber mais sobre ${titulo}.`)}`;

type Servico = { icon: string; title: string; desc: string; oque: string; finalidade: string };

const facial: Servico[] = [
  {
    icon: "💉", title: "Tratamento de Linhas de Expressão",
    desc: "Suavização de rugas dinâmicas na testa, ao redor dos olhos e pescoço com resultado natural.",
    oque: "Aplicação de um ativo injetável em pontos específicos, que relaxa temporariamente os músculos responsáveis pelas rugas de movimento.",
    finalidade: "Suavizar e prevenir o aprofundamento de rugas na testa, entre as sobrancelhas e ao redor dos olhos (pés de galinha).",
  },
  {
    icon: "👁️", title: "Preenchimento de Olheiras",
    desc: "Correção com ácido hialurônico para aspecto descansado e rejuvenescido.",
    oque: "Aplicação de ácido hialurônico logo abaixo dos olhos, preenchendo o sulco que forma a sombra da olheira.",
    finalidade: "Reduzir o aspecto de cansaço e a sombra escura sob os olhos, principalmente quando causada por perda de volume.",
  },
  {
    icon: "😊", title: "Preenchimento de Sulco Nasogeniano",
    desc: "Suavização do bigode chinês com preenchimento preciso e natural.",
    oque: "Preenchimento com ácido hialurônico nas linhas que vão das laterais do nariz até os cantos da boca.",
    finalidade: "Suavizar o \"bigode chinês\", que se aprofunda com a perda natural de volume e colágeno do rosto.",
  },
  {
    icon: "🫦", title: "Preenchimento de Mento",
    desc: "Definição e projeção do queixo para mais equilíbrio e harmonia facial.",
    oque: "Aplicação de ácido hialurônico no queixo para aumentar a projeção e definir o contorno.",
    finalidade: "Equilibrar as proporções entre nariz, lábios e queixo, melhorando o perfil e a harmonia do rosto.",
  },
  {
    icon: "✨", title: "Preenchimento de Malar",
    desc: "Volumização da maçã do rosto para um contorno suave e estruturado.",
    oque: "Preenchimento com ácido hialurônico na região das maçãs do rosto.",
    finalidade: "Repor o volume perdido com o tempo, dar sustentação ao terço médio da face e realçar o contorno.",
  },
  {
    icon: "💋", title: "Preenchimento Labial",
    desc: "Lábios mais volumosos e definidos, proporcionais ao seu rosto.",
    oque: "Aplicação de ácido hialurônico nos lábios, trabalhando volume, contorno ou hidratação conforme a necessidade.",
    finalidade: "Deixar os lábios mais definidos, simétricos e hidratados, respeitando o formato natural do rosto.",
  },
  {
    icon: "💎", title: "Preenchimento de Mandíbula",
    desc: "Contorno e definição da mandíbula para uma face mais simétrica e elegante.",
    oque: "Preenchimento com ácido hialurônico ao longo da linha da mandíbula.",
    finalidade: "Marcar o contorno do rosto, melhorar a transição entre rosto e pescoço e trazer mais definição ao perfil.",
  },
  {
    icon: "👃", title: "Rinomodelação",
    desc: "Correção estética do nariz sem cirurgia, com resultado perceptível já na sessão, conforme avaliação individual.",
    oque: "Aplicação de ácido hialurônico em pontos estratégicos do nariz, sem cortes e sem cirurgia.",
    finalidade: "Disfarçar pequenas imperfeições, como calombo no dorso, ponta caída ou assimetrias. Não diminui o tamanho do nariz.",
  },
  {
    icon: "🌟", title: "Bioestimulador",
    desc: "Estimulação natural de colágeno para rejuvenescimento profundo e progressivo.",
    oque: "Substância injetável que estimula o próprio organismo a produzir colágeno novo.",
    finalidade: "Melhorar a firmeza, a flacidez e a qualidade da pele de forma gradual, com resultado que evolui ao longo dos meses.",
  },
];

const corporal: Servico[] = [
  {
    icon: "🍑", title: "Harmonização Glútea",
    desc: "Modelagem glútea não cirúrgica com volume, firmeza e forma definida — resultados variam conforme avaliação individual.",
    oque: "Aplicação de bioestimuladores e/ou preenchedores na região glútea, sem cirurgia.",
    finalidade: "Melhorar a firmeza, a flacidez e o contorno do bumbum, além de suavizar irregularidades.",
  },
  {
    icon: "🌸", title: "Harmonização de Mamas",
    desc: "Bioestimuladores e preenchedores para firmeza e contorno mamário sem cirurgia — resultados variam conforme avaliação individual.",
    oque: "Aplicação de bioestimuladores e/ou preenchedores na região das mamas e do colo, sem cirurgia.",
    finalidade: "Melhorar a firmeza e a qualidade da pele, contribuindo para a sustentação e o contorno das mamas.",
  },
  {
    icon: "💫", title: "Escleroterapia",
    desc: "Tratamento de varizes e vasinhos realizado em sessões, com avaliação prévia de indicação.",
    oque: "Aplicação de uma substância dentro dos vasinhos, que faz com que eles sejam absorvidos aos poucos pelo organismo.",
    finalidade: "Reduzir vasinhos e pequenas varizes nas pernas, melhorando a aparência da pele. Normalmente são necessárias algumas sessões.",
  },
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

function ServicoCard({ icon, title, desc, oque, finalidade }: Servico) {
  return (
    <div className="servico-card">
      <div className="servico-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {/* TESTE: bloco expansível com descrição e finalidade */}
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
      <a href={linkProcedimento(title)} target="_blank" className="servico-link">Saber mais →</a>
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
        {facial.map((s) => <ServicoCard key={s.title} {...s} />)}
      </div>

      <CategoryLabel label="Corporal" />
      <div className="servicos-grid">
        {corporal.map((s) => <ServicoCard key={s.title} {...s} />)}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a href={`${WA}${encodeURIComponent("Olá, vim pelo Google e gostaria de saber mais sobre os tratamentos.")}`} target="_blank" className="btn-primary">
          Agendar avaliação
        </a>
      </div>
    </section>
  );
}
