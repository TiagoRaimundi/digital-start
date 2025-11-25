'use client'

import { motion } from 'framer-motion'
import { Palette, MessageCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100vh] lg:min-h-[110vh] bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden pt-20"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Animated Paint Drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-red-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-[15%] w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-[20%] w-36 h-36 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-60 right-[25%] w-28 h-28 bg-green-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-20 right-[30%] w-32 h-32 bg-orange-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg"
            >
              <Palette className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-yellow-300">Loja Oficial</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
                DECORE{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  TINTAS
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                +2000 Cores
              </span>
              <span className="block text-white mt-2 drop-shadow-2xl">Para Você!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-xl"
            >
              As melhores marcas e preços em tintas e acessórios para pintura. 
              <span className="font-bold text-yellow-300"> Coral, AkzoNobel</span> e muito mais!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://wa.me/5549999238553"
                target="_blank"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(251, 191, 36, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
              >
                <MessageCircle size={24} />
                Fale Conosco
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('produtos')}
                whileHover={{ scale: 1.05, borderColor: "rgba(251, 191, 36, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Ver Produtos
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 lg:pt-12"
            >
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  2000+
                </div>
                <div className="text-sm text-gray-200 mt-1">Cores</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                  6.6K+
                </div>
                <div className="text-sm text-gray-200 mt-1">Seguidores</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-gray-200 mt-1">Qualidade</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative lg:mt-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-pink-500/30 to-purple-500/30 rounded-3xl blur-3xl" />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Tintas coloridas"
                className="rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </motion.div>
            
            {/* Floating Color Cards */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-2xl border-4 border-white/30"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl border-4 border-white/30"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-20 -left-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl border-4 border-white/30"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  )
}