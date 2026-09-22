import { PERFIL_GOOGLE } from "./dados";

/* Avaliações reais do Perfil da Empresa no Google, com o texto original.
   Trechos cortados marcados com "[…]"; nome reduzido a primeiro nome + inicial. */
const depoimentos = [
  { texto: "[…] Fui super bem atendida e super bem recebida. Ela faz uma avaliação incrível do rosto, ajuda a entender como os procedimentos podem ajudar e como atuam.", autor: "Alessandra S." },
  { texto: "Gabi é extremamente talentosa! Foi o meu primeiro processo e ela me passou muita confiança e tem me acompanhado no pós.", autor: "Juliana H." },
  { texto: "Dra Gabrielle é uma excelente profissional em todos os requisitos, técnica, atendimento, pós procedimento, total atenção e profissionalismo.", autor: "Juliana V." },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="depoimentos-header container">
        <div className="section-eyebrow"><span>Depoimentos</span></div>
        <h2 className="section-title">O que dizem as pacientes</h2>
        <p className="section-subtitle">Nota 4.9 no Google, com mais de 70 avaliações. <a href={PERFIL_GOOGLE} target="_blank" rel="noopener" style={{ color: "var(--rose-dark)", fontWeight: 700 }}>Ver todas →</a></p>
      </div>

      <div className="depoimentos-grid container">
        {depoimentos.map(({ texto, autor }) => (
          <figure key={autor} className="depoimento-card">
            <div className="depoimento-quote">&ldquo;</div>
            <blockquote className="depoimento-texto">{texto}</blockquote>
            <figcaption className="depoimento-autor">— {autor}</figcaption>
            <div className="depoimento-stars" aria-label="5 estrelas no Google">★★★★★ <span style={{ color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.5px" }}>· Avaliação no Google</span></div>
          </figure>
        ))}
      </div>
    </section>
  );
}
