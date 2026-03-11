import { ReactNode } from "react";
import Link from "next/link";

export default function MenuLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <div className=" bg-black p-4">
        {/* Navegación entre categorías */}
        <nav className="flex justify-center gap-4">
          {["general", "celiaco", "vegetariano", "vegano"].map((category) => (
            <Link
              key={category}
              href={`/menu/${category}`}
              className="px-4 py-2 bg-transparent border-2  text-white rounded-lg capitalize hover:bg-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </>
  );
}
