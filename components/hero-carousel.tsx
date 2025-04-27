// components/hero-banner.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Check, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

type SlideType = {
  id: string
  image: string
  alt: string
}

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  
  // Transformación de las propiedades basadas en el scroll
  const glowOpacity = useTransform(scrollY, [0, 300], [0.7, 0])
  const glowScale = useTransform(scrollY, [0, 300], [1, 0.5])
  const glowY = useTransform(scrollY, [0, 300], [0, -50])
  
  // Datos para el carrusel de imágenes
  const slides: SlideType[] = [
    {
      id: "slide1",
      image: "/b1.webp",
      alt: "Inversiones estratégicas"
    },
    {
      id: "slide2",
      image: "/b2.webp",
      alt: "Planificación financiera"
    },
    {
      id: "slide3",
      image: "/b3.webp",
      alt: "Protección patrimonial"
    }
  ]
  
  // Puntos destacados con iconos de check
  const highlights = [
    { id: "inv", text: "Inversiones seguras" },
    { id: "crec", text: "Crecimiento constante" },
    { id: "prot", text: "Protección patrimonial" },
    { id: "rent", text: "Rentabilidad sostenible" }
  ]
  
  // Rotación automática del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])
  
  return (
    <section ref={sectionRef} className="py-10 md:py-16 bg-[#F8F9FC] overflow-hidden relative">
      {/* Efecto de luz dorada reluciente */}
      <motion.div
        className="absolute top-0 left-10 w-[500px] h-[500px] rounded-full opacity-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.7, scale: 1, x: 0 }}
        style={{ 
          opacity: glowOpacity,
          scale: glowScale,
          y: glowY,
          background: 'radial-gradient(circle, rgba(170,140,100,0.3) 0%, rgba(170,140,100,0.1) 40%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna izquierda - Contenido de texto */}
          <div className="lg:col-span-6 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a325a] leading-tight mb-4 relative z-20">
                Todo lo que necesitas para tu éxito financiero
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Soluciones de inversión personalizadas que priorizan la seguridad y maximizan el rendimiento de tu patrimonio.
              </p>
              
              {/* Cards con checks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#4CAF50]/5 border border-[#4CAF50]/20 hover:bg-[#4CAF50]/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4CAF50] flex items-center justify-center shadow-sm">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#0a325a] font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Buttons - CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  <Button className="w-full bg-[#0a325a] hover:bg-[#0a325a]/90 text-white py-6 text-base md:text-lg relative overflow-hidden group shadow-md">
                    <span className="relative z-10 flex items-center">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#0a325a] to-[#aa8c64] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full border-[#aa8c64] text-[#aa8c64] hover:bg-[#aa8c64]/5 py-6 text-base md:text-lg group shadow-sm">
                    <span className="flex items-center">
                      Agendar consulta
                      <ExternalLink className="ml-2 h-5 w-5 transition-all group-hover:rotate-45" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Columna derecha - Carrusel de imágenes */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-[380px] md:h-[480px] p-1.5 bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
            >
              {/* Carrusel con efecto de fade */}
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  {slides.map((slide, index) => (
                    index === currentSlide && (
                      <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
                
                {/* Indicadores del carrusel */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? "w-8 bg-white" 
                          : "w-2 bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Overlay para mejorar la visibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a325a]/20 to-[#0a325a]/40 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}