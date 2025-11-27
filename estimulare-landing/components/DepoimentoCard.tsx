import { FaStar } from 'react-icons/fa'

interface DepoimentoCardProps {
  name: string
  text: string
  rating: number
}

export default function DepoimentoCard({ name, text, rating }: DepoimentoCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">
        "{text}"
      </p>
      <p className="text-purple-700 font-semibold">
        - {name}
      </p>
    </div>
  )
}
