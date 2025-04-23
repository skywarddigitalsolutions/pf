import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-grisoscuro text-blanco p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-bold mb-4 text-rojoprincipal">
            Toribio Profit
          </h3>
          <p>
            Tu tienda de confianza para suplementos deportivos de alta calidad.
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-rojoprincipal transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/productos"
                className="hover:text-rojoprincipal transition-colors"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="hover:text-rojoprincipal transition-colors"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="hover:text-rojoprincipal transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          
          <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-4 text-rojosecundario">
            Seguínos en nuestras redes sociales
          </h3>
          <div className="flex">
          <a
              href="#"
              className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
            >
              <Phone className="h-6 w-6 text-rojosecundario" />
            </a>
            <a
              href="https://www.instagram.com/toribio.profit?igsh=NDVkc3RjOHBlOHRt"
              className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
            >
              <Instagram className="h-6 w-6 text-rojosecundario" />
            </a>
            <a
              href="#"
              className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
            >
              <Facebook className="h-6 w-6 text-rojosecundario" />
            </a>
          </div>
            
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>
          &copy; 2025. Hecho por{" "}
          <a
            className="text-rojoprincipal"
            href="https://www.sds.com.ar"
            rel="noopener"
            target="_blank"
          >
            Skyward Digital Solutions
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
