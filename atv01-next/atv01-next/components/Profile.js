export function Profile() {
  return (
    <div>
      <img
        src="/me.jpg"
        alt="Minha foto"
        width={180}
      />
      <h2 className="text-xl font-bold">Júlia Muniz</h2>
      <p className="text-gray-600">
        Estudante de Sistemas para Internet, apaixonada por tecnologia, desing e aprendizado contínuo.
        Sempre buscando novos desafios e soluções criativas. ;D
      </p>
    </div>
  );
}