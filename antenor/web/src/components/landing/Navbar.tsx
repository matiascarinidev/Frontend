"use client";
import { useNavbarContext } from "@/components/landing/NavbarContext";
import Link from "next/link";
import LogoAntenor from "../LogoAntenor";

export default function Navbar() {
  const { scrollProgress } = useNavbarContext();
  const isCollapsed = scrollProgress > 0.3;
  const bgOpacity = Math.min(scrollProgress + 0.4 * 1.6, 1);
  const headerHeight = isCollapsed ? "100px" : "100%";
  const logoScale = 1 - scrollProgress * 0.3; // Escala del logo (0.7 a 1)
  const navFontSize = Math.max(14, 24 - scrollProgress * 20); // Tamaño de fuente
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  text-white transition-all duration-300 flex items-center justify-center`}
      style={{
        height: `${headerHeight}`,
        background: `
          linear-gradient(rgba(0,0,0,${bgOpacity}), rgba(0,0,0,${bgOpacity})
          ),
          url("/images/hero/hero-bg.jpg") bottom center/cover no-repeat fixed
        `,
        backdropFilter: `blur(${Math.min(scrollProgress * 5, 3)}px)`,
      }}
    >
      <div
        className={`grid  transition-all duration-700 m-auto h-full ${
          isCollapsed
            ? "grid-cols-9 w-full"
            : " grid-cols-3 p-8 w-4/5 m-auto h-full"
        } `}
      >
        <LogoAntenor
          className={` text-shadow-[5px_0_15px_#000a] m-auto ${
            isCollapsed ? "col-span-1 col-start-2" : "  col-span-3 w-3/4 m-auto"
          } `}
          style={{
            transform: `scale(${logoScale})`,
          }}
          color="#fff"
        />

        <nav
          className={`h-full flex items-center m-auto  w-full ${
            isCollapsed ? "col-span-3  col-start-6" : "col-span-3  "
          }`}
        >
          <ul
            className={`grid grid-cols-3 w-full h-full gap-2
            m-auto`}
            style={{
              fontSize: `${navFontSize}px`,
            }}
          >
            {["reserva", "nosotros", "menu"].map((item) => (
              <li
                key={item}
                className={`flex items-center justify-center transition-all duration-700  hover:shadow-[0_0_0.25rem_0.25rem_#fff8_inset] h-2/3 m-auto ${
                  isCollapsed
                    ? " text-lg hover:shadow-[0_0_0.1rem_0.1rem_#fff2_inset] w-full"
                    : "text-3xl w-4/5 h-2/3 hover:shadow-[0_0_0.25rem_0.25rem_#fff8_inset]"
                }`}
              >
                <Link
                  href={`/${item}`}
                  className={`w-full text-shadow-[0_0_5px_#000e] text-center `}
                >
                  {item === "menu"
                    ? "Menú"
                    : item === "reserva"
                    ? "Reservas"
                    : "Sobre nosotros"}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
