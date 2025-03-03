import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-grisoscuro text-blanco p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-rojoprincipal">Toribio</h3>
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
          <h4 className="text-lg font-semibold mb-4 text-rojosecundario">Contacto</h4>
          <p>Calle Ejemplo, 123</p>
          <p>Ciudad, País</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@protfit.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025. Hecho por Skyward Digital Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

