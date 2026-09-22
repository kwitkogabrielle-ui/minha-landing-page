import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Servicos from "@/components/Servicos";
import Resultados from "@/components/Resultados";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import { JsonLd, schemaBreadcrumb } from "@/components/schema";

const titulo = "Tratamentos de Harmonização em Florianópolis | Dra. Gabrielle";
const descricao =
  "Conheça os tratamentos de harmonização facial e corporal da Dra. Gabrielle Kwitko em Florianópolis: preenchimentos, bioestimulador, rinomodelação e mais.";

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: descricao,
  alternates: { canonical: "/tratamentos" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Gabrielle Kwitko — Estética Avançada",
    url: "/tratamentos",
    title: titulo,
    description: descricao,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dra. Gabrielle Kwitko — Estética Avançada em Florianópolis" }],
  },
};

export default function Tratamentos() {
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nome: "Início", url: "/" },
          { nome: "Tratamentos", url: "/tratamentos" },
        ])}
      />
      <Nav />
      <main>
        <Servicos comoPagina />
        <Resultados />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
