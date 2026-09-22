import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dra. Gabrielle Kwitko — Estética Avançada",
    short_name: "Dra. Gabrielle",
    description: "Harmonização facial e corporal em Florianópolis.",
    start_url: "/",
    display: "browser",
    background_color: "#fdf8f5",
    theme_color: "#fdf8f5",
    lang: "pt-BR",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
