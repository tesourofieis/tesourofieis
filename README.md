[![Netlify Status](https://api.netlify.com/api/v1/badges/42f31635-809f-472d-aec3-e331309648d3/deploy-status)](https://app.netlify.com/sites/tesourofieis/deploys)

# Tesouro dos Fiéis

Espaço dedicado à oração, exposição e preservação das santas tradições da igreja.

## É necessário

- Adicionar textos em latim em certos dias do Próprio dos Santos (principalmente no de Portugal)
- Adicionar mais orações tradicionais

### Missa do Dia

Este repositório tem como submódulo o repositório [Missal1962](https://github.com/mmolenda/Missal1962), e este tem como submódulo o repositório [divinum-officium](https://github.com/DivinumOfficium/divinum-officium). O Missal1962 faz todo o trabalho e vai buscar ao divinum-officium os textos.

Posto isto, é necessário completar o repositório divinum-officium/web/www/missa/Portugues para que a página Missa do Dia tenha os textos em Português.

### Dev

Git clone with `--recursive` because we make use of submodules `Missal1962` and `DivinumOfficium`.

Install and run the project `Missal1962` with:

#### Requirements

- python 3.9
- jekyll

```
cd missal1962
pipenv install --dev
pipenv shell
```

Run `bundle install` followed by `bundle exec jekyll serve` to run the app.

To generate new json files run `bash gen_static_data.sh`
