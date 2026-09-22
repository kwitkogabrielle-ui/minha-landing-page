import Image from "next/image";
import { PERFIL_GOOGLE, wa, COREN } from "./dados";

const WA = wa("Olá, Dra. Gabrielle! Vim pelo Google e gostaria de agendar uma avaliação.");

const tags = ["Injetáveis", "Harmonização Facial", "Harmonização Corporal", "Linhas de Expressão", "Bioestimuladores"];

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="sobre-grid">
        <div className="sobre-image">
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
            <Image src="/images/dra-gabrielle-kwitko-enfermeira-esteta-florianopolis.jpg" alt="Dra. Gabrielle Kwitko, enfermeira esteta especialista em harmonização facial em Florianópolis" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center top", borderRadius: 4 }} />
          </div>
          <a href={PERFIL_GOOGLE} target="_blank" rel="noopener" className="sobre-badge">
            <strong>4.9★</strong>
            <span>Google Reviews</span>
          </a>
        </div>

        <div className="sobre-text">
          <div className="section-eyebrow"><span>Sobre a Dra. Gabrielle Kwitko</span></div>
          <h2 className="section-title">
            Técnica e precisão.<br />
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>Olhar estético.</em>
          </h2>
          {/* TODO: incluir aqui a formação real (pós-graduações, instituições, ano de início na estética).
              Dados concretos sobre a profissional pesam muito no Google para temas de saúde. */}
          <p>A Dra. Gabrielle Kwitko é enfermeira esteta ({COREN}) especialista em procedimentos injetáveis e harmonização facial e corporal, com clínica no bairro Trindade, em Florianópolis, SC.</p>
          <p>Com formação sólida e atuação dedicada à estética avançada, ela combina técnica apurada com sensibilidade artística para entregar resultados que respeitam a beleza única de cada paciente.</p>
          <p>Seu diferencial está na personalização: cada tratamento é planejado individualmente, levando em conta proporção, harmonia e o que faz sentido para aquele rosto e aquele corpo.</p>
          <div className="sobre-tags">
            {tags.map((tag) => <span key={tag} className="sobre-tag">{tag}</span>)}
          </div>
          <a href={WA} target="_blank" rel="noopener" className="btn-primary">Agendar avaliação</a>
        </div>
      </div>
    </section>
  );
}
