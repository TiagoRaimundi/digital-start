# 🚀 SCRIPT PADRÃO PARA CRIAR SITES COM NEXT.JS + TAILWIND

## 📋 Template Reutilizável

### PASSO 1: Criar Estrutura Base

```bash
# Criar diretório e inicializar
mkdir nome-empresa-site
cd nome-empresa-site
npm init -y

# Instalar dependências
npm install react react-dom next framer-motion lucide-react @tailwindcss/postcss
npm install --save-dev @types/node @types/react @types/react-dom typescript
```

### PASSO 2: package.json

```json
{
  "name": "nome-empresa-site",
  "version": "1.0.0",
  "description": "Site da [NOME EMPRESA]",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^16.0.3",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.468.0",
    "@tailwindcss/postcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.6",
    "@types/react-dom": "^19.2.3",
    "typescript": "^5.9.3"
  }
}
```

### PASSO 3: Criar Estrutura de Pastas

```bash
mkdir -p app/components public/images
```

### PASSO 4: Arquivos de Configuração

**tailwind.config.ts:**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#SUACOR', dark: '#...', light: '#...' },
        secondary: { DEFAULT: '#SUACOR', dark: '#...', light: '#...' },
      },
    },
  },
  plugins: [],
};
export default config;
```

**postcss.config.js:**
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**next.config.js:**
```javascript
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
```

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### PASSO 5: Arquivos Base

**app/globals.css:**
```css
@import "tailwindcss";
```

**app/layout.tsx:**
```typescript
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nome da Empresa',
  description: 'Descrição',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**app/page.tsx:**
```typescript
'use client'
import Header from './components/Header'
import Hero from './components/Hero'
// ... outros componentes

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* ... */}
    </>
  )
}
```

### PASSO 6: Componentes Padrão

**Header.tsx** - Menu de navegação
**Hero.tsx** - Banner principal
**Services.tsx** - Serviços/Produtos
**About.tsx** - Sobre a empresa
**Contact.tsx** - Contato
**Footer.tsx** - Rodapé
**WhatsAppFloat.tsx** - Botão flutuante

### PASSO 7: Build e Deploy

```bash
# Testar local
npm run dev

# Build produção
npm run build

# Deploy Vercel
npm install -g vercel
vercel login
vercel --prod
```

## 🎨 Personalização Rápida

### Cores da Empresa
- Edite `tailwind.config.ts` → seção `colors`

### Conteúdo
- Textos: Edite cada componente
- Imagens: Substitua URLs do Unsplash
- Telefone: Busque e substitua o número

### Logo
- Coloque em `public/images/logo.png`
- Use no Header

## 📊 Checklist de Criação

- [ ] Analisar Instagram/Site da empresa
- [ ] Definir paleta de cores
- [ ] Coletar informações (telefone, endereço, serviços)
- [ ] Escolher imagens (Unsplash)
- [ ] Criar estrutura base
- [ ] Desenvolver componentes
- [ ] Testar responsividade
- [ ] Deploy na Vercel
- [ ] Teste final

## 🔥 Dicas

- Use sempre fontes do Google Fonts
- Cores: Adobe Color / Coolors
- Imagens: Unsplash / Pexels
- Ícones: Lucide React
- Animações: Framer Motion
- Sempre teste mobile first!

---

**Tempo Médio: 2-3 horas por site**
**Deploy: 5 minutos na Vercel**
