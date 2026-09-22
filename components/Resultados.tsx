import Image from "next/image";
import Link from "next/link";
import { wa } from "./dados";
import { urlProcedimento } from "./procedimentos";

const WA = wa("Olá, vim pelo Google, vi os resultados e gostaria de agendar uma avaliação.");

const resultados = [
  { src: "/images/antes-depois-linhas-de-expressao-testa-florianopolis.jpg", alt: "Antes e depois do tratamento de linhas de expressão na testa, feito em Florianópolis", label: "Linhas de Expressão · Testa", slug: "tratamento-linhas-de-expressao-florianopolis" },
  { src: "/images/antes-depois-preenchimento-olheiras-florianopolis.jpg",    alt: "Antes e depois de preenchimento de olheiras com ácido hialurônico em Florianópolis", label: "Preenchimento de Olheiras", slug: "preenchimento-de-olheiras-florianopolis" },
  { src: "/images/antes-depois-preenchimento-labial-florianopolis.jpg",      alt: "Antes e depois de preenchimento labial com ácido hialurônico em Florianópolis", label: "Preenchimento Labial", slug: "preenchimento-labial-florianopolis" },
];

export default function Resultados() {
  return (
    <section id="resultados">
      <div className="resultados-header container">
        <div className="section-eyebrow"><span>Resultados</span></div>
        <h2 className="section-title">Resultados reais de harmonização</h2>
        <p className="section-subtitle">Resultados obtidos pela Dra. Gabrielle com suas pacientes em Florianópolis.</p>
        <p className="resultados-aviso">Imagens de pacientes reais, publicadas com autorização. Resultados individuais podem variar conforme a resposta de cada paciente.</p>
      </div>

      <div className="resultados-grid container">
        {resultados.map(({ src, alt, label, slug }) => (
          <div key={src} className="resultado-card">
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4" }}>
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            <Link href={urlProcedimento(slug)} className="resultado-label">{label}</Link>
          </div>
        ))}
      </div>

      <div className="resultados-cta">
        <a href={WA} target="_blank" rel="noopener" className="btn-primary">Agendar avaliação</a>
      </div>
    </section>
  );
}
