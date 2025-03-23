"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { Button } from "@/app/components/button"
import { ArrowLeft, ShoppingCart, Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/app/data/products"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/accordion"

export default function ProductDetail() {
  const params = useParams()
  const detail = params?.detail as string
  const [product, setProduct] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!detail) return

    const foundProduct = products.find((p) => p.detail === detail)
    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedImage(foundProduct.imageUrl)

  

      setTimeout(() => setIsLoading(false), 500) // Simular carga
    } else {
      router.push("/productos")
    }
     }, [detail, router])

  const handleBuyClick = () => {
    if (!product) return

    const message = encodeURIComponent(
      `Hola, estoy interesado en comprar ${product.name}. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-32 w-32 bg-rojoprincipal/20 rounded-full flex items-center justify-center">
              <ShoppingCart className="h-16 w-16 text-rojoprincipal/40" />
            </div>
            <p className="mt-4 text-xl text-blanco/80">Cargando producto...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-rojoprincipal mb-4">Producto no encontrado</h2>
            <p className="text-blanco/80 mb-6">Lo sentimos, el producto que buscas no está disponible.</p>
            <Button
              onClick={() => router.push("/productos")}
              className="bg-rojoprincipal hover:bg-rojosecundario text-blanco"
            >
              Ver todos los productos
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Reemplazar la definición de additionalImages con las imágenes del producto
  const additionalImages = product.images || [product.imageUrl]

  // Si el producto no tiene imágenes adicionales, puedes añadir placeholders
  

  // Datos para los acordeones (simulados)
 

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
      <Navbar />
      <main className="flex-grow pt-20 px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              className="text-rojoprincipal hover:text-rojosecundario hover:bg-rojoprincipal/10 transition-all"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a productos
            </Button>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Galería de imágenes */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-grisoscuro/50 shadow-xl">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain aspect-square p-4"
                />
                <div className="absolute top-4 left-4 bg-rojoprincipal text-blanco text-xs font-bold px-2 py-1 rounded-full">
                  En stock
                </div>
              </div>

              {/* Miniaturas */}
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {additionalImages.map((img:string, index:string) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img ? "border-rojoprincipal" : "border-transparent hover:border-rojosecundario"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Vista ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Información del producto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-rojosecundario bg-rojosecundario/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-rojoprincipal mb-3">{product.name}</h1>
                <p className="text-lg text-blanco/80 leading-relaxed mb-6">{product.description}</p>

                {/* Acordeones */}
                <div className="mb-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="modo-de-uso" className="border-b border-grisoscuro">
                      <AccordionTrigger className="text-rojoprincipal hover:text-blanco  py-4">
                        Modo de Uso
                      </AccordionTrigger>
                      <AccordionContent className="text-blanco/80">
                        <ul className="space-y-2">
                          {product.modoDeUso.map((item:string, index:string) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-rojoprincipal mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="beneficios" className="border-b border-grisoscuro">
                      <AccordionTrigger className="text-rojoprincipal hover:text-blanco py-4">
                        Beneficios
                      </AccordionTrigger>
                      <AccordionContent className="text-blanco/80">
                        <ul className="space-y-2">
                          {product.beneficios.map((item:string, index:string) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-rojoprincipal mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ingredientes" className="border-b border-grisoscuro">
                      <AccordionTrigger className="text-rojoprincipal hover:text-blanco text-none py-4">
                        Ingredientes
                      </AccordionTrigger>
                      <AccordionContent className="text-blanco/80">
                        <ul className="space-y-2">
                          {product.ingredientes.map((item:string, index:string) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-rojoprincipal mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-b border-blanco/10">
                <span className="text-3xl font-bold">${product.price && product.price[0]}</span>
                <div className="flex items-center text-green-500">
                  <Check className="mr-1 h-5 w-5" />
                  <span>Disponible</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Objetivos:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.objective.map((obj: string) => (
                    <span
                      key={obj}
                      className="bg-rojoprincipal/20 text-rojoprincipal px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full bg-rojoprincipal hover:bg-rojosecundario text-blanco transition-colors duration-300 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-rojoprincipal/20 hover:shadow-xl"
                  onClick={handleBuyClick}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Comprar por WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Detalles del producto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-grisoscuro/30 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-rojoprincipal mb-6">Detalles del producto</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.details &&
                product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-rojoprincipal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blanco/90">{detail}</span>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Productos relacionados */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-rojoprincipal mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {products
                .filter((item) => item.detail !== detail && item.category === product.category)
                .slice(0, 4)
                .map((item, index) => (
                  <Link
                    href={`/productos/${item.detail}`}
                    key={index}
                    className="bg-grisoscuro/50 rounded-lg p-4 transition-transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="aspect-square relative mb-2 overflow-hidden rounded-lg">
                      <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-sm font-medium text-blanco truncate">{item.name}</h3>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

