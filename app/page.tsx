// app/page.tsx - VERSIÓN COMPLETAMENTE MEJORADA
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, BarChart2, Shield, Users, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { ProcessSteps } from "@/components/process-steps"
import { CompanyLogos } from "@/components/company-logos"
import { TestimonialCta } from "@/components/testimonial-cta"
import { HeroBanner } from "@/components/hero-carousel"
import { Header } from "@/components/header"
import { motion } from "framer-motion"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { EnhancedTestimonials } from "@/components/enhanced-testimonials"
import { TrustedBrandsCarousel } from "@/components/trusted-brands-carousel"
import { ImpactStatistics } from "@/components/impact-statictics"
import { TrustedByPartnersPremium } from "@/components/trusted-by-partners"
import { ProcessSection } from "@/components/process-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activePage="home" />

      <main className="flex-1">
        {/* Hero Section con contraste de fondo mejorado */}
        <section className="relative py-4 md:py-6 bg-gradient-to-b from-gray-50 via-[#66ACAD]/5 to-white">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-4">
              <HeroBanner />
            </div>
          </div>
          {/* Línea de transición suave */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
        </section>

        {/* Services Section con fondo contrastante */}
        <section className="relative bg-gradient-to-b from-white via-[#004647]/5 to-[#66ACAD]/10">
          <ServicesSection />
          {/* Transición hacia why-us */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#99C7C8]/10"></div>
        </section>

        {/* Why Choose Us Section con fondo verde suave */}
        <section className="relative bg-gradient-to-b from-[#66ACAD]/10 via-[#99C7C8]/15 to-[#004647]/5">
          <WhyChooseUsSection />
          {/* Transición hacia el proceso */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
        </section>

        {/* Process Section con fondo blanco y toques verdes */}
        <section className="relative bg-gradient-to-b from-white via-[#66ACAD]/5 to-white">
          <ProcessSection />
          {/* Línea decorativa de transición */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#004647] via-[#66ACAD] to-[#004647]"></div>
        </section>

        {/* Trusted Brands con fondo neutro */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <TrustedBrandsCarousel />
        </section>

        {/* Impact Statistics con gradiente verde fuerte */}
        <ImpactStatistics />

        {/* Testimonials Section con fondo suave */}
        <section id="testimonials" className="py-8 bg-gradient-to-b from-white via-[#66ACAD]/5 to-[#99C7C8]/10 relative">
          <div className="container">
            <EnhancedTestimonials />
          </div>
          {/* Transición hacia partners */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#66ACAD]/10"></div>
        </section>

        {/* Partner Section con fondo verde claro */}
        <section className="relative bg-gradient-to-b from-[#66ACAD]/10 via-[#004647]/5 to-white">
          <TrustedByPartnersPremium />
        </section>

        {/* Contact Form Section con contraste final */}
        <section id="contact" className="py-16 relative overflow-hidden bg-gradient-to-br from-[#004647]/10 via-[#66ACAD]/5 to-transparent">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-sm font-semibold text-[#66ACAD] uppercase tracking-wider mb-2 block">Contáctanos</span>
                <h2 className="text-3xl font-bold text-[#004647] mb-4">Hablemos de tu futuro financiero</h2>
                <p className="text-slate-700">
                  Complete esta información para ser contactado por un asesor especializado
                </p>
              </div>
              
              {/* Testimonial CTA */}
              <TestimonialCta />
              
              <Card className="p-8 backdrop-blur-sm bg-white shadow-xl border-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#66ACAD] to-[#004647]"></div>
                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer mejorado con paleta de verdes */}
      <footer className="bg-[#004647] text-white py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#66ACAD] via-[#99C7C8] to-[#66ACAD]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#66ACAD]/10 blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#99C7C8]/5 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              {/* LOGO MÁS GRANDE */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/logo.png"
                  alt="Indelta"
                  width={64}
                  height={64}
                  className="h-16 w-auto bg-white rounded-full p-2"
                />
                <span className="text-3xl font-bold">Indelta</span>
              </div>
              <p className="text-[#99C7C8] text-base leading-relaxed">
                Asesoramiento financiero premium para inversores de segmento medio con más de 25 años de experiencia en el mercado.
              </p>
              
              {/* Datos de contacto destacados */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-[#99C7C8]">
                  <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                  <span className="text-sm">info@indelta.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#99C7C8]">
                  <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                  <span className="text-sm">+54 11 5555-5555</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6 text-[#66ACAD]">Enlaces rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#why-us" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    ¿Por qué elegirnos?
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#proceso" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    Nuestro proceso
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[#99C7C8] hover:text-white transition-colors text-base flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#66ACAD] group-hover:w-2 transition-all"></span>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6 text-[#66ACAD]">Certificaciones</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#66ACAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#99C7C8]">Agente de Liquidación y Compensación</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#66ACAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#99C7C8]">Asesor Financiero Certificado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#66ACAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#99C7C8]">Miembro de la Bolsa de Valores</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#66ACAD] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#99C7C8]">Partner Estratégico de Balanz</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6 text-[#66ACAD]">Información</h3>
              <address className="not-italic text-base text-[#99C7C8] space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#66ACAD]/20 rounded-full flex items-center justify-center mt-1">
                    <span className="w-2 h-2 bg-[#66ACAD] rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Oficina Principal</p>
                    <p>Av. Financiera 123, Piso 4</p>
                    <p>Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#66ACAD]/20 rounded-full flex items-center justify-center mt-1">
                    <span className="w-2 h-2 bg-[#66ACAD] rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-medium text-white">Horarios</p>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
              </address>
            </div>
          </div>

          {/* Línea separadora */}
          <div className="mt-12 pt-8 border-t border-[#66ACAD]/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-[#99C7C8] text-base">© {new Date().getFullYear()} Indelta. Todos los derechos reservados.</p>
                <p className="text-[#99C7C8]/70 text-sm mt-1">
                  La información proporcionada en este sitio no constituye asesoramiento financiero. Las inversiones están
                  sujetas a riesgos de mercado.
                </p>
              </div>
              
              {/* Badge de experiencia */}
              <div className="flex items-center gap-3 bg-[#66ACAD]/20 px-6 py-3 rounded-full border border-[#66ACAD]/30">
                <div className="w-3 h-3 rounded-full bg-[#66ACAD] animate-pulse"></div>
                <span className="text-white font-semibold">+25 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Versión sin framer-motion */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <a
            href="https://wa.me/5491155555555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
            aria-label="Contactar por WhatsApp"
          >
            <div className="relative">
              {/* Efecto de ping animado */}
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-70"></span>
              
              <div className="bg-white rounded-full p-1 flex items-center justify-center w-10 h-10 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <span className="font-medium text-sm opacity-90">Asistencia inmediata</span>
              <span className="font-bold text-base">Habla con un asesor</span>
            </div>
            
            {/* Flecha animada sin framer-motion */}
            <div className="ml-1 hidden md:block">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-90 animate-bounce-x"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
          
          {/* Tooltip emergente */}
          <div className="absolute -top-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md max-w-[200px] text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ¿Necesitas asesoramiento financiero? ¡Chatea con nosotros!
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  )
}