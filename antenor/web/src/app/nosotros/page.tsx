import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nuestra Historia
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          repellat inventore, molestias facere dolor eum nostrum obcaecati.
        </p>
      </section>

      {/* Quiénes Somos */}
      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiénes Somos</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          repellat inventore, molestias facere dolor eum nostrum obcaecati.
        </p>
        <div className="bg-gray-200 h-64 rounded-lg"></div>{" "}
        {/* Placeholder para imagen */}
      </section>

      {/* Nuestro Espacio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Nuestro Espacio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-200 h-48 rounded-lg"></div> // Placeholder para imágenes
          ))}
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          repellat inventore, molestias facere dolor eum nostrum obcaecati.
        </p>
      </section>

      {/* CTA Minimalista */}
      <div className="text-center">
        <Link
          href="/reservas"
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
        >
          Reservar Mesa
        </Link>
      </div>
    </div>
  );
}
