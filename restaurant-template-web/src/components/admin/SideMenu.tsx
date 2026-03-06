"use client";
import { useState } from "react";
import Link from "next/link";

export default function SideMenu({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tabs = [
    { id: "list", label: "Listar Reservas", icon: "📋" },
    { id: "create", label: "Crear Reserva", icon: "➕" },
    { id: "stats", label: "Estadísticas", icon: "📊" },
    { id: "settings", label: "Configuración", icon: "⚙️" },
  ];

  return (
    <div
      className={`bg-gray-800 text-white p-4 ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-6 text-xl"
      >
        {isCollapsed ? "»" : "«"}
      </button>

      <ul className="space-y-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center w-full p-2 rounded ${
                activeTab === tab.id ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {!isCollapsed && tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
