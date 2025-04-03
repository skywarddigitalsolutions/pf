"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { products } from "@/app/data/products"

export function CombosSection() {
  const [hoveredCombo, setHoveredCombo] = useState<string | null>(null)
  const router = useRouter()

  // Filtrar productos que son combos
  const combos = products.filter((product) => product.category === "Combos")

  return (
    <section className="py-20 bg-negro overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">Combos Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <motion.div
              key={combo.detail}
              className="relative h-80 cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCombo(combo.detail)}
              onHoverEnd={() => setHoveredCombo(null)}
              onClick={() => router.push(`/productos/${combo.detail}`)}
            >
              <Image
                src={combo.imageUrl || "/placeholder.svg"}
                alt={combo.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blanco">{combo.name}</h3>
                  <p className="text-blanco/80 mb-4">
                    {combo.description.length > 80 ? `${combo.description.substring(0, 80)}...` : combo.description}
                  </p>
                  <motion.div
                    className="text-rojoprincipal font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCombo === combo.detail ? 1 : 0 }}
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

