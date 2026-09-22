import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Endereços do site antigo que ainda aparecem no Google.
     308 (permanente) faz o Google transferir a relevância para a página nova. */
  async redirects() {
    return [
      { source: "/sobre.html", destination: "/#sobre", permanent: true },
      { source: "/sobre", destination: "/#sobre", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // Qualquer outra página .html antiga cai na home em vez de dar 404.
      { source: "/:pagina([a-z0-9_-]+)\\.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
