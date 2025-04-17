// components/testimonial-cta.tsx (modificado)
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"

export function TestimonialCta() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isInView && isVisible) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView, isVisible])

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  // Si no es visible, no renderizar nada
  if (!isVisible) return null

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 max-w-md"
      >
        <Card className="p-6 border-4 border-white shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 z-20 h-8 w-8 text-gray-500 hover:text-gray-800 hover:bg-gray-200/70"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="relative mb-4 rounded-lg overflow-hidden">
            <Image
              src="/banner1.webp"
              alt="Invierte con nosotros"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a325a]/40 to-transparent"></div>
          </div>

          <motion.h3 variants={childVariants} className="text-2xl font-bold text-[#0a325a] mb-2">
            Tu futuro financiero comienza hoy
          </motion.h3>

          <motion.p variants={childVariants} className="text-slate-600 mb-4">
            Únete a nuestros clientes satisfechos y comienza a construir un patrimonio sólido con asesoramiento
            profesional.
          </motion.p>

          <motion.div variants={childVariants}>
            <Button className="w-full bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white py-6 group">
              Invertí seguro, invertí con nosotros
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}