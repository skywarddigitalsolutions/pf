"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [text, setText] = useState("");
  const [shapes, setShapes] = useState<
    {
      width: string;
      height: string;
      left: string;
      top: string;
      x: number;
      y: number;
      duration: number;
    }[]
  >([]);
  const fullText = "Potencia tu rendimiento";

  useEffect(() => {
    const generated = Array.from({ length: 8 }, () => ({
      width: `${Math.random() * 600 + 200}px`,
      height: `${Math.random() * 600 + 200}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200 - 50}%`,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }));
    setShapes(generated);
  }, []);

  useEffect(() => {
    let idx = 0;
  
    const tick = () => {
      idx++;
      if (idx <= fullText.length) {
        setText(fullText.slice(0, idx));
        setTimeout(tick, 100);
      }
    };
  
    // Arrancamos inmediatamente
    tick();
  
    // No hay nada que limpiar salvo timeouts,
    // pero como cada timeout sólo se programa si idx≤length,
    // al acabar no queda ninguno pendiente.
  }, []);


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-negro opacity-5">
        <Image
          src="/fondo.webp"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(211,47,47,0.8) 0%, rgba(168,72,73,0.3) 70%)",
              width: shape.width,
              height: shape.height,
              left: shape.left,
              top: shape.top,
            }}
            animate={{ x: shape.x, y: shape.y, scale: [1, 1.1, 1] }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Contenido estático + texto */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 text-blanco"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-blanco/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre nuestra selección de suplementos deportivos para mejorar tu
          condición física y mental
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/productos">
            <Button
              size="lg"
              className="bg-rojoprincipal hover:bg-rojosecundario text-blanco"
            >
              Ver productos <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-negro" />
    </div>
  );
}
