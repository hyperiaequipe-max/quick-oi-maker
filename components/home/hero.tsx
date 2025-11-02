"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Bot } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
                <Bot className="h-4 w-4" />
                Tecnologia invisível. Resultados visíveis.
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
              >
                Sua <strong className="text-primary">recepcionista digital</strong> que trabalha <strong>24h</strong>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              "Enquanto você dorme, suas reservas acontecem"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center justify-center">
                <a href="#pricing">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <Bot className="h-5 w-5" />
                        Conhecer Clara
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pb-8"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Confiado por pousadas e hotéis em todo Brasil</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="opacity-60 hover:opacity-100 transition-all duration-300 text-foreground font-semibold text-lg">
                  Hotel Mitologia
                </div>
                <div className="opacity-60 hover:opacity-100 transition-all duration-300 text-foreground font-semibold text-lg">
                  Canastra Woods
                </div>
                <div className="opacity-60 hover:opacity-100 transition-all duration-300 text-foreground font-semibold text-lg">
                  Cloudbeds
                </div>
                <div className="opacity-60 hover:opacity-100 transition-all duration-300 text-foreground font-semibold text-lg">
                  Hospedin
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
