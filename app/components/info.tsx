import { BentoGrid, BentoItem } from "./bento-grid"
import Image from "next/image"
import { Dumbbell, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/app/components/button"

export function InfoSection() {
  return (
    <section className="py-20 px-4 bg-grisoscuro">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">Descubre Suplementos</h2>
        <BentoGrid>
          <BentoItem gradient="primary" className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">Proteína Whey</h3>
            <p className="mb-4">Recuperación muscular de primera calidad</p>
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Proteína Whey"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </BentoItem>
          <BentoItem gradient="secondary">
            <h3 className="text-xl font-bold mb-4">Beneficios</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Dumbbell className="text-rojoprincipal mr-2" />
                <span>Aumenta tu fuerza</span>
              </div>
              <div className="flex items-center">
                <Zap className="text-rojoprincipal mr-2" />
                <span>Mejora tu energía</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-rojoprincipal mr-2" />
                <span>Protege tu salud</span>
              </div>
            </div>
          </BentoItem>
          <BentoItem gradient="dark">
            <h3 className="text-xl font-bold mb-4">Lo que dicen nuestros clientes</h3>
            <div className="flex items-start mb-4">
              <Star className="text-rojoprincipal mr-2 shrink-0" />
              <p className="italic">
                "Los suplementos de protfit han transformado mi rutina de entrenamiento. ¡Increíbles resultados!"
              </p>
            </div>
            <p className="text-right">- María G., atleta amateur</p>
          </BentoItem>
          <BentoItem gradient="primary" className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Sobre protfit</h2>
            <p className="mb-4">
              Somos apasionados por ayudarte a alcanzar tus metas fitness con los mejores suplementos del mercado.
            </p>
            <Button
              variant="outline"
              className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
            >
              Conoce más sobre nosotros
            </Button>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  )
}

