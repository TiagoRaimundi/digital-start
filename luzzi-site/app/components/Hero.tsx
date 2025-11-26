"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Zap,
  Phone,
  Star,
  Award,
  Users,
  Shield,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Array de imagens da empresa
  const companyImages = [
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image3.png",
  ];

  // Estado para controlar a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para trocar as imagens automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === companyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [companyImages.length]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl"
        />

        {/* Floating particles - hidden on mobile for performance */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-accent rounded-full hidden md:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md shadow-lg shadow-primary/20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                  />
                </motion.div>
                <span className="text-xs sm:text-sm font-bold text-accent">
                  Empresa Certificada e Confiável
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2 sm:space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-[1.1] tracking-tight">
                  <span className="block text-white">Soluções</span>
                  <span className="block text-primary">
                    Elétricas
                  </span>
                  <span className="block text-white">Profissionais</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
              >
                Instalações, manutenções e projetos elétricos com{" "}
                <span className="text-accent font-semibold">
                  qualidade superior
                </span>{" "}
                e{" "}
                <span className="text-primary font-semibold">
                  atendimento diferenciado
                </span>
                . Atendemos Xanxerê e toda a região.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                {[
                  { icon: Shield, text: "Garantia Total" },
                  { icon: Clock, text: "Pontualidade" },
                  { icon: CheckCircle2, text: "Qualidade" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <item.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent" />
                    <span className="text-xs sm:text-sm font-medium text-slate-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <motion.a
                  href="https://wa.me/5549989019728"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg shadow-2xl shadow-primary/50 overflow-hidden transition-all hover:shadow-primary/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 relative z-10" />
                  <span className="relative z-10">Orçamento Gratuito</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10 hidden sm:block"
                  >
                    →
                  </motion.div>
                </motion.a>

                <motion.a
                  href="#servicos"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold text-base sm:text-lg hover:bg-white/15 hover:border-white/30 transition-all"
                >
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-accent transition-colors" />
                  <span>Nossos Serviços</span>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10"
              >
                {[
                  {
                    icon: Star,
                    value: "+5",
                    label: "Anos no Mercado",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    icon: Users,
                    value: "2.6K+",
                    label: "Seguidores",
                    color: "from-blue-400 to-cyan-500",
                  },
                  {
                    icon: Award,
                    value: "100%",
                    label: "Satisfação",
                    color: "from-green-400 to-emerald-500",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group text-center cursor-default"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <stat.icon
                        className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Main image with advanced styling */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] sm:rounded-[2.5rem] blur-2xl" />

                {/* Image container */}
                <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                  {/* Carrossel de imagens */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={companyImages[currentImageIndex]}
                      alt={`Trabalho da Luzzi Instalações Elétricas ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Indicadores de imagem */}
                  <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-0 right-0 flex justify-center gap-2 z-10">
                    {companyImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImageIndex
                            ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-accent"
                            : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                        <Zap className="w-5 sm:w-6 h-5 sm:h-6" fill="white" strokeWidth={0} />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg">Willian Luzzi</div>
                        <div className="text-xs sm:text-sm text-slate-300">
                          Eletricista Profissional
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl shadow-black/20 border border-slate-200"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2
                        className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base md:text-xl font-black text-slate-900">
                        Certificado
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-600 font-medium">
                        NR-10 e NR-35
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                      <Clock className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
                      <div className="text-[10px] sm:text-xs text-slate-300 font-medium">
                        Disponível
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}