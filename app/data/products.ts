export interface Product {
  detail: string
  name: string
  description: string
  imageUrl: string
  images?: string[] 
  category: string
  objective: string[]
  details: string[]
  modoDeUso?: string[]
  beneficios?: string[]
  ingredientes?: string[]
}

export const products: Product[] = [
  {
    detail: "dhea-man",
    name: "Dhea Man Suplemento",
    description: "Suplemento hormonal que ayuda a equilibrar los niveles de DHEA en el organismo.",
    imageUrl: "/dheaman1.jpg",
    images: [
      "/dheaman1.jpg",
    ],
    category: "Salud",
    objective: ["Equilibrio hormonal", "Vitalidad"],
    
    details: [
      "Ayuda a mantener el equilibrio hormonal",
      "Favorece la producción natural de testosterona",
      "Aporta energía y vitalidad",
      "Contribuye a la salud ósea y muscular",
      "Mejora el bienestar general",
    ],
    modoDeUso: [
      "Tomar 1 cápsula al día con agua.",
      "Preferentemente por la mañana con el desayuno.",
      "Para mejores resultados, mantener un uso constante durante al menos 3 meses.",
      "No exceder la dosis recomendada.",
    ],
    beneficios: [
      "Equilibra los niveles hormonales naturalmente.",
      "Aumenta la energía y vitalidad diaria.",
      "Mejora el rendimiento físico y mental.",
      "Contribuye a la salud ósea y muscular.",
      "Favorece el bienestar general del organismo.",
    ],
    ingredientes: [
      "DHEA (Dehidroepiandrosterona) 50mg",
      "Excipientes: Celulosa microcristalina",
      "Estearato de magnesio vegetal",
      "Cápsula vegetal (HPMC)",
    ],
  },
  {
    detail: "mtor-bcaa-270g",
    name: "BCCA 270g",
    description: "Suplemento dietario en polvo para preparar bebida a base de aminoácidos, ideal para apoyar la recuperación y el crecimiento muscular.",
    imageUrl: "/bcca1.webp",
    images: [
      "/bcca1.webp",  
      "/bcca2.webp", 
      "/bcca3.webp", 
    ],
    category: "Aminoácidos",
    objective: ["Recuperación muscular", "Crecimiento muscular"],
    details: [
      "7 g de BCAA por porción",
      "Ratio 8:1:1 de L-Leucina, L-Isoleucina y L-Valina",
      "Incluye L-Glutamina y L-Citrulina Malato",
      "Reposición de electrolitos",
      "20 porciones por envase",
      "Disponible en varios sabores: Fruit Punch, Strawberry Lime, Green Lemonade, Watermelon, Blue Raz, Grape Attack",
    ],
    modoDeUso: [
      "Mezclar 1 porción (13,5g / 1 scoop) en 500cm³ de agua fría (ajustar la porción a su preferencia).",
      "En los días de entrenamiento, consumir 1 porción durante el entrenamiento y 1 porción luego del mismo.",
      "En los días sin entrenamiento, consumir 1 porción al día.",
      "Para mejores resultados, consumir diariamente.",
    ],
    beneficios: [
      "Apoya la recuperación y el crecimiento muscular.",
      "Proporciona una proporción óptima de aminoácidos esenciales.",
      "Ayuda a reponer electrolitos perdidos durante el ejercicio.",
      "Mejora el rendimiento durante el entrenamiento.",
    ],
    ingredientes: [
      "L-Leucina",
      "L-Glutamina",
      "L-Citrulina Malato",
      "Ácido Cítrico",
      "L-Valina",
      "L-Isoleucina",
      "Sodio Citrato",
      "Saborizantes según corresponda",
      "Cloruro de Potasio",
      "Ácido Málico",
      "Cloruro de Sodio",
      "Edulcorantes: Sucralosa (27mg/100cm³), Acesulfamo de Potasio (10mg/100cm³)",
      "Colorante",
      "Vitamina B6 (Piridoxina)",
    ],
  },
  {
    detail: "flexo-drink",
    name: "Flexo Drink 400g",
    description: "Suplemento para la salud articular con colágeno hidrolizado y ácido hialurónico.",
    imageUrl: "/flexo1.png",
    images: [
      "/flexo1.png", 
      "/flexo2.webp", 
    ],
    category: "Salud",
    objective: ["Recuperación articular", "Salud ósea"],
    details: [
      "Colágeno hidrolizado",
      "Ácido hialurónico",
      "Apoya la flexibilidad y salud articular",
      "Favorece la regeneración de tejidos",
    ],
    modoDeUso: [
      "Disolver 20 g en agua.",
      "Tomar una dosis diaria.",
    ],
    beneficios: [
      "Mejora la movilidad articular.",
      "Favorece la regeneración de tejidos.",
      "Contribuye a la salud de las articulaciones.",
    ],
    ingredientes: [
      "Colágeno hidrolizado",
      "Ácido hialurónico",
    ],
  },
  {
    detail: "just-whey-930g",
    name: "Just Whey 930g Sin Sabor",
    description: "Proteína de suero de leche para apoyar la recuperación muscular.",
    imageUrl: "/justwheysinsabor1.webp",
    images: [
      "/justwheysinsabor1.webp", 
      "/justwheysinsabor2.webp", 
      "/justwheysinsabor3.webp", 
    ],
    category: "Proteínas",
    objective: ["Recuperación muscular", "Crecimiento muscular"],
    details: [
      "25g de proteína por porción",
      "Bajo en carbohidratos",
      "Ideal para la recuperación después del ejercicio",
      "Disponible en varios sabores",
    ],
    modoDeUso: [
      "Mezclar 1 scoop (30g) en 200-300 ml de agua o leche.",
      "Consumir una porción al día.",
    ],
    beneficios: [
      "Ayuda en la recuperación muscular.",
      "Apoya el crecimiento muscular.",
      "Bajo en carbohidratos.",
    ],
    ingredientes: [
      "Proteína de suero de leche",
      "Saborizantes según sabor",
    ],
  },
  {
    detail: "iso-gold-protein",
    name: "Iso Gold Protein",
    description: "Proteína aislada de suero de leche de alta calidad para máximo rendimiento.",
    imageUrl: "/isogold1.webp",
    images: [
      "/isogold1.webp", 
      "/isogold2.webp", 
    ],
    category: "Proteínas",
    objective: ["Recuperación", "Crecimiento muscular"],
    details: [
      "Aislado de proteína de suero",
      "Bajo en lactosa",
      "Rápida absorción",
      "Ideal para antes o después del entrenamiento",
    ],
    modoDeUso: [
      "Mezclar 1 scoop (30g) con 200-300 ml de agua o leche.",
      "Consumir después del entrenamiento o como suplemento diario.",
    ],
    beneficios: [
      "Recupera rápidamente los músculos.",
      "Ideal para optimizar el crecimiento muscular.",
    ],
    ingredientes: [
      "Aislado de proteína de suero",
      "Saborizantes y edulcorantes",
    ],
  },
  {
    detail: "creatine-micronized",
    name: "Creatine Micronized",
    description: "Creatina micronizada para aumentar la fuerza y rendimiento en entrenamientos intensos.",
    imageUrl: "/creatinemicronized1.webp",
    images: [
      "/creatinemicronized1.webp", 
      "/creatinemicronized2.webp", 
      "/creatinemicronized3.webp", 
    ],
    category: "Creatina",
    objective: ["Aumento de fuerza", "Mejora del rendimiento"],
    details: [
      "Creatina micronizada para mejor absorción",
      "Aumenta el rendimiento y la fuerza",
      "Ideal para entrenamientos de alta intensidad",
    ],
    modoDeUso: [
      "Mezclar 1 scoop (5g) en 200-300 ml de agua.",
      "Tomar una dosis antes o después del entrenamiento.",
    ],
    beneficios: [
      "Aumenta la fuerza.",
      "Mejora el rendimiento durante entrenamientos.",
    ],
    ingredientes: [
      "Creatina micronizada",
    ],
  },
  {
    detail: "pre-war",
    name: "Pre War",
    description: "Pre-entrenamiento energizante para mejorar el rendimiento físico.",
    imageUrl: "/prewar1.webp",
    images: [
      "/prewar1webp",
      "/prewar2.webp", 
    ],
    category: "Pre entreno",
    objective: ["Energía", "Rendimiento físico"],
    details: [
      "Mejora la energía y concentración",
      "Aumenta el rendimiento físico",
      "Ideal para entrenamientos intensos",
    ],
    modoDeUso: [
      "Mezclar 1 scoop (10g) en 200-300 ml de agua.",
      "Consumir 20-30 minutos antes del entrenamiento.",
    ],
    beneficios: [
      "Mejora la concentración y energía para entrenar.",
      "Aumenta el rendimiento en entrenamientos intensos.",
    ],
    ingredientes: [
      "Caféína",
      "Beta-Alanina",
      "L-Citrulina",
      "Creatina",
      "Aminoácidos",
    ],
  },
  {
    detail: "resveratrol-500",
    name: "Resveratrol 500",
    description: "Suplemento antioxidante con 500 mg de resveratrol por porción, ideal para la salud cardiovascular y el envejecimiento celular.",
    imageUrl: "/resveratrol1.webp",
    images: [
      "/resveratrol1.webp",
      "/resveratrol2.webp" 
    ],
    category: "Vitaminas y minerales",
    objective: ["Salud cardiovascular", "Antienvejecimiento"],
    details: [
      "500 mg de resveratrol por porción",
      "Apoya la salud cardiovascular",
      "Poderoso antioxidante",
      "Contribuye al envejecimiento saludable",
    ],
    modoDeUso: [
      "Tomar 1 cápsula al día con una comida.",
      "No exceder la dosis recomendada.",
      "Para mejores resultados, usar de manera constante.",
    ],
    beneficios: [
      "Protege contra el daño oxidativo.",
      "Favorece la salud del corazón.",
      "Contribuye al envejecimiento saludable.",
      "Apoya la función celular óptima.",
    ],
    ingredientes: [
      "Resveratrol 500 mg",
      "Excipientes: Celulosa microcristalina",
      "Estearato de magnesio vegetal",
      "Cápsula vegetal (HPMC)",
    ],
  },  
  {
    detail: "amino-gold",
    name: "Amino Gold",
    description: "Fórmula avanzada de aminoácidos esenciales y de cadena ramificada para favorecer la recuperación muscular y el crecimiento.",
    imageUrl: "/aminogold1.webp",
    images: [
      "/aminogold1.webp",
      "/aminogold2.webp" 
    ],
    category: "Aminoácidos",
    objective: ["Recuperación muscular", "Desarrollo muscular"],
    details: [
      "Contiene aminoácidos esenciales y BCAA",
      "Favorece la síntesis de proteínas",
      "Mejora la recuperación muscular post-entrenamiento",
      "Ideal para entrenamientos de alta intensidad",
    ],
    modoDeUso: [
      "Tomar 1 porción (según indicaciones del envase) antes o después del entrenamiento.",
      "Puede tomarse en cualquier momento del día para mejorar la síntesis proteica.",
    ],
    beneficios: [
      "Favorece el crecimiento y mantenimiento muscular.",
      "Acelera la recuperación post-entrenamiento.",
      "Reduce el catabolismo muscular.",
      "Mejora la resistencia y el rendimiento.",
    ],
    ingredientes: [
      "Aminoácidos esenciales y BCAA",
      "L-Leucina, L-Isoleucina, L-Valina",
      "Otros aminoácidos esenciales",
    ],
  },  
  {
    detail: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    description: "Creatina monohidratada de alta pureza para mejorar la fuerza, el rendimiento y la recuperación muscular.",
    imageUrl: "/creatinemonohydrategold1.webp",
    images: [
      "/creatinemonohydrategold1.webp",
      "/creatinemonohydrategold2.webp"
    ],
    category: "Creatina",
    objective: ["Aumento de fuerza", "Recuperación muscular"],
    details: [
      "Mejora la producción de energía ATP",
      "Aumenta la fuerza y potencia muscular",
      "Favorece la recuperación post-entrenamiento",
      "Ideal para entrenamientos de alta intensidad y resistencia",
    ],
    modoDeUso: [
      "Tomar 5g disueltos en agua o jugo antes o después del entrenamiento.",
      "Se puede combinar con proteínas o carbohidratos para mejorar su absorción.",
    ],
    beneficios: [
      "Aumenta la potencia y la fuerza muscular.",
      "Favorece la recuperación muscular.",
      "Mejora el rendimiento deportivo.",
      "Hidrata las células musculares promoviendo el crecimiento.",
    ],
    ingredientes: [
      "100% Creatina Monohidratada Micronizada",
    ],
  },  
  {
    detail: "creatina-monohidrato-ENA",
    name: "Creatina Monohidrato ENA",
    description: "Creatina micronizada de alta calidad para mejorar el rendimiento, la fuerza y la recuperación muscular.",
    imageUrl: "/creatinamonohidratoena1.webp",
    images: [
      "/creatinamonohidratoena1.webp",
    ],
    category: "Creatina",
    objective: ["Aumento de fuerza", "Recuperación muscular"],
    details: [
      "Fórmula micronizada para una mejor absorción.",
      "Aumenta la producción de energía ATP.",
      "Favorece la recuperación muscular post-entrenamiento.",
      "Ideal para deportes de alta intensidad.",
    ],
    modoDeUso: [
      "Tomar 5g disueltos en agua o jugo antes o después del entrenamiento.",
      "Se puede combinar con proteínas o carbohidratos para una mejor absorción.",
    ],
    beneficios: [
      "Mayor fuerza y resistencia.",
      "Mejora del rendimiento en entrenamientos de alta intensidad.",
      "Recuperación muscular más rápida.",
      "Apoya la hidratación y volumen celular.",
    ],
    ingredientes: [
      "100% Creatina Monohidratada Micronizada",
    ],
  },

  {
    detail: "truemade-whey-protein-930g",
    name: "Truemade Whey Protein 930g",
    description: "Proteína de suero de alta calidad para el crecimiento y recuperación muscular (30 servicios)",
    imageUrl: "/wheyproteinchico1.webp",
     images: [
      "/wheyproteinchico1.webp",
    ],
    category: "Proteínas",
    objective: ["Crecimiento muscular", "Recuperación muscular"],
    details: [
      "25g de proteína por porción",
      "Bajo en carbohidratos",
      "Fácil de digerir",
    ],
    modoDeUso: [
      "Mezclar 1 scoop (30g) en 200-300 ml de agua o leche.",
      "Consumir 1-2 porciones al día.",
    ],
    beneficios: [
      "Promueve el crecimiento muscular.",
      "Ayuda en la recuperación muscular.",
      "Bajo en carbohidratos.",
    ],
    ingredientes: [
      "Proteína de suero de leche",
      "Saborizantes según sabor",
    ],
  },
  {
    detail: "truemade-whey-protein-2270g",
    name: "Truemade Whey Protein 2270g",
    description: "Proteína de suero de alta calidad con 70 servicios, ideal para la recuperación y el desarrollo muscular.",
    imageUrl: "/wheyproteingrande1.webp",
    images: [
      "/wheyproteingrande1.webp"
    ],
    category: "Proteínas",
    objective: ["Desarrollo muscular", "Recuperación post-entreno"],
    details: [
      "70 servicios por envase.",
      "Alta concentración de proteína de suero.",
      "Bajo en grasas y carbohidratos.",
      "Rápida absorción y fácil digestión.",
    ],
    modoDeUso: [
      "Mezclar 1 scoop con 250ml de agua o leche.",
      "Consumir después del entrenamiento o entre comidas.",
    ],
    beneficios: [
      "Favorece el crecimiento y recuperación muscular.",
      "Aporte óptimo de aminoácidos esenciales.",
      "Rápida asimilación para una mejor recuperación.",
      "Sabor delicioso y fácil disolución.",
    ],
    ingredientes: [
      "Proteína de suero concentrada y aislada.",
      "Aminograma completo con BCAAs y glutamina.",
    ],
  },  
  {
    detail: "lipo-gold-elite",
    name: "Lipo Gold Elite",
    description: "Termogénico avanzado para ayudar a quemar grasa.",
    imageUrl: "/lipogold1.webp",
    images: [
      "/lipogold1.webp",
      "/lipogold2.webp"
    ],
    category: "Termogénicos",
    objective: ["Reducción de grasa", "Energía"],
    details: [
      "Acelera el metabolismo",
      "Reduce la grasa corporal",
      "Aumenta la energía y el enfoque",
    ],
    modoDeUso: [
      "Tomar 1 cápsula al día, preferentemente por la mañana.",
      "No exceder la dosis recomendada.",
    ],
    beneficios: [
      "Mejora el metabolismo para quemar más calorías.",
      "Ayuda a reducir la grasa corporal.",
      "Aumenta la energía para entrenamientos más intensos.",
    ],
    ingredientes: [
      "Cafeína",
      "Extracto de té verde",
      "Capsaicina",
      "L-Carnitina",
    ],
  },
  {
    detail: "magnesium-citrate",
    name: "Magnesium Citrate",
    description: "Suplemento de citrato de magnesio para mejorar el funcionamiento muscular y nervioso.",
    imageUrl: "/magnesiumcitrate1.webp",
    images: [
      "/magnesiumcitrate1.webp",
      "/magnesiumcitrate2.webp"
    ],
    category: "Vitaminas y Minerales",
    objective: ["Relajación muscular", "Mejora del rendimiento"],
    details: [
      "Mejora la función muscular y nerviosa",
      "Ayuda a reducir calambres",
      "Aumenta el rendimiento físico",
    ],
    modoDeUso: [
      "Tomar 1 cápsula al día, preferentemente por la noche.",
    ],
    beneficios: [
      "Reduce calambres y dolores musculares.",
      "Ayuda al funcionamiento adecuado de los músculos.",
      "Aumenta el rendimiento físico.",
    ],
    ingredientes: [
      "Citrato de magnesio",
    ],
  },
    {
      detail: "omega-3-fish-oil",
      name: "Omega 3 Fish Oil",
      description: "Suplemento de omega-3 para la salud cardiovascular y cerebral.",
      imageUrl: "/omega1.webp",
      images: [
        "/omega1.webp",
        "/omega2.webp",
        "/omega3.webp",
        "/omega4.webp",
      ],
      category: "Vitaminas y Minerales",
      objective: ["Salud cardiovascular", "Salud cerebral"],
      details: [
        "Omega-3 EPA y DHA",
        "Aporta 1000 mg de omega-3 por cápsula",
      ],
      modoDeUso: [
        "Tomar 1 cápsula al día con las comidas.",
      ],
      beneficios: [
        "Mejora la salud cardiovascular.",
        "Apoya la función cerebral.",
      ],
      ingredientes: [
        "Aceite de pescado (Omega-3 EPA y DHA)",
      ],
    },
    {
      detail: "lipo-burn-hardcore",
      name: "Lipo Burn Hardcore",
      description: "Termogénico avanzado para quemar grasa y aumentar la energía.",
      imageUrl: "/lipoburn1.webp",
      images: [
        "/lipoburn2.webp"
      ],
      category: "Termogénicos",
      objective: ["Quema de grasa", "Energía"],
      details: [
        "Acelerador de metabolismo",
        "Incrementa la energía",
      ],
      modoDeUso: [
        "Tomar 1 cápsula 30 minutos antes del entrenamiento.",
      ],
      beneficios: [
        "Acelera la quema de grasa.",
        "Aumenta el metabolismo.",
      ],
      ingredientes: [
        "Cafeína",
        "Extracto de té verde",
      ],
    },
    {
      detail: "pre-work-gold",
      name: "Pre-Work Gold",
      description: "Pre-entreno que potencia el rendimiento y la energía durante los entrenamientos.",
      imageUrl: "/prework1.webp",
      images: [
        "/prework1.webp",
        "/prework2.webp"
      ],
      category: "Pre entreno",
      objective: ["Rendimiento físico", "Energía"],
      
      details: [
        "Aumenta la energía",
        "Mejora el enfoque y la resistencia",
      ],
      modoDeUso: [
        "Tomar 1 scoop 30 minutos antes del entrenamiento.",
      ],
      beneficios: [
        "Mejora el rendimiento en el entrenamiento.",
        "Aumenta la energía y enfoque.",
      ],
      ingredientes: [
        "Cafeína",
        "Beta-alanina",
      ],
    },
    {
      detail: "whey-ripped-protein",
      name: "Whey Ripped Protein",
      description: "Proteína de suero de leche para apoyar el crecimiento muscular y la quema de grasa.",
      imageUrl: "/wheyripped1.webp",
      images:[
        "/wheyripped1.webp",
        "/wheyripped2.webp"
      ],
      category: "Proteínas",
      objective: ["Crecimiento muscular", "Quema de grasa"],
      
      details: [
        "Proteína de suero",
        "Contiene CLA y L-Carnitina",
      ],
      modoDeUso: [
        "Mezclar 1 scoop con agua o leche.",
      ],
      beneficios: [
        "Apoya el crecimiento muscular.",
        "Acelera la quema de grasa.",
      ],
      ingredientes: [
        "Proteína de suero de leche",
        "CLA",
        "L-Carnitina",
      ],
    },
    {
      detail: "gainer-gold",
      name: "Gainer Gold",
      description: "Ganador de masa para incrementar la masa muscular de forma eficaz.",
      imageUrl: "/gainergold1.webp",
      images: [
        "/gainergold1.webp",
        "gainergold2.webp"
      ],
      category: "Ganadores de masa",
      objective: ["Aumento de masa muscular", "Energía"],
      
      details: [
        "Alta carga calórica",
        "Mezcla de carbohidratos y proteínas",
      ],
      modoDeUso: [
        "Mezclar 2 scoops con agua o leche.",
      ],
      beneficios: [
        "Ayuda a ganar masa muscular.",
        "Proporciona energía durante todo el día.",
      ],
      ingredientes: [
        "Proteína de suero de leche",
        "Carbohidratos complejos",
      ],
    },
    {
      detail: "zma",
      name: "ZMA",
      description: "Suplemento hormonal que combina Zinc, Magnesio y Vitamina B6 para mejorar el sueño y la recuperación.",
      imageUrl: "/zma1.webp",
      images: [
        "/zma1.webp",
        "/zma2.webp",
        "/zma3.webp",
        "/zma4.webp",
      ],
      category: "Vitaminas y Minerales",
      objective: ["Recuperación", "Sueño reparador"],
      
      details: [
        "Aumenta los niveles de testosterona",
        "Mejora el sueño y la recuperación",
      ],
      modoDeUso: [
        "Tomar 3 cápsulas antes de dormir.",
      ],
      beneficios: [
        "Optimiza los niveles hormonales.",
        "Mejora el descanso y la recuperación.",
      ],
      ingredientes: [
        "Zinc",
        "Magnesio",
        "Vitamina B6",
      ],
    },
    {
      detail: "no-gold",
      name: "N.O. Gold",
      description: "Suplemento para aumentar la producción de óxido nítrico, mejorando el flujo sanguíneo y el rendimiento físico.",
      imageUrl: "/nogold1.jpg",
      images:[
        "/nogold1.jpg",
        "/nogold2.jpg"
      ],
      category: "Vitaminas y Minerales",
      objective: ["Rendimiento físico", "Energía"],
      
      details: [
        "Mejora el flujo sanguíneo",
        "Incrementa la energía durante el entrenamiento",
      ],
      modoDeUso: [
        "Tomar 1 scoop 30 minutos antes del entrenamiento.",
      ],
      beneficios: [
        "Aumenta el rendimiento físico.",
        "Mejora el enfoque mental.",
      ],
      ingredientes: [
        "L-Arginina",
        "Citrulina Malato",
      ],
    },
    {
      detail: "electrolytes",
      name: "Electrolytes",
      description: "Suplemento de electrolitos para reponer los minerales perdidos durante el ejercicio.",
      imageUrl: "/electrolytes1.webp",
      images: [
        "/electrolytes1.webp",
        "/electrolytes2.webp"
      ],
      category: "Vitaminas y Minerales",
      objective: ["Reposición de electrolitos", "Rendimiento"],
           details: [
        "Mezcla de electrolitos como sodio, potasio y magnesio",
        "Ideal para entrenamientos largos o intensos",
      ],
      modoDeUso: [
        "Mezclar 1 scoop con agua durante el entrenamiento.",
      ],
      beneficios: [
        "Mantiene el equilibrio de electrolitos en el cuerpo.",
        "Previene calambres y mejora la recuperación.",
      ],
      ingredientes: [
        "Sodio",
        "Potasio",
        "Magnesio",
      ],
    },
    {
      detail: "k2-d3",
      name: "K2 + D3",
      description: "Suplemento con vitaminas K2 y D3 para mejorar la salud ósea y el sistema inmune.",
      imageUrl: "/k2.webp",
      images: [
        "/k2.webp"
      ],
      category: "Vitaminas y Minerales",
      objective: ["Salud ósea", "Sistema inmune"],
      
      details: [
        "Mejora la absorción de calcio en los huesos",
        "Refuerza el sistema inmune",
      ],
      modoDeUso: [
        "Tomar 1 cápsula al día con las comidas.",
      ],
      beneficios: [
        "Mejora la salud ósea.",
        "Fortalece el sistema inmune.",
      ],
      ingredientes: [
        "Vitamina K2",
        "Vitamina D3",
      ],
    },
    {
      detail: "hydroxy-max-black",
      name: "Hydroxy Max Black",
      description: "Termogénico avanzado para ayudar a quemar grasa y aumentar la energía.",
      imageUrl: "/hydroxymax1.webp",
      images:[
        "/hydroxymax1.webp",
        "/hydroxymax2.webp"
      ],
      category: "Termogénicos",
      objective: ["Quema de grasa", "Energía"],
      
      details: [
        "Potente fórmula termogénica",
        "Aumenta la energía y el enfoque",
      ],
      modoDeUso: [
        "Tomar 1 cápsula antes del entrenamiento.",
      ],
      beneficios: [
        "Mejora el rendimiento físico.",
        "Acelera la quema de grasa.",
      ],
      ingredientes: [
        "Cafeína",
        "Extracto de té verde",
      ],
    },
   {
      detail: "combo-crecimiento-muscular-star-nutrition",
      name: "Combo Crecimiento Muscular",
      description:
        "Suplemento ideal para potenciar el crecimiento muscular y mejorar el rendimiento. Contiene proteína whey, creatina monohidratada y BCAA.",
      imageUrl: "/combodesarrolloyrecuperacion1.webp",
      images: [
        "/combodesarrolloyrecuperacion1.webp",
        "/combodesarrolloyrecuperacion2.webp",
        "/combodesarrolloyrecuperacion3.webp",
        "/combodesarrolloyrecuperacion4.webp",
      ],
      category: "Combos",
      objective: ["Crecimiento muscular", "Recuperación"],
      details: [
        "Incluye proteína Whey Doy Pack Star Nutrition 2 lb.",
        "Creatina monohidratada Star Nutrition 300 g.",
        "BCAA 2:1:1 en cápsulas (el producto puede variar según disponibilidad).",
      ],
      modoDeUso: [
        "Diluir un scoop de proteína en 150-200cc de agua o leche.",
        "Consumir 5g de creatina después del ejercicio.",
        "Tomar 6 comprimidos de BCAA antes del ejercicio o con una comida.",
      ],
      beneficios: [
        "Aumenta la fuerza y resistencia durante el ejercicio.",
        "Favorece el crecimiento muscular.",
        "Mejora la recuperación y previene la fatiga muscular.",
        "Permite entrenamientos más exigentes.",
      ],
      ingredientes: [
        "Proteína de suero de leche (Whey Protein)",
        "Creatina monohidratada",
        "BCAA 2:1:1 (aminoácidos de cadena ramificada)",
      ],
    },    
   {
      detail: "combo-crecimiento-muscular-ena",
      name: "Combo Desarollo Magro",
      description:
        "Suplemento ideal para el crecimiento muscular y la recuperación. Contiene proteína de suero de leche y creatina micronizada 100% pura.",
      imageUrl: "/combodesarrollomagro1.webp",
      images: [
        "/combodesarrollomagro1.webp",
        "/combodesarrollomagro2.webp",
        "/combodesarrollomagro3.webp",
      ],
      category: "Combos",
      objective: ["Crecimiento muscular", "Recuperación"],
      details: [
        "79% de pura proteína instantánea.",
        "Contiene creatina micronizada 100% pura.",
        "Favorece el crecimiento de tejidos.",
      ],
      modoDeUso: [
        "Consumir 2 medidas diarias (cada medida aporta 24 g).",
        "Tomar 1 medida a media mañana y otra a media tarde, o bien 1 antes y 1 después del entrenamiento.",
        "Mezclar cada medida con 150-200 cc de leche.",
      ],
      beneficios: [
        "Favorece el crecimiento muscular.",
        "Mejora la recuperación.",
        "Ayuda a la definición muscular.",
      ],
      ingredientes: [
        "Proteína de suero de leche",
        "Creatina micronizada 100% pura",
      ],
    },
    {
      detail: "combo-mass-creatina-bcaa-gold-nutrition",
      name: "Combo Fuerza y Desarrollo",
      description: "Pack completo para el crecimiento muscular, recuperación y aumento de fuerza. Incluye Gainer Gold 5lb, Creatina Monohidratada 300g y BCAA 2000 x 120 cápsulas.",
      imageUrl: "/combovolumen1.webp",
      images: [
        "/combovolumen1.webp",
        "/combovolumen2.webp",
        "/combovolumen3.webp",
        "/combovolumen4.webp"
      ],
      category: "Combos",
      objective: ["Aumento de masa muscular", "Fuerza"],
      
      details: [
        "Gainer Gold 5lb con fórmula 8 en 1.",
        "Creatina Monohidratada Gold Nutrition 300g.",
        "BCAA 2000 x 120 cápsulas."
      ],
      modoDeUso: [
        "Gainer Gold: Mezclar 1 scoop con 200ml de agua o leche.",
        "Creatina: Consumir 5g diarios en agua o jugo.",
        "BCAA: Tomar 2 cápsulas antes y 2 cápsulas después del entrenamiento."
      ],
      beneficios: [
        "Aumenta la masa muscular.",
        "Mejora la recuperación muscular.",
        "Incrementa la fuerza y resistencia.",
        "Previene la fatiga muscular."
      ],
      ingredientes: [
        "Proteína concentrada y caseína.",
        "Creatina Monohidratada.",
        "BCAA (Leucina, Isoleucina, Valina).",
        "Vitaminas y Minerales."
      ]
    },
    {
      detail: "combo-whey-creatina-preworkout-ena",
      name: "Combo Fuerza y Resistencia",
      description: "Ideal para mejorar el rendimiento, la fuerza y la resistencia. Incluye Whey Protein True 1kg, Creatina Micronizada 300g y Pre-Workout Pre War 300g.",
      imageUrl: "/combofuerzaresistencia1.jpg",
      images: [
        "/combofuerzaresistencia1.jpg"
      ],
      category: "Combos",
      objective: ["Fuerza", "Resistencia", "Recuperación muscular"],
    
      details: [
        "Whey Protein True 1kg con proteínas de suero concentradas e hidrolizadas.",
        "Creatina Micronizada 300g para mayor fuerza y explosividad.",
        "Pre-Workout Pre War 300g para potenciar el rendimiento en entrenamientos intensos."
      ],
      modoDeUso: [
        "Whey Protein: Mezclar 1 scoop con 200ml de agua o leche después del entrenamiento.",
        "Creatina: Consumir 5g diarios en agua o jugo.",
        "Pre-Workout: Tomar 1 scoop con agua 20-30 minutos antes del entrenamiento."
      ],
      beneficios: [
        "Aumenta la fuerza y resistencia.",
        "Mejora la recuperación muscular.",
        "Incrementa la energía y el rendimiento en entrenamientos intensos."
      ],
      ingredientes: [
        "Proteína de suero concentrada e hidrolizada.",
        "Creatina Micronizada.",
        "Beta-Alanina, Cafeína y L-Arginina en el Pre-Workout."
      ]
    },
    {
      detail: "combo-whey-creatina-ena",
      name: "Combo Muscular y Cognitivo",
      description: "Perfecto para el desarrollo muscular y el rendimiento mental. Incluye Whey Protein True Made 2kg y Creatina Monohidratada en cápsulas.",
      imageUrl: "/combomuscularycognitivo1.jpg",
      images: [
        "/combomuscularycognitivo1.jpg"
      ],
      category: "Combos",
      objective: ["Masa muscular", "Rendimiento cognitivo"],
    
      details: [
        "Whey Protein True Made 2kg con proteínas de suero aisladas y concentradas.",
        "Creatina Monohidratada en cápsulas para mejorar fuerza y funciones cognitivas."
      ],
      modoDeUso: [
        "Whey Protein: Mezclar 1 scoop con 200ml de agua o leche después del entrenamiento.",
        "Creatina: Consumir 3 a 5g diarios con agua o jugo, preferiblemente después del entrenamiento."
      ],
      beneficios: [
        "Favorece el desarrollo y recuperación muscular.",
        "Aumenta la fuerza y el rendimiento físico.",
        "Mejora la función cognitiva y la concentración."
      ],
      ingredientes: [
        "Proteína de suero aislada y concentrada.",
        "Creatina Monohidratada."
      ]
    },
    {
      detail: "combo-ultra-mass-creatina-ena",
      name: "Combo Masa Muscular",
      description: "Este combo está diseñado para quienes buscan incrementar su masa muscular y mejorar el rendimiento físico. Incluye Ultra Mass sabor chocolate de 3 kg y Creatina Micronizada Pure Creatine ENA de 300 g.",
      imageUrl: "/combofuerza1.jpg",
      images: [
        "/combofuerza1.jpg",
      ],
      category: "Combos",
      objective: ["Aumento masa muscular", "Recuperación muscular"],
    
      details: [
        "Ultra Mass 3 kg sabor chocolate: suplemento que combina proteínas de alto valor biológico, carbohidratos, vitaminas y minerales para favorecer el aumento de peso y masa muscular.",
        "Creatina Micronizada 300 g: creatina monohidratada pura que mejora la potencia muscular y retrasa la fatiga durante el entrenamiento."
      ],
      modoDeUso: [
        "Ultra Mass: Mezclar 100 g (aproximadamente 3 medidas) con 300 ml de agua o leche. Consumir una porción diaria, preferiblemente después del entrenamiento.",
        "Creatina Micronizada: Diluir una medida (6,5 g) en 200 ml de agua o jugo. Consumir una porción diaria, idealmente antes del entrenamiento."
      ],
      beneficios: [
        "Contribuye al aumento de masa muscular y peso corporal.",
        "Mejora la potencia y resistencia durante el ejercicio.",
        "Favorece una rápida recuperación muscular post-entrenamiento."
      ],
      ingredientes: [
        "Ultra Mass: Maltodextrina, proteína de suero concentrada, sacarosa, glucosa, aislado proteico de soja, vitaminas y minerales.",
        "Creatina Micronizada: Creatina monohidratada pura."
      ]
    },
    {
  detail: "combo-recuperacion-ena",
  name: "Combo Recuperación - ENA",
  description: "Este combo está diseñado para facilitar la regeneración de tejidos musculares después del entrenamiento y retrasar la fatiga. Incluye Óxido Nítrico y TrueMade Whey Protein de 2 lb.",
  imageUrl: "/comboavanzado1.jpg",
  images: [
    "/comboavanzado1.jpg"
  ],
  category: "Combos",
  objective: ["Recuperación muscular", "Regeneración de tejidos"],

  details: [
    "Óxido Nítrico: Potente vasodilatador que mejora el flujo sanguíneo, permitiendo una mayor entrega de oxígeno y nutrientes a los músculos. Formulado con arginina alfa ceto glutarato, ornitina y glucosa, favorece una rápida recuperación y crecimiento muscular.",
    "TrueMade Whey Protein 2 lb: Mezcla de proteínas de suero concentrada (WPC) y aislada (WPI) de máxima pureza y rápida absorción. Proporciona un perfil completo de aminoácidos esenciales para una efectiva recuperación y desarrollo muscular."
  ],
  modoDeUso: [
    "Óxido Nítrico: Consumir según las indicaciones del envase, preferiblemente antes del entrenamiento para optimizar el rendimiento y la recuperación.",
    "TrueMade Whey Protein: Mezclar una medida con 200 ml de agua o leche. Consumir después del entrenamiento para favorecer la recuperación muscular."
  ],
  beneficios: [
    "Mejora el flujo sanguíneo y la entrega de nutrientes a los músculos.",
    "Acelera la recuperación y reduce la fatiga post-entrenamiento.",
    "Proporciona proteínas de alta calidad para el desarrollo y reparación muscular."
  ],
  ingredientes: [
    "Óxido Nítrico: Arginina alfa ceto glutarato, ornitina, glucosa.",
    "TrueMade Whey Protein: Proteína de suero concentrada (WPC), proteína de suero aislada (WPI)."
  ]
},
{
  detail: "combo-rendimiento-total",
  name: "Combo Rendimiento Total",
  description: "Un combo diseñado para maximizar el rendimiento deportivo, optimizar la recuperación y mejorar la composición corporal. Incluye TrueMade Whey Protein, Hydroxy Max Night, Creatina Micronizada y Re-Load.",
  imageUrl: "/combograsacorporal1.jpg",
  images: [
    "/combograsacorporal1.jpg",
  ],
  category: "Combos",
  objective: ["Aumento de energía", "Reducción de grasa corporal"],

  details: [
    "TrueMade Whey Protein: Mezcla de proteína de suero concentrada (WPC) e aislada (WPI) de alta pureza y rápida absorción. Favorece el desarrollo muscular y la recuperación post-entrenamiento.",
    "Hydroxy Max Night: Fórmula nocturna con ingredientes como L-carnitina y extractos naturales que potencian la quema de grasa durante el descanso y mejoran la calidad del sueño.",
    "Creatina Micronizada: Creatina de alta calidad que mejora la resistencia y el rendimiento deportivo, promoviendo la regeneración de ATP para entrenamientos más intensos.",
    "Re-Load: Suplemento post-entrenamiento con carbohidratos y electrolitos que ayuda a la recuperación muscular y reposición de energía después del ejercicio intenso."
  ],
  modoDeUso: [
    "TrueMade Whey Protein: Mezclar una medida con 200 ml de agua o leche. Consumir después del entrenamiento.",
    "Hydroxy Max Night: Tomar según indicaciones del envase antes de dormir.",
    "Creatina Micronizada: Mezclar una medida con agua o jugo y consumir antes o después del entrenamiento.",
    "Re-Load: Consumir después del entrenamiento para reponer electrolitos y acelerar la recuperación muscular."
  ],
  beneficios: [
    "Favorece el crecimiento y la recuperación muscular.",
    "Aumenta la resistencia y la fuerza en entrenamientos de alta intensidad.",
    "Optimiza la quema de grasa corporal durante el descanso.",
    "Rehidrata y repone energía después del ejercicio."
  ],
  ingredientes: [
    "TrueMade Whey Protein: Proteína de suero concentrada (WPC), proteína de suero aislada (WPI).",
    "Hydroxy Max Night: L-carnitina, extractos naturales.",
    "Creatina Micronizada: Creatina monohidratada de alta pureza.",
    "Re-Load: Carbohidratos, electrolitos, minerales esenciales."
  ]
}

    
    
];


