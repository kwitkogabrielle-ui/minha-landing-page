import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Consentimento from "@/components/Consentimento";

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
};

export const metadata: Metadata = {
  title: "Dra. Gabrielle Kwitko — Harmonização Facial e Corporal | Florianópolis",
  description:
    "Dra. Gabrielle Kwitko, enfermeira injetabilista em Florianópolis-SC. Harmonização facial e corporal, preenchimentos, olheiras e contorno glúteo com resultados naturais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {children}
        {/* Banner LGPD + Google Tag Manager (só carrega após consentimento) */}
        <Consentimento />
      </body>
    </html>
  );
}
