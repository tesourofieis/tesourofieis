[![Netlify Status](https://api.netlify.com/api/v1/badges/42f31635-809f-472d-aec3-e331309648d3/deploy-status)](https://app.netlify.com/sites/tesourofieis/deploys)

# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./public/favicon.svg" />
  </samp>
</p>


Espaço dedicado à oração, exposição e preservação das santas tradições da igreja.

## Informação

Usa astro com starlight

As páginas estáticas estão em `src/contente/docs`
e os ficheiros `.md` ou `.mdx` adicionados geram uma nova rota que respeita o caminho do ficheiro.

As páginas dinâmicas estão no mesmo sítio mas  importam componentes de cliente (react, svelte, vue, solid) com `client:load` para enviar javascript para o browser.

### Missa do Dia

Este repositório tem como submódulo o repositório [divinum-officium](https://github.com/DivinumOfficium/divinum-officium) de onde a página missal/dia vai buscar os próprios.

É gerado primeiro o calendário anual e depois vai-se buscar os próprios ao divinum officium.

### Dev

Clonar com `--recursive` devido ao submódulo `DivinumOfficium`.

```bash
npm install
npm run dev
```
