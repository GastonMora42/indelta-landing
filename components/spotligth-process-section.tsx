// components/optimized-spotlight-process.tsx
"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileSearch, Rocket, TrendingUp, Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function SpotlightProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: FileSearch,
      number: 1,
      title: "Análisis y Diagnóstico",
      description: "Evaluamos tu situación financiera actual, perfil de riesgo y objetivos de inversión para crear una estrategia personalizada.",
      details: [
        "Análisis de patrimonio actual",
        "Evaluación de tolerancia al riesgo",
        "Definición de objetivos financieros"
      ]
    },
    {
      icon: Sparkles,
      number: 2,
      title: "Diseño de Estrategia",
      description: "Desarrollamos un plan de inversión único adaptado a tus necesidades específicas y horizonte temporal.",
      details: [
        "Selección de instrumentos financieros",
        "Diversificación de cartera",
        "Plan de implementación gradual"
      ]
    },
    {
      icon: Rocket,
      number: 3,
      title: "Implementación",
      description: "Ejecutamos la estrategia de manera precisa y eficiente, monitoreando cada paso del proceso.",
      details: [
        "Apertura de cuentas necesarias",
        "Ejecución de inversiones",
        "Seguimiento en tiempo real"
      ]
    },
    {
      icon: TrendingUp,
      number: 4,
      title: "Monitoreo y Optimización",
      description: "Supervisamos continuamente tu cartera y realizamos ajustes para maximizar rendimientos.",
      details: [
        "Monitoreo constante de mercados",
        "Rebalanceo periódico de cartera",
        "Reportes de rendimiento"
      ]
    }
  ]

  return (
    <section 
      id="proceso" 
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-[#004647] to-[#003540] relative overflow-hidden"
    >
      {/* Fondo simplificado */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-[#66ACAD]/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-[#99C7C8]/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-[#00B04F]" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Metodología probada
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestro proceso
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Un enfoque estructurado y transparente que garantiza{" "}
            <span className="text-[#00B04F] font-semibold">resultados excepcionales</span>{" "}
            en cada etapa de tu inversión
          </p>
        </motion.div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-300 hover:border-white/40 hover:bg-white/15">
                
                {/* Número del paso */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B04F] to-[#66ACAD] flex items-center justify-center text-white font-bold text-2xl shadow-2xl border-4 border-white/20">
                  {step.number}
                </div>

                {/* Icono */}
                <div className="mb-8 mt-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/30">
                    {React.createElement(step.icon, {
                      size: 32,
                      className: "text-white"
                    })}
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00B04F] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Lista de detalles */}
                <div className="space-y-3 mb-8">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#00B04F] mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Indicador de progreso */}
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00B04F] to-[#66ACAD] rounded-full"
                    initial={{ width: "0%" }}
                    animate={activeStep === index ? { width: "100%" } : { width: "60%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#00B04F]/60" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/40" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu futuro financiero comienza hoy
            </h3>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para guiarte en cada paso del proceso hacia la libertad financiera
            </p>

            <Button 
              className="bg-gradient-to-r from-[#00B04F] to-[#66ACAD] hover:from-[#66ACAD] hover:to-[#00B04F] text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center">
                Iniciar mi proceso ahora
                <ArrowRight className="ml-3 h-6 w-6 transition-all group-hover:translate-x-2" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
