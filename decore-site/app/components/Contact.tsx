'use client'

import { MessageCircle, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Visite Nossa Loja</h2>
        <p className="text-xl mb-8 text-gray-200">
          Venha conhecer nosso showroom com +2000 cores!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5549999238553"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-gray-900 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle size={24} />
            WhatsApp: (49) 99923-8553
          </a>
          <a
            href="tel:+554934331188"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all"
          >
            <Phone size={24} />
            Tel: (49) 3433-1188
          </a>
        </div>
      </div>
    </section>
  )
}
