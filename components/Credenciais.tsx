import { PERFIL_GOOGLE } from "./dados";

export default function Credenciais() {
  return (
    <section id="credenciais">
      <div className="cred-grid container">
        <a href={PERFIL_GOOGLE} target="_blank" className="cred-item">
          <div className="cred-val">4.9★</div>
          <div className="cred-label">Nota no Google</div>
        </a>
        <a href={PERFIL_GOOGLE} target="_blank" className="cred-item">
          <div className="cred-val">70+</div>
          <div className="cred-label">Avaliações verificadas</div>
        </a>
        <div className="cred-item">
          <div className="cred-val">COREN</div>
          <div className="cred-label">Registro 652.755</div>
        </div>
        <div className="cred-item">
          <div className="cred-val">Natural</div>
          <div className="cred-label">Foco em resultado</div>
        </div>
      </div>
    </section>
  );
}
