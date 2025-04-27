// components/trusted-by-partners-premium.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, ExternalLink, ArrowRight, CheckCircle2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrustedByPartnersPremium() {
  // Información de las instituciones regulatorias
  const regulatoryInstitutions = [
    {
      id: 1,
      name: "BYMA",
      logo: "/byma.webp",
      description: "Operamos como agente registrado en el mercado de valores principal de Argentina",
      link: "https://www.byma.com.ar",
      type: "Mercado regulado",
      icon: Award
    },
    {
      id: 2,
      name: "CNV",
      logo: "/cnv.webp",
      description: "Regulados por la Comisión Nacional de Valores bajo las más estrictas normativas",
      link: "https://www.cnv.gov.ar",
      type: "Entidad regulatoria",
      icon: Shield
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-[#f8f9fc]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-[#0a325a] via-[#aa8c64] to-[#0a325a]/30"></div>
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#0a325a]/30 via-[#aa8c64] to-[#0a325a]"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#99C7C8]/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#aa8c64]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#0a325a] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <Shield size={16} className="text-[#aa8c64]" />
            Respaldo institucional
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-4"
          >
            Respaldados por las principales <br className="hidden md:block" />
            <span className="text-[#aa8c64]">instituciones financieras</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Tu tranquilidad es nuestra prioridad. Trabajamos con socios estratégicos de primer nivel
            y operamos bajo el marco regulatorio más estricto del mercado de valores argentino.
          </motion.p>
        </div>
        
        {/* Balanz como partner estratégico destacado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Imagen de Balanz a la izquierda - Contenedor especial para la integración visual */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex justify-center lg:justify-end relative">
                {/* Base que visualmente integra el teléfono con la card */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-2 bg-[#0a325a]/10 rounded-t-full blur-sm"></div>
                
                {/* Animación mejorada del teléfono */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3,
                    duration: 0.8
                  }}
                  viewport={{ once: true }}
                  className="relative w-[300px] h-[400px]"
                >
                  <Image
                    src="/balanz-open.webp"
                    alt="Aplicación de Balanz"
                    width={600}
                    height={800}
                    className="object-contain"
                  />
                  
                  {/* Reflejo sutil debajo del teléfono para integrarlo mejor */}
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[140px] h-10 bg-[#0a325a]/5 filter blur-md rounded-[50%]"></div>
                </motion.div>
              </div>
              
              {/* Contenido a la derecha */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#0a325a]/10 text-[#0a325a] px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  <CheckCircle2 size={16} className="text-[#aa8c64]" />
                  Partner estratégico principal
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <Image
                    src="/balanz.webp"
                    alt="Logo de Balanz"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-[#0a325a] mb-4"
                >
                  Abrí tu cuenta GRATIS en Balanz y opera con nosotros
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-slate-600 mb-6"
                >
                  Somos partners estratégicos de Balanz, una de las plataformas líderes en Argentina para inversores. 
                  A través de nuestra alianza, puedes abrir una cuenta en Balanz y acceder a nuestros servicios de 
                  asesoramiento financiero personalizado, mientras operas en un entorno seguro y regulado.
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="space-y-3 mb-8"
                >
                  {[
                    "Acceso a mercados nacionales e internacionales",
                    "Operaciones integradas y transparentes",
                    "Plataforma tecnológica de última generación",
                    "Respaldo institucional de primer nivel"
                  ].map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 size={18} className="text-[#aa8c64] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white flex items-center gap-2"
                    onClick={() => window.open('https://www.balanz.com/abrir-cuenta', '_blank')}
                  >
                    Abrir cuenta en Balanz
                    <ArrowRight size={16} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-[#aa8c64] text-[#aa8c64] hover:bg-[#aa8c64]/10"
                    onClick={() => window.open('https://www.balanz.com', '_blank')}
                  >
                    Conocer más
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Instituciones regulatorias */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-center font-semibold text-[#0a325a] mb-10"
          >
            Operamos bajo el marco regulatorio de
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {regulatoryInstitutions.map((institution, index) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2 * index
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Tipo de institución */}
                <div className="bg-[#0a325a] text-white px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
                  {institution.type}
                </div>
                
                {/* Contenido principal */}
                <div className="p-6">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <Image
                      src={institution.logo}
                      alt={`Logo de ${institution.name}`}
                      width={180}
                      height={90}
                      className="object-contain max-h-16"
                    />
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6">
                    {institution.description}
                  </p>
                  
                  <a 
                    href={institution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-[#aa8c64] hover:text-[#0a325a] transition-colors text-sm font-medium"
                  >
                    Visitar sitio oficial
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certificación adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#aa8c64]/10 px-6 py-3 rounded-full">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Shield size={20} className="text-[#0a325a]" />
            </div>
            <p className="text-[#0a325a] font-medium">
              Cumplimos con todas las normativas anti-lavado de dinero y protección al inversor
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}