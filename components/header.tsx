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
          ? "bg-[#007476]/95 backdrop-blur-sm shadow-md border-b border-[#99C7C8]/20" 
          : "bg-[#007476] border-b border-[#99C7C8]/10"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 pl-6">
          <Image src="/logo.png" alt="Indelta" width={48} height={48} className="h-12 w-auto bg-white rounded-full p-1" />
          <span className="text-2xl font-bold text-white">Indelta</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {activePage === "home" ? (
            <>
              <Link
                href="#why-us"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8] flex items-center gap-1">
                    Servicios
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-[#007476] border-[#99C7C8]/20">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2 text-sm text-white hover:bg-[#99C7C8]/20"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="#testimonials"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                Testimonios
              </Link>
              
              <Link
                href="/blog"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                Blog
              </Link>
              
              <Link
                href="#contact"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                Contacto
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/#why-us"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                ¿Por qué elegirnos?
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8] flex items-center gap-1">
                    Servicios
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-[#007476] border-[#99C7C8]/20">
                  {serviceItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link 
                        href={item.href}
                        className="cursor-pointer flex w-full px-4 py-2 text-sm text-white hover:bg-[#99C7C8]/20"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link
                href="/#testimonials"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
              >
                Testimonios
              </Link>
              
              <Link
                href="/blog"
                className={`text-white transition-colors text-base font-medium py-1.5 px-1 border-b-2 ${
                  activePage === "blog" ? "border-[#99C7C8]" : "border-transparent hover:border-[#99C7C8]"
                }`}
              >
                Blog
              </Link>
              
              <Link
                href="/#contact"
                className="text-white hover:text-[#99C7C8] transition-colors text-base font-medium py-1.5 px-1 border-b-2 border-transparent hover:border-[#99C7C8]"
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
            className="hidden md:flex items-center text-[#99C7C8] hover:text-white font-medium text-sm transition-colors"
          >
            Socios estrategicos de Balanz
          </Link>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              className="bg-white hover:bg-[#99C7C8] text-[#007476] hover:text-[#005D5E] font-medium text-sm px-4 py-2 h-9 hidden sm:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda una consulta
            </Button>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="text-white md:hidden p-1"
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
            className="md:hidden bg-[#007476] border-t border-[#99C7C8]/20"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {activePage === "home" ? (
                <>
                  <Link
                    href="#why-us"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20 flex justify-between items-center">
                      Servicios
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-white/80 text-sm py-1.5 hover:text-[#99C7C8]"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="#testimonials"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  
                  <Link
                    href="#partners"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Socios Balanz
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  
                  <Link
                    href="#contact"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/#why-us"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  
                  <div className="flex flex-col">
                    <div className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20 flex justify-between items-center">
                      Servicios
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 flex flex-col gap-1">
                      {serviceItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="text-white/80 text-sm py-1.5 hover:text-[#99C7C8]"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/#testimonials"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  
                  <Link
                    href="/#partners"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Socios Balanz
                  </Link>
                  
                  <Link
                    href="/blog"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  
                  <Link
                    href="/#contact"
                    className="text-white text-base font-medium py-2 border-b border-[#99C7C8]/20"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </>
              )}
              <div className="mt-3">
                <Button 
                  className="w-full bg-white hover:bg-[#99C7C8] text-[#007476] hover:text-[#005D5E] font-medium text-sm py-2 h-10"
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