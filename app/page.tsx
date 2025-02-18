"use client"

import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { InfoSection } from "./components/info"
import { Footer } from "./components/footer"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-negro text-blanco">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="text-center py-12">
          <Button
            variant="outline"
            size="lg"
            className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
            onClick={() => {
              document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Descubre más <ArrowDown className="ml-2" />
          </Button>
        </div>
        <div id="info-section">
          <InfoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

