import { FaUsers, FaAward, FaHeartbeat, FaClock } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import DiferencialCard from './DiferencialCard'

const diferenciais = [
  {
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "Equipe Multidisciplinar",
    description: "Mais de 8 especialidades trabalhando de forma integrada"
  },
  {
    icon: <FaAward className="text-4xl text-purple-600" />,
    title: "Profissionais Qualificados",
    description: "Equipe experiente e constantemente atualizada"
  },
  {
    icon: <FaHeartbeat className="text-4xl text-purple-600" />,
    title: "Olhar Integrativo",
    description: "Cuidado completo pensando no desenvolvimento global"
  },
  {
    icon: <FaClock className="text-4xl text-purple-600" />,
    title: "Atendimento Humanizado",
    description: "Acolhimento e atenção em todas as fases da vida"
  }
]

export default function SobreSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Por Que Escolher a Estimulare?</h2>
          <p className="section-subtitle">
            Somos referência em atendimento multidisciplinar em Xanxerê SC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard
              key={index}
              icon={diferencial.icon}
              title={diferencial.title}
              description={diferencial.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Desenvolvimento em Todas as Fases da Vida
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Na Clínica Estimulare, acreditamos no olhar integrativo e no cuidado humanizado.
            Nossa equipe trabalha de forma colaborativa para proporcionar o melhor tratamento e acompanhamento.
          </p>
          <a
            href="https://wa.me/5549889820000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Fale Conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
