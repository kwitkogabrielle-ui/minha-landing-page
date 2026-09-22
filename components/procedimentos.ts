/* Procedimentos oferecidos. Alimenta a home, o rodapé, o sitemap e as páginas /tratamentos/[slug]. */

export type Servico = {
  icon: string;
  title: string;
  slug: string;
  desc: string;
  oque: string;
  finalidade: string;
  /* Foto de antes e depois do procedimento, quando houver. */
  resultado?: { src: string; alt: string };
};

export const facial: Servico[] = [
  {
    icon: "💉", title: "Tratamento de Linhas de Expressão", slug: "tratamento-linhas-de-expressao-florianopolis",
    resultado: { src: "/images/antes-depois-linhas-de-expressao-testa-florianopolis.jpg", alt: "Antes e depois do tratamento de linhas de expressão na testa, feito pela Dra. Gabrielle Kwitko em Florianópolis" },
    desc: "Suavização de rugas dinâmicas na testa, ao redor dos olhos e pescoço com resultado natural.",
    oque: "Aplicação de um ativo injetável em pontos específicos, que relaxa temporariamente os músculos responsáveis pelas rugas de movimento.",
    finalidade: "Suavizar e prevenir o aprofundamento de rugas na testa, entre as sobrancelhas e ao redor dos olhos (pés de galinha).",
  },
  {
    icon: "👁️", title: "Preenchimento de Olheiras", slug: "preenchimento-de-olheiras-florianopolis",
    resultado: { src: "/images/antes-depois-preenchimento-olheiras-florianopolis.jpg", alt: "Antes e depois de preenchimento de olheiras com ácido hialurônico em Florianópolis" },
    desc: "Correção com ácido hialurônico para aspecto descansado e rejuvenescido.",
    oque: "Aplicação de ácido hialurônico logo abaixo dos olhos, preenchendo o sulco que forma a sombra da olheira.",
    finalidade: "Reduzir o aspecto de cansaço e a sombra escura sob os olhos, principalmente quando causada por perda de volume.",
  },
  {
    icon: "😊", title: "Preenchimento de Sulco Nasogeniano", slug: "preenchimento-sulco-nasogeniano-florianopolis",
    desc: "Suavização do bigode chinês com preenchimento preciso e natural.",
    oque: "Preenchimento com ácido hialurônico nas linhas que vão das laterais do nariz até os cantos da boca.",
    finalidade: "Suavizar o \"bigode chinês\", que se aprofunda com a perda natural de volume e colágeno do rosto.",
  },
  {
    icon: "🫦", title: "Preenchimento de Mento", slug: "preenchimento-de-mento-florianopolis",
    desc: "Definição e projeção do queixo para mais equilíbrio e harmonia facial.",
    oque: "Aplicação de ácido hialurônico no queixo para aumentar a projeção e definir o contorno.",
    finalidade: "Equilibrar as proporções entre nariz, lábios e queixo, melhorando o perfil e a harmonia do rosto.",
  },
  {
    icon: "✨", title: "Preenchimento de Malar", slug: "preenchimento-malar-florianopolis",
    desc: "Volumização da maçã do rosto para um contorno suave e estruturado.",
    oque: "Preenchimento com ácido hialurônico na região das maçãs do rosto.",
    finalidade: "Repor o volume perdido com o tempo, dar sustentação ao terço médio da face e realçar o contorno.",
  },
  {
    icon: "💋", title: "Preenchimento Labial", slug: "preenchimento-labial-florianopolis",
    resultado: { src: "/images/antes-depois-preenchimento-labial-florianopolis.jpg", alt: "Antes e depois de preenchimento labial com ácido hialurônico em Florianópolis" },
    desc: "Lábios mais volumosos e definidos, proporcionais ao seu rosto.",
    oque: "Aplicação de ácido hialurônico nos lábios, trabalhando volume, contorno ou hidratação conforme a necessidade.",
    finalidade: "Deixar os lábios mais definidos, simétricos e hidratados, respeitando o formato natural do rosto.",
  },
  {
    icon: "💎", title: "Preenchimento de Mandíbula", slug: "preenchimento-de-mandibula-florianopolis",
    desc: "Contorno e definição da mandíbula para uma face mais simétrica e elegante.",
    oque: "Preenchimento com ácido hialurônico ao longo da linha da mandíbula.",
    finalidade: "Marcar o contorno do rosto, melhorar a transição entre rosto e pescoço e trazer mais definição ao perfil.",
  },
  {
    icon: "👃", title: "Rinomodelação", slug: "rinomodelacao-florianopolis",
    desc: "Correção estética do nariz sem cirurgia, com resultado perceptível já na sessão, conforme avaliação individual.",
    oque: "Aplicação de ácido hialurônico em pontos estratégicos do nariz, sem cortes e sem cirurgia.",
    finalidade: "Disfarçar pequenas imperfeições, como calombo no dorso, ponta caída ou assimetrias. Não diminui o tamanho do nariz.",
  },
  {
    icon: "🌟", title: "Bioestimulador", slug: "bioestimulador-de-colageno-florianopolis",
    desc: "Estimulação natural de colágeno para rejuvenescimento profundo e progressivo.",
    oque: "Substância injetável que estimula o próprio organismo a produzir colágeno novo.",
    finalidade: "Melhorar a firmeza, a flacidez e a qualidade da pele de forma gradual, com resultado que evolui ao longo dos meses.",
  },
];

export const corporal: Servico[] = [
  {
    icon: "🍑", title: "Harmonização Glútea", slug: "harmonizacao-glutea-florianopolis",
    desc: "Modelagem glútea não cirúrgica com volume, firmeza e forma definida — resultados variam conforme avaliação individual.",
    oque: "Aplicação de bioestimuladores e/ou preenchedores na região glútea, sem cirurgia.",
    finalidade: "Melhorar a firmeza, a flacidez e o contorno do bumbum, além de suavizar irregularidades.",
  },
  {
    icon: "🌸", title: "Harmonização de Mamas", slug: "harmonizacao-de-mamas-florianopolis",
    desc: "Bioestimuladores e preenchedores para firmeza e contorno mamário sem cirurgia — resultados variam conforme avaliação individual.",
    oque: "Aplicação de bioestimuladores e/ou preenchedores na região das mamas e do colo, sem cirurgia.",
    finalidade: "Melhorar a firmeza e a qualidade da pele, contribuindo para a sustentação e o contorno das mamas.",
  },
  {
    icon: "💫", title: "Escleroterapia", slug: "escleroterapia-florianopolis",
    desc: "Tratamento de varizes e vasinhos realizado em sessões, com avaliação prévia de indicação.",
    oque: "Aplicação de uma substância dentro dos vasinhos, que faz com que eles sejam absorvidos aos poucos pelo organismo.",
    finalidade: "Reduzir vasinhos e pequenas varizes nas pernas, melhorando a aparência da pele. Normalmente são necessárias algumas sessões.",
  },
];

export const procedimentos = [...facial, ...corporal];

export const categoriaDe = (p: Servico) => (facial.includes(p) ? "Facial" : "Corporal");

export const urlProcedimento = (slug: string) => `/tratamentos/${slug}`;
