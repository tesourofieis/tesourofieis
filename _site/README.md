# Tesouro dos Fiéis

Espaço dedicado à oração, exposição e preservação das santas tradições da igreja.

## É necessário:

* Adicionar textos em latim em certos dias do Próprio dos Santos (principalmente no de Portugal)
* Resolver o código que dá a Missa do dia
* Adicionar mais orações tradicionais

### Missa do Dia

Este repositório tem como submódulo o repositório Missal1962, e este tem como submódulo o repositório divinum-officium. O Missal1962 faz todo o trabalho e vai buscar ao divinum-officium os textos.

Para que isso aconteça é necessário correr o Dockerfile:
$ docker build -t missal1962 .
$ docker run -d -p 8000:8000 missal1962
e navegar até http://0.0.0.0:8000/.

Depois correndo o ficheiro gen_static_data.sh, este vai popular a pasta /data com os textos que se encontram em http://0.0.0.0:8000/. e que provêm do repositório divinum-officium.

Posto isto, é necessário completar o repositório divinum-officium/web/www/missa/Portugues para que a página Missa do Dia fique completa. 

De momento encontram-se feitos os Domingos, excepto os da Quaresma e Páscoa.