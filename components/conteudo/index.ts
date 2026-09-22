import type { ConteudoProcedimento } from "./tipo";
import { grupoA } from "./grupo-a";
import { grupoB } from "./grupo-b";
import { grupoC } from "./grupo-c";

export const conteudo: Record<string, ConteudoProcedimento> = { ...grupoA, ...grupoB, ...grupoC };
