import { COREN, ENDERECO } from "./dados";

const motivos = [
  { icone: "🔍", titulo: "Avaliação individual", texto: "Cada procedimento é planejado de acordo com as características e objetivos da paciente." },
  { icone: "🌿", titulo: "Foco em naturalidade", texto: "A proposta é valorizar os traços individuais sem padronizar resultados." },
  { icone: "🩺", titulo: "Profissional habilitada", texto: `Dra. Gabrielle Kwitko — Enfermeira Esteta, ${COREN}.` },
  { icone: "🤍", titulo: "Acompanhamento", texto: "Orientações e acompanhamento após o procedimento." },
  { icone: "📍", titulo: "Clínica em Florianópolis", texto: `Atendimento no bairro ${ENDERECO.bairro}.` },
];

export default function PorQueGK() {
  return (
    <section id="por-que-gk">
      <div className="porque-header container">
        <div className="section-eyebrow"><span>Diferenciais</span></div>
        <h2 className="section-title">Por que escolher a GK Estética?</h2>
      </div>

      <ul className="porque-grid container">
        {motivos.map(({ icone, titulo, texto }) => (
          <li key={titulo} className="porque-item">
            <span className="porque-icone" aria-hidden="true">{icone}</span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
