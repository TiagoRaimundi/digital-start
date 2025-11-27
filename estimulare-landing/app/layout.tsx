import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://clinicaestimulare.com.br'),
  title: 'Clínica Estimulare | Clínica Multidisciplinar em Xanxerê SC | Olhar Integrativo',
  description: 'Clínica Multidisciplinar Estimulare em Xanxerê SC. Equipe com +8 especialidades: Neuropediatria, Fisioterapia, TO, Fonoaudiologia, Nutrição, Psicologia e mais. Desenvolvimento em todas as fases da vida.',
  keywords: [
    'clínica multidisciplinar xanxerê',
    'clínica estimulare',
    'neuropediatria xanxerê',
    'fisioterapia xanxerê',
    'terapia ocupacional xanxerê',
    'fonoaudiologia xanxerê',
    'nutricionista xanxerê',
    'psicóloga xanxerê',
    'clínica infantil xanxerê',
    'desenvolvimento infantil xanxerê',
    'saúde integrativa xanxerê sc',
    'clínica de reabilitação xanxerê'
  ],
  authors: [{ name: 'Clínica Estimulare' }],
  creator: 'Clínica Estimulare',
  publisher: 'Clínica Estimulare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Clínica Estimulare | Clínica Multidisciplinar Xanxerê SC',
    description: 'Equipe multidisciplinar com +8 especialidades. Desenvolvimento em todas as fases da vida. Agende sua consulta!',
    url: 'https://clinicaestimulare.com.br',
    siteName: 'Clínica Estimulare',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clínica Estimulare - Xanxerê SC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Estimulare | Clínica Multidisciplinar Xanxerê SC',
    description: 'Equipe multidisciplinar com +8 especialidades. Desenvolvimento em todas as fases da vida.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-google-search-console',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body>{children}</body>
    </html>
  )
}
