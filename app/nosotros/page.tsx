"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/button";
import {
  ArrowRight,
  Users,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-negro via-transparent to-negro"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-rojoprincipal">
                Sobre Nosotros
              </h1>
              <p className="text-xl md:text-2xl text-blanco/80 mb-8">
                Comprometidos con tu rendimiento y bienestar desde 2010
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-rojoprincipal hover:bg-rojosecundario text-blanco">
                  Contactar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-rojoprincipal text-rojoprincipal hover:bg-rojoprincipal hover:text-blanco"
                >
                  Nuestros Productos
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-16 px-5 bg-grisoscuro/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rojoprincipal">
                  Nuestra Historia
                </h2>
                <p className="text-blanco/80 mb-4">
                  Toribio nació en 2010 con una misión clara: proporcionar
                  suplementación deportiva y nutricional de la más alta calidad
                  a precios accesibles. Lo que comenzó como una pequeña tienda
                  local se ha convertido en un referente nacional en nutrición
                  deportiva.
                </p>
                <p className="text-blanco/80 mb-6">
                  Fundada por un grupo de apasionados del fitness y la
                  nutrición, nuestra empresa ha crecido gracias a nuestro
                  compromiso con la calidad, la transparencia y el servicio al
                  cliente. Hoy, seguimos fieles a nuestros valores originales
                  mientras expandimos nuestra oferta para satisfacer las
                  necesidades de todos los deportistas.
                </p>
                <div className="flex space-x-6">
                  <div>
                    <div className="text-3xl font-bold text-rojoprincipal flex gap-1">
                      +<p className="text-white">10</p>
                    </div>
                    <div className="text-sm text-blanco/60">
                      Años de experiencia
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rojoprincipal flex gap-1">
                      + <p className="text-white">5000</p>
                    </div>
                    <div className="text-sm text-blanco/60">
                      Clientes satisfechos
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-rojoprincipal flex gap-1">
                      + <p className="text-white">100</p>
                    </div>
                    <div className="text-sm text-blanco/60">
                      Productos premium
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/Nuestrahistoria.webp"
                  alt="Nuestra Historia"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rojoprincipal">
                Nuestro Equipo
              </h2>
              <p className="text-blanco/80">
                Contamos con un equipo de profesionales apasionados por el
                deporte y la nutrición, comprometidos con ayudarte a alcanzar
                tus objetivos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Cristian López",
                  position: "Personal Trainer IFBB y atencion al cliente",
                },
                {
                  name: "Laura Martínez",
                  position: "Nutricionista Deportiva",
                },
                {
                  name: "Franco Salas",
                  position:
                    "Especialista en Suplementación y preparador físico IPEF",
                },
                {
                  name: "Martin Perez",
                  position: "Profesor nacional de educacion fisica,rutinas y entrenamientos online",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-grisoscuro rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-rojoprincipal mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blanco/70">{member.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-16 px-5 bg-grisoscuro/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rojoprincipal">
                Nuestros Valores
              </h2>
              <p className="text-blanco/80">
                En Toribio Profit nos guiamos por principios fundamentales que
                definen nuestra forma de trabajar y relacionarnos con nuestros
                clientes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Compromiso con el Cliente",
                  description:
                    "Tu satisfacción es nuestra prioridad. Trabajamos para ofrecerte la mejor experiencia y los mejores productos.",
                },
                {
                  icon: Award,
                  title: "Calidad Premium",
                  description:
                    "Seleccionamos cuidadosamente cada producto para garantizar los más altos estándares de calidad y eficacia.",
                },
                {
                  icon: Clock,
                  title: "Innovación Constante",
                  description:
                    "Nos mantenemos actualizados con las últimas tendencias y avances en nutrición deportiva para ofrecerte lo mejor.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-negro p-6 rounded-xl shadow-lg"
                >
                  <div className="bg-rojoprincipal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="h-8 w-8 text-rojoprincipal" />
                  </div>
                  <h3 className="text-xl font-bold text-rojoprincipal mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-blanco/80 text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-grisoscuro rounded-2xl overflow-hidden shadow-xl">
              <div className="flex justify-center items-center text-center">
                <div className="p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-rojoprincipal">
                      ¿Tenes alguna duda?
                    </h2>
                    <p className="text-blanco/80 mb-8">
                      Estamos aca para ayudarte. No dudes en contactarnos para
                      resolver cualquier duda sobre nuestros productos o
                      servicios.
                    </p>

                    <div className="space-y-6">
                      <div className="flex flex-col items-center">
                        <MapPin className="h-6 w-6 text-rojoprincipal mt-1" />
                          <h3 className="font-semibold mb-1">Dirección</h3>
                        <div>
                          <p className="text-blanco/70">CABA</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <Mail className="h-6 w-6 text-rojoprincipal mt-1" />
                        <h3 className="font-semibold mb-1">Email</h3>
                        <div>
                          <p className="text-blanco/70">
                            toribio.profit@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <Phone className="h-6 w-6 text-rojoprincipal mt-1" />
                          <h3 className="font-semibold mb-1">Teléfono</h3>
                        <div>
                          <p className="text-blanco/70">+54 9 11 41468109</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link href="/contacto">
                        <Button className="bg-rojoprincipal hover:bg-rojosecundario text-blanco">
                          Contactar Ahora{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-rojoprincipal/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rojoprincipal">
                Unite a la Familia Toribio Profit
              </h2>
              <p className="text-blanco/80 mb-8">
                Descubri nuestra amplia gama de productos diseñados para
                ayudarte a alcanzar tus objetivos deportivos y de bienestar.
              </p>
              <Link href="/productos">
                <Button className="bg-rojoprincipal hover:bg-rojosecundario text-blanco px-8 py-6 text-lg">
                  Ver Todos los Productos
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
