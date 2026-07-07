import Image from "next/image";

const WA = "https://wa.me/5548984730581?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Gabrielle.";

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.862L.057 23.867a.5.5 0 00.611.637l6.18-1.617A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.868 0-3.63-.488-5.16-1.342l-.369-.213-3.821.999 1.019-3.71-.232-.38A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

const carouselItems = [
  { src: "/images/antes-depois-labios.png",     alt: "Resultado preenchimento labial", tag: "Lábios" },
  { src: "/images/antes-depois-olheiras.jpg",   alt: "Resultado olheiras",             tag: "Olheiras" },
  { src: "/images/antes-depois-botox-testa.png", alt: "Resultado botox",               tag: "Botox" },
];

/* duplicamos para o loop infinito ser seamless */
const marqueeItems = [...carouselItems, ...carouselItems];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span>Enfermeira Esteta · Florianópolis</span>
        </div>

        <h1 className="hero-title">
          Realce a sua<br />
          <em>beleza natural</em><br />
          com segurança.
        </h1>

        <p className="hero-desc">
          Dra. Gabrielle Kwitko combina técnica médica avançada e olhar estético refinado para
          resultados que valorizam quem você já é — sem exageros, com naturalidade.
        </p>

        {/* Mobile only: marquee auto-scroll */}
        <div className="hero-results-strip">
          <div className="hero-result-label">Resultados reais</div>
          <div className="hero-results-track">
            {marqueeItems.map(({ src, alt, tag }, i) => (
              <div key={i} className="hero-result-card" aria-hidden={i >= carouselItems.length || undefined}>
                <Image src={src} alt={alt} width={120} height={148} style={{ objectFit: "cover", objectPosition: "center top", display: "block" }} />
                <div className="hero-result-tag">{tag}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-btns">
          <a href={WA} target="_blank" className="btn-primary">
            {WA_SVG} Agendar Avaliação
          </a>
          <a href="#servicos" className="btn-outline">Ver Tratamentos</a>
        </div>

        <div className="hero-trust">
          <span className="hero-stars">★★★★★</span>
          <div className="hero-trust-text">
            <strong>4.9</strong>
            <span>· 70 avaliações no Google</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <Image
          src="/images/dra-procedimento.jpg"
          alt="Dra. Gabrielle Kwitko realizando procedimento"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="hero-image-overlay" />
        <div className="hero-card">
          <strong>Enfermeira Esteta</strong>
          <small>COREN 652.755 · Florianópolis, SC</small>
        </div>
      </div>
    </section>
  );
}
