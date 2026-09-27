"use client";
import { useEffect, useRef, type ReactNode } from "react";

/* Carrossel dos antes e depois: passa sozinho, aceita arrastar (mouse) e deslizar (toque).
   Pausa enquanto a pessoa interage e volta a andar alguns segundos depois. */

const INTERVALO = 4000;
const PAUSA_APOS_INTERACAO = 8000;

export default function CarrosselResultados({ children }: { children: ReactNode }) {
  const trilho = useRef<HTMLDivElement>(null);
  const pausadoAte = useRef(0);
  const hover = useRef(false);
  const arrasto = useRef<{ x: number; scroll: number; moveu: boolean } | null>(null);

  const pausar = () => { pausadoAte.current = Date.now() + PAUSA_APOS_INTERACAO; };

  const passo = (direcao: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const noFim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const noInicio = el.scrollLeft <= 4;
    if (direcao === 1 && noFim) return el.scrollTo({ left: 0, behavior: "smooth" });
    if (direcao === -1 && noInicio) return el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    const base = el.scrollLeft + cards[0].offsetLeft;
    const alvo = direcao === 1
      ? cards.find((c) => c.offsetLeft > base + 4)
      : [...cards].reverse().find((c) => c.offsetLeft < base - 4);
    if (alvo) el.scrollTo({ left: alvo.offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (hover.current || document.hidden || Date.now() < pausadoAte.current) return;
      passo(1);
    }, INTERVALO);
    return () => window.clearInterval(id);
  }, []);

  /* Arrastar com o mouse (no toque o navegador já faz sozinho). */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !trilho.current) return;
    arrasto.current = { x: e.clientX, scroll: trilho.current.scrollLeft, moveu: false };
    pausar();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const a = arrasto.current, el = trilho.current;
    if (!a || !el) return;
    const dx = e.clientX - a.x;
    if (!a.moveu && Math.abs(dx) > 5) {
      a.moveu = true;
      el.classList.add("arrastando");
      el.setPointerCapture(e.pointerId);
    }
    if (a.moveu) el.scrollLeft = a.scroll - dx;
  };
  const soltar = () => {
    const a = arrasto.current, el = trilho.current;
    arrasto.current = null;
    if (!a?.moveu || !el) return;
    el.classList.remove("arrastando");
    /* Depois de arrastar, alinha no card mais próximo. */
    const cards = Array.from(el.children) as HTMLElement[];
    const base = el.scrollLeft + cards[0].offsetLeft;
    const maisPerto = cards.reduce((m, c) => Math.abs(c.offsetLeft - base) < Math.abs(m.offsetLeft - base) ? c : m);
    el.scrollTo({ left: maisPerto.offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
  };
  /* Se arrastou, o clique no fim não abre o link do card. */
  const onClickCapture = (e: React.MouseEvent) => {
    if (trilho.current?.dataset.acabouDeArrastar) { e.preventDefault(); e.stopPropagation(); }
  };
  const onPointerUp = () => {
    const moveu = arrasto.current?.moveu;
    soltar();
    if (moveu && trilho.current) {
      trilho.current.dataset.acabouDeArrastar = "1";
      setTimeout(() => { if (trilho.current) delete trilho.current.dataset.acabouDeArrastar; }, 0);
    }
  };

  return (
    <div className="carrossel-resultados" aria-roledescription="carrossel">
      <div
        ref={trilho}
        className="resultados-trilho"
        onMouseEnter={() => { hover.current = true; }}
        onMouseLeave={() => { hover.current = false; soltar(); }}
        onTouchStart={pausar}
        onWheel={pausar}
        onFocus={pausar}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={soltar}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>
      <div className="carrossel-setas">
        <button type="button" aria-label="Resultado anterior" onClick={() => { pausar(); passo(-1); }}>‹</button>
        <button type="button" aria-label="Próximo resultado" onClick={() => { pausar(); passo(1); }}>›</button>
      </div>
    </div>
  );
}
