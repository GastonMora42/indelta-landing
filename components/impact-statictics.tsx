// components/impact-statistics.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChartBar, Users, TrendingUp, Briefcase } from "lucide-react"

// Definición correcta de tipos para CountUp
interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
  
  function CountUp({ end, duration = 2, prefix = "", suffix = "" }: CountUpProps) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
    
    useEffect(() => {
      if (!isInView) return;
      
      let startTime: number;
      let animationFrame: number;
      
      const startAnimation = (timestamp: number) => {
        startTime = timestamp;
        animate(timestamp);
      };
      
      const animate = (timestamp: number) => {
        const runtime = timestamp - startTime;
        const relativeProgress = runtime / (duration * 1000);
        
        if (relativeProgress < 1) {
          setCount(Math.floor(end * relativeProgress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
          cancelAnimationFrame(animationFrame);
        }
      };
      
      animationFrame = requestAnimationFrame(startAnimation);
      
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [end, duration, isInView]);
    
    return (
      <div ref={nodeRef} className="font-bold text-4xl md:text-5xl text-[#0a325a]">
        {prefix}{new Intl.NumberFormat().format(count)}{suffix}
      </div>
    );
  }
export function ImpactStatistics() {
  // Datos de estadísticas
  const stats = [
    { 
      id: 1, 
      value: 850, 
      label: "Clientes satisfechos", 
      icon: Users, 
      prefix: "+", 
      suffix: "", 
      color: "#0a325a" 
    },
    { 
      id: 2, 
      value: 18, 
      label: "Rentabilidad anual promedio", 
      icon: TrendingUp, 
      prefix: "", 
      suffix: "%", 
      color: "#aa8c64" 
    },
    { 
      id: 3, 
      value: 125, 
      label: "Empresas asesoradas", 
      icon: Briefcase, 
      prefix: "+", 
      suffix: "", 
      color: "#93ABC3" 
    },
    { 
      id: 4, 
      value: 8, 
      label: "Años de experiencia", 
      icon: ChartBar, 
      prefix: "+", 
      suffix: "", 
      color: "#99C7C8" 
    },
  ]

  return (
    <section className="py-20 bg-[#0a325a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#aa8c64] uppercase tracking-wider mb-2 block">Nuestro impacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resultados que hablan por sí mismos</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Un historial probado de rendimiento superior con enfoque en resultados medibles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}10` }}>
                {<stat.icon size={32} color={stat.color} />}
              </div>
              
              <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              
              <p className="text-slate-600 mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Nota adicional de credibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Todos los datos están auditados y verificados al cierre del último trimestre fiscal.
            Nuestros resultados superan consistentemente el promedio del mercado en un 7.2%.
          </p>
        </motion.div>
      </div>
    </section>
  )
}