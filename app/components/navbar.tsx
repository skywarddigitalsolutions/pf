"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "Productos",
    href: "/productos",
    hasSubmenu: true,
    submenu: [
      { name: "Proteínas", href: "/productos?categoria=Proteínas" },
      { name: "Aminoácidos", href: "/productos?categoria=Aminoácidos" },
      { name: "Creatina", href: "/productos?categoria=Creatina" },
      { name: "Termogénicos", href: "/productos?categoria=Termogénicos" },
      { name: "Pre entreno", href: "/productos?categoria=Pre%20entreno" },
      { name: "Vitaminas y Minerales", href: "/productos?categoria=Vitaminas%20y%20Minerales" },
      { name: "Salud", href: "/productos?categoria=Salud" },
      { name: "Ganadores de masa", href: "/productos?categoria=Ganadores%20de%20masa" },
      { name: "Combos", href: "/productos?categoria=Combos" },
      { name: "Todos los productos", href: "/productos" },
    ],
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileSubmenu = (itemName: string) => {
    if (expandedMobileItem === itemName) {
      setExpandedMobileItem(null);
    } else {
      setExpandedMobileItem(itemName);
    }
  };

  return (
    <>
      {/* Menú escritorio */}
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
                className={`relative block px-4 py-2 rounded-full text-center transition-colors ${
                  isActive(item.href) ? "text-rojoprincipal" : "text-blanco hover:text-rojoprincipal"
                }`}
              >
                <div className="flex items-center justify-center">
                  {item.name}
                  {item.hasSubmenu && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        hoverItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {isActive(item.href) && (
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

              {/* Submenu escritorio */}
              {item.hasSubmenu && hoverItem === item.name && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-48 bg-negro/90 backdrop-blur-md rounded-xl overflow-hidden shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="py-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-blanco hover:bg-grisoscuro hover:text-rojoprincipal transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          className="bg-negro/30 backdrop-blur-md p-2 rounded-full text-blanco"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Logo mobile */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Link href="/" className="text-rojoprincipal font-bold text-xl">
          Toribio Profit
        </Link>
      </div>

      {/* Menú mobile */}
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
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block w-full text-xl font-medium py-3 px-4 rounded-md text-left transition-colors ${
                        isActive(item.href) ? "text-rojoprincipal" : "text-blanco hover:text-rojoprincipal"
                      }`}
                      onClick={() => {
                        if (!item.hasSubmenu) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        {item.hasSubmenu && (
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              expandedMobileItem === item.name ? "rotate-180" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMobileSubmenu(item.name);
                            }}
                          />
                        )}
                      </div>
                    </Link>

                    {/* Submenu mobile */}
                    {item.hasSubmenu && expandedMobileItem === item.name && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="pl-6 py-2 space-y-2 bg-grisoscuro/30 rounded-lg mt-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="block py-2 px-3 text-blanco/80 hover:text-rojoprincipal rounded-md transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
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
  );
}
