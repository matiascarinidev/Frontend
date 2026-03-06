"use client";
import { useState } from "react";

interface Reservation {
  _id: string;
  clientName: string;
  date: string;
  time: string;
  guests: number;
}

interface ReservationsListProps {
  reservations: Reservation[];
  onFilter: (
    type: "day" | "range",
    value: string | { start: string; end: string }
  ) => void;
  onDelete: (id: string) => void;
  onEdit?: (res: Reservation) => void; // Prop opcional añadida
}

export default function ReservationsList({
  reservations,
  onFilter,
  onDelete,
  onEdit, // Nueva prop
}: ReservationsListProps) {
  const [filterType, setFilterType] = useState<"day" | "range">("day");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilter = () => {
    if (filterType === "day") {
      onFilter("day", date);
    } else {
      onFilter("range", { start: startDate, end: endDate });
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4">
        {/* Selector de tipo de filtro (igual que antes) */}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Cliente</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Hora</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res._id} className="border">
              <td className="p-2">{res.clientName}</td>
              <td className="p-2">{new Date(res.date).toLocaleDateString()}</td>
              <td className="p-2">{res.time}</td>
              <td className="p-2 flex gap-2">
                {onEdit && ( // Solo muestra si onEdit está definido
                  <button
                    onClick={() => onEdit(res)}
                    className="bg-yellow-500 text-white p-1 rounded"
                  >
                    Editar
                  </button>
                )}
                <button
                  onClick={() => onDelete(res._id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
