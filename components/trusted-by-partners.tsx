// components/trusted-by-partners.tsx - VERSIÓN MEJORADA
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
    <section id="trusted-by-partners" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#66ACAD]/5 to-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-[#004647] via-[#66ACAD] to-[#004647]"></div>
      <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-[#004647]/30 via-[#66ACAD] to-[#004647]"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#66ACAD]/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#004647]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#004647] text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Shield size={16} className="text-[#66ACAD]" />
            Respaldo institucional
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {/* TÍTULO CON VERDE CHILLÓN */}
            Respaldados por las principales <br className="hidden md:block" />
            <span className="text-[#00FF7F] drop-shadow-lg">instituciones financieras</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            Tu tranquilidad es nuestra prioridad. Trabajamos con socios estratégicos de primer nivel
            y operamos bajo el marco regulatorio más estricto del mercado de valores argentino.
          </motion.p>
        </div>
        
        {/* Balanz como partner estratégico destacado - MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#66ACAD]/20">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Imagen de Balanz a la izquierda - MÁS GRANDE */}
              <div className="lg:w-1/2 p-8 lg:p-16 flex justify-center lg:justify-end relative">
                {/* Base que visualmente integra el teléfono con la card */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280px] h-3 bg-[#004647]/10 rounded-t-full blur-sm"></div>
                
                {/* Animación mejorada del teléfono - TAMAÑO AUMENTADO MÁS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, y: 150 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: 0.3,
                    duration: 1
                  }}
                  viewport={{ once: true }}
                  className="relative w-[420px] h-[560px]" // AUMENTADO AÚN MÁS
                >
                  <Image
                    src="/balanz-open.webp"
                    alt="Aplicación de Balanz"
                    width={840} // Cuadruplicado para mejor calidad
                    height={1120} // Cuadruplicado para mejor calidad
                    className="object-contain drop-shadow-2xl"
                  />
                  
                  {/* Reflejo sutil debajo del teléfono para integrarlo mejor */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[220px] h-12 bg-[#004647]/5 filter blur-md rounded-[50%]"></div>
                </motion.div>
              </div>
              
              {/* Contenido a la derecha - PADDING MEJORADO */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#004647]/10 text-[#004647] px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <CheckCircle2 size={16} className="text-[#66ACAD]" />
                  Partner estratégico principal
                </div>
                
                {/* LOGO DE BALANZ MÁS GRANDE Y CENTRADO */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-8 flex justify-center lg:justify-start"
                >
                  <Image
                    src="/balanz.webp"
                    alt="Logo de Balanz"
                    width={320}    // AUMENTADO SIGNIFICATIVAMENTE
                    height={120}   // AUMENTADO SIGNIFICATIVAMENTE
                    className="h-20 w-auto object-contain" // AUMENTADO DE h-16 A h-20
                  />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-[#004647] mb-6"
                >
                  {/* GRATIS EN VERDE */}
                  Abrí tu cuenta <span className="text-[#00B04F]">GRATIS</span> en Balanz y operá con nosotros
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-slate-600 mb-8 text-lg leading-relaxed"
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
                  className="space-y-4 mb-10"
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
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-[#66ACAD] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{benefit}</span>
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
                    className="bg-[#004647] hover:bg-[#66ACAD] text-white flex items-center gap-2 px-8 py-4 text-lg font-semibold"
                    onClick={() => window.open('https://www.balanz.com/abrir-cuenta', '_blank')}
                  >
                    Abrir cuenta en Balanz
                    <ArrowRight size={18} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-[#66ACAD] text-[#66ACAD] hover:bg-[#66ACAD]/10 px-8 py-4 text-lg"
                    onClick={() => window.open('https://www.balanz.com', '_blank')}
                  >
                    Conocer más
                    <ExternalLink size={18} className="ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Instituciones regulatorias - LOGOS MÁS GRANDES */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl text-center font-semibold text-[#004647] mb-12"
          >
            Operamos bajo el marco regulatorio de
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#66ACAD]/20"
              >
                {/* Tipo de institución */}
                <div className="bg-[#004647] text-white px-6 py-2 text-sm font-bold tracking-wider uppercase">
                  {institution.type}
                </div>
                
                {/* Contenido principal con LOGO MÁS GRANDE */}
                <div className="p-8">
                  <div className="h-40 flex items-center justify-center mb-6">
                    <Image
                      src={institution.logo}
                      alt={`Logo de ${institution.name}`}
                      width={320}  // AUMENTADO DE 240
                      height={160} // AUMENTADO DE 120
                      className="object-contain max-h-32" // AUMENTADO DE max-h-24
                    />
                  </div>
                  
                  <p className="text-gray-600 text-center mb-8 text-base leading-relaxed">
                    {institution.description}
                  </p>
                  
                  <a 
                    href={institution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-[#66ACAD] hover:text-[#004647] transition-colors text-base font-medium"
                  >
                    Visitar sitio oficial
                    <ExternalLink size={16} />
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
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#66ACAD]/10 px-8 py-4 rounded-full border border-[#66ACAD]/20">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Shield size={24} className="text-[#004647]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}