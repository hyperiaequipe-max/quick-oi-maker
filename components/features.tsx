"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Bot, Clock, Smartphone, Zap } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <h2
              className={cn(
                "via-foreground mb-4 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center md:text-left text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
                geist.className,
              )}
            >
              Conheça Clara
            </h2>

            <p className="text-center md:text-left text-lg text-muted-foreground max-w-2xl">
              Sua nova recepcionista digital treinada exclusivamente para pousadas e hotéis
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <img
                src="https://i.postimg.cc/GmCXf9yx/Whats-App-Image-2025-11-01-at-22-16-20.jpg"
                alt="Clara - Recepcionista Digital"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          <motion.div
            className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(231, 138, 83, 0.6)",
              boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
            }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Atende no WhatsApp 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Responde instantaneamente a qualquer hora do dia ou da noite
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(231, 138, 83, 0.6)",
              boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
            }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Consulta Disponibilidade</h3>
              <p className="text-sm text-muted-foreground">Conectada ao seu PMS em tempo real</p>
            </div>
          </motion.div>

          <motion.div
            className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(231, 138, 83, 0.6)",
              boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
            }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fecha Reservas Sozinha</h3>
              <p className="text-sm text-muted-foreground">Completa todo o processo de reserva automaticamente</p>
            </div>
          </motion.div>

          <motion.div
            className="group border-secondary/40 text-card-foreground relative flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(231, 138, 83, 0.6)",
              boxShadow: "0 0 30px rgba(231, 138, 83, 0.2)",
            }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Nunca Erra, Nunca Dorme</h3>
              <p className="text-sm text-muted-foreground">Trabalha incansavelmente sem férias ou folgas</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-4xl mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Como Clara Funciona Na Prática</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Hóspede Envia Mensagem", desc: "Via WhatsApp, a qualquer hora" },
              { step: "2", title: "Responde Instantaneamente", desc: "Com tom personalizado da sua pousada" },
              { step: "3", title: "Consulta Disponibilidade", desc: "Conectada ao seu PMS em tempo real" },
              { step: "4", title: "Conduz a Negociação", desc: "Responde dúvidas sobre comodidades e valores" },
              { step: "5", title: "Fecha a Reserva", desc: "Coleta dados e confirma pagamento" },
              { step: "6", title: "Você Acorda Com Reserva Pronta", desc: "Sem mover um dedo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-3 p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
