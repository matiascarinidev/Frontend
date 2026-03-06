import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Restaurante Ejemplo</h3>
            <p className="text-gray-400">Calle Principal 123, Ciudad</p>
            <p className="text-gray-400">reservas@ejemplo.com</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="Whatsapp"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="Seguir en Instagram"
              >
                <Image
                  src="/public/instagram.svg"
                  alt="Instagram"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Restaurante Ejemplo. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
