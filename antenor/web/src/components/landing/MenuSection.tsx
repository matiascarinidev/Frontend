"use client";
import {
  GeneralMenu,
  GlutenFreeIcon,
  VeganIcon,
  VegetarianIcon,
  StarRating,
} from "@/lib/TypeIcons";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function MenuSection() {
  const menus = [
    {
      id: 1,
      title: "Menu General",
      icon: <GeneralMenu />,
      description: "Nuestra selección completa de pasos.",
      background: "#E8F5E9",
      url: "/menu-general",
    },
    {
      id: 2,
      title: "Menu apto para Celíacos",
      icon: <GlutenFreeIcon />,
      description: "Nuestra selección completa de pasos.",
      background: "#E8F5E9",
      url: "/menu-celiaco",
    },
    {
      id: 3,
      title: "Menu Vegetariano",
      icon: <VegetarianIcon />,
      description: "Nuestra selección completa de pasos.",
      background: "#E8F5E9",
      url: "/menu-vegetariano",
    },
    {
      id: 4,
      title: "Menu Vegano",
      icon: <VeganIcon />,
      description: "Nuestra selección completa de pasos.",
      background: "#E8F5E9",
      url: "/menu-vegano",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === menus.length - 1 ? 0 : prevIndex + 1
        );
        setTransition(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [menus.length]);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="grid grid-cols-3 bg-white text-black m-auto min-h-[100vh] w-full items-center justify-around  px-16"
    >
      <div className="w-full text-center">
        <h2 className="text-6xl font-bold">Parrilla libre</h2>
        <p className="text-2xl">Conoce nuestra carta completa</p>
        <p
          className="text-9xl font-bold text-gray-500"
          style={{ fontFamily: "var(--font-bodoni)" }}
        >
          4.8
        </p>
        <div className="flex flex-col gap-4 ">
          <div className="m-auto">
            <StarRating rating={4.6} />
          </div>
          <a
            href="/menu"
            target="_blank"
            className="underline font-semibold hover:scale-105 transition-all ease-in-out duration-150"
          >
            Ir al Menu.
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto h-96 overflow-hidden rounded-xl shadow-lg col-span-2">
        {menus.map((menu, index) => (
          <div
            key={`card-${menu.id}`} // Clave única para las tarjetas
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
              index === currentIndex
                ? ((transitionState) =>
                    transitionState
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none")(transition)
                : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundColor: menu.background }}
          >
            <Link
              href={menu.url}
              className="flex flex-col items-center text-center flex-1 justify-center"
            >
              <div className="mb-6">{menu.icon}</div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                {menu.title}
              </h2>
              <p className="text-lg text-gray-600">{menu.description}</p>
            </Link>

            <div className="absolute bottom-6 flex space-x-2 ">
              {menus.map((m, i) => (
                <button
                  key={`indicator-${m.id}`} // Clave única para los indicadores
                  onClick={(e) => {
                    e.preventDefault();
                    setTransition(false);
                    setTimeout(() => {
                      setCurrentIndex(i);
                      setTransition(true);
                    }, 300);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al menú ${m.title}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
