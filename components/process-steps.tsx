"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, FileText, Users, TrendingUp } from "lucide-react"
import { motion, useAnimation, useInView, Variants } from "framer-motion"

export function ProcessSteps() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  // Detectar preferencias de movimiento reducido
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  // Iniciar animación cuando esté en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Datos de los pasos del proceso
  const steps = [
    {
      icon: FileText,
      color: "#0a325a",
      title: "Evaluación inicial",
      description: "Analizamos tu situación financiera actual, objetivos y tolerancia al riesgo.",
      number: 1
    },
    {
      icon: CheckCircle2,
      color: "#93ABC3",
      title: "Diseño de estrategia",
      description: "Creamos un plan personalizado basado en tus necesidades específicas.",
      number: 2
    },
    {
      icon: Users,
      color: "#99C7C8",
      title: "Implementación",
      description: "Ejecutamos la estrategia con un enfoque meticuloso y transparente.",
      number: 3
    },
    {
      icon: TrendingUp,
      color: "#aa8c64",
      title: "Seguimiento continuo",
      description: "Monitoreamos y ajustamos tu cartera para adaptarnos a los cambios del mercado.",
      number: 4
    }
  ]

  // Variantes de animación
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0.1 : 0.3,
        delayChildren: 0.1
      },
    },
  }

  const stepVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 10 : 40
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        damping: 12,
        stiffness: 50,
        duration: prefersReducedMotion ? 0.3 : 0.6,
        delay: i * 0.1
      },
    }),
  }

  const circleVariants: Variants = {
    hidden: { 
      scale: 0.7, 
      opacity: 0 
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        delay: 0.05 + (i * 0.1)
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  }

  const numberBadgeVariants: Variants = {
    hidden: { 
      scale: 0, 
      opacity: 0 
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        delay: 0.2 + (i * 0.15)
      },
    }),
  }

  const pulseVariants: Variants = {
    hidden: { 
      scale: 1, 
      opacity: 0.5 
    },
    visible: {
      scale: [1, 1.03, 1],
      opacity: [0.5, 0.7, 0.5],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      },
    },
  }

  const lineConnectorVariants: Variants = {
    hidden: {
      width: "0%",
      opacity: 0
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Renderizado del componente
  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="w-full py-16 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 px-6 relative">
        {/* Líneas conectoras (solo en desktop) */}
        <div className="absolute top-[60px] left-0 w-full hidden lg:flex justify-center z-0 px-28">
          <motion.div
            variants={lineConnectorVariants}
            className="h-0.5 bg-gradient-to-r from-[#0a325a]/20 via-[#93ABC3]/40 to-[#aa8c64]/20 w-[80%]"
          />
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={stepVariants}
            className="flex flex-col items-center text-center relative"
            whileHover={{ 
              y: prefersReducedMotion ? 0 : -5,
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* Círculo con icono */}
            <div className="relative mb-6">
              <motion.div
                custom={index}
                variants={circleVariants}
                whileHover={prefersReducedMotion ? {} : "hover"}
                className="w-24 h-24 rounded-full flex items-center justify-center relative z-10"
                style={{ 
                  background: `radial-gradient(circle at 30% 30%, ${step.color}, ${step.color}ee)`
                }}
              >
                <step.icon 
                  className="h-12 w-12"
                  color="white"
                />
                
                {/* Efecto de pulso */}
                {!prefersReducedMotion && (
                  <motion.div
                    variants={pulseVariants}
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    style={{ 
                      boxShadow: `0 0 15px ${step.color}80`,
                      background: `radial-gradient(circle at 30% 30%, ${step.color}50, ${step.color}00)`,
                    }}
                  />
                )}
              </motion.div>
              
              {/* Número del paso */}
              <motion.div
                custom={index}
                variants={numberBadgeVariants}
                className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#aa8c64] shadow-lg flex items-center justify-center text-white font-bold z-20"
              >
                {step.number}
              </motion.div>
            </div>
            
            {/* Contenido de texto */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.3 + (index * 0.1),
                duration: 0.5
              }}
              className="text-xl font-semibold text-[#0a325a] mb-3"
            >
              {step.title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ 
                delay: 0.4 + (index * 0.1),
                duration: 0.5
              }}
              className="text-slate-600 max-w-xs mx-auto"
            >
              {step.description}
            </motion.p>
            
            {/* Indicador de paso activo */}
            <motion.div 
              className="h-1 w-16 rounded-full mt-4 bg-transparent"
              animate={{
                backgroundColor: activeStep === index ? step.color : "transparent",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}