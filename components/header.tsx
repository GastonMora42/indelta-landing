// components/dark-green-header.tsx - VERSIÓN CON FONDO VERDE OSCURO
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activePage?: string
}

export function Header({ activePage = "home" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: "why-us", label: "¿Por qué elegirnos?", href: "#why-us" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "proceso", label: "Nuestro proceso", href: "#proceso" },
    { id: "testimonials", label: "Testimonios", href: "#testimonials" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contacto", href: "#contact" }
  ]

  const contactInfo = [
    { icon: Mail, text: "info@indelta.com", href: "mailto:consultas@indelta.com.ar" },
    { icon: Clock, text: "Lun - Vie: 9:00 - 18:00", href: null }
  ]

  return (
    <>
      {/* Top Bar con información de contacto - Verde más oscuro */}
      <div className="hidden lg:block bg-[#003540] text-white py-2 relative z-50">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90 hover:text-[#66ACAD] transition-colors">
                  <item.icon className="w-4 h-4" />
                  {item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-white/90">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#00B04F] rounded-full animate-pulse"></span>
                <span>Partner estratégico de Balanz</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal - Fondo Verde Oscuro */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#004647]/95 backdrop-blur-md shadow-lg border-b border-[#66ACAD]/30' 
            : 'bg-[#004647]'
        }`}
      >
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Optimizado para Fondo Oscuro */}
            <motion.div 
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                {/* Contenedor del logo con proporción optimizada */}
                <div className="relative flex items-center justify-center">
                  {/* Fondo sutil para mejorar contraste en tema oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#66ACAD]/20 to-[#99C7C8]/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo con fondo blanco para contraste */}
                  <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full bg-white shadow-lg group-hover:shadow-xl group-hover:shadow-[#66ACAD]/25 transition-all duration-300">
                    <Image
                      src="/logo.png"
                      alt="Indelta"
                      fill
                      className="object-cover p-1"
                      priority
                    />
                  </div>
                  
                  {/* Badge de verificación */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00B04F] rounded-full border-2 border-[#004647] flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
                
                {/* Texto del logo para tema oscuro */}
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#66ACAD] transition-colors duration-300">
                    Indelta
                  </span>
                  <span className="text-xs text-[#66ACAD] font-medium leading-none hidden md:block group-hover:text-[#99C7C8] transition-colors duration-300">
                    Asesoramiento Financiero
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Navegación Desktop - Adaptada para fondo oscuro */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      relative px-3 py-2 text-sm font-medium transition-all duration-300
                      ${activePage === item.id 
                        ? 'text-[#66ACAD]' 
                        : 'text-white/90 hover:text-[#66ACAD]'
                      }
                    `}
                  >
                    {item.label}
                    {activePage === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#66ACAD] to-[#99C7C8] rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Adaptado para tema oscuro */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-[#66ACAD] hover:bg-[#99C7C8] text-white hover:text-[#004647] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#66ACAD]/25 transition-all duration-300 group border border-[#66ACAD]/20 hover:border-[#99C7C8]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    Agenda una consulta
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Tema oscuro */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-[#66ACAD]/20 hover:text-[#66ACAD] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Tema oscuro */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#004647]/95 backdrop-blur-md border-t border-[#66ACAD]/30"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`
                          block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                          ${activePage === item.id 
                            ? 'bg-[#66ACAD]/20 text-[#66ACAD] border-l-4 border-[#66ACAD]' 
                            : 'text-white/90 hover:bg-[#66ACAD]/10 hover:text-[#66ACAD]'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA - Tema oscuro */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                    className="pt-4 border-t border-[#66ACAD]/30"
                  >
                    <Button
                      className="w-full bg-[#66ACAD] hover:bg-[#99C7C8] text-white hover:text-[#004647] py-4 rounded-lg font-semibold shadow-lg group border border-[#66ACAD]/20"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <span className="flex items-center justify-center">
                        Agenda una consulta
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

// Logo profesional adaptado para tema oscuro
export function DarkProfessionalLogo({ 
  size = "default", 
  showSubtext = true,
  glowEffect = false
}: { 
  size?: "small" | "default" | "large"
  showSubtext?: boolean
  glowEffect?: boolean
}) {
  const sizes = {
    small: "w-8 h-8 md:w-10 md:h-10",
    default: "w-12 h-12 md:w-14 md:h-14", 
    large: "w-16 h-16 md:w-20 md:h-20"
  }
  
  const textSizes = {
    small: "text-lg md:text-xl",
    default: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl"
  }

  return (
    <motion.div 
      className="flex items-center space-x-3 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/" className="flex items-center space-x-3">
        {/* Logo Container */}
        <div className="relative flex items-center justify-center">
          {/* Glow effect para tema oscuro */}
          <div className={`absolute inset-0 bg-gradient-to-br from-[#66ACAD]/30 to-[#99C7C8]/30 rounded-full blur-sm transition-opacity duration-300 ${
            glowEffect ? 'opacity-50 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} />
          
          {/* Logo Background - Blanco para contraste en fondo oscuro */}
          <div className={`
            relative ${sizes[size]} overflow-hidden rounded-full bg-white shadow-lg
            group-hover:shadow-xl group-hover:shadow-[#66ACAD]/25 transition-all duration-300
          `}>
            <Image
              src="/logo.png"
              alt="Indelta"
              fill
              className="object-cover p-1"
              priority
            />
          </div>
          
          {/* Badge de profesionalidad */}
          {size !== "small" && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00B04F] rounded-full border-2 border-[#004647] flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          )}
        </div>
        
        {/* Text para tema oscuro */}
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold tracking-tight text-white group-hover:text-[#66ACAD] transition-colors duration-300`}>
            Indelta
          </span>
          {showSubtext && size !== "small" && (
            <span className="text-xs text-[#66ACAD] font-medium leading-none hidden md:block group-hover:text-[#99C7C8] transition-colors duration-300">
              Asesoramiento Financiero
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}