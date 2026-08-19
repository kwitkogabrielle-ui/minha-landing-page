import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade e Termos de Uso | Dra. Gabrielle Kwitko",
  description:
    "Como o site da Dra. Gabrielle Kwitko trata dados pessoais, cookies e mensagens enviadas pelo WhatsApp, conforme a LGPD (Lei nº 13.709/2018).",
  robots: { index: true, follow: true },
};

export default function Privacidade() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <Link href="/" className="legal-voltar">← Voltar ao site</Link>

        <h1>Política de Privacidade e Termos de Uso</h1>
        <p className="legal-meta">Última atualização: agosto de 2026</p>

        <h2>1. Quem trata os seus dados</h2>
        <p>
          Este site é mantido por Gabrielle Kwitko, enfermeira esteta inscrita no COREN sob o
          nº 652.755, com atendimento na R. Delminda Silveira, 827 – sala 206, Agronômica,
          Florianópolis – SC, CEP 88025-500. O contato para qualquer assunto relacionado a dados
          pessoais é o WhatsApp <a href="https://wa.me/5548984730581" target="_blank">(48) 98473-0581</a>.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p>
          O site não possui formulário de cadastro. Os dados pessoais chegam até nós de duas formas:
        </p>
        <ul>
          <li>
            <strong>Dados que você envia:</strong> ao clicar em qualquer botão de agendamento, você é
            levada ao WhatsApp e decide o que compartilhar — normalmente nome, telefone e a descrição
            do que procura. Esses dados são tratados dentro do WhatsApp, que possui política própria.
          </li>
          <li>
            <strong>Dados de navegação:</strong> se você aceitar os cookies, ferramentas de medição
            (Google Tag Manager, Google Analytics e Google Ads) registram páginas visitadas, origem do
            acesso, tipo de dispositivo e cliques, sempre de forma agregada.
          </li>
        </ul>

        <h2>3. Cookies e consentimento</h2>
        <p>
          Nenhum cookie de medição ou publicidade é carregado antes do seu aceite no banner exibido na
          primeira visita. Se você recusar, o site continua funcionando normalmente e nenhuma tag de
          rastreamento é ativada. Para rever a sua escolha, apague os dados do site no seu navegador —
          o banner voltará a aparecer.
        </p>

        <h2>4. Para que usamos os dados</h2>
        <ul>
          <li>Responder ao seu contato e organizar o agendamento da avaliação.</li>
          <li>Entender como as pessoas encontram e usam o site, para melhorá-lo.</li>
          <li>Medir o resultado dos anúncios veiculados no Google.</li>
        </ul>
        <p>
          A base legal é o seu consentimento (art. 7º, I da LGPD) para cookies e medição, e o
          legítimo interesse / procedimentos preliminares de contrato (art. 7º, V e IX) para responder
          à sua mensagem.
        </p>

        <h2>5. Com quem compartilhamos</h2>
        <p>
          Não vendemos nem cedemos dados pessoais. O compartilhamento se limita aos provedores que
          viabilizam o site e a comunicação: Google (Tag Manager, Analytics e Ads), Meta (WhatsApp) e
          o serviço de hospedagem. Cada um trata os dados conforme as suas próprias políticas.
        </p>

        <h2>6. Por quanto tempo guardamos</h2>
        <p>
          Conversas de WhatsApp ficam armazenadas enquanto durar o relacionamento e pelo prazo
          necessário ao cumprimento de obrigações legais. Dados de navegação seguem o prazo de
          retenção das ferramentas do Google, em geral de até 14 meses.
        </p>

        <h2>7. Os seus direitos</h2>
        <p>
          A LGPD garante a você o direito de confirmar a existência de tratamento, acessar, corrigir,
          anonimizar, portar ou eliminar os seus dados, além de revogar o consentimento a qualquer
          momento. Basta pedir pelo WhatsApp informado acima; respondemos em até 15 dias.
        </p>

        <h2>8. Termos de uso e aviso sobre resultados</h2>
        <p>
          O conteúdo deste site tem finalidade informativa e não substitui consulta, diagnóstico ou
          avaliação presencial. Todo procedimento estético exige avaliação prévia e possui indicações,
          contraindicações e riscos, que são explicados individualmente no atendimento.
        </p>
        <p>
          <strong>
            Os resultados são individuais e podem variar conforme a resposta de cada paciente. As
            imagens publicadas são de pacientes reais, divulgadas mediante autorização expressa, e não
            representam garantia de resultado.
          </strong>
        </p>
        <p>
          Textos, fotos e marcas presentes no site são de uso exclusivo e não podem ser reproduzidos
          sem autorização.
        </p>

        <h2>9. Alterações</h2>
        <p>
          Esta política pode ser atualizada a qualquer momento. A data no topo da página indica a
          versão vigente.
        </p>

        <Link href="/" className="legal-voltar">← Voltar ao site</Link>
      </div>
    </main>
  );
}
