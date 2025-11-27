import React from 'react'

interface ContatoInfoProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

export default function ContatoInfo({ icon, title, children }: ContatoInfoProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl text-purple-600 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {children}
      </div>
    </div>
  )
}
