// components/enhanced-why-choose-us.tsx
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Shield, BarChart2, Users, TrendingUp, ArrowRight, Sparkles, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function EnhancedWhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  // Corregido: 'threshold' no es una opción válida para useInView de framer-motion
  const isInView = useInView(sectionRef, { amount: 0.2, once: false })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  // Detectar posición del mouse para efectos de parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Datos de las cards con estadísticas mejoradas
  const cardsData = [
    {
      icon: Shield,
      color: "#004647",
      accentColor: "#00B04F",
      title: "Seguridad garantizada",
      description: "Protegemos tu patrimonio con estrategias diversificadas que priorizan la conservación del capital incluso en mercados volátiles.",
      stats: "98% de conservación de capital",
      features: ["Diversificación inteligente", "Análisis de riesgo avanzado", "Protección anti-inflación"]
    },
    {
      icon: BarChart2,
      color: "#66ACAD",
      accentColor: "#004647",
      title: "Análisis experto",
      description: "Nuestro equipo monitorea constantemente el mercado para tomar decisiones informadas y maximizar tus rendimientos a largo plazo.",
      stats: "+18% rentabilidad promedio",
      features: ["Análisis técnico avanzado", "IA para predicciones", "Monitoreo 24/7"]
    },
    {
      icon: Users,
      color: "#004647",
      accentColor: "#66ACAD",
      title: "Atención personalizada",
      description: "Desarrollamos planes adaptados a tu perfil de riesgo y objetivos financieros, con asesoramiento directo y continuo.",
      stats: "1:15 ratio asesor-cliente",
      features: ["Asesor dedicado", "Reuniones mensuales", "Soporte prioritario"]
    },
    {
      icon: TrendingUp,
      color: "#99C7C8",
      accentColor: "#004647",
      title: "Resultados comprobados",
      description: "Historial de rendimiento superior al mercado con menor volatilidad, generando confianza en nuestros inversores.",
      stats: "+25 años de experiencia",
      features: ["Track record auditado", "Transparencia total", "Resultados medibles"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1
      }
    })
  }

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-[#66ACAD]/5 to-[#004647]/10"
    >
      {/* Elementos decorativos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-[#66ACAD]/10 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 8, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-[#004647]/10 blur-3xl"
          animate={{
            x: -mousePosition.x * 0.03,
            y: -mousePosition.y * 0.03,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            x: { duration: 0.6 },
            y: { duration: 0.6 },
            scale: { duration: 6, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute top-[50%] right-[30%] w-64 h-64 rounded-full bg-[#00B04F]/5 blur-2xl"
          animate={{
            x: mousePosition.x * 0.04,
            y: -mousePosition.y * 0.04,
            rotate: [0, 360]
          }}
          transition={{ 
            x: { duration: 0.4 },
            y: { duration: 0.4 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#66ACAD]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección mejorado */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#66ACAD]/20 to-[#004647]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#66ACAD]/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-[#00B04F]" />
            <span className="text-sm font-semibold text-[#004647] uppercase tracking-wider">
              Nuestras ventajas competitivas
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-[#004647] mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Por qué elegirnos?
            <motion.span
              className="absolute -top-2 -right-2 text-[#00B04F]"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star className="w-8 h-8 fill-current" />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ofrecemos soluciones financieras personalizadas con un enfoque en la{" "}
            <span className="text-[#004647] font-semibold">seguridad</span> y el{" "}
            <span className="text-[#004647] font-semibold">crecimiento sostenible</span>.
          </motion.p>
        </motion.div>
        
        {/* Grid de cards mejorado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="relative group h-full"
              onMouseEnter={() => {
                setHoveredCard(index)
                setActiveCard(index)
              }}
              onMouseLeave={() => {
                setHoveredCard(null)
                setActiveCard(null)
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Card principal con spotlight effect */}
              <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                {/* Spotlight effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${card.color}15 0%, transparent 50%)`
                  }}
                />
                
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-[1px] rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}20, ${card.accentColor}10)`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Icono con efecto mejorado */}
                  <motion.div 
                    className="mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                      style={{ backgroundColor: `${card.color}20` }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={hoveredCard === index ? {
                          background: [
                            `linear-gradient(45deg, ${card.color}30, ${card.accentColor}20)`,
                            `linear-gradient(135deg, ${card.accentColor}30, ${card.color}20)`,
                            `linear-gradient(225deg, ${card.color}30, ${card.accentColor}20)`
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {React.createElement(card.icon, {
                        size: 28,
                        color: card.color,
                        className: "relative z-10"
                      })}
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60"
                      style={{
                        boxShadow: `0 0 30px ${card.color}50`,
                        filter: 'blur(10px)'
                      }}
                      animate={hoveredCard === index ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Estadística destacada */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={activeCard === index ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span 
                      className="text-sm font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: card.accentColor }}
                    >
                      {card.stats}
                    </span>
                  </motion.div>
                  
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-[#004647] mb-4 group-hover:text-[#00B04F] transition-colors">
                    {card.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeCard === index ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -10 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#00B04F]" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Hover action */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    animate={activeCard === index ? { y: 0 } : { y: 10 }}
                  >
                    <Button 
                      variant="ghost" 
                      className="text-[#004647] hover:text-[#00B04F] p-0 h-auto group/btn"
                    >
                      Saber más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-current opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: card.color }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full" style={{ backgroundColor: `${card.accentColor}20` }} />
                
                {/* Number indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#004647]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#004647]">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action mejorado */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-[#004647]/10 via-[#66ACAD]/10 to-[#004647]/10 backdrop-blur-sm rounded-3xl p-10 border border-[#66ACAD]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-[#004647] mb-6"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                style={{
                  backgroundImage: `linear-gradient(90deg, #004647, #66ACAD, #004647)`,
                  backgroundSize: "200%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Tu futuro financiero comienza hoy
              </motion.h3>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Descubre cómo nuestro equipo de expertos puede ayudarte a alcanzar tus objetivos financieros más ambiciosos
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#004647] to-[#66ACAD] hover:from-[#66ACAD] hover:to-[#004647] text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-xl group relative overflow-hidden"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Hablar con un asesor experto
                    <ArrowRight className="ml-3 h-6 w-6 transition-all group-hover:translate-x-2" />
                  </span>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00B04F] to-[#004647] opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
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