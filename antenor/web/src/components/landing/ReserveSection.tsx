import React from "react";
export default function ReserveSection() {
  return (
    <section
      className="min-h-[70vh] relative text-white "
      style={{
        background: `url("/images/hero/fire.jpg") center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 bg-[#0009] flex backdrop-blur-xs">
        <div className="w-full h-full grid grid-cols-2 gap-6 p-12">
          <div className="col-span-2 text-center p-4">
            <h2
              className="text-6xl font-semibold mb-4 mt-2 text-shadow-lg"
              style={{ fontFamily: "var(--font-bodoni)" }}
            >
              VENI A VIVIR LA EXPERIENCIA ANTENOR
            </h2>
            <h3 className="text-3xl text-shadow-lg">
              Hace tu reserva para este fin de semana
            </h3>
          </div>
          <div className="border-1 grid grid-cols-4 gap-4 col-span-2">
            <div className="border-1">Jueves</div>
            <div className="border-1">Viernes</div>
            <div className="border-1">Sábado</div>
            <div className="border-1">Domingo</div>
          </div>
          <div className="flex flex-col items-center pt-6 col-span-2 gap-6">
            <h2 id="contact-heading" className="text-2xl text-shadow-lg ">
              Contáctanos a través de
            </h2>
            <div className=" flex gap-6 m-auto ">
              <button className="bg-black hover:bg-white active:bg-gray-800 text-white hover:text-black py-3 px-6 mr-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 text-2xl">
                <a
                  href="https://wa.me/+5492324558667"
                  target="_blank"
                  className="text-2xl text-shadow-lg"
                >
                  WhatsApp
                </a>
              </button>
              <p className="text-2xl m-auto">o</p>
              <button className="bg-white hover:bg-black active:bg-gray-800 text-black hover:text-white py-3 px-6 mr-auto rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transform hover:-translate-y-1 active:translate-y-0 text-2xl">
                Reserva ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
