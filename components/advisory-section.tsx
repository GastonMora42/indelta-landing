// components/advisory-section.tsx
"use client"

import { motion } from "framer-motion"
import { ChevronDown, Users, Sparkles, Award, BarChart2 } from "lucide-react"
import { PremiumCalendly } from "@/components/premium-calendly"

export function AdvisorySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-[#0a325a]/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[#99C7C8]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-1 bg-[#0a325a]/10 px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={16} className="text-[#aa8c64]" />
              <span className="text-sm font-medium text-[#0a325a]">Asesoría exclusiva</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-4">
              Consulta con un experto financiero
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Agenda una sesión personalizada con nuestros asesores certificados para analizar
              tus objetivos financieros y construir un plan de inversión a medida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Estadísticas a la izquierda */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#99C7C8]/10">
                <h3 className="text-xl font-semibold text-[#0a325a] mb-6 flex items-center gap-2">
                  <Award className="text-[#aa8c64]" />
                  Por qué elegirnos
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Equipo especializado",
                      value: "+15 años",
                      description: "de experiencia en gestión patrimonial"
                    },
                    {
                      icon: BarChart2,
                      title: "Rendimientos superiores",
                      value: "+18%",
                      description: "de rentabilidad promedio anual"
                    },
                    {
                      icon: Award,
                      title: "Asesores certificados",
                      value: "100%",
                      description: "de nuestro equipo con certificaciones internacionales"
                    }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-[#f8f9fc] hover:bg-[#0a325a]/5 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#0a325a]/10 flex items-center justify-center shrink-0">
                        <stat.icon size={24} className="text-[#0a325a]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#0a325a]">{stat.title}</h4>
                        <p className="text-2xl font-bold text-[#aa8c64]">{stat.value}</p>
                        <p className="text-sm text-slate-500">{stat.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-8 text-sm text-[#0a325a] justify-center">
                  <span>Desliza para ver más</span>
                  <ChevronDown size={16} className="animate-bounce" />
                </div>
              </div>
            </motion.div>
            
            {/* Componente de Calendly principal */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <PremiumCalendly />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}