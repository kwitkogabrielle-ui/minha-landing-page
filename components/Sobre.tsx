import Image from "next/image";

const WA = "https://wa.me/5548984730581?text=" + encodeURIComponent("Olá, Dra. Gabrielle! Vim pelo Google e gostaria de agendar uma avaliação.");

const tags = ["Injetáveis", "Harmonização Facial", "Harmonização Corporal", "Toxina Botulínica", "Bioestimuladores"];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="sobre-grid">
        <div className="sobre-image">
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
            <Image src="/images/dra-desk.jpg" alt="Dra. Gabrielle Kwitko" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center top", borderRadius: 4 }} />
          </div>
          <div className="sobre-badge">
            <strong>4.9★</strong>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="sobre-text">
          <div className="section-eyebrow"><span>Sobre a Dra.</span></div>
          <h2 className="section-title">
            Técnica e precisão.<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>Olhar estético.</em>
          </h2>
          <p>Gabrielle Kwitko é enfermeira (COREN 652.755) especialista em procedimentos injetáveis e harmonização facial e corporal, com clínica em Florianópolis, SC.</p>
          <p>Com formação sólida e atuação dedicada à estética avançada, ela combina técnica apurada com sensibilidade artística para entregar resultados que respeitam a beleza única de cada paciente.</p>
          <p>Seu diferencial está na personalização: cada tratamento é planejado individualmente, levando em conta proporção, harmonia e o que faz sentido para aquele rosto e aquele corpo.</p>
          <div className="sobre-tags">
            {tags.map((tag) => <span key={tag} className="sobre-tag">{tag}</span>)}
          </div>
          <a href={WA} target="_blank" className="btn-primary">Agendar avaliação</a>
        </div>
      </div>
    </section>
  );
}
