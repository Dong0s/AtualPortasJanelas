# Atual Portas & Janelas - Showcase

Landing page institucional para apresentação de portas e janelas em alumínio, com catálogo filtrável por categoria e página de contato.

## Visão geral

Este projeto foi desenvolvido com React + Vite + TypeScript, utilizando Tailwind CSS e componentes baseados em shadcn/ui. A aplicação possui foco em performance visual, layout responsivo e navegação simples.

Rotas principais:

- `/` -> Home com hero, diferenciais, prévia de produtos e CTA
- `/produtos` -> Catálogo com filtro por categoria (Todos, Portas, Janelas)
- `/contato` -> Canais de contato e CTA para WhatsApp

## Stack técnica

- React 18
- TypeScript
- Vite 5
- React Router DOM 6
- Tailwind CSS 3
- shadcn/ui (coleção de componentes em `src/components/ui`)
- Lucide React (ícones)
- Vitest + Testing Library (testes)

## Funcionalidades implementadas

- Header fixo com menu responsivo desktop/mobile (breakpoint: md)
- Logo do header com ícone de porta minimalista/moderno (com proporção ajustada ao bloco do logo)
- Navegação SPA com React Router
- Seção hero totalmente responsiva com altura dinâmica em mobile
- Destaque de diferenciais da empresa com grid adaptativo
- Listagem de produtos com dados locais (`src/data/products.ts`)
- Carrossel de produtos na Home com swipe/arraste e avanço automático por tempo
- Filtro de produtos por categoria com suporte a múltiplas linhas em mobile
- Cards de produto com CTA de orçamento via WhatsApp (altura consistente)
- Página de contato com múltiplos canais e clique otimizado para mobile
- Página 404 para rotas inexistentes
- **Suporte completo para dispositivos móveis e tablets**
- Progressive Web App (PWA) com manifest.json
- Fundo global em tom marfim suave para reduzir o contraste de branco puro

## Estrutura do projeto

```text
src/
	components/
		Header.tsx
		Footer.tsx
		ProductCard.tsx
		ui/                 # componentes shadcn/ui
	data/
		products.ts         # base local de produtos
	pages/
		Index.tsx           # Home
		Produtos.tsx        # Catálogo e filtros
		Contato.tsx         # Contatos e CTA WhatsApp
		NotFound.tsx        # Rota 404
	test/
		setup.ts
		example.test.ts
	App.tsx               # definição de rotas
	main.tsx              # bootstrap React
	index.css             # tokens de tema, tipografia e estilos globais
```

## Identidade visual e tema

O tema usa variáveis CSS (`:root`) com paleta principal azul/amarelo, além de suporte a modo escuro (`.dark`).

Principais arquivos:

- `src/index.css` -> design tokens (cores, fontes, gradientes, sombras)
- `tailwind.config.ts` -> extensões de tema, animações e fontes

## 📱 Responsividade e Suporte Mobile

A aplicação foi **completamente portada para funcionar perfeitamente em dispositivos móveis, tablets e desktops**.

### Breakpoints utilizados (Tailwind CSS)

- **sm** (640px) - Smartphones landscape e tablets pequenos
- **md** (768px) - Tablets e navegação desktop
- **lg** (1024px) - Desktops médios
- **xl** (1280px) - Desktops grandes

### Otimizações implementadas

#### 1. **Header e Navegação**
- Menu hamburger em mobile (toca/clica para abrir)
- Tamanhos de ícone escalonados (reduzidos em mobile)
- Padding responsivo em todas as resoluções
- Links com touch targets maiores (mínimo 44px para mobile)

#### 2. **Seções e Layout**
- Hero section com altura dinâmica (min-height em mobile, viewport em desktop)
- Padding e margin escalonados por dispositivo
- Grid responsivo: 1 coluna mobile → 2 colunas tablet → 3 colunas desktop
- Texto com tamanhos responsivos (text-sm/text-base/text-lg/text-xl)

#### 3. **Componentes**
- **ProductCard**: Altura consistente com flexbox, imagens otimizadas com aspect-square
- **ContactItems**: Clique cômodo em mobile, ícones responsivos, texto com word-break
- **Buttons**: Largura total em mobile, width-auto em desktop

#### 4. **Meta tags para Mobile**
- `viewport-fit=cover` para notch support (iPhone)
- `apple-mobile-web-app-capable` para experiência PWA
- `format-detection=telephone=no` para evitar links telefônicos indesejados
- `color-scheme` para modo claro/escuro do navegador

#### 5. **PWA (Progressive Web App)**
- `public/manifest.json` configurado para instalação do app
- Ícones em SVG para todos os tamanhos (192x192, 512x512)
- Suporte a shortcuts rápidos (Ver Produtos, Entre em Contato)
- Identificação de categoria (`shopping`)

### Testes de Responsividade

Para testar em diferentes dispositivos:

```bash
npm run dev
```

Abra na DevTools do navegador:
- **Ctrl + Shift + M** (Windows/Linux) ou **Cmd + Shift + M** (Mac) para toggle device toolbar
- Teste em resoluções: 375px (mobile), 768px (tablet), 1920px (desktop)

Dispositivos recomendados para teste:
- iPhone 12/13/14 (390px)
- Samsung Galaxy S21 (360px)
- iPad (768px)
- iPad Pro (1024px)

### Performance em Mobile

- Imagens com `loading="lazy"` para lazy loading
- Transições CSS otimizadas (não usar `transform: scale()` em hover em mobile)
- Sem hover effects primários em mobile (usar Active states)
- Fonts Montserrat e Open Sans pré-carregadas

### Suporte a Dispositivos

✅ **Testado e otimizado para:**
- iPhone 5S+ (320px em diante)
- Android 5+ (320px em diante)
- iPad + iPad Pro
- Tablets Android 7"+
- Desktops e Laptops

### Troubleshooting Mobile

Se enfrentar problemas em mobile:

1. **Viewport não funciona**: Verifique `index.html` > `<meta name="viewport">`
2. **Texto muito pequeno**: Tailwind está aplicando `sm:` corretamente? Verifique em DevTools
3. **Botões difíceis de clicar**: Touch target mínimo é 44x44px (verifique com Lighthouse)
4. **Imagens cortadas**: Verifique `object-cover` e aspect-ratio em ProductCard


## Requisitos

- Node.js 18+ (recomendado)
- npm 9+ (ou versão compatível com lockfile atual)

## Como rodar localmente

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:8080`.

## Scripts úteis

- `npm run dev` -> servidor de desenvolvimento
- `npm run build` -> build de produção
- `npm run build:dev` -> build em modo development
- `npm run preview` -> preview do build
- `npm run lint` -> lint com ESLint
- `npm run test` -> execução única de testes com Vitest
- `npm run test:watch` -> testes em modo watch
- `npm run predeploy` -> build antes da publicação
- `npm run deploy` -> publica a pasta `dist` na branch `gh-pages`

## Dados e conteúdo

Os produtos estão centralizados em `src/data/products.ts`.

Para cadastrar/editar produtos:

1. Ajuste os objetos do array `products`
2. Mantenha `category` com valores esperados pelo filtro (`Portas` ou `Janelas`)
3. Garanta que a imagem importada exista em `src/assets`

## Manutenção contínua do README

Sempre que houver alteração relevante no código, atualizar este README no mesmo ciclo da mudança.

Checklist mínimo por alteração:

- Mudou rota/página? Atualizar seção **Visão geral** e **Estrutura do projeto**
- Mudou componente principal? Atualizar **Funcionalidades implementadas**
- Mudou stack/dependências/scripts? Atualizar **Stack técnica** e **Scripts úteis**
- Mudou tema/estilos globais? Atualizar **Identidade visual e tema**
- Mudou fonte de dados? Atualizar **Dados e conteúdo**

## Observações

- Os contatos e links de WhatsApp no código atual estão com valores de exemplo.
- O projeto já está preparado para expansão com mais componentes em `src/components/ui`.

---

Última atualização do README: 2026-03-06 - Carrossel de produtos na Home + ajuste de fundo global
