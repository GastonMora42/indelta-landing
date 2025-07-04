// components/enhanced-testimonials.tsx - VERSIÓN MEJORADA
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EnhancedTestimonials() {
  // Destacado principal
  const featuredTestimonial = {
    name: "Eduardo Martínez",
    role: "Dueño de restaurant importante en Buenos Aires",
    quote: "Gracias a Indelta, Pude superar constantemente al mercado con menor volatilidad. Su enfoque personalizado y estrategias innovadoras han sido fundamentales para nuestro crecimiento financiero.",
    image: "/t-principal.webp",
    company: "Restaurant prestigioso de CABA"
  }
  
  // Testimonios adicionales
  const testimonials = [
    {
      id: 1,
      name: "Ana González",
      role: "Directora Financiera",
      quote: "La asesoría estratégica de Indelta nos permitió diversificar nuestras inversiones y mejorar significativamente nuestros rendimientos anuales.",
      rating: 5,
      image: "/t2.webp"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Empresario",
      quote: "El enfoque personalizado y la atención al detalle de Indelta han sido clave para optimizar mi cartera de inversiones.",
      rating: 5,
      image: "/t1.webp"
    },
    {
      id: 3,
      name: "Laura Méndez",
      role: "Profesional independiente",
      quote: "Lo que más valoro de Indelta es su transparencia y atención personalizada. Siempre explican cada decisión de inversión en términos comprensibles.",
      rating: 5,
      image: "/t3.webp"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#66ACAD]/5">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#66ACAD] uppercase tracking-wider mb-2 block">Historias de éxito</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#004647] mb-4">Nuestros clientes hablan</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas y particulares a alcanzar sus objetivos financieros
          </p>
        </div>
        
        {/* Testimonial principal destacado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#66ACAD]/20">
            <div className="flex flex-col lg:flex-row">
              {/* Imagen a la izquierda */}
              <div className="relative lg:w-2/5 h-80 lg:h-auto">
                <Image
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004647]/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Contenido a la derecha */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center relative">
                <Quote className="text-[#66ACAD]/20 w-20 h-20 absolute top-6 right-6" />
                
                <div className="relative z-10">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl font-light text-[#004647] italic mb-6"
                  >
                    "{featuredTestimonial.quote}"
                  </motion.p>
                  
                  {/* ESTRELLAS VERDES OSCURAS */}
                  <div className="flex items-center mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#004647] text-[#004647]" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-[#004647]">{featuredTestimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{featuredTestimonial.role}</p>
                      <p className="text-[#66ACAD] text-sm mt-1">{featuredTestimonial.company}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="mt-4 text-[#66ACAD] p-0 flex items-center gap-1 hover:text-[#004647] transition-colors"
                  >
                    Leer la historia completa
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Grid de testimonios adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow border-t-4 border-t-[#66ACAD]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#66ACAD]/20">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004647]">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-[#66ACAD]/30" />
                </div>
                
                {/* ESTRELLAS VERDES OSCURAS */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#004647] text-[#004647]" />
                  ))}
                </div>
                
                <p className="text-slate-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                
                <Button 
                  variant="link" 
                  className="mt-auto text-[#66ACAD] p-0 flex items-center gap-1 hover:text-[#004647] transition-colors"
                >
                  Leer la historia completa
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}