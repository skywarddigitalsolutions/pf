"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Proteína Whey",
    description: "Recuperación muscular de primera",
    image: "/proteina.jpg",
  },
  {
    name: "Pre-entreno",
    description: "Energía explosiva para tus sesiones",
    image: "/prewar.png",
  },
  {
    name: "BCAA",
    description: "fdfd",
    image: "/creatina.webp",
  },
  { name: "Creatina", 
    description: "Potencia tu fuerza y rendimiento", 
    image: "/proteina2.webp" },
]

export function ProductosDestacados() {
  return (
    <section className="py-20 bg-grisoscuro">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-rojoprincipal rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-negro p-6 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-72 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blanco">{product.name}</h3>
                <p className="text-blanco/80 mb-4">{product.description}</p>
                <button className="text-rojoprincipal hover:text-rojosecundario transition-colors duration-300 flex items-center">
                  Ver detalles <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

