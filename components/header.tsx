// components/header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  activePage?: "home" | "blog"
}

export function Header({ activePage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
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
            </>
          ) : (
            <>
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
          <Button className="bg-[#0a325a] hover:bg-[#0a325a]/90 text-white text-base px-4 py-2 md:text-lg md:px-6 md:py-6 hidden sm:flex">
            Agenda una consulta
          </Button>
          
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
                  <Link
                    href="#process"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Nuestro proceso
                  </Link>
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
                  <Link
                    href="/#why-us"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    ¿Por qué elegirnos?
                  </Link>
                  <Link
                    href="/#process"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Nuestro proceso
                  </Link>
                  <Link
                    href="/#testimonials"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-lg font-medium py-2 border-b border-gray-100 ${
                      activePage === "blog" ? "text-[#aa8c64]" : "text-[#0a325a]"
                    }`}
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-[#0a325a] text-lg font-medium py-2 border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
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