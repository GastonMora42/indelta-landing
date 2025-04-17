"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, FileText, Users, TrendingUp } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

export function ProcessSteps() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const pulseVariants = {
    hidden: { scale: 1, opacity: 0.5 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
        <motion.div
          variants={circleVariants}
          className="w-20 h-20 rounded-full bg-[#0a325a] text-white flex items-center justify-center mb-4 relative"
        >
          <FileText className="h-10 w-10" />
          <motion.div
            className="absolute -right-3 -top-3 w-8 h-8 bg-[#aa8c64] rounded-full flex items-center justify-center text-sm font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.3, type: "spring" }}
          >
            1
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#0a325a]/30"
            variants={pulseVariants}
          ></motion.div>
        </motion.div>
        <h3 className="text-xl font-semibold text-[#0a325a] mt-4 mb-2">Evaluación inicial</h3>
        <p className="text-slate-600">Analizamos tu situación financiera actual, objetivos y tolerancia al riesgo.</p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
        <motion.div
          variants={circleVariants}
          className="w-20 h-20 rounded-full bg-[#93ABC3] text-white flex items-center justify-center mb-4 relative"
        >
          <CheckCircle2 className="h-10 w-10" />
          <motion.div
            className="absolute -right-3 -top-3 w-8 h-8 bg-[#aa8c64] rounded-full flex items-center justify-center text-sm font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.3, type: "spring" }}
          >
            2
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#93ABC3]/30"
            variants={pulseVariants}
          ></motion.div>
        </motion.div>
        <h3 className="text-xl font-semibold text-[#0a325a] mt-4 mb-2">Diseño de estrategia</h3>
        <p className="text-slate-600">Creamos un plan personalizado basado en tus necesidades específicas.</p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
        <motion.div
          variants={circleVariants}
          className="w-20 h-20 rounded-full bg-[#99C7C8] text-white flex items-center justify-center mb-4 relative"
        >
          <Users className="h-10 w-10" />
          <motion.div
            className="absolute -right-3 -top-3 w-8 h-8 bg-[#aa8c64] rounded-full flex items-center justify-center text-sm font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, duration: 0.3, type: "spring" }}
          >
            3
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#99C7C8]/30"
            variants={pulseVariants}
          ></motion.div>
        </motion.div>
        <h3 className="text-xl font-semibold text-[#0a325a] mt-4 mb-2">Implementación</h3>
        <p className="text-slate-600">Ejecutamos la estrategia con un enfoque meticuloso y transparente.</p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
        <motion.div
          variants={circleVariants}
          className="w-20 h-20 rounded-full bg-[#aa8c64] text-white flex items-center justify-center mb-4 relative"
        >
          <TrendingUp className="h-10 w-10" />
          <motion.div
            className="absolute -right-3 -top-3 w-8 h-8 bg-[#0a325a] rounded-full flex items-center justify-center text-sm font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6, duration: 0.3, type: "spring" }}
          >
            4
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#aa8c64]/30"
            variants={pulseVariants}
          ></motion.div>
        </motion.div>
        <h3 className="text-xl font-semibold text-[#0a325a] mt-4 mb-2">Seguimiento continuo</h3>
        <p className="text-slate-600">Monitoreamos y ajustamos tu cartera para adaptarnos a los cambios del mercado.</p>
      </motion.div>
    </motion.div>
  )
}
