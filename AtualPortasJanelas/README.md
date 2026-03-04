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

- Header fixo com menu desktop/mobile
- Logo do header com ícone de porta minimalista/moderno (com proporção ajustada ao bloco do logo)
- Navegação SPA com React Router
- Seção hero com imagem e CTAs
- Destaque de diferenciais da empresa
- Listagem de produtos com dados locais (`src/data/products.ts`)
- Filtro de produtos por categoria na página de catálogo
- Cards de produto com CTA de orçamento via WhatsApp
- Página de contato com múltiplos canais
- Página 404 para rotas inexistentes

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

Última atualização do README: 2026-03-04
