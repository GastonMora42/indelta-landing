// components/header.tsx - VERSIÓN PREMIUM MEJORADA
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  activePage?: "home" | "blog"
}

export function Header({ activePage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Detectar dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      
      setScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para scroll a servicios específicos
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById('servicios')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const serviceButtons = document.querySelectorAll('[data-service-id]')
        serviceButtons.forEach((button) => {
          if (button.getAttribute('data-service-id') === serviceId) {
            (button as HTMLButtonElement).click()
          }
        })
      }, 800)
    }
  }

  const serviceItems = [
    { label: "Carteras Administradas", id: "carteras" },
    { label: "Gestión de Activos y Patrimonios", id: "gestion" },
    { label: "Sector Corporativo", id: "corporativo" },
    { label: "Real Estate", id: "realestate" },
  ]

  return (
    <>
      {/* Header principal */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ 
          y: scrollDirection === 'down' && scrolled ? -100 : 0,
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#004647]/95 backdrop-blur-md shadow-xl border-b border-[#66ACAD]/30" 
            : "bg-[#004647] border-b border-[#66ACAD]/20"
        }`}
      >
        {/* Barra superior con contacto - solo desktop */}
        <div className="hidden lg:block bg-[#66ACAD]/20 border-b border-[#66ACAD]/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>info@indelta.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+54 11 5555-5555</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <span>Lun - Vie: 9:00 - 18:00</span>
                <div className="w-px h-4 bg-white/30"></div>
                <Link 
                  href="/#trusted-by-partners"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Partner estratégico de Balanz
                  <div className="w-2 h-2 rounded-full bg-[#00B04F] animate-pulse"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación principal */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo mejorado con mejor responsive */}
            <Link href="/" className="flex items-center gap-3 lg:gap-4 group">
              {/* Contenedor del logo con efecto hover */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Image 
                    src="/logo.png" 
                    alt="Indelta" 
                    width={56} 
                    height={56} 
                    className="h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 bg-white rounded-full p-1.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                  />
                  {/* Efecto de glow en hover */}
                  <div className="absolute inset-0 rounded-full bg-[#66ACAD]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
              
              {/* Texto del logo con mejor tipografía */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  Indelta
                </span>
                <span className="text-xs lg:text-sm text-[#66ACAD] font-medium tracking-wider hidden sm:block">
                  Financial Advisory
                </span>
              </div>
            </Link>
            
            {/* Navegación desktop */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {activePage === "home" ? (
                <>
                  <Link
                    href="#why-us"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    ¿Por qué elegirnos?
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] flex items-center gap-1 relative group">
                        <span>Servicios</span>
                        <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-all group-hover:rotate-180" />
                        <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="center" 
                      className="w-72 bg-[#004647]/95 backdrop-blur-md border-[#66ACAD]/30 shadow-2xl"
                    >
                      {serviceItems.map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                          <button 
                            onClick={() => {
                              scrollToService(item.id)
                            }}
                            className="cursor-pointer flex w-full px-4 py-3 text-sm text-white hover:bg-[#66ACAD]/20 transition-colors rounded-md mx-2 my-1"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                              {item.label}
                            </div>
                          </button>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="#proceso"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Nuestro proceso
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="#testimonials"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Testimonios
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Blog
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="#contact"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Contacto
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </>
              ) : (
                // Navegación para otras páginas
                <>
                  <Link
                    href="/#why-us"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    ¿Por qué elegirnos?
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] flex items-center gap-1 relative group">
                        <span>Servicios</span>
                        <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-all group-hover:rotate-180" />
                        <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="center" 
                      className="w-72 bg-[#004647]/95 backdrop-blur-md border-[#66ACAD]/30 shadow-2xl"
                    >
                      {serviceItems.map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                          <Link 
                            href="/#servicios"
                            className="cursor-pointer flex w-full px-4 py-3 text-sm text-white hover:bg-[#66ACAD]/20 transition-colors rounded-md mx-2 my-1"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                              {item.label}
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="/#proceso"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Nuestro proceso
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="/#testimonials"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Testimonios
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="/blog"
                    className={`text-white transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 relative group ${
                      activePage === "blog" 
                        ? "border-[#66ACAD] bg-white/10" 
                        : "border-transparent hover:border-[#66ACAD]"
                    }`}
                  >
                    Blog
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  
                  <Link
                    href="/#contact"
                    className="text-white hover:text-[#66ACAD] transition-all duration-300 text-sm xl:text-base font-medium py-2 px-3 xl:px-4 rounded-lg border-b-2 border-transparent hover:border-[#66ACAD] relative group"
                  >
                    Contacto
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </>
              )}
            </nav>
            
            {/* Botones de acción y menú móvil */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Botón CTA mejorado */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:block"
              >
                <Button 
                  className="bg-gradient-to-r from-[#66ACAD] to-[#99C7C8] hover:from-[#004647] hover:to-[#66ACAD] text-white font-bold text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 lg:py-3 h-auto border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10">Agenda una consulta</span>
                  <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </motion.div>
              
              {/* Toggle de menú móvil mejorado */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <div className="absolute inset-0 bg-[#66ACAD]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Menú móvil mejorado */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menú deslizante */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#004647]/95 backdrop-blur-md border-l border-[#66ACAD]/30 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header del menú */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/logo.png" 
                      alt="Indelta" 
                      width={40} 
                      height={40} 
                      className="h-10 w-10 bg-white rounded-full p-1" 
                    />
                    <span className="text-xl font-bold text-white">Indelta</span>
                  </div>
                  <button 
                    onClick={toggleMenu}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>

                {/* Navegación móvil */}
                <nav className="space-y-2">
                  {activePage === "home" ? (
                    <>
                      <Link
                        href="#why-us"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        ¿Por qué elegirnos?
                      </Link>
                      
                      {/* Servicios expandibles */}
                      <div className="border-b border-[#66ACAD]/20">
                        <div className="text-white text-base font-medium py-3 px-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                            Servicios
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="pl-8 pb-2 space-y-1">
                          {serviceItems.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                scrollToService(item.id)
                                toggleMenu()
                              }}
                              className="block w-full text-left text-white/80 text-sm py-2 px-3 hover:text-[#66ACAD] hover:bg-white/5 rounded transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="#proceso"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Nuestro proceso
                      </Link>
                      
                      <Link
                        href="#testimonials"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Testimonios
                      </Link>
                      
                      <Link
                        href="#trusted-by-partners"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Socios Balanz
                      </Link>
                      
                      <Link
                        href="/blog"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Blog
                      </Link>
                      
                      <Link
                        href="#contact"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Contacto
                      </Link>
                    </>
                  ) : (
                    // Navegación similar para otras páginas con ajustes
                    <>
                      <Link
                        href="/#why-us"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        ¿Por qué elegirnos?
                      </Link>
                      
                      <div className="border-b border-[#66ACAD]/20">
                        <div className="text-white text-base font-medium py-3 px-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                            Servicios
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="pl-8 pb-2 space-y-1">
                          {serviceItems.map((item, index) => (
                            <Link
                              key={index}
                              href="/#servicios"
                              className="block text-white/80 text-sm py-2 px-3 hover:text-[#66ACAD] hover:bg-white/5 rounded transition-colors"
                              onClick={toggleMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/#proceso"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Nuestro proceso
                      </Link>
                      
                      <Link
                        href="/#testimonials"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Testimonios
                      </Link>
                      
                      <Link
                        href="/#trusted-by-partners"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Socios Balanz
                      </Link>
                      
                      <Link
                        href="/blog"
                        className={`flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg transition-colors border-b border-[#66ACAD]/20 ${
                          activePage === "blog" ? "bg-white/15" : "hover:bg-white/10"
                        }`}
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Blog
                      </Link>
                      
                      <Link
                        href="/#contact"
                        className="flex items-center gap-3 text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-[#66ACAD]/20"
                        onClick={toggleMenu}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#66ACAD]"></div>
                        Contacto
                      </Link>
                    </>
                  )}
                </nav>

                {/* CTA en el menú móvil */}
                <div className="mt-8 pt-6 border-t border-[#66ACAD]/30">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#66ACAD] to-[#99C7C8] hover:from-[#004647] hover:to-[#66ACAD] text-white font-bold py-3 h-auto transition-all shadow-lg"
                    onClick={() => {
                      toggleMenu();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Agenda una consulta
                  </Button>
                  
                  {/* Información de contacto */}
                  <div className="mt-4 space-y-2 text-center">
                    <div className="flex items-center justify-center gap-2 text-[#66ACAD] text-sm">
                      <Phone size={14} />
                      <span>+54 11 5555-5555</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#66ACAD] text-sm">
                      <Mail size={14} />
                      <span>info@indelta.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer para compensar el header fijo */}
      <div className="h-16 sm:h-18 lg:h-28"></div>
    </>
  )
}