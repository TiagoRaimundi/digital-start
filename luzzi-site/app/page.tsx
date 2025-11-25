'use client'

import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600">
              Soluções completas em instalações elétricas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Instalações Residenciais', icon: '🏠' },
              { title: 'Instalações Comerciais', icon: '🏢' },
              { title: 'Manutenção Elétrica', icon: '🔧' },
              { title: 'Projeto Elétrico', icon: '📐' },
              { title: 'Quadros de Distribuição', icon: '⚡' },
              { title: 'Iluminação', icon: '💡' },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 border border-gray-200 hover:border-primary/30 transition-all group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">Serviço profissional com garantia de qualidade</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Solicite seu Orçamento
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Entre em contato e receba um orçamento gratuito!
          </p>
          <a
            href="https://wa.me/5549989019728"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            WhatsApp: (49) 98901-9728
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/images/logo.png"
            alt="Luzzi"
            className="h-20 w-auto mx-auto mb-4 brightness-0 invert"
          />
          <div className="text-sm text-gray-500 mt-6">
            © 2024 Luzzi Instalações Elétricas. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  )
}
