import Image from "next/image";
import Link from "next/link";
import { wa } from "./dados";
import { urlProcedimento } from "./procedimentos";
import CarrosselResultados from "./CarrosselResultados";

const WA = wa("Olá, vim pelo Google, vi os resultados e gostaria de agendar uma avaliação.");

/* A ordem aqui é a ordem do carrossel. `vertical` = foto em pé (9:16); as demais são 3:4. */
const resultados = [
  { src: "/images/antes-depois-preenchimento-labial-2-florianopolis.jpg", alt: "Antes e depois de preenchimento labial com ácido hialurônico, vista de perfil, em Florianópolis", label: "Preenchimento Labial", slug: "preenchimento-labial-florianopolis", vertical: true },
  { src: "/images/antes-depois-preenchimento-olheiras-2-florianopolis.jpg", alt: "Antes e depois de preenchimento de olheiras com ácido hialurônico, paciente da Dra. Gabrielle em Florianópolis", label: "Preenchimento de Olheiras", slug: "preenchimento-de-olheiras-florianopolis", vertical: true },
  { src: "/images/antes-depois-rinomodelacao-florianopolis.jpg", alt: "Antes e depois de rinomodelação com ácido hialurônico, sem cirurgia, em Florianópolis", label: "Rinomodelação", slug: "rinomodelacao-florianopolis", vertical: true },
  { src: "/images/antes-depois-preenchimento-de-mento-florianopolis.jpg", alt: "Antes e depois de preenchimento de mento, com mais projeção do queixo, em Florianópolis", label: "Preenchimento de Mento", slug: "preenchimento-de-mento-florianopolis", vertical: true },
  { src: "/images/antes-depois-preenchimento-sulco-nasogeniano-florianopolis.jpg", alt: "Antes e depois de preenchimento de sulco nasogeniano (bigode chinês) com ácido hialurônico em Florianópolis", label: "Sulco Nasogeniano", slug: "preenchimento-sulco-nasogeniano-florianopolis", vertical: true },
  { src: "/images/antes-depois-toxina-botulinica-linhas-de-expressao-florianopolis.jpg", alt: "Antes e depois de toxina botulínica para linhas de expressão na testa e ao redor dos olhos, em Florianópolis", label: "Toxina Botulínica", slug: "tratamento-linhas-de-expressao-florianopolis", vertical: true },
  { src: "/images/antes-depois-linhas-de-expressao-testa-florianopolis.jpg", alt: "Antes e depois do tratamento de linhas de expressão na testa, feito em Florianópolis", label: "Toxina Botulínica · Testa", slug: "tratamento-linhas-de-expressao-florianopolis" },
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

      <CarrosselResultados>
        {resultados.map(({ src, alt, label, slug, vertical }) => (
          <div key={src} className={`resultado-card${vertical ? " vertical" : ""}`}>
            <Image src={src} alt={alt} fill sizes="(max-width: 768px) 75vw, 420px" style={{ objectFit: "cover" }} draggable={false} />
            <Link href={urlProcedimento(slug)} className="resultado-label">{label}</Link>
          </div>
        ))}
      </CarrosselResultados>

      <div className="resultados-cta">
        <a href={WA} target="_blank" rel="noopener" className="btn-primary">Agendar avaliação</a>
      </div>
    </section>
  );
}
