"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Inicio")

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-negro/30 backdrop-blur-md rounded-full p-2">
      <ul className="flex space-x-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="relative block px-4 py-2 text-blanco hover:text-rojoprincipal transition-colors"
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
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
          </li>
        ))}
      </ul>
    </nav>
  )
}

