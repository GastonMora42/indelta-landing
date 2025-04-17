import Image from "next/image"
import Link from "next/link"
import { ChevronRight, BarChart2, Shield, Users, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { ProcessSteps } from "@/components/process-steps"
import { Testimonials } from "@/components/testimonials"
import { CompanyLogos } from "@/components/company-logos"
import { HeroImage } from "@/components/hero-image"
import { TestimonialCta } from "@/components/testimonial-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 md:h-24 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Indelta" width={48} height={48} className="h-12 w-auto" />
            <span className="text-2xl font-bold text-[#0a325a]">Indelta</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#why-us"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              ¿Por qué elegirnos?
            </Link>
            <Link
              href="#process"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Nuestro proceso
            </Link>
            <Link
              href="#testimonials"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Testimonios
            </Link>
            <Link
              href="/blog"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Contacto
            </Link>
          </nav>
          <Button className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-lg px-6 py-6">
            Agenda una consulta
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a325a]/10 to-[#99C7C8]/10 z-0"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a325a] leading-tight">
                  Protección patrimonial para tu futuro financiero
                </h1>
                <p className="text-lg md:text-xl text-slate-700 max-w-lg">
                  Asesoramiento financiero personalizado para inversores que buscan seguridad, crecimiento y
                  tranquilidad en sus decisiones de inversión.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white px-6 py-6 text-lg">
                    Protege tu patrimonio
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#aa8c64] text-[#aa8c64] hover:bg-[#aa8c64]/10 px-6 py-6 text-lg"
                  >
                    Conoce más
                  </Button>
                </div>
              </div>
              <HeroImage />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-4">¿Por qué elegirnos?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ofrecemos soluciones financieras personalizadas con un enfoque en la seguridad y el crecimiento
                sostenible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 border-t-4 border-t-[#0a325a] hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-[#0a325a]/10 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-[#0a325a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a325a] mb-2">Seguridad garantizada</h3>
                <p className="text-slate-600">
                  Protegemos tu patrimonio con estrategias de inversión seguras y diversificadas.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#93ABC3] hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-[#93ABC3]/10 rounded-full w-fit">
                  <BarChart2 className="h-6 w-6 text-[#93ABC3]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a325a] mb-2">Análisis experto</h3>
                <p className="text-slate-600">
                  Nuestro equipo de analistas monitorea constantemente el mercado para tomar decisiones informadas.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#99C7C8] hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-[#99C7C8]/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-[#99C7C8]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a325a] mb-2">Atención personalizada</h3>
                <p className="text-slate-600">
                  Cada cliente recibe un plan de inversión adaptado a sus objetivos y perfil de riesgo.
                </p>
              </Card>

              <Card className="p-6 border-t-4 border-t-[#aa8c64] hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-[#aa8c64]/10 rounded-full w-fit">
                  <TrendingUp className="h-6 w-6 text-[#aa8c64]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a325a] mb-2">Resultados comprobados</h3>
                <p className="text-slate-600">Historial de rendimiento superior al mercado con menor volatilidad.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a325a]/30 to-[#0a325a]/5 z-0"></div>
          <div className="absolute inset-0 z-0">
            <div className="bokeh-bg"></div>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-4">Nuestro proceso</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Un enfoque metódico y transparente para ayudarte a alcanzar tus objetivos financieros.
              </p>
            </div>

            <ProcessSteps />

            <div className="flex justify-center mt-12">
              <Button className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white px-8 py-6 text-lg group">
                Conocer más
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a325a] mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Historias de éxito de quienes confiaron en nuestro asesoramiento.
              </p>
            </div>

            <Testimonials />
          </div>

          {/* Testimonial CTA */}
          <TestimonialCta />
        </section>

        {/* Company Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a325a] mb-4">Invertimos en las mejores empresas</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Accede a oportunidades de inversión en compañías líderes a nivel mundial.
              </p>
            </div>

            <CompanyLogos />
          </div>
        </section>

        {/* Partner Logo */}
        <section className="py-8 bg-white">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg text-slate-600">Partner estratégico</p>
              <div className="w-40">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Balanz"
                  width={160}
                  height={80}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 relative overflow-hidden bg-white">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 backdrop-blur-sm bg-[#aa8c64]/20 shadow-xl border-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#aa8c64] to-[#aa8c64]/30"></div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#0a325a] mb-4">Hablemos de tu futuro financiero</h2>
                  <p className="text-slate-700">
                    Complete esta información para ser contactado por un asesor especializado
                  </p>
                </div>

                <ContactForm />
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a325a] text-white py-12">
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
              <p className="text-sm text-gray-300">
                Asesoramiento financiero premium para inversores de segmento medio.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#why-us" className="text-gray-300 hover:text-white transition-colors">
                    ¿Por qué elegirnos?
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
                    Nuestro proceso
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Certificaciones</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#0a325a] text-xs font-bold">✓</span>
                  </div>
                  <span>Agente de Liquidación y Compensación</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#0a325a] text-xs font-bold">✓</span>
                  </div>
                  <span>Asesor Financiero Certificado</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#0a325a] text-xs font-bold">✓</span>
                  </div>
                  <span>Miembro de la Bolsa de Valores</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <address className="not-italic text-sm text-gray-300 space-y-2">
                <p>Av. Financiera 123, Piso 4</p>
                <p>Buenos Aires, Argentina</p>
                <p>info@indelta.com</p>
                <p>+54 11 5555-5555</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Indelta. Todos los derechos reservados.</p>
            <p className="mt-2">
              La información proporcionada en este sitio no constituye asesoramiento financiero. Las inversiones están
              sujetas a riesgos de mercado.
            </p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5491155555555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl"
        >
          <div className="bg-white rounded-full p-1 flex items-center justify-center w-8 h-8">
            <Image src="/logo.png" alt="Indelta" width={24} height={24} className="w-6 h-6" />
          </div>
          <span className="font-medium">Habla con un asesor</span>
        </a>
      </div>
    </div>
  )
}
