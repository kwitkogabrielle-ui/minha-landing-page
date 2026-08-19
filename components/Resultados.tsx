import Image from "next/image";

const WA = "https://wa.me/5548984730581?text=" + encodeURIComponent("Olá, vim pelo Google, vi os resultados e gostaria de agendar uma avaliação.");

const resultados = [
  { src: "/images/antes-depois-linhas-expressao-testa.png", alt: "Resultado de tratamento para linhas de expressão na testa", label: "Linhas de Expressão · Testa" },
  { src: "/images/antes-depois-olheiras.jpg",    alt: "Resultado de preenchimento de olheiras",      label: "Preenchimento de Olheiras" },
  { src: "/images/antes-depois-labios.png",      alt: "Resultado de preenchimento labial",           label: "Preenchimento Labial" },
];

export default function Resultados() {
  return (
    <section id="resultados">
      <div className="resultados-header container">
        <div className="section-eyebrow"><span>Resultados</span></div>
        <h2 className="section-title">Resultados reais</h2>
        <p className="section-subtitle">Resultados obtidos pela Dra. Gabrielle com suas pacientes em Florianópolis.</p>
        <p className="resultados-aviso">Imagens de pacientes reais, publicadas com autorização. Resultados individuais podem variar conforme a resposta de cada paciente.</p>
      </div>

      <div className="resultados-grid container">
        {resultados.map(({ src, alt, label }) => (
          <div key={src} className="resultado-card">
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="resultado-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="resultados-cta">
        <a href={WA} target="_blank" className="btn-primary">Agendar avaliação</a>
      </div>
    </section>
  );
}
