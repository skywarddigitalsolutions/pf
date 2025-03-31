"use client"

import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Objetivos } from "./components/objetivos"
import { InfoSection } from "./components/info"
import { Footer } from "./components/footer"
import { ProductosDestacados } from "./components/productos-destacados"
import { CombosSection } from "./components/combos"
import { Contacto } from "./components/contacto"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-negro text-blanco">
      <Navbar />
      <Hero />
      <Objetivos />
      <ProductosDestacados />
      <InfoSection />
      <CombosSection/>
      <Contacto />
      <Footer />
    </div>
  )
}

