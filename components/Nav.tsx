"use client";
import { useState, useEffect, useRef } from "react";

const WA = "https://wa.me/5548984730581?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth > 768) return;
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={hidden ? "nav-hidden" : ""}>
      <div className="nav-inner">
        <div className="nav-logo"><span>Gabrielle</span> Kwitko</div>
        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#resultados">Resultados</a>
          <a href="#localizacao">Contato</a>
          <a href={WA} target="_blank" className="btn-cta-nav">Agendar avaliação</a>
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      <div className={`nav-mobile${open ? " open" : ""}`}>
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
        <a href="#resultados" onClick={() => setOpen(false)}>Resultados</a>
        <a href="#localizacao" onClick={() => setOpen(false)}>Contato</a>
        <a href={WA} target="_blank" className="nav-mobile-cta" onClick={() => setOpen(false)}>Agendar pelo WhatsApp</a>
      </div>
    </nav>
  );
}
