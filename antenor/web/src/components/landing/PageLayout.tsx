"use client";
import { useNavbarContext } from "./NavbarContext";
import { useEffect } from "react";

export default function PageLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const { scrollProgress } = useNavbarContext();
  const { setScrollProgress } = useNavbarContext();
  const isCollapsed = scrollProgress > 0.45;
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollMax = viewportHeight * 0.4; // Ajusta este valor para controlar la sensibilidad
      const progress = Math.min(scrollY / scrollMax, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress]);
  return (
    <div className="relative">
      {/* Background fijo */}
      <div className="fixed inset-0 -z-10 bg-[url('/background.jpg')] bg-cover bg-center" />

      {/* Espacio para el navbar (importante para el layout inicial) */}
      <div
        className={`transition-all duration-300`}
        style={{
          height: isCollapsed ? "50vh" : `${100 - scrollProgress}vh`,
        }}
      />

      {/* Contenido principal */}
      <main className="relative bg-white">{children}</main>
    </div>
  );
}
