import React from 'react'

interface EspecialidadeCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function EspecialidadeCard({ icon, title, description }: EspecialidadeCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  )
}
