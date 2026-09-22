import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Consentimento from "@/components/Consentimento";
import { JsonLd, schemaSite } from "@/components/schema";
import { SITE_URL } from "@/components/dados";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdf8f5",
};

const titulo = "Harmonização Facial em Florianópolis | Dra. Gabrielle Kwitko";
const descricao =
  "Dra. Gabrielle Kwitko, enfermeira esteta em Florianópolis (Trindade). Harmonização facial e corporal, preenchimentos, olheiras e bioestimulador com resultado natural.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: titulo, template: "%s | Dra. Gabrielle Kwitko" },
  description: descricao,
  applicationName: "Dra. Gabrielle Kwitko",
  authors: [{ name: "Dra. Gabrielle Kwitko", url: SITE_URL }],
  creator: "Dra. Gabrielle Kwitko",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Gabrielle Kwitko — Estética Avançada",
    url: "/",
    title: titulo,
    description: descricao,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dra. Gabrielle Kwitko — Estética Avançada em Florianópolis" }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao, images: ["/og-image.jpg"] },
  formatDetection: { telephone: true, address: true },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Florianópolis",
  },
  // TODO: colar aqui o código de verificação do Google Search Console, se a verificação for por meta tag.
  // verification: { google: "..." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <JsonLd data={schemaSite} />
        {children}
        {/* Banner LGPD + Google Tag Manager (só carrega após consentimento) */}
        <Consentimento />
      </body>
    </html>
  );
}
