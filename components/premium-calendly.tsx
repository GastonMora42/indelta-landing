// components/premium-calendly.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, Shield, TrendingUp, Clock, Award, 
  ChevronRight, CheckCircle, Sparkles 
} from "lucide-react"
import Image from "next/image"

export function PremiumCalendly() {
  // *** REEMPLAZA ESTA URL CON TU URL REAL DE CALENDLY ***
  const calendlyUrl = "https://calendly.com/gastonmora1742" 
  
  const [isLoading, setIsLoading] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Iniciar Calendly cuando el componente se monta
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simular carga para dar tiempo a cargar Calendly y mejorar UX
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Inicializar el widget cuando la carga termina
  useEffect(() => {
    if (!isLoading) {
      const checkCalendlyExists = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendlyExists)
          window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: document.getElementById('calendly-inline-widget'),
          })
        }
      }, 100)
      
      return () => clearInterval(checkCalendlyExists)
    }
  }, [isLoading, calendlyUrl])

  // Avanzar por los pasos de animación
  useEffect(() => {
    if (isLoading && activeStep < 3) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1)
      }, 650)
      
      return () => clearTimeout(timer)
    }
  }, [activeStep, isLoading])

  // Testimonios de clientes
  const testimonials = [
    {
      quote: "El proceso de agenda fue tan rápido y profesional como el asesoramiento que recibí después.",
      author: "Carlos Rodríguez",
      role: "Empresario"
    },
    {
      quote: "Gracias a la consulta inicial, pude identificar oportunidades de inversión que no había considerado.",
      author: "María Fernández",
      role: "Profesional independiente"
    }
  ]

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-xl border border-[#99C7C8]/20">
      {/* Script de Calendly */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      
      {/* Encabezado Premium */}
      <div className="bg-gradient-to-r from-[#0a325a] to-[#0a325a]/90 py-6 px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-semibold flex items-center gap-2">
              <Calendar className="text-[#aa8c64]" />
              Asesoría Financiera Personalizada
            </h3>
            <p className="text-white/80 mt-1">
              Selecciona la fecha y hora que mejor se adapte a tu agenda
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-[#99C7C8]" />
              <span className="text-white/90 text-sm">100% Confidencial</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-[#99C7C8]" />
              <span className="text-white/90 text-sm">45 min. Aprox.</span>
            </div>
            <div className="flex items-center gap-1">
              <Award size={16} className="text-[#99C7C8]" />
              <span className="text-white/90 text-sm">Asesor certificado</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row">
        {/* Panel izquierdo con beneficios */}
        <div className="w-full md:w-64 lg:w-80 bg-[#f8f9fc] p-6 border-r border-[#99C7C8]/10">
          <h4 className="font-semibold text-[#0a325a] flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-[#aa8c64]" />
            Beneficios exclusivos
          </h4>
          
          <div className="space-y-4 mb-10">
            {[
              "Diagnóstico financiero completo",
              "Estrategias de inversión personalizadas",
              "Evaluación de objetivos a corto y largo plazo",
              "Propuesta de optimización patrimonial",
              "Diversificación de cartera"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-[#99C7C8] mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Testimonios */}
          <div className="space-y-6">
            <h4 className="font-semibold text-[#0a325a] text-sm border-b border-[#99C7C8]/20 pb-2">
              Lo que dicen nuestros clientes
            </h4>
            
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={index === 0 ? "block" : "hidden"}
                >
                  <p className="text-slate-600 text-sm italic mb-2">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0a325a] to-[#99C7C8] flex items-center justify-center text-white font-semibold text-xs">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[#0a325a] text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Calendly Widget */}
        <div className="flex-1 relative min-h-[650px] bg-white">
          {/* Pantalla de carga elegante */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center"
              >
                <div className="w-full max-w-md p-8">
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-10 text-center"
                  >
                    <Image
                      src="/logo.png"
                      alt="Indelta"
                      width={60}
                      height={60}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-[#0a325a]">
                      Preparando tu experiencia de asesoría
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                      En Indelta nos enfocamos en la calidad de la asesoría y la tranquilidad de nuestros clientes
                    </p>
                  </motion.div>
                  
                  {/* Pasos de carga */}
                  <div className="space-y-6">
                    {[
                      { icon: Calendar, text: "Verificando disponibilidad de asesores..." },
                      { icon: Shield, text: "Preparando entorno seguro..." },
                      { icon: TrendingUp, text: "Actualizando datos de mercado..." }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ 
                          x: 0, 
                          opacity: activeStep >= index ? 1 : 0.3 
                        }}
                        transition={{ delay: 0.3 + (index * 0.2) }}
                        className="flex items-center gap-4"
                      >
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            activeStep >= index 
                              ? 'bg-[#0a325a]/10 text-[#0a325a]' 
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {activeStep > index ? (
                            <CheckCircle className="h-6 w-6 text-[#0a325a]" />
                          ) : (
                            <step.icon className="h-6 w-6" />
                          )}
                        </div>
                        <span className={`text-sm ${activeStep >= index ? 'text-[#0a325a]' : 'text-gray-400'}`}>
                          {step.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Barra de progreso */}
                  <motion.div 
                    className="h-1 bg-[#99C7C8]/20 mt-10 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: `${(activeStep + 1) * 33.33}%`,
                        transition: { duration: 0.5 }
                      }}
                      className="h-full bg-[#99C7C8]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Contenedor de Calendly */}
          <div 
            id="calendly-inline-widget" 
            style={{ height: '650px' }} 
            className={`calendly-inline-widget w-full ${isLoading ? 'invisible' : 'visible'}`}
          />
        </div>
      </div>
    </div>
  )
}