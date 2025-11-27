import { FaBrain, FaHandsHelping, FaChild, FaAppleAlt, FaComments, FaHeartbeat } from 'react-icons/fa'
import EspecialidadeCard from './EspecialidadeCard'

const especialidades = [
  {
    icon: <FaBrain className="text-5xl text-purple-600" />,
    title: "Neuropediatria",
    description: "Acompanhamento neurológico especializado para crianças e adolescentes"
  },
  {
    icon: <FaHandsHelping className="text-5xl text-purple-600" />,
    title: "Fisioterapia",
    description: "Reabilitação e tratamentos fisioterapêuticos personalizados"
  },
  {
    icon: <FaChild className="text-5xl text-purple-600" />,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de habilidades para autonomia e qualidade de vida"
  },
  {
    icon: <FaComments className="text-5xl text-purple-600" />,
    title: "Fonoaudiologia",
    description: "Tratamento de comunicação, linguagem, fala e deglutição"
  },
  {
    icon: <FaAppleAlt className="text-5xl text-purple-600" />,
    title: "Nutrição",
    description: "Orientação nutricional para todas as fases da vida"
  },
  {
    icon: <FaHeartbeat className="text-5xl text-purple-600" />,
    title: "Psicologia",
    description: "Acompanhamento psicológico e terapêutico individualizado"
  }
]

export default function EspecialidadesSection() {
  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossas Especialidades</h2>
          <p className="section-subtitle">
            Equipe multidisciplinar para cuidar de você em todas as fases da vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidades.map((esp, index) => (
            <EspecialidadeCard
              key={index}
              icon={esp.icon}
              title={esp.title}
              description={esp.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
