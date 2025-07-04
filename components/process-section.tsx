// components/process-section.tsx - NUEVO COMPONENTE
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { FileSearch, Rocket, TrendingUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProcessSection() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [activeStep, setActiveStep] = useState<number | null>(null)

  // Iniciar animación cuando esté en vista
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Datos de los pasos del proceso
  const steps = [
    {
      icon: FileSearch,
      color: "#004647",
      bgColor: "#66ACAD",
      title: "Análisis y Diagnóstico",
      shortTitle: "Análisis",
      description: "Evaluamos tu situación financiera actual, perfil de riesgo y objetivos de inversión para crear una estrategia personalizada.",
      details: [
        "Análisis de patrimonio actual",
        "Evaluación de tolerancia al riesgo",
        "Definición de objetivos financieros",
        "Revisión de inversiones existentes"
      ],
      number: 1
    },
    {
      icon: TrendingUp, // Cambiado PresentationChart por TrendingUp para evitar error de importación
      color: "#66ACAD",
      bgColor: "#99C7C8",
      title: "Diseño de Estrategia",
      shortTitle: "Estrategia",
      description: "Desarrollamos un plan de inversión único adaptado a tus necesidades específicas y horizonte temporal.",
      details: [
        "Selección de instrumentos financieros",
        "Diversificación de cartera",
        "Plan de implementación gradual",
        "Estrategias de protección patrimonial"
      ],
      number: 2
    },
    {
      icon: Rocket,
      color: "#99C7C8",
      bgColor: "#004647",
      title: "Implementación",
      shortTitle: "Ejecución",
      description: "Ejecutamos la estrategia de manera precisa y eficiente, monitoreando cada paso del proceso.",
      details: [
        "Apertura de cuentas necesarias",
        "Ejecución de inversiones",
        "Implementación gradual",
        "Seguimiento en tiempo real"
      ],
      number: 3
    },
    {
      icon: TrendingUp,
      color: "#004647",
      bgColor: "#66ACAD",
      title: "Monitoreo y Optimización",
      shortTitle: "Seguimiento",
      description: "Supervisamos continuamente tu cartera y realizamos ajustes para maximizar rendimientos.",
      details: [
        "Monitoreo constante de mercados",
        "Rebalanceo periódico de cartera",
        "Reportes de rendimiento",
        "Ajustes estratégicos"
      ],
      number: 4
    }
  ]

  // Variantes de animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      },
    },
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.2
      },
    }),
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2, 
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <section id="proceso" className="py-24 bg-gradient-to-b from-white via-[#66ACAD]/5 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-[#66ACAD]/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-[#004647]/5 blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] w-64 h-64 rounded-full bg-[#99C7C8]/10 blur-3xl"></div>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-6 py-2 bg-[#66ACAD] rounded-full text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Metodología
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004647] mb-6">Nuestro proceso</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un enfoque estructurado y transparente que garantiza resultados excepcionales en cada etapa de tu inversión
          </p>
        </motion.div>

        {/* Proceso visual */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative max-w-6xl mx-auto"
        >
          {/* Línea conectora animada - Solo en desktop */}
          <div className="hidden lg:block absolute top-32 left-0 w-full h-2 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 2" preserveAspectRatio="none">
              <motion.path
                d="M0,1 Q25,0 50,1 T100,1"
                stroke="url(#processGradient)"
                strokeWidth="0.5"
                fill="none"
                variants={lineVariants}
              />
              <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#004647" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#66ACAD" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#004647" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Grid de pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                className="relative group"
                whileHover={{ y: -10 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Card principal */}
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 h-full ${
                  activeStep === index 
                    ? 'border-[#66ACAD] shadow-2xl' 
                    : 'border-gray-100 hover:border-[#66ACAD]/50'
                }`}>
                  {/* Número del paso */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#004647] to-[#66ACAD] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>

                  {/* Icono */}
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-[#004647] scale-110' 
                      : 'bg-[#66ACAD]/20'
                  }`}>
                    <step.icon 
                      className={`h-8 w-8 transition-colors duration-300 ${
                        activeStep === index ? 'text-white' : 'text-[#004647]'
                      }`}
                    />
                  </div>

                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-[#004647] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Lista de detalles */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeStep === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <Check className="h-4 w-4 text-[#66ACAD] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Indicador de progreso en hover */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={activeStep === index ? { width: "100%" } : { width: 0 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#004647] to-[#66ACAD] rounded-b-2xl"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Conectores móviles */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#66ACAD] to-[#004647] rounded-full opacity-30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="bg-gradient-to-r from-[#004647]/5 to-[#66ACAD]/5 rounded-2xl p-10 max-w-4xl mx-auto border border-[#66ACAD]/20">
              <h3 className="text-3xl font-bold text-[#004647] mb-6">
                Tu futuro financiero comienza hoy
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está preparado para guiarte en cada paso del proceso hacia la libertad financiera
              </p>
              <Button 
                className="bg-[#004647] hover:bg-[#66ACAD] text-white px-16 py-6 text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Iniciar mi proceso
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}