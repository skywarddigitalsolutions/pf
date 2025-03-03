"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Dumbbell, Flame, Scale, Bolt, HeartPulse, RefreshCcw } from "lucide-react"
import { Button } from "./button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    icon: Dumbbell,
    title: "Desarrollo muscular",
    description: "Aumenta tu masa muscular con proteínas, creatina y aminoácidos esenciales.",
    filterValue: "Masa muscular",
  },
  {
    icon: Flame,
    title: "Quemar grasa",
    description: "Acelera tu metabolismo con quemadores, L-carnitina y CLA.",
    filterValue: "Definición",
  },
  {
    icon: Scale,
    title: "Bajar de peso",
    description: "Controla tu dieta con suplementos saciantes y termogénicos naturales.",
    filterValue: "Definición",
  },
  {
    icon: Bolt,
    title: "Energía",
    description: "Impulsa tu rendimiento con pre-entrenos, cafeína y BCAA.",
    filterValue: "Energía",
  },
  {
    icon: HeartPulse,
    title: "Resistencia y explosión",
    description: "Maximiza tu resistencia con electrolitos, citrulina y óxido nítrico.",
    filterValue: "Rendimiento",
  },
  {
    icon: RefreshCcw,
    title: "Recuperación muscular",
    description: "Reduce la fatiga con glutamina, magnesio y proteínas de rápida absorción.",
    filterValue: "Recuperación",
  },
]

export function Objetivos() {
  const router = useRouter()

  const handleObjetivoClick = (filterValue: string) => {
    router.push(`/productos?objetivo=${encodeURIComponent(filterValue)}`)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">¿Qué estás buscando?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-grisoscuro p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleObjetivoClick(item.filterValue)}
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(211, 47, 47, 0.3)",
                borderColor: "#D32F2F",
              }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="text-rojoprincipal mr-3" size={28} />
                <h3 className="text-xl font-bold text-blanco">{item.title}</h3>
              </div>
              <p className="text-blanco/80 mb-4">{item.description}</p>
              
            </motion.div>
          ))}
        </div>
        <div className="text-center py-12">
          <Link href="/productos">
            <Button
              variant="outline"
              size="lg"
              className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
            >
              Ver todos los productos <ArrowDown className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

