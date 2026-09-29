import { JsonLd } from "./schema";
import { ENDERECO, HORARIO, PAGAMENTO } from "./dados";

/* Texto da resposta de pagamento montado a partir de PAGAMENTO; vazio = pergunta omitida. */
const respostaPagamento = [
  PAGAMENTO.formas.length ? `Aceitamos ${PAGAMENTO.formas.join(", ").replace(/, ([^,]*)$/, " e $1")}.` : "",
  PAGAMENTO.parcelamento ? `Parcelamento ${PAGAMENTO.parcelamento}.` : "",
  PAGAMENTO.descontoPix ? `Pagando no Pix, você tem ${PAGAMENTO.descontoPix}.` : "",
].filter(Boolean).join(" ");

const perguntas = [
  {
    p: "Preciso fazer uma avaliação antes do procedimento?",
    r: "Sim. Todo tratamento começa com uma avaliação individual, em que a Dra. Gabrielle analisa o rosto ou a região a ser tratada, entende o que você deseja e indica o plano mais adequado — ou se o procedimento não é indicado para você.",
  },
  {
    p: "O resultado fica natural?",
    r: "Esse é o foco do trabalho. O planejamento respeita a proporção e as características de cada paciente, para valorizar os traços sem exageros e sem padronizar resultados.",
  },
  {
    p: "Quanto tempo dura o resultado?",
    r: "Depende do procedimento e de cada organismo. Como referência, a toxina botulínica costuma durar, em média, de 4 a 6 meses, e os preenchimentos com ácido hialurônico de 6 a 18 meses, conforme a região tratada. Na avaliação você recebe a estimativa para o seu caso.",
  },
  {
    p: "O procedimento dói?",
    r: "A maioria das pacientes relata apenas um desconforto leve. Quando indicado, é usado anestésico tópico, e muitos preenchedores já contêm anestésico na fórmula.",
  },
  ...(respostaPagamento ? [{ p: "Quais são as formas de pagamento?", r: respostaPagamento }] : []),
  {
    p: "Onde fica a clínica?",
    r: `Na ${ENDERECO.rua}, ${ENDERECO.predio}, bairro ${ENDERECO.bairro}, em ${ENDERECO.cidade} – ${ENDERECO.uf}. Atendimento ${HORARIO.texto.charAt(0).toLowerCase()}${HORARIO.texto.slice(1)}.`,
  },
];

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: perguntas.map(({ p, r }) => ({
    "@type": "Question",
    name: p,
    acceptedAnswer: { "@type": "Answer", text: r },
  })),
};

export default function Faq() {
  return (
    <section id="faq">
      <JsonLd data={schemaFaq} />
      <div className="faq-header container">
        <div className="section-eyebrow"><span>Dúvidas frequentes</span></div>
        <h2 className="section-title">Perguntas frequentes</h2>
      </div>

      <div className="faq-lista">
        {perguntas.map(({ p, r }) => (
          <details key={p} className="faq-item">
            <summary>
              {p}
              <span className="servico-seta" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 4.5 6 8l3.5-3.5" />
                </svg>
              </span>
            </summary>
            <p>{r}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
