"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"

const combos = [
  {
    name: "Combo Fuerza",
    description: "Ideal para ganar masa muscular",
    image: "/proteina.jpg",
    route: "/combos/fuerza",
  },
  {
    name: "Combo Energía",
    description: "Potencia tu rendimiento",
    image: "/creatina.webp",
    route: "/combos/energia",
  },
  {
    name: "Combo Salud",
    description: "Mejora tu bienestar general",
    image: "/creatina.webp",
    route: "/combos/salud",
  },
]

export function CombosSection() {
  const [hoveredCombo, setHoveredCombo] = useState<string | null>(null)
  const router = useRouter()

  return (
    <section className="py-20 bg-negro overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">Combos Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <motion.div
              key={combo.name}
              className="relative h-80 cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCombo(combo.name)}
              onHoverEnd={() => setHoveredCombo(null)}
              onClick={() => router.push(combo.route)}
            >
              <Image
                src={combo.image || "/placeholder.svg"}
                alt={combo.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blanco">{combo.name}</h3>
                  <p className="text-blanco/80 mb-4">{combo.description}</p>
                  <motion.div
                    className="text-rojoprincipal font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCombo === combo.name ? 1 : 0 }}
                  >
                    Ver detalles →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

