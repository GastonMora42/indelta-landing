import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0a325a]">Carlos Rodríguez</h4>
              <p className="text-sm text-slate-500">Empresario</p>
            </div>
          </div>
          <Quote className="h-8 w-8 text-[#93ABC3]/30" />
        </div>
        <p className="text-slate-600 italic">
          "Indelta transformó mi enfoque de inversión. Su asesoramiento me permitió diversificar mi cartera y obtener
          rendimientos consistentes incluso en tiempos de volatilidad."
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0a325a]">Laura Méndez</h4>
              <p className="text-sm text-slate-500">Profesional independiente</p>
            </div>
          </div>
          <Quote className="h-8 w-8 text-[#99C7C8]/30" />
        </div>
        <p className="text-slate-600 italic">
          "Lo que más valoro de Indelta es su transparencia y atención personalizada. Siempre me explican cada decisión
          de inversión en términos que puedo entender."
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-[#0a325a]">Martín Gómez</h4>
              <p className="text-sm text-slate-500">Médico</p>
            </div>
          </div>
          <Quote className="h-8 w-8 text-[#aa8c64]/30" />
        </div>
        <p className="text-slate-600 italic">
          "Como profesional con poco tiempo para gestionar mis inversiones, Indelta ha sido la solución perfecta. Su
          equipo se encarga de todo mientras yo me concentro en mi trabajo."
        </p>
      </Card>
    </div>
  )
}
