import { Navbar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { BentoGrid, BentoItem } from "@/app/components/bento-grid"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    name: "Proteína Whey",
    description: "Proteína de suero de leche de alta calidad para recuperación muscular.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "primary",
  },
  {
    name: "Creatina Monohidrato",
    description: "Suplemento para mejorar el rendimiento y la fuerza muscular.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "secondary",
  },
  {
    name: "BCAA en polvo",
    description: "Aminoácidos de cadena ramificada para favorecer la recuperación.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "dark",
  },
  {
    name: "Pre-entreno",
    description: "Fórmula energética para maximizar tu rendimiento durante el entrenamiento.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "primary",
  },
  {
    name: "Multivitamínico",
    description: "Complejo de vitaminas y minerales para una salud óptima.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "secondary",
  },
  {
    name: "Omega-3",
    description: "Ácidos grasos esenciales para la salud cardiovascular y cerebral.",
    imageUrl: "/placeholder.svg?height=200&width=200",
    gradient: "dark",
  },
]

export default function Productos() {
  return (
    <div className="flex flex-col min-h-screen bg-negro text-blanco">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-rojoprincipal">Nuestros Productos</h1>
          <BentoGrid>
            {products.map((product, index) => (
              <BentoItem key={index} gradient={product.gradient as "primary" | "secondary" | "dark"}>
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-rojoprincipal">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <Button className="w-full bg-rojoprincipal hover:bg-rojosecundario text-blanco">Ver detalles</Button>
              </BentoItem>
            ))}
          </BentoGrid>
        </div>
      </main>
      <Footer />
    </div>
  )
}

