import DepoimentoCard from './DepoimentoCard'

const depoimentos = [
  {
    name: "Maria Silva",
    text: "Equipe maravilhosa! Meu filho teve um desenvolvimento incrível com o acompanhamento multidisciplinar.",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissionais extremamente qualificados e atenciosos. Recomendo demais a Clínica Estimulare!",
    rating: 5
  },
  {
    name: "Ana Paula",
    text: "O atendimento integrado fez toda a diferença no tratamento. Excelente estrutura e acolhimento.",
    rating: 5
  }
]

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">O Que Dizem Nossos Pacientes</h2>
          <p className="section-subtitle">
            Histórias reais de quem confia no nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <DepoimentoCard
              key={index}
              name={depoimento.name}
              text={depoimento.text}
              rating={depoimento.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
