// components/trusted-brands-carousel.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function TrustedBrandsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  
  // Lista de marcas (reemplaza con tus marcas reales)
  const brands = [
    { id: 1, name: "Microsoft", logo: "/ib.webp" },
    { id: 2, name: "Google", logo: "/pfizer.webp" },
    { id: 3, name: "Amazon", logo: "/nike.webp" },
    { id: 4, name: "Apple", logo: "/Inviu.webp" },
    { id: 5, name: "IBM", logo: "/cadab.webp" },
    { id: 6, name: "Oracle", logo: "/jpmorgan.webp" },
    { id: 7, name: "Tesla", logo: "/bny.webp" },
    { id: 8, name: "Meta", logo: "/ZURICH.webp" },
    { id: 9, name: "Salesforce", logo: "/usa.webp" },
    { id: 10, name: "Adobe", logo: "/balanz.webp" },
  ]

  // Calcula la anchura para la animación
  useEffect(() => {
    if (containerRef.current) {
      // Establece el ancho para que sea mayor que el contenedor y permita un bucle continuo
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth + 100)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#aa8c64] uppercase tracking-wider mb-2 block">Marcas que confían en nosotros</span>
          <h2 className="text-3xl font-bold text-[#0a325a] mb-4">Socios estratégicos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trabajamos con empresas líderes en diversos sectores para potenciar su crecimiento financiero
          </p>
        </div>
        
        {/* Carrusel de logos con desplazamiento automático */}
        <div className="overflow-hidden mx-auto max-w-6xl">
          <motion.div
            ref={containerRef}
            className="flex items-center"
            animate={{
              x: [-width, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {/* Primera serie de logos */}
            {brands.map((brand) => (
              <div key={brand.id} className="mx-8 flex-shrink-0">
                <div className="h-20 w-40 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicado para crear un bucle continuo */}
            {brands.map((brand) => (
              <div key={`${brand.id}-duplicate`} className="mx-8 flex-shrink-0">
                <div className="h-20 w-40 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="object-contain h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}