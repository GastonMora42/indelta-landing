// components/header.tsx
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
    { label: "Carteras Administradas", href: "/#servicios" },
    { label: "Gestión de Activos y Patrimonios", href: "/#servicios" },
    { label: "Sector Corporativo", href: "/#servicios" },
    { label: "Real Estate", href: "/#servicios" },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200/50" 
          : "bg-white border-b"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Indelta" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#0a325a]">Indelta</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {activePage === "home" ? (
            <>
              <Link
                href="#why-us"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3] flex items-center gap-1">
                    Servicios
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2 text-sm hover:bg-[#0a325a]/5"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="#testimonials"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Testimonios
              </Link>
              
              <Link
                href="/blog"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Blog
              </Link>
              
              <Link
                href="#contact"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Contacto
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/#why-us"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3] flex items-center gap-1">
                    Servicios
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2 text-sm hover:bg-[#0a325a]/5"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="/#testimonials"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Testimonios
              </Link>
              
              <Link
                href="/blog"
                className={`text-[#0a325a] transition-colors text-base font-medium py-1.5 px-1 border-b-2 ${
                  activePage === "blog" ? "border-[#aa8c64]" : "border-transparent hover:border-[#93ABC3]"
                }`}
              >
                Blog
              </Link>
              
              <Link
                href="/#contact"
                className="text-[#0a325a] hover:text-[#93ABC3] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#93ABC3]"
              >
                Contacto
              </Link>
            </>
          )}
        </nav>
        
        <div className="flex items-center gap-3">
          {/* Balanz Link - Para sección partners */}
          <Link 
            href="/#trusted-by-partners"
            className="hidden md:flex items-center text-[#aa8c64] hover:text-[#aa8c64]/80 font-medium text-sm transition-colors"
          >
            Socios estrategicos de Balanz
          </Link>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-sm px-4 py-2 h-9 hidden sm:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda una consulta
            </Button>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="text-[#0a325a] md:hidden p-1"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            <nav className="container py-4 flex flex-col gap-2">
              {activePage === "home" ? (
                <>
                  <Link
                    href="#why-us"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100 flex justify-between items-center">
                      Servicios
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-[#0a325a]/80 text-sm py-1.5"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="#testimonials"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  
                  <Link
                    href="#partners"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Socios Balanz
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  
                  <Link
                    href="#contact"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/#why-us"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100 flex justify-between items-center">
                      Servicios
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-[#0a325a]/80 text-sm py-1.5"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/#testimonials"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  
                  <Link
                    href="/#partners"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Socios Balanz
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  
                  <Link
                    href="/#contact"
                    className="text-[#0a325a] text-base font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </>
              )}
              <div className="mt-3">
                <Button 
                  className="w-full bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-sm py-2 h-10"
                  onClick={() => {
                    toggleMenu();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
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