'use client'

import { motion } from 'framer-motion'
import { Zap, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicos: [
      { name: 'Instalações Residenciais', href: '#servicos' },
      { name: 'Instalações Comerciais', href: '#servicos' },
      { name: 'Manutenção Elétrica', href: '#servicos' },
      { name: 'Projetos Elétricos', href: '#servicos' },
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#home' },
      { name: 'Nossos Serviços', href: '#servicos' },
      { name: 'Contato', href: '#contato' },
    ],
    contato: [
      { icon: Phone, text: '(49) 98901-9728', href: 'https://wa.me/5549989019728' },
      { icon: Mail, text: 'contato@luzzi.com.br', href: 'mailto:contato@luzzi.com.br' },
      { icon: MapPin, text: 'Xanxerê - SC', href: '#' },
    ],
  }

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/luzziinstalacoeseletricas',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500'
    },
    { 
      icon: Facebook, 
      href: '#',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
  ]

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" fill="white" strokeWidth={0} />
                </div>
                <div>
                  <div className="text-2xl font-heading font-black">Luzzi</div>
                  <div className="text-xs text-slate-400">Instalações Elétricas</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Empresa especializada em instalações e manutenções elétricas com mais de 5 anos de experiência.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6">Contato</h3>
              <ul className="space-y-4">
                {footerLinks.contato.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-400 hover:text-accent transition-colors inline-flex items-start gap-3 group"
                    >
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-slate-400 text-center sm:text-left"
              >
                © {currentYear} Luzzi Instalações Elétricas. Todos os direitos reservados.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <span>Desenvolvido com</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  ♥
                </motion.span>
                <span>em SC</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}