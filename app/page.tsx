import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credenciais from "@/components/Credenciais";
import Resultados from "@/components/Resultados";
import Depoimentos from "@/components/Depoimentos";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import PorQueGK from "@/components/PorQueGK";
import Estudio from "@/components/Estudio";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

/* Ordem: hero → prova social → resultados → depoimentos (ponte resultado → confiança)
   → tratamentos → sobre → por que a GK → clínica → dúvidas → CTA com contato. */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credenciais />
        <Resultados />
        <Depoimentos />
        <Servicos />
        <Sobre />
        <PorQueGK />
        <Estudio />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
