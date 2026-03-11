import Link from "next/link";
import Image from "next/image";
import { AmbientIcon, GeneralMenu, TravelersChoice } from "@/lib/TypeIcons";
import LogoAntenor from "../LogoAntenor";
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="grid grid-cols-3 grid-rows-1 bg-white text-black m-auto items-stretch px-18 py-20"
    >
      <Image
        src="/images/about/chef.png"
        alt="Parrilla de antenor con carne en proceso de cocción"
        width={800}
        height={600}
        className="object-cover"
        quality={90}
      />
      <div className="flex flex-col justify-center gap-6 items-center col-span-2">
        <LogoAntenor color="#000" style={{ height: "150px" }} />
        <p className="px-18 text-lg text-center">
          Antenor es un restaurante de campo, un verdadero asador, localizado en
          el hermoso pueblo gastronómico de Tomás Jofré, a una hora de la Ciudad
          de Buenos Aires. Ofrecemos un menú libre con Entrada, parrilla,
          pastas, postre y merienda.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <TravelersChoice size="h-[70px]" />
          <div>
            <h3 className="font-bold text-3xl">
              Premio Travellers&apos; Choice
            </h3>
            <h4 className="text-3xl">2024</h4>
          </div>
        </div>
        <div className="flex gap-8 mt-4">
          <div className="flex gap-4 justify-center">
            <Link
              href="/menu"
              className="rounded-2xl h-32 w-32 font-bold hover:shadow-2xl hover:scale-[1.1] transition-all duration-200 flex flex-col items-center justify-center gap-4"
            >
              <GeneralMenu size="h-[70px]" />
              Menu
            </Link>
          </div>
          <div className="flex gap-8 justify-center ">
            <Link
              href="/ambientes"
              className="rounded-2xl h-32 w-32 font-bold hover:shadow-2xl hover:scale-[1.1] transition-all duration-200 flex flex-col items-center justify-center gap-4"
            >
              <AmbientIcon size="h-[70px]" />
              Ambientes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
