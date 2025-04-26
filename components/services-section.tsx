// components/services-section.tsx (Rediseñado)
"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Definición de tipos para los servicios
type ServiceCategory = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  cards: ServiceCard[]
}

type ServiceCard = {
  id: string
  title: string
  description: string
  image: string
  buttonText?: string
  buttonLink?: string
  wide?: boolean // Para controlar si la card es más ancha
}

export function ServicesSection() {
  // Estado para el servicio actualmente seleccionado
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  
  // Datos de los servicios
  const services: ServiceCategory[] = [
    {
      id: "carteras",
      title: "Carteras Administradas",
      subtitle: "Optimiza tus inversiones con gestión profesional",
      description: "Nuestras carteras modelo están diseñadas para diferentes perfiles de riesgo y objetivos financieros, combinando análisis cuantitativo y cualitativo para maximizar rendimientos y minimizar riesgos.",
      image: "/banner1.webp",
      cards: [
        {
          id: "conservadora",
          title: "Cartera Conservadora",
          description: "Ideal para inversores adversos al riesgo, con enfoque en preservación de capital y rendimientos estables.",
          image: "/banner2.webp",
          buttonText: "Conocer detalles",
          buttonLink: "#contact",
          wide: true
        },
        {
          id: "agresiva",
          title: "Cartera Agresiva",
          description: "Maximización de rendimientos a largo plazo para inversores que toleran volatilidad.",
          image: "/banner3.webp",
          buttonText: "Ver rentabilidad",
          buttonLink: "#contact",
          wide: false
        }
      ]
    },
    {
      id: "gestion",
      title: "Gestión de Activos",
      subtitle: "Soluciones integrales para tu riqueza",
      description: "Ofrecemos servicios de gestión patrimonial personalizados para individuos y familias de alto patrimonio, con un enfoque holístico que incluye planificación financiera, fiscal y sucesoria.",
      image: "/banner2.webp", 
      cards: [
        {
          id: "planificacion",
          title: "Planificación Patrimonial",
          description: "Estrategias integrales para la preservación y crecimiento de tu patrimonio a largo plazo.",
          image: "/banner1.webp",
          buttonText: "Solicitar asesoría",
          buttonLink: "#contact",
          wide: true
        },
        {
          id: "fiscal",
          title: "Gestión Fiscal",
          description: "Optimización fiscal de inversiones y patrimonio con cumplimiento normativo garantizado.",
          image: "/banner3.webp",
          buttonText: "Más información",
          buttonLink: "#contact",
          wide: false
        }
      ]
    },
    {
      id: "corporativo",
      title: "Sector Corporativo",
      subtitle: "Soluciones financieras para empresas",
      description: "Ayudamos a empresas a optimizar su estructura financiera, acceder a capital y gestionar eficientemente sus recursos, adaptándonos a cada etapa del ciclo de vida empresarial.",
      image: "/banner3.webp",
      cards: [
        {
          id: "financiacion",
          title: "Financiación Corporativa",
          description: "Asesoramiento en la obtención de financiación adaptada a las necesidades y ciclo de vida de tu empresa.",
          image: "/banner4.webp",
          buttonText: "Consultar opciones",
          buttonLink: "#contact",
          wide: true
        },
        {
          id: "tesoreria",
          title: "Tesorería Corporativa",
          description: "Gestión eficiente de excedentes de tesorería empresarial para maximizar rentabilidad.",
          image: "/banner2.webp",
          buttonText: "Hablar con experto",
          buttonLink: "#contact",
          wide: false
        }
      ]
    },
    {
      id: "realestate",
      title: "Real Estate",
      subtitle: "Inversiones inmobiliarias optimizadas",
      description: "Nuestra división inmobiliaria ofrece acceso a oportunidades de inversión exclusivas en el sector, con análisis exhaustivo de mercado y gestión profesional de activos.",
      image: "/banner4.webp",
      cards: [
        {
          id: "fondos",
          title: "Fondos Inmobiliarios",
          description: "Acceso a vehículos de inversión diversificados en el sector inmobiliario con entradas accesibles.",
          image: "/banner1.webp",
          buttonText: "Ver rentabilidad",
          buttonLink: "#contact",
          wide: true
        },
        {
          id: "renta",
          title: "Inmuebles de Renta",
          description: "Inversión en propiedades seleccionadas para generación de ingresos recurrentes y apreciación de capital.",
          image: "/banner3.webp",
          buttonText: "Descubrir oportunidades",
          buttonLink: "#contact",
          wide: false
        }
      ]
    }
  ]

  const activeService = services[activeServiceIndex]

  return (
    <section id="servicios" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-[#aa8c64] uppercase tracking-wider mb-2 block">Especialización</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-3">Tu exito financiero comienza aqui</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Soluciones financieras personalizadas para cada perfil y objetivo
          </p>
          
          {/* Service navigation buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {services.map((service, index) => (
              <Button
                key={service.id}
                variant={activeServiceIndex === index ? "default" : "outline"}
                className={`
                  ${activeServiceIndex === index 
                    ? "bg-[#0a325a] text-white border-[#0a325a] hover:bg-[#0a325a]/90" 
                    : "text-[#0a325a] border-[#0a325a]/20 hover:bg-[#0a325a]/10 hover:text-[#0a325a]"}
                  transition-all duration-300
                `}
                onClick={() => setActiveServiceIndex(index)}
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Service content with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main card (large) */}
            <Card className="overflow-hidden border-none shadow-lg mb-6">
              <div className="relative h-[350px] md:h-[400px] w-full">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a325a]/90 via-[#0a325a]/70 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 z-10 w-full md:max-w-[60%]">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{activeService.title}</h3>
                  <p className="text-lg md:text-xl text-white/90 font-light mb-3">{activeService.subtitle}</p>
                  <p className="text-white/80 mb-6 text-sm md:text-base">{activeService.description}</p>
                  
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white px-6 py-2.5 text-sm md:text-base group relative overflow-hidden w-auto inline-flex">
                      <span className="relative z-10 flex items-center">
                        Solicitar información
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
            
            {/* Two cards with irregular layout */}
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {activeService.cards.map((card, i) => (
                <Card 
                  key={card.id}
                  className={`
                    overflow-hidden border-none shadow-lg 
                    ${card.wide 
                      ? 'col-span-12 md:col-span-7' 
                      : 'col-span-12 md:col-span-5'}
                    group
                  `}
                >
                  <div className="relative h-[250px] w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a325a]/95 via-[#0a325a]/70 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{card.title}</h4>
                      <p className="text-white/90 text-sm mb-4">{card.description}</p>
                      
                      {card.buttonText && (
// Versión mejorada del botón en los cards inferiores
<motion.div 
  whileHover={{ scale: 1.03 }} 
  whileTap={{ scale: 0.98 }}
  className="mt-auto"
>
  <Button 
    size="sm"
    className="bg-white/20 backdrop-blur-sm text-white border border-white/70 hover:bg-white hover:text-[#0a325a] transition-colors shadow-md"
    asChild
  >
    <a href={card.buttonLink}>
      {card.buttonText}
      <ChevronRight className="ml-1 h-3 w-3" />
    </a>
  </Button>
</motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}