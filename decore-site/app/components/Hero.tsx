'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Palette, MessageCircle, Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  // Imagens de promoções - substitua pelos caminhos reais em /assets
  const promotionImages = [
    '/images/promo4.png',
    '/images/promo1.png',
    '/images/promo2.png',
    '/images/promo3.png',
    
  ]

  // Marcas que trabalha
  const brands = [
    'Coral',
    'Montana',
    'Sparlack',
    'Futura Premium',
    'Anjo',
    'Coral',
    'Montana',
    'Sparlack',
  ]

  const [currentPromo, setCurrentPromo] = useState(0)

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [promotionImages.length])

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promotionImages.length)
  }

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promotionImages.length) % promotionImages.length)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden pt-16 sm:pt-20"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Floating Color Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-[10%] w-72 h-72 bg-gradient-to-l from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 backdrop-blur-md shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" fill="currentColor" />
              </motion.div>
              <span className="text-xs sm:text-sm font-bold text-yellow-400">
                Loja Oficial de Tintas
              </span>
            </motion.div>

            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3">
                <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" strokeWidth={2.5} />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                  <span className="text-white">DECORE </span>
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                    TINTAS
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              <span className="block text-white">Transforme</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Seu Ambiente
              </span>
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Com as Melhores Tintas
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl"
            >
              Mais de <span className="font-bold text-yellow-400">2000 cores disponíveis</span> das melhores marcas do mercado. 
              Qualidade, variedade e o melhor atendimento para você!
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {[
                { icon: Award, text: 'Qualidade Premium' },
                { icon: Palette, text: '+2000 Cores' },
                { icon: Sparkles, text: 'Melhores Preços' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <item.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.a
                href="https://wa.me/5549999238553"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-gray-900 font-bold text-base sm:text-lg shadow-2xl shadow-yellow-500/50 overflow-hidden transition-all hover:shadow-yellow-500/70"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 relative z-10" />
                <span className="relative z-10">Fale Conosco</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10 hidden sm:block"
                >
                  →
                </motion.div>
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('produtos')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/40 transition-all"
              >
                <Palette className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-yellow-400 transition-colors" />
                <span>Ver Produtos</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20"
            >
              {[
                { value: '2000+', label: 'Cores', gradient: 'from-yellow-400 to-orange-500' },
                { value: '6.6K+', label: 'Seguidores', gradient: 'from-pink-400 to-purple-500' },
                { value: '100%', label: 'Qualidade', gradient: 'from-blue-400 to-cyan-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm cursor-default"
                >
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image/Carousel Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Carousel */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 via-pink-500/30 to-purple-500/30 rounded-[2rem] blur-2xl" />
              
              {/* Carousel Container */}
              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border-2 border-white/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPromo}
                    src={promotionImages[currentPromo]}
                    alt={`Promoção ${currentPromo + 1}`}
                    className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                {/* Navigation Arrows */}
                <button
                  onClick={prevPromo}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all z-10"
                  aria-label="Promoção anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
                </button>
                <button
                  onClick={nextPromo}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all z-10"
                  aria-label="Próxima promoção"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {promotionImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPromo(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentPromo
                          ? 'w-8 sm:w-10 h-2 bg-yellow-400'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Ir para promoção ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Promo Badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-sm sm:text-base shadow-lg">
                    🔥 PROMOÇÃO
                  </div>
                </div>
              </div>

              {/* Floating Color Swatches */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-2xl border-4 border-white/30"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl border-4 border-white/30"
              />
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 -left-6 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl border-4 border-white/30 hidden sm:block"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brands Marquee */}
      <div className="relative z-20 mt-12 sm:mt-16 lg:mt-20 py-6 sm:py-8 bg-white/5 backdrop-blur-md border-y border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Award className="w-5 h-5 text-yellow-400" />
          <p className="text-white/80 text-sm sm:text-base font-semibold">
            Trabalhamos com as Melhores Marcas
          </p>
        </div>
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-8 sm:gap-12 lg:gap-16"
          >
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}