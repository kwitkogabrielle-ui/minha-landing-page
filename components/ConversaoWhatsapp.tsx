"use client";
import { useEffect } from "react";
import Script from "next/script";

/* Conversão "Contato" do Google Ads: todo clique em link de WhatsApp chama gtag_report_conversion().
   O snippet abaixo é o fornecido pelo Google Ads. O `gtag` é definido sobre o dataLayer caso
   ainda não exista (a Tag do Google vem pelo GTM, que só carrega após o aceite de cookies). */

const SNIPPET = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-18393639512/cz4BCPLP2okdENjU4sJE',
      'value': 1.0,
      'currency': 'BRL',
      'event_callback': callback
  });
  return false;
}
`;

const EH_WHATSAPP = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//;

declare global {
  interface Window { gtag_report_conversion?: (url?: string) => boolean }
}

export default function ConversaoWhatsapp() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || !EH_WHATSAPP.test(link.href) || !window.gtag_report_conversion) return;

      /* Links que abrem em nova aba: o site continua aberto, então só registramos
         a conversão e deixamos o navegador abrir o WhatsApp normalmente. */
      if (link.target === "_blank") {
        window.gtag_report_conversion();
        return;
      }

      /* Mesma aba: segura a navegação até o Google Ads confirmar. Se o callback não vier
         (cookies recusados, bloqueador de anúncios), segue para o WhatsApp mesmo assim. */
      e.preventDefault();
      const url = link.href;
      window.gtag_report_conversion(url);
      window.setTimeout(() => { window.location.href = url; }, 1000);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <Script id="gads-conversao-contato" strategy="afterInteractive">{SNIPPET}</Script>;
}
