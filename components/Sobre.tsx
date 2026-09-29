import Image from "next/image";
import { PERFIL_GOOGLE, wa, COREN, ENDERECO, MAPS_URL } from "./dados";

const WA = wa("Olá, Dra. Gabrielle! Vim pelo Google e gostaria de agendar uma avaliação.");

/* Ficha da profissional. Itens com `valor` vazio não são exibidos.
   TODO: preencher formação e especializações reais (instituições, ano). Dados concretos
   sobre a profissional pesam muito no Google para temas de saúde. */
const ficha = [
  { rotulo: "Formação", valor: "" },
  { rotulo: "Especializações", valor: "" },
  { rotulo: "Atuação", valor: "Toxina botulínica, preenchimentos com ácido hialurônico, bioestimuladores de colágeno e harmonização corporal." },
  { rotulo: "Registro profissional", valor: `Enfermeira Esteta · ${COREN}` },
].filter((item) => item.valor);

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
          <div className="section-eyebrow"><span>Sobre a Dra.</span></div>
          <h2 className="section-title">Dra. Gabrielle Kwitko</h2>
          <p className="sobre-cargo">Enfermeira Esteta | {COREN}</p>
          <p>Especialista em procedimentos injetáveis e harmonização facial e corporal.</p>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="sobre-endereco">
            <span aria-hidden="true">📍</span> {ENDERECO.rua} · {ENDERECO.bairro}, {ENDERECO.cidade} – {ENDERECO.uf}
          </a>

          <dl className="sobre-ficha">
            {ficha.map(({ rotulo, valor }) => (
              <div key={rotulo}>
                <dt>{rotulo}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </dl>

          <a href={WA} target="_blank" rel="noopener" className="btn-primary">Agendar avaliação</a>
        </div>
      </div>
    </section>
  );
}
