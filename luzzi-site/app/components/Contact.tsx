'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(49) 98901-9728',
      link: 'https://wa.me/5549989019728',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@luzzi.com.br',
      link: 'mailto:contato@luzzi.com.br',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Xanxerê e Região',
      link: '#',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Disponível 24/7',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
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
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm mb-6"
            >
              <Send className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">Entre em Contato</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              Solicite seu
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Orçamento Grátis
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Entre em contato conosco e receba um orçamento personalizado sem compromisso. 
              Estamos prontos para atender você!
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all ${
                    item.link !== '#' ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-slate-400 mb-1">
                    {item.title}
                  </div>
                  <div className="text-base font-bold text-white">
                    {item.info}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-xl">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Fale Conosco Agora!
                  </h3>
                  <p className="text-slate-300">
                    Atendimento rápido e personalizado
                  </p>
                </div>

                <motion.a
                  href="https://wa.me/5549989019728?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-2xl shadow-primary/50 overflow-hidden transition-all hover:shadow-primary/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Phone className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">WhatsApp: (49) 98901-9728</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    →
                  </motion.div>
                </motion.a>

                {/* Features */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    '✓ Resposta Rápida',
                    '✓ Orçamento Grátis',
                    '✓ Atendimento 24/7',
                    '✓ Profissionais Certificados'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}