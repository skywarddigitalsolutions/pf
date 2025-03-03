"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Button } from "@/app/components/button"
import { Input } from "@/app/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/select"
import { motion } from "framer-motion"
import Image from "next/image"
import { products } from "@/app/data/products"

const objectives = ["Todos", "Masa muscular", "Definición", "Recuperación", "Rendimiento", "Energía", "Salud general"]
const categories = ["Todos", "Proteínas", "Rendimiento", "Aminoácidos", "Energía", "Salud", "Combos"]

function ProductosContent() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedObjective, setSelectedObjective] = useState("Todos")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const router = useRouter()
  const searchParams = useSearchParams()

  const filterProducts = useCallback(() => {
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
  }, [searchTerm, selectedObjective, selectedCategory])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  useEffect(() => {
    const categoryParam = searchParams.get("categoria")
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8 text-center text-rojoprincipal">Nuestros Productos</h1>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal"
        />
        <Select value={selectedObjective} onValueChange={setSelectedObjective}>
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
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-blanco/80">No se encontraron productos que coincidan con tu búsqueda.</p>
          <Button
            className="mt-4 bg-rojoprincipal hover:bg-rojosecundario text-blanco"
            onClick={() => {
              setSearchTerm("")
              setSelectedObjective("Todos")
              setSelectedCategory("Todos")
            }}
          >
            Mostrar todos los productos
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.detail}
              className="bg-negro/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80">
                <Image
                  src={product.imageUrl}
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
                  <span className="text-sm font-semibold text-rojosecundario">Objetivos:</span>
                  <span className="text-lg font-bold text-blanco">${product.price}</span>
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
      )}
    </div>
  )
}

export default function Productos() {
  return (
    <Suspense fallback={<div className="text-center text-white">Cargando productos...</div>}>
      <Navbar />
      <main className="flex-grow pt-20 px-4 bg-negro pb-12">
        <ProductosContent />
      </main>
      <Footer />
    </Suspense>
  )
}
