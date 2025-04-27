"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  // Especificamos el tipo correcto para el ref
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Función para detectar cuando el elemento está en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Solo mostrar si está en viewport y no ha sido mostrado y cerrado anteriormente
        if (entry.isIntersecting && !hasBeenShown) {
          // Espera un momento antes de mostrar para una mejor experiencia
          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
        } else if (!entry.isIntersecting && isVisible) {
          // Ocultar cuando salga del viewport
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Activa cuando el 50% del elemento está visible
    );

    // Observa la sección de contacto
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
      // Asignamos de manera segura
      contactRef.current = contactSection;
    }

    return () => {
      // Verificamos que contactRef.current no sea null antes de usar unobserve
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [isVisible, hasBeenShown]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenShown(true); // Evita que vuelva a aparecer al volver a la sección
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 right-24 z-50 max-w-xs bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-[#aa8c64]/20 overflow-hidden"
        >
          <div className="p-5 relative">
            {/* Close button - subtle and elegant */}
            <button 
              onClick={handleClose}
              className="absolute right-2 top-2 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <span className="sr-only">Cerrar</span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            
            {/* Content area */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-[#aa8c64]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="h-5 w-5 text-[#aa8c64]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0a325a] mb-1">Impulsa tu bienestar financiero</h4>
                <p className="text-xs text-slate-600">
                  Nuestros asesores expertos pueden ayudarte a construir un patrimonio sólido que perdure en el tiempo.
                </p>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-[#0a325a] to-[#0a325a] hover:from-[#0a325a] hover:to-[#aa8c64] text-white text-xs py-2 h-auto mt-1 transition-all duration-300"
              onClick={() => {
                handleClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hablar con un asesor ahora
              <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
          
          {/* Subtle decorative element */}
          <div className="h-1 w-full bg-gradient-to-r from-[#aa8c64] via-[#0a325a] to-[#aa8c64] opacity-70"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}