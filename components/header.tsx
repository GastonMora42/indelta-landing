// components/header.tsx (versión mejorada)
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const serviceItems = [
    { label: "Carteras Administradas", href: "/#servicios-carteras" },
    { label: "Gestión de Activos y Patrimonios", href: "/#servicios-gestion" },
    { label: "Sector Corporativo", href: "/#servicios-corporativo" },
    { label: "Real Estate", href: "/#servicios-realestate" },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200/50" 
          : "bg-white border-b"
      }`}
    >
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Indelta" width={48} height={48} className="h-12 w-auto" />
          <span className="text-2xl font-bold text-[#0a325a]">Indelta</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {activePage === "home" ? (
            <>
              <Link
                href="#why-us"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3] flex items-center gap-1">
                    Nuestros Servicios
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2.5 text-sm hover:bg-[#0a325a]/5"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
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
            </>
          ) : (
            <>
              <Link
                href="/#why-us"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3] flex items-center gap-1">
                    Nuestros Servicios
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2.5 text-sm hover:bg-[#0a325a]/5"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="/#testimonials"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Testimonios
              </Link>
              <Link
                href="/blog"
                className={`text-[#0a325a] transition-colors text-lg font-medium py-2 border-b-2 ${
                  activePage === "blog" ? "border-[#aa8c64]" : "border-transparent hover:border-[#93ABC3]"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-lg font-medium py-2 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Contacto
              </Link>
            </>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-base px-4 py-2 md:text-lg md:px-6 md:py-6 hidden sm:flex">
              Agenda una consulta
            </Button>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="text-[#0a325a] md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {activePage === "home" ? (
                <>
                  <Link
                    href="#why-us"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100 flex justify-between items-center">
                      Nuestros Servicios
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-[#0a325a]/80 text-base py-1.5"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="#testimonials"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  <Link
                    href="/blog"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="#contact"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </>
              ) : (
                <>
                  {/* Similar structure for non-home pages... */}
                </>
              )}
              <div className="mt-2">
                <Button className="w-full bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-lg py-6">
                  Agenda una consulta
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}