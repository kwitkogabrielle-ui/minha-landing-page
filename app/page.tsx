import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credenciais from "@/components/Credenciais";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import Resultados from "@/components/Resultados";
import Estudio from "@/components/Estudio";
import Depoimentos from "@/components/Depoimentos";
import Localizacao from "@/components/Localizacao";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credenciais />
        <Servicos />
        <Sobre />
        <Resultados />
        <Estudio />
        <Depoimentos />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
