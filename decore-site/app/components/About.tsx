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
      text: "Coral, AkzoNobel e mais",
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

  return (
    <section
      id="sobre"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[5%] w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-[50%] w-64 h-64 bg-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
                alt="Loja Decore Tintas"
                className="rounded-3xl shadow-2xl border-4 border-white/50"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm font-semibold text-white/90">
                    Anos de
                  </div>
                  <div className="text-sm font-semibold text-white/90">
                    Excelência
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur-sm shadow-lg"
            >
              <Trophy className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-700">
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
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
                className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
              >
                A Melhor Loja de Tintas de Xanxerê
              </motion.p>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-transparent bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text">
                  Há mais de 15 anos
                </span>{" "}
                transformando sonhos em realidade através das cores! Somos a{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text">
                  loja de tintas mais completa de Xanxerê
                </span>
                , oferecendo um catálogo exclusivo com as{" "}
                <span className="font-bold">
                  marcas mais prestigiadas do mercado
                </span>
                : Coral, AkzoNobel e muito mais!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão é proporcionar a{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">
                  melhor experiência de compra
                </span>{" "}
                com atendimento especializado, consultoria personalizada e os{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  preços mais competitivos da região
                </span>
                . Com mais de{" "}
                <span className="font-bold">2000 cores disponíveis</span>, temos
                a cor perfeita para o seu projeto!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                  Nossa comunidade de 6.6K+ seguidores
                </span>{" "}
                comprova a confiança que conquistamos ao longo dos anos. Venha
                fazer parte da família Decore Tintas!
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">
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
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Por Que Escolher a Decore Tintas?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra os diferenciais que fazem da Decore Tintas a escolha
              número 1 em Xanxerê
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                />
                <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
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
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 shadow-2xl">
            <p className="text-white text-xl font-bold mb-4">
              Pronto para dar vida ao seu projeto?
            </p>
            <motion.a
              href="https://wa.me/5549999238553"
              target="_blank"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
            >
              <Sparkles className="w-6 h-6" />
              Fale Conosco Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
