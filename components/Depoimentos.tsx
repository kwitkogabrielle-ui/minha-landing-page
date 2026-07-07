const depoimentos = [
  { texto: "Fiz o preenchimento de olheiras e o resultado ficou incrível! Super natural, parece que descansou semanas. A Dra. Gabrielle é atenciosa e faz você se sentir segura do início ao fim.", autor: "Ana C." },
  { texto: "Finalmente fiz o botox que eu adiava há anos! A Dra. Gabrielle explicou tudo, tirou todas as minhas dúvidas. O resultado foi delicado e exatamente o que eu queria. Voltarei com certeza.", autor: "Mariana P." },
  { texto: "Ela tem um olhar diferenciado para estética. Não é o tipo de profissional que coloca muito — ela respeita a sua beleza natural. Me sinto renovada sem parecer que fiz algo. Recomendo demais!", autor: "Juliana S." },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="depoimentos-header container">
        <div className="section-eyebrow"><span>Depoimentos</span></div>
        <h2 className="section-title">O que dizem as pacientes</h2>
      </div>

      <div className="depoimentos-grid container">
        {depoimentos.map(({ texto, autor }) => (
          <div key={autor} className="depoimento-card">
            <div className="depoimento-quote">&ldquo;</div>
            <p className="depoimento-texto">{texto}</p>
            <div className="depoimento-autor">— {autor}</div>
            <div className="depoimento-stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
