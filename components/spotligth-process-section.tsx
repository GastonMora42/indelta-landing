// components/spotlight-process-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { FileSearch, Rocket, TrendingUp, Check, ArrowRight, Sparkles, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function SpotlightProcessSection() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Iniciar animación cuando esté en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Detectar posición del mouse para efectos spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Datos de los pasos del proceso
  const steps = [
    {
      icon: FileSearch,
      number: 1,
      title: "Análisis y Diagnóstico",
      shortTitle: "Diagnóstico",
      description: "Evaluamos tu situación financiera actual, perfil de riesgo y objetivos de inversión para crear una estrategia personalizada.",
      details: [
        "Análisis de patrimonio actual",
        "Evaluación de tolerancia al riesgo",
        "Definición de objetivos financieros",
        "Revisión de inversiones existentes"
      ],
      gradient: "from-[#66ACAD] to-[#99C7C8]",
      accentColor: "#00B04F"
    },
    {
      icon: Sparkles,
      number: 2,
      title: "Diseño de Estrategia",
      shortTitle: "Estrategia",
      description: "Desarrollamos un plan de inversión único adaptado a tus necesidades específicas y horizonte temporal.",
      details: [
        "Selección de instrumentos financieros",
        "Diversificación de cartera",
        "Plan de implementación gradual",
        "Estrategias de protección patrimonial"
      ],
      gradient: "from-[#004647] to-[#66ACAD]",
      accentColor: "#99C7C8"
    },
    {
      icon: Rocket,
      number: 3,
      title: "Implementación",
      shortTitle: "Ejecución",
      description: "Ejecutamos la estrategia de manera precisa y eficiente, monitoreando cada paso del proceso.",
      details: [
        "Apertura de cuentas necesarias",
        "Ejecución de inversiones",
        "Implementación gradual",
        "Seguimiento en tiempo real"
      ],
      gradient: "from-[#99C7C8] to-[#004647]",
      accentColor: "#66ACAD"
    },
    {
      icon: TrendingUp,
      number: 4,
      title: "Monitoreo y Optimización",
      shortTitle: "Seguimiento",
      description: "Supervisamos continuamente tu cartera y realizamos ajustes para maximizar rendimientos.",
      details: [
        "Monitoreo constante de mercados",
        "Rebalanceo periódico de cartera",
        "Reportes de rendimiento",
        "Ajustes estratégicos"
      ],
      gradient: "from-[#004647] to-[#00B04F]",
      accentColor: "#66ACAD"
    }
  ]

  // Variantes de animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      },
    },
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.15
      },
    }),
  }

  return (
    <section 
      id="proceso" 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-[#004647] via-[#004647] to-[#003540] overflow-hidden"
    >
      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos flotantes animados */}
        <motion.div 
          className="absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-[#66ACAD]/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-[#99C7C8]/15 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-[50%] right-[20%] w-64 h-64 rounded-full bg-[#00B04F]/10 blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Spotlight effect que sigue al mouse */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(102,172,173,0.4) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#66ACAD]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-30, -120, -30],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="w-5 h-5 text-[#00B04F]" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Metodología probada
            </span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nuestro proceso
            <motion.div
              className="absolute -top-3 -right-3"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-[#00B04F] fill-current" />
            </motion.div>
          </motion.h2>

          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Un enfoque estructurado y transparente que garantiza{" "}
            <span className="text-[#00B04F] font-semibold">resultados excepcionales</span>{" "}
            en cada etapa de tu inversión
          </motion.p>
        </motion.div>

        {/* Grid de pasos con spotlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={stepVariants}
              className="relative group"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Spotlight Card */}
              <div className="relative h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 hover:border-white/40 hover:bg-white/15">
                
                {/* Spotlight effect en hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                  }}
                />

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-[2px] rounded-3xl bg-gradient-to-br ${step.gradient} opacity-20`} />
                </div>

                {/* Moving gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30"
                  animate={activeStep === index ? {
                    background: [
                      `linear-gradient(45deg, transparent, ${step.accentColor}20, transparent)`,
                      `linear-gradient(135deg, transparent, ${step.accentColor}20, transparent)`,
                      `linear-gradient(225deg, transparent, ${step.accentColor}20, transparent)`,
                      `linear-gradient(315deg, transparent, ${step.accentColor}20, transparent)`
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Número del paso con efecto mejorado */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B04F] to-[#66ACAD] flex items-center justify-center text-white font-bold text-2xl shadow-2xl border-4 border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={activeStep === index ? {
                        boxShadow: [
                          "0 0 20px rgba(0,181,79,0.5)",
                          "0 0 40px rgba(0,181,79,0.8)",
                          "0 0 20px rgba(0,181,79,0.5)"
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Icono con animación */}
                  <motion.div 
                    className="mb-8 mt-6"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/30 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={activeStep === index ? {
                          background: [
                            `conic-gradient(from 0deg, ${step.accentColor}40, transparent, ${step.accentColor}40)`,
                            `conic-gradient(from 120deg, ${step.accentColor}40, transparent, ${step.accentColor}40)`,
                            `conic-gradient(from 240deg, ${step.accentColor}40, transparent, ${step.accentColor}40)`
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {React.createElement(step.icon, {
                        size: 32,
                        className: "text-white relative z-10"
                      })}
                    </div>
                  </motion.div>

                  {/* Título */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-[#00B04F] transition-colors duration-300"
                    animate={activeStep === index ? {
                      backgroundPosition: ["0%", "100%", "0%"]
                    } : {}}
                    style={activeStep === index ? {
                      backgroundImage: `linear-gradient(90deg, #ffffff, #00B04F, #ffffff)`,
                      backgroundSize: "200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent"
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Descripción */}
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Lista de detalles */}
                  <div className="space-y-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeStep === index ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="h-5 w-5 text-[#00B04F] mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-white/90 text-sm leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Indicador de progreso animado */}
                  <motion.div
                    className="h-1 bg-white/20 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={activeStep === index ? { width: "100%" } : { width: "60%" }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`}
                      animate={activeStep === index ? {
                        x: ["-100%", "100%"]
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#00B04F]/60" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/40" />
              </div>

              {/* Conectores entre cards (solo desktop) */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                  <motion.div
                    className="w-8 h-0.5 bg-gradient-to-r from-white/60 to-transparent"
                    animate={{ 
                      width: [32, 40, 32],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action final */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 relative overflow-hidden"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent, rgba(0,181,79,0.1), transparent)",
                    "linear-gradient(135deg, transparent, rgba(102,172,173,0.1), transparent)",
                    "linear-gradient(225deg, transparent, rgba(0,181,79,0.1), transparent)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(0,181,79,0.5)",
                    "0 0 40px rgba(0,181,79,0.8)",
                    "0 0 20px rgba(0,181,79,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Tu futuro financiero comienza hoy
              </motion.h3>

              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
                Nuestro equipo de expertos está preparado para guiarte en cada paso del proceso hacia la libertad financiera
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button 
                  className="bg-gradient-to-r from-[#00B04F] to-[#66ACAD] hover:from-[#66ACAD] hover:to-[#00B04F] text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl group relative overflow-hidden"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Iniciar mi proceso ahora
                    <ArrowRight className="ml-3 h-6 w-6 transition-all group-hover:translate-x-2" />
                  </span>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}