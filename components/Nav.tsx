"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { wa } from "./dados";

const WA = wa("Olá, vim pelo Google e gostaria de agendar uma avaliação.");

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
        <Link href="/" className="nav-logo" aria-label="Dra. Gabrielle Kwitko — página inicial">
          <Image src="/images/logo-dra-2-crop.png" alt="Dra. Gabrielle Kwitko — Estética Avançada" width={670} height={138} priority />
        </Link>
        <div className="nav-links">
          <Link href="/#servicos">Tratamentos</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#resultados">Resultados</Link>
          <Link href="/#localizacao">Contato</Link>
          <a href={WA} target="_blank" rel="noopener" className="btn-cta-nav">Agendar avaliação</a>
        </div>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>☰</button>
      </div>
      <div className={`nav-mobile${open ? " open" : ""}`}>
        <Link href="/#servicos" onClick={() => setOpen(false)}>Tratamentos</Link>
        <Link href="/#sobre" onClick={() => setOpen(false)}>Sobre</Link>
        <Link href="/#resultados" onClick={() => setOpen(false)}>Resultados</Link>
        <Link href="/#localizacao" onClick={() => setOpen(false)}>Contato</Link>
        <a href={WA} target="_blank" rel="noopener" className="nav-mobile-cta" onClick={() => setOpen(false)}>Agendar pelo WhatsApp</a>
      </div>
    </nav>
  );
}
