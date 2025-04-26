"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import { Textarea } from "@/app/components/textarea";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactoPage() {
  const [state, handleSubmit] = useForm("mjkwkywy");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-grisoscuro to-negro text-blanco">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
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
                Contactanos
              </h1>
              <p className="text-xl md:text-2xl text-blanco/80 mb-8">
                Estamos aca para responder tus preguntas y ayudarte con todo lo
                que necesites
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formulario y Datos de Contacto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulario de Contacto */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-grisoscuro rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-6 text-rojoprincipal">
                  Envíanos un mensaje
                </h2>

                {state.succeeded && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </div>
                )}

                {state.errors && Object.keys(state.errors).length > 0 && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    Hubo un error al enviar el mensaje. Por favor intenta
                    nuevamente.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre completo{" "}
                      <span className="text-rojoprincipal">*</span>
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-negro/50 border-grisoscuro focus:border-rojoprincipal text-blanco"
                      required
                    />
                    <ValidationError
                      prefix="Nombre"
                      field="nombre"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email <span className="text-rojoprincipal">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-negro/50 border-grisoscuro focus:border-rojoprincipal text-blanco"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="asunto"
                      className="block text-sm font-medium mb-2"
                    >
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      placeholder="¿Sobre qué nos quieres contactar?"
                      className="bg-negro/50 border-grisoscuro focus:border-rojoprincipal text-blanco"
                    />
                    <ValidationError
                      prefix="Asunto"
                      field="asunto"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensaje <span className="text-rojoprincipal">*</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      name="message"
                      placeholder="Escribe tu mensaje aquí..."
                      className="bg-negro/50 border-grisoscuro focus:border-rojoprincipal text-blanco min-h-[150px]"
                      required
                    />
                    <ValidationError
                      prefix="Mensaje"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rojoprincipal hover:bg-rojosecundario text-blanco py-6"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-blanco"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                      </span>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Información de Contacto */}
              {/* Información de Contacto */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-6 text-rojoprincipal">
                    Información de Contacto
                  </h2>
                  <p className="text-blanco/80 mb-8">
                    No dudes en contactarnos directamente. Nuestro equipo está
                    listo para ayudarte con cualquier consulta.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-rojoprincipal/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-rojoprincipal" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Dirección</h3>
                        <p className="text-blanco/70">CABA</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-rojoprincipal/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-rojoprincipal" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-blanco/70">
                          toribio.profit@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-rojoprincipal/10 p-3 rounded-full mr-4">
                        <FaWhatsapp className="h-6 w-6 text-rojoprincipal" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Whatsapp</h3>
                        <p className="text-blanco/70">+54 9 11 41468109</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-rojoprincipal/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-rojoprincipal" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          Horario de Atención
                        </h3>
                        <p className="text-blanco/70">
                          Lunes a Viernes: 9:00hs - 18:00hs
                        </p>
                        <p className="text-blanco/70">
                          Sábados: 10:00hs - 14:00hs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-rojoprincipal">
                    Seguínos en nuestras redes sociales
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/toribio.profit?igsh=NDVkc3RjOHBlOHRt"
                      target="_blank"
                      className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6 text-rojoprincipal" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61575876922064&locale=es_LA"
                      target="_blank"
                      className="bg-grisoscuro hover:bg-rojoprincipal/20 p-3 rounded-full transition-colors duration-300"
                    >
                      <Facebook className="h-6 w-6 text-rojoprincipal" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 bg-grisoscuro/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-rojoprincipal">
                Preguntas Frecuentes
              </h2>
              <p className="text-blanco/80">
                Aca vas a encontrar las respuestas a las preguntas más comunes.
                Si no encontras lo que buscas, no dudes en contactarnos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "¿Cuánto tiempo tarda en llegar mi pedido?",
                  answer:
                    "Los tiempos de entrega varían según tu ubicación. Generalmente, los pedidos se entregan en 2-5 días hábiles en zonas urbanas y 5-7 días en zonas rurales.",
                },
                {
                  question: "¿Ofrecen asesoramiento sobre suplementación?",
                  answer:
                    "Sí, contamos con especialistas en nutrición deportiva que pueden asesorarte sin costo sobre los mejores suplementos para tus objetivos específicos. Contacta con nosotros para agendar una consulta.",
                },
                {
                  question: "¿Cuál es la política de devoluciones?",
                  answer:
                    "Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté sin abrir y en su embalaje original. Contacta con nuestro servicio al cliente para iniciar el proceso.",
                },
                {
                  question: "¿Tienen tiendas físicas?",
                  answer:
                    "No, no contamos con tiendas físicas. Somos una empresa dedicada a la venta de suplementación deportiva online.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-negro p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold text-rojoprincipal mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-blanco/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
