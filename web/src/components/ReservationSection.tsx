export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Reservas</h2>
      <p className="mb-4">Horario: Lunes a Domingo, 12:00 - 23:00.</p>
      <a href="/reserva" className="bg-black text-white px-4 py-2 rounded">
        Reservar mesa
      </a>
    </section>
  );
}
