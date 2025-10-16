# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./public/favicon.png" />
  </samp>
</p>

<hr>

## ✨ Informação

Dev: [Astro](https://astro.build/) com [Starlight](https://starlight.astro.build/)

- Todas as páginas/rotas estão em `src/contente/docs`.
- As páginas estáticas são simples ficheiros `.md/.mdx` onde se pode adicionar html também e importar componentes ou outros ficheiros `.md/.mdx`.
- As páginas dinâmicas importam componentes de cliente (react, svelte, vue, solid) com `client:load` para enviar javascript para o browser.

### 📑 Missa do Dia

É gerado primeiro o calendário anual e depois os links para as rotas correctas.

## 🚀 Começar

```bash
npm install
npm run dev
```
