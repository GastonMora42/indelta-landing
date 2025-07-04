// components/circular-gallery-header.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CircularGalleryHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Imágenes para el carousel circular
  const images = [
    {
      id: 1,
      src: "/b1.webp",
      alt: "Inversiones estratégicas"
    },
    {
      id: 2,
      src: "/b2.webp", 
      alt: "Planificación financiera"
    },
    {
      id: 3,
      src: "/b3.webp",
      alt: "Protección patrimonial"
    },
    {
      id: 4,
      src: "/banner1.webp",
      alt: "Análisis de mercado"
    },
    {
      id: 5,
      src: "/banner2.webp",
      alt: "Gestión de activos"
    }
  ]
  
  // Puntos destacados con iconos de check - VERDE OSCURO Y NEGRITA
  const highlights = [
    { id: "inv", text: "Inversiones seguras" },
    { id: "crec", text: "Crecimiento constante" },
    { id: "prot", text: "Protección patrimonial" },
    { id: "rent", text: "Rentabilidad sostenible" },
    { id: "real", text: "Inversiones en Real Estate" }
  ]
  
  // Rotación automática
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRotation(prev => prev + 72) // 360/5 = 72 grados por imagen
      setCurrentImageIndex(prev => (prev + 1) % images.length)
    }, 4000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])
  
  const handleImageClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    const targetRotation = index * 72
    setRotation(targetRotation)
    setCurrentImageIndex(index)
    
    // Restart auto rotation after manual click
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setRotation(prev => prev + 72)
        setCurrentImageIndex(prev => (prev + 1) % images.length)
      }, 4000)
    }, 3000)
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#F8F9FC] via-[#66ACAD]/5 to-white overflow-hidden relative">
      {/* Efecto de luz verde reluciente */}
      <motion.div
        className="absolute top-0 left-10 w-[500px] h-[500px] rounded-full opacity-30"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ 
          background: 'radial-gradient(circle, rgba(0,70,71,0.4) 0%, rgba(102,172,173,0.2) 40%, rgba(255,255,255,0) 70%)',
          filter: 'blur(60px)'
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
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004647] leading-tight mb-6 relative z-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Todo lo que necesitas para tu éxito financiero
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Soluciones de inversión personalizadas que priorizan la seguridad y maximizan el rendimiento de tu patrimonio.
              </motion.p>
              
              {/* CHECKS MEJORADOS CON VERDE OSCURO Y NEGRITA */}
              <div className="flex flex-wrap gap-6 mb-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    className="flex items-center gap-3 border-b border-transparent hover:border-[#004647]/30 py-2 transition-all group"
                  >
                    <motion.div 
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-[#004647] flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#00B04F" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="h-4 w-4 text-white font-bold" />
                    </motion.div>
                    <span className="text-[#004647] text-base font-bold tracking-wide group-hover:text-[#00B04F] transition-colors">
                      {item.text}
                    </span>
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
          
          {/* Columna derecha - Circular Gallery */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[450px] md:h-[520px] flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {/* Contenedor del carousel circular */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Círculo central con imagen destacada */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white z-20"
                  style={{
                    background: `linear-gradient(45deg, rgba(0,70,71,0.1), rgba(102,172,173,0.1))`
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#004647]/20 to-[#004647]/40"></div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                
                {/* Imágenes orbitales */}
                {images.map((image, index) => {
                  const angle = (index * 72) - rotation
                  const radius = 200
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  
                  return (
                    <motion.div
                      key={image.id}
                      className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden cursor-pointer shadow-lg border-2 border-white z-10"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                      }}
                      animate={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                        scale: index === currentImageIndex ? 1.2 : 1,
                        borderColor: index === currentImageIndex ? "#00B04F" : "#ffffff"
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeInOut",
                        scale: { duration: 0.3 }
                      }}
                      onClick={() => handleImageClick(index)}
                      whileHover={{ 
                        scale: index === currentImageIndex ? 1.3 : 1.1,
                        borderColor: "#66ACAD"
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#004647]/30"></div>
                    </motion.div>
                  )
                })}
                
                {/* Líneas conectoras animadas */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: rotation }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="absolute w-0.5 bg-gradient-to-r from-transparent via-[#66ACAD]/50 to-transparent"
                      style={{
                        height: "200px",
                        left: "50%",
                        top: "50%",
                        transformOrigin: "bottom center",
                        transform: `translate(-50%, -100%) rotate(${index * 72}deg)`,
                        opacity: 0.6
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Efecto de glow central */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0,70,71,0.3)",
                      "0 0 40px rgba(102,172,173,0.5)", 
                      "0 0 20px rgba(0,70,71,0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Indicadores del carousel */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`h-3 rounded-full transition-all shadow-md ${
                      index === currentImageIndex 
                        ? "w-10 bg-[#004647]" 
                        : "w-3 bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}