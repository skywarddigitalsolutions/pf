"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "Productos",
    href: "/productos",
    hasSubmenu: true,
    submenu: [
      { name: "Proteínas", href: "/productos?categoria=Proteínas" },
      { name: "Rendimiento", href: "/productos?categoria=Rendimiento" },
      { name: "Aminoácidos", href: "/productos?categoria=Aminoácidos" },
      { name: "Energía", href: "/productos?categoria=Energía" },
      { name: "Salud", href: "/productos?categoria=Salud" },
      { name: "Combos", href: "/productos?categoria=Combos" },
    ],
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Inicio")
  const [hoverItem, setHoverItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    

    // Limpiar el body overflow cuando se abre/cierra el menú móvil
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const toggleMobileSubmenu = (itemName: string) => {
    if (expandedMobileItem === itemName) {
      setExpandedMobileItem(null)
    } else {
      setExpandedMobileItem(itemName)
    }
  }

  return (
    <>
      {/* Menú de escritorio */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-negro/30 backdrop-blur-md rounded-full p-2 hidden md:block">
        <ul className="flex space-x-1">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setHoverItem(item.name)}
              onMouseLeave={() => setHoverItem(null)}
            >
              <Link
                href={item.href}
                className="relative flex items-center px-4 py-2 text-blanco hover:text-rojoprincipal transition-colors"
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
                {item.hasSubmenu && (
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      hoverItem === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
                {activeItem === item.name && (
                  <motion.div
                    className="absolute inset-0 bg-grisoscuro rounded-full z-[-1]"
                    layoutId="navbar-active"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>

              {/* Submenu en hover (solo escritorio) */}
              {item.hasSubmenu && (
                <AnimatePresence>
                  {hoverItem === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 bg-negro/90 backdrop-blur-md rounded-xl overflow-hidden shadow-lg z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="py-2">
                        {item.submenu?.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-blanco hover:bg-grisoscuro hover:text-rojoprincipal transition-colors"
                              onClick={() => setActiveItem(item.name)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de menú móvil */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          className="bg-negro/30 backdrop-blur-md p-2 rounded-full text-blanco"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Logo en móvil */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Link href="/" className="text-rojoprincipal font-bold text-xl">
          Toribio Protfit
        </Link>
      </div>

      {/* Menú móvil mejorado */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-negro z-40 md:hidden overflow-auto pt-16"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-grisoscuro pb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`text-xl font-medium py-2 ${
                          activeItem === item.name ? "text-rojoprincipal" : "text-blanco"
                        }`}
                        onClick={() => {
                          setActiveItem(item.name)
                          if (!item.hasSubmenu) {
                            setIsMobileMenuOpen(false)
                          }
                        }}
                      >
                        {item.name}
                      </Link>

                      {item.hasSubmenu && (
                        <button
                          className="p-2 text-blanco"
                          onClick={() => toggleMobileSubmenu(item.name)}
                          aria-label={expandedMobileItem === item.name ? "Cerrar submenu" : "Abrir submenu"}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              expandedMobileItem === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu en móvil */}
                    {item.hasSubmenu && (
                      <AnimatePresence>
                        {expandedMobileItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="pl-4 py-2 space-y-2 bg-grisoscuro/30 rounded-lg mt-2">
                              {item.submenu?.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 px-3 text-blanco/80 hover:text-rojoprincipal rounded-md transition-colors"
                                    onClick={() => {
                                      setActiveItem(item.name)
                                      setIsMobileMenuOpen(false)
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

