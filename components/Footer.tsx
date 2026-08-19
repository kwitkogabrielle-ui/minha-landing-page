import { PERFIL_GOOGLE } from "./dados";

/* Dados de identificação da empresa.
   TODO: preencher razão social e CNPJ — enquanto ficarem vazios a linha não é exibida
   (melhor omitir do que publicar informação incorreta na página de destino do Google Ads). */
const RAZAO_SOCIAL = "";
const CNPJ = "";

const facial = ["Tratamento de Linhas de Expressão", "Preenchimento de Olheiras", "Preenchimento de Sulco Nasogeniano", "Preenchimento de Mento", "Preenchimento de Malar", "Preenchimento Labial", "Preenchimento de Mandíbula", "Rinomodelação", "Bioestimulador"];
const corporal = ["Harmonização Glútea", "Harmonização de Mamas", "Escleroterapia"];
const contato = [
  { href: "https://wa.me/5548984730581", label: "(48) 98473-0581" },
  { href: "#", label: "R. Delminda Silveira, 827 – sala 206" },
  { href: "#", label: "Agronômica, Florianópolis – SC · 88025-500" },
  { href: "https://www.instagram.com/dragabriellekwitko", label: "@dragabriellekwitko" },
  { href: PERFIL_GOOGLE, label: "Nosso perfil no Google" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Dra. <span>Gabrielle</span> Kwitko</div>
          <p className="footer-desc">Especialista em injetáveis e harmonização facial e corporal. Florianópolis, Santa Catarina.</p>
          <p className="footer-desc" style={{ marginTop: "0.75rem" }}>Enfermeira Esteta · COREN 652.755</p>
        </div>

        <div>
          <div className="footer-heading">Tratamentos</div>
          <div className="footer-links">
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginBottom: "0.25rem", display: "block" }}>Facial</span>
            {facial.map((t) => <a key={t} href="#servicos">{t}</a>)}
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--rose)", marginTop: "0.75rem", marginBottom: "0.25rem", display: "block" }}>Corporal</span>
            {corporal.map((t) => <a key={t} href="#servicos">{t}</a>)}
          </div>
        </div>

        <div>
          <div className="footer-heading">Contato</div>
          <div className="footer-links">
            {contato.map(({ href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}>{label}</a>
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
          Responsável técnica: Gabrielle Kwitko — Enfermeira Esteta · COREN-SC 652.755.
          {RAZAO_SOCIAL && CNPJ ? ` ${RAZAO_SOCIAL} · CNPJ ${CNPJ}.` : ""}
        </p>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dra. Gabrielle Kwitko. Todos os direitos reservados.</span>
        <span>
          <a href="/privacidade">Política de Privacidade e Termos de Uso</a>
          {" · "}Site desenvolvido por <a href="https://ccypher.com.br" target="_blank">CCypher</a>
        </span>
      </div>
    </footer>
  );
}
