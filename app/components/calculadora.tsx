"use client"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { ArrowRight, Dumbbell, Zap, Target } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Definimos un objeto con los enlaces a los productos
const productLinks = {
  "Proteína Whey": "/productos/proteina-whey",
  "Proteína Isolate": "/productos/proteina-isolate",
  Creatina: "/productos/creatina",
  BCAA: "/productos/bcaa",
  "Bajador de peso": "/productos/bajador-de-peso",
  "Quemador de grasa": "/productos/quemador-de-grasa",
  "L-Carnitina": "/productos/l-carnitina",
  "Pre-entreno": "/productos/pre-entreno",
  Multivitamínico: "/productos/multivitaminico",
  Calcio: "/productos/calcio",
}

export function CalculadoraSection() {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [edad, setEdad] = useState("")
  const [genero, setGenero] = useState("")
  const [objetivo, setObjetivo] = useState("")
  const [recomendacion, setRecomendacion] = useState<string[]>([])

  const calcularIMC = () => {
    const pesoNum = Number.parseFloat(peso)
    const alturaNum = Number.parseFloat(altura) / 100 // convertir cm a m
    if (pesoNum && alturaNum) {
      return pesoNum / (alturaNum * alturaNum)
    }
    return null
  }

  const handleCalcular = () => {
    const imc = calcularIMC()
    let resultado: string[] = []

    if (imc === null) {
      setRecomendacion(["Por favor, ingresa todos los datos requeridos."])
      return
    }

    if (imc > 30) {
      resultado = ["Bajador de peso", "Proteína Isolate"]
    } else if (imc < 18.5) {
      resultado = ["Proteína Whey", "Creatina"]
    } else {
      if (objetivo === "masa") resultado = ["Proteína Whey", "Creatina", "BCAA"]
      if (objetivo === "definicion") resultado = ["Proteína Isolate", "Quemador de grasa", "L-Carnitina"]
      if (objetivo === "energia") resultado = ["Pre-entreno", "Creatina", "BCAA"]
    }

    // Ajustes basados en edad y género
    if (Number.parseInt(edad) > 50) {
      resultado.push("Multivitamínico")
    }
    if (genero === "femenino") {
      resultado.push("Calcio")
    }

    setRecomendacion(resultado)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-grisoscuro to-negro relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5"></div>
      <motion.div
        className="container mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-rojoprincipal mb-8 text-center">
          Calculadora de Suplementos
          <span className="block text-2xl md:text-3xl text-blanco mt-2">Personalizada para Ti</span>
        </h2>
        <p className="text-blanco/80 max-w-2xl mx-auto mb-12 text-center text-lg">
          Ingresa tus datos para recibir una recomendación de suplementos adaptada a tus necesidades específicas.
        </p>

        <div className="bg-negro/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="peso" className="text-blanco text-lg flex items-center">
                <Dumbbell className="mr-2 text-rojoprincipal" size={20} />
                Peso (kg)
              </Label>
              <Input
                id="peso"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal transition-all duration-300"
              />
            </motion.div>
            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="altura" className="text-blanco text-lg flex items-center">
                <Zap className="mr-2 text-rojoprincipal" size={20} />
                Altura (cm)
              </Label>
              <Input
                id="altura"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal transition-all duration-300"
              />
            </motion.div>
            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="edad" className="text-blanco text-lg flex items-center">
                <Target className="mr-2 text-rojoprincipal" size={20} />
                Edad
              </Label>
              <Input
                id="edad"
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal transition-all duration-300"
              />
            </motion.div>
            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="genero" className="text-blanco text-lg">
                Género
              </Label>
              <Select onValueChange={setGenero}>
                <SelectTrigger className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal transition-all duration-300">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="femenino">Femenino</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div
              className="space-y-4 md:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="objetivo" className="text-blanco text-lg">
                Objetivo
              </Label>
              <Select onValueChange={setObjetivo}>
                <SelectTrigger className="bg-negro/50 text-blanco border-rojoprincipal/50 focus:border-rojoprincipal transition-all duration-300">
                  <SelectValue placeholder="Selecciona tu objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masa">Ganar Masa Muscular</SelectItem>
                  <SelectItem value="definicion">Definir y Perder Grasa</SelectItem>
                  <SelectItem value="energia">Aumentar Energía</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>
          <motion.div className="flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full md:w-auto px-8 py-3 text-lg bg-rojoprincipal text-blanco border-none hover:bg-rojosecundario transition-all duration-300"
              onClick={handleCalcular}
            >
              Calcular mi Plan <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>

        {recomendacion.length > 0 && (
          <motion.div
            className="mt-12 text-blanco text-lg font-semibold p-6 bg-negro/70 backdrop-blur-md rounded-3xl shadow-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-rojoprincipal mb-4 text-2xl">Tu Plan Personalizado:</h3>
            <ul className="list-disc list-inside space-y-2">
              {recomendacion.map((producto, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {productLinks[producto as keyof typeof productLinks] ? (
                    <Link
                      href={productLinks[producto as keyof typeof productLinks]}
                      className="text-blanco/90 hover:text-rojoprincipal transition-colors"
                    >
                      {producto}
                    </Link>
                  ) : (
                    <span className="text-blanco/90">{producto}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

