# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./public/favicon.svg" />
  </samp>
</p>

<hr>

## ✨ Informação

Usa [Astro](https://astro.build/) com [Starlight](https://starlight.astro.build/)

- Todas as páginas/rotas estão em `src/contente/docs`.
- As páginas estáticas são simples ficheiros `.md/.mdx` onde se pode adicionar html também e importar componentes ou outros ficheiros `.md/.mdx`.
- As páginas dinâmicas importam componentes de cliente (react, svelte, vue, solid) com `client:load` para enviar javascript para o browser.

### 📑 Missa do Dia

Este repositório tem como submódulo o repositório [divinum-officium](https://github.com/DivinumOfficium/divinum-officium) de onde a página missal/dia vai buscar os próprios.

É gerado primeiro o calendário anual e depois vai-se buscar os próprios ao divinum officium.

## 🚀 Começar

Clonar com `--recursive` devido ao submódulo `DivinumOfficium`.

```bash
npm install
npm run dev
```
