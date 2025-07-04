// components/ultra-light-why-choose-us.tsx
"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, BarChart2, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnhancedWhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  const cardsData = [
    {
      icon: Shield,
      title: "Seguridad garantizada",
      description: "Protegemos tu patrimonio con estrategias diversificadas que priorizan la conservación del capital.",
      stats: "98% conservación",
      features: ["Diversificación inteligente", "Análisis de riesgo", "Protección anti-inflación"]
    },
    {
      icon: BarChart2,
      title: "Análisis experto",
      description: "Monitoreo constante del mercado para decisiones informadas y maximizar rendimientos a largo plazo.",
      stats: "+18% rentabilidad",
      features: ["Análisis técnico avanzado", "Monitoreo 24/7"]
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Planes adaptados a tu perfil de riesgo y objetivos financieros con asesoramiento continuo.",
      stats: "1:15 ratio asesor",
      features: ["Asesor dedicado", "Reuniones mensuales", "Soporte prioritario"]
    },
    {
      icon: TrendingUp,
      title: "Resultados comprobados",
      description: "Historial de rendimiento superior al mercado con menor volatilidad y confianza garantizada.",
      stats: "+25 años experiencia",
      features: ["Track record auditado", "Transparencia total", "Resultados medibles"]
    }
  ]

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-white"
    >
      {/* Fondo estático simplificado */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#66ACAD]/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#004647]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header con animación simple */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#66ACAD]/20 px-6 py-2 rounded-full mb-6 border border-[#66ACAD]/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-[#00B04F]" />
            <span className="text-sm font-semibold text-[#004647] uppercase tracking-wider">
              Nuestras ventajas
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-[#004647] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ¿Por qué elegirnos?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ofrecemos soluciones financieras personalizadas con enfoque en{" "}
            <span className="text-[#004647] font-semibold">seguridad</span> y{" "}
            <span className="text-[#004647] font-semibold">crecimiento sostenible</span>.
          </motion.p>
        </div>
        
        {/* Grid de cards optimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card con hover simple */}
                <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Icono con efecto hover básico */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#66ACAD]/20 flex items-center justify-center shadow-lg group-hover:bg-[#004647]/20 group-hover:scale-110 transition-all duration-300">
                      <IconComponent size={28} className="text-[#004647] group-hover:text-[#00B04F] transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Estadística */}
                  <div className="mb-4">
                    <span className="text-sm font-bold px-3 py-1 rounded-full text-white bg-[#004647]">
                      {card.stats}
                    </span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-2xl font-bold text-[#004647] mb-4 group-hover:text-[#00B04F] transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Features con animación CSS pura */}
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center gap-2 text-sm text-slate-600 opacity-0 animate-fade-in-up"
                        style={{ 
                          animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#00B04F] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Barra de progreso con CSS */}
                  <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#004647] to-[#66ACAD] rounded-full transform translate-x-[-40%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Número */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#004647]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#004647]">{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* CTA simplificado */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#004647]/10 to-[#66ACAD]/10 rounded-3xl p-10 max-w-4xl mx-auto border border-[#66ACAD]/20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004647] mb-6">
              Tu futuro financiero comienza hoy
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos financieros
            </p>
            
            <Button 
              className="bg-gradient-to-r from-[#004647] to-[#66ACAD] hover:from-[#66ACAD] hover:to-[#004647] text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-xl group transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center">
                Hablar con un asesor experto
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* CSS para animaciones ligeras */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </section>
  )
}