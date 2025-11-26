import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luzzi Instalações Elétricas | Xanxerê/SC",
  description:
    "Empresa especializada em instalação e manutenção elétrica em Xanxerê. Qualidade e bom atendimento garantidos!",
  keywords: [
    "eletricista xanxere",
    "instalacao eletrica",
    "manutencao eletrica",
    "luzzi",
    "eletrica xanxere",
  ],
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-64x64.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/images/favicon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/favicon-192x192.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
