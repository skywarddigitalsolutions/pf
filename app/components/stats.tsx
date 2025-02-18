"use client"

import { motion } from "framer-motion"
import { Dumbbell, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const highlights = [
  {
    icon: Dumbbell,
    title: "Proteína Whey",
    description: "Recuperación muscular de primera calidad",
  },
  {
    icon: Zap,
    title: "Pre-entreno",
    description: "Energía explosiva para tus sesiones",
  },
  {
    icon: Shield,
    title: "Multivitamínicos",
    description: "Protege tu salud y optimiza tu rendimiento",
  },
]

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">
          Nuestros Logros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-grisoscuro p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="text-rojoprincipal mr-3" size={24} />
                <h3 className="text-xl font-bold text-blanco">{item.title}</h3>
              </div>
              <p className="text-blanco/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
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
      </div>
    </section>
    
  )
}

