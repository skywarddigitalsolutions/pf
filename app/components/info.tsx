import { BentoGrid, BentoItem } from "./bento-grid"
import { Dumbbell, Bolt, Shield, Star, MessageCircle, Lightbulb, BookOpen } from "lucide-react"
import { Button } from "@/app/components/button"
import { motion } from "framer-motion"

export function InfoSection() {
  return (
    <section className="py-20 px-4 bg-grisoscuro">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rojoprincipal">
          Potencia tu rendimiento con nuestro asesoramiento
        </h2>
        <BentoGrid>
          {/* Asesoramiento Personalizado */}
          <BentoItem gradient="primary" className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">¿No sabes qué suplemento elegir?</h3>
              <p className="mb-4">Te asesoramos según tus objetivos y te recomendamos el mejor plan de suplementación.</p>
              <Button
                variant="outline"
                className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
              >
                Contactar asesor <MessageCircle className="ml-2" />
              </Button>
            </motion.div>
          </BentoItem>

          {/* Tips y Consejos */}
          <BentoItem gradient="secondary">
            <h3 className="text-xl font-bold mb-4">Consejos para maximizar tus resultados</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Dumbbell className="text-rojoprincipal mr-2" />
                <span>Combina suplementos con una buena alimentación</span>
              </div>
              <div className="flex items-center">
                <Bolt className="text-rojoprincipal mr-2" />
                <span>El pre-entreno es más efectivo 30 min antes del ejercicio</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-rojoprincipal mr-2" />
                <span>La proteína post-entreno acelera la recuperación muscular</span>
              </div>
            </div>
          </BentoItem>

          {/* Testimonios */}
          <BentoItem gradient="dark">
            <h3 className="text-xl font-bold mb-4">Resultados que hablan por sí solos</h3>
            <div className="flex items-start mb-4">
              <Star className="text-rojoprincipal mr-2 shrink-0" />
              <p className="italic">
                {"Gracias al asesoramiento de ProtFit, logré definir mi cuerpo y mejorar mi resistencia."}
              </p>
            </div>
            <p className="text-right">- Lucas S., Entrenador Personal</p>
          </BentoItem>

          {/* Guía rápida sobre suplementos */}
          <BentoItem gradient="primary">
            <div className="flex items-center space-x-3">
              <BookOpen className="text-rojoprincipal" size={32} />
              <h3 className="text-xl font-bold">Guía rápida sobre suplementos</h3>
            </div>
            <p className="mt-2">Descubre qué suplemento es ideal para tu entrenamiento y objetivos.</p>
            <Button
              variant="outline"
              className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco mt-4"
            >
              Ver guía <Lightbulb className="ml-2" />
            </Button>
          </BentoItem>

          {/* Más sobre ProtFit */}
          <BentoItem gradient="secondary" className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Sobre ProtFit</h2>
            <p className="mb-4">
              Nos dedicamos a potenciar tu rendimiento con asesoramiento experto y los mejores suplementos del mercado.
            </p>
            <Button
              variant="outline"
              className="text-rojoprincipal border-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
            >
              Conoce nuestra historia
            </Button>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  )
}
