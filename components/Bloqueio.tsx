export default function Bloqueio() {
  return (
    <>
      <style>{`
        .bloq-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 99999;
          background: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 5%;
          overflow-y: auto;
        }
        .bloq-box {
          max-width: 520px;
          width: 100%;
          text-align: center;
        }
        .bloq-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          border: 1.5px solid var(--rose-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bloq-icon svg { width: 26px; height: 26px; stroke: var(--rose-light); }
        .bloq-eyebrow {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rose-light);
          margin-bottom: 1.25rem;
        }
        .bloq-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 5vw, 3rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .bloq-title em { font-style: italic; color: var(--rose-light); }
        .bloq-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }
        .bloq-contato {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
        }
        .bloq-contato-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.875rem;
        }
        .bloq-contato a {
          font-size: 0.95rem;
          color: var(--rose-light);
          font-weight: 700;
          border-bottom: 1px solid rgba(238,192,196,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .bloq-contato a:hover { border-color: var(--rose-light); }
        .bloq-assinatura {
          margin-top: 2.5rem;
          font-size: 0.7rem;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.2);
        }
        .bloq-assinatura strong { color: rgba(255,255,255,0.4); font-weight: 700; }
      `}</style>

      <div className="bloq-overlay" role="dialog" aria-modal="true" aria-labelledby="bloq-title">
        <div className="bloq-box">
          <div className="bloq-icon">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <div className="bloq-eyebrow">Acesso suspenso</div>

          <h1 className="bloq-title" id="bloq-title">
            Este site está <em>temporariamente indisponível</em>
          </h1>

          <p className="bloq-desc">
            O acesso a esta página está suspenso pela empresa responsável pelo
            desenvolvimento do site. O conteúdo será restabelecido assim que a
            pendência for resolvida.
          </p>

          <div className="bloq-contato">
            <div className="bloq-contato-label">Entre em contato</div>
            <a href="mailto:caiua@ccypher.com.br">caiua@ccypher.com.br</a>
          </div>

          <div className="bloq-assinatura">
            <strong>C-CYPHER</strong> — ccypher.com.br
          </div>
        </div>
      </div>
    </>
  );
}
