// components/impact-statictics.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChartBar, Users, TrendingUp, Briefcase } from "lucide-react"

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ end, duration = 1.5, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const step = Math.ceil(end / 30);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [end, isInView]);
  
  return (
    <div ref={nodeRef} className="font-bold text-3xl text-[#007476]">
      {prefix}{new Intl.NumberFormat().format(count)}{suffix}
    </div>
  );
}

export function ImpactStatistics() {
  // Datos de estadísticas
  const stats = [
    { id: 1, value: 850, label: "Clientes", icon: Users, prefix: "+", color: "#007476" },
    { id: 2, value: 18, label: "% Rentabilidad", icon: TrendingUp, suffix: "%", color: "#005D5E" },
    { id: 3, value: 125, label: "Empresas", icon: Briefcase, prefix: "+", color: "#007476" },
    { id: 4, value: 8, label: "Años", icon: ChartBar, prefix: "+", color: "#005D5E" },
  ]

  return (
    <section className="py-12 bg-[#66ACAD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-white uppercase tracking-wider mb-1 block">Nuestro impacto</span>
          <h2 className="text-2xl font-bold text-white mb-2">Resultados que hablan por sí mismos</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-md p-4 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                  {<stat.icon size={20} color={stat.color} />}
                </div>
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-white/80 text-xs">
            Datos verificados al cierre del último trimestre fiscal.
          </p>
        </div>
      </div>
    </section>
  )
}