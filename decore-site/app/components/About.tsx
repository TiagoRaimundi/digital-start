"use client";

import { motion } from "framer-motion";
import {
  Star,
  Award,
  Users,
  Sparkles,
  Heart,
  Trophy,
  TrendingUp,
  Shield,
  Palette,
  CheckCircle,
  Clock,
  ThumbsUp,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Star,
      title: "2000+ Cores",
      text: "Maior variedade da região",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Melhores Marcas",
      text: "Coral, Montana e mais",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "6.6K+ Seguidores",
      text: "Comunidade apaixonada",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Melhor Preço",
      text: "Garantido sempre",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Líder em Xanxerê",
      description: "A loja de tintas mais completa e confiável da cidade",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Atendimento Premium",
      description: "Consultoria especializada para cada projeto",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Contínuo",
      description: "Expandindo para atender você ainda melhor",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Apenas produtos originais e certificados",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Entrega rápida em Xanxerê" },
    { icon: Palette, text: "Consultoria de cores gratuita" },
    { icon: Clock, text: "Atendimento personalizado" },
    { icon: ThumbsUp, text: "Garantia de satisfação" },
  ];

  return (
    <section
      id="sobre"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[5%] w-72 h-72 sm:w-96 sm:h-96 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-[10%] w-64 h-64 sm:w-80 sm:h-80 bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-[50%] w-56 h-56 sm:w-64 sm:h-64 bg-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src="/images/promo4.png"
                alt="Loja Decore Tintas - Promoções"
                className="rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white w-full h-auto"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/90">
                    Anos de
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/90">
                    Excelência
                  </div>
                </div>
              </motion.div>

              {/* Color Swatches Decoration */}
              <motion.div
                animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-xl border-4 border-white"
              />
              <motion.div
                animate={{ rotate: [0, -5, 0], y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/4 -right-3 sm:-right-4 w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl border-4 border-white hidden sm:block"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur-sm shadow-lg"
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
              <span className="text-xs sm:text-sm font-bold text-orange-700">
                Referência em Xanxerê
              </span>
            </motion.div>

            {/* Title */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3"
              >
                <span className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                  Decore Tintas
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
              >
                Transformando Ambientes com Cor
              </motion.p>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-transparent bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text">
                  Há mais de 15 anos
                </span>{" "}
                transformando sonhos em realidade através das cores! Somos a{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text">
                  loja de tintas mais completa de Xanxerê
                </span>
                , oferecendo um catálogo exclusivo com as melhores marcas do
                mercado.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Com mais de{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">
                  2000 cores disponíveis
                </span>{" "}
                e{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  os melhores preços da região
                </span>
                , oferecemos atendimento especializado e consultoria
                personalizada para cada projeto!
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-white border border-slate-200 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <benefit.icon
                      className="w-4 h-4 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <item.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">
                      {item.title}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                      {item.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-4"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-700">
                Nossos Diferenciais
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 bg-clip-text text-transparent"
            >
              Por Que Escolher a Decore?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Descubra os diferenciais que fazem da Decore Tintas a escolha
              número 1 em Xanxerê
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                />
                <div className="relative bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 shadow-2xl">
            <p className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              ✨ Pronto para transformar seu ambiente?
            </p>
            <motion.a
              href="https://wa.me/5549999238553"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-base sm:text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              Fale Conosco Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
