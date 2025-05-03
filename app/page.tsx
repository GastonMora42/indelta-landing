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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activePage="home" />

      <main className="flex-1">
      <section className="relative py-4 md:py-6 bg-gray-50"> {/* Reducido de py-10 md:py-16 */}
  <div className="container relative z-10">
    <div className="grid grid-cols-1 gap-4"> {/* También reducido el gap de 8 a 6 */}
      <HeroBanner />
    </div>
  </div>
</section>
<ServicesSection />
        {/* Why Choose Us Section - Reorganized */}
        <WhyChooseUsSection />
            <TrustedBrandsCarousel />
            <ImpactStatistics />
        {/* Testimonials Section */}
        <section id="testimonials" className="py-8 bg-white relative">
          <div className="container">

            <EnhancedTestimonials />
      
          </div>


        </section>

        {/* Partner Logo */}
        <TrustedByPartnersPremium />
        {/* Contact Form Section */}
        <section id="contact" className="py-16 relative overflow-hidden bg-gradient-to-br from-[#0a325a]/10 to-transparent">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-sm font-semibold text-[#aa8c64] uppercase tracking-wider mb-2 block">Contáctanos</span>
                <h2 className="text-3xl font-bold text-[#0a325a] mb-4">Hablemos de tu futuro financiero</h2>
                <p className="text-slate-700">
                  Complete esta información para ser contactado por un asesor especializado
                </p>
              </div>
                        {/* Testimonial CTA */}
          <TestimonialCta />
              
              <Card className="p-8 backdrop-blur-sm bg-white shadow-xl border-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#aa8c64] to-[#aa8c64]/30"></div>
                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>

{/* Footer con paleta de verdes */}
<footer className="bg-[#004647] text-white py-12">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/logo.png"
            alt="Indelta"
            width={40}
            height={40}
            className="h-10 w-auto bg-white rounded-full p-1"
          />
          <span className="text-xl font-bold">Indelta</span>
        </div>
        <p className="text-sm text-[#99C7C8]">
          Asesoramiento financiero premium para inversores de segmento medio.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#why-us" className="text-[#99C7C8] hover:text-white transition-colors">
              ¿Por qué elegirnos?
            </Link>
          </li>
          <li>
            <Link href="#process" className="text-[#99C7C8] hover:text-white transition-colors">
              Nuestro proceso
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-[#99C7C8] hover:text-white transition-colors">
              Testimonios
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[#99C7C8] hover:text-white transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-[#99C7C8] hover:text-white transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Certificaciones</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#66ACAD] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span>Agente de Liquidación y Compensación</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#66ACAD] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span>Asesor Financiero Certificado</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#66ACAD] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span>Miembro de la Bolsa de Valores</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Contacto</h3>
        <address className="not-italic text-sm text-[#99C7C8] space-y-2">
          <p>Av. Financiera 123, Piso 4</p>
          <p>Buenos Aires, Argentina</p>
          <p>info@indelta.com</p>
          <p>+54 11 5555-5555</p>
        </address>
      </div>
    </div>

    <div className="mt-12 pt-6 border-t border-[#66ACAD]/30 text-center text-sm text-[#99C7C8]">
      <p>© {new Date().getFullYear()} Indelta. Todos los derechos reservados.</p>
      <p className="mt-2">
        La información proporcionada en este sitio no constituye asesoramiento financiero. Las inversiones están
        sujetas a riesgos de mercado.
      </p>
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