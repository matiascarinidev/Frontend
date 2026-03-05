"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideMenu from "@/components/admin/SideMenu";
import ReservationsList from "@/components/admin/ReservationList";
import CreateReservationModal from "@/components/admin/CreateReservationModal";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("list");
  const [reservations, setReservations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState<{
    _id: string;
    [key: string]: any;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) router.push("/admin/login");
    fetchReservations();
  }, []);

  const fetchReservations = async (
    filterType?: "day" | "range",
    value?: any
  ) => {
    let url = "/api/admin/reservations";
    if (filterType === "day") {
      url += `?date=${value}`;
    } else if (filterType === "range") {
      url += `?start=${value.start}&end=${value.end}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
      },
    });
    setReservations(await res.json());
  };

  const handleCreateOrUpdate = async (data: any) => {
    const url = editingReservation
      ? `/api/admin/reservations/${editingReservation._id}`
      : "/api/admin/reservations";

    await fetch(url, {
      method: editingReservation ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
      },
      body: JSON.stringify(data),
    });
    fetchReservations();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SideMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-8 overflow-auto">
        {activeTab === "list" && (
          <>
            <button
              onClick={() => {
                setEditingReservation(null);
                setIsModalOpen(true);
              }}
              className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Nueva Reserva
            </button>
            <ReservationsList
              reservations={reservations}
              onFilter={(type, value) => fetchReservations(type, value)}
              onDelete={async (id) => {
                await fetch(`/api/admin/reservations/${id}`, {
                  method: "DELETE",
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                      "admin_token"
                    )}`,
                  },
                });
                fetchReservations();
              }}
              onEdit={(res) => {
                setEditingReservation(res);
                setIsModalOpen(true);
              }}
            />
          </>
        )}
      </div>

      <CreateReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateOrUpdate}
        initialData={editingReservation}
      />
    </div>
  );
}
