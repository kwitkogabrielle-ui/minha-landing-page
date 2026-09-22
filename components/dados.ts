/* Dados de identificação usados em mais de um componente.
   Nome, endereço e telefone precisam ficar idênticos ao Perfil da Empresa no Google. */

export const SITE_URL = "https://www.gkestetica.com";
export const NOME = "Dra. Gabrielle Kwitko";
export const NOME_CLINICA = "Dra. Gabrielle Kwitko — Estética Avançada";
export const COREN = "COREN-SC 652.755";

export const TELEFONE = "(48) 98473-0581";
export const TELEFONE_E164 = "+5548984730581";
export const WA_BASE = "https://wa.me/5548984730581";
export const wa = (mensagem: string) => `${WA_BASE}?text=${encodeURIComponent(mensagem)}`;

export const ENDERECO = {
  rua: "R. Lauro Linhares, 728",
  predio: "Centro Executivo Monchique",
  bairro: "Trindade",
  cidade: "Florianópolis",
  uf: "SC",
  cep: "88036-000",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Lauro+Linhares+728+Trindade+Florian%C3%B3polis+SC+88036-000";

/* Horário de atendimento — manter igual ao Perfil da Empresa no Google. */
export const HORARIO = {
  dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abre: "09:30",
  fecha: "20:00",
  texto: "Segunda a sábado, das 9h30 às 20h",
};

export const INSTAGRAM = "https://www.instagram.com/dragabriellekwitko";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=100084080649001";

// Link de compartilhamento do Perfil da Empresa no Google (também entra no "sameAs" dos dados estruturados).
export const PERFIL_GOOGLE = "https://share.google/ICikgLli9Ipoyzvtp";
export const PERFIL_GOOGLE_OFICIAL = !PERFIL_GOOGLE.includes("/maps/search/");
