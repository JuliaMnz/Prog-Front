export default function Profile() {
  return (
    <div className="p-4 border rounded-lg max-w-sm mx-auto shadow-md text-center">
      <img
        src="/me.jpg"
        alt="Minha foto"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">Júlia Muniz</h2>
      <p className="text-gray-600">
        Estudante de Sistemas para Internet, apaixonada por tecnologia, desing e aprendizado contínuo.
        Sempre buscando novos desafios e soluções criativas. ;D
      </p>
    </div>
  );
}