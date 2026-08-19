"use client";
import { useSyncExternalStore } from "react";
import Script from "next/script";

const GTM_ID = "GTM-WFDHVH73";
const CHAVE = "gk-consentimento-cookies";

type Escolha = "aceito" | "recusado" | null;

/* Store mínima em cima do localStorage: o consentimento vive fora do React
   (outra aba pode mudá-lo), então lemos por useSyncExternalStore. */
let ouvintes: Array<() => void> = [];

function subscribe(callback: () => void) {
  ouvintes.push(callback);
  window.addEventListener("storage", callback);
  return () => {
    ouvintes = ouvintes.filter((o) => o !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Escolha {
  const salvo = window.localStorage.getItem(CHAVE);
  return salvo === "aceito" || salvo === "recusado" ? salvo : null;
}

/* No servidor ainda não sabemos a escolha. Devolver undefined evita
   renderizar o banner para quem já respondeu. */
function getServerSnapshot(): undefined {
  return undefined;
}

function registrar(valor: Exclude<Escolha, null>) {
  window.localStorage.setItem(CHAVE, valor);
  ouvintes.forEach((o) => o());
}

export default function Consentimento() {
  const escolha = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <>
      {/* O GTM só é injetado depois do aceite — nada de rastreamento antes disso (LGPD). */}
      {escolha === "aceito" && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {escolha === null && (
        <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
          <p className="cookie-texto">
            Usamos cookies para medir o desempenho do site e melhorar a sua experiência.
            Você pode recusar sem prejuízo à navegação. Saiba mais na{" "}
            <a href="/privacidade">Política de Privacidade</a>.
          </p>
          <div className="cookie-btns">
            <button type="button" className="cookie-btn-recusar" onClick={() => registrar("recusado")}>
              Recusar
            </button>
            <button type="button" className="cookie-btn-aceitar" onClick={() => registrar("aceito")}>
              Aceitar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
