// components/hero-carousel.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/banner4.webp",
    alt: "Protección patrimonial",
    title: "Protección patrimonial para tu futuro financiero",
    description: "Asesoramiento financiero personalizado para inversores que buscan seguridad, crecimiento y tranquilidad."
  },
  {
    src: "/banner2.webp",
    alt: "Estrategias financieras",
    title: "Estrategias financieras que garantizan estabilidad",
    description: "Soluciones de inversión diseñadas para minimizar riesgos y maximizar rendimientos a largo plazo."
  },
  {
    src: "/banner3.webp",
    alt: "Crecimiento sostenible",
    title: "Crecimiento sostenible para tu patrimonio",
    description: "Enfoque balanceado para hacer crecer tu capital de manera segura y consistente en el tiempo."
  }
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 5000)
  }

  useEffect(() => {
    if (!isAutoplay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoplay])

  return (
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative h-full w-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a325a]/80 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 z-10 w-full md:w-2/3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              >
                {images[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-white/90 max-w-lg mb-6"
              >
                {images[currentIndex].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white px-6 py-6 text-lg">
                  Protege tu patrimonio
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg"
                >
                  Conoce más
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Carousel Controls */}
      <Button 
        onClick={prevSlide} 
        size="icon" 
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button 
        onClick={nextSlide} 
        size="icon" 
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoplay(false)
              setTimeout(() => setIsAutoplay(true), 5000)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}