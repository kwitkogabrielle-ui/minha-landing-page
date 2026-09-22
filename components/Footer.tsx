import Link from "next/link";
import { PERFIL_GOOGLE, HORARIO, WA_BASE, TELEFONE, TELEFONE_E164, ENDERECO, MAPS_URL, INSTAGRAM, COREN } from "./dados";
import { facial, corporal, urlProcedimento } from "./procedimentos";

/* Dados de identificação da empresa.
   TODO: preencher razão social e CNPJ — enquanto ficarem vazios a linha não é exibida
   (melhor omitir do que publicar informação incorreta na página de destino do Google Ads). */
const RAZAO_SOCIAL = "";
const CNPJ = "";

const contato = [
  { href: WA_BASE, label: `WhatsApp ${TELEFONE}` },
  { href: `tel:${TELEFONE_E164}`, label: `Ligar ${TELEFONE}` },
  { href: MAPS_URL, label: ENDERECO.rua },
  { href: MAPS_URL, label: ENDERECO.predio },
  { href: MAPS_URL, label: `${ENDERECO.bairro}, ${ENDERECO.cidade} – ${ENDERECO.uf} · ${ENDERECO.cep}` },
  { href: INSTAGRAM, label: "@dragabriellekwitko" },
  { href: PERFIL_GOOGLE, label: "Nosso perfil no Google" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Dra. <span>Gabrielle</span> Kwitko</div>
          <p className="footer-desc">Especialista em injetáveis e harmonização facial e corporal no bairro Trindade, em Florianópolis, Santa Catarina.</p>
          <p className="footer-desc" style={{ marginTop: "0.75rem" }}>Enfermeira Esteta · {COREN}</p>
          <p className="footer-desc" style={{ marginTop: "0.75rem" }}>{HORARIO.texto}</p>
        </div>

        <div>
          <div className="footer-heading"><Link href="/tratamentos">Tratamentos</Link></div>
          <div className="footer-links">
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.25rem", display: "block" }}>Facial</span>
            {facial.map((p) => <Link key={p.slug} href={urlProcedimento(p.slug)}>{p.title}</Link>)}
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginTop: "0.75rem", marginBottom: "0.25rem", display: "block" }}>Corporal</span>
            {corporal.map((p) => <Link key={p.slug} href={urlProcedimento(p.slug)}>{p.title}</Link>)}
          </div>
        </div>

        <div>
          <div className="footer-heading">Contato</div>
          <div className="footer-links">
            {contato.map(({ href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined}>{label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          Os resultados são individuais e podem variar conforme a resposta de cada paciente.
          Todo procedimento exige avaliação prévia. O conteúdo deste site é informativo e não
          substitui consulta profissional.
        </p>
        <p>
          Responsável técnica: Gabrielle Kwitko — Enfermeira Esteta · {COREN}.
          {RAZAO_SOCIAL && CNPJ ? ` ${RAZAO_SOCIAL} · CNPJ ${CNPJ}.` : ""}
        </p>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dra. Gabrielle Kwitko. Todos os direitos reservados.</span>
        <span>
          <Link href="/privacidade">Política de Privacidade e Termos de Uso</Link>
          {" · "}Site desenvolvido por <a href="https://ccypher.com.br" target="_blank" rel="noopener">CCypher</a>
        </span>
      </div>
    </footer>
  );
}
