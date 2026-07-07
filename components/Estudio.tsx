import Image from "next/image";

const small = [
  { src: "/images/studio-novo-2.png", alt: "Corredor da clínica" },
  { src: "/images/studio-novo-3.png", alt: "Sala da clínica" },
  { src: "/images/studio-novo-4.jpg", alt: "Recepção" },
];

export default function Estudio() {
  return (
    <section id="estudio">
      <div className="estudio-header container">
        <div className="section-eyebrow"><span>Clínica</span></div>
        <h2 className="section-title">Ambiente pensado<br />para o seu conforto</h2>
        <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
          Nossa clínica em Florianópolis combina sofisticação e acolhimento em cada detalhe.
        </p>
      </div>

      <div className="estudio-grid container">
        <div className="estudio-main">
          <Image src="/images/studio-placa.png" alt="Consultório Dra. Gabrielle Kwitko" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
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
