import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import { procedimentos, categoriaDe, urlProcedimento } from "@/components/procedimentos";
import { conteudo } from "@/components/conteudo";
import { JsonLd, schemaBreadcrumb, schemaServico } from "@/components/schema";
import { wa, COREN, PERFIL_GOOGLE } from "@/components/dados";

type Props = { params: Promise<{ slug: string }> };

// Só existem as páginas listadas em procedimentos.ts; o resto é 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return procedimentos.map((p) => ({ slug: p.slug }));
}

function buscar(slug: string) {
  const p = procedimentos.find((x) => x.slug === slug);
  const c = conteudo[slug];
  return p && c ? { p, c } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const achado = buscar(slug);
  if (!achado) return {};
  const { p, c } = achado;
  const url = urlProcedimento(p.slug);
  const imagem = p.resultado
    ? { url: p.resultado.src, alt: p.resultado.alt }
    : { url: "/og-image.jpg", width: 1200, height: 630, alt: "Dra. Gabrielle Kwitko — Estética Avançada em Florianópolis" };
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      siteName: "Dra. Gabrielle Kwitko — Estética Avançada",
      url,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [imagem],
    },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription, images: [imagem.url] },
  };
}

export default async function PaginaProcedimento({ params }: Props) {
  const { slug } = await params;
  const achado = buscar(slug);
  if (!achado) notFound();
  const { p, c } = achado;

  const categoria = categoriaDe(p);
  const linkWa = wa(`Olá, vim pelo Google e gostaria de agendar uma avaliação para ${p.title}.`);
  const relacionados = procedimentos.filter((x) => x.slug !== p.slug && categoriaDe(x) === categoria).slice(0, 4);

  return (
    <>
      <JsonLd data={schemaServico(p, c.metaDescription)} />
      <JsonLd
        data={schemaBreadcrumb([
          { nome: "Início", url: "/" },
          { nome: "Tratamentos", url: "/tratamentos" },
          { nome: p.title, url: urlProcedimento(p.slug) },
        ])}
      />

      <Nav />
      <main className="proc">
        <header className="proc-hero">
          <div className="proc-hero-inner">
            <nav className="proc-migalhas" aria-label="Você está em">
              <Link href="/">Início</Link>
              <span aria-hidden="true">/</span>
              <Link href="/tratamentos">Tratamentos</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{p.title}</span>
            </nav>
            <div className="section-eyebrow"><span>Harmonização {categoria}</span></div>
            <h1 className="proc-titulo">{c.h1}</h1>
            {c.intro.map((t) => <p key={t} className="proc-intro">{t}</p>)}
            <div className="proc-btns">
              <a href={linkWa} target="_blank" rel="noopener" className="btn-primary">Agendar avaliação</a>
              <a href={PERFIL_GOOGLE} target="_blank" rel="noopener" className="proc-trust">
                <span className="hero-stars">★★★★★</span> 4.9 · 70+ avaliações no Google
              </a>
            </div>
          </div>
        </header>

        <div className="proc-corpo">
          <article className="proc-artigo">
            <section>
              <h2>Para quem é indicado</h2>
              <ul>{c.indicacoes.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>

            <section>
              <h2>Como é o procedimento</h2>
              {c.sessao.map((t) => <p key={t}>{t}</p>)}
            </section>

            <section>
              <h2>Resultado e duração</h2>
              {c.resultado.map((t) => <p key={t}>{t}</p>)}
            </section>

            <section>
              <h2>Cuidados após o procedimento</h2>
              <ul>{c.cuidados.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>

            <section>
              <h2>Quando não é indicado</h2>
              <ul>{c.contraindicacoes.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>

            <p className="proc-aviso">
              Os resultados são individuais e podem variar conforme a resposta de cada paciente. Todo
              procedimento exige avaliação prévia. Este conteúdo é informativo e não substitui consulta profissional.
            </p>
          </article>

          <aside className="proc-lateral">
            {p.resultado && (
              <figure className="proc-foto">
                <div className="proc-foto-img">
                  <Image src={p.resultado.src} alt={p.resultado.alt} fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: "cover" }} />
                </div>
                <figcaption>Paciente real, imagem publicada com autorização. Resultados podem variar.</figcaption>
              </figure>
            )}
            <div className="proc-cta">
              <strong>Avaliação personalizada</strong>
              <p>
                A Dra. Gabrielle Kwitko, enfermeira esteta ({COREN}), avalia o seu caso e monta um plano
                individual na clínica da Trindade, em Florianópolis.
              </p>
              <a href={linkWa} target="_blank" rel="noopener" className="btn-primary">Agendar pelo WhatsApp</a>
            </div>
          </aside>
        </div>

        <section className="proc-relacionados">
          <div className="container">
            <h2 className="proc-rel-titulo">Outros tratamentos de harmonização {categoria.toLowerCase()}</h2>
            <div className="proc-rel-grid">
              {relacionados.map((r) => (
                <Link key={r.slug} href={urlProcedimento(r.slug)} className="proc-rel-card">
                  <span className="proc-rel-icone" aria-hidden="true">{r.icon}</span>
                  <strong>{r.title}</strong>
                  <span>{r.desc}</span>
                </Link>
              ))}
            </div>
            <Link href="/tratamentos" className="proc-rel-todos">Ver todos os tratamentos →</Link>
          </div>
        </section>

        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
