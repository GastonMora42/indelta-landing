// components/hero-carousel.tsx - VERSIÓN MEJORADA
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
  
  // Puntos destacados con iconos de check - MEJORADOS CON VERDE OSCURO Y NEGRITA
  const highlights = [
    { id: "inv", text: "Inversiones seguras" },
    { id: "crec", text: "Crecimiento constante" },
    { id: "prot", text: "Protección patrimonial" },
    { id: "rent", text: "Rentabilidad sostenible" },
    { id: "real", text: "Inversiones en Real Estate" }
  ]
  
  // Rotación automática del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])
  
  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-[#F8F9FC] overflow-hidden relative">
      {/* Efecto de luz verde reluciente */}
      <motion.div
        className="absolute top-0 left-10 w-[500px] h-[500px] rounded-full opacity-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.7, scale: 1, x: 0 }}
        style={{ 
          opacity: glowOpacity,
          scale: glowScale,
          y: glowY,
          background: 'radial-gradient(circle, rgba(102,172,173,0.3) 0%, rgba(102,172,173,0.1) 40%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna izquierda - Contenido de texto */}
          <div className="lg:col-span-6 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004647] leading-tight mb-6 relative z-20">
                Todo lo que necesitas para tu éxito financiero
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                Soluciones de inversión personalizadas que priorizan la seguridad y maximizan el rendimiento de tu patrimonio.
              </p>
              
              {/* CHECKS MEJORADOS CON VERDE OSCURO Y NEGRITA */}
              <div className="flex flex-wrap gap-6 mb-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                    className="flex items-center gap-3 border-b border-transparent hover:border-[#66ACAD]/30 py-2 transition-all"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#004647] flex items-center justify-center shadow-md">
                      <Check className="h-4 w-4 text-white font-bold" />
                    </div>
                    <span className="text-[#004647] text-base font-bold tracking-wide">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Buttons - CTA MEJORADOS */}
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  <Button className="w-full bg-[#004647] hover:bg-[#66ACAD] text-white py-7 text-lg md:text-xl relative overflow-hidden group shadow-lg border-2 border-[#004647] hover:border-[#66ACAD] transition-all duration-300">
                    <span className="relative z-10 flex items-center font-bold">
                      Comenzar ahora
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#004647] to-[#66ACAD] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  {/* BOTÓN VERDE OSCURO INVERTIDO */}
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[#004647] bg-[#004647] text-white hover:bg-white hover:text-[#004647] py-7 text-lg md:text-xl group shadow-lg transition-all duration-300 font-bold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="flex items-center">
                      Agendar consulta
                      <ExternalLink className="ml-3 h-6 w-6 transition-all group-hover:rotate-45" />
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
              className="relative h-[400px] md:h-[520px] p-2 bg-white rounded-2xl shadow-xl border border-[#66ACAD]/20 overflow-hidden"
            >
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
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all shadow-md ${
                        index === currentSlide 
                          ? "w-10 bg-[#004647]" 
                          : "w-3 bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Overlay sutil para mejorar la visibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#004647]/10 to-[#004647]/20 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}