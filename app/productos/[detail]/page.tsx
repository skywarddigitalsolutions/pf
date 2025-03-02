"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Button } from "@/app/components/button"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

// Simulamos una base de datos de productos
const products = [
  {
    detail: "proteina-whey",
    name: "Proteína Whey",
    description:
      "Proteína de suero de leche de alta calidad para recuperación muscular. Ideal para después del entrenamiento, ayuda a la síntesis de proteínas musculares y favorece la recuperación.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Proteínas",
    objective: ["Masa muscular", "Recuperación"],
    price: 29.99,
    details: [
      "25g de proteína por porción",
      "Bajo en carbohidratos y grasas",
      "Contiene todos los aminoácidos esenciales",
      "Sabor delicioso y fácil de mezclar",
    ],
  },
  // ... Aquí irían el resto de los productos
]

export default function ProductDetail({ params }: { params: { detail: string } }) {
  const [product, setProduct] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const foundProduct = products.find((p) => p.detail === params.detail)
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      router.push("/productos")
    }
  }, [params.detail, router])

  if (!product) {
    return <div>Cargando...</div>
  }

  const handleBuyClick = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en comprar ${product.name}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
      <Navbar />
      <main className="flex-grow pt-20 px-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-rojoprincipal hover:text-rojosecundario"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2" /> Volver a productos
          </Button>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-rojoprincipal">{product.name}</h1>
              <p className="text-xl text-blanco/80">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <span className="text-rojosecundario font-semibold">{product.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.objective.map((obj: string) => (
                  <span key={obj} className="bg-rojoprincipal/20 text-rojoprincipal px-3 py-1 rounded-full text-sm">
                    {obj}
                  </span>
                ))}
              </div>
              <Button
                className="w-full bg-rojoprincipal hover:bg-rojosecundario text-blanco transition-colors duration-300"
                onClick={handleBuyClick}
              >
                <ShoppingCart className="mr-2" /> Comprar por WhatsApp
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-rojoprincipal mb-4">Detalles del producto</h2>
            <ul className="list-disc list-inside space-y-2 text-blanco/80">
              {product.details.map((detail: string, index: number) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

