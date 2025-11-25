"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { name: "Início", id: "home" },
    { name: "Produtos", id: "produtos" },
    { name: "Sobre", id: "sobre" },
    { name: "Contato", id: "contato" },
  ];

  const contact = [
    { icon: MapPin, text: "Xanxerê - SC", link: null },
    { icon: Phone, text: "(49) 99923-8553", link: "tel:5549999238553" },
    {
      icon: Mail,
      text: "contato@decoretintas.com.br",
      link: "mailto:contato@decoretintas.com.br",
    },
    { icon: Clock, text: "Seg-Sex: 8h-18h | Sáb: 8h-12h", link: null },
  ];

  const social = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com/decoretintas",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/decoretintas",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <img
                src="/images/logo.png"
                alt="Decore Tintas"
                className="h-20 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A melhor loja de tintas de Xanxerê. Mais de 2000 cores disponíveis
              com as marcas Coral, AkzoNobel e muito mais!
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
              <span className="text-gray-300">Feito com amor para você</span>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-yellow-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
              Contato
            </h3>
            <ul className="space-y-3">
              {contact.map((item, i) => (
                <li key={i}>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-start gap-3 text-gray-300 hover:text-yellow-300 transition-colors text-sm group"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-300 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
              Redes Sociais
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Siga-nos e fique por dentro das novidades, promoções e dicas!
            </p>
            <div className="flex flex-col gap-3">
              {social.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${item.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">6.6K+</div>
                <div className="text-xs text-gray-300">
                  Seguidores no Instagram
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 text-center md:text-left"
          >
            © {new Date().getFullYear()} Decore Tintas Xanxerê. Todos os
            direitos reservados.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>Desenvolvido com</span>
            <Heart
              className="w-4 h-4 text-pink-400 animate-pulse"
              fill="currentColor"
            />
            <span>em Xanxerê</span>
          </motion.div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
      </div>
    </footer>
  );
}
