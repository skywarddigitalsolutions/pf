export interface Product {
  detail: string
  name: string
  description: string
  imageUrl: string
  category: string
  objective: string[]
  price: number
  details: string[]
}

export const products = [
  // 🔹 PROTEÍNAS
  {
    detail: "proteina-whey",
    name: "Proteína Whey",
    description: "Proteína de suero de leche de alta calidad para recuperación muscular.",
    imageUrl: "/productos/proteina-whey.jpg",
    category: "Proteínas",
    objective: ["Masa muscular", "Recuperación"],
    price: 29.99,
    details: [
      "25g de proteína por porción",
      "Bajo en carbohidratos y grasas",
      "Contiene todos los aminoácidos esenciales",
    ],
  },
  {
    detail: "proteina-isolate",
    name: "Proteína Isolate",
    description: "Proteína de suero aislada, con mayor pureza y absorción rápida.",
    imageUrl: "/productos/proteina-isolate.jpg",
    category: "Proteínas",
    objective: ["Masa muscular", "Definición"],
    price: 39.99,
    details: ["30g de proteína", "Cero lactosa", "Ideal para definición"],
  },
  {
    detail: "proteina-caseina",
    name: "Caseína Micelar",
    description: "Proteína de digestión lenta, ideal para la recuperación nocturna.",
    imageUrl: "/productos/proteina-caseina.jpg",
    category: "Proteínas",
    objective: ["Recuperación", "Masa muscular"],
    price: 32.99,
    details: ["24g de proteína", "Libera aminoácidos lentamente", "Ideal antes de dormir"],
  },
  {
    detail: "proteina-vegan",
    name: "Proteína Vegana",
    description: "Mezcla de proteína vegetal con guisante, arroz y chía.",
    imageUrl: "/productos/proteina-vegan.jpg",
    category: "Proteínas",
    objective: ["Masa muscular", "Salud general"],
    price: 34.99,
    details: ["22g de proteína vegetal", "Sin gluten ni lactosa", "Alto en fibra"],
  },

  // 🔹 RENDIMIENTO
  {
    detail: "creatina-monohidrato",
    name: "Creatina Monohidrato",
    description: "Suplemento para mejorar la fuerza y el rendimiento muscular.",
    imageUrl: "/productos/creatina-monohidrato.jpg",
    category: "Rendimiento",
    objective: ["Fuerza", "Rendimiento"],
    price: 19.99,
    details: ["Aumenta la fuerza explosiva", "Mejora la recuperación"],
  },
  {
    detail: "bcaa-2-1-1",
    name: "BCAA 2:1:1",
    description: "Aminoácidos esenciales para mejorar la recuperación y reducir la fatiga.",
    imageUrl: "/productos/bcaa.jpg",
    category: "Rendimiento",
    objective: ["Recuperación", "Resistencia"],
    price: 24.99,
    details: ["Relación óptima 2:1:1", "Reduce el catabolismo muscular"],
  },
  {
    detail: "citrulina-malato",
    name: "Citrulina Malato",
    description: "Mejora el flujo sanguíneo y reduce la fatiga muscular.",
    imageUrl: "/productos/citrulina.jpg",
    category: "Rendimiento",
    objective: ["Resistencia", "Fuerza"],
    price: 22.99,
    details: ["Aumenta la producción de óxido nítrico", "Retrasa la fatiga"],
  },

  // 🔹 ENERGÍA
  {
    detail: "pre-entreno",
    name: "Pre-Entreno Explosivo",
    description: "Potente fórmula con cafeína y beta-alanina para máxima energía.",
    imageUrl: "/productos/pre-entreno.jpg",
    category: "Energía",
    objective: ["Rendimiento", "Energía"],
    price: 34.99,
    details: ["Aumenta la fuerza y resistencia", "Mejora la concentración"],
  },
  {
    detail: "cafeina-200mg",
    name: "Cafeína 200mg",
    description: "Suplemento natural para mejorar la energía y la concentración.",
    imageUrl: "/productos/cafeina.jpg",
    category: "Energía",
    objective: ["Energía", "Rendimiento"],
    price: 9.99,
    details: ["200mg de cafeína por cápsula", "Reduce la fatiga"],
  },

  // 🔹 SALUD Y RECUPERACIÓN
  {
    detail: "multivitaminico",
    name: "Multivitamínico",
    description: "Complejo de vitaminas y minerales esenciales.",
    imageUrl: "/productos/multivitaminico.jpg",
    category: "Salud",
    objective: ["Salud general"],
    price: 14.99,
    details: ["20+ vitaminas y minerales", "Refuerza el sistema inmune"],
  },
  {
    detail: "glutamina",
    name: "L-Glutamina",
    description: "Aminoácido esencial para la recuperación muscular.",
    imageUrl: "/productos/glutamina.jpg",
    category: "Recuperación",
    objective: ["Recuperación", "Salud general"],
    price: 18.99,
    details: ["Favorece la recuperación muscular", "Refuerza el sistema inmune"],
  },

  // 🔹 QUEMADORES DE GRASA
  {
    detail: "l-carnitina",
    name: "L-Carnitina",
    description: "Ayuda a la oxidación de grasa y mejora la energía.",
    imageUrl: "/productos/l-carnitina.jpg",
    category: "Quemadores de Grasa",
    objective: ["Definición", "Energía"],
    price: 19.99,
    details: ["Favorece el uso de grasa como energía"],
  },

  // 🔹 COMBOS
  {
    detail: "combo-masa-muscular",
    name: "Combo Masa Muscular",
    description: "Proteína Whey + Creatina + BCAA para ganar masa muscular.",
    imageUrl: "/productos/combo-masa.jpg",
    category: "Combos",
    objective: ["Masa muscular"],
    price: 69.99,
    details: ["Proteína Whey", "Creatina Monohidrato", "BCAA"],
  },
  {
    detail: "combo-definicion",
    name: "Combo Definición",
    description: "Pack para definir músculo: Proteína Isolate + L-Carnitina.",
    imageUrl: "/productos/combo-definicion.jpg",
    category: "Combos",
    objective: ["Definición"],
    price: 79.99,
    details: ["Proteína Isolate", "L-Carnitina"],
  },
  {
    detail: "combo-full-performance",
    name: "Combo Full Performance",
    description: "Pack completo para rendimiento máximo: Pre-Entreno + Creatina + Beta Alanina.",
    imageUrl: "/productos/combo-performance.jpg",
    category: "Combos",
    objective: ["Rendimiento"],
    price: 89.99,
    details: ["Pre-Entreno", "Creatina", "Beta Alanina"],
  },
]
