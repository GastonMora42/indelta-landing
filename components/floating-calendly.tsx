// components/floating-calendly.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import Script from "next/script"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowRight, X, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCalendly({
  buttonText = "Agenda una consulta",
  buttonVariant = "primary", // "primary", "secondary", "header"
  showIcon = true,
  className = ""
}) {
  // *** REEMPLAZA ESTA URL CON TU URL REAL DE CALENDLY ***
  const calendlyUrl = "https://calendly.com/gastonmora1742"
  
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const infoRef = useRef<HTMLDivElement>(null)
  
  // Cerrar el panel de info al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        setIsInfoOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
  // Abrir Calendly en popup
  const openCalendly = () => {
    setIsInfoOpen(false)
    
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: calendlyUrl})
      return true
    }
    // Fallback si Calendly no está cargado
    window.open(calendlyUrl, "_blank")
  }
  
  // Estilos según la variante
  const getButtonClasses = () => {
    switch(buttonVariant) {
      case "secondary":
        return "bg-white text-[#0a325a] hover:bg-[#99C7C8]/10 border border-[#0a325a]"
      case "header":
        return "bg-white text-[#0a325a] hover:bg-white/90 shadow-md"
      default: // primary
        return "bg-[#0a325a] text-white hover:bg-[#0a325a]/90"
    }
  }
  
  return (
    <div className={`relative ${className}`}>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />
      
      <div className="relative">
        {/* Botón principal */}
        <Button 
          onClick={() => setIsInfoOpen(true)}
          className={`group ${getButtonClasses()}`}
        >
          {showIcon && <Calendar size={18} className="mr-2" />}
          {buttonText}
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
        
        {/* Panel de información emergente */}
        <AnimatePresence>
          {isInfoOpen && (
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-3 z-50 w-80 bg-white rounded-xl shadow-xl border border-[#99C7C8]/20 overflow-hidden"
            >
              <div className="p-4 bg-[#0a325a] text-white relative">
                <button 
                  onClick={() => setIsInfoOpen(false)}
                  className="absolute top-3 right-3 text-white/80 hover:text-white"
                >
                  <X size={16} />
                </button>
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="text-[#99C7C8]" />
                  Asesoría Personalizada
                </h4>
                <p className="text-sm text-white/80 mt-1">
                  Primera consulta sin costo y sin compromiso
                </p>
              </div>
              
              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-[#aa8c64] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#0a325a]">
                        45 minutos de asesoría
                      </p>
                      <p className="text-xs text-slate-500">
                        Evaluación completa de tu situación financiera
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="text-[#aa8c64] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#0a325a]">
                        Disponibilidad inmediata
                      </p>
                      <p className="text-xs text-slate-500">
                        Elige el horario que mejor te convenga
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={openCalendly}
                  className="w-full bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white flex items-center justify-center group"
                >
                  Agendar ahora
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-xs text-center text-slate-500 mt-3">
                  Tu información es 100% confidencial y está protegida
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}