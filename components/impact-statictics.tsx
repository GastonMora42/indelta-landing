// components/impact-statistics.tsx - VERSIÓN MEJORADA
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
    <div ref={nodeRef} className="font-bold text-4xl md:text-5xl text-white">
      {prefix}{new Intl.NumberFormat().format(count)}{suffix}
    </div>
  );
}

export function ImpactStatistics() {
  // DATOS REALES ACTUALIZADOS
  const stats = [
    { 
      id: 1, 
      value: 150, 
      label: "Clientes Activos", 
      icon: Users, 
      prefix: "+", 
      color: "#004647",
      description: "Inversionistas que confían en nosotros"
    },
    { 
      id: 2, 
      value: 3300, 
      label: "Activos", 
      icon: TrendingUp, 
      prefix: "+", 
      color: "#66ACAD",
      description: "Activos bajo administración"
    },
    { 
      id: 3, 
      value: 25, 
      label: "Empresas", 
      icon: Briefcase, 
      prefix: "+", 
      color: "#004647",
      description: "Compañías asesoradas"
    },
    { 
      id: 4, 
      value: 25, 
      label: "Años", 
      icon: ChartBar, 
      prefix: "+", 
      color: "#66ACAD",
      description: "De experiencia y resultados"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[#004647] via-[#66ACAD] to-[#004647] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white uppercase tracking-wider mb-4"
          >
            Nuestro impacto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Resultados que hablan por sí mismos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Más de dos décadas construyendo patrimonios y generando confianza
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}30` }}
                >
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>
              
              <CountUp end={stat.value} prefix={stat.prefix} />
              
              <p className="text-2xl font-bold text-white mt-2 mb-2">
                {stat.label}
              </p>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.description}
              </p>
              
              {/* Barra decorativa */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="h-1 bg-white/30 rounded-full mx-auto mt-4"
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}