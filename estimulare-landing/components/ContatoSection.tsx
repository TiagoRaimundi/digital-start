import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import ContatoInfo from './ContatoInfo'

export default function ContatoSection() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você e sua família
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <ContatoInfo icon={<FaMapMarkerAlt />} title="Endereço">
              <p className="text-gray-600">
                Rua Joinville, 265 - Centro<br />
                Xanxerê - SC, 89820-000
              </p>
            </ContatoInfo>

            <ContatoInfo icon={<FaPhone />} title="Telefone">
              <a href="tel:+5549889820000" className="text-gray-600 hover:text-purple-600">
                (49) 8 8982-0000
              </a>
            </ContatoInfo>

            <ContatoInfo icon={<FaWhatsapp />} title="WhatsApp">
              <a
                href="https://wa.me/5549889820000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                Clique para conversar
              </a>
            </ContatoInfo>

            <ContatoInfo icon={<FaInstagram />} title="Instagram">
              <a
                href="https://linktr.ee/clinicaestimulare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                @clinicaestimulare
              </a>
            </ContatoInfo>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Horário de Atendimento
            </h3>
            <div className="space-y-3 text-purple-800">
              <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
              <p><strong>Sábado:</strong> 8h às 12h</p>
              <p><strong>Domingo:</strong> Fechado</p>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/5549889820000?text=Olá! Gostaria de agendar uma consulta na Clínica Estimulare."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.8!2d-52.4!3d-26.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzQ4LjAiUyA1MsKwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Estimulare"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
