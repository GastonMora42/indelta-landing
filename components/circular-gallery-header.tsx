// components/responsive-carousel-header.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CircularGalleryHeader() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      src: "/b1.webp",
      alt: "Inversiones estratégicas",
      title: "Inversiones Estratégicas",
      subtitle: "Maximiza tu rentabilidad"
    },
    {
      id: 2,
      src: "/b2.webp", 
      alt: "Planificación financiera",
      title: "Planificación Financiera",
      subtitle: "Asegura tu futuro"
    },
    {
      id: 3,
      src: "/b3.webp",
      alt: "Protección patrimonial",
      title: "Protección Patrimonial",
      subtitle: "Preserva tu riqueza"
    },
    {
      id: 4,
      src: "/banner1.webp",
      alt: "Análisis de mercado",
      title: "Análisis de Mercado",
      subtitle: "Decisiones informadas"
    },
    {
      id: 5,
      src: "/banner2.webp",
      alt: "Gestión de activos",
      title: "Gestión de Activos",
      subtitle: "Crecimiento sostenible"
    }
  ]
  
  const highlights = [
    { id: "inv", text: "Inversiones seguras" },
    { id: "crec", text: "Crecimiento constante" },
    { id: "prot", text: "Protección patrimonial" },
    { id: "rent", text: "Rentabilidad sostenible" },
    { id: "real", text: "Inversiones en Real Estate" }
  ]
  
  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [slides.length])
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FC] via-[#66ACAD]/5 to-white overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenido de texto - mismo que antes */}
          <div className="lg:col-span-6 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004647] leading-tight mb-6">
                Todo lo que necesitas para tu éxito financiero
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                Soluciones de inversión personalizadas que priorizan la seguridad y maximizan el rendimiento de tu patrimonio.
              </p>
              
              {/* Checks con verde oscuro */}
              <div className="flex flex-wrap gap-6 mb-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#004647] flex items-center justify-center shadow-lg group-hover:bg-[#00B04F] transition-colors duration-200">
                      <Check className="h-4 w-4 text-white font-bold" />
                    </div>
                    <span className="text-[#004647] text-base font-bold tracking-wide group-hover:text-[#00B04F] transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="flex-1 bg-[#004647] hover:bg-[#66ACAD] text-white py-7 text-lg md:text-xl font-bold shadow-lg border-2 border-[#004647] hover:border-[#66ACAD] transition-all duration-300 group">
                  <span className="flex items-center">
                    Comenzar ahora
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 border-[#004647] bg-[#004647] text-white hover:bg-white hover:text-[#004647] py-7 text-lg md:text-xl group shadow-lg font-bold transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    Agendar consulta
                    <ExternalLink className="ml-3 h-6 w-6 transition-all group-hover:rotate-45" />
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Carrusel responsivo moderno */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Contenedor del carrusel */}
              <div className="relative h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Slides */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[currentSlide].src}
                      alt={slides[currentSlide].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Overlay con información */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004647]/80 via-transparent to-transparent">
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <motion.h3 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-2xl md:text-3xl font-bold mb-2"
                        >
                          {slides[currentSlide].title}
                        </motion.h3>
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg text-white/90"
                        >
                          {slides[currentSlide].subtitle}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Controles de navegación */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-10"
                  aria-label="Slide siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Indicadores de posición */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? "w-8 bg-white" 
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Ir a slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnails en móvil */}
              <div className="mt-4 grid grid-cols-5 gap-2 md:hidden">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentSlide ? "border-[#004647] scale-105" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}