// components/trusted-by-partners.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Star, TrendingUp, Award } from "lucide-react"

export function TrustedByPartnersPremium() {
  return (
    <section id="trusted-by-partners" className="py-20 bg-gradient-to-br from-[#66ACAD]/10 via-[#004647]/5 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-[#66ACAD]/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 rounded-full bg-[#004647]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00B04F]/10 px-6 py-2 rounded-full mb-6"
          >
            <Star className="w-5 h-5 text-[#00B04F]" />
            <span className="text-sm font-semibold text-[#004647] uppercase tracking-wider">
              Partner estratégico
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#004647] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Respaldados por Balanz
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Como socios estratégicos de <span className="text-[#004647] font-semibold">Balanz</span>, 
            ofrecemos acceso exclusivo a los mejores instrumentos financieros del mercado
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Información de la alianza */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#66ACAD]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#00B04F]/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#00B04F]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#004647]">Alianza Estratégica</h3>
                  <p className="text-[#66ACAD] font-medium">Partner Oficial Balanz</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Acceso a productos financieros exclusivos",
                  "Plataforma tecnológica de vanguardia",
                  "Respaldo de una entidad regulada",
                  "Liquidez y seguridad garantizada"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#00B04F]" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#004647]/10 to-[#66ACAD]/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-[#004647]" />
                  <span className="font-semibold text-[#004647]">Beneficios exclusivos</span>
                </div>
                <p className="text-sm text-slate-600">
                  Como clientes de Indelta, tienes acceso preferencial a las mejores condiciones 
                  y productos de Balanz, una de las fintech más importantes de Latinoamérica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logo y información de Balanz */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-[#66ACAD]/20">
              {/* Logo de Balanz */}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#004647] to-[#66ACAD] rounded-3xl flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">B</span>
                </div>
                <h4 className="text-3xl font-bold text-[#004647] mb-2">Balanz</h4>
                <p className="text-[#66ACAD] font-medium">Fintech líder en Latinoamérica</p>
              </motion.div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#004647] mb-1">+$500M</div>
                    <div className="text-sm text-slate-600">Activos bajo gestión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#004647] mb-1">15+</div>
                    <div className="text-sm text-slate-600">Años de experiencia</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-[#00B04F]">
                  <div className="w-3 h-3 rounded-full bg-[#00B04F] animate-pulse"></div>
                  <span className="font-semibold">Partner Verificado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sección de ventajas */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#004647] mb-12">
            Lo mejor de ambos mundos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Experiencia Indelta",
                description: "25+ años de trayectoria en asesoramiento financiero personalizado",
                color: "#004647"
              },
              {
                title: "Tecnología Balanz",
                description: "Plataforma digital de última generación para gestión de inversiones",
                color: "#66ACAD"
              },
              {
                title: "Resultados únicos",
                description: "La combinación perfecta entre experiencia tradicional e innovación",
                color: "#00B04F"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-[#66ACAD]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <h4 className="text-xl font-bold text-[#004647] mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}