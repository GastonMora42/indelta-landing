// components/why-choose-us-section.tsx
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, BarChart2, Users, TrendingUp, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(-1)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [wheelEvents, setWheelEvents] = useState(0)
  
  // Detectar cuando la sección entra en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsInView(entry.isIntersecting)
    }, { threshold: 0.3 })
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  // Manejar el scroll dentro de la sección
  useEffect(() => {
    if (!isInView || animationComplete) return
    
    // Tipar correctamente el evento de rueda
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (e.deltaY > 0) { // Scroll hacia abajo
        setWheelEvents(prev => {
          const newCount = prev + 1
          
          // Avanzar a la siguiente fase basado en la cantidad de eventos de scroll
          if (newCount >= 3 && animationPhase < 0) {
            setAnimationPhase(0)
            return 0
          } else if (newCount >= 3 && animationPhase >= 0 && animationPhase < 4) {
            setAnimationPhase(prev => prev + 1)
            return 0
          } else if (animationPhase >= 4 && newCount >= 5) {
            setAnimationComplete(true)
            return 0
          }
          
          return newCount
        })
      }
    }
    
    const section = sectionRef.current
    if (section && isInView) {
      section.addEventListener('wheel', handleWheel, { passive: false })
    }
    
    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel)
      }
    }
  }, [isInView, animationPhase, animationComplete])
  
  // Mostrar instrucciones de scroll si está en vista pero no ha comenzado la animación
  const showScrollPrompt = isInView && animationPhase === -1 && !animationComplete
  
  // Datos de las cards
  const cardsData = [
    {
      icon: Shield,
      color: "#0a325a",
      bgColor: "#99C7C8",
      title: "Seguridad garantizada",
      description: "Protegemos tu patrimonio con estrategias diversificadas que priorizan la conservación del capital incluso en mercados volátiles."
    },
    {
      icon: BarChart2,
      color: "#93ABC3",
      bgColor: "#99C7C8",
      title: "Análisis experto",
      description: "Nuestro equipo monitorea constantemente el mercado para tomar decisiones informadas y maximizar tus rendimientos a largo plazo."
    },
    {
      icon: Users,
      color: "#0a325a",
      bgColor: "#99C7C8",
      title: "Atención personalizada",
      description: "Desarrollamos planes adaptados a tu perfil de riesgo y objetivos financieros, con asesoramiento directo y continuo."
    },
    {
      icon: TrendingUp,
      color: "#aa8c64",
      bgColor: "#99C7C8",
      title: "Resultados comprobados",
      description: "Historial de rendimiento superior al mercado con menor volatilidad, generando confianza en nuestros inversores."
    }
  ]

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className={`relative py-20 overflow-hidden ${
        isInView ? 'bg-gradient-to-b from-[#99C7C8]/15 to-white' : 'bg-white'
      }`}
      style={{ 
        height: animationComplete ? 'auto' : '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-[#99C7C8]/10 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#0a325a]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título con animación */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: animationPhase >= 0 || isInView ? 1 : 0,
            y: animationPhase >= 0 || isInView ? 0 : 30
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: animationPhase >= 0 || isInView ? 1 : 0, 
              scale: animationPhase >= 0 || isInView ? 1 : 0.5 
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-5 py-1.5 bg-[#99C7C8] rounded-full text-sm font-semibold text-white uppercase tracking-wider mb-3"
          >
            Nuestras ventajas
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a325a] mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos soluciones financieras personalizadas con un enfoque en la seguridad
            y el crecimiento sostenible.
          </p>
        </motion.div>
        
        {/* Prompt de scroll */}
        <AnimatePresence>
          {showScrollPrompt && (
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#99C7C8]/30">
                <h3 className="text-2xl font-semibold text-[#0a325a] mb-4">Descubre nuestras ventajas</h3>
                <p className="text-slate-600 mb-6">Continúa haciendo scroll para revelar por qué somos tu mejor opción</p>
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#99C7C8]"
                >
                  <ChevronDown size={30} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Contenedor que incluye tanto las cards como el CTA */}
        <div className="relative max-w-6xl mx-auto">
          {/* Área principal de las cards */}
          <div className="relative min-h-[460px] w-full">
            {/* Card central animada */}
            <AnimatePresence mode="wait">
              {animationPhase >= 0 && animationPhase < cardsData.length && (
                <motion.div
                  key={`featured-card-${animationPhase}`}
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: -100, 
                    y: animationPhase < cardsData.length - 1 ? 0 : 100,
                    scale: 0.9,
                    transition: { duration: 0.4 }
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10 w-full max-w-2xl"
                >
                  <div className="relative bg-[#99C7C8] rounded-xl p-8 shadow-xl overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#0a325a]/10 -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                      <motion.div 
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0"
                      >
                        {React.createElement(cardsData[animationPhase].icon, {
                          size: 32,
                          color: 'white'
                        })}
                      </motion.div>
                      <div>
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-2xl font-bold text-white mb-3"
                        >
                          {cardsData[animationPhase].title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="text-white/90 text-lg"
                        >
                          {cardsData[animationPhase].description}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Indicador de progreso */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {cardsData.map((_, index) => (
                        <motion.div 
                          key={`indicator-${index}`}
                          className="h-2 rounded-full bg-white/40"
                          initial={{ width: 8 }}
                          animate={{ 
                            width: index === animationPhase ? 32 : 8,
                            backgroundColor: index === animationPhase ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Cards en posición final */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
              {cardsData.map((card, index) => (
                <motion.div 
                  key={`final-card-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ 
                    opacity: (animationPhase > index || animationComplete) ? 1 : 0,
                    y: (animationPhase > index || animationComplete) ? 0 : 40
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: animationComplete ? 0 : 0.2 * (index + 1),
                    type: "spring", 
                    stiffness: 100
                  }}
                  className="h-full"
                >
                  <div 
                    className={`relative h-full overflow-hidden rounded-xl shadow-lg bg-[#99C7C8] border border-[#99C7C8]/30`}
                  >
                    {/* Elemento decorativo superior */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -mt-10 -mr-10"></div>
                    
                    <div className="relative z-10 p-6">
                      <div className="mb-4 p-3 bg-white/20 rounded-full w-fit">
                        {React.createElement(card.icon, {
                          size: 24,
                          color: 'white'
                        })}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Indicador numérico */}
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                      <span className="text-xs font-semibold text-[#0a325a]">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Call to Action - AHORA INTEGRADO MUCHO MÁS CERCA DE LAS CARDS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: animationComplete || animationPhase >= 4 ? 1 : 0,
                y: animationComplete || animationPhase >= 4 ? 0 : 20
              }}
              transition={{ duration: 0.6 }}
              className="mt-10 mb-2" // Reducido a solo 4px de margen superior
            >
              <div className="relative">
                {/* Línea conectora visual que une las cards con el CTA */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: animationComplete || animationPhase >= 4 ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -top-4 w-0.5 h-4 bg-[#99C7C8]/50"
                />
                
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-lg mx-auto border border-[#99C7C8]/20 text-center"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{
                    background: 'linear-gradient(to bottom, rgba(153, 199, 200, 0.1), rgba(255, 255, 255, 0.9))'
                  }}
                >
                  <h3 className="text-xl font-bold text-[#0a325a] mb-3">
                    Tu futuro financiero comienza hoy
                  </h3>
                  <p className="text-slate-600 max-w-xl mx-auto mb-4">
                    Descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos
                  </p>
                  <Button 
                    className="bg-[#0a325a] hover:bg-[#99C7C8] text-white px-6 py-2 rounded-lg group transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Hablar con un asesor 
                    <ArrowRight className="ml-2 h-5 w-5 transition-all group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Instrucción para continuar después de completar la animación */}
        <AnimatePresence>
          {(animationPhase >= 4 && !animationComplete) && (
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-slate-500">Continúa scrolleando para seguir explorando</p>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[#99C7C8] mt-2"
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}