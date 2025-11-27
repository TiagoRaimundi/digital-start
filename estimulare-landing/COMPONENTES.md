# Estrutura de Componentes - Clínica Estimulare

## 📁 Hierarquia de Componentes

```
components/
├── Header.tsx                  # Navegação com menu responsivo
├── HeroSection.tsx             # Seção hero principal
├── EspecialidadesSection.tsx   # Seção com grid de especialidades
│   └── EspecialidadeCard.tsx   # Card individual de especialidade
├── SobreSection.tsx            # Seção sobre a clínica e diferenciais
│   └── DiferencialCard.tsx     # Card individual de diferencial
├── DepoimentosSection.tsx      # Seção com depoimentos de pacientes
│   └── DepoimentoCard.tsx      # Card individual de depoimento
├── ContatoSection.tsx          # Seção de contato com mapa e informações
│   └── ContatoInfo.tsx         # Componente de info de contato (endereço, tel, etc)
├── Footer.tsx                  # Rodapé com links e redes sociais
├── WhatsAppButton.tsx          # Botão flutuante do WhatsApp
├── SchemaOrg.tsx               # Schema.org JSON-LD para SEO
└── index.ts                    # Exportações barril para importação simplificada
```

## 📝 Descrição dos Componentes

### Header (Header.tsx)
Navegação fixa no topo da página com:
- Logo e nome da clínica
- Menu desktop com links âncoras
- Menu mobile responsivo com toggle
- Transição visual ao fazer scroll (cor de fundo e sombra)
- **Props**: `isScrolled: boolean`

### HeroSection (HeroSection.tsx)
Seção inicial com:
- Fundo gradiente purple
- Título principal e subtítulo
- Descrição com emojis
- Botões de CTA (Call To Action)
- Ícone de scroll animado
- Sem props, conteúdo fixo

### EspecialidadesSection (EspecialidadesSection.tsx)
Grid de 6 especialidades com:
- Título e subtítulo da seção
- Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop)
- Uso do componente reutilizável `EspecialidadeCard`
- Dados de especialidades internos (array estático)

### EspecialidadeCard (EspecialidadeCard.tsx)
Card reutilizável para especialidades com:
- Ícone
- Título
- Descrição
- Hover animation com shadow e translateY
- **Props**:
  - `icon: React.ReactNode`
  - `title: string`
  - `description: string`

### SobreSection (SobreSection.tsx)
Seção sobre diferenciais da clínica com:
- Grid de 4 diferenciais
- Seção destaque com gradiente
- Botão WhatsApp
- Uso de `DiferencialCard` para cards

### DiferencialCard (DiferencialCard.tsx)
Card para diferenciais com:
- Ícone
- Título
- Descrição
- Layout centrado
- **Props**:
  - `icon: React.ReactNode`
  - `title: string`
  - `description: string`

### DepoimentosSection (DepoimentosSection.tsx)
Seção de depoimentos com:
- Grid de 3 depoimentos (responsivo)
- Uso de `DepoimentoCard`
- Dados internos (array estático de 3 depoimentos)

### DepoimentoCard (DepoimentoCard.tsx)
Card para depoimento com:
- Estrelas de rating
- Texto do depoimento
- Nome do cliente
- **Props**:
  - `name: string`
  - `text: string`
  - `rating: number`

### ContatoSection (ContatoSection.tsx)
Seção de contato completa com:
- Grid com informações de contato à esquerda
- Box de horário de atendimento à direita
- Google Maps embarcado
- 4 itens de contato: endereço, telefone, WhatsApp, Instagram
- Uso de `ContatoInfo` para cada item

### ContatoInfo (ContatoInfo.tsx)
Componente reutilizável para informação de contato com:
- Ícone
- Título
- Conteúdo dinâmico (children)
- **Props**:
  - `icon: React.ReactNode`
  - `title: string`
  - `children: React.ReactNode`

### Footer (Footer.tsx)
Rodapé com:
- Logo e descrição da clínica
- Links rápidos
- Links para redes sociais
- Copyright e mensagem
- Sem props, conteúdo fixo

### WhatsAppButton (WhatsAppButton.tsx)
Botão flutuante flutuante com:
- Posição fixa no canto inferior direito
- Ícone WhatsApp
- Animação pulse
- Link para WhatsApp da clínica
- Sem props

### SchemaOrg (SchemaOrg.tsx)
Script JSON-LD para SEO com:
- Dados estruturados do tipo MedicalClinic
- Informações de contato
- Horário de funcionamento
- Especialidades
- Links de redes sociais
- Sem props

## 🔄 Fluxo de Importação

### No `page.tsx`:
```typescript
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
// ... outros componentes
```

### Ou usando o arquivo index.ts:
```typescript
import {
  Header,
  HeroSection,
  EspecialidadesSection,
  // ... outros
} from '@/components'
```

## 🎨 Estilo e Cores

- **Cor Principal**: Purple (#9333ea / #a855f7)
- **Cor Secundária**: Green (para WhatsApp - #22c55e)
- **Fundo**: Branco, Gray-50, Gray-900
- **Texto**: Gray-700, Gray-900, White

## 📱 Responsividade

Todos os componentes são responsivos:
- **Mobile**: Coluna única, textos ajustados
- **Tablet (md)**: Grid com 2 colunas/itens
- **Desktop (lg)**: Grid com 3-4 colunas conforme necessário

## 🚀 Benefícios da Componentização

✅ **Reusabilidade**: Componentes como `Card` são reutilizados em múltiplas seções
✅ **Manutenibilidade**: Cada componente tem responsabilidade única
✅ **Legibilidade**: `page.tsx` agora é limpo e fácil de entender
✅ **Escalabilidade**: Fácil adicionar novas seções/componentes
✅ **Testes**: Componentes isolados são mais fáceis de testar
✅ **Performance**: Componentes podem ser otimizados independentemente

## 📌 Notas

- Dados estáticos (especialidades, diferenciais, depoimentos) estão dentro dos componentes de seção
- Se necessário adicionar dados dinâmicos, considere passar como props
- Todos os componentes usam Tailwind CSS para estilos
- Componentes de cards são reutilizáveis e aceitam qualquer ReactNode como ícone
