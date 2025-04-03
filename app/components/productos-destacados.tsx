"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products } from "@/app/data/products"
import Link from "next/link"

export function ProductosDestacados() {
  // Seleccionar solo 4 productos para mostrar como destacados
  // Puedes ajustar esta lógica según tus necesidades (por ejemplo, agregar una propiedad "destacado" en products.ts)
  const productosDestacados = products.slice(0, 4)

  return (
    <section className="py-20 bg-grisoscuro">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productosDestacados.map((product, index) => (
            <motion.div
              key={product.detail}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-rojoprincipal rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-negro p-6 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-72 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blanco">{product.name}</h3>
                <p className="text-blanco/80 mb-4">
                  {product.description.length > 70
                    ? `${product.description.substring(0, 70)}...`
                    : product.description}
                </p>
                <Link
                  href={`/productos/${product.detail}`}
                  className="text-rojoprincipal hover:text-rojosecundario transition-colors duration-300 flex items-center"
                >
                  Ver detalles <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

