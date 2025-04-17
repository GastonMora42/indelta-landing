"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Send } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulamos el envío del formulario con un pequeño retraso
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </motion.div>
        <h3 className="text-xl font-semibold text-[#0a325a] mb-2">¡Gracias por contactarnos!</h3>
        <p className="text-slate-600 max-w-md">
          Un asesor especializado se pondrá en contacto contigo en las próximas 24 horas para comenzar a trabajar en tu
          futuro financiero.
        </p>
        <Button className="mt-6 bg-[#0a325a] hover:bg-[#0a325a]/90" onClick={() => setIsSubmitted(false)}>
          Enviar otra consulta
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="nombre">Nombre completo</Label>
          <Input id="nombre" placeholder="Ingresa tu nombre" required className="border-[#93ABC3]" />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" placeholder="tu@email.com" required className="border-[#93ABC3]" />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Label htmlFor="telefono">Teléfono</Label>
          <Input id="telefono" placeholder="+54 11 XXXX XXXX" required className="border-[#93ABC3]" />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Label htmlFor="monto">Monto aproximado a invertir</Label>
          <Select>
            <SelectTrigger className="border-[#93ABC3]">
              <SelectValue placeholder="Selecciona un rango" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="menos-50k">Menos de $50.000</SelectItem>
              <SelectItem value="50k-100k">$50.000 - $100.000</SelectItem>
              <SelectItem value="100k-500k">$100.000 - $500.000</SelectItem>
              <SelectItem value="mas-500k">Más de $500.000</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Label htmlFor="mensaje">¿En qué podemos ayudarte?</Label>
        <Textarea
          id="mensaje"
          placeholder="Cuéntanos sobre tus objetivos financieros..."
          className="min-h-[120px] border-[#93ABC3]"
        />
      </motion.div>

      <motion.div
        className="text-sm text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
        <Button
          type="submit"
          className="w-full bg-[#aa8c64] hover:bg-[#aa8c64]/90 text-white py-6 text-lg relative overflow-hidden group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <motion.div
                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              Enviando...
            </span>
          ) : (
            <span className="flex items-center">
              Hablemos de tu futuro financiero
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          )}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white/30"
            initial={{ width: 0 }}
            animate={isSubmitting ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </Button>
      </motion.div>
    </motion.form>
  )
}
