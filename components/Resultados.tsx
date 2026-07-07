import Image from "next/image";

const WA = "https://wa.me/5548984730581?text=Ol%C3%A1%2C%20vi%20os%20resultados%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const resultados = [
  { src: "/images/antes-depois-botox-testa.png", alt: "Antes e depois de botox na testa",           label: "Toxina Botulínica · Testa" },
  { src: "/images/antes-depois-olheiras.jpg",    alt: "Antes e depois de preenchimento de olheiras", label: "Preenchimento de Olheiras" },
  { src: "/images/antes-depois-labios.png",      alt: "Antes e depois de preenchimento labial",      label: "Preenchimento Labial" },
];

export default function Resultados() {
  return (
    <section id="resultados">
      <div className="resultados-header container">
        <div className="section-eyebrow"><span>Resultados</span></div>
        <h2 className="section-title">Antes e depois reais</h2>
        <p className="section-subtitle">Resultados obtidos pela Dra. Gabrielle com suas pacientes em Florianópolis.</p>
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
