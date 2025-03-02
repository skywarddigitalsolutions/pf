"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Button } from "@/app/components/button"
import { Input } from "@/app/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/select"
import { motion } from "framer-motion"
import Image from "next/image"
import { products } from "@/app/data/products" // Importamos la lista de productos

/*
const products = [
  {
    detail: "proteina-whey",
    name: "Proteína Whey",
    description: "Proteína de suero de leche de alta calidad para recuperación muscular.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Proteínas",
    objective: ["Masa muscular", "Recuperación"],
    price: 29.99,
  },
  {
    detail: "creatina-monohidrato",
    name: "Creatina Monohidrato",
    description: "Suplemento para mejorar el rendimiento y la fuerza muscular.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Rendimiento",
    objective: ["Fuerza", "Rendimiento"],
    price: 19.99,
  },
  {
    detail: "bcaa-en-polvo",
    name: "BCAA en polvo",
    description: "Aminoácidos de cadena ramificada para favorecer la recuperación.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Aminoácidos",
    objective: ["Recuperación", "Resistencia"],
    price: 24.99,
  },
  {
    detail: "pre-entreno",
    name: "Pre-entreno",
    description: "Fórmula energética para maximizar tu rendimiento durante el entrenamiento.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Energía",
    objective: ["Rendimiento", "Energía"],
    price: 34.99,
  },
  {
    detail: "multivitaminico",
    name: "Multivitamínico",
    description: "Complejo de vitaminas y minerales para una salud óptima.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Salud",
    objective: ["Salud general"],
    price: 14.99,
  },
  {
    detail: "omega-3",
    name: "Omega-3",
    description: "Ácidos grasos esenciales para la salud cardiovascular y cerebral.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Salud",
    objective: ["Salud general", "Recuperación"],
    price: 22.99,
  },
  {
    detail: "combo-masa-muscular",
    name: "Combo Masa Muscular",
    description: "Pack completo para ganar masa muscular: Proteína Whey + Creatina + BCAA",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Combos",
    objective: ["Masa muscular"],
    price: 69.99,
  },
  {
    detail: "combo-definicion",
    name: "Combo Definición",
    description: "Pack para definición muscular: Proteína Isolate + Quemador de grasa + L-Carnitina",
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "Combos",
    objective: ["Definición"],
    price: 79.99,
  },
]
*/
const objectives = ["Todos", "Masa muscular", "Definición", "Recuperación", "Rendimiento", "Energía", "Salud general"]
const categories = ["Todos", "Proteínas", "Rendimiento", "Aminoácidos", "Energía", "Salud", "Combos"]

export default function Productos() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedObjective, setSelectedObjective] = useState("Todos")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const router = useRouter()

  const filterProducts = () => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedObjective !== "Todos") {
      filtered = filtered.filter((product) => product.objective.includes(selectedObjective))
    }

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
      <Navbar />
      <main className="flex-grow pt-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-rojoprincipal">Nuestros Productos</h1>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                filterProducts()
              }}
              className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal"
            />
            <Select
              onValueChange={(value) => {
                setSelectedObjective(value)
                filterProducts()
              }}
            >
              <SelectTrigger className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal">
                <SelectValue placeholder="Filtrar por objetivo" />
              </SelectTrigger>
              <SelectContent>
                {objectives.map((objective) => (
                  <SelectItem key={objective} value={objective}>
                    {objective}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => {
                setSelectedCategory(value)
                filterProducts()
              }}
            >
              <SelectTrigger className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.detail}
                className="bg-negro/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-rojoprincipal">{product.name}</h3>
                  <p className="text-sm mb-4 text-blanco/80">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-rojosecundario">{product.category}</span>
                    <span className="text-lg font-bold text-blanco">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.objective.map((obj) => (
                      <span key={obj} className="text-xs bg-rojoprincipal/20 text-rojoprincipal px-2 py-1 rounded-full">
                        {obj}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-rojoprincipal hover:bg-rojosecundario text-blanco transition-colors duration-300"
                    onClick={() => router.push(`/productos/${product.detail}`)}
                  >
                    Ver detalles
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

