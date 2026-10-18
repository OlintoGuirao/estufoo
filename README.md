# Estufoo — plataforma de estudo de matemática

App web em português para estudar blocos de matemática (fórmulas + questões A–G) com **bloco de rascunho grande** para caneta stylus (S Pen / dedo). Sem login e sem backend: tudo roda no navegador; desenhos ficam em `localStorage`.

## Como rodar

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43127](http://127.0.0.1:43127).

Build de produção:

```bash
npm run build
npm run preview
```

## Uso

1. Na home, escolha **Fórmulas e macetes**, um **Bloco A–G** ou um **Simulado** (ACS / Almoxarife).
2. Em cada questão: leia o enunciado, marque a alternativa e confirme.
3. Use o canvas de rascunho abaixo da questão (limpar, persistência por questão).
4. Se errar, aparece o **passo a passo** — a letra correta **não** é revelada; você pode tentar de novo.

Os 10 simulados autorais INDEPAC ficam em `content/simulados/` (fonte em Markdown). Para regenerar os dados do app:

```bash
node scripts/parse-simulados.mjs
```

## PWA / tablet Android

O app é uma PWA instalável (`manifest` + service worker). No Chrome/Samsung Internet do tablet: menu → **Adicionar à tela inicial** / **Instalar app**.

APK nativo (Capacitor) não está incluído neste repositório; a PWA cobre o uso offline/instalável no Android.

## Stack

Vite · React · TypeScript · Tailwind CSS · vite-plugin-pwa
