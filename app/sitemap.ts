import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/dados";
import { procedimentos, urlProcedimento } from "@/components/procedimentos";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: SITE_URL, lastModified: agora, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/tratamentos`, lastModified: agora, changeFrequency: "monthly", priority: 0.9 },
    ...procedimentos.map((p) => ({
      url: `${SITE_URL}${urlProcedimento(p.slug)}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(p.resultado ? { images: [`${SITE_URL}${p.resultado.src}`] } : {}),
    })),
    { url: `${SITE_URL}/privacidade`, lastModified: agora, changeFrequency: "yearly", priority: 0.2 },
  ];
}
