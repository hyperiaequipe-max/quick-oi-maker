"use client"

import { motion } from "framer-motion"
import { Cloud, GraduationCap, Zap, Power } from "lucide-react"

const stages = [
  {
    number: 1,
    label: "Conectar_PMS()",
    icon: Cloud,
    position: "left-top",
  },
  {
    number: 2,
    label: "Treinar_Clara()",
    icon: GraduationCap,
    position: "left-bottom",
  },
  {
    number: 3,
    label: "Automatizar_reservas()",
    icon: Zap,
    position: "right-top",
  },
  {
    number: 4,
    label: "Escalar_vendas()",
    icon: Power,
    position: "right-bottom",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative flex items-center justify-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700]/20 via-[#FFA500]/30 to-[#FFD700]/20 blur-3xl animate-pulse"
              style={{ width: "380px", height: "380px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            />

            <div className="relative w-[340px] h-[340px] rounded-full border-4 border-[#FFD700]/40 bg-gradient-to-br from-[#FFD700]/5 to-transparent backdrop-blur-sm shadow-[0_0_80px_rgba(255,215,0,0.3)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
                >
                  Clara, a IA para
                  <br />
                  Hospitalidade
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base text-white/70 mb-3"
                >
                  Sua recepcionista digital que trabalha 24h
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xs text-white/50 italic"
                >
                  Tecnologia invisível. Resultados visíveis.
                </motion.p>
              </div>
            </div>

            {stages.map((stage, index) => {
              const Icon = stage.icon
              const positions = {
                "left-top": "absolute -left-[280px] top-8",
                "left-bottom": "absolute -left-[280px] bottom-8",
                "right-top": "absolute -right-[280px] top-8",
                "right-bottom": "absolute -right-[280px] bottom-8",
              }

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, x: stage.position.includes("left") ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`${positions[stage.position as keyof typeof positions]} w-60`}
                >
                  <div className="relative">
                    <div
                      className={`absolute ${stage.position.includes("left") ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 ${stage.position.includes("left") ? "translate-x-full" : "-translate-x-full"}`}
                    >
                      <div
                        className="w-24 h-[2px] bg-gradient-to-r from-[#FFD700]/40 to-transparent"
                        style={{
                          transform: stage.position.includes("left") ? "none" : "rotate(180deg)",
                        }}
                      />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                    </div>

                    <div className="bg-black/80 backdrop-blur-sm border border-[#FFD700]/30 rounded-xl p-3.5 shadow-lg hover:border-[#FFD700]/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 flex items-center justify-center border border-[#FFD700]/30">
                          <Icon className="w-4 h-4 text-[#FFD700]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-[#FFD700]/60 font-mono mb-0.5">
                            {stage.number.toString().padStart(2, "0")}
                          </div>
                          <div className="text-xs font-medium text-white/90 font-mono leading-tight">{stage.label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-2 mt-12"
        >
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dot === 0 ? "bg-[#FFD700] shadow-[0_0_10px_rgba(255,215,0,0.6)] w-3" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
