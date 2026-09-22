/* Conteúdo longo de cada página de procedimento (/tratamentos/[slug]). */
export type ConteudoProcedimento = {
  metaTitle: string;          // até ~60 caracteres, palavra-chave + Florianópolis
  metaDescription: string;    // 140–160 caracteres
  h1: string;                 // título da página, com a palavra-chave
  intro: string[];            // 2 parágrafos de abertura
  indicacoes: string[];       // "Para quem é indicado" — 4 a 6 itens
  sessao: string[];           // "Como é o procedimento" — 2 a 3 parágrafos
  resultado: string[];        // "Resultado e duração" — 2 parágrafos
  cuidados: string[];         // "Cuidados após" — 4 a 6 itens
  contraindicacoes: string[]; // "Quando não é indicado" — 3 a 5 itens
};
