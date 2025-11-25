import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decore Tintas Xanxerê | +2000 Cores Disponíveis',
  description: 'Loja de tintas e acessórios para pintura. As melhores marcas e preços! Coral, AkzoNobel e mais.',
  keywords: ['tintas xanxere', 'decore tintas', 'coral tintas', 'pintura', 'decoracao'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
