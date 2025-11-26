'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Wrench, Ruler, Zap, Lightbulb, ShieldCheck, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Instalações Residenciais',
      icon: Home,
      description: 'Instalações elétricas completas para sua casa com segurança e qualidade',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Instalações Comerciais',
      icon: Building2,
      description: 'Projetos elétricos para empresas e estabelecimentos comerciais',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Manutenção Elétrica',
      icon: Wrench,
      description: 'Manutenção preventiva e corretiva em instalações elétricas',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Projeto Elétrico',
      icon: Ruler,
      description: 'Desenvolvimento de projetos elétricos personalizados e eficientes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quadros de Distribuição',
      icon: Zap,
      description: 'Instalação e manutenção de quadros elétricos e disjuntores',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Iluminação',
      icon: Lightbulb,
      description: 'Projetos de iluminação LED e sistemas de automação',
      color: 'from-indigo-500 to-purple-500'
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Zap className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-sm font-bold text-primary">Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-gray-900 mb-4">
            Soluções Elétricas
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Serviços profissionais com garantia de qualidade e segurança para você
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Badge */}
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-gray-100">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">Garantia Inclusa</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Atendimento Rápido</div>
                <div className="text-sm text-gray-600">Disponível 24/7</div>
              </div>
            </div>
            <motion.a
              href="https://wa.me/5549989019728"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Solicitar Orçamento Grátis
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}