export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Menú</h2>
        <p className="mb-4">Platos destacados: Paella, Tartar de Atún.</p>
        <a href="/menu" className="bg-black text-white px-4 py-2 rounded">
          Ver menú completo
        </a>
      </div>
    </section>
  );
}
