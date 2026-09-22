/* Dados estruturados (JSON-LD) — descrevem a clínica, a profissional e os serviços
   para o Google e para buscadores de IA. Validar em https://search.google.com/test/rich-results.
   Não incluir aggregateRating: o Google não aceita avaliações do próprio negócio marcadas no site. */
import {
  SITE_URL, NOME, NOME_CLINICA, COREN, TELEFONE_E164, ENDERECO, INSTAGRAM, FACEBOOK,
  PERFIL_GOOGLE, PERFIL_GOOGLE_OFICIAL, MAPS_URL, HORARIO,
} from "./dados";
import { procedimentos, urlProcedimento, type Servico } from "./procedimentos";

const ID_CLINICA = `${SITE_URL}/#clinica`;
const ID_DRA = `${SITE_URL}/#dra-gabrielle`;
const ID_SITE = `${SITE_URL}/#site`;

const sameAs = [INSTAGRAM, FACEBOOK, ...(PERFIL_GOOGLE_OFICIAL ? [PERFIL_GOOGLE] : [])];

const florianopolis = { "@type": "City", name: "Florianópolis", containedInPlace: { "@type": "State", name: "Santa Catarina" } };

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/* Clínica + profissional + site: vai no layout, presente em todas as páginas. */
export const schemaSite = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID_SITE,
      url: SITE_URL,
      name: NOME_CLINICA,
      inLanguage: "pt-BR",
      publisher: { "@id": ID_CLINICA },
    },
    {
      "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
      "@id": ID_CLINICA,
      name: NOME_CLINICA,
      alternateName: ["GK Estética", "Dra. Gabrielle Kwitko"],
      description:
        "Clínica de estética avançada em Florianópolis especializada em harmonização facial e corporal com procedimentos injetáveis e foco em resultado natural.",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-dra-2-crop.png`,
      image: [
        `${SITE_URL}/og-image.jpg`,
        `${SITE_URL}/images/clinica-dra-gabrielle-kwitko-trindade-florianopolis.jpg`,
        `${SITE_URL}/images/recepcao-clinica-estetica-florianopolis.jpg`,
      ],
      telephone: TELEFONE_E164,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${ENDERECO.rua}, ${ENDERECO.predio}`,
        addressLocality: ENDERECO.cidade,
        addressRegion: ENDERECO.uf,
        postalCode: ENDERECO.cep,
        addressCountry: "BR",
      },
      hasMap: MAPS_URL,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: HORARIO.dias,
        opens: HORARIO.abre,
        closes: HORARIO.fecha,
      },
      areaServed: florianopolis,
      sameAs,
      founder: { "@id": ID_DRA },
      employee: { "@id": ID_DRA },
      knowsAbout: ["Harmonização facial", "Harmonização corporal", "Procedimentos injetáveis", "Ácido hialurônico", "Bioestimulador de colágeno"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tratamentos",
        itemListElement: procedimentos.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: p.title, url: `${SITE_URL}${urlProcedimento(p.slug)}` },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": ID_DRA,
      name: "Gabrielle Kwitko",
      honorificPrefix: "Dra.",
      jobTitle: "Enfermeira Esteta",
      description: `Enfermeira esteta (${COREN}) especialista em procedimentos injetáveis e harmonização facial e corporal em Florianópolis.`,
      image: `${SITE_URL}/images/dra-gabrielle-kwitko-enfermeira-esteta-florianopolis.jpg`,
      url: `${SITE_URL}/#sobre`,
      worksFor: { "@id": ID_CLINICA },
      workLocation: { "@id": ID_CLINICA },
      sameAs: [INSTAGRAM],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Registro profissional",
        name: COREN,
        recognizedBy: { "@type": "Organization", name: "Conselho Regional de Enfermagem de Santa Catarina (COREN-SC)" },
      },
      knowsAbout: procedimentos.map((p) => p.title),
    },
  ],
};

type Migalha = { nome: string; url: string };

export function schemaBreadcrumb(itens: Migalha[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.nome,
      item: `${SITE_URL}${m.url}`,
    })),
  };
}

export function schemaServico(p: Servico, descricao: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${urlProcedimento(p.slug)}#servico`,
    name: `${p.title} em Florianópolis`,
    serviceType: p.title,
    description: descricao,
    url: `${SITE_URL}${urlProcedimento(p.slug)}`,
    image: p.resultado ? `${SITE_URL}${p.resultado.src}` : `${SITE_URL}/og-image.jpg`,
    provider: { "@id": ID_CLINICA },
    areaServed: florianopolis,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}${urlProcedimento(p.slug)}`,
      servicePhone: TELEFONE_E164,
    },
  };
}

export { NOME };
