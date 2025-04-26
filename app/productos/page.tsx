"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/app/data/products";
import { Check, ChevronDown, X, RefreshCw } from "lucide-react";

const categories = [
  "Todos",
  "Proteínas",
  "Aminoácidos",
  "Creatina",
  "Termogénicos",
  "Pre entreno",
  "Vitaminas y Minerales",
  "Salud",
  "Ganadores de masa",
  "Combos",
];

function ProductosContent() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const filterProducts = useCallback(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes("Todos")
    ) {
      filtered = filtered.filter((product) =>
        selectedCategories.some((category) =>
          product.category.includes(category)
        )
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // Modificar para leer múltiples parámetros de categoría
  useEffect(() => {
    // Obtener todos los parámetros de la URL
    const urlParams = new URLSearchParams(searchParams.toString());
    const categoryParams = urlParams.getAll("categoria");

    if (categoryParams.length > 0) {
      // Filtrar solo las categorías válidas
      const validCategories = categoryParams.filter((cat) =>
        categories.includes(cat)
      );
      if (validCategories.length > 0) {
        setSelectedCategories(validCategories);
      }
    } else {
      // Si no hay parámetros de categoría, verificar si hay un solo parámetro
      const singleCategory = searchParams.get("categoria");
      if (singleCategory && categories.includes(singleCategory)) {
        setSelectedCategories([singleCategory]);
      }
    }
  }, [searchParams]);

  const toggleCategory = (category: string) => {
    if (category === "Todos") {
      setSelectedCategories([]);
      setIsDropdownOpen(false);
      return;
    }

    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };

  return (
    <div className="bg-negro">
      <h1 className="text-4xl font-bold mb-8 text-center text-rojoprincipal">
        Nuestros Productos
      </h1>

      <div className="mb-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-negro/50 text-blanco border-rojoprincipal/50 w-full focus:border-rojoprincipal pr-10 h-10"
            />
            {searchTerm && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blanco/50 hover:text-rojoprincipal"
                onClick={() => setSearchTerm("")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-negro/50 text-blanco border border-rojoprincipal/50 rounded-md px-3 h-10 focus:border-rojoprincipal"
            >
              <span className="truncate">
                {selectedCategories.length === 0
                  ? "Todas las categorías"
                  : selectedCategories.length === 1
                  ? selectedCategories[0]
                  : `${selectedCategories.length} categorías seleccionadas`}
              </span>
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-grisoscuro border border-rojoprincipal/30 rounded-md shadow-lg max-h-60 overflow-auto">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center px-3 py-2 hover:bg-rojoprincipal/20 cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    <div
                      className={`w-5 h-5 mr-2 flex items-center justify-center rounded border ${
                        (category === "Todos" &&
                          selectedCategories.length === 0) ||
                        selectedCategories.includes(category)
                          ? "bg-rojoprincipal border-rojoprincipal"
                          : "border-blanco/30"
                      }`}
                    >
                      {((category === "Todos" &&
                        selectedCategories.length === 0) ||
                        selectedCategories.includes(category)) && (
                        <Check className="h-3 w-3 text-blanco" />
                      )}
                    </div>
                    <span className="text-blanco">{category}</span>
                  </div>
                ))}
              </div>
            )}
            {(searchTerm || selectedCategories.length > 0) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex text-sm justify-center items-center text-rojoprincipal m-1 hover:text-rojosecundario transition-colors"
                onClick={clearFilters}
              >
                <RefreshCw className="h-3.5 w-3.5 mr-1" />
                Limpiar filtros
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-blanco/80">
            No se encontraron productos que coincidan con tu búsqueda.
          </p>
          <Button
            className="mt-4 bg-rojoprincipal hover:bg-rojosecundario text-blanco"
            onClick={clearFilters}
          >
            Mostrar todos los productos
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.detail}
              className="hover:cursor-pointer bg-negro/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push(`/productos/${product.detail}`)}
            >
              <div className="relative h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 pointer-events-auto"
                  onClick={e => {
                    e.stopPropagation();
                    router.push(`/productos/${product.detail}`);
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rojoprincipal">
                  {product.name}
                </h3>
                <p className="text-sm mb-4 text-blanco/80">
                  {" "}
                  {product.description.length > 80
                    ? `${product.description.slice(0, 80)}...`
                    : product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-rojosecundario">
                    Objetivos:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.objective.map(obj => (
                    <span
                      key={obj}
                      className="text-xs bg-rojoprincipal/20 text-rojoprincipal px-2 py-1 rounded-full"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
                <Button 
                  className="w-full bg-rojoprincipal text-blanco p-0"
                  onClick={e => {
                    e.stopPropagation();
                    router.push(`/productos/${product.detail}`);
                  }}
                >
                  Ver detalles
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Productos() {
  return (
    <div className="flex flex-col min-h-screen bg-negro text-blanco">
      <Navbar />
      <main className="flex-grow pt-20 px-4 pb-12">
        <Suspense
          fallback={ <div className="text-center py-12">Cargando productos...</div> }
        >
          <ProductosContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
