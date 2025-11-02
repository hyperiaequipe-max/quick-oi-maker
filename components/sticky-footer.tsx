"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Instagram, MessageCircle } from "lucide-react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.footer
          className="fixed z-50 bottom-0 left-0 w-full bg-black border-t border-[#222]"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Contact Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3 text-center md:text-left"
              >
                <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm">
                    <span className="block">E-mail:</span>
                    <a
                      href="mailto:contato@checkin-ia.com.br"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      contato@checkin-ia.com.br
                    </a>
                  </p>
                  <div className="flex items-center gap-2 pt-2 justify-center md:justify-start">
                    <span className="text-white/80 text-sm">WhatsApp:</span>
                    <a
                      href="https://wa.me/5516981432806?text=Vim%20do%20site%20e%20quero%20uma%20IA%20na%20minha%20pousada%2Fhotel."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:opacity-80 transition-opacity"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Company Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 text-center md:text-left"
              >
                <h3 className="text-white font-bold text-lg mb-4">Empresa</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <p className="text-white">Check In-IA</p>
                  <p>CNPJ: 50.323.309/0001-90</p>
                </div>
              </motion.div>

              {/* Social Media Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 text-center md:text-left"
              >
                <h3 className="text-white font-bold text-lg mb-4">Redes sociais</h3>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/checkin.ia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://wa.me/5516981432806?text=Vim%20do%20site%20e%20quero%20uma%20IA%20na%20minha%20pousada%2Fhotel."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  )
}
