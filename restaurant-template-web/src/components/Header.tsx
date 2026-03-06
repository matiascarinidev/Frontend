export default function Header() {
  return (
    <header className="bg-black text-white p-4 sticky top-0">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Restaurante</h1>
        <div className="flex space-x-4">
          <a href="#about" className="hover:underline">
            Nosotros
          </a>
          <a href="#menu" className="hover:underline">
            Menú
          </a>
          <a href="#reservation" className="hover:underline">
            Reservas
          </a>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
