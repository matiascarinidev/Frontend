"use client";
import { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/landing/Footer";
import { Provider } from "react-redux";
import { store } from "@/components/reservas/store/store";

export default function ReservaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <header>
        <nav className="flex justify-center gap-4 p-4 bg-black">
          {["", "nosotros", "menu"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="px-4 py-2 bg-black text-white rounded-lg capitalize hover:bg-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
            >
              {page === "" ? "inicio" : page}
            </Link>
          ))}
        </nav>
      </header>
      <main className="bg-[url('/images/hero/vacio-al-asador.jpg')] bg-cover bg-center min-h-screen p-12">
        <section className="min-h-[100vh] w-1/2 mx-auto bg-[#fffa] backdrop-blur-sm p-12">
          <div className=" flex flex-col w-full h-full text-black">
            <h2 className="font-semibold text-3xl text-center py-2">
              Realiza tu reserva o comunicate con nosotros
            </h2>
            <p className="max-w-[600px] mx-auto p-2">
              AVISO! Es necesario reailzar una seña que consiste en un pago
              simbólico...etc. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis laborum temporibus sequi repudiandae,
              libero, natus quia culpa maiores eos repellat facere at
              laboriosam? Quisquam nulla, perferendis cumque voluptates
              molestias ullam.
            </p>
          </div>
          <Provider store={store}>{children}</Provider>
        </section>
      </main>

      <Footer />
    </>
  );
}
