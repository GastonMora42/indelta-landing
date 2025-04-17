import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BlogPage() {
  // Datos de ejemplo para el blog
  const blogPosts = [
    {
      id: 1,
      title: "Estrategias de inversión para tiempos de incertidumbre",
      excerpt: "Descubre cómo proteger tu patrimonio y encontrar oportunidades incluso en mercados volátiles.",
      date: "15 de abril, 2023",
      category: "Inversiones",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Planificación financiera para cada etapa de la vida",
      excerpt: "Aprende a adaptar tus estrategias financieras según tu edad y objetivos personales.",
      date: "28 de marzo, 2023",
      category: "Planificación",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Cómo diversificar tu cartera de inversiones",
      excerpt: "La diversificación es clave para reducir riesgos. Te explicamos las mejores prácticas.",
      date: "10 de febrero, 2023",
      category: "Estrategia",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Tendencias de mercado para el próximo trimestre",
      excerpt: "Análisis de los sectores con mayor potencial de crecimiento en los próximos meses.",
      date: "5 de enero, 2023",
      category: "Análisis",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 md:h-24 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Indelta" width={48} height={48} className="h-12 w-auto" />
            <span className="text-2xl font-bold text-[#0a325a]">Indelta</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#why-us"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              ¿Por qué elegirnos?
            </Link>
            <Link
              href="/#process"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Nuestro proceso
            </Link>
            <Link
              href="/#testimonials"
              className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
            >
              Testimonios
            </Link>
            <Link
              href="/blog"
              className="text-[#0a325a] font-medium border-b-2 border-[#aa8c64] transition-colors text-lg py-2"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
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

      <main className="container py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#0a325a] hover:text-[#93ABC3] transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-[#0a325a] mb-2">Blog de Indelta</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Artículos, análisis y consejos para tomar mejores decisiones financieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#aa8c64] text-white px-3 py-1 text-sm rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-[#0a325a] mb-2">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-[#aa8c64] font-medium hover:text-[#aa8c64]/80 transition-colors inline-flex items-center"
                >
                  Leer más
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

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
                  <Link href="/#why-us" className="text-gray-300 hover:text-white transition-colors">
                    ¿Por qué elegirnos?
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="text-gray-300 hover:text-white transition-colors">
                    Nuestro proceso
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
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
    </div>
  )
}
