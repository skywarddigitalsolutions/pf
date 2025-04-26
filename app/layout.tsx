import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "./components/whatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  metadataBase: new URL("https://toribioprofit.com"),
  title: "Toribio Profit | Suplementos Deportivos para mejorar tu rendimiento y recuperación",
  description:
    "Descubre nuestra selección de suplementos deportivos: proteínas, creatina, aminoácidos y más. Aumenta tu fuerza, resistencia y recuperación con productos de alta calidad.",
  keywords:
    "suplementos deportivos, proteínas, creatina, aminoácidos, nutrición deportiva, fitness, recuperación muscular, quema de grasa, entrenamiento, rendimiento",
  openGraph: {
    type: "website",
    title: "Suplementos Deportivos | Mejora tu Rendimiento y Recuperación",
    description:
      "Explora nuestra variedad de suplementos para potenciar tu entrenamiento. Encuentra proteínas, creatina y más para alcanzar tus objetivos fitness.",
    url: "https://toribioprofit.com",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Suplementos Deportivos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/logo.svg" />
         <link rel="preload" as="image" href="/fondo.webp" type="fondo.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
