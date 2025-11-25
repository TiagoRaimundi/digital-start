import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luzzi Instalações Elétricas | Xanxerê/SC',
  description: 'Empresa especializada em instalação e manutenção elétrica em Xanxerê. Qualidade e bom atendimento garantidos!',
  keywords: ['eletricista xanxere', 'instalacao eletrica', 'manutencao eletrica', 'luzzi', 'eletrica xanxere'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
