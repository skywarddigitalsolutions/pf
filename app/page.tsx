"use client"

import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Stats } from "./components/stats"
import { InfoSection } from "./components/info"
import { Footer } from "./components/footer"
import { ProductosDestacados } from "./components/productos-destacados"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-negro text-blanco">
      <Navbar />
      <Hero />
      <Stats />
      <InfoSection />
      <ProductosDestacados />
      <Footer />
    </div>
  )
}

