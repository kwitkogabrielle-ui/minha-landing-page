import Image from "next/image";

const small = [
  { src: "/images/corredor-clinica-estetica-florianopolis.jpg", alt: "Corredor da clínica de estética da Dra. Gabrielle Kwitko em Florianópolis" },
  { src: "/images/sala-atendimento-clinica-estetica-florianopolis.jpg", alt: "Sala de atendimento para harmonização facial na clínica em Florianópolis" },
  { src: "/images/recepcao-clinica-estetica-florianopolis.jpg", alt: "Recepção da clínica de estética no bairro Trindade, Florianópolis" },
];

export default function Estudio() {
  return (
    <section id="estudio">
      <div className="estudio-header container">
        <div className="section-eyebrow"><span>Clínica em Florianópolis</span></div>
        <h2 className="section-title">Ambiente pensado<br />para o seu conforto</h2>
        <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
          Nossa clínica no bairro Trindade, em Florianópolis, combina sofisticação e acolhimento em cada detalhe.
        </p>
      </div>

      <div className="estudio-grid container">
        <div className="estudio-main">
          <Image src="/images/clinica-dra-gabrielle-kwitko-trindade-florianopolis.jpg" alt="Porta do consultório da Dra. Gabrielle Kwitko, clínica de estética na Trindade, Florianópolis" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
        </div>
        {small.map(({ src, alt }) => (
          <div key={src} className="estudio-small">
            <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
