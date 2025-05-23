// Actualización en hero-image.tsx
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView, useMotionValue, useTransform } from "framer-motion"
import { DollarSign, BarChart2, Shield, Sprout } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HeroImage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  // Valores para la animación 3D
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + index * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const iconInfo = [
    { icon: DollarSign, color: "#0a325a", text: "Inversiones seguras" },
    { icon: BarChart2, color: "#93ABC3", text: "Crecimiento constante" },
    { icon: Shield, color: "#99C7C8", text: "Protección patrimonial" },
    { icon: Sprout, color: "#aa8c64", text: "Rentabilidad sostenible" },
  ]

  return (
    <div ref={ref} className="flex flex-col md:flex-row gap-6 items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 w-full md:w-3/5"
        onMouseMove={handleMouseMove}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div 
          variants={imageVariants} 
          className="relative h-full w-full"
          style={{
            rotateX,
            rotateY,
            transition: "transform 0.1s ease-out", // Corrección aquí
          }}
        >
          <Image
            src="/hero-image-new.jpg"
            alt="Asesora financiera"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a325a]/20 to-transparent rounded-2xl"></div>
        </motion.div>

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a325a]/30 to-[#aa8c64]/30 rounded-2xl blur-md"></div>
        </motion.div>
      </motion.div>

      {/* Animated Icon Cards */}
      <div className="flex flex-col gap-3 w-full md:w-2/5">
        {iconInfo.map((item, index) => (
          <motion.div key={index} custom={index} variants={cardVariants} initial="hidden" animate={controls}>
            <Card className="p-4 flex items-center gap-4 shadow-md hover:shadow-lg">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                <item.icon className="h-6 w-6" style={{ color: item.color }} />
              </div>
              <p className="font-medium text-[#0a325a]">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}