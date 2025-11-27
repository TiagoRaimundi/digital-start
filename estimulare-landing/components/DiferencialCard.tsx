import React from 'react'

interface DiferencialCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function DiferencialCard({ icon, title, description }: DiferencialCardProps) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
}
