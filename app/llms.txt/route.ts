/* /llms.txt — resumo do site em texto puro para buscadores de IA (ChatGPT, Claude, Perplexity...). */
import { SITE_URL, COREN, TELEFONE, ENDERECO, INSTAGRAM, HORARIO } from "@/components/dados";
import { facial, corporal, urlProcedimento, type Servico } from "@/components/procedimentos";

export const dynamic = "force-static";

const linha = (p: Servico) => `- [${p.title}](${SITE_URL}${urlProcedimento(p.slug)}): ${p.desc}`;

export function GET() {
  const texto = `# Dra. Gabrielle Kwitko — Estética Avançada

> Clínica de harmonização facial e corporal em Florianópolis (SC), conduzida pela Dra. Gabrielle Kwitko, enfermeira esteta (${COREN}), com foco em procedimentos injetáveis e resultado natural. Todo tratamento começa por uma avaliação individual.

- Endereço: ${ENDERECO.rua}, ${ENDERECO.predio}, ${ENDERECO.bairro}, ${ENDERECO.cidade} – ${ENDERECO.uf}, CEP ${ENDERECO.cep}
- Horário: ${HORARIO.texto} (domingo fechado)
- WhatsApp: ${TELEFONE}
- Instagram: ${INSTAGRAM}

## Harmonização facial

${facial.map(linha).join("\n")}

## Harmonização corporal

${corporal.map(linha).join("\n")}

## Outras páginas

- [Página inicial](${SITE_URL}/)
- [Todos os tratamentos](${SITE_URL}/tratamentos)
- [Política de Privacidade](${SITE_URL}/privacidade)
`;
  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
