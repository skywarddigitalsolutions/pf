import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-grisoscuro text-blanco p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-rojoprincipal">Toribio Profit</h3>
          <p>Tu tienda de confianza para suplementos deportivos de alta calidad.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-rojosecundario">Enlaces rápidos</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-rojoprincipal transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-rojoprincipal transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-rojoprincipal transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-rojoprincipal transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
                  <h3 className="text-xl font-semibold mb-4 text-rojosecundario">Síguenos en Redes Sociales</h3>
                  <div className="flex space-x-4">
                  <a
                      href="https://wa.me/+5491141468109?text=Hola,%20necesito%20asesoramiento%20sobre..."
                      className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <FaWhatsapp className="h-6 w-6 text-rojosecundario" />
                    </a>
                    <a
                      href="https://www.instagram.com/toribio.profit?igsh=NDVkc3RjOHBlOHRt"
                      target="_blank"
                      className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6 text-rojosecundario" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61575876922064&locale=es_LA"
                      target="_blank"
                      className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <Facebook className="h-6 w-6 text-rojosecundario" />
                    </a>
                  </div>
                </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025. Hecho por <a className="text-rojoprincipal" href="https://www.sds.com.ar" rel="noopener" target="_blank">Skyward Digital Solutions</a>. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

