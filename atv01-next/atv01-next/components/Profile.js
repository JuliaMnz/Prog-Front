export function Profile() {
  return (
    <div className="container-imagem">
      <img className="foto"
        src="/me.jpg"
        alt="Minha foto"
        width={180}
      />
      <h2 className="meu-nome">Júlia Muniz</h2>
      <p className="sobre-mim">
        Estudante de Sistemas para Internet, apaixonada por tecnologia, desing e aprendizado contínuo.
        Sempre buscando novos desafios e soluções criativas. ;D
      </p>
    </div>
  );
}