import { Text, View } from "react-native";
import { H1, H2, H3, H4, H5 } from "~/components/Headings";

import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageCatecismo() {
  return (
    <PageWrapper>
      <H1 text="Catecismo" />
      <H1 text="Mandamentos da lei de Deus" />
      <Text className="text-base">
        Os mandamentos da lei de Deus são dez: os três primeiros pertencem à
        honra de Deus e os outros sete ao proveito do próximo.
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Amar a Deus sobre todas as coisas.
        </Text>
        <Text className="li text-justify">
          2º - Não tomar seu santo nome em vão.
        </Text>
        <Text className="li text-justify">
          3º - Guardar os domingos e festas.
        </Text>
        <Text className="li text-justify">4º - Honrar pai e mãe.</Text>
        <Text className="li text-justify">5º - Não matar.</Text>
        <Text className="li text-justify">
          6º - Não pecar contra a castidade.
        </Text>
        <Text className="li text-justify">7º - Não furtar.</Text>
        <Text className="li text-justify">
          8º - Não levantar falso testemunho.
        </Text>
        <Text className="li text-justify">
          9º - Não desejar a mulher do próximo.
        </Text>
        <Text className="li text-justify">
          10º - Não cobiçar as coisas alheias.
        </Text>
      </View>
      <Text className="aside">Estes dez mandamentos se encerram em dois:</Text>
      <Text className="text-base">
        Amar a Deus sobre todas as coisas e ao próximo como a nós mesmos.
      </Text>
      <H2 text="Mandamentos da Igreja" />
      <Text className="aside">Os mandamentos da Igreja são cinco:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Ouvir Missa inteira nos domingos e festas de guarda.
        </Text>
        <Text className="li text-justify">
          2º - Confessar-se ao menos uma vez cada ano.
        </Text>
        <Text className="li text-justify">
          3º - Comungar ao menos pela Páscoa da Ressurreição.
        </Text>
        <Text className="li text-justify">
          4º - Jejuar e abster-se de carne, quando manda a santa madre Igreja.
        </Text>
        <Text className="li text-justify">
          5º - Pagar dízimos, segundo o costume.
        </Text>
      </View>
      <H2 text="Sacramentos" />
      <Text className="aside">
        Os sacramentos instituídos por Jesus Cristo são sete:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - Batismo.</Text>
        <Text className="li text-justify">2º - Confirmação.</Text>
        <Text className="li text-justify">3º - Eucaristia.</Text>
        <Text className="li text-justify">4º - Penitência ou Confissão.</Text>
        <Text className="li text-justify">5º - Extrema Unção.</Text>
        <Text className="li text-justify">6º - Ordem.</Text>
        <Text className="li text-justify">7º - Matrimônio.</Text>
      </View>
      <H2 text="Lição Preliminar" />
      <Text className="aside">Da Doutrina Cristã suas partes principais</Text>

      <Text className="text-base">
        Em seguida Barnabé foi para Tarso, à procura de Saulo. Encontrou-o e o
        levou para Antioquia. Durante um ano estiveram juntos naquela igreja e
        instruíram muita gente. Foi em Antioquia que, pela primeira vez, os
        discípulos foram chamados cristãos. At 11, 25-26.
      </Text>

      <H5 text="1 - Sois cristão?" />
      <Text className="text-base">Sim, sou cristão pela graça de Deus.</Text>
      <H5 text="2 - Por que dizeis pela graça de Deus?" />
      <Text className="text-base">
        Digo: pela graça de Deus, porque o ser cristão é um dom de Deus,
        inteiramente gratuito, que nós não podemos merecer.
      </Text>
      <H5 text="3 - E quem é verdadeiro cristão?" />
      <Text className="text-base">
        Verdadeiro cristão é aquele que é baptizado, crê e professa a doutrina
        cristã e obedece aos legítimos Pastores da Igreja.
      </Text>
      <H5 text="4 - Que é a Doutrina Cristã?" />
      <Text className="text-base">
        A Doutrina Cristã é a doutrina que Jesus Cristo Nosso Senhor nos
        ensinou, para nos mostrar o caminho da salvação.
      </Text>
      <H5 text="5 - É necessário aprender a doutrina ensinada por Jesus Cristo?" />
      <Text className="text-base">
        Certamente, é necessário aprender a doutrina ensinada por Jesus Cristo,
        e cometem falta grave aqueles que se descuidam de o fazer.
      </Text>
      <H5 text="6 - Os pais e patrões estão obrigados a mandar ao catecismo os seus filhos e dependentes?" />
      <Text className="text-base">
        Os pais e patrões são obrigados a procurar que seus filhos e dependentes
        aprendam a Doutrina Cristã; e são culpados diante de Deus, se
        desprezarem esta obrigação.
      </Text>
      <H5 text="7 - De quem devemos nós receber e aprender a Doutrina Cristã?" />
      <Text className="text-base">
        Devemos receber e aprender a Doutrina Cristã da Santa Igreja Católica.
      </Text>
      <H5 text="8 - Como é que temos a certeza de que a Doutrina Cristã, que recebemos da Santa Igreja Católica, é verdadeira?" />
      <Text className="text-base">
        Temos a certeza de que a Doutrina Cristã, que recebemos da Igreja
        Católica, é verdadeira, porque Jesus Cristo, autor divino desta
        doutrina, a confiou por meio aos seus Apóstolos à Igreja Católica, por
        Ele fundada e constituída Mestra infalível de todos os homens,
        prometendo-Lhe a sua divina assistência até à consumação dos séculos.
      </Text>
      <H5 text="9 - Há mais provas da verdade da Doutrina Cristã?" />
      <Text className="text-base">
        A verdade da Doutrina Cristã é demonstrada ainda pela santidade eminente
        de tantos que a professaram e professam, pela heróica fortaleza dos
        mártires, pela sua rápida e admirável propagação no mundo, e pela sua
        plena conservação através de tantos séculos de muitas e contínuas lutas.
      </Text>
      <H5 text="10 - Quantas e quais são as partes principais e mais necessárias da Doutrina Cristã?" />
      <Text className="text-base">
        As partes principais e mais necessárias da Doutrina Cristã são quatro: o
        Credo, o Padre-Nosso, os Mandamentos e os Sacramentos.
      </Text>
      <H5 text="11 - Que nos ensina o Credo?" />
      <Text className="text-base">
        O Credo ensina-nos os principais artigos da nossa santa Fé.
      </Text>
      <H5 text="12 - Que nos ensina o Padre-Nosso?" />
      <Text className="text-base">
        O Padre-Nosso ensina-nos tudo o que devemos esperar de Deus, e tudo o
        que Lhe devemos pedir.
      </Text>
      <H5 text="13 - Que nos ensinam os Mandamentos?" />
      <Text className="text-base">
        Os Mandamentos ensinam-nos tudo o que devemos fazer para agradar a Deus;
        em resumo, amar a Deus sobre todas as coisas, e amar ao próximo como a
        nós mesmos, por amor de Deus.
      </Text>
      <H5 text="14 - Que nos ensina a doutrina dos Sacramentos?" />
      <Text className="text-base">
        A doutrina dos Sacramentos faz-nos conhecer a natureza e o bom uso
        desses meios que Jesus Cristo instituiu Para nos perdoar os pecados,
        comunicar-nos a sua graça, e infundir e aumentar em nós as virtudes da
        fé, da esperança e da caridade.
      </Text>
      <H1 text="Primeira Parte" />
      <Text className="aside">
        Do Símbolo dos Apóstolos, chamado vulgarmente o Credo
      </Text>

      <Text className="text-base">
        A fé é o fundamento do que se espera e a convicção das realidades que
        não se vêem. Foi a fé que fez a glória dos antigos. Pela fé sabemos que
        o universo foi criado pela palavra de Deus, de sorte que do invisível
        teve origem o visível. Pela fé Abel ofereceu a Deus sacrifício melhor do
        que Caim e por ela foi declarado justo, tendo Deus aprovado as suas
        oferendas, e é pela fé que depois de morto Abel continua a falar.
        Epístola aos hebreus 4, 1-4
      </Text>

      <Text className="h2">
        I - <Text className="em">Do Credo em geral</Text>
      </Text>
      <H5 text="15 - Qual é a primeira parte da Doutrina Cristã?" />
      <Text className="text-base">
        A primeira parte da Doutrina Cristã é o Símbolo dos Apóstolos, chamado
        vulgarmente Credo.
      </Text>
      <H5 text="16 - Por que chamamos ao Credo Símbolo dos Apóstolos?" />
      <Text className="text-base">
        O Credo chama-se Símbolo dos Apóstolos, porque é um compêndio das
        verdades da Fé, ensinadas pelos Apóstolos.
      </Text>
      <H5 text="17 - Quantos artigos tem o Credo?" />
      <Text className="text-base">O Credo tem doze artigos.</Text>
      <H5 text="18 - Dizei-os." />
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Creio em Deus Padre, todo-poderoso, Criador do céu e da terra.
        </Text>
        <Text className="li text-justify">
          2º - E em Jesus Cristo, um só seu Filho, Nosso Senhor.
        </Text>
        <Text className="li text-justify">
          3º - qual foi concebido pelo poder do Espírito Santo, nasceu de Maria
          Virgem.
        </Text>
        <Text className="li text-justify">
          4º - Padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e
          sepultado.
        </Text>
        <Text className="li text-justify">
          5º - Desceu aos infernos, ao terceiro dia ressurgiu dos mortos.
        </Text>
        <Text className="li text-justify">
          6º - Subiu ao Céu, está sentado à direita de Deus Padre todo-poderoso.
        </Text>
        <Text className="li text-justify">
          7º - De onde há de vir a julgar os vivos e os mortos.
        </Text>
        <Text className="li text-justify">8º - Creio no Espírito Santo.</Text>
        <Text className="li text-justify">
          9º - Na Santa Igreja Católica; na comunhão dos Santos.
        </Text>
        <Text className="li text-justify">10º - Na remissão dos pecados.</Text>
        <Text className="li text-justify">11º - Na ressurreição da carne.</Text>
        <Text className="li text-justify">12º - Na vida eterna. Amén</Text>
      </View>
      <H5 text="19 - Que quer dizer a palavra Credo, eu creio que dizeis no começo do Símbolo?" />
      <Text className="text-base">
        A palavra Credo, eu creio quer dizer: eu tenho por absolutamente
        verdadeiro tudo o que nestes doze artigos se contém; e o creio mais
        firmemente do que se o visse com os meus olhos, porque Deus, que não
        pode nem enganar-se nem enganar-nos, revelou estas verdades à Santa
        Igreja Católica, e por meio d'Ela eis revela também a nós.
      </Text>
      <H5 text="20 - Que contêm os artigos do Credo?" />
      <Text className="text-base">
        Os artigos do Credo contêm tudo o que de mais importante devemos crer
        acerca de Deus, de Jesus Cristo e da Igreja, sua Esposa.
      </Text>
      <H5 text="21 - É muito útil rezar frequentemente o Credo?" />
      <Text className="text-base">
        É utilíssimo rezar frequentemente o Credo, para imprimirmos cada vez
        mais no coração as verdades da Fé.
      </Text>
      <Text className="h2">
        II - <Text className="em">Do primeiro artigo do Credo</Text>
      </Text>

      <Text className="text-base">
        Assim podeis comportar-vos de maneira digna do Senhor, procurando
        agradar-lhe em tudo, frutificando em boas obras e crescendo no
        conhecimento de Deus, confortados pelo poder de sua glória para tudo
        suportar com paciência, firmeza e alegria. Agradecei a Deus Pai que vos
        tornou capazes de participar da herança \* dos santos na luz. Ele nos
        livrou do poder das trevas e nos transportou ao reino de seu Filho
        amado, no qual temos a libertação: o perdão dos pecados. Epístolas aos
        Colossenses 1, 9-14
      </Text>

      <H4 text="1º - De Deus Padre e da Criação" />
      <H5 text="22 - Que nos ensina o primeiro artigo do Credo: creio em Deus Padre, todo-poderoso, Criador do céu e da terra?" />
      <Text className="text-base">
        O primeiro artigo do Credo ensina-nos que há um só Deus, o qual é todo-
        poderoso, e criou o céu e a terra e todas as coisas que no céu e na
        terra se contêm, isto é, todo o universo.
      </Text>
      <H5 text="23 - Como sabemos nós que há Deus?" />
      <Text className="text-base">
        Sabemos que há Deus, porque a nossa razão no-lo demonstra, e a fé no-lo
        confirma.
      </Text>
      <H5 text="24 - Por que se dá a Deus o nome de Pai?" />
      <Text className="text-base">Dá-se a Deus o nome de Pai:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - porque é Pai, por natureza, da segunda Pessoa da Santíssima
          Trindade, isto é, do Filho por Ele gerado;
        </Text>
        <Text className="li text-justify">
          2º - porque Deus é Pai de todos os homens, que Ele criou, conserva e
          governa;
        </Text>
        <Text className="li text-justify">
          3º - porque, finalmente, é Pai, pela graça, de todos os cristãos, os
          quais por isso se chamam filhos adotivos de Deus.
        </Text>
      </View>
      <H5 text="25 - Por que o Padre é a primeira Pessoa da Santíssima Trindade?" />
      <Text className="text-base">
        O Padre é a primeira Pessoa da Santíssima Trindade, porque não procede
        de outra Pessoa, mas é o princípio das outras duas Pessoas, isto é, do
        Filho e do Espírito Santo.
      </Text>
      <H5 text="26 - Que quer dizer a palavra todo-poderoso?" />
      <Text className="text-base">
        A palavra todo-poderoso quer dizer que Deus pode fazer tudo o que quer.
      </Text>
      <H5 text="27 - Deus não pode pecar nem morrer; como é então que se diz que Ele pode fazer tudo?" />
      <Text className="text-base">
        Diz-se que Deus pode fazer tudo, embora não possa pecar nem morrer,
        porque o poder pecar ou morrer não é efeito de potência mas de fraqueza,
        a qual não pode existir em Deus, que é perfeitíssimo.
      </Text>
      <H5 text="28 - Que quer dizer Criador do céu e da terra?" />
      <Text className="text-base">
        Criar quer dizer fazer do nada; portanto, Deus diz-se Criador do céu e
        da terra, porque fez do nada o céu e a terra, e todas as coisas que no
        céu e na terra se contêm, isto é, todo o universo.
      </Text>
      <H5 text="29 - O mundo foi criado somente pelo Padre?" />
      <Text className="text-base">
        O mundo foi criado igualmente por todas as três Pessoas divinas, porque
        aquilo que uma Pessoa faz relativamente às criaturas, fazem-no com um só
        e o mesmo ato também as outras.
      </Text>
      <H5 text="30 - Por que então a criação se atribui particularmente ao Padre?" />
      <Text className="text-base">
        Atribui-se a criação particularmente ao Padre, porque a criação é efeito
        da onipotência divina a qual se atribui particularmente ao Padre, como
        se atribui a sabedoria ao Filho e a bondade ao Espírito Santo, embora
        todas as três Pessoas tenham a mesma onipotência, sabedoria e bondade.
      </Text>
      <H5 text="31 - Deus cuida do mundo e de todas as coisas que criou?" />
      <Text className="text-base">
        Sim, Deus cuida do mundo e de todas as coisas que criou, conserva-as e
        governa-as com a sua infinita bondade e sabedoria, e nada sucede no
        mundo, sem que Deus o queira, ou o permita.
      </Text>
      <H5 text="32 - Por que dizeis que nada sucede, sem que Deus o queira, ou o permita?" />
      <Text className="text-base">
        Diz-se que nada sucede no mundo, sem que Deus o queira, ou o permita,
        porque há coisas que Deus quer e manda, e outras que Ele não quer,
        porém, não impede, como o pecado.
      </Text>
      <H5 text="33 - Por que Deus não impede o pecado?" />
      <Text className="text-base">
        Deus não impede o pecado, porque até mesmo do abuso que o homem faz da
        liberdade que lhe concedeu, sabe tirar um bem, e fazer resplandecer
        ainda mais a sua misericórdia ou a sua justiça.
      </Text>
      <H4 text="2º - Dos Anjos" />

      <Text className="text-base">
        Vou declarar-vos toda a verdade e nada vos ocultarei. Já vos declarei e
        disse: É bom guardar oculto o segredo de um rei; as obras de Deus,
        porém, devem ser reveladas, com a glória devida. Quando tu e Sara
        fazíeis oração, eu apresentava o memorial de vossa prece diante da
        glória do Senhor; e fazia o mesmo quando tu, Tobi, enterravas os mortos.
        Quando não hesitaste em levantar-te e deixar tua refeição e saíste para
        resguardar o cadáver, fui enviado a ti para ter pôr à prova. E Deus me
        enviou, também, para curar a ti e a Sara, tua nora. Eu sou Rafael, um
        dos sete anjos que permanecem diante da glória do Senhor e têm acesso à
        sua presença. Atônitos, os dois, prostraram-se com a face por terra,
        cheios de temor. Mas ele prosseguiu: Não temais! A paz esteja convosco!
        bendizei a Deus por todos os séculos. Quando estava convosco, não era
        por benevolência minha que vos assistia, mas pela vontade de Deus.
        Bendizei-o todos os dias e cantai seus louvores. Vós me víeis comer,
        embora eu nada comesse. Era só aparência o que víeis. Agora, bendizei o
        Senhor sobre a terra e dai graças a Deus. Eis que eu subo para junto de
        Quem me enviou. Escrevei tudo o que vos aconteceu. E ele subiu. Então
        levantaram-se, mas não o viram mais. Tobias 12, 11-20
      </Text>

      <H5 text="34 - Quais são as criaturas mais nobres que Deus criou?" />
      <Text className="text-base">
        As criaturas mais nobres, criadas por Deus, são os Anjos.
      </Text>
      <H5 text="35 - Quem são os Anjos?" />
      <Text className="text-base">
        Os Anjos são criaturas inteligentes e puramente espirituais, sem corpo.
      </Text>
      <H5 text="36 - Para que fim criou Deus os Anjos?" />
      <Text className="text-base">
        Deus criou os Anjos para ser por eles honrado e servido, e para os fazer
        eternamente felizes.
      </Text>
      <H5 text="37 - Que forma e que figura têm os Anjos?" />
      <Text className="text-base">
        Os Anjos não têm forma nem figura alguma sensível, porque são puros
        espíritos, criados por Deus para subsistirem, sem terem de estar unidos
        a corpo algum.
      </Text>
      <H5 text="38 - Por que então se representam os Anjos com formas sensíveis?" />
      <Text className="text-base">
        Representam-se os Anjos com formas sensíveis: para auxiliar a nossa
        imaginação; porque assim apareceram muitas vezes aos homens, como lemos
        na Sagrada Escritura.
      </Text>
      <H5 text="39 - Foram os Anjos todos fiéis a Deus?" />
      <Text className="text-base">
        Os Anjos não foram todos fiéis a Deus, mas muitos por soberba
        pretenderam ser iguais a Ele, e independentes do seu poder; e por este
        pecado foram excluídos para sempre do Paraíso, e condenados ao Inferno.
      </Text>
      <H5 text="40 - Como se chamam os Anjos excluídos para sempre do Paraíso, e condenados ao Inferno?" />
      <Text className="text-base">
        Os Anjos excluídos para sempre do Paraíso e condenados ao Inferno,
        chamam-se demônios, e o seu chefe chama-se Lúcifer ou Satanás.
      </Text>
      <H5 text="41 - Os demônios podem fazer-nos algum mal?" />
      <Text className="text-base">
        Sim, os demônios podem fazer-nos muito mal à alma e ao corpo, se Deus
        lhes der licença, sobretudo tentando-nos a pecar.
      </Text>
      <H5 text="42 - Por que nos tentam os demônios?" />
      <Text className="text-base">
        Os demônios tentam-nos pela inveja que nos têm e que lhes faz desejar a
        nossa eterna condenação, e por ódio a Deus, cuja imagem em nós
        resplandece. E Deus permite as tentações, a fim de que nós, vencendo-as
        com a sua graça, pratiquemos as virtudes e alcancemos merecimentos para
        o Céu.
      </Text>
      <H5 text="43 - Como podemos vencer as tentações?" />
      <Text className="text-base">
        Vencem-se as tentações com a vigilância, com a oração e com a
        mortificação cristã.
      </Text>
      <H5 text="44 - Os Anjos que se conservaram fiéis a Deus, como se chamam?" />
      <Text className="text-base">
        Os Anjos que se conservaram fiéis a Deus chamam-se Anjos bons, Espíritos
        celestes, ou simplesmente Anjos.
      </Text>
      <H5 text="45 - Que aconteceu aos Anjos que se conservaram fiéis a Deus?" />
      <Text className="text-base">
        Os Anjos que se conservaram fiéis a Deus, foram confirmados em graça,
        gozam para sempre da vista de Deus, amam-No, bendizem-No e louvam-No
        eternamente.
      </Text>
      <H5 text="46 - Deus serve-se dos Anjos como seus ministros?" />
      <Text className="text-base">
        Sim, Deus serve-se dos Anjos coma seus ministros, e especialmente confia
        a muitos dentre eles o ofício de nossos guardas e protetores.
      </Text>
      <H5 text="47 - Devemos ter particular devoção ao nosso Anjo da guarda?" />
      <Text className="text-base">
        Sim, devemos ter particular devoção ao nosso Anjo da guarda, honrá-lo,
        implorar o seu auxílio, seguir as suas inspirações rações e ser-lhe
        reconhecidos pela assistência contínua que nos dá.
      </Text>

      <H4 text="3º - Do Homem" />

      <Text className="text-base">
        O Senhor Deus formou, pois, o homem do barro da terra, e inspirou no seu
        rosto um sopro de vida, e o homem tornou-se alma (pessoa) vivente. Ora,
        o Senhor Deus tinha plantado, desde o princípio um paraíso de delícias,
        no qual Pôs o homem que tinha formado. E o Senhor Deus tinha produzido
        da terra toda a casta de árvores formosas à vista, e de frutos doces
        para comer; e a árvore da vida no meio do paraíso, e a árvore da ciência
        do bem e do mal. Deste lugar de delícias saía um rio para regar o
        paraíso, o qual dali se divide em quatro braços. O nome do primeiro é
        Fison, e é aquele que torneia todo o país de Evilat, onde se encontra o
        ouro. E o ouro deste pais é ótimo; ali (também) se acha o bdélio e a
        pedra ônix. O nome do segundo rio é Gion; este é aquele que torneia toda
        a terra de Etiópia. O nome, porém, do terceiro rio é Tigre, que corre
        para a banda dos assírios. E o quarto rio é o Eufrates. Tomou Pois, o
        Senhor Deus o homem, e colocou-o no paraíso de delícias, para que o
        cultivasse e guardasse. E deu-lhe este preceito, dizendo: Come de todas
        as árvores do paraíso mas não comas do fruto da árvore da ciência do bem
        e do mal; porque em qualquer dia que comeres dele, morrerás
        indubitavelmente. "Disse mais o Senhor Deus: Não é bom que o homem
        esteja só; façamos-lhe um adjutório semelhante a ele Tendo, pois, o
        Senhor Deus formado da terra todos os animais terrestres, e todas as
        aves do céu. levou-os diante de Adão, para este ver como os havia de
        chamar; e todo o nome que Adão pôs aos animais vivos, esse é o seu
        verdadeiro nome. E Adão pôs nomes convenientes a todos os animais, a
        todas as aves do céu, e a todos os animais selváticos; mas não se achava
        para Adão um adjutório semelhante a ele. Formação da mulher e
        instituição do matrimônio. Mandou, pois, o Senhor Deus um profundo sono
        a Adão; e, enquanto ele estava dormindo, tirou uma das suas costelas, e
        pôs carne no lugar dela. E da costela, que tinha tirado de Adão, formou
        o Senhor Deus uma mulher; e a levou a Adão. E Adão disse: Eis aqui agora
        o osso de meus ossos e a carne da minha carne; ela se chamará Virago,
        porque do varão foi tomada. Gênesis 2, 7-23
      </Text>

      <H5 text="48 - Qual é a criatura mais nobre que Deus colocou sobre a terra?" />
      <Text className="text-base">
        A criatura mais nobre que Deus colocou sobre a terra, é o homem.
      </Text>
      <H5 text="49 - Que é o homem?" />
      <Text className="text-base">
        O homem é uma criatura racional, composta de alma e corpo.
      </Text>
      <H5 text="50 - Que é a alma?" />
      <Text className="text-base">
        A alma é a parte mais nobre do homem, porque é substância espiritual,
        dotada de inteligência e de vontade, capaz de conhecer a Deus e de O
        possuir eternamente.
      </Text>
      <H5 text="51 - Pode-se ver e apalpar a alma humana?" />
      <Text className="text-base">
        Não se pode ver nem apalpar a nossa alma, porque é espírito.
      </Text>
      <H5 text="52 - Morre a alma humana com o corpo?" />
      <Text className="text-base">
        A alma humana nunca morre; a fé e a mesma razão provam que la é imortal.
      </Text>

      <H5 text="53 - É livre o homem nas suas ações?" />
      <Text className="text-base">
        Sim, o homem é livre nas suas ações; e cada qual sente, dentro de si
        mesmo, que pode fazer uma ação e deixar de fazê-la, ou fazer antes uma
        que outra.
      </Text>

      <H5 text="54 - Explicai com um exemplo a liberdade humana." />
      <Text className="text-base">
        Se eu disser voluntariamente uma mentira, sinto que poderia deixar de
        dizê-la, e calar-me, e que poderia também falar de outro modo, dizendo a
        verdade.
      </Text>
      <H5 text="55 - Por que se diz que o homem foi criado à imagem e semelhança de Deus?" />
      <Text className="text-base">
        Diz-se que o homem foi criado à imagem e semelhança de Deus, porque a
        alma humana é espiritual e racional, livre na sua ação, capaz de
        conhecer e de amar a Deus, e de gozá-Lo eternamente, perfeições que
        refletem em nós um raio da infinita grandeza de Deus.
      </Text>
      <H5 text="56 - Em que estado criou Deus os nossos primeiros pais Adão e Eva?" />
      <Text className="text-base">
        Deus criou Adão e Eva no estado de inocência e de graça; mas depressa o
        perderam, pelo pecado.
      </Text>
      <H5 text="57 - Além da inocência e da graça santificante, com cedeu Deus ao nossos primeiros pais outros dons?" />
      <Text className="text-base">
        Além da inocência e da graça santificante, Deus concedeu aos nossos
        primeiros pais outros dons, que eles deviam transmitir, juntamente com a
        graça santificante, aos seus descendentes, e eram: a integridade, isto
        é, a perfeita sujeição dos sentidos à razão; a imortalidade; a imunidade
        de todas as dores e misérias; e a ciência proporcionada ao seu estado.
      </Text>
      <H5 text="58 - Qual foi o pecado de Adão?" />
      <Text className="text-base">
        O pecado de Adão foi um pecado de soberba e de grave desobediência.
      </Text>
      <H5 text="59 - Qual foi o castigo do pecado de Adão e Eva?" />
      <Text className="text-base">
        Adão e Eva perderam a graça de Deus e o direito que tinham ao céu, foram
        expulsos do Paraíso Terrestre, sujeitos a muitas misérias na alma e no
        corpo, e condenados a morrer.
      </Text>
      <H5 text="60 - Se Adão e Eva não tivessem pecado, ficariam livres da morte?" />
      <Text className="text-base">
        Se Adão e Eva não tivessem pecado, mas se se tivessem conservado fiéis a
        Deus, depois de uma permanência feliz e tranquila neste mundo, teriam
        sido levados por Deus ao Céu, sem morrer, a gozar uma vida eterna e
        gloriosa.
      </Text>
      <H5 text="61 - Eram estes dons devidos ao homem?" />
      <Text className="text-base">
        Estes dons não eram devidos por nenhum título ao homem, mas eram
        absolutamente gratuitos e preternaturais; e por isso, tendo Adão
        desobedecido ao preceito divino, Deus pôde, sem injustiça, privar deles
        a Adão e a toda a sua descendência.
      </Text>
      <H5 text="62 - Este pecado, é próprio somente de Adão?" />

      <Text className="text-base">
        Este pecado não é só de Adão, mas é também nosso, embora por diverso
        título. É próprio de Adão, porque ele o cometeu com um ato da sua
        vontade, e por isso nele foi pessoal. É nosso, porque tendo Adão pecado
        como cabeça e fonte de todo o gênero humano, é transmitido por geração
        natural a todos os seus descendentes, e por isso para nós é pecado
        original.
      </Text>

      <H5 text="63 - Como é possível que o pecado original se transmita a todos os homens?" />
      <Text className="text-base">
        O pecado original transmite-se a todos os homens, porque tendo Deus
        conferido ao gênero humano, em Adão, a graça santificante e os outros
        dons preternaturais, com a condição de que ele não desobedecesse, e
        tendo este desobedecido tia sua qualidade de cabeça e pai do gênero
        humano, tornou a natureza humana rebelde a Deus. Por isso a natureza
        humana é transmitida a todos os descendentes de Adão num estado de
        rebeldia contra Deus, privada da graça divina e dos outros dons.
      </Text>

      <H5 text="64 - Contraem todos os homens o pecado original?" />
      <Text className="text-base">
        Sim, todos os homens contraem o pecado original, exceto a Santíssima
        Virgem que dele foi preservada por Deus, com singular privilégio, na
        previsão dos merecimentos de Jesus Cristo Nosso Salvador.
      </Text>
      <H5 text="65 - Depois do pecado de Adão, já não poderiam os homens salvar-se?" />
      <Text className="text-base">
        Depois do pecado de Adão, os homens já não poderiam salvar-se, se Deus
        não tivesse usado para com eles de misericórdia.
      </Text>
      <H5 text="66 - Qual foi a misericórdia de que Deus usou para com o gênero humano?" />
      <Text className="text-base">
        A misericórdia de que Deus usou para com o gênero humano, foi prometer
        logo a Adão um Redentor divino, ou Messias, enviá-Lo depois a seu tempo,
        para libertar os homens da escravidão do demônio e do pecado.
      </Text>
      <H5 text="67 - Quem é o Messias prometido?" />
      <Text className="text-base">
        O Messias prometido é Jesus Cristo, como nos ensina o segundo artigo do
        Credo.
      </Text>
      <Text className="h2">
        III - <Text className="em">Do segundo artigo do Credo</Text>
      </Text>

      <Text className="text-base">
        Imediatamente Jesus obrigou os seus discípulos a subir para a barca e a
        passarem antes dele à outra margem do lago, en quanto ele despedia as
        turbas, Despedidas as turbas, subiu só a um monte para orar. Quando
        chegou a noite, achava-se ali. Entretanto, a barca achava-se a muitos
        estádios da terra e era batida pelas ondas, porque o vento era
        contrário. Porém, na quarta vigília da noite, foi Jesus ter com eles,
        andando sobre o mar. E (os discípulos), quando o viram andar sobre o
        mar, turbaram-se dizendo : E um fantasma. E, com medo, começaram a
        gritar. Mas Jesus falou-lhes imediatamente, dizendo: Tende confiança;
        sou eu, não reinais. Respondendo Pedro, disse: Senhor, se és tu,
        manda-me ir até onde estás por sobre as águas. Ele disse: Vem. Descendo
        Pedro da barca, caminhava sobre a água para ir a Jesus. Vendo, porém,
        que o vento era forte, temeu, e, começando a submergir-se, gritou,
        dizendo: Senhor, salva-me! Imediata mente Jesus estendendo a mão, o
        tomou e lhe disse: Homem de pouca fé, porque duvidaste? Depois que
        subiram para a barca, o vento cessou. Os que estavam na barca
        aproximaram-se dele e o adoraram, dizendo: Verdadeiramente tu és o Filho
        de Deus. Mt 14, 22-33
      </Text>
      <H5 text="68 - Que nos ensina o segundo artigo do Credo: e em Jesus Cristo, um só seu Filho, Nosso Senhor?" />
      <Text className="text-base">
        O segundo artigo do Credo ensina-nos que o Filho de Deus é a segunda
        Pessoa da Santíssima Trindade; que Ele é Deus eterno, todo-poderoso,
        Criador e Senhor, como o Padre; que se fez homem para nos salvar; e que
        o Filho, de Deus feito homem se chama Jesus Cristo.
      </Text>
      <H5 text="69 - Por que se chama Filho a segunda Pessoa?" />
      <Text className="text-base">
        A segunda Pessoa chama-se Filho porque é gerada pelo Padre por via de
        inteligência, desde toda da ti eternidade; e por este motivo se chama
        também Verbo eterno do Padre.
      </Text>
      <H5 text="70 - Sendo também nós filhos de Deus, por que Jesus Cristo se chama Filho único de Deus Padre?" />
      <Text className="text-base">
        Jesus Cristo chama-se Filho único de Deus porque só Ele é por natureza
        seu Filho, e nós seus filhos por criação e por adoção.
      </Text>
      <H5 text="71 - Por que Jesus Cristo se chama Nosso Senhor?" />
      <Text className="text-base">
        Chama-se Jesus Cristo Nosso Senhor não se porque, enquanto Deus,
        juntamente com o Padre e o Espírito Santo, rios criou, como também
        porque, em enquanto Deus e homem rios remiu com seu Sangue.
      </Text>
      <H5 text="72 - Por que o Filho de Deus feito homem se o chama Jesus?" />
      <Text className="text-base">
        O Filho de Deus feito homem chama-se Jesus que quer dizer Salvador,
        porque nos salvou da morte eterna que merecíamos por nossos pecados.
      </Text>

      <H5 text="73 - Quem deu o nome de Jesus ao Filho de feito homem?" />
      <Text className="text-base">
        Foi o mesmo Padre Eterno que deu o nome de Jesus ao Filho de Deus feito
        homem, por meio do Arcanjo São Gabriel, quando este anunciou à Virgem
        Santíssima o mistério da Encarnação.
      </Text>

      <H5 text="74 - Por que o Filho de Deus feito homem se chama também Cristo?" />
      <Text className="text-base">
        O filho de Deus feito homem chama-se também Cristo, que quer dizer
        Ungido e consagrado, porque antigamente ungiam-se os reis, os sacerdotes
        e os profetas e Jesus é Rei dos reis, Sumo Sacerdote e Sumo Profeta.
      </Text>

      <H5 text="75 - Foi Jesus Cristo verdadeiramente ungido e consagrado com unção corporal?" />
      <Text className="text-base">
        A unção de Jesus Cristo não foi corporal, como a dos antigos reis,
        sacerdotes e profetas, mas toda espiritual e divina, porque a plenitude
        da divindade habita n'Ele substancialmente.
      </Text>

      <H5 text="76 - Tiveram os homens algum conhecimento de Jesus Cristo antes da sua vinda?" />
      <Text className="text-base">
        Sim, os homens tiveram conhecimento de Jesus Cristo antes da sua vinda,
        pela promessa do Messias, que Deus fez aos nossos primeiros pais Adão e
        Eva, a qual renovou aos santos Patriarcas; e também pelas profecias e
        muitas figuras que O designavam.
      </Text>

      <H5 text="77 - Como sabemos nós que Jesus Cristo é verdadeira mente o Messias e o Redentor prometido?" />
      <Text className="text-base">
        Sabemos que Jesus Cristo é verdadeiramente o Messias e o Redentor
        prometido, porque n'Ele se cumpriu:
      </Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1º - tudo o que anunciavam as profecias;
        </Text>
        <Text className="li text-justify">
          2º - tudo o que representavam as figuras do Antigo Testamento.
        </Text>
      </View>
      <H5 text="78 - Que prediziam as profecias acerca do Redentor?" />
      <Text className="text-base">
        As profecias prediziam acerca do Redentor: a tribo e a família da qual
        devia sair; o lugar e o tempo do nascimento; os seus milagres e as mais
        minuciosas circunstâncias da sua Paixão e morte; a sua ressurreição e
        ascensão ao Céu; o seu reino espiritual, universal e perpétuo, que é a
        Santa Igreja Católica.
      </Text>

      <H5 text="79 - Quais são as principais figuras do Redentor no Antigo Testamento?" />
      <Text className="text-base">
        As principais figuras do Redentor no Antigo Testamento são o inocente
        Abel, o sumo sacerdote Melquisedec, o sacrifício de Isaac, José vendido
        pelos irmãos, o profeta Jonas, o cordeiro pascal e a serpente de bronze,
        levantada por Moisés tio deserto.
      </Text>

      <H5 text="80 - Como sabemos nós que Jesus Cristo é verdadeiro Deus?" />
      <Text className="text-base">
        Sabemos que Jesus Cristo é verdadeiro Deus:
      </Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1º - pelo testemunho do Padre Eterno, quando disse: Este é O meu Filho
          muito amado, no qual tenho posto todas as minhas complacências:
          ouvi-O;
        </Text>
        <Text className="li text-justify">
          2º - pela afirmação do próprio Jesus Cristo, confirmada com os mais
          estupendos milagres;
        </Text>
        <Text className="li text-justify">
          3º - pela doutrina dos Apóstolos;
        </Text>
        <Text className="li text-justify">
          4º - pela tradição constante da Igreja Católica.
        </Text>
      </View>
      <H5 text="81 - Quais são os principais milagres operados por Jesus Cristo?" />
      <Text className="text-base">
        Os principais milagres operados por Jesus Cristo são, além da sua
        ressurreição, a saúde restituída aos enfermos, a vista aos cegos, o
        ouvido aos surdos, a vida aos mortos.
      </Text>

      <Text className="h2">
        IV - <Text className="em">Do terceiro artigo do Credo</Text>
      </Text>

      <Text className="text-base">
        No sexto mês, o anjo Gabriel foi enviado da parte de Deus para uma
        cidade da Galileia, chamada Nazaré, a uma virgem, prometida em casamento
        a um homem, chamado José, da casa de Davi. O nome da virgem era Maria.
        Entrando onde ela estava, o anjo lhe disse: Deus te salve, cheia de
        graça, o Senhor está contigo! Ao ouvir as palavras, ela se perturbou e
        refletia no que poderia significar a saudação. Mas o anjo lhe falou: Não
        tenhas medo, Maria, porque encontraste graça diante de Deus. Eis que
        conceberás e darás à luz um filho e lhe porás o nome de Jesus. Ele será
        grande e será chamado Filho do Altíssimo. O Senhor Deus lhe dará o trono
        de Davi, seu pai. Ele reinará na casa de Jacó pelos séculos e seu reino
        não terá fim. Maria perguntou ao anjo: Como acontecerá isso, pois não
        conheço homem? Em resposta o anjo lhe disse: O Espírito Santo virá sobre
        ti e o poder do Altíssimo te cobrirá com sua sombra; e por isso mesmo
        Santo que vai nascer de ti será chamado Filho de Deus. Eis que também
        Isabel, tua parenta, concebeu um filho em sua velhice, e este é o sexto
        mês daquela que era considerada estéril, porque para Deus nada é
        impossível. Disse então Maria: Eis aqui a serva do Senhor. Aconteça
        comigo segundo tua palavra! E o anjo afastou-se dela. Luc 1, 26-33
      </Text>

      <H5 text="82 - Que nos ensina o terceiro artigo do Credo: o qual foi concebido pelo poder do Espírito Santo, nasceu de Maria Virgem?" />
      <Text className="text-base">
        O terceiro artigo do Credo ensinam-nos que o Filho de Deus tomou um
        corpo e uma alma, como nós temos, no seio puríssimo de Maria Santíssima,
        pelo poder do Espírito Santo, e que nasceu desta Virgem.
      </Text>

      <H5 text="83 - Concorreram o Padre e o Filho também para for mar o corpo e para criar a alma de Jesus Cristo?" />
      <Text className="text-base">
        Sim, para formar o corpo e para criar a alma de Jesus Cristo,
        concorreram todas as três Pessoas divinas.
      </Text>

      <H5 text="84 - Por que se diz só: foi concebido pelo poder do Espírito Santo?" />
      <Text className="text-base">
        Diz-se só: foi concebido pelo poder do Espírito Santo, porque a
        Encarnação do Filho de Deus é obra de bondade e de amor, e as obras de
        bondade e de amor atribuem-se ao Espírito Santo.
      </Text>

      <H5 text="85 - Fazendo-se homem, deixou o Filho de ser Deus?" />
      <Text className="text-base">
        O Filho de Deus, fazendo-se homem, não deixou de ser Deus.
      </Text>

      <H5 text="86 - Então Jesus Cristo é Deus e homem ao mesmo tempo?" />
      <Text className="text-base">
        Sim, o Filho de Deus encarnado, isto é, Jesus Cristo, é Deus e homem ao
        mesmo tempo, perfeito Deus e perfeito homem.
      </Text>

      <H5 text="87 - Há então em Jesus Cristo duas naturezas?" />
      <Text className="text-base">
        Sim, em Jesus Cristo, que é Deus e homem, há duas naturezas, a divina e
        a humana.
      </Text>

      <H5 text="88 - E haverá também em Jesus Cristo duas pessoas, a divina e a humana?" />
      <Text className="text-base">
        No Filho de Deus feito homem há só uma Pessoa, que é a divina.
      </Text>

      <H5 text="89 - Quantas vontades há em Jesus Cristo?" />
      <Text className="text-base">
        Em Jesus Cristo há duas vontades, uma divina, outra humana.
      </Text>

      <H5 text="90 - Tinha Jesus Cristo vontade livre?" />
      <Text className="text-base">
        Sim, Jesus Cristo tinha vontade livre, mas não podia fazer o mal, porque
        poder fazer o mal é defeito, e não perfeição da liberdade.
      </Text>

      <H5 text="91 - Serão uma e a mesma Pessoa o Filho de Deus e o Filho de Maria Santíssima?" />
      <Text className="text-base">
        O Filho de Deus e o Filho de Maria Santíssima são a mesma Pessoa, isto
        é, Jesus Cristo, verdadeiro Deus e verdadeiro homem.
      </Text>

      <H5 text="92 - E a Virgem Maria, será Mãe de Deus?" />
      <Text className="text-base">
        Sim, Maria Santíssima é Mãe de Deus, porque é Mãe de Jesus Cristo, que é
        verdadeiro Deus.
      </Text>

      <H5 text="93 - De que maneira veio Maria a ser Mãe de Jesus Cristo?" />
      <Text className="text-base">
        Maria veio a ser Mãe de Jesus Cristo unicamente por virtude do Espírito
        Santo.
      </Text>

      <H5 text="94 É de fé que Maria foi sempre Virgem?" />
      <Text className="text-base">
        Sim, é de fé que Maria Santíssima foi sempre Virgem, e é chamada a
        Virgem por excelência.
      </Text>

      <Text className="h2">
        V - <Text className="em">Do quarto artigo do Credo</Text>
      </Text>

      <Text className="text-base">
        Levaram, pois, Jesus da casa de Caifás ao Pretório. Era de manhã. Não
        entraram no Pretório para se não contaminarem, a fim de comerem a
        Páscoa. Pilatos, pois, Saiu fora para lhes falar e disse: Que acusação
        apresentais contra este homem? Responderam e disseram lhe: Se este não
        fosse um malfeitor, não o entregaríamos nas tuas mãos. Pilatos
        disse-lhes então: Tomai-o vós e julgai-o segundo a vossa lei, Mas os
        judeus disseram-lhe: A nós não nos é permitido matar ninguém. Para se
        cumprir a palavra que Jesus dissera, significando de que morte havia de
        morrer. Tornou, pois, Pilatos a entrar no Pretório, chamou Jesus e
        disse-lhe: Tu és o rei dos judeus? Respondeu Jesus: Tu dizes isso de ti
        mesmo, ou foram outros que to disseram de mim? Respondeu Pilatos:
        Porventura sou eu judeu? A tua nação e os pontífices são os que te
        entregaram nas minhas mãos. Que fizeste tu? Respondeu Jesus: O meu reino
        não é deste mundo; se o meu reino fosse deste inundo, certamente que os
        meus ministros se haviam de esforçar para que eu não fosse entregue aos
        judeus; mas o meu reino não é daqui. Disse-lhe então Pilatos: Logo tu és
        rei? Respondeu Jesus: Tu dizes, sou rei, Nasci, e vim ao mundo para dar
        testemunho da verdade; todo o que está pela verdade. ouve a minha voz.
        "Disse lhe Pilatos: O que é a verdade? Dito isto, tornou a sair, para ir
        ter com os judeus e disse-lhes: Não encontro nele crime algum. Ora é
        costume que eu pela Páscoa, vos solte um prisioneiro; quereis. pois, que
        vos solte o rei dos judeus? Então gritaram todos novamente, dizendo: Não
        este. mas Barrabás. Ora Barrabás era um salteador. Pilatos tomou então
        Jesus e mandou-o flagelar. Os soldados, tecendo uma coroa de espinhos,
        puseram-lha sobre a cabeça e revestiram- no com um manto de púrpura.
        Depois, aproximavam-se dele e diziam-lhe: Salve, rei dos judeus! e
        davam-lhe bofetadas. Saiu Pilatos ainda entra vez fora, e disse-lhes:
        Eis que vo-lo trago fora, para que conheçais que não encontro nele crime
        algum. Saiu, pois, Jesus trazendo a coroa de espinhos e o manto de
        Púrpura. E (Pilatos) Eis aqui o homem. Então os, príncipes dos
        sacerdotes e os ministros, tendo-o visto, gritaram, dizendo:
        Crucifica-o, crucifica-o! Disse-lhes Pilatos: Tomai-o vós e
        crucificai-o, porque eu não en centro nele crime algum Responderam-lhe
        os judeus: Nós temos uma lei e segundo a lei deve morrer Porque se fez
        Filho de Deus. Pilatos, tendo ouvido estas palavras temeu ainda mais.
        Entrou novamente no Pretório e disse a Jesus: Donde és tu? Mas Jesus não
        lhe deu resposta Então disse-lhe Pilatos: Não me falas? Não vês que
        tenho poder para te soltar, e também para te crucificar? Respondeu
        Jesus: Tu não terias poder algum sobre mim, se não fosse dado do alto.
        Por isso o que me entregou a ti, tem maio pecado. Desde este momento,
        procurava Pilatos soltá-lo. Porém os judeus gritavam, dizendo: Se soltas
        este, não é, amigo de César, Porque todo o que se faz rei, declara-se
        contra César. Pilatos, tendo ouvido estas palavras, conduziu Jesus para
        fora e sentou se no seu tribunal. no lugar chamado Lithostrotos, em
        hebraico Gabbatha. Era a Parásceve (ou dia de preparação) da Páscoa,
        cerca da hora sexta, e disse aos judeus: Eis o vosso rei. Mas eles
        gritaram: Tira-o, tira-o, crucifica-o! Disse-lhes Pilatos: Pois eu, hei
        de crucificar o vosso rei? Responderam os pontífices: Não rei temos rei,
        senão César. Então entregou-Lho, Para que fosse crucificado. S. João,
        18, 28-40; 19, 1-23
      </Text>

      <H5 text="95 - Que nos ensina o quarto artigo do Credo: padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado?" />
      <Text className="text-base">
        O quarto artigo do Credo ensina-nos que Jesus Cristo, para remir o mundo
        com o seu precioso Sangue, padeceu sob Pôncio Pilatos, governador da
        Judeia, e morreu no madeiro da Cruz, da qual foi descido, e no fim
        sepultado.
      </Text>

      <H5 text="96 - Que quer dizer a palavra padeceu?" />
      <Text className="text-base">
        A palavra padeceu exprime todos os sofrimentos suportados por Jesus
        Cristo na sua Paixão.
      </Text>

      <H5 text="97 - Padeceu Jesus Cristo enquanto Deus ou enquanto homem?" />
      <Text className="text-base">
        Jesus Cristo padeceu enquanto homem somente, porque enquanto Deus não
        podia padecer nem morrer.
      </Text>

      <H5 text="98 - Que espécie de suplício era o da cruz?" />
      <Text className="text-base">
        O suplício da cruz era, naqueles tempos, o mais cruel e ignominioso de
        todos os suplícios.
      </Text>

      <H5 text="99 - Quem foi que condenou Jesus Cristo a ser crucificado?" />
      <Text className="text-base">
        Quem condenou Jesus Cristo a ser crucificado foi Pôncio Pilatos,
        governador da Judeia, o qual no entanto reconhecera a sua inocência; mas
        cedeu covardemente às ameaças dos judeus.
      </Text>

      <H5 text="100 - Não poderia livrar-se Jesus Cristo das mãos dos judeus ou de Pilatos?" />
      <Text className="text-base">
        Sim, Jesus Cristo podia livrar-se das mãos dos judeus ou de Pilatos;
        mas, conhecendo que a vontade do seu Eterno Padre era que Ele padecesse
        e morresse pela nossa salvação, submeteu-se voluntariamente, e até saiu
        ao encontro dos seus inimigos, e deixou-se espontaneamente prender e
        conduzir à morte.
      </Text>

      <H5 text="101 - Onde foi crucificado Jesus Cristo?" />
      <Text className="text-base">
        Jesus Cristo foi crucificado sobre o monte Calvário.
      </Text>

      <H5 text="102 - Que fez Jesus Cristo na Cruz?" />
      <Text className="text-base">
        Jesus Cristo na Cruz orou pelos seus inimigos, deu por Mãe ao discípulo
        São João, e na pessoa dele a nós todos, a sua mesma Mãe, Maria
        Santíssima; ofereceu a sua morte em sacrifício, e satisfez à justiça de
        Deus pelos pecados dos homens.
      </Text>

      <H5 text="103 - Não bastaria que viesse um Anjo satisfazer por nós?" />
      <Text className="text-base">
        Não bastava que viesse um Anjo satisfazer por nós, porque a ofensa feita
        a Deus pelo pecado era, sob certo aspecto, infinita; e para satisfazê-la
        requeria-se uma pessoa que tivesse merecimento infinito.
      </Text>

      <H5 text="104 - Para satisfazer à justiça divina era necessário que Jesus Cristo fosse Deus e homem ao mesmo tempo?" />
      <Text className="text-base">
        Sim, era necessário que Jesus Cristo fosse homem para poder padecer e
        morrer, e era necessário que fosse Deus, para que os seus sofrimentos
        fossem de valor infinito.
      </Text>

      <H5 text="105 - Por que razão era necessário que os merecimentos de Jesus Cristo fossem de valor infinito?" />
      <Text className="text-base">
        Era necessário que os merecimentos de Jesus Cristo fossem de valor
        infinito, porque a majestade de Deus, ofendida pelo pecado, é infinita.
      </Text>

      <H5 text="106 - Era necessário que Jesus Cristo padecesse tanto?" />
      <Text className="text-base">
        Não era absolutamente necessário que Jesus Cristo padecesse tanto,
        porque o menor dos seus sofrimentos bastaria para a nossa redenção, pois
        cada um dos seus atos era de valor infinito.
      </Text>

      <H5 text="107 - Por que então Jesus quis sofrer tanto?" />
      <Text className="text-base">
        Jesus quis sofrer tanto, para satisfazer mais abundantemente à justiça
        divina, para nos mostrar mais claramente o seu amor, e para nos inspirar
        maior horror ao pecado.
      </Text>

      <H5 text="108 - Aconteceram prodígios na morte de Jesus?" />
      <Text className="text-base">
        Sim, na morte de Jesus obscureceu-se o sol, tremeu a terra, abriram-se
        algumas sepulturas, e muitos mortos ressuscitaram.
      </Text>

      <H5 text="109 - Onde foi sepultado o corpo de Jesus Cristo?" />
      <Text className="text-base">
        O corpo de Jesus Cristo foi sepultado num túmulo novo, escavado na rocha
        do monte, pouco distante do lugar onde Ele foi crucificado.
      </Text>

      <H5 text="110 - Na morte de Jesus Cristo, separou-se a divindade do corpo e dá alma?" />
      <Text className="text-base">
        Na morte de Jesus Cristo a divindade não se separou nem do corpo nem da
        alma; mas só a alma se separou do corpo.
      </Text>

      <H5 text="111 - Por quem morreu Jesus Cristo?" />
      <Text className="text-base">
        Jesus Cristo morreu pela salvação de todos os homens, e satisfez por
        todos.
      </Text>

      <H5 text="112 - Se Jesus Cristo morreu pela salvação de todos, por que nem todos se salvam?" />
      <Text className="text-base">
        Jesus Cristo morreu por todos, mas nem todos se salvam, porque nem todos
        O reconhecem, nem todos seguem a sua lei, nem todos se servem dos meios
        de santificação que nos deixou.
      </Text>

      <H5 text="113 - Para nos salvarmos não tenha morrido por nós?" />
      <Text className="text-base">
        Para nos salvarmos não basta que Jesus basta que Jesus Cristo tenha
        morrido por nós, mas é necessário que sejam aplicados, a cada um de nós,
        o fruto e os merecimentos da sua Paixão e morte, aplicação que se faz,
        sobretudo, por meios dos Sacramentos, instituídos para este fim pelo
        mesmo Jesus Cristo; e como muitos ou não recebem os Sacramentos, ou não
        os recebem com as condições devidas, eles tornam inútil para si próprios
        a morte de Jesus Cristo.
      </Text>

      <Text className="h2">
        VI - <Text className="em">Do quinto artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        No dia seguinte, isto é, depois da sexta-feira, os sumos sacerdotes e os
        fariseus foram a Pilatos e disseram: Senhor, lembramo-nos de que aquele
        impostor disse em vida: Depois de três dias ressuscitarei. Manda, pois,
        guardar o sepulcro até o terceiro dia para não acontecer que os seus
        discípulos venham roubar o corpo e digam ao povo: Ele ressuscitou dos
        mortos. E esta última impostura será pior do que a primeira. Pilatos
        lhes disse: Vós tendes a guarda. Ide e guardai-o como bem entendeis.
        Eles foram e puseram guarda ao sepulcro depois de selarem a pedra.
        Passado o sábado, ao amanhecer do primeiro dia da semana, Maria Madalena
        e a outra Maria foram ver o sepulcro. Subitamente houve um grande
        terremoto, pois um anjo do Senhor desceu do céu, aproximou-se, rolou a
        pedra do sepulcro e sentou-se nela. O seu aspecto era como o de um
        relâmpago e sua veste, branca como a neve. Paralisados de medo, os
        guardas ficaram como mortos. O anjo, dirigindo-se às mulheres, disse:
        Não tenhais medo. Sei que procurais Jesus, o crucificado. Ele não está
        aqui! Ressuscitou conforme tinha dito. Vinde ver o lugar onde estava.
        Ide logo dizer a seus discípulos que ele ressuscitou dos mortos e que
        vai à frente de vós para a Galileia. Lá o vereis. Eis o que eu tinha a
        dizer. Jesus aparece às mulheres. Afastando-se logo do túmulo, cheias de
        temor e grande alegria, correram para dar a notícia aos discípulos. De
        repente, Jesus saiu ao encontro delas e disse-lhes: Salve! Elas se
        aproximaram, abraçaram-lhe os pés e se prostraram diante dele.
        Disse-lhes então Jesus: Não tenhais medo! Ide dizer a meus irmãos que se
        dirijam à Galileia elá me verão. Mt 27, 62-66; 28, 1-10.
      </Text>

      <H5 text="114 - Que nos ensina o quinto artigo do Credo: desceu aos infernos, ao terceiro dia ressurgiu dos mortos?" />
      <Text className="text-base">
        O quinto artigo do Credo ensina-nos que a alma de Jesus Cristo, assim
        que se separou do corpo, foi ao Limbo e que, no terceiro dia, se uniu de
        novo ao corpo, para nunca mais dele se separar.
      </Text>

      <H5 text="115 - Que se entende aqui por inferno?" />
      <Text className="text-base">
        Por inferno entende-se aqui o Limbo, isto é, aquele lugar onde estavam
        as almas dos justos, esperando ti redenção de Jesus Cristo.
      </Text>

      <H5 text="116 - Por que as almas dos justos não foram introduzidas no Paraíso antes da morte de Jesus Cristo?" />
      <Text className="text-base">
        As almas dos justos não foram introduzidas no Paraíso antes da morte de
        Jesus Cristo, porque pelo pecado de Adão o Paraíso estava fechado; e
        convinha que Jesus Cristo, cuja morte o reabriu, fosse o primeiro a
        entrar nele.
      </Text>

      <H5 text="117 - Por que Jesus Cristo quis esperar até ao terceiro dia para ressuscitar?" />
      <Text className="text-base">
        Jesus Cristo quis demorar até ao terceiro dia para ressuscitar, para
        mostrar de modo insofismável, que verdadeiramente tinha morrido.
      </Text>

      <H5 text="118 - Foi a ressurreição de Jesus Cristo semelhante à dos outros homens ressuscitados?" />
      <Text className="text-base">
        A ressurreição de Jesus Cristo não foi semelhante à dos outros homens
        ressuscitados, porque Jesus Cristo ressuscitou por virtude própria, e os
        outros foram ressuscitados por virtude de Deus.
      </Text>

      <Text className="h2">
        VII - <Text className="em">Do sexto artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Os que prenderam Jesus levaram-no a Caifás, o Sumo Sacerdote, onde os
        escribas e anciãos se haviam reunido. Pedro o seguiu de longe até o
        pátio do Sumo Sacerdote. Entrou ali e sentou-se junto com os guardas
        para ver como ia terminar. Os sumos sacerdotes e todo o Sinédrio
        procuravam falsos testemunhos contra Jesus para condená-lo à morte. Mas
        não os encontraram, embora muitas testemunhas falsas se tivessem
        apresentado. Finalmente apresentaram-se duas testemunhas que disseram:
        Este homem falou: Posso destruir o Santuário de Deus e em três dias
        reconstruí-lo. Então o Sumo Sacerdote levantou-se e perguntou: Nada
        respondes ao que estes depõem contra ti? Jesus, porém, permanecia
        calado. O Sumo Sacerdote lhe disse: Conjuro-te pelo Deus vivo: dize-nos
        se tu és o Cristo, o Filho de Deus. Jesus respondeu-lhe: Tu o disseste.
        Entretanto eu vos digo: Um dia vereis o Filho do homem sentado à direita
        do Todo-poderoso, vindo sobre as nuvens do céu. Então o Sumo Sacerdote
        rasgou as vestes e disse: Blasfemou! Que necessidade temos de mais
        testemunhas? Acabais de ouvir a blasfêmia. O que vos parece? Eles
        responderam: É réu de morte. Então começaram a cuspir-lhe no rosto e a
        dar lhe bofetadas, e outros a ferir-lhe o rosto ; e diziam: Adivinha, ó
        Cristo, quem foi que te bateu? Mt 7, 57-68
      </Text>

      <H5 text="119 - Que nos ensina o sexto artigo do Credo: subiu ao Céu, está sentado à direita de Deus Padre todo-poderoso?" />
      <Text className="text-base">
        O sexto artigo do Credo ensina-nos que Jesus quarenta dias depois da sua
        ressurreição na presença dos seus discípulos, subiu por Si mesmo tio Céu
        e que sendo, enquanto Deus, igual tio Padre Eterno na Glória, enquanto
        homem, foi elevado acima de todos os Anjos e de todos os Santos, e
        constituído Senhor de todas as coisas.
      </Text>

      <H5 text="120 - Por que Jesus Cristo, depois da sua ressurreição, esteve quarenta dias na terra, antes de subir ao Céu?" />
      <Text className="text-base">
        Jesus Cristo, depois da sua ressurreição, esteve quarenta dias na terra,
        antes de subir ao Céu, para provar, com várias aparições, que
        ressuscitara verdadeiramente, e para instruir melhor os Apóstolos e
        confirmá-los nas verdades da fé.
      </Text>

      <H5 text="121 - Por que Jesus Cristo subiu ao Céu?" />
      <Text className="text-base">Jesus Cristo subiu ao Céu:</Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1º - para tomar posse do seu reino, que havia merecido com sua morte;
        </Text>
        <Text className="li text-justify">
          2º - para preparar o nosso lugar na glória, e para ver nosso Mediador
          e Advogado junto do Padre Eterno;
        </Text>
        <Text className="li text-justify">
          3º - para enviar o Espírito Santo aos seus Apóstolos.
        </Text>
      </View>
      <H5 text="122 - Por que se diz de Jesus Cristo que subiu ao Céu, e de sua Mãe Santíssima se diz que foi levada para o Céu?" />
      <Text className="text-base">
        Diz-se de Jesus Cristo que subiu, e de sua Mãe Santíssima que foi levada
        ao Céu, porque Jesus Cristo, sendo Homem-Deus, subiu ao Céu por virtude
        própria; mas sua Mãe, que era criatura, embora a mais digna de todas,
        foi levada ao Céu por virtude de Deus.
      </Text>

      <H5 text="123 - Explicai as palavras: Está sentado à direita de Deus Padre todo-poderoso." />
      <Text className="text-base">
        As palavras está sentado significam ti posse pacífica que Jesus Cristo
        tem da sua glória, o as palavras à direita de Deus Padre todo-poderoso
        exprimem que Ele, tem o lugar de honra sobre todas as criaturas.
      </Text>

      <Text className="h2">
        VIII - <Text className="em">Do sétimo artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Quando o Filho do homem vier em sua glória com todos os seus anjos,
        então se assentará no seu trono glorioso. Em sua presença, todas as
        nações se reunirão e ele vai separar uns dos outros, como o pastor
        separa as ovelhas dos cabritos. Colocará as ovelhas à sua direita e os
        cabritos, à esquerda. E o rei dirá aos que estiverem à sua direita:
        Vinde, abençoados por meu Pai! Tomai posse do Reino preparado para vós
        desde a criação do mundo. Porque tive fome e me destes de comer, tive
        sede e me destes de beber, fui peregrino e me acolhestes e, estive nu e
        me vestistes, enfermo e me visitastes, estava na cadeia e viestes
        ver-me. E os justos perguntarão: Senhor, quando foi que te vimos com
        fome e te alimentamos, com sede e te demos de beber? Quando foi que te
        vimos peregrino e te acolhemos, nu e te vestimos? Quando foi que te
        vimos enfermo ou na cadeia e te fomos visitar? E o rei dirá: Eu vos
        garanto: todas as vezes que fizestes isso a um desses meus irmãos
        menores, a mim o fizestes. Depois dirá aos da esquerda: Afastai-vos de
        mim, malditos, para o fogo eterno, preparado para o diabo e seus anjos.
        Porque eu tive fome e não me destes de comer, tive sede e não me destes
        de beber, fui peregrino e não me destes abrigo; estive nu e não me
        vestistes, enfermo e na cadeia e não me visitastes. E eles perguntarão:
        Senhor, quando foi que te vimos faminto ou sedento, peregrino ou enfermo
        ou na cadeia e não te servimos? E ele lhes responderá: Eu vos garanto:
        quando deixastes de fazer isso a um desses pequeninos, foi a mim que não
        o fizestes. E estes irão para o castigo eterno, enquanto os justos, para
        a vida eterna. Mt 25, 31-46
      </Text>

      <H5 text="124 - Que nos ensina o sétimo artigo do Credo: de onde ha de vir a julgar os vivos e os mortos?" />
      <Text className="text-base">
        O sétimo artigo do Credo ensina-nos que no fim do mundo Jesus Cristo
        cheio de glória e de majestade, há de vir do Céu para julgar todos os
        homens, bons e maus, e para dar a cada um o prêmio ou o castigo que
        tiver merecido.
      </Text>

      <H5 text="125 - Se cada um, logo depois da morte há de ser julgado por Jesus Cristo no juízo particular, por que havemos de ser julgados todos no Juízo universal?" />
      <Text className="text-base">
        Havemos de ser julgados todos no Juízo universal por várias razões:
      </Text>

      <View className="list-styled">
        <Text className="li text-justify">1º - para glória de Deus;</Text>
        <Text className="li text-justify">
          2º - para glória de Jesus Cristo;
        </Text>
        <Text className="li text-justify">3º - para glória dos Santos;</Text>
        <Text className="li text-justify">4º - para confusão dos maus;</Text>
        <Text className="li text-justify">
          5º - finalmente para que o corpo, depois da ressurreição universal,
          tenha juntamente com a alma a sua sentença de prêmio ou de castigo.
        </Text>
      </View>
      <H5 text="126 - Como é que no Juízo universal há de manifestar-se a glória de Deus?" />
      <Text className="text-base">
        No Juízo universal há de manifestar-se a de Deus, porque todos hão de
        reconhecer a justiça com que Deus governa o mundo, embora se vejam às
        vezes os bons a sofrer e o maus em prosperidade.
      </Text>

      <H5 text="127 - Como é que no Juízo universal há de manifestar-se glória de Jesus Cristo?" />
      <Text className="text-base">
        No Juízo universal há de manifestar-se a glória de Jesus Cristo, porque,
        tendo Ele sido injustamente condenado pelos homens, aparecerá então à
        face do mundo inteiro como Juiz supremo de todos.
      </Text>

      <H5 text="128 - Como é que no Juízo universal há de manifestar-se a glória dos Santos?" />
      <Text className="text-base">
        No Juízo universal há de manifestar-se a glória dos Santos, porque
        muitos deles, que morreram desprezados pelos maus, hão de ser
        glorificados em presença de todos os homens.
      </Text>

      <H5 text="129 - No Juízo universal qual será a confusão dos maus?" />
      <Text className="text-base">
        No Juízo universal a confusão dos maus será enorme, especialmente a
        daqueles que oprimiram os justos, e ti daqueles que, durante a vida,
        procuraram ser tidos, falsamente, por homens virtuosos e bons, pois
        verão manifestados, à vista de todo o mundo, os pecados que cometeram
        ainda os mais ocultos.
      </Text>

      <Text className="h2">
        IX - <Text className="em">Do oitavo artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De
        repente veio do céu um ruído, como de um vento impetuoso, que encheu
        toda a casa em que estavam sentados. Viram aparecer, então, uma espécie
        de línguas de fogo, que se repartiram e foram pousar sobre cada um
        deles. Todos ficaram cheios do Espírito Santo e começaram a falar em
        outras línguas, conforme o Espírito Santo lhes concedia que falassem.
        Ora, em Jerusalém moravam judeus, homens piedosos, de todas as nações
        que há debaixo do céu. Ouvindo aquele ruído, acorreu muita gente e se
        maravilhava de que cada um os ouvisse falar em sua própria língua.
        Profundamente impressionados, manifestavam sua admiração e diziam: Estes
        que estão falando não são todos galileus? Como, então, todos nós os
        ouvimos falar, cada um em nossa própria língua materna? Partos, medos,
        elamitas, os que habitam a Mesopotâmia, a Judeia, a Capadócia, o Ponto,
        a Ásia, a Frígia, a Panfília, o Egito e as províncias da Líbia, próximas
        de Cirene, peregrinos romanos, judeus ou convertidos ao judaísmo,
        cretenses e árabes todos os ouvimos falar as grandezas de Deus em nossas
        próprias línguas. Atônitos e fora de si, diziam uns para os outros: O
        que quer dizer isso? Outros, zombando, diziam: Eles estão cheios de
        vinho. Atos 2, 1-13
      </Text>

      <H5 text="130 - Que nos ensina o oitavo artigo do Credo: creio no Espírito Santo?" />
      <Text className="text-base">
        O oitavo artigo do Credo ensina-nos que existe o Espírito Santo,
        terceira Pessoa da Santíssima Trindade, e que Ele é Deus eterno,
        infinito, onipotente, Criador e Senhor de todas as coisas, como o Padre
        e o Filho.
      </Text>

      <H5 text="131 - De quem procede o Espírito Santo?" />
      <Text className="text-base">
        O Espírito Santo procede do Padre e do Filho como de um só princípio,
        por via de vontade e de amor.
      </Text>

      <H5 text="132 - Se o Filho procede do Padre, e o Espírito Santo procede do Padre e do Filho, parece que o Padre e o Filho existem antes do Espírito Santo. Como então se diz que são eternas todas as três Pessoas divinas?" />
      <Text className="text-base">
        Diz-se que são eternas todas as três Pessoas divinas, porque o Padre
        gerou o Filho desde toda a eternidade, e do Padre e do Filho procede o
        Espírito Santo, também desde toda a eternidade.
      </Text>

      <H5 text="133 - Por que a tecera Pessoa da Santíssima Trindade se designas particularmente com o nome de Espírito Santo?" />
      <Text className="text-base">
        Designa-se a terceira Pessoa da Santíssima Trindade particularmente com
        o nome de Espírito Santo, porque procede do Padre e do Filho por meio de
        expiração e de amor.
      </Text>

      <H5 text="134 - Que obra se atribui especialmente ao Espírito Santo?" />
      <Text className="text-base">
        Ao Espírito Santo atribui-se especialmente a santificação das almas.
      </Text>

      <H5 text="135 - O Padre e o filho santificam-nos também, como o Espírito Santo?" />
      <Text className="text-base">
        Sim, todas as três Pessoas divinas nos santificam igualmente.
      </Text>

      <H5 text="136 - Se assim é, por que é atribuída em particular ao Espírito Santo a santificação das almas?" />
      <Text className="text-base">
        Atribui-se em particular ao Espírito Santo a santificação das almas
        porque é obra de amor, e as obras de amor atribuem-se ao Espírito Santo.
      </Text>

      <H5 text="137 - Quando o Espírito Santo desceu sobre os Apóstolos?" />
      <Text className="text-base">
        O Espírito Santo desceu sobre os Apóstolos no dia de Pentecostes, isto
        é, cinquenta dias depois da Ressurreição de Jesus Cristo, e dez dias
        depois da sua Ascensão.
      </Text>

      <H5 text="138 - Onde ficaram os Apóstolos nos dez dias antes da festa de Pentecostes?" />
      <Text className="text-base">
        Os Apóstolos ficaram reunidos no Cenáculo em companhia da Virgem Maria e
        os outros discípulos, e perseveravam na oração esperando o Espírito
        Santo que Jesus lhes havia prometido.
      </Text>

      <H5 text="139 - Quais foram os efeitos que o Espírito Santo produziu nos Apóstolos?" />
      <Text className="text-base">
        O Espírito Santo confirmou na fé os Apóstolos, encheu-os de luzes, de
        forças, de caridade e da abundância de todos os seus dons.
      </Text>

      <H5 text="140 - Foi enviado o Espírito Santo só aos Apóstolos?" />
      <Text className="text-base">
        O Espírito Santo foi enviado a toda a Igreja e a todas as almas fiéis.
      </Text>

      <H5 text="141 - Que opera o Espírito Santo na Igreja?" />
      <Text className="text-base">
        O Espírito Santo, como a alma no corpo, vivifica a Igreja com a sua
        graça e com os seus dons; estabelece n'Ela o reino da verdade e do amor;
        e assiste-Lhe a fim de que oriente os seus filhos com firmeza ao caminho
        do Céu.
      </Text>

      <Text className="h2">
        X - <Text className="em">Do nono artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Então os apóstolos e presbíteros, de acordo com toda a Igreja,
        resolveram escolher alguns homens e enviá-los a Antioquia com Paulo e
        Barnabé; escolheram Judas, chamado Barsabás, e Silas, homens influentes
        entre os irmãos. Por seu intermédio enviaram a seguinte carta: Os
        irmãos, os apóstolos e presbíteros saúdam os irmãos de Antioquia, Síria
        e Cilícia, convertidos dentre os pagãos. Chegou ao nosso conhecimento
        que alguns dos nossos vos têm perturbado com palavras, confundindo
        vossas mentes, sem nenhuma autorização de nossa parte. Por isso
        resolvemos, de comum acordo, enviar-vos alguns homens escolhidos, em
        companhia de nossos amados Barnabé e Paulo, que expuseram suas vidas
        pelo nome de Nosso Senhor Jesus Cristo. Estamos enviando Judas e Silas
        para vos comunicar de viva voz as mesmas coisas. Pareceu bem ao Espírito
        Santo e a nós não vos impor nenhuma outra exigência além das
        necessárias: que vos abstenhais das carnes imoladas aos ídolos, do
        sangue, das carnes sufocadas e da prostituição. Procedereis bem evitando
        estas coisas. Passai bem. Atos 15, 22-29
      </Text>

      <H4 text="1º - Da Igreja em geral" />
      <H5 text="142 - Que nos ensina o nono artigo do Credo: creio na Santa Igreja Católica; na Comunhão dos Santos?" />
      <Text className="text-base">
        O nono artigo do Credo ensina-nos que Jesus Cristo fundou sobre a terra
        uma sociedade visível, a qual se chama Igreja Católica, e que todas as
        pessoas que fazem parte desta Igreja estão em comunhão entre si.
      </Text>

      <H5 text="143 - Por que, depois do artigo que trata do Espírito Santo, fala-se imediatamente da Igreja Católica?" />
      <Text className="text-base">
        Depois do artigo que trata do Espírito Santo, fala-se imediatamente da
        Igreja Católica, para indicar que toda a santidade da mesma Igreja
        procede do Espírito Santo, que é o autor de toda a santidade.
      </Text>

      <H5 text="144 - Que quer dizer esta palavra Igreja?" />
      <Text className="text-base">
        A palavra Igreja quer dizer convocação ou reunião de muitas pessoas.
      </Text>

      <H5 text="145 - Quem nos convocou ou chamou para a Igreja de Jesus Cristo?" />
      <Text className="text-base">
        Nós fomos chamados para a Igreja de Jesus Cristo por uma graça
        particular de Deus, a fim de que, com a luz da fé e pela observância da
        lei divina, Lhe prestemos o culto devido, e cheguemos à vida eterna.
      </Text>

      <H5 text="146 - Onde se encontram os membros da Igreja?" />
      <Text className="text-base">
        Os membros da Igreja encontram-se parte no Céu, e formam a Igreja
        triunfante; parte no Purgatório, e formam a Igreja padecente; parte na
        terra, e formam a Igreja militante.
      </Text>

      <H5 text="147 - Estas diversas partes da Igreja constituem uma só Igreja?" />
      <Text className="text-base">
        Sim, estas diversas partes da Igreja constituem uma só Igreja e um só
        corpo, porque têm a mesma cabeça que é Jesus Cristo, o mesmo espírito
        que as anima e as tine, e o mesmo fim que é a felicidade eterna, que uns
        já estão gozando e que outros esperam.
      </Text>

      <H5 text="148 - A qual das partes da Igreja se refere principalmente este nono artigo?" />
      <Text className="text-base">
        Este nono artigo do Credo refere-se principalmente à Igreja militante,
        que é a Igreja na qual estamos atualmente.
      </Text>

      <H4 text="2º - Da Igreja em particular" />
      <H5 text="149 - Que é a Igreja Católica?" />
      <Text className="text-base">
        A Igreja Católica é a sociedade ou reunião de todas as pessoas
        baptizadas que, vivendo na terra, professam a mesma fé e a mesma lei de
        Cristo, participam dos mesmos Sacramentos, e obedecem aos legítimos
        Pastores, principalmente ao Romano Pontífice.
      </Text>

      <H5 text="150 - Dizei precisamente o que é necessário para alguém ser membro da Igreja." />
      <Text className="text-base">
        Para alguém ser membro da Igreja, é necessário estar baptizado, crer e
        professar a doutrina de Jesus Cristo, participar dos mesmos Sacramentos,
        reconhecer o Papa e os outros legítimos Pastores da Igreja.
      </Text>

      <H5 text="151 - Quem são os legítimos Pastores da Igreja?" />
      <Text className="text-base">
        Os legítimos Pastores da Igreja são o Pontífice Romano, isto é, o Papa,
        que é o 1º Pastor universal, e os Bispos. Além disso, sob a dependência
        dos Bispos e do Papa, têm parte no oficio de Pastores os outros
        Sacerdotes e especialmente os párocos.
      </Text>

      <H5 text="152 - Por que dizeis que o Pontífice Romano é o Pastor Universal da Igreja?" />
      <Text className="text-base">
        Porque Jesus Cristo disse a São Pedro, primeiro Papa: Tu és Pedro, e
        sobre esta pedra edificarei a minha Igreja, e dar-te-ei as chaves do
        reino dos Céus, e tudo o que ligares na terra, será ligado no Céu; e
        tudo o que desligares na terra, será desligado também no Céu. E
        disse-lhe mais: Apascenta os meus cordeiros, apascenta as minhas
        ovelhas.
      </Text>

      <H5 text="153 - Então não pertencem à Igreja, de Jesus Cristo as sociedades de pessoas baptizados que não reconhecem o Romano Pontífice por seu chefe?" />
      <Text className="text-base">
        Todos os que não reconhecem o Romano Pontífice por seu chefe, não
        pertencem à Igreja de Jesus Cristo.
      </Text>

      <H5 text="154 - Como se pode distinguir a Igreja de Jesus Cristo, de tantas sociedades ou seitas, fundadas pelos homens, e que se dizem cristãos?" />
      <Text className="text-base">
        Pode-se distinguir a verdadeira Igreja de Jesus Cristo, de tantas
        sociedades ou seitas fundadas pelos homens e que se dizem cristãs, por
        quatro notas características. Ela é Una, Santa, Católica e Apostólica.
      </Text>

      <H5 text="155 - Por que dizeis que a Igreja é Una?" />
      <Text className="text-base">
        Digo que a verdadeira Igreja é Una, porque os seus filhos, de qualquer
        tempo ou lugar, estão unidos entre si na mesma fé, no mesmo culto, na
        mesma lei e na participação dos mesmos Sacramentos, sob o mesmo chefe
        visível, o Romano Pontífice.
      </Text>

      <H5 text="156 - Não poderia haver mais de uma Igreja?" />
      <Text className="text-base">
        Não pode haver mais de uma Igreja, porque, assim como há um só Deus, uma
        só Fé e um só Batismo, assim também não há nem pode ode haver senão uma
        só Igreja verdadeira.
      </Text>

      <H5 text="157 - Mas não se chamam também igrejas o conjunto dos fiéis de uma nação, ou de uma diocese?" />
      <Text className="text-base">
        Chamam-se igrejas também o conjunto dos fiéis de uma nação ou de uma
        diocese, mas são sempre porções da Igreja universal, e formam com ela
        uma só Igreja.
      </Text>

      <H5 text="158 - Por que dizeis que a verdadeira Igreja é Santa?" />
      <Text className="text-base">
        Chamo a verdadeira Igreja de Santa, porque Jesus Cristo, a sua cabeça
        invisível, é Santo, santos são muitos dos seus membros, santas são a sua
        Fé e a sua Lei, santos os seus Sacramentos, e fora d'Ela não há nem pode
        haver verdadeira santidade.
      </Text>

      <H5 text="159 - Por que dizeis que a Igreja é Católica?" />
      <Text className="text-base">
        Chamo a verdadeira Igreja de Católica, que quer dizer universal, porque
        abrange os fiéis de todos os tempos, de todos os lugares, de todas as
        idades e condições, e todos os homens do mundo são chamados a fazer
        parte d'Ela.
      </Text>

      <H5 text="160 - Por que a Igreja se chama também Apostólica?" />
      <Text className="text-base">
        A verdadeira Igreja chama-se também Apostólica, porque remonta sem
        interrupção até aos Apóstolos; porque crê e ensina tudo o que creram e
        ensinaram os Apóstolos; e porque é guiada e governada pelos legítimos
        sucessores dos Apóstolos.
      </Text>

      <H5 text="161 - Por que a verdadeira Igreja se chama também Romana?" />
      <Text className="text-base">
        A verdadeira Igreja chama-se também Romana, porque os quatro caracteres
        da unidade, santidade, catolicidade e apostolicidade se encontram só na
        Igreja que tem por chefe o Bispo de Roma, sucessor de São Pedro.
      </Text>

      <H5 text="162 - Como é constituída a Igreja de Jesus Cristo?" />
      <Text className="text-base">
        A Igreja de Jesus Cristo é constituída como uma sociedade verdadeira e
        perfeita. E n'Ela, como numa pessoa moral, podemos distinguir um corpo e
        uma alma.
      </Text>

      <H5 text="163 - Em que consiste a alma da Igreja?" />
      <Text className="text-base">
        A alma da Igreja consiste no que Ela tem de interior e de espiritual,
        isto é, a Fé, a Esperança, a Caridade, os dons da graça e do Espírito
        Santo, e todos os tesouros celestes que lhe provieram dos merecimentos
        de Cristo Redentor e dos Santos.
      </Text>

      <H5 text="164 - E o corpo da Igreja, em que consiste?" />
      <Text className="text-base">
        O corpo da Igreja consiste no que Ela tem de visível e de externo, quer
        na associação dos seus membros, quer no seu culto e no seu ministério de
        -ensino, quer no seu governo e ordem externa.
      </Text>

      <H5 text="165 - Para nos salvarmos basta sermos de qualquer maneira membros da Igreja Católica?" />
      <Text className="text-base">
        Não basta para nos salvarmos o sermos de qualquer maneira membros da
        Igreja Católica, mas é preciso que sejamos seus membros vivos.
      </Text>

      <H5 text="166 - Quais são os membros vivos da Igreja?" />
      <Text className="text-base">
        Os membros vivos da Igreja são todos os justos e só eles, isto é,
        aqueles que estão atualmente em graça de Deus.
      </Text>

      <H5 text="167 - E quais são n'Ela os membros mortos?" />
      <Text className="text-base">
        Membros mortos da Igreja são os fiéis que estão em pecado mortal.
      </Text>

      <H5 text="168 - Pode alguém salvar-se fora da Igreja Católica, Apostólica, Romana?" />
      <Text className="text-base">
        Não. Fora da Igreja Católica, Apostólica, Romana, ninguém pode
        salvar-se, como ninguém pôde salvar-se do dilúvio fora da arca de Noé,
        que era figura desta Igreja.
      </Text>

      <H5 text="169 - Como então se salvaram os antigos Patriarcas, os Profetas, e todos os outros justos do Antigo Testamento?" />
      <Text className="text-base">
        Todos os justos do Antigo Testamento se salvaram em virtude da fé que
        tinham em Cristo que havia de vir, por meio da qual eles já pertenciam
        espiritualmente a esta Igreja.
      </Text>

      <H5 text="170 - Mas quem se encontrasse, sem culpa sua, fora da Igreja, poderia salvar-se?" />
      <Text className="text-base">
        Quem, encontrando-se sem culpa sua - quer dizer, em boa fé - fora da
        Igreja, tivesse recebido o baptismo, ou tivesse desejo, ao menos
        implícito, de o receber e além disso procurasse sinceramente a verdade,
        e cumprisse a vontade de Deus o melhor que pudesse, ainda que separado
        do corpo da Igreja, estaria unido à alma d'Ela, e portanto no caminho da
        salvação.
      </Text>

      <H5 text="171 - E quem, sendo muito embora membro da Igreja Católica, não pusesse em prática os seus ensinamentos, salvar-se-ia?" />
      <Text className="text-base">
        Quem, sendo muito embora membro da Igreja Católica, não pusesse em
        prática os seus ensinamentos, seria membro morto, e portanto não se
        salvaria, porque para a salvação de um adulto requer-se não só o Batismo
        e a Fé, mas também as obras conformes à Fé.
      </Text>

      <H5 text="172 - Somos obrigados a acreditar todas as verdades que a Igreja ensina?" />
      <Text className="text-base">
        Sim, somos obrigados a acreditar todas as verdades que a Igreja nos
        ensina, e Jesus Cristo declarou que quem não crê, já está condenado.
      </Text>

      <H5 text="173 - Somos também obrigados a fazer tudo o que a Igreja manda?" />
      <Text className="text-base">
        Sim, somos obrigados a fazer tudo o que a Igreja manda, porque Jesus
        Cristo disse aos Pastores da Igreja: Quem vos ouve, a Mim ouve, e quem
        vos despreza, a Mim despreza.
      </Text>

      <H5 text="174 - Pode enganar-se a Igreja nas coisas que nos propõe para crermos?" />
      <Text className="text-base">
        Não. Nas coisas que nos propõe para crer, a Igreja não pode enganar-se,
        porque, segundo a promessa de Jesus Cristo, é sempre assistida pelo
        Espírito Santo.
      </Text>

      <H5 text="175 - A Igreja Católica é então infalível?" />
      <Text className="text-base">
        Sim, a Igreja Católica é infalível. Por isso aqueles que rejeitam as
        suas definições, perdem a fé, e fazem-se hereges.
      </Text>
      <H5 text="176 - A Igreja Católica pode ser destruída ou perecer?" />
      <Text className="text-base">
        Não. A Igreja Católica pode ser perseguida, mas não pode ser destruída
        nem perecer. Ela há de durar até ao fim do mundo, porque até ao fim do
        mundo Jesus Cristo estará com Ela, como prometeu.
      </Text>

      <H5 text="177 - Por que é a Igreja Católica tão perseguida?" />
      <Text className="text-base">
        A Igreja Católica é tão perseguida, porque assim foi também perseguido o
        seu Divino Fundador, e porque reprova os vícios, combate as paixões e
        condena todas as injustiças e todos os erros.
      </Text>

      <H5 text="178 - Há mais alguns deveres dos católicos para com a Igreja?" />
      <Text className="text-base">
        Todo o cristão deve ter para com a Igreja um amor ilimitado,
        considerar-se feliz e infinitamente honrado por pertencer a Ela, e
        empenhar-se pela glória e aumento d'Ela por todos os meios ao seu
        alcance.
      </Text>

      <H4 text="3º - Da Igreja docente e da Igreja discente" />
      <Text className="text-base">
        Um anjo do Senhor falou a Filipe: Vai para o sul pelo caminho que,
        através do deserto, desce de Jerusalém para Gaza. E Filipe partiu. Ora,
        um etíope, camareiro e tesoureiro-mor a serviço da rainha Candace da
        Etiópia, tinha ido prestar culto em Jerusalém. Voltava, sentado no seu
        carro, lendo o profeta Isaías. O Espírito Santo disse a Filipe:
        Aproxima-te e acompanha aquele carro. Filipe acelerou o passo. Ouvindo
        que lia o profeta Isaías, perguntou: Será que estás entendendo o que
        lês? Ele respondeu: Como é que vou entender se ninguém me orienta? Então
        convidou Filipe para subir e sentar-se ao seu lado. A passagem da
        Escritura que ele lia era a seguinte: Como uma ovelha levada ao
        matadouro, e como um cordeiro diante de quem o tosquia, ele emudeceu e
        não abre a boca. Com humilhação foi consumado o seu julgamento; de seus
        descendentes, quem falará? pois a sua vida é tirada da terra. O
        camareiro perguntou a Filipe: Dize-me, de quem o profeta está falando?
        De si mesmo ou de outro? Filipe pôs-se a falar e, começando com esta
        passagem da escritura, anunciou-lhe a boa-nova de Jesus. Seguindo o
        caminho, encontraram água e o camareiro disse: Aqui existe água, o que
        impede que eu seja baptizado? Mandou parar o carro, e os dois desceram
        para a água, Filipe e o camareiro, e Filipe o baptizou. Quando subiram
        da água, o Espírito do Senhor arrebatou Filipe n, e o camareiro já não o
        viu, mas alegre prosseguiu seu caminho. Quanto a Filipe, foi parar em
        Azoto e, de passagem, anunciava a boa-nova a todas as cidades até chegar
        a Cesareia Atos 8, 26-40
      </Text>

      <H5 text="179 - Há alguma distinção entre os membros que compõem a Igreja?" />
      <Text className="text-base">
        Entre os membros que compõem a Igreja há distinção muito importante,
        porque há uns que mandam, outros que obedecem, uns que ensinam, outros
        que são ensinados.
      </Text>

      <H5 text="180 - Como se chama a parte da Igreja que ensina?" />
      <Text className="text-base">
        A parte da Igreja que ensina chama-se docente, ou ensinante.
      </Text>

      <H5 text="181 - E a parte da Igreja que é ensinada, como se chama?" />
      <Text className="text-base">
        A parte da Igreja que é ensinada chama-se discente.
      </Text>

      <H5 text="182 - Quem estabeleceu esta distinção na Igreja?" />
      <Text className="text-base">
        Esta distinção na Igreja estabeleceu-a o próprio Jesus Cristo.
      </Text>

      <H5 text="183 - A Igreja docente e a Igreja discente são, pois, duas Igrejas distintas?" />
      <Text className="text-base">
        A Igreja docente e a Igreja discente são duas partes distintas de uma só
        e mesma Igreja, como no corpo humano a cabeça é distinta dos outros
        membros, e, não obstante, forma com eles um corpo só.
      </Text>

      <H5 text="184 - De que pessoas se compõe a Igreja docente?" />
      <Text className="text-base">
        A Igreja docente compõe-se de todos os Bispos (quer se encontrem
        dispersos, quer se encontrem reunidos em Concílio), unidos à sua cabeça,
        o Romano Pontífice.
      </Text>

      <H5 text="185 - E a Igreja discente, de que pessoas é composta?" />
      <Text className="text-base">
        Á Igreja discente é composta de todos os fiéis.
      </Text>
      <H5 text="186 - Quais são as pessoas que têm na Igreja autoridade de ensinar?" />
      <Text className="text-base">
        Os que têm na Igreja o poder de ensinar são o Papa e os Bispos e, sob a
        dependência destes, os outros ministros sagrados.
      </Text>

      <H5 text="187 - Somos obrigados a ouvir a Igreja docente?" />
      <Text className="text-base">
        Sim, sem dúvida, somos todos obrigados a ouvir a Igreja docente, sob
        pena de condenação eterna, porque Jesus Cristo disse aos Pastores da
        Igreja, na pessoa dos Apóstolos: Quem vos ouve, a Mim ouve, e quem vos
        despreza, a Mim despreza.
      </Text>

      <H5 text="188 - Além da autoridade de ensinar, tem a Igreja mais algum poder?" />
      <Text className="text-base">
        Sim, além da autoridade de ensinar, a Igreja tem especialmente o poder
        de administrar as coisas santas, de fazer leis e de exigir a sua
        observância.
      </Text>

      <H5 text="189 - Virá do povo o poder que têm os membros da hierarquia eclesiástica?" />
      <Text className="text-base">
        O poder que têm os membros da hierarquia eclesiástica não vem do Povo, e
        seria heresia o dizê-lo: vem unicamente de Deus.
      </Text>

      <H5 text="190 - A quem compete o exercício destes poderes?" />
      <Text className="text-base">
        O exercício destes poderes compete unicamente ao corpo hierárquico, isto
        é, ao Papa e aos Bispos a ele subordinados.
      </Text>

      <H4 text="4º - Do Papa e dos Bispos" />
      <Text className="text-base">
        Chegando à região de Cesareia de Filipe, Jesus perguntou a seus
        discípulos: Quem as pessoas dizem que é o Filho do homem? Eles
        responderam: Alguns dizem que é João Batista; outros, Elias; outros,
        Jeremias ou um dos profetas. Então ele perguntou-lhes: E vós, quem
        dizeis que eu sou? Simão Pedro respondeu: Tu és o Cristo, o Filho de
        Deus vivo. Em resposta, Jesus disse: Feliz és tu, Simão filho de Jonas,
        porque não foi a carne nem o sangue quem te revelou isso, mas o Pai que
        está nos céus. E eu te digo: Tu és Pedro e sobre esta pedra construirei
        a minha Igreja e as portas do inferno nunca levarão vantagem sobre ela.
        Eu te darei as chaves do reino dos céus, e tudo que ligares na terra
        será ligado nos céus, e tudo que desligares na terra será desligado nos
        céus. E deu ordens aos discípulos de não falarem para ninguém que ele
        era o Cristo. Mt 16, 13-20.
      </Text>

      <H5 text="191 - Quem é o Papa?" />
      <Text className="text-base">
        O Papa, a quem chamamos também Sumo Pontífice ou Romano Pontífice, é o
        sucessor de São Pedro na Sede de Roma, o Vigário de Jesus Cristo na
        terra, e o chefe visível da Igreja.
      </Text>

      <H5 text="192 - Por que o Romano Pontífice é o sucessor de São Pedro?" />
      <Text className="text-base">
        O Romano Pontífice é o sucessor de São Pedro. porque São Pedro reuniu na
        sua pessoa a dignidade de Bispo de Roma e de chefe da Igreja e porque,
        por disposição divina, estabeleceu em Roma a sua sede, e aí morreu. Por
        isso quem é eleito Bispo de Roma, é também herdeiro de toda a sua
        autoridade.
      </Text>

      <H5 text="193 - Por que o Romano Pontífice é o Vigário de Jesus Cristo?" />
      <Text className="text-base">
        O Romano Pontífice é o Vigário de Jesus Cristo porque ele O representa
        na terra, e faz as suas vezes no governo da Igreja.
      </Text>

      <H5 text="194 - Por que o Romano Pontífice é o Chefe visível da Igreja?" />
      <Text className="text-base">
        O Romano Pontífice é o Chefe visível da Igreja porque a dirige
        visivelmente com a mesma autoridade de Jesus Cristo, que é a cabeça
        invisível da Igreja.
      </Text>

      <H5 text="195 - Qual é, pois, a dignidade do Papa?" />
      <Text className="text-base">
        A dignidade do Papa é a maior entre todas as dignidades da terra e
        dá-lhe um poder supremo e imediato sobre todos e cada um dos Pastores e
        dos fiéis.
      </Text>

      <H5 text="196 - Pode errar o Papa ao ensinar à Igreja?" />
      <Text className="text-base">
        O Papa não pode errar, quer dizer, é infalível nas definições que dizem
        respeito à fé e aos costumes.
      </Text>

      <H5 text="197 - Qual é o motivo por que o Papa é infalível?" />
      <Text className="text-base">
        O Papa é infalível em razão da promessa de Jesus Cristo e da contínua
        assistência do Espírito Santo.
      </Text>

      <H5 text="198 - Quando o Papa é infalível?" />
      <Text className="text-base">
        O Papa é infalível só quando, na sua qualidade de Pastor e Mestre de
        todos os cristãos, em virtude da sua suprema autoridade apostólica,
        define uma doutrina relativa à fé e aos costumes, que deve ser seguida
        por toda a Igreja.
      </Text>

      <H5 text="199 - Quem não acreditasse nas definições solenes do Papa, que pecado cometeria?" />
      <Text className="text-base">
        Quem não acreditasse nas definições solenes do Papa, ou ainda só
        duvidasse delas, pecaria contra a fé; e, se se obstinasse nesta
        incredulidade, já não seria mais católico, mas herege.
      </Text>

      <H5 text="200 - Para que fim Deus concedeu ao Papa o dom da infalibilidade?" />
      <Text className="text-base">
        Deus concedeu ao Papa o dom da infalibilidade, a fim de que todos
        estejam certos e seguros da verdade que ti Igreja ensina.
      </Text>

      <H5 text="201 - Quando foi definido que o Papa é infalível?" />
      <Text className="text-base">
        A infalibilidade do Papa foi definida pela Igreja rio Concílio do
        Vaticano; e, se alguém ousasse contradizer esta definição, seria herege
        e excomungado
      </Text>

      <H5 text="202 - A Igreja, ao definir que o Papa é infalível, estabeleceu porventura uma nova verdade de fé?" />
      <Text className="text-base">
        Não. A Igreja, ao definir que o Papa é infalível, não estabeleceu uma
        nova verdade de fé, mas só definiu, para se opor a erros novos, que a
        infalibilidade do Papa, contida já na Sagrada Escritura e na Tradição, e
        uma verdade revelada por Deus, e que por conseguinte se deve crer como
        dogma ou artigo de fé.
      </Text>

      <H5 text="203 - Como todo o católico deve proceder para com o Papa?" />
      <Text className="text-base">
        Todo o católico deve reconhecer o Papa como Pai, Pastor e Mestre
        universal, e estar unido a ele de espírito e coração.
      </Text>

      <H5 text="204 - Depois do Papa quais são, por instituição divina, as personagens mais venerandas na Igreja?" />
      <Text className="text-base">
        Depois do Papa, por instituição divina, as personagens mais venerandas
        da Igreja são os Bispos.
      </Text>

      <H5 text="205 - Quem são os Bispos?" />
      <Text className="text-base">
        Os Bispos são os Pastores aos fiéis, estabelecidos pelo Espírito Santo
        para governar ti Igreja de Deus, nas sedesque lhes são confiadas sob i]
        dependência do Romano Pontífice.
      </Text>

      <H5 text="206 - Que é o Bispo na própria diocese?" />
      <Text className="text-base">
        O Bispo na própria diocese é o Pastor legítimo, o Pai, o Mestre, o
        superior de todos os fiéis, eclesiásticos e leigos, que pertencem à
        mesma diocese.
      </Text>

      <H5 text="207 - Por que o Bispo se chama Pastor legítimo?" />
      <Text className="text-base">
        Chama-se o Bispo Pastor legítimo, porque a jurisdição, isto é, o poder
        que tem de governar os fiéis da própria diocese, foi-lhe conferido
        segundo as normas e leis da Igreja.
      </Text>

      <H5 text="208 - De quem são sucessores o Papa e os Bispos?" />
      <Text className="text-base">
        O Papa é sucessor de São Pedro, Príncipe dos Apóstolos, e os Bispos são
        sucessores dos Apóstolos, no que diz respeito ao governo ordinário da
        Igreja.
      </Text>

      <H5 text="209 - Deve o fiei estar unido ao próprio Bispo?" />
      <Text className="text-base">
        Sim, todo o fiel, eclesiástico ou leigo, deve estar unido de espírito e
        de coração ao próprio Bispo que está em graça e comunhão com a Se
        Apostólica.
      </Text>

      <H5 text="210 - Como deve proceder o fiei para com o próprio Bispo?" />
      <Text className="text-base">
        Todo o fiel, eclesiástico ou leigo, deve respeitar, amar e honrar o
        próprio Bispo, e prestar-lhe obediência em tudo o que se refere ao bem
        das almas e ao governo espiritual da diocese.
      </Text>

      <H5 text="211 - Quais são os auxiliares do Bispo na cura das almas?" />
      <Text className="text-base">
        Os auxiliares do Bispo na cura das almas são os Sacerdotes, e
        principalmente os párocos.
      </Text>

      <H5 text="212 - Quem é o pároco?" />
      <Text className="text-base">
        O pároco é uni Sacerdote delegado para presidir e dirigir, sob a
        dependência do Bispo, uma porção da diocese, que se chama paróquia.
      </Text>

      <H5 text="213 - Que deveres têm os fiéis para com o seu pároco?" />
      <Text className="text-base">
        Os fiéis devem conservar-se unidos ao seu pároco, ouvi-lo com
        docilidade, professar-lhe respeito e submissão em tudo o que interessa
        ao bem da paróquia.
      </Text>

      <H4 text="5º - Da comunhão dos Santos" />
      <Text className="text-base">
        O que era desde o princípio, o que ouvimos, o que vimos com os olhos, o
        que contemplamos e nossas mãos apalparam no tocante ao Verbo da vida a
        porque a vida se manifestou e nós vimos e testemunhamos, anunciando-vos
        a vida eterna que estava com o Pai e nos foi manifestada o que vimos e
        ouvimos, nós também vos anunciamos a fim de que também vós vivai sem
        comunhão conosco. Ora, nossa comunhão é com o Pai e seu Filho, Jesus
        Cristo. Nós vos escrevemos estas coisas para nossa alegria ser completa!
        Para viver na luz. A mensagem que dele ouvimos e vos anunciamos é esta:
        Deus é luz, nele não há trevas. Se dizemos ter comunhão com ele mas
        andamos nas trevas, mentimos e não praticamos a verdade. Se, porém,
        andamos na luz, assim como ele está na luz, estamos em comunhão uns com
        os outros e o sangue de Jesus, seu Filho, nos purifica de todo pecado.
        Se dizemos que em nós não há pecado, enganamos a nós mesmos e a verdade
        não está conosco. Se confessamos nossos pecados, fiel e justo é Deus
        para nos perdoar e nos purificar de toda iniquidade. Se dizemos que não
        pecamos, chamamos Deus de mentiroso e sua palavra não está conosco. I
        João 1, 1-10
      </Text>

      <H5 text="214 - Que nos ensina o nono artigo do Credo com aquelas palavras: na comunhão dos Santos?" />
      <Text className="text-base">
        Com as palavras: na comunhão dos Santos, o nono artigo do Credo
        ensina-nos que na Igreja, pela íntima união que existe entre todos os
        seus membros, são comuns os bens espirituais, assim internos como
        externos, que lhe pertencem.
      </Text>

      <H5 text="215 - Quais são na Igreja os bens comuns internos?" />
      <Text className="text-base">
        Os bens comuns internos na Igreja são: a graça que se recebe nos
        Sacramentos, a Fé, a Esperança, a Caridade, os merecimentos infinitos de
        Jesus Cristo, os merecimentos superabundantes da Santíssima Virgem e dos
        Santos, e o fruto de todas as boas obras que na mesma Igreja se fazem.
      </Text>

      <H5 text="216 - Quais são os bens externos comuns na Igreja?" />
      <Text className="text-base">
        Os bens externos comuns na Igreja são: os sacramentos, o Santo
        Sacrifício da Missa, as orações públicas, as funções religiosas, e todas
        as outras práticas exteriores que unem entre si os fiéis.
      </Text>

      <H5 text="217 - Nesta comunhão de bens entram todos os filhos da Igreja?" />
      <Text className="text-base">
        Na comunhão dos bens internos entram somente os cristãos que estão em
        graça de Deus; os que estão em pecado mortal não participam de todos
        estes bens.
      </Text>

      <H5 text="218 - Por que não participam de todos estes bens aqueles que estão em pecado mortal?" />
      <Text className="text-base">
        Porque é a graça de Deus. vida sobrenatural da alma, que une os fiéis a
        Deus e a Jesus Cristo como seus membros vivos e os torna capazes de
        fazer obras meritórias para a vida eterna; e porque aqueles que se
        encontram em estado de pecado mortal, não tendo a graça de Deus, estão
        excluídos da comunhão perfeita dos bens espirituais e não podem fazer
        obras meritórias rias para a vida eterna.
      </Text>

      <H5 text="219 - Então os cristãos que estão em pecado mortal não tiram proveito nenhum dos bens internos e espirituais da Igreja?" />
      <Text className="text-base">
        Os cristãos que estão em pecado mortal tiram ainda assim algum proveito
        dos bens internos e espirituais da Igreja, porquanto conservam o caráter
        de cristãos, que é indelével, e a virtude da Fé que é a raiz de toda
        justificação. Por isso são auxiliados pelas orações e boas obras dos
        fiéis, para obterem a graça da conversão.
      </Text>

      <H5 text="220 - Os que estão em pecado mortal podem participar dos bens externos da Igreja?" />
      <Text className="text-base">
        Os que estão em pecado mortal podem participar dos bens externos da
        Igreja, contanto que não estejam separados da mesma Igreja pela
        excomunhão.
      </Text>

      <H5 text="221 - Por que os membros desta comunhão, considerados no seu conjunto, se chamam Santos?" />
      <Text className="text-base">
        Os membros desta comunhão chamam-se Santos, porque todos são chamados à
        santidade, e foram santificados por meio do Batismo, e muitos deles já
        atingiram a santidade perfeita.
      </Text>

      <H5 text="222 - A comunhão dos Santos estende-se também ao Céu e ao Purgatório?" />
      <Text className="text-base">
        Sim, a comunhão dos Santos estende-se também ao Céu e ao Purgatório,
        porque a caridade une as três igrejas: triunfante, padecente e
        militante; e os Santos rogam a Deus por nós e pelas almas do Purgatório,
        e nós damos honra e glória aos Santos, e podemos aliviar as almas do
        Purgatório, aplicando, em sufrágio delas, Missas, esmolas, indulgências
        e outras boas obras.
      </Text>

      <H4 text="6º - Daqueles que estão fora da Igreja" />
      <H5 text="223 - Quem são os que não participam da comunhão dos Santos?" />
      <Text className="text-base">
        Aqueles que não participam da comunhão dos Santos são, na outra vida, os
        condenados, e nesta vida aqueles que não pertencem nem à alma nem ao
        corpo da Igreja, quer dizer, aqueles que estão em estado de pecado
        mortal e se encontram fora da verdadeira Igreja.
      </Text>

      <H5 text="224 - Quem são os que se encontram fora da verdadeira Igreja?" />
      <Text className="text-base">
        Encontram-se fora da verdadeira Igreja os infiéis, os judeus, os
        hereges, os apóstatas, os cismáticos e os excomungados.
      </Text>

      <H5 text="225 - Quem são os infiéis?" />
      <Text className="text-base">
        Os infiéis são aqueles que não foram baptizados e não crêem em Jesus
        Cristo, seja porque crêem e adoram falsas divindades, como os idólatras;
        seja porque, embora admitam o único Deus verdadeiro, não crêem em Cristo
        Messias, nem como vindo na pessoa de Jesus Cristo, nem como havendo de
        vir ainda: tais são os maometanos e outros semelhantes.
      </Text>

      <H5 text="226 - Quem são os judeus?" />
      <Text className="text-base">
        Os judeus são aqueles que professam a lei de Moisés, não receberam o
        baptismo, nem crêem em Jesus Cristo.
      </Text>

      <H5 text="227 - Quem são os hereges?" />
      <Text className="text-base">
        Os hereges são as pessoas baptizadas que recusam com pertinácia crer em
        alguma verdade revelada por Deus e ensinada conto de fé pela Igreja
        Católica: por exemplo, os arianos, os nestorianos e as várias seitas dos
        protestantes.
      </Text>

      <H5 text="228 - Quem são os apóstatas?" />
      <Text className="text-base">
        Os apóstatas são aqueles que abjuram, isto é, renegam, com ato externo,
        a fé católica, que antes professavam.
      </Text>

      <H5 text="229 - Quem são os cismáticos?" />
      <Text className="text-base">
        Os cismáticos são os cristãos que, não negando explicitamente dogma
        algum, se separam voluntariamente da Igreja de Jesus Cristo, ou dos
        legítimos Pastores.
      </Text>

      <H5 text="230 - Quem são os excomungados?" />
      <Text className="text-base">
        Os excomungados são aqueles que por faltas graves são fulminados com
        excomunhão pelo Papa ou pelo Bispo, e portanto são separados, como
        indignos, do corpo da Igreja, a qual espera e deseja a sua conversão.
      </Text>

      <H5 text="231 - Deve-se temer a excomunhão?" />
      <Text className="text-base">
        Deve-se temer grandemente a excomunhão, porque é o castigo mais grave e
        mais terrível que a Igreja pode infligir aos seus filhos rebeldes e
        obstinados.
      </Text>

      <H5 text="232 - De que bens ficam privados os excomungados?" />
      <Text className="text-base">
        Os excomungados ficam privados das orações publicas, dos Sacramentos,
        das indulgências e excluídos da sepultura eclesiástica.
      </Text>

      <H5 text="233 - Podemos nós auxiliar de alguma maneira os excomungados?" />
      <Text className="text-base">
        Nós podemos auxiliar de alguma maneira os excomungados e todos os outros
        que estão fora da verdadeira Igreja com advertências salutares, com
        orações e boas obras, suplicando a Deus que pela sua misericórdia lhes
        conceda a graça de se converterem à Fé e de entrarem na comunhão dos
        Santos.
      </Text>

      <Text className="h2">
        XI - <Text className="em">Do décimo artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Alguns dias depois, Jesus entrou novamente em Cafarnaum, e souberam que
        ele estava em casa. Reuniu-se tanta gente que nem mesmo em frente à
        porta havia lugar para todos. E Jesus lhes anunciava a palavra.
        Trouxeram-lhe um paralítico, carregado por quatro homens. Como não
        podiam levá-lo até Jesus, por causa da multidão, descobriram o teto no
        lugar em que ele se achava, e pela abertura desceram a maca em que
        estava deitado o paralítico. Ao ver a fé deles, Jesus disse ao
        paralítico: Filho, os teus pecados estão perdoados. Ora, estavam
        sentados ali alguns escribas, pensando consigo mesmos: Como este homem
        pode falar assim? Ele blasfema! Quem pode perdoar pecados senão só Deus?
        Mas Jesus percebeu logo em seu espírito os pensamentos deles e disse:
        Por que estais pensando assim? a O que é mais fácil dizer ao paralítico:
        teus pecados estão perdoados ou dizer: levanta-te, toma a tua maca e
        anda? Pois bem, para que saibais que o Filho do homem tem na terra poder
        de perdoar os pecados disse ao paralítico eu te digo: levanta-te, toma a
        tua maca e vai para casa. Ele se levantou, pegou logo a sua maca e saiu
        à vista de todos. Todos se espantaram e se puseram a louvar a Deus,
        dizendo: Nunca vimos coisa igual! Mar 2, 1-12
      </Text>

      <H5 text="234 - Que nos ensina o décimo artigo do Credo: na remissão dos pecados?" />
      <Text className="text-base">
        O décimo artigo do Credo ensina-nos que Jesus Cristo deixou à sua Igreja
        o poder de perdoar os pecados.
      </Text>

      <H5 text="235 - Pode a Igreja perdoar toda a espécie de pecados?" />
      <Text className="text-base">
        Sim, a Igreja pode perdoar todos os pecados, por numerosos e graves que
        sejam, porque Jesus Cristo Lhe concedeu pleno poder de ligar e desligar.
      </Text>

      <H5 text="236 - Quem são os que na Igreja exercem este poder de perdoar os pecados?" />
      <Text className="text-base">
        Os que na Igreja exercem o poder de perdoar os pecados são, em primeiro
        lugar, o Papa que é o único que possui a plenitude de tal poder; depois
        os Bispos e, sob a dependência dos Bispos, os Sacerdotes.
      </Text>

      <H5 text="237 - Como perdoa a Igreja os pecados?" />
      <Text className="text-base">
        A Igreja perdoa os pecados pelos merecimentos de Jesus Cristo,
        administrando os Sacramentos por Ele instituídos para esse fim,
        especialmente o Batismo e a Penitência.
      </Text>

      <Text className="h2">
        XII - <Text className="em">Do undécimo artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        No dia seguinte, isto é, depois da sexta-feira, os sumos sacerdotes e os
        fariseus foram a Pilatos e disseram: Senhor, lembramo-nos de que aquele
        impostor disse em vida: Depois de três dias ressuscitarei. Manda, pois,
        guardar o sepulcro até o terceiro dia para não acontecer que os seus
        discípulos venham roubar o corpo e digam ao povo: Ele ressuscitou dos
        mortos. E esta última impostura será pior do que a primeira. Pilatos
        lhes disse: Vós tendes a guarda. Ide e guardai-o como bem entendeis.
        Eles foram e puseram guarda ao sepulcro depois de selarem a pedra.
        Passado o sábado, ao amanhecer do primeiro dia da semana, Maria Madalena
        e a outra Maria foram ver o sepulcro. Subitamente houve um grande
        terremoto, pois um anjo do Senhor desceu do céu, aproximou-se, rolou a
        pedra do sepulcro e sentou-se nela. O seu aspecto era como o de um
        relâmpago e sua veste, branca como a neve. Paralisados de medo, os
        guardas ficaram como mortos. O anjo, dirigindo-se às mulheres, disse:
        Não tenhais medo. Sei que procurais Jesus, o crucificado. Ele não está
        aqui! Ressuscitou conforme tinha dito. Vinde ver o lugar onde estava.
        Ide logo dizer a seus discípulos que ele ressuscitou dos mortos e que
        vai à frente de vós para a Galileia. Lá o vereis. E isso que eu tinha a
        dizer. Jesus aparece às mulheres. Afastando-se logo do túmulo, cheias de
        temor e grande alegria, correram para dar a notícia aos discípulos. De
        repente, Jesus saiu ao encontro delas e disse-lhes: Salve! Elas se
        aproximaram, abraçaram-lhe os pés e se prostraram diante dele.
        Disse-lhes então Jesus: Não tenhais medo! Ide dizer a meus irmãos que se
        dirijam à Galileia e lá me verão. Mt 27, 62-65; 28, 1-10.
      </Text>

      <H5 text="238 - Que nos ensina o undécimo artigo do Credo: na ressurreição da carne?" />
      <Text className="text-base">
        O undécimo artigo do Credo ensina-nos que todos os homens hão de
        ressuscitar, retomando cada alma o corpo que teve nesta vida.
      </Text>

      <H5 text="239 - Como se fará a ressurreição dos mortos?" />
      <Text className="text-base">
        A ressurreição dos mortos realizar-se-á por virtude de Deus Onipotente,
        a Quem nada é impossível.
      </Text>

      <H5 text="240 - Quando será a ressurreição dos mortos?" />
      <Text className="text-base">
        A ressurreição de todos os mortos será no fim do mundo, e depois
        seguir-se-á o Juízo universal.
      </Text>

      <H5 text="241 - Por que quer Deus a ressurreição dos corpos?" />
      <Text className="text-base">
        Deus quer a ressurreição dos corpos para que a nossa alma, tendo feito o
        bem ou o final unida ao corpo, receba juntamente com ele o prêmio ou o
        castigo.
      </Text>

      <H5 text="242 - Ressuscitarão os homens, todos da mesma maneira?" />
      <Text className="text-base">
        Não. Haverá enorme diferença entre os corpos dos eleitos e os corpos dos
        condenados; porque somente os corpos dos eleitos terão, à semelhança de
        Jesus Cristo ressuscitado, os dotes dos corpos gloriosos.
      </Text>

      <H5 text="243 - Quais são estes dotes que adornarão os corpos dos bem-aventurados?" />
      <Text className="text-base">
        Os dotes que adornarão os corpos gloriosos dos bem-aventurados são:
      </Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1º - a impassibilidade, pela qual eles não mais poderão estar sujeitos
          a males, nem dores de espécie alguma, nem às necessidades de alimento,
          de repouso e de qualquer outra coisa;
        </Text>
        <Text className="li text-justify">
          2º - a claridade, pela qual eles resplandecerão como o sol e as
          estrelas;
        </Text>
        <Text className="li text-justify">
          3º - a agilidade, pela qual eles poderão passar num momento sem
          fadiga, de um lugar para outro e da terra ao Céu;
        </Text>
        <Text className="li text-justify">
          4º - a sutileza, pela qual eles poderão, sem obstáculo, passar através
          de qualquer corpo, como fez Jesus Cristo ressuscitado.
        </Text>
      </View>
      <H5 text="244 - Como serão os corpos dos condenados?" />
      <Text className="text-base">
        Os corpos dos condenados serão destituídos dos dotes dos corpos
        gloriosos dos bem-aventurados, e trarão o horrível estigma da reprovação
        eterna.
      </Text>

      <Text className="h2">
        XIII - <Text className="em">Do duodécimo artigo do Credo</Text>
      </Text>
      <Text className="text-base">
        Lázaro caiu doente em Betânia, onde estavam Maria e sua irmã Marta.
        Maria era aquela que tinha ungido o Senhor com óleo perfumado e lhe
        tinha enxugado os pés com os cabelos. Seu irmão Lázaro estava enfermo.
        As irmãs mandaram dizer a Jesus: Senhor, aquele a quem amas está doente.
        Quando ouviu isso, Jesus disse: Esta doença não causará a morte mas se
        destina à glória de Deus: por ela o Filho de Deus será glorificado. Ora,
        Jesus amava Marta, sua irmã e Lázaro. Embora estivesse informado de que
        ele estava doente, demorou-se ainda dois dias naquele lugar. Depois
        disse aos discípulos: Voltemos para a Judeia. Os discípulos disseram:
        Mestre, há pouco os judeus te queriam apedrejar e tu voltas para lá?
        Jesus respondeu: Não são doze as horas do dia? Se alguém caminha durante
        o dia, não tropeça porque vê a luz deste mundo; mas se caminha de noite,
        tropeça porque lhe falta a luz. Depois destas palavras, acrescentou:
        Lázaro, nosso amigo, adormeceu mas eu vou despertá-lo. Senhor, se ele
        está dormindo é porque vai ficar bom disseram os discípulos. Jesus se
        referia à morte, mas eles pensavam que estivesse falando do repouso do
        sono. Então Jesus lhes falou claramente: Lázaro morreu. Eu me alegro de
        não ter estado lá, para que vós assim acrediteis. Mas vamos até ele.
        Tomé, chamado Dídimo, disse então aos companheiros: Vamos nós também
        para morrermos com ele. Quando Jesus chegou, já fazia quatro dias que
        Lázaro estava no túmulo. Betânia ficava perto de Jerusalém, a uns três
        quilômetros. Muitos judeus tinham vindo até Marta e Maria para as
        consolar da morte do irmão. Quando Marta ouviu que Jesus havia chegado,
        saiu-lhe ao encontro. Maria ficou sentada em casa. Marta disse a Jesus:
        Senhor, se tivesses estado aqui, meu irmão não teria morrido. Sei,
        porém, que tudo quanto pedires a Deus ele te concederá. Jesus respondeu:
        Teu irmão ressuscitará.\* Sei que ele ressuscitará na ressurreição do
        último dia disse Marta. Jesus lhe disse: Eu sou a ressurreição e a vida.
        Quem crê em mim, ainda que esteja morto, viverá. E quem vive e crê em
        mim jamais morrerá. Crês isto? Sim, Senhor respondeu ela creio que és o
        Cristo, o Filho de Deus, que devia vir a este mundo. Dito isso, ela foi
        chamar sua irmã Maria e disse-lhe baixinho: O Mestre está aí e te chama.
        Ao ouvir isso, Maria levantou-se imediatamente e foi ao encontro dele. É
        que Jesus ainda não havia entrado no povoado mas ficou lá onde Marta o
        tinha encontrado. Os judeus, que estavam em casa com ela e a consolavam,
        vendo que Maria se tinha levantado e saído às pressas, seguiram-na
        pensando: Ela vai ao sepulcro para chorar. Assim que Maria chegou onde
        Jesus estava, lançou-se aos pés dele e disse: Senhor, se tivesses estado
        aqui, o meu irmão não teria morrido. Quando viu que Maria e todos os
        judeus que vinham com ela estavam chorando, Jesus se comoveu
        profundamente. E emocionado, perguntou: Onde o pusestes? Senhor, vem ver
        disseram-lhe. Jesus começou a chorar. Os judeus comentavam: Vede como
        ele o amava. Al- guns, porém, disseram: Ele, que abriu os olhos do cego
        de nascença, não podia fazer com que Lázaro não morresse? Tomado
        novamente de profunda emoção, Jesus se dirigiu ao sepulcro. Era uma
        gruta com uma pedra colocada na entrada. Jesus ordenou: Tirai a pedra.
        Marta, irmã do morto, disse: Senhor, já está cheirando mal, pois já são
        quatro dias que está aí. Jesus respondeu: Eu não te disse que, se
        acreditasses, verias a glória de Deus? Tiraram então a pedra. Jesus
        levantou os olhos para o alto e disse: Pai, eu te dou graças porque me
        atendeste. Eu sei que sempre me atendes, mas digo isto por causa da
        multidão que me rodeia, para que creiam que tu me enviaste. Depois
        dessas palavras, gritou bem forte: Lázaro, vem para fora! O morto saiu
        com os pés e as mãos atados com faixas e o rosto envolto num sudário.
        Jesus ordenou: Desatai-o e deixai-o andar. João 11, 1-44
      </Text>

      <H5 text="245 - Que nos ensina o último artigo do Credo: na vida eterna?" />
      <Text className="text-base">
        O último artigo do Credo ensina-nos que depois da vida presente há
        outra, ou eternamente feliz para os eleitos no Paraíso, ou eternamente
        desgraçada para os condenados no Inferno.
      </Text>

      <H5 text="246 - Podemos compreender a felicidade do Paraíso?" />
      <Text className="text-base">
        Não. Não podemos compreender a felicidade do Paraíso, porque excede os
        conhecimentos da nossa inteligência limitada, e porque os bens ao Céu
        não podem comparar-se aos bens deste mundo.
      </Text>

      <H5 text="247 - Em que consiste a felicidade dos eleitos?" />
      <Text className="text-base">
        A felicidade dos eleitos consiste em ver, amar e possuir para sempre a
        Deus, fonte de todo o bem.
      </Text>

      <H5 text="248 - Em que consiste a desgraça dos condenados?" />
      <Text className="text-base">
        A desgraça dos condenados consiste em serem para sempre privados da
        vista de Deus, e punidos com tormentos eternos no Inferno.
      </Text>

      <H5 text="249 - Por agora são só para as almas os bens do Paraíso e os males do Inferno?" />
      <Text className="text-base">
        Os bens do Paraíso e os males do Inferno, por agora, são só para as
        almas porque por enquanto só as almas estão no Paraíso, ou no Inferno;
        mas depois da ressurreição da carne, os homens, na plenitude da sua
        natureza, isto é, em corpo e alma, serão ou felizes ou infelizes para
        sempre.
      </Text>

      <H5 text="250 - Serão iguais Para os eleitos os bens do Paraíso, e para os condenados os males do Inferno?" />
      <Text className="text-base">
        Os bens do Paraíso para os eleitos, e os males do Inferno para os
        condenados, serão iguais na substância e na duração eterna; mas na
        medida, isto é, no grau, serão maiores ou menores, segundo os méritos ou
        deméritos de cada um.
      </Text>

      <H5 text="251 - Que quer dizer a palavra Amén no fim do Credo?" />
      <Text className="text-base">
        A palavra Amén no fim das orações significa: assim seja; no fim do Credo
        significa: assim é, que quer dizer: creio que é absolutamente verdadeiro
        tudo o que nestes doze artigos se contém, e estou mais certo disso do
        que se o visse com os meus olhos.
      </Text>

      <H1 text="Segunda Parte" />
      <Text className="aside">Da Oração</Text>
      <Text className="h2">
        I - <Text className="em">Da oração em geral</Text>
      </Text>
      <Text className="text-base">
        Jesus contou também a seguinte parábola para alguns que confiavam em si
        mesmos, tendo-se por justos, e desprezavam os outros: Dois homens
        subiram ao Templo para orar; um era fariseu, o outro, um cobrador de
        impostos. O fariseu rezava, de pé, desta maneira: Ó meu Deus, eu te
        agradeço por não ser como os outros homens, que são ladrões, injustos,
        adúlteros, nem mesmo como este cobrador de impostos. Jejuo duas vezes
        por semana, pago o dízimo de tudo que possuo. Mas o cobrador de
        impostos, parado à distância, nem se atrevia a levantar os olhos para o
        céu. Batia no peito, dizendo: Ó meu Deus, tem piedade de mim, pecador!
        Eu vos digo: Este voltou justificado para casa e não aquele. Porque todo
        aquele que se eleva será humilhado, e quem se humilha será elevado. Luc
        18, 9-14
        {"\n"} E quando orardes, não sejais como os hipócritas, que gostam de
        rezar em pé nas sinagogas e nas esquinas das praças para serem vistos
        pelos outros. Eu vos garanto: eles já receberam a recompensa. Mas quando
        rezares, entra no teu quarto, fecha a porta e reza ao teu Pai que está
        no oculto. E o Pai, que vê no oculto, te dará a recompensa. E nas
        orações não faleis muitas palavras, como os pagãos. Eles pensam que
        serão ouvidos por causa das muitas palavras. Não os imiteis, pois o Pai
        já sabe de vossas necessidades antes mesmo de pedirdes. Mt 6, 2-9
      </Text>
      <H5 text="252 - De que trata a segunda parte da Doutrina Cristã?" />
      <Text className="text-base">
        A segunda parte da Doutrina Cristã trata da oração em geral, e do
        Padre-Nosso em particular.
      </Text>

      <H5 text="253 - Que é a oração?" />
      <Text className="text-base">
        A oração é uma elevação da alma a Deus, para adorá-Lo, para Lhe dar
        graças e para Lhe pedir aquilo de que precisamos.
      </Text>

      <H5 text="254 - Como se divide a oração?" />
      <Text className="text-base">
        A oração divide-se em mental e vocal. Oração mental é a que se faz só
        com a alma; oração vocal a que se faz com as palavras acompanhadas da
        atenção do espírito e da devoção do coração.
      </Text>

      <H5 text="255 - Pode dividir-se de outra maneira a oração?" />
      <Text className="text-base">
        A oração pode também dividir-se em particular e pública.
      </Text>

      <H5 text="256 - Que é a oração particular?" />
      <Text className="text-base">
        A oração particular é a que faz cada um em particular, por si ou pelos
        outros.
      </Text>

      <H5 text="257 - Que é a oração pública?" />
      <Text className="text-base">
        A oração pública é a que fazem os ministros sagrados, em nome da Igreja,
        e pela salvação do povo fiel. Pode-se chamar pública também a oração
        feita em comum e publicamente pelos fiéis, como nas procissões, nas
        peregrinações e na Igreja.
      </Text>

      <H5 text="258 - Temos nós esperança fundamentada de obter por meio da oração os auxílios e graças de que necessitamos?" />
      <Text className="text-base">
        A esperança de obter de Deus as graças de que necessitamos, é
        fundamentada nas promessas de Deus onipotente, muito misericordioso e
        fidelíssimo, e nos merecimentos de Jesus Cristo.
      </Text>

      <H5 text="259 - Em nome de quem devemos pedir a Deus as graças de que necessitamos?" />
      <Text className="text-base">
        Devemos pedir a Deus as graças de que necessitamos, em nome de Jesus
        Cristo, como Ele mesmo nos ensinou e como pratica a Igreja, a qual
        termina sempre as suas orações com estas palavras:{" "}
        <Text className="font-italic">per Dominum nostrum Jesum Christum</Text>,
        que quer dizer: por Nosso Senhor Jesus Cristo.
      </Text>
      <H5 text="260 - Por que devemos pedir a Deus as graças em nome de Jesus Cristo?" />
      <Text className="text-base">
        Devemos pedir as graças em nome de Jesus Cristo, porque, sendo Ele o
        nosso mediador, só por meio d'Ele podemos aproximar-nos do trono de
        Deus.
      </Text>

      <H5 text="261 - Se a oração tem tanta eficácia, como é que tantas vezes não são atendidas as nossas orações?" />
      <Text className="text-base">
        Muitas vezes as nossas orações não são atendidas, ou porque pedimos
        coisas que não convêm à nossa eterna salvação, ou porque não pedimos
        como deveríamos.
      </Text>

      <H5 text="262 - Quais são as coisas que principalmente devemos pedir a Deus?" />
      <Text className="text-base">
        Devemos principalmente pedir a Deus a sua glória, a nossa salvação e os
        meios para consegui-la.
      </Text>

      <H5 text="263 - Não é também lícito pedir bens temporais?" />
      <Text className="text-base">
        Sim, é também lícito pedir a Deus os bens temporais, sempre com a
        condição de que sejam conformes à sua santíssima vontade, e não sejam
        obstáculo à nossa eterna salvação.
      </Text>

      <H5 text="264 - Se Deus sabe tudo aquilo de que necessitamos, por que devemos rezar?" />
      <Text className="text-base">
        Embora Deus saiba tudo aquilo de que necessitamos, quer todavia que nós
        Lho peçamos, para reconhecermos que é Ele que dá todos os bens, para Lhe
        testemunharmos a nossa humilde submissão, e para merecermos os seus
        favores.
      </Text>

      <H5 text="265 - Qual é a primeira e a melhor disposição para tornar eficazes as nossas orações?" />
      <Text className="text-base">
        A primeira e a melhor disposição, para tornar eficazes as nossas
        orações, é estar em estado de graça, ou, não o estando, ao menos desejar
        recuperar esse estado.
      </Text>

      <H5 text="266 - Que mais disposições se requerem para bem orar?" />
      <Text className="text-base">
        Para bem orar requerem-se especialmente o recolhimento, a humildade, a
        confiança, a perseverança e a resignação.
      </Text>

      <H5 text="267 - Que quer dizer orar com recolhimento?" />
      <Text className="text-base">
        Quer dizer: pensar que estamos a falar com Deus; e por isso devemos orar
        com todo o respeito e a devoção possíveis, evitando, quanto for
        possível, as distrações, isto é, todo o pensamento estranho à oração.
      </Text>

      <H5 text="268 - Diminuem as distrações o merecimento da oração?" />
      <Text className="text-base">
        Sim, quando nós mesmos as provocamos, ou não as repelimos com
        diligência. Se porém fizermos quanto podemos para estarmos recolhidos em
        Deus, então as distrações não diminuem o merecimento da nossa oração,
        mas até o podem aumentar.
      </Text>

      <H5 text="269 - Que se requer para fazermos oração com recolhimento?" />
      <Text className="text-base">
        Devemos antes da oração afastar todas as ocasiões de distração, e
        durante a oração devemos pensar que estamos na presença de Deus, que nos
        vê e nos ouve.
      </Text>

      <H5 text="270 - Que quer dizer orar com humildade?" />
      <Text className="text-base">
        Quer dizer: reconhecer sinceramente a nossa indignidade, incapacidade e
        miséria, acompanhando a oração com a compostura do corpo.
      </Text>

      <H5 text="271 - Que quer dizer orar com confiança?" />
      <Text className="text-base">
        Quer dizer que devemos ter firme esperança de sermos atendidos, se daí
        provier a glória de Deus e o nosso verdadeiro bem.
      </Text>

      <H5 text="272 - Que quer dizer orar com perseverança?" />
      <Text className="text-base">
        Quer dizer que não nos devemos cansar de orar, se Deus não nos atender
        imediatamente, senão que devemos continuar a orar ainda com mais fervor.
      </Text>

      <H5 text="273 - Que quer dizer orar com resignação?" />
      <Text className="text-base">
        Quer dizer que nos devemos conformar com a vontade de Deus, que conhece
        melhor do que nós quanto nos é necessário para a nossa salvação eterna,
        ainda mesmo no caso em que as nossas orações não fossem atendidas.
      </Text>

      <H5 text="274 - Atende Deus sempre as orações bem feitas?" />
      <Text className="text-base">
        Sim, Deus atende sempre as orações bem feitas; mas da maneira que Ele
        sabe ser mais útil para a nossa salvação eterna, e não sempre segundo a
        nossa vontade.
      </Text>

      <H5 text="275 - Que efeitos produz em nós a oração?" />
      <Text className="text-base">
        A oração faz-nos reconhecer a nossa dependência, em todas as coisas, de
        Deus, supremo Senhor, faz-nos progredir na virtude, alcança-nos de Deus
        misericórdia fortalece- nos contra as tentações, conforta-nos nas
        tribulações, auxilia-nos nas nossas necessidades e alcança-nos a graça
        da perseverança final.
      </Text>

      <H5 text="276 - Quando devemos especialmente orar?" />
      <Text className="text-base">
        Devemos orar especialmente nos perigos, nas tentações e no momento da
        morte; além disso, devemos orar frequentemente, e é bom que o façamos
        pela manhã e à noite, e no princípio das ações importantes do dia.
      </Text>

      <H5 text="277 - Por quem devemos orar?" />
      <Text className="text-base">
        Devemos orar por todos; isto é, por nós mesmos pelos nossos parentes,
        superiores, benfeitores, amigos e inimigos; pela conversão dos pobres
        pecadores, daqueles que estão fora da verdadeira Igreja, e pelas
        benditas almas do Purgatório.
      </Text>

      <Text className="h2">
        II - <Text className="em">Da oração dominical</Text>
      </Text>
      <Text className="text-base">
        Um dia, Jesus estava rezando num certo lugar. Quando terminou, um dos
        discípulos lhe pediu: Senhor, ensina-nos a rezar como João ensinou a
        seus discípulos. Ele lhes disse: Quando rezardes, dizei: Pai,
        santificado seja o teu nome, venha o teu Reino. O pão nosso de cada dia
        nos dá hoje. E perdoa-nos os nossos pecados, pois também nós perdoamos a
        todo o nosso devedor, e não nos deixes cair em tentação. Jesus
        acrescentou: Se algum de vós tiver um amigo e for procurá-lo à
        meia-noite e lhe disser: Amigo, empresta-me três pães, pois um amigo meu
        chegou de viagem e não tenho nada para oferecer, e ele responder lá de
        dentro: Não me incomodes, a porta já está fechada e eu e meus filhos já
        estamos deitados; não posso me levantar para te dar os pães. Eu vos
        digo: Se ele não se levantar e não lhe der os pães por ser seu amigo, ao
        menos se levantará por causa do incômodo e lhe dará quantos necessitar.
        Pedir com confiança Digo-vos, pois: Pedi e vos será dado; buscai e
        achareis; batei e vos abrirão. Pois quem pede, recebe; quem procura,
        acha; e a quem bate, se abre. Que pai dentre vós dará uma pedra a seu
        filho que pede um pão? Ou lhe dará uma cobra se ele pedir um peixe? Ou
        se pedir um ovo lhe dará um escorpião? Se, pois, vós que sois maus,
        sabeis dar coisas boas aos vossos filhos, quanto mais o Pai do céu
        saberá dar o Espírito Santo aos que pedirem! Luc 11, 1-13
      </Text>

      <H4 text="1º - Da oração dominical em geral" />
      <H5 text="278 - Qual é a oração vocal mais excelente?" />
      <Text className="text-base">
        A oração vocal mais excelente é aquela que o próprio. o Jesus Cristo nos
        ensinou, isto é, o Padre-Nosso.
      </Text>

      <H5 text="279 - Por que é o Padre-Nosso a oração mais excelente?" />
      <Text className="text-base">
        O Padre-Nosso é ti oração mais excelente porque foi o próprio Jesus
        Cristo que a compôs e no-la ensinou,- porque contém claramente, em
        poucas palavras, tudo o que podemos esperar de Deus; e porque é a regra
        e o modelo de todas as outras orações.
      </Text>

      <H5 text="280 - É também o Padre-Nosso a oração mais eficaz? -" />
      <Text className="text-base">
        O Padre-Nosso é também a oração mais eficaz, porque é a mais agradável a
        Deus, porque é feita com as mesmas palavras que nos ditou o seu Divino
        Filho.
      </Text>

      <H5 text="281 - Por que se chama o Padre-Nosso oração dominical?" />
      <Text className="text-base">
        Chama-se o Padre-Nosso oração dominical, que quer dizer oração do
        Senhor, precisamente porque ti ensinou Jesus Cristo por sua própria
        boca.
      </Text>

      <H5 text="282 - Quantas petições há no Padre-Nosso?" />
      <Text className="text-base">
        No Padre-Nosso há sete petições precedidas de um preâmbulo.
      </Text>

      <H5 text="283 - Rezai o Padre-Nosso." />
      <Text className="text-base">Padre-Nosso, que estais no Céu:</Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1ª - Santificado seja o vosso nome.
        </Text>
        <Text className="li text-justify">2ª - Venha a nós o vosso reino.</Text>
        <Text className="li text-justify">
          3ª - Seja feita a vossa vontade, assim na terra como no Céu.
        </Text>
        <Text className="li text-justify">
          4ª - O pão nosso de cada dia nos dai hoje.
        </Text>
        <Text className="li text-justify">
          5ª - Perdoai-nos as nossas dívidas assim como nós perdoamos aos nossos
          devedores.
        </Text>
        <Text className="li text-justify">
          6ª - E não nos deixeis, cair em tentação.
        </Text>
        <Text className="li text-justify">
          7ª - Mas livrai-nos do mal. Amén
        </Text>
      </View>
      <H5 text="284 - Por que, invocando a Deus no princípio da oração dominical, O chamamos nosso Pai?" />
      <Text className="text-base">
        No princípio da oração dominical chamamos a Deus nosso Pai para
        despertar a nossa confiança na sua infinita bondade, visto sermos seus
        filhos.
      </Text>

      <H5 text="285 - Por que podemos nós dizer que somos filhos de Deus?" />
      <Text className="text-base">Somos filhos de Deus:</Text>

      <View className="list-styled">
        <Text className="li text-justify">
          1º - porque Ele nos criou à sua imagem e nos conserva e governa com a
          sua providência;
        </Text>
        <Text className="li text-justify">
          2º - porque, por especial benevolência, Ele nos adotou no Batismo como
          irmãos de Jesus Cristo e co-herdeiros, juntamente com Ele, da eterna
          glória.
        </Text>
      </View>
      <H5 text="286 - Por que chamamos a Deus Pai nosso, e não Pai meu?" />
      <Text className="text-base">
        Chamamos a Deus Pai nosso e não Pai meu, porque todos somos seus filhos,
        e portanto devemos considerar-nos e amar-nos todos como irmãos, e orar
        uns pelos outros.
      </Text>

      <H5 text="287 - Estando Deus em toda a parte, por que é que Lhe dizemos: que estais no Céu?" />
      <Text className="text-base">
        Deus está em toda a parte; mas dizemos: Padre Nosso que estais no Céu,
        para elevar os nossos corações ao Céu, onde Deus se manifesta na glória
        aos seus filhos.
      </Text>

      <H4 text="2º - Da primeira petição do Padre-Nosso" />
      <H5 text="288 - Que pedimos a Deus na primeira petição: santificado seja o vosso nome?" />
      <Text className="text-base">
        Na primeira petição: santificado seja o vosso nome, pedimos que Deus
        seja conhecido, amado, honrado e servido por todos os homens, e por nós
        em particular.
      </Text>

      <H5 text="289 - Que temos em vista, ao pedir que Deus seja conhecido, amado e servido por todos os homens?" />
      <Text className="text-base">
        Temos em vista pedir que os infiéis cheguem ao conhecimento do
        verdadeiro Deus, que os hereges reconheçam os seus erros, que os
        cismáticos voltem à unidade da Igreja, que os pecadores se corrijam e
        que os justos sejam perseverantes no bem.
      </Text>

      <H5 text="290 - Por que em primeiro lugar pedimos que seja santificado o nome de Deus?" />
      <Text className="text-base">
        Em primeiro lugar pedimos que seja santificado o nome de Deus, porque
        devemos prezar mais a glória de Deus do que todos os nossos bens e
        vantagens.
      </Text>

      <H5 text="291 - De que maneira podemos nós promover a glória de Deus?" />
      <Text className="text-base">
        Podemos promover a glória de Deus com a oração, o bom exemplo e
        dirigindo para Ele todos os nossos pensamentos afetos e ações.
      </Text>

      <H4 text="3º - Da segunda petição do Padre-Nosso" />
      <H5 text="292 - Que entendemos por reino de Deus?" />
      <Text className="text-base">
        Por reino de Deus entendemos uni tríplice reino espiritual, a saber: o
        reino de Deus em nós, ou o reino da graça; o reino de Deus na terra,
        isto é, a Santa Igreja Católica; e o reino de Deus nos céus, ou o
        Paraíso.
      </Text>

      <H5 text="293 - Que pedimos com as palavras: venha a nós o vosso reino, com relação à graça?" />
      <Text className="text-base">
        Com relação à graça, pedimos que Deus reine em nós com a sua graça
        santificante, pela qual Ele se compraz em residir em nós como um rei em
        seu palácio, e que nos mantenha unidos a si pelas virtudes da fé, da
        esperança e da caridade, pelas quais reina sobre ti nossa inteligência,
        sobre o nosso coração e sobre a nossa vontade.
      </Text>

      <H5 text="294 - Que pedimos com as palavras venha a nós o vosso reino, com relação à Igreja?" />
      <Text className="text-base">
        Com relação à Igreja, pedimos que Ela se dilate cada vez mais, e se
        propague por todo o mundo para salvação dos homens.
      </Text>

      <H5 text="295 - Que pedimos com as palavras venha a nós o vosso reino, com relação à glória?" />
      <Text className="text-base">
        Com relação à glória, pedimos que possamos um dia ser admitidos no Santo
        Paraíso, para o qual fomos criados e onde seremos plenamente felizes.
      </Text>
      <H4 text="4º - Da terceira Petição do Padre-Nosso" />
      <H5 text="296 - Que pedimos na terceira petição: seja feita a vossa vontade, assim na terra como no Céu?" />
      <Text className="text-base">
        Na terceira petição: seja feita a vossa vontade, assim na terra como no
        Céu. pedimos a graça de fazer em todas as coisas a vontade de Deus,
        obedecendo aos seus santos Mandamentos tão prontamente como os Anjos e
        os Santos Lhe obedecem no Céu. Pedimos, além disso, a graça de
        corresponder às inspirações divinas e de viver resignados à vontade de
        Deus, quando Ele nos manda tribulações.
      </Text>
      <H5 text="297 - É-nos necessário cumprir a vontade de Deus?" />
      <Text className="text-base">
        É-nos tão necessário cumprir a vontade de Deus, como nos é necessário
        conseguir a salvação eterna, porque Jesus Cristo disse que só entrará
        tio reino dos céus quem tiver feito a vontade de seu Pai.
      </Text>
      <H5 text="298 - De que maneira podemos conhecer qual a Vontade de Deus a nosso respeito?" />
      <Text className="text-base">
        A Vontade de Deus rios é manifestada pelos Mandamentos de sua Lei e
        pelos preceitos de sua Santa Igreja. Nossos superiores espirituais,
        postos por Deus para guiar-nos no caminho da Salvação, nos orientam a
        fim de que conheçamos os desígnios particulares da Providência a nosso
        respeito, desígnios que se podem manifestar em divinas inspirações ou
        nas circunstâncias em que o Senhor nos tenha colocado.
      </Text>
      <H5 text="299 - Devemos sempre reconhecer a vontade de Deus nas prosperidades ou adversidades da vida?" />
      <Text className="text-base">
        Tanto nas prosperidades como nas adversidades da vida presente, devemos
        reconhecer sempre a vontade de Deus, o qual tudo dispõe ou permite para
        nosso bem.
      </Text>
      <H5 text="300 - Quer dizer que Deus nos revela sua Vontade pelos sinais dos tempos?" />
      <Text className="text-base">
        Não. A revelação Divina encerrou-se com a morte do último Apóstolo, de
        maneira que não há mais Revelação pública necessária para a salvação. A
        afirmação de que devemos ver em todas as coisas a Vontade de Deus, diz
        apenas que todas as coisas estão sujeitas à Santíssima Vontade de Deus,
        de maneira que mesmo o mal não acontece sem uma permissão de Deus, que
        sabe tirar o bem do mal, e por isso o permite. E como Deus tem sobre os
        homens uma amorosa Providência, devemos ver em todos os acontecimentos,
        bons ou maus, um desígnio de Deus que visa nossa salvação eterna.
      </Text>
      <H4 text="5º - Da quarta petição do Padre-Nosso" />
      <H5 text="301 - Que pedimos na quarta petição: o pão nosso de cada dia nos dai hoje?" />
      <Text className="text-base">
        Na quarta petição: o pão nosso de cada dia nos dai hoje, pedimos a Deus
        o que nos é necessário cada dia para a alma e para o corpo.
      </Text>
      <H5 text="302 - Que pedimos a Deus para a nossa alma?" />
      <Text className="text-base">
        Para a nossa alma pedimos a Deus o sustento da vida espiritual, isto é,
        pedimos ao Senhor que nos dê a sua graça, da qual a todo o instante
        temos necessidade.
      </Text>
      <H5 text="303 - Como se sustenta a vida da nossa alma?" />
      <Text className="text-base">
        A vida da nossa alma sustenta-se especialmente com o alimento da palavra
        divina, e com o Santíssimo Sacramento do altar.
      </Text>
      <H5 text="304 - Que pedimos a Deus para o nosso corpo?" />
      <Text className="text-base">
        Para o nosso corpo pedimos o que é necessário para o sustento da vida
        temporal.
      </Text>
      <H5 text="305 - Por que dizemos: o pão nosso nos dai hoje, não dizemos antes: dai-nos hoje o pão?" />
      <Text className="text-base">
        Dizemos: O pão nosso nos dai hoje, e não dizemos: dai-nos hoje o pão,
        para excluir todo o desejo tio, bens alheios. Por isso pedimos ao Senhor
        que nos ajude nos ganhos justos e lícitos, a fim de granjearmos o
        sustento com o nosso trabalho, sem furtos nem fraudes.
      </Text>
      <H5 text="306 - Por que dizemos: o pão nos dai, e não: o pão me dai?" />
      <Text className="text-base">
        Dizemos: nos dai, e não: me dai, para nos lembrarmos de que, assim como
        os bens nos vêm de Deus, assim também se Ele no-los dá em abundância, é
        para que distribuamos o supérfluo pelos pobres.
      </Text>
      <H5 text="307 - Por que acrescentamos: de cada dia?" />
      <Text className="text-base">
        Acrescentamos de cada dia, porque devemos desejar o que nos é necessário
        para a vida, e não a fartura dos alimentos e dos bens da terra.
      </Text>
      <H5 text="308 - Que quer dizer mais a palavra hoje na quarta petição?" />
      <Text className="text-base">
        A palavra hoje quer dizer que não devemos estar demasiadamente
        preocupados com o futuro, irias pedir o que rios é necessário rio
        momento.
      </Text>
      <H4 text="6º - Da quinta petição do Padre-Nosso" />
      <H5 text="309 - Que pedimos na quinta petição: Perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores?" />
      <Text className="text-base">
        Na quinta petição: perdoai-nos as nossas dívidas, assim como nós
        perdoamos aos nossos devedores, pedimos a Deus que nos perdoe os nossos
        pecados, como nós perdoamos aos que nos ofendem.
      </Text>
      <H5 text="310 - Por que nossos pecados são chamados de dívidas?" />
      <Text className="text-base">
        Nossos pecados são chamados de dívidas porque por causa deles devemos
        satisfazer a divina justiça, seja nesta vida, seja na outra.
      </Text>
      <H5 text="311 - Os que não perdoam ao próximo, podem esperar que Deus lhes perdoe?" />
      <Text className="text-base">
        Os que não perdoam ao próximo não têm razão alguma para esperar que Deus
        lhes perdoe, tanto mais que se condenam por si mesmos, dizendo ti Deus
        que lhes perdoe, como eles perdoam ao próximo.
      </Text>
      <H4 text="7º - Da sexta petição do Padre-Nosso" />
      <H5 text="312 - Que pedimos na sexta petição: e não nos deixeis cair em tentação?" />
      <Text className="text-base">
        Na sexta petição: e não nos deixeis cair em tentação, pedimos a Deus que
        nos livre das tentações, ou não permitindo que sejamos tentados, ou
        dando-nos graças para não sermos vencidos.
      </Text>
      <H5 text="313 - Que são as tentações?" />
      <Text className="text-base">
        As tentações são um incitamento ao pecado que nos vem do demônio, ou das
        pessoas más ou das nossas paixões.
      </Text>
      <H5 text="314 - É pecado ter tentações?" />
      <Text className="text-base">
        Não é pecado ter tentações, mas é pecado consentir nelas, ou expor-se
        voluntariamente ao perigo de consentir.
      </Text>
      <H5 text="315 - Por que permite Deus que sejamos tentados?" />
      <Text className="text-base">
        Deus permite que sejamos tentados, para provar a nossa fidelidade, para
        fortalecer as nossas virtudes e para aumentar os nossos merecimentos.
      </Text>
      <H5 text="316 - Que devemos fazer para evitar as tentações?" />
      <Text className="text-base">
        Para evitar as tentações devemos fugir das ocasiões perigosas, guardar
        os sentidos, receber com frequência a os santos sacramentos, fazer uso
        da oração, especialmente da devoção a Maria Santíssima, Senhora Nossa.
      </Text>
      <H4 text="8º - Da sétima petição do Padre-Nosso" />
      <H5 text="317 - Que pedimos na sétima petição: mas livrai-nos do mal?" />
      <Text className="text-base">
        Na sétima petição: mas livrai-nos do mal, pedimos a Deus que nos livre
        dos males passados, presentes, futuros, e especialmente do sumo mal, que
        é o pecado, da condenação eterna, que é o seu castigo.
      </Text>
      <H5 text="318 - Por que dizemos: livrai-nos do mal, e não: dos males?" />
      <Text className="text-base">
        Dizemos: livrai-nos do mal, e não: dos males, por que não devemos
        desejar ser isentos de todos os males desta vida, mas só daqueles que
        são nocivos à nossa alma, e por isso pedimos a libertação do mal em
        geral, isto é, de tudo aquilo que Deus vê que para nós é mal.
      </Text>
      <H5 text="319 - Não é lícito pedir a Deus que nos livre de algum mal em particular, por exemplo, de uma doença?" />
      <Text className="text-base">
        Sim. é lícito pedir a libertação de algum mal em particular, mas sempre
        entregando-nos à vontade de Deus, que pode no entanto, ordenar aquela
        tribulação para proveito da nossa alma.
      </Text>
      <H5 text="320 - Para que nos servem as tribulações que Deus nos manda?" />
      <Text className="text-base">
        As tribulações que Deus nos envia nos são úteis para fazermos penitência
        das nossas culpas, para provar nossas virtudes, e sobretudo para
        levar-nos à imitação de Jesus Cristo, nossa cabeça, ao qual é justo que
        nos conformemos nos sofrimentos, se quisermos ter parte na sua glória.
      </Text>
      <H5 text="321 - Que quer dizer Amén no fim do Padre-Nosso?" />
      <Text className="text-base">
        Amén quer dizer: assim seja, assim desejo. assim peço ao Senhor e assim
        espero.
      </Text>
      <H5 text="322 - Para se alcançarem as graças pedidas no Padre-Nosso basta rezá-lo de qualquer maneira?" />
      <Text className="text-base">
        Para se alcançarem as graças pedidas no Padre-Nosso é necessário rezá-lo
        sem precipitação, com atenção e acompanhá-lo com o coração.
      </Text>
      <H5 text="323 - Quando devemos rezar o Padre-Nosso?" />
      <Text className="text-base">
        Devemos rezar o Padre-Nosso todos os dias, por que todos os dias temos
        necessidade do auxílio de Deus.
      </Text>
      <Text className="h2">
        III - <Text className="em">Da Ave-Maria</Text>
      </Text>
      <Text className="text-base">
        No sexto mês, o anjo Gabriel foi enviado da parte de Deus para uma
        cidade da Galileia, chamada Nazaré, a uma virgem, prometida em casamento
        a um homem, chamado José, da casa de Davi. O nome da virgem era Maria.
        Entrando onde ela estava, o anjo lhe disse: Alegra-te, cheia de graça, o
        Senhor está contigo! Ao ouvir as palavras, ela se perturbou e refletia
        no que poderia significar a saudação. Mas o anjo lhe falou: Não tenhas
        medo, Maria, porque encontraste graça diante de Deus. Eis que conceberás
        e darás à luz um filho e lhe porás o nome de Jesus. Ele será grande e
        será chamado Filho do Altíssimo. O Senhor Deus lhe dará o trono de Davi,
        seu pai. Ele reinará na casa de Jacó pelos séculos e seu reino não terá
        fim. Maria perguntou ao anjo: Como acontecerá isso, pois não conheço
        homem? Em resposta o anjo lhe disse: O Espírito Santo virá sobre ti e o
        poder do Altíssimo te cobrirá com sua sombra; é por isso que o menino
        santo que vai nascer será chamado Filho de Deus. Até Isabel, tua
        parenta, concebeu um filho em sua velhice, e este é o sexto mês daquela
        que era considerada estéril, porque para Deus nada é impossível. Disse
        então Maria: Eis aqui a serva do Senhor. Aconteça comigo segundo tua
        palavra! E dela se afastou o anjo. Naqueles dias, Maria se pôs a caminho
        e foi apressadamente às montanhas para uma cidade de Judá. Entrou em
        casa de Zacarias e saudou Isabel. Aconteceu que, mal Isabel ouviu a
        saudação de Maria, a criança saltou em seu ventre; e Isabel, cheia do
        Espírito Santo, exclamou em voz alta: Bendita és tu entre as mulheres e
        bendito é o fruto do teu ventre! Donde me vem a honra que a mãe do meu
        Senhor venha a mim? Pois quando soou em meus ouvidos a voz de tua
        saudação, a criança saltou de alegria em meu ventre. Feliz é aquela que
        teve fé no cumprimento do que lhe foi dito da parte do Senhor. Luc 1,
        26-4
      </Text>
      <H5 text="324 - Que oração costumamos rezar depois do Padre-Nosso?" />
      <Text className="text-base">
        Depois do Padre-Nosso rezamos a saudação angélica, isto é, a Ave-Maria,
        por meio da qual recorremos à Santíssima Virgem.
      </Text>
      <H5 text="325 - Por que é a Ave-Maria chamada saudação angélica?" />
      <Text className="text-base">
        Chama-se a Ave-Maria saudação angélica, porque principia com a saudação
        que dirigiu à Virgem Maria o Arcanjo São Gabriel.
      </Text>
      <H5 text="326 - De quem são as palavras da Ave-Maria?" />
      <Text className="text-base">
        As palavras da Ave-Maria são, em parte do Arcanjo São Gabriel, em parte
        de Santa Isabel e em parte da Igreja.
      </Text>
      <H5 text="327 - Quais são as palavras do Arcanjo São Gabriel?" />
      <Text className="text-base">
        As palavras do Arcanjo São Gabriel são: Ave, cheia de graça; o Senhor é
        convosco, bendita sois vós entre as mulheres.
      </Text>
      <H5 text="328 - Quando disse o Anjo a Maria estas palavras?" />
      <Text className="text-base">
        O Anjo disse a Maria estas palavras quando Lhe foi anunciar da parte de
        Deus o mistério da Encarnação, que n'Ela devia operar-se.
      </Text>
      <H5 text="329 - Que temos em vista ao saudarmos a Santíssima Virgem com as mesmas palavras do Arcanjo?" />
      <Text className="text-base">
        Ao saudarmos a Santíssima Virgem com as mesmas palavras do Arcanjo, nós
        nos congratulamos com Ela, lembrando os dons e singulares privilégios
        com que Deus a favoreceu de preferência a todas as outras criaturas.
      </Text>
      <H5 text="330 - Quais são as palavras de Santa Isabel?" />
      <Text className="text-base">
        As palavras de Santa Isabel são: Bendita sois vós entre as mulheres, e
        bendito é o fruto do vosso ventre.
      </Text>
      <H5 text="331 - Quando disse Santa Isabel estas palavras?" />
      <Text className="text-base">
        Santa Isabel disse estas palavras, inspirada por Deus, quando, três
        meses antes de nascer seu filho João Batista, foi visitada pela
        Santíssima Virgem, que já trazia no seio o seu Divino Filho Jesus.
      </Text>
      <H5 text="332 - Que fazemos ao dizer estas palavras?" />
      <Text className="text-base">
        Ao dizer estas palavras de Santa Isabel, congratulamo-nos com Maria
        Santíssima pela sua excelsa dignidade de Mãe de Deus, bendizemos a Deus
        e damos-Lhe graças por nos ter dado Jesus Cristo por meio de Maria.
      </Text>
      <H5 text="333 - De quem são as demais palavras da Ave-Maria?" />
      <Text className="text-base">
        Todas as demais palavras da Ave-Maria foram acrescentadas pela Igreja.
      </Text>
      <H5 text="334 - Que pedimos com as últimas palavras da Ave-Maria?" />
      <Text className="text-base">
        Com as ultimas palavras da Ave-Maria pedimos o proteção da Santíssima
        Virgem no decurso desta vida e especialmente na hora da nossa morte, no
        qual nos será mais necessária.
      </Text>
      <H5 text="335 - Por que depois do Padre-Nosso, dizemos antes a Ave-Maria do que outra qualquer oração?" />
      <Text className="text-base">
        Porque a Santíssima Virgem é a Advogada mais poderosa junto de Jesus
        Cristo: por isso, depois de termos rezado a oração que Jesus Cristo nos
        ensinou, pedimos à Santíssima Virgem que nos alcance as graças que
        imploramos.
      </Text>
      <H5 text="336 - Por que motivo é tão poderosa a Santíssima Virgem?" />
      <Text className="text-base">
        A Santíssima Virgem é tão poderosa, porque é Mãe de Deus, e é impossível
        que não seja atendida por Ele.
      </Text>
      <H5 text="337 - Que nos ensinam os Santos a respeito da devoção à Virgem Maria?" />
      <Text className="text-base">
        A respeito da devoção a Maria, os Santos nos ensinam que os seus
        verdadeiros devotos são por Ela amados e protegidos com amor de Mãe
        muito terna, e por meio d'Ela têm a certeza de encontrar a Jesus Cristo,
        e de alcançar o Paraíso.
      </Text>
      <H5 text="338 - Qual é a devoção à Virgem Maria, que a Igreja nos recomenda de modo especial?" />
      <Text className="text-base">
        A devoção que a Igreja nos recomenda de modo especial em honra da
        Santíssima Virgem é a reza do santo Rosário.
      </Text>
      <Text className="h2">
        IV - <Text className="em">Da invocação dos Santos</Text>
      </Text>
      <Text className="text-base">
        Então os amalecitas vieram combater contra os israelitas em Rafidim.
        Moisés disse a Josué: Escolhe alguns homens e sai para combater contra
        os amalecitas. Amanhã estarei de pé no alto da colina com a vara de Deus
        na mão. Josué fez o que Moisés lhe tinha mandado, e atacou os
        amalecitas, enquanto Moisés, Aarão e Hur subiram ao topo da colina.
        Enquanto mantinha a mão levantada, Israel vencia; quando abaixava a mão,
        vencia Amalec. Como as mãos de Moisés se tornassem pesadas, pegaram uma
        pedra e a colocaram debaixo dele para sentar. Aarão e Hur, um de cada
        lado, sustentavam-lhe as mãos. Assim as mãos ficaram firmes até o
        pôr-do-sol, e Josué derrotou Amalec e sua gente a fio de espada. O
        Senhor disse a Moisés: Escreve isto para recordação num livro e comunica
        a Josué que eu apagarei a lembrança de Amalec debaixo do céu. Moisés
        construiu um altar e deu-lhe o nome o Senhor é meu estandarte, dizendo:
        Levantou a mão contra o trono do Senhor, por isso o Senhor estará em
        guerra contra Amalec, de geração em geração. Ex 17, 8-15 Quando o Senhor
        acabou de dirigir a Jó estas palavras, disse a Elifaz de Temã: Estou
        indignado contra ti e teus dois companheiros, porque não falastes
        corretamente de mim, como o fez meu servo Jó. Tomai, pois, sete novilhos
        e sete carneiros e dirigi-vos ao meu servo Jó. Oferecei-os em holocausto
        em vosso favor, enquanto meu servo Jó intercederá por vós. Em atenção a
        ele, não vos tratarei como merece vossa temeridade, por não terdes
        falado corretamente de mim, como o fez meu servo Jó. Elifaz de Temã,
        Baldad de Suás e Sofar de Naamat fizeram o que o Senhor lhes ordenara, e
        ele atendeu à oração de Jó. O Senhor mudou a sorte de Jó, porque
        intercedia por seus companheiros, e duplicou todas as suas posses.
        Vieram visitá-lo seus irmãos e suas irmãs e os antigos conhecidos e
        jantaram com ele em sua casa, consolaram-no e confortaram-no pela
        desgraça que o Senhor lhe tinha enviado; cada um lhe ofereceu uma soma
        de dinheiro e um anel de ouro. O Senhor abençoou a Jó pelo fim de sua
        vida mais do que no princípio; possuía agora quatorze mil ovelhas, seis
        mil camelos, mil juntas de bois e mil jumentas. Teve sete filhos e três
        filhas: a primeira chamava-se Rola; a segunda, Cássia; a terceira,
        Azeviche. Não havia em todo o país mulheres mais belas que as filhas do
        Jó. Seu pai lhes repartiu heranças como a seus irmãos. Depois destes
        acontecimentos Jó viveu cento e quarenta anos e viu seus filhos, netos e
        bisnetos. E Jó morreu velho e cheio de dias. Jó 42, 7-1
      </Text>
      <H5 text="339 - É coisa boa e útil recorrer à intercessão dos Santos?" />
      <Text className="text-base">
        É coisa utilíssima invocar os Santos, e todo o Cristão o deve fazer.
        Devemos invocar particularmente nossos Anjos da Guarda, São José,
        protetor da Igreja, os Santos Apóstolos, o Santo do nosso nome e os
        Santos protetores da diocese e da paróquia.
      </Text>
      <H5 text="340 - Que diferença há entre as orações que fazemos a Deus e as que fazemos aos Santos?" />
      <Text className="text-base">
        Entre as orações que fazemos a Deus e as que fazemos aos Santos, há esta
        diferença: que a Deus, invocamo-Lo a fim de que, como autor das graças,
        nos dê os bens e nos livre dos males, e aos Santos, invocamo-los para
        que, como advogados junto de Deus, intercedam por nós.
      </Text>
      <H5 text="341 - Que queremos dizer, quando dizemos que um Santo concedeu uma graça?" />
      <Text className="text-base">
        Quando dizemos que um Santo concedeu uma graça, queremos dizer que esse
        Santo obteve de Deus aquela graça.
      </Text>
      <H1 text="Terceira Parte" />
      <Text className="aside">Dos Mandamentos da Lei de Deus e da Igreja</Text>
      <Text className="h2">
        I - <Text className="em">Dos Mandamentos da Lei de Deus em geral</Text>
      </Text>
      <Language>
        <Text className="latin">
          <Text className="latin">
            A lei do Senhor, que é imaculada, converte as almas; o testemunho do
            Senhor é fiel, dá sabedoria aos pequeninos.
            {"\n"}
            As justiças do Senhor são retas, alegram os corações; o preceito do
            Senhor é claro, esclarece os olhos.
            {"\n"}O temor do Senhor é santo, permanece pelos séculos dos
            séculos; os juízos do Senhor são verdadeiros, cheios de justiça em
            si mesmos.
            {"\n"}
            São mais para desejar do que o muito ouro e as muitas pedras
            preciosas; e são mais doces que o mel e o favo.
            {"\n"}
            Por isso o teu servo os guarda, e em os guardar há grande
            recompensa.
            {"\n"}
            Salmo 18, 8-12
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Lex Domini inmaculata convertens animas testimonium Domini fidele
            sapientiam praestans parvulis.
            {"\n"}
            Iustitiae Domini rectae laetificantes corda praeceptum Domini
            lucidum inluminans oculos.
            {"\n"}
            Timor Domini sanctus permanens in saeculum saeculi iudicia Domini
            vera iustificata in semet ipsa.
            {"\n"}
            Desiderabilia super aurum et lapidem pretiosum multum et dulciora
            super mel et favum.
            {"\n"}
            Etenim servus tuus custodit ea in custodiendis illisretributio
            multa.
            {"\n"}
            Psalmus XVIII, 8-12
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            Bem-aventurados os que se conservam sem mácula no caminho, os que
            andam na lei do Senhor.
            {"\n"}
            Salmo 118, 1
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Beati inmaculati in via Qui ambulant in lege Domini.
            {"\n"}
            Psalmus CXVIII, 1
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            De todo o meu coração te busquei; não me deixes transviar dos teus
            mandamentos.
            {"\n"}
            Escondi no meu coração as tuas palavras, para não pecar contra ti.
            {"\n"}
            Bendito és, Senhor; ensina-me as tuas justas leis. {"\n"}
            Salmo 118, 10-12
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            In toto corde meo exquisivi te non repellas me a mandatistuis.
            {"\n"}
            In corde meo abscondi elo quia tua ut non peccem tibi.
            {"\n"}
            Benedictus es Domine doce me iustificationes tuas.
            {"\n"}
            Psalmus CXVIII, 10-12
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            Deleitei-me no caminho das tuas ordens, tanto como em todas as
            riquezas.
            {"\n"}
            Nos teus mandamentos me exercitarei, e considerarei os teus
            caminhos.
            {"\n"}
            Nas tuas ordens meditarei; não me esquecerei das tuas palavras.
            {"\n"}
            Concede esta graça ao teu servo, dá-me vida, e eu guardarei as tuas
            palavras.
            {"\n"}
            Tira o véu dos meus olhos, e considerarei as maravilhas da tua lei.
            {"\n"}
            Salmo 118, 14-18
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            In via testimoniorum tuorum delectatus sum sicut in omnibus divitiis
            {"\n"}
            In mandatis tuis exercebor et considerabo vias tuas
            {"\n"}
            In iustificationibus tuis meditabor non obliviscar sermones tuos
            {"\n"}
            Retribue servo tuo vivifica me et custodiam sermones tuos
            {"\n"}
            Revela oculos meos et considerabo mirabilia de legetua
            {"\n"}
            Psalmus CXVIII, 14-18
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            Minha alma desejou ansiosa em todo o tempo as tuas justas leis.
            {"\n"}
            Salmo 118, 20
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Concupivit anima mea desider ar eiustificationes tuas in omni
            tempore
            {"\n"}
            Psalmus CXVIII, 20
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            Dá-me inteligência, e estudarei a tua lei, e a guardarei de todo o
            meu coração.
            {"\n"}
            Guia-me pela senda de teus mandamentos, porque essa mesma desejei.
            {"\n"}
            Inclina o meu coração para os teus preceitos, e não para a avareza.
            {"\n"}
            Desvia os meus olhos, para que não vejam a vaidade; faze que eu viva
            segundo o teu caminho.
            {"\n"}
            Salmo 118, 34-37
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Da mihi intellectum et scrutabor legem tuam et custodiam illam in
            toto corde meo.
            {"\n"}
            Deduc me in semita mandatorum tuorum quia ipsam volui.
            {"\n"}
            Inclina cor meum in testimonia tua et non in avaritiam
            {"\n"}
            Averte oculosmeos ne videant vanitatem in via tua vivifica me.
            {"\n"}
            Psalmus CXVIII, 34-37
          </Text>
        </Text>
        <Text className="latin">
          <Text className="latin">
            Meditarei nos teus mandamentos, que eu amo.
            {"\n"}
            Levantarei as minhas mãos para os teus mandamentos, que eu amo, e
            exercitar-me-ei nas tuas ordens.
            {"\n"}
            Salmo 118, 47-48
          </Text>
        </Text>
        <Text className="vernacular">
          <Text className="vernacular">
            Et meditabar in mandatis tuis quae dilexi.
            {"\n"}
            Et levavi manus meas ad mandata quae dilexi et exercebar in
            iustificationibustuis.
            {"\n"}
            Psalmus CXVIII, 47-48
          </Text>
        </Text>
      </Language>
      <H5 text="342 - De que trata a terceira parte da Doutrina Cristã?" />
      <Text className="text-base">
        A terceira parte da Doutrina Cristã traiu dos Mandamentos da Lei de Deus
        e da Igreja.
      </Text>
      <H5 text="343 - Quantos são os Mandamentos da Lei de Deus?" />
      <Text className="text-base">Os Mandamentos da Lei de Deus são dez:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Amar a Deus sobre todas as coisas.
        </Text>
        <Text className="li text-justify">
          2º - Não tomar seu Santo Nome em vão.
        </Text>
        <Text className="li text-justify">3º - Guardar domingos e festas.</Text>
        <Text className="li text-justify">4º - Honrar pai e mãe.</Text>
        <Text className="li text-justify">5º - Não matar.</Text>
        <Text className="li text-justify">
          6º - Não pecar contra a castidade.
        </Text>
        <Text className="li text-justify">7º - Não furtar.</Text>
        <Text className="li text-justify">
          8º - Não levantar falso testemunho.
        </Text>
        <Text className="li text-justify">
          9º - Não desejar a mulher do próximo.
        </Text>
        <Text className="li text-justify">
          10º - Não cobiçar as coisas alheias.
        </Text>
      </View>
      <H5 text="344 - Por que têm esse nome os Mandamentos da Lei de Deus?" />
      <Text className="text-base">
        Os Mandamentos da Lei de Deus têm esse nome porque foi o próprio Deus
        que os gravou na alma de todo o homem, os promulgou no monte Sinai, na
        antiga Lei, esculpidos em duas tábuas de pedra, e Jesus Cristo os
        confirmou na Lei nova.
      </Text>
      <H5 text="345 - Quais são os Mandamentos da primeira tábua?" />
      <Text className="text-base">
        Os Mandamentos da primeira tábua são os três primeiros, que se referem
        diretamente a Deus, e aos deveres que temos para com Ele.
      </Text>
      <H5 text="346 - Quais são os Mandamentos da segunda tábua?" />
      <Text className="text-base">
        Os Mandamentos da segunda tábua são os últimos sete, que se referem ao
        próximo e aos deveres que temos para com ele.
      </Text>
      <H5 text="347 - Somos obrigados a observar os Mandamentos?" />
      <Text className="text-base">
        Sim, todos somos obrigados a observar os Mandamentos, porque todos
        devemos viver segundo a vontade de Deus que nos criou; e basta
        transgredir gravemente um só deles para merecermos o Inferno.
      </Text>
      <H5 text="348 - Podemos observar os Mandamentos?" />
      <Text className="text-base">
        Podemos, sem dúvida, observar os Mandamentos da Lei de Deus, porque Deus
        não nos manda nenhuma coisa impossível, e dá a graça para os observar a
        quem ti pede devidamente.
      </Text>
      <H5 text="349 - Que se deve considerar em cada Mandamento?" />
      <Text className="text-base">
        Em cada Mandamento deve-se considerar a parte positiva e a parte
        negativa; isto é, o que nos é ordenado e o que nos é proibido.
      </Text>
      <Text className="h2">
        II - <Text className="em">Dos Mandamentos que se referem a Deus</Text>
      </Text>
      <Text className="text-base">
        Uma vez mais vos digo que ninguém me tenha por insensato; ou então
        tomai-me por insensato, para que também eu possa sentir um pouco de
        orgulho. O que vou dizer na certeza de poder orgulhar-me, não o digo sob
        inspiração do Senhor mas como num acesso de delírio. Visto que muitos se
        orgulham das coisas humanas, também eu vou orgulhar-me. Vós, que sois
        sensatos, suportais de boa vontade os insensatos. Sim, suportais quem
        vos escraviza, quem vos devora, quem vos explora, quem vos trata com
        orgulho, quem vos bate no rosto. Neste ponto, sinto vergonha de dizer,
        parece que fomos fracos. Quanto às pretensões que qualquer outro possa
        ter falo como louco também eu as tenho. São hebreus? Também sou. São
        israelitas? Também sou. São da descendência de Abraão? Também sou. São
        ministros de Cristo? Falando como louco, eu sou mais ainda. Muito mais
        pelos trabalhos, muito mais pelas prisões, pelos açoites sem conta.
        Muitas vezes vi a morte de perto. Cinco vezes recebi dos judeus os
        quarenta açoites menos um. Três vezes fui flagelado com varas. Uma vez,
        apedrejado. Três vezes naufraguei, uma noite e um dia passei no
        alto-mar. Viagens sem conta, exposto a perigos nos rios, perigos de
        assaltantes, perigos da parte de concidadãos, perigos da parte dos
        pagãos, perigos na cidade, perigos nos lugares desabitados, perigos no
        mar, perigos entre falsos irmãos! Trabalhos e fadigas, muitas noites sem
        dormir, com fome e sede, frequentes jejuns, frio e nudez! Além de outras
        coisas, o que pesa sobre mim diariamente, a preocupação por todas as
        igrejas! Quem está fraco, sem que eu sinta com ele? Quem é seduzido ao
        pecado, sem que eu fique indignado? Se é preciso contar vantagens,
        contarei vantagens da minha fraqueza. O Deus e Pai de nosso Senhor Jesus
        Cristo, que é bendito pelos séculos, sabe que não minto. Em Damasco, o
        governador do rei Aretas pôs guarda na cidade dos damascenos, para me
        prender, mas através de uma janela, fui descido numa cesta pelo muro, e
        escapei das suas mãos. II Cor 11, 16-3
      </Text>
      <H4 text="1º - Do primeiro Mandamento da Lei de Deus" />
      <H5 text="350 - Por que disse o Senhor antes de ditar os Mandamentos: Eu sou o Senhor teu Deus?" />
      <Text className="text-base">
        Antes de promulgar os seus Mandamentos, Deus disse: Eu sou o Senhor teu
        Deus, para que saibamos que Deus, sendo o nosso Criador e Senhor, pode
        mandar o que quiser, e nós, criaturas suas, somos obrigados a
        obedecer-Lhe.
      </Text>
      <H5 text="351 - Que nos ordena Deus com as palavras do primeiro Mandamento: amar a Deus sobre todas as coisas?" />
      <Text className="text-base">
        Com as palavras do primeiro Mandamento: amar a Deus sobre todas as
        coisas, Deus nos ordena que o reconheçamos, adoremos, amemos e sirvamos
        a Ele só, como nosso Soberano Senhor.
      </Text>
      <H5 text="352 - Como se cumpre o primeiro Mandamento?" />
      <Text className="text-base">
        Cumpre-se o primeiro Mandamento com o exercício do culto interno e
        externo.
      </Text>
      <H5 text="353 - Que é o culto interno?" />
      <Text className="text-base">
        O culto interno é a honra que se presta a Deus só com as faculdades da
        alma isto é, com a inteligência e com a vontade.
      </Text>
      <H5 text="354 - Que é o culto externo?" />
      <Text className="text-base">
        O culto externo é a homenagem que se presta a Deus por meio de atos
        exteriores e de objetos sensíveis.
      </Text>
      <H5 text="355 - Não basta adorar a Deus interiormente, só com o coração?" />
      <Text className="text-base">
        Não basta adorar a Deus interiormente, só com o coração, mas é
        necessário adorá- Lo também exteriormente, com a alma e com o corpo
        juntamente, porque Ele é Criador e Senhor absoluto de uma e de outro.
      </Text>
      <H5 text="356 - Poderá haver culto externo sem o interno?" />
      <Text className="text-base">
        Não pode de forma alguma haver culto externo sem o interno, porque
        aquele, desacompanhado deste, fica privado de vida, de merecimento e de
        eficácia, como corpo sem alma.
      </Text>
      <H5 text="357 - Que nos proíbe o primeiro Mandamento?" />
      <Text className="text-base">
        O primeiro Mandamento proíbe-nos a idolatria, a superstição, o
        sacrilégio, a heresia, e todo e qualquer outro pecado contra a religião.
      </Text>
      <H5 text="358 - Que é a idolatria?" />
      <Text className="text-base">
        Chama-se idolatria o prestar a alguma criatura, por exemplo a uma
        estátua, a uma imagem, a um homem, o culto supremo de adoração, devido
        só a Deus.
      </Text>
      <H5 text="359 - Como está expressa na Sagrada Escritura esta proibição?" />
      <Text className="text-base">
        Na Sagrada Escritura está expressa esta proibição com as palavras: Não
        farás para ti imagem de escultura, nem figura alguma de tudo o que há em
        cima, no céu, e do que há embaixo, na terra. E não adorarás tais coisas,
        nem lhes darás culto.
      </Text>
      <H5 text="360 - Proíbem estas palavras toda a espécie de imagens?" />
      <Text className="text-base">
        Não, por certo. Mas só as das falsas divindades, feitas com intuito de
        adoração, como faziam os idólatras. E tanto isto é verdade, que o
        próprio Deus deu ordem a Moisés para fazer algumas, como as duas
        estátuas de querubins que estavam sobre a arca, e a serpente de bronze
        no deserto.
      </Text>
      <H5 text="361 - Que é a superstição?" />
      <Text className="text-base">
        Chama-se superstição toda e qualquer devoção contrária à doutrina e ao
        uso da Igreja, bem como o atribuir a urna ação ou alguma coisa uma
        virtude sobrenatural que ela não tem.
      </Text>
      <H5 text="362 - Que é o sacrilégio?" />
      <Text className="text-base">
        O sacrilégio é a profanação de um lugar, de uma pessoa ou de uma coisa
        consagrada a Deus ou destinada ao seu culto.
      </Text>
      <H5 text="363 - Que é a heresia?" />
      <Text className="text-base">
        A heresia é um erro culpável de inteligência, pelo qual se nega com
        pertinácia alguma verdade de fé.
      </Text>
      <H5 text="364 - Que mais coisas proíbe o primeiro Mandamento?" />
      <Text className="text-base">
        O primeiro Mandamento proíbe também todo o comércio ou trato com o
        demônio, e o filiar-se às seitas anticristãs.
      </Text>
      <H5 text="365 - Quem recorresse ao demônio e o invocasse, cometeria pecado grave?" />
      <Text className="text-base">
        Quem recorresse ao demônio e o invocasse, cometeria um pecado enorme,
        porque o demônio é o mais perverso inimigo de Deus e do homem.
      </Text>
      <H5 text="366 - É lícito interrogar as mesas chamadas falantes ou escreventes, ou consultar de algum modo as almas dos mortos, por meio de espiritismo?" />
      <Text className="text-base">
        Todas as práticas do espiritismo são proibidas, porque são
        supersticiosas, e muitas vezes não estão isentas de intervenção
        diabólica, e por isso foram justamente interditas pela Igreja.
      </Text>
      <H5 text="367 - O primeiro Mandamento proíbe acaso honrar e invocar os Anjos e os Santos?" />
      <Text className="text-base">
        Não. Não é proibido honrar e invocar os Anjos e os Santos, e até o
        devemos fazer, porque é coisa boa e útil, e altamente recomendada pela
        Igreja, já que eles são amigos de Deus e nossos intercessores junto
        d'Ele.
      </Text>
      <H5 text="368 - Sendo Jesus Cristo o nosso único mediador junto de Deus, por que recorremos também à intercessão da Santíssima Virgem e dos Santos?" />
      <Text className="text-base">
        Jesus Cristo é o nosso mediador junto de Deus, enquanto, sendo
        verdadeiro Deus e verdadeiro Homem, só Ele, em virtude dos próprios
        merecimentos, nos reconciliou com Deus e d'Ele nos obtém todas as
        graças. Mas, a Santíssima Virgem e os Santos, em virtude dos
        merecimentos de Jesus Cristo, e pela caridade que os une a Deus e a nós,
        auxiliam-nos com a sua intercessão a alcançar as graças que pedimos. E
        este é um dos grandes bens da comunhão dos Santos.
      </Text>
      <H5 text="369 - Podemos honrar também as sagradas imagens de Jesus Cristo e dos Santos?" />
      <Text className="text-base">
        Sim, porque a honra que se tributa às sagradas imagens de Jesus Cristo e
        dos Santos, refere-se às suas mesmas pessoas.
      </Text>
      <H5 text="370 - E as relíquias dos Santos, podem honrar-se?" />
      <Text className="text-base">
        Sim, também as relíquias dos Santos podem e devem honrar-se porque os
        seus corpos foram membros vivos de Jesus Cristo e templos do Espírito
        Santo, e devem ressurgir gloriosos para a vida eterna.
      </Text>
      <H5 text="371 - Que diferença há entre o culto que prestamos a Deus, e o culto que prestamos aos Santos?" />
      <Text className="text-base">
        Entre o culto que prestamos a Deus e o culto que prestamos aos Santos há
        esta diferença: que a Deus adoramo-Lo pela sua infinita excelência, ao
        passo que aos Santos não os adoramos, mas só os honramos e veneramos
        como amigos de Deus e nossos intercessores junto d'Ele. O culto que
        prestamos a Deus chama-se latria, isto é, de adoração, e o culto que
        prestamos aos Santos chama-se dulia, isto é, de veneração aos servos de
        Deus; enfim o culto especial que prestamos a Maria Santíssima chama-se
        hiperdulia, isto é, de essencialíssima veneração, como Mãe de Deus.
      </Text>
      <H4 text="2º - Do segundo Mandamento da Lei de Deus" />
      <Text className="text-base">
        Certo homem, chamado Ananias, de comum acordo com sua mulher Safira,
        vendeu uma propriedade. Com a cumplicidade da mulher, reteve uma parte
        do preço e foi depositar o resto aos pés dos apóstolos. Pedro, porém,
        disse: Ananias, por que Satanás se apoderou de teu coração para enganar
        o Espírito Santo, retendo uma parte do preço do terreno? Por acaso não
        podias conservá-lo, sem o vender? E depois de vendido, não podias dispor
        livremente da quantia? Então, por que resolveste fazer isso? Não foi aos
        homens que mentiste, mas a Deus. Ao ouvir estas palavras, Ananias caiu
        morto. Grande medo tomou conta de todos os que souberam disso. Alguns
        jovens se levantaram, envolveram o corpo num lençol e o retiraram dali
        para sepultar. Passadas umas três horas, entrou também a mulher, sem
        saber o que havia acontecido. Pedro perguntou-lhe: Dize-me: foi por
        tanto que vendestes o terreno? Ela respondeu: Sim, foi por esse preço.
        Então Pedro disse: Por que combinastes tentar o Espírito do Senhor?
        Olha, já estão entrando pela porta aqueles que sepultaram o teu marido.
        Eles vão levar também a ti. Ela imediatamente caiu aos pés de Pedro e
        morreu. Quando os jovens entraram, encontraram a mulher morta e a
        levaram para sepultar ao lado do marido. Grande medo se apoderou de toda
        a Igreja e de todos que ouviram tais coisas. Atos 5, 1-1
      </Text>
      <H5 text="372 - Que nos proíbe o segundo Mandamento: não tomar seu Santo Nome em vão?" />
      <Text className="text-base">
        O segundo Mandamento: não tomar seu Santo Nome em vão, proíbe-nos:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - pronunciar o nome de Deus sem respeito;
        </Text>
        <Text className="li text-justify">
          2º - blasfemar contra Deus, contra a Santíssima Virgem ou contra os
          Santos;
        </Text>
        <Text className="li text-justify">
          3º - fazer juramentos falsos ou não necessários, ou proibidos desta ou
          daquela maneira.
        </Text>
      </View>
      <H5 text="373 - Que quer dizer pronunciar o Nome de Deus sem respeito?" />
      <Text className="text-base">
        Pronunciar o Nome de Deus sem respeito quer dizer: pronunciar este Santo
        Nome, e tudo o que se refere em modo especial ao próprio Deus como o
        Nome de Jesus Cristo, de Maria e dos Santos com ira, por escárnio, ou de
        outro modo pouco reverente.
      </Text>
      <H5 text="374 - Que é a blasfêmia?" />
      <Text className="text-base">
        A blasfêmia é um pecado horrível que consiste em palavras ou atos de
        desprezo ou maldição contra Deus, contra a Virgem, contra os Santos, ou
        contra as coisas santas.
      </Text>
      <H5 text="375 - Há diferença entre a blasfêmia e a imprecação ou praga?" />
      <Text className="text-base">
        Há diferença, porque com a blasfêmia se amaldiçoa ou se deseja mal a
        Deus, a Nossa Senhora, aos Santos; ao passo que, com a imprecação ou
        praga, se amaldiçoa ou se deseja mal a si mesmo ou ao próximo.
      </Text>
      <H5 text="376 - Que é jurar?" />
      <Text className="text-base">
        Jurar é tomar a Deus em testemunho da verdade do que se afirma ou se
        promete.
      </Text>
      <H5 text="377 - É sempre proibido jurar?" />
      <Text className="text-base">
        Não é sempre proibido o juramento, mas é lícito e até honroso para Deus,
        quando há necessidade, e se jura com verdade, discernimento e justiça.
      </Text>
      <H5 text="378 - Quando não se jura com verdade?" />
      <Text className="text-base">
        Quando se afirma com juramento o que se sabe ou se julga ser falso, e
        quando com juramento se promete o que não se tem a intenção de cumprir.
      </Text>
      <H5 text="379 - Quando não se jura com discernimento?" />
      <Text className="text-base">
        Quando se jura sem prudência e sem madura ponderação, ou por coisas de
        pequena importância.
      </Text>
      <H5 text="380 - Quando não se jura com justiça?" />
      <Text className="text-base">
        Quando se jura fazer uma coisa que não é justa ou permitida, como jurar
        vingar-se, roubar e outras coisas parecidas.
      </Text>
      <H5 text="381 - Somos obrigados a cumprir o juramento de fazer coisas injustas ou proibidas?" />
      <Text className="text-base">
        Não só não somos obrigados, mas pecaríamos fazendo-as, porque são
        proibidas pela lei de Deus ou da Igreja.
      </Text>
      <H5 text="382 - Quem jura falso, que pecado comete?" />
      <Text className="text-base">
        Quem jura falso comete pecado mortal, porque desonra gravemente a Deus,
        verdade infinita, chamando-O em testemunho do que é falso.
      </Text>
      <H5 text="383 - Que nos ordena o segundo Mandamento?" />
      <Text className="text-base">
        O segundo Mandamento ordena-nos que honremos o Santo Nome de Deus, e que
        cumpramos, além dos juramentos, também os votos.
      </Text>
      <H5 text="384 - Que é um voto?" />
      <Text className="text-base">
        Um voto é uma promessa feita a Deus de uma coisa boa, para nós possível,
        e melhor que a coisa contrária, a que nós nos obrigamos, como se nos
        fosse preceituada.
      </Text>
      <H5 text="385 - Se a observância do voto se nos tornasse no todo ou em parte muito difícil, que haveria a fazer?" />
      <Text className="text-base">
        Podia-se pedir a comutação ou a dispensa ao Bispo próprio, ou ao Sumo
        Pontífice, conforme a qualidade do voto.
      </Text>
      <H5 text="386 - É pecado transgredir os votos?" />
      <Text className="text-base">
        O transgredir os votos é pecado, e por isso não devemos fazer votos sem
        madura reflexão, e ordinariamente sem o conselho do confessor, ou de
        outra pessoa prudente, para não nos expormos ao perigo de pecar.
      </Text>
      <H5 text="387 - Podem fazer-se votos a Nossa Senhora e aos Santos?" />
      <Text className="text-base">
        Os votos fazem-se só a Deus; pode-se, porém, prometer a Deus fazer
        alguma coisa em honra de Nossa Senhora ou dos Santos.
      </Text>
      <H4 text="3º - Do terceiro Mandamento da Lei de Deus" />
      <Text className="text-base">
        No primeiro dia da semana, de manhã muito cedo, as mulheres vieram ao
        túmulo trazer os perfumes que tinham preparado. Encontraram a pedra do
        túmulo removida e, entrando, não acharam o corpo do Senhor Jesus.
        Ficaram sem saber o que fazer. Nisso, dois homens vestidos de roupas
        brilhantes apareceram diante delas. Como ficassem aterrorizadas e
        baixassem os olhos para o chão, eles disseram: Por que procurais entre
        os mortos quem está vivo? Ele não está aqui mas ressuscitou! Lembrai-vos
        do que vos falou, quando estava ainda na Galileia: O Filho do homem
        deveria ser entregue ao poder de pecadores e ser crucificado mas
        ressuscitaria ao terceiro dia. Então elas se lembraram das palavras de
        Jesus. Luc 24, 1-8 No primeiro dia da semana, estávamos reunidos para
        partir o pão. Paulo, que ia viajar no dia seguinte, conversava com os
        discípulos e prolongou a conversa até meia-noite. Havia muitas lâmpadas
        na sala onde estávamos reunidos. Um jovem, chamado Êutico, que estava
        sentado no parapeito de uma janela, adormeceu profundamente enquanto
        Paulo continuava a falar. Vencido pelo sono, caiu do terceiro andar, e o
        levantaram morto. Paulo desceu, debruçou-se sobre ele e, abraçando-o,
        disse: Não vos perturbeis. Ele está vivo. Depois subiu, partiu o pão,
        comeu e prosseguiu a pregação até ao amanhecer. Então partiu. Quanto ao
        rapaz, levaram-no vivo, com grande consolo de todos. Atos 20, 7-1
      </Text>
      <H5 text="388 - Que nos ordena o terceiro Mandamento: guardar domingos e festas?" />
      <Text className="text-base">
        O terceiro Mandamento: guardar domingos e festas, ordena-nos que
        honremos a Deus com obras de culto nos dias de festa.
      </Text>
      <H5 text="389 - Quais são os dias de festa?" />
      <Text className="text-base">
        Na Antiga Lei, eram os sábados e outros dias particularmente solenes
        para o povo judeu; na Lei Nova, são os domingos e outras festividades
        estabelecidas pela Igreja.
      </Text>
      <H5 text="390 - Por que na Lei Nova se guarda o domingo e não o sábado?" />
      <Text className="text-base">
        O domingo, que significa dia do Senhor, substituiu o sábado, porque foi
        em dia de domingo que Nosso Senhor Jesus Cristo ressuscitou.
      </Text>
      <H5 text="391 - Que obra de culto nos é preceituada nos dias de festa?" />
      <Text className="text-base">
        É-nos preceituado assistir devotamente ao Santo Sacrifício da Missa.
      </Text>
      <H5 text="392 - Com que outras obras costuma um bom cristão santificar as festas?" />
      <Text className="text-base">Um bom cristão santifica as festas:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - assistindo à doutrina cristã, às pregações e aos ofícios divinos;
        </Text>
        <Text className="li text-justify">
          2º - recebendo com frequência, com as devidas disposições, os
          Sacramentos da Penitência e da Eucaristia;
        </Text>
        <Text className="li text-justify">
          3º - dando-se à oração e às obras de caridade cristã para com o
          próximo.
        </Text>
      </View>
      <H5 text="393 - Que nos proíbe o terceiro Mandamento?" />
      <Text className="text-base">
        O terceiro Mandamento proíbe-nos os trabalhos servis, e qualquer obra
        que nos impeça o culto de Deus.
      </Text>
      <H5 text="394 - Quais são os trabalhos servis proibidos nos dias santos?" />
      <Text className="text-base">
        Os trabalhos servis proibidos nos dias santos são os trabalhos chamados
        manuais, isto é, aqueles trabalhos materiais em que tem parte mais o
        corpo do que o espírito, como os que ordinariamente são próprios dos
        servidores, dos operários e dos artífices.
      </Text>
      <H5 text="395 - Que pecado se comete trabalhando em dia santo?" />
      <Text className="text-base">
        Trabalhando em dia santo, comete-se pecado mortal; não obstante não há
        culpa grave se o trabalho dura pouco tempo.
      </Text>
      <H5 text="396 - Não há nenhum trabalho servil que seja permitido nos dias santos?" />
      <Text className="text-base">
        Nos dias santos são permitidos aqueles trabalhos que são necessários à
        vida, ou ao serviço de Deus, e os que se fazem por uma causa grave,
        pedindo licença, se for possível, ao próprio pároco.
      </Text>
      <H5 text="397 - Por que nos dias santos são proibidos os trabalhos servis?" />
      <Text className="text-base">
        São proibidos nos dias santos os trabalhos servis, a fim de que possamos
        melhor dedicar-nos ao culto divino e à salvação da nossa alma, e para
        repousar das nossas fadigas. Por isso não é proibido entregar-se a
        divertimentos honestos.
      </Text>
      <H5 text="398 - Que mais devemos evitar de modo especial nos dias santos?" />
      <Text className="text-base">
        Nos dias santos devemos evitar principalmente o pecado e tudo o que
        possa induzir-nos a ele, como são os bailes e outras diversões e
        reuniões perigosas.
      </Text>
      <Text className="h2">
        III -{" "}
        <Text className="em">Dos Mandamentos que se referem ao próximo</Text>
      </Text>
      <H4 text="1º - Do quarto Mandamento da Lei de Deus" />
      <Text className="text-base">
        Honra teu pai e tua mãe, como o Senhor teu Deus te mandou, para que
        vivas longos anos e sejas feliz na terra que o Senhor teu Deus te dá.
        Deut 5, 16 Meu filho, escuta a advertência de teu pai, e não rejeites o
        ensino de tua mãe, pois serão diadema para tua cabeça e um colar para
        teu pescoço. Prov 1, 8-9 Pois o Senhor glorifica o pai em seus filhos e
        consolida a autoridade da mãe sobre a prole. Quem honra o pai, expia os
        pecados; quem glorifica a mãe, é como se acumulasse tesouros. Quem honra
        o pai será alegrado pelos filhos e, no dia em que orar, será atendido.
        Quem glorifica o pai terá vida longa, e quem obedece ao Senhor
        proporcionará repouso à sua mãe. Quem teme o Senhor honrará seu pai e,
        como a senhores, servirá seus genitores. Com obras e palavras honra teu
        pai, para que venha sobre ti a sua bênção. A bênção do pai consolida a
        casa dos filhos; a maldição da mãe lhes destrói os alicerces. Não te
        glories da desonra de teu pai, pois a desonra do pai não é uma glória
        para ti. A glória do homem vem da honra de seu pai, e é uma desonra para
        os filhos a mãe desprezada. Filho, ampara teu pai na velhice, e não lhe
        causes desgosto enquanto vive. Ainda que perca a razão, sê tolerante e
        não o desprezes, tu, que estás em teu pleno vigor. Não será esquecida a
        compaixão para com teu pai e, em lugar dos pecados, terás os méritos
        aumentados. No dia da aflição, o Senhor lembrar-se-á de ti; e teus
        pecados desaparecerão, como o gelo ao calor do dia. Quem abandona o pai
        é como blasfemador; e é maldito do Senhor quem irrita sua mãe. Eclo 3,
        2-13. Quem amaldiçoa o pai e a mãe verá sua lâmpada apagar-se nas
        trevas. Prov 20, 20 Maldito, quem desprezar o pai ou a mãe! E todo o
        povo dirá: Amén! Deut 27, 16 Quando o viram, ficaram admirados e sua mãe
        lhe disse: Filho, por que agiste assim conosco? Olha, teu pai e eu,
        aflitos, te procurávamos. Ele respondeu-lhes : Por que me procuráveis?
        Não sabíeis que eu devia estar na casa do meu Pai? Eles não entenderam o
        que lhes dizia. Depois desceu com eles e foi para Nazaré, e lhes era
        submisso. Sua mãe conservava a lembrança de tudo isso no coração. Jesus
        crescia em sabedoria, idade e graça diante de Deus e das pessoas. Luc 2,
        48-5
      </Text>
      <H5 text="399 - Que nos ordena o quarto Mandamento: honrar pai e mãe?" />
      <Text className="text-base">
        O quarto Mandamento: honrar pai e mãe, ordena-nos respeitar o pai e a
        mãe, obedecer-lhes em tudo o que não é pecado, e auxiliá-los em suas
        necessidades espirituais e temporais.
      </Text>
      <H5 text="400 - Que nos proíbe o quarto Mandamento?" />
      <Text className="text-base">
        O quarto Mandamento proíbe-nos ofender os nossos pais com palavras,
        obras, ou de qualquer outra maneira.
      </Text>
      <H5 text="401 - Debaixo do nome de pai e de mãe, que mais pessoas compreende este Mandamento?" />
      <Text className="text-base">
        Debaixo do nome de pai e de mãe, este Mandamento também compreende todos
        os legítimos superiores tanto eclesiásticos como seculares, aos quais
        portanto devemos obedecer e respeitar.
      </Text>
      <H5 text="402 - De onde vem aos pais a autoridade de mandar nos filhos, e aos filhos a obrigação de lhes obedecer?" />
      <Text className="text-base">
        A autoridade que os pais têm de mandar nos filhos, e a obrigação que têm
        os filhos de obedecer, vêm-lhes de Deus que constituiu e ordenou a
        família, a fim de que nela o homem encontre os primeiros meios
        necessários para o seu aperfeiçoamento material e espiritual.
      </Text>
      <H5 text="403 - Têm os pais deveres para com os filhos?" />
      <Text className="text-base">
        Os pais têm o dever de amar, cuidar e alimentar seus filhos, de prover à
        sua educação religiosa e civil, de dar-lhes o bom exemplo, de afastá-los
        das ocasiões de pecado, de corrigi-los nas suas faltas, e de auxiliá-los
        a abraçar o estado para o qual são chamados por Deus.
      </Text>
      <H5 text="404 - Deu-nos Deus o modelo da família perfeita?" />
      <Text className="text-base">
        Deus nos deu o modelo da família perfeita na Sagrada Família, na qual
        Jesus Cristo viveu sujeito a Maria Santíssima e a São José até aos
        trinta anos, isto é, até quando começou a desempenhar a missão que o
        Padre Eterno Lhe confiara, de pregar o Evangelho.
      </Text>
      <H5 text="405 - Poderiam as famílias, se vivessem isoladamente uma das outras, prover a todas as suas necessidades materiais e morais?" />
      <Text className="text-base">
        Se as famílias vivessem isoladamente umas das outras, não poderiam
        prover às suas necessidades, e é necessário o que elas se unam em
        sociedade civil, a fim de se auxiliarem mutuamente, para o seu
        aperfeiçoamento e para sua felicidade comum.
      </Text>
      <H5 text="406 - Que é a sociedade civil?" />
      <Text className="text-base">
        A sociedade civil é a reunião de muitas famílias, dependentes da
        autoridade de um chefe, para se auxiliarem reciprocamente a conseguir o
        mútuo aperfeiçoamento e a felicidade tempora
      </Text>
      <H5 text="407 - De onde vem à sociedade civil a autoridade que a governa?" />
      <Text className="text-base">
        A autoridade que governa a sociedade civil vem de Deus, que a quer
        constituída para o bem comum.
      </Text>
      <H5 text="408 - Há obrigação de respeitar a autoridade que governa a sociedade civil e de lhe prestar obediência?" />
      <Text className="text-base">
        Sim, todos os que pertencem à sociedade civil, têm obrigação de
        respeitar a autoridade e de lhe obedecer, porque esta autoridade vem de
        Deus, e porque assim o exige o bem comum.
      </Text>
      <H5 text="409 - Devem respeitar-se todas as leis que são impostas pela autoridade civil?" />
      <Text className="text-base">
        Devem respeitar-se todas as leis que a autoridade civil impõe, desde que
        não sejam contrárias à Lei de Deus, pois esta é a ordem e o exemplo de
        Nosso Senhor Jesus Cristo.
      </Text>
      <H5 text="410 - Além do respeito e da obediência às leis impostas pela autoridade, os que formam parte da sociedade civil têm mais alguns deveres?" />
      <Text className="text-base">
        Os que formam parte da sociedade civil, além da obrigação de respeitar e
        obedecer às leis, têm o dever de viver em harmonia e de procurar,
        segundo suas possibilidades, que a sociedade seja virtuosa, pacífica,
        ordenada e próspera para o proveito comum, com vistas à salvação eterna
        dos indivíduos.
      </Text>
      <H4 text="2º - Do quinto Mandamento da Lei de Deus" />
      <Text className="text-base">
        Aconteceu, tempos depois, que Caim apresentou ao Senhor frutos da terra
        como oferta. Abel, por sua vez, ofereceu os primeiros cordeirinhos e a
        gordura das ovelhas. E o Senhor olhou para Abel e sua oferta, mas não
        deu atenção a Caim e sua oferta. Caim se enfureceu e ficou com o rosto
        abatido. O Senhor disse a Caim: Por que estás enfurecido e andas com o
        rosto abatido? Não é verdade que, se fizeres o bem, andarás de cabeça
        erguida? Mas se não o fizeres, o pecado não estará à porta,
        espreitando-te, como um assaltante? Tu, porém, terás de dominá-lo. Caim
        disse a Abel, o irmão: Vamos para o campo! Mas, quando estavam no campo,
        Caim agrediu o irmão Abel e o matou. O Senhor perguntou a Caim: Onde
        está teu irmão Abel? E ele respondeu: Não sei. Acaso sou o guarda de meu
        irmão? O que fizeste? perguntou ele Ouço da terra a voz do sangue de teu
        irmão, clamando por vingança! Agora serás amaldiçoado pela própria terra
        que engoliu o sangue de teu irmão, derramado por ti. Quando cultivares o
        solo, negar-te-á o sustento e virás a ser um fugitivo, errante sobre a
        terra. Caim disse ao Senhor : O castigo é grande demais para suportá-lo.
        Eis que hoje me expulsas da face deste solo fértil e devo ocultar-me
        diante de teu rosto. Quando estiver fugindo e vagueando pela terra, quem
        me encontrar, matar-me-á. Mas o Senhor lhe disse: Pois bem. Se alguém
        matar Caim, será vingado sete vezes. O Senhor pôs, então, um sinal em
        Caim para que ninguém, ao encontrá-lo, o matasse. Afastando-se da
        presença do Senhor, Caim foi habitar na região de Nod, ao oriente de
        Éden. Gênesis 4, 3-1
      </Text>
      <H5 text="411 - Que nos proíbe o quinto Mandamento: não matar?" />
      <Text className="text-base">
        O quinto Mandamento: não matar, proíbe dar a morte ao próximo, nele
        bater ou feri-lo, ou causar qualquer outro dano no seu corpo, por nós ou
        por meio de outrem. Proíbe também ofendê-lo com palavras injuriosas e
        querer-lhe o mal. Neste Mandamento Deus proíbe ainda ao homem dai, a
        morte a si mesmo, isto é, o suicídio.
      </Text>
      <H5 text="412 - Por que é pecado grave matar o próximo?" />
      <Text className="text-base">
        Porque o que mata usurpa temerariamente o direito que só Deus tem sobre
        a vida do homem; porque destrói a segurança da sociedade humana, e
        porque tira ao próximo a vida, que é o maior bem natural que ele tem
        neste mundo.
      </Text>
      <H5 text="413 - Haverá casos em que seja lícito matar o próximo?" />
      <Text className="text-base">
        É lícito tirar a vida do próximo: durante o combate em guerra justa;
        quando se executa por ordem da autoridade suprema a condenação à morte
        em castigo de algum crime; e finalmente quando se trata de necessária e
        legítima defesa da vida, no momento de uma injusta agressão.
      </Text>
      <H5 text="414 - No quinto Mandamento proíbe também Deus fazer mal à vida espiritual do próximo?" />
      <Text className="text-base">
        Sim, Deus no quinto Mandamento proíbe também fazer mal à vida espiritual
        do próximo com o escândalo.
      </Text>
      <H5 text="415 - Que é o escândalo?" />
      <Text className="text-base">
        O escândalo é toda palavra, ação ou omissão, que é ocasião para os
        outros de cometerem pecados.
      </Text>
      <H5 text="416 - É pecado grave o escândalo?" />
      <Text className="text-base">
        O escândalo é um pecado grave, porque tende a destruir a maior obra de
        Deus, que é a redenção, com a perda das almas: pois que ele dá ao
        próximo a morte da alma tirando-lhe a vida da graça, que é mais preciosa
        que a vida do corpo; e porque é causa de uma multidão de pecados. Por
        isso, Deus ameaça os escandalosos com os mais severos castigos.
      </Text>
      <H5 text="417 - Por que no quinto Mandamento Deus proíbe ao homem dar a morte a si mesmo, isto é, suicidar-se?" />
      <Text className="text-base">
        No quinto Mandamento Deus proíbe o suicídio, porque o homem não é senhor
        da sua vida, como o não é da dos outros. A Igreja, por seu lado, castiga
        o suicida com a privação da sepultura eclesiástica.
      </Text>
      <H5 text="418 - É proibido no quinto Mandamento também o duelo?" />
      <Text className="text-base">
        Sim, o quinto Mandamento proíbe também o duelo, porque o duelo participa
        da malícia do suicídio e do homicídio, e fica excomungado todo o que
        voluntariamente nele toma parte, ainda que seja como simples espectador.
      </Text>
      <H5 text="419 - É também proibido o duelo, quando é excluído o perigo de morte?" />
      <Text className="text-base">
        Sim, é também proibido este duelo, porque não só não podemos matar, mas
        nem sequer ferir voluntariamente a nós mesmos ou a outrem.
      </Text>
      <H5 text="420 - Pode a defesa da honra justificar o duelo?" />
      <Text className="text-base">
        Não. Porque é falso que no duelo se repare a ofensa, e porque não se
        pode reparar a honra com uma ação injusta, irracional e bárbara, qual é
        o duelo.
      </Text>
      <H5 text="421 - Que nos ordena o quinto Mandamento?" />
      <Text className="text-base">
        O quinto Mandamento ordena-nos que perdoemos aos nossos inimigos e
        queiramos bem a todos.
      </Text>
      <H5 text="422 - Que deve fazer quem danificou o próximo na vida do corpo, ou na da alma?" />
      <Text className="text-base">
        Quem danificou o próximo, não basta que se confesse, mas deve também
        reparar o mal que fez, compensando o próximo dos danos que lhe causou,
        retratando os erros que lhe ensinou, e dando-lhe bom exemplo.
      </Text>
      <H4 text="3º - Do 6º e do 9º" />
      <Text className="text-base">
        Mandamentos da Lei de Deus José foi levado para o Egito. Putifar, um
        egípcio, ministro do Faraó e chefe da guarda do palácio, o comprou dos
        ismaelitas que o tinham levado para lá. Mas o Senhor estava com José e
        ele se tornou um homem bem sucedido enquanto esteve na casa de seu
        senhor egípcio. O patrão notou que o Senhor estava com ele e fazia
        prosperar todas as suas iniciativas. José conquistou as boas graças de
        seu amo que o pôs a seu serviço, constituindo-o administrador da casa e
        confiando-lhe todos os bens. E desde o momento em que o fez
        administrador, o Senhor abençoou em atenção a José a casa do egípcio e
        derramou sua bênção sobre tudo que possuía em casa e no campo. Ele
        entregou tudo nas mãos de José e não se preocupava com coisa alguma a
        não ser com o que comia. Ora, José tinha um belo porte e era formoso de
        rosto. Aconteceu, depois, que a mulher de seu amo pôs nele os olhos e
        lhe disse: Dorme comigo. Ele recusou, dizendo à mulher de seu senhor: Em
        verdade meu senhor não me pede contas do que há na casa, confiando-me
        todos os bens. Ele próprio não é mais importante do que eu nesta casa.
        Nada se reservou senão a ti por seres sua mulher. Como poderia eu fazer
        tamanha maldade pecando contra Deus! E ainda que ela insistisse com
        José, todos os dias, para dormir com ela ou mesmo estar com ela, ele não
        atendeu. Um dia José entrou na casa para cumprir as tarefas e nenhum dos
        empregados estava em casa. A mulher o agarrou pelo manto, dizendo: Dorme
        comigo. Mas ele largou-lhe nas mãos o manto e fugiu correndo para fora.
        Vendo que lhe tinha deixado nas mãos o manto e escapado para fora, ela
        se pôs a gritar e a chamar os empregados, dizendo: Vede! meu marido
        trouxe este hebreu para abusar de nós. Aproximou-se de mim para dormir
        comigo, mas pus-me a gritar em voz alta. Quando viu que comecei a gritar
        por socorro, largou o manto junto a mim e fugiu correndo para fora. A
        mulher ficou com o manto de José até o marido voltar para casa. Então
        falou-lhe nos mesmos termos, dizendo: Esse escravo hebreu que nos
        trouxeste, veio ter comigo e quis abusar de mim. Quando me ouviu gritar
        por socorro, largou junto de mim o manto e fugiu para fora. Ao ouvir o
        marido o que dizia a mulher, assim é que me tratou teu escravo, ficou
        furioso. Mandou prender José e o meteu no cárcere, onde se guardavam os
        presos do rei. E José ficou no cárcere. Mas o Senhor estava com José e
        concedeu-lhe seu favor, atraindo-lhe a simpatia do chefe do cárcere.
        Este confiou a seus cuidados todos os que se achavam presos. Era ele que
        organizava tudo que lá se fazia. O chefe da prisão não se preocupava com
        coisa alguma que lhe fora confiada, porque o Senhor estava com José e
        fazia prosperar tudo o que ele fazia. Gênesis 39, 1-2
      </Text>
      <H5 text="423 - Que nos proíbe o sexto Mandamento: não pecar contra a castidade?" />
      <Text className="text-base">
        O sexto Mandamento: não pecar contra a castidade, proíbe qualquer ação,
        palavra ou olhar contrários à santa pureza, e a infidelidade no
        matrimônio.
      </Text>
      <H5 text="424 - Que nos proíbe o nono Mandamento?" />
      <Text className="text-base">
        O nono Mandamento proíbe expressamente todo o desejo contrário à
        fidelidade que os cônjuges se juraram ao contrair matrimônio; e proíbe
        também todo o pensamento culpável e todo desejo de ação proibida pelo
        sexto Mandamento.
      </Text>
      <H5 text="425 - É um grande pecado a impureza?" />
      <Text className="text-base">
        É um pecado gravíssimo e abominável diante de Deus e dos homens; rebaixa
        o homem à condição dos irracionais, arrasta-o a muitos outros pecados e
        vícios, e provoca o, mais terríveis castigos de Deus nesta vida e na
        outra.
      </Text>
      <H5 text="426 - São pecados todos os pensamentos que nos vêm ao espírito contra a pureza?" />
      <Text className="text-base">
        Os pensamentos que nos vêm ao espírito contra ti pureza, por si mesmos
        não são pecados, mas antes tentações e incentivos ao pecado.
      </Text>
      <H5 text="427 - Quando são pecados os maus pensamentos?" />
      <Text className="text-base">
        Os maus pensamentos, ainda que não sejam seguidos de ação, são pecados,
        quando culpavelmente lhes damos motivo, ou neles consentimos, ou nos
        expomos ao perigo próximo de neles consentir.
      </Text>
      <H5 text="428 - Que nos ordenam o sexto e o nono Mandamentos?" />
      <Text className="text-base">
        O sexto Mandamento ordena-nos que sejamos castos e modestos nas ações,
        nos olhares, no porte e nas palavras. O nono Mandamento ordena-nos que
        sejamos castos e puros, ainda mesmo tio nosso íntimo, isto é, tia alma e
        no coração.
      </Text>
      <H5 text="429 - Que devemos fazer para observar o sexto e o nono Mandamentos?" />
      <Text className="text-base">
        Para bem observarmos o sexto e o nono Mandamentos, devemos invocar
        frequentemente e de todo o coração a Deus, ser devotos de Maria Virgem,
        Mãe da pureza, lembrar-nos de que Deus nos vê, pensar ria morte, nos
        castigos divinos, tia Paixão de Jesus Cristo, guardar os nossos
        sentidos, praticar a mortificação cristã, e frequentar os sacramentos
        corri as devidas disposições.
      </Text>
      <H5 text="43O Que devemos evitar para nos conservarmos castos?" />
      <Text className="text-base">
        Para nos conservarmos castos, devemos evitar a ociosidade, os maus
        companheiros, as más leituras, a intemperança, o olhar para figuras
        indecentes, os espetáculos licenciosos, os bailes, as conversas e
        diversões perigosas, bem como todas as demais ocasiões de pecado.
      </Text>
      <H4 text="4º - Do sétimo Mandamento da Lei de Deus" />
      <Text className="text-base">
        Jesus entrou em Jericó e atravessava a cidade. Havia ali um homem rico,
        chamado Zaqueu, chefe dos cobradores do imposto. Procurava ver Jesus,
        mas não conseguia por causa da multidão, pois era muito baixo. Correndo
        na frente, subiu numa figueira brava para vê-lo, pois tinha de passar
        por ali. Ao chegar ao lugar, Jesus olhou para cima e disse-lhe: Zaqueu,
        desce depressa, pois hoje devo ficar em tua casa. Ele desceu a toda
        pressa e o recebeu com alegria. Ao ver isso, todos começaram a
        resmungar: Ele foi hospedar-se na casa de um pecador. Zaqueu entretanto,
        de pé, disse ao Senhor: Senhor, vou dar a metade dos meus bens aos
        pobres e, se em alguma coisa prejudiquei alguém, vou restituir quatro
        vezes mais. Disse-lhe Jesus: Hoje a salvação entrou nesta casa porque
        também este é um filho de Abraão. Poiso Filho do homem veio procurar e
        salvar o que estava perdido. Luc 19, 1-
      </Text>
      <H5 text="431 - Que nos proíbe o sétimo Mandamento: não furtar?" />
      <Text className="text-base">
        O sétimo Mandamento: não furtar, proíbe tirar ou reter injustamente as
        coisas alheias, e causar dano ao próximo nos seus bens de qualquer outro
        modo.
      </Text>
      <H5 text="432 - Que quer dizer furtar?" />
      <Text className="text-base">
        Furtar quer dizer: tirar injustamente as coisas alheias contra a vontade
        do dono, quando ele tem toda a razão e todo o direito de não querer ser
        privado do que lhe pertence.
      </Text>
      <H5 text="433 - Por que se proíbe o furtar?" />
      <Text className="text-base">
        Porque se peca contra a justiça, e se faz injúria ao próximo, tirando e
        retendo, contra o seu direito e contra a sua vontade, o que lhe
        pertence.
      </Text>
      <H5 text="434 - Que são as coisas alheias?" />
      <Text className="text-base">
        São todas as coisas que pertencem ao próximo, das quais tem a
        propriedade ou o uso, ou simplesmente as tem em depósito.
      </Text>
      <H5 text="435 - De quantos modos se tiram injustamente as coisas alheias?" />
      <Text className="text-base">
        De dois modos: com o furto e com o roubo.
      </Text>
      <H5 text="436 - Como se comete o furto?" />
      <Text className="text-base">
        Comete-se o furto tirando ocultamente as coisas alheias.
      </Text>
      <H5 text="437 - Como se comete o roubo?" />
      <Text className="text-base">
        Comete-se o roubo tirando com violência ou manifestamente as coisas
        alheias.
      </Text>
      <H5 text="438 - Em que casos se podem tirar as coisas alheias, sem cometer pecado?" />
      <Text className="text-base">
        Quando o dono se não opõe, ou então, quando se opõe injustamente, como
        aconteceria se alguém estivesse em extrema necessidade, contanto, que
        tirasse só o que lhe é estritamente necessário para suprir à necessidade
        urgente e extrema.
      </Text>
      <H5 text="439 - É só com o furto e com o roubo que se prejudica o próximo nos seus bens?" />
      <Text className="text-base">
        Prejudica-se também com a fraude, com a usura e com outra qualquer
        injustiça contra os seus bens.
      </Text>
      <H5 text="44O Como se comete a fraude?" />
      <Text className="text-base">
        Comete-se a fraude enganando o próximo no comércio com pesos, medidas ou
        moedas falsas, ou com gêneros deteriorados; falsificando escrituras e
        documentos; em suma, fazendo falsidades nas compras, nas vendas ou em
        qualquer outro contrato, e ainda quando se não quer dar o preço justo ou
        o preço combinado.
      </Text>
      <H5 text="441 - De que modo se comete a usura?" />
      <Text className="text-base">
        Comete-se a usura exigindo sem titulo legítimo um juro ilícito por uma
        quantia emprestada, abusando da necessidade ou da ignorância do próximo.
      </Text>
      <H5 text="442 - Que outras injustiças se cometem contra os bens do próximo?" />
      <Text className="text-base">
        São injustiças fazê-lo perder injustamente o que tem, danificá-lo nas
        suas propriedades, não trabalhar como se deve, não pagar, por malícia,
        as dívidas e mercadorias compradas, ferir ou matar os animais do
        próximo, estragar ou deixar estragar-se o que se tem em depósito,
        impedir alguém de auferir um lucro justo, auxiliar os ladrões, e
        receber, esconder ou comprar as coisas roubadas.
      </Text>
      <H5 text="443 - É pecado grave roubar?" />
      <Text className="text-base">
        É um pecado grave contra a justiça quando se trata de matéria grave,
        porque é de suma importância que seja respeitado o direito que cada um
        tem sobre os próprios bens, e isto para bem dos indivíduos, das famílias
        e da sociedade.
      </Text>
      <H5 text="444 - Quando é grave a matéria do furto?" />
      <Text className="text-base">
        É grave quando se tira coisa importante, e ainda quando, tirando-se
        coisa de pouca monta, o próximo sofre com isso grave dano.
      </Text>
      <H5 text="445 - Que nos ordena o sétimo Mandamento?" />
      <Text className="text-base">
        O sétimo Mandamento ordena-nos que respeitemos as coisas alheias, que
        paguemos o justo salário aos operários, e que observemos a justiça em
        tudo o que se refere à propriedade alheia.
      </Text>
      <H5 text="446 - Quem pecou contra o sétimo Mandamento, basta que se confesse disso?" />
      <Text className="text-base">
        Quem pecou contra o sétimo Mandamento, não basta que se confesse, mas é
        necessário que faça o que puder para restituir as coisas alheias e
        reparar os danos causados ao próximo.
      </Text>
      <H5 text="447 - Que é a reparação dos danos causados?" />
      <Text className="text-base">
        A reparação dos danos causados é a compensação que se deve dar ao
        próximo pelos frutos e lucros perdidos por causa do furto e das outras
        injustiças cometidas em seu prejuízo.
      </Text>
      <H5 text="448 - A quem se devem restituir as coisas roubadas?" />
      <Text className="text-base">
        Àquele a quem se roubaram; aos seus herdeiros, se já tiver morrido; e se
        isso for verdadeiramente impossível, deve-se dar o seu valor aos pobres
        e a obras pias.
      </Text>
      <H5 text="449 - Que se deve fazer, quando se acha alguma coisa de grande valor?" />
      <Text className="text-base">
        Deve-se empregar grande diligência para achar o dono, e restituir-lhe
        fielmente.
      </Text>
      <H4 text="5º - Do oitavo Mandamento da Lei de Deus" />
      <Text className="text-base">
        Em Babilônia vivia um homem de nome Joaquim. Estava casado com uma
        senhora chamada Susana filha de Helcias, que era muito bonita e
        religiosa. Também seus pais eram pessoas justas e tinham educado a filha
        de acordo com a Lei de Moisés. Joaquim era muito rico e tinha um parque
        confinante com sua casa; junto dele afluíam os judeus, por ser o mais
        respeitado de todos. Ora, naquele ano dois anciãos do povo tinham sido
        apontados como juízes, a respeito dos quais o Senhor tinha dito: De
        Babilônia brotou a iniquidade, da parte de anciãos-juízes que
        aparentemente governavam o povo. Eles frequentavam a casa de Joaquim, e
        todos os que tinham alguma questão se dirigiam a eles. Ora, quando pelo
        meio-dia o povo se tinha dispersado, Susana ia passear no parque do
        marido. Os dois anciãos viam-na todos os dias entrar e passear, e
        acabaram se apaixonando por ela. Fizeram o contrário do que deveriam ter
        feito, evitando erguer os olhos para o Céu e esquecendo os justos juízos
        de Deus. Embora ambos se sentissem perdidamente apaixonados por ela,
        contudo um não traía ao outro o seu sofrimento, porque ainda sentiam
        vergonha de manifestar o desejo ardente de a possuir. Todos os dias
        espreitavam avidamente por vê-la. Certo dia um disse ao outro: Vamos
        para casa, é hora de almoço! Mas quando saíram e se separaram um do
        outro, deram um giro, acabando por encontrar-se no mesmo ponto...
        Forçados portanto a se explicar, finalmente confessaram um ao outro sua
        paixão; então combinaram espreitar uma eventual ocasião de a encontrar a
        sós. Ora, enquanto os dois estavam à espreita duma ocasião favorável,
        certo dia Susana entrou no parque segundo seu costume, acompanhada
        apenas por duas mocinhas; é que queria tomar banho por causa do calor
        intenso. Não havia lá ninguém, exceto os dois velhos que estavam
        escondidos e a espreitavam. Então ela ordenou às mocinhas: Por favor,
        ide buscar-me azeite e perfumes e trancai as portas do parque, enquanto
        tomo banho! Elas obedeceram, trancando as portas do parque e retirando-
        se por uma porta lateral, para buscar o que a patroa tinha pedido, sem
        se darem conta que os velhos estavam lá escondidos. Apenas as duas
        mocinhas tinham saído, os dois velhos se levantaram e correram para
        Susana, dizendo: Olha, as portas do parque estão trancadas e ninguém nos
        vê; nós estamos apaixonados por ti: faze-nos a vontade e entrega-te a
        nós! Caso contrário, nós deporemos contra ti que um moço estava contido
        e foi por isso que mandaste embora as meninas. Então Susana deu um
        suspiro, exclamando: Vejo-me encurralada de todos os lados. Pois se
        fizer isto, espera-me a morte, mas se não o fizer, não escaparei das
        vossas mãos. Contudo prefiro cair inocente em vossas mãos a pecar na
        presença do Senhor. Então ela se pôs a gritar em altas vozes, mas também
        os dois velhos gritaram contra ela. Um deles correu para as portas do
        parque e as abriu. Quando a gente da casa ouviu a gritaria no parque,
        precipitaram-se pela porta dos fundos para ver o que lhe estaria
        sucedendo. Mas quando os velhos apresentaram a sua versão dos fatos, os
        empregados ficaram muito constrangidos, porque jamais se tinha ouvido
        falar de qualquer deslize de Susana. Quando no dia seguinte o povo se
        reuniu em casa do seu marido Joaquim, os dois anciãos vieram animados
        pela intenção criminosa de conseguir sua condenação à morte; por isso se
        dirigiram ao povo reunido: Mandai comparecer a Susana filha de Helcias,
        mulher de Joaquim! Mandaram-na portanto chamar. Ela compareceu em
        companhia dos pais e filhos e de todos os parentes. Ora, Susana era
        mulher de aparência exuberante e de extraordinária beleza. Como ela se
        apresentasse com o rosto velado, os dois malvados mandaram tirar-lhe o
        véu, para se embriagarem da sua beleza. Seus familiares e todos os
        parentes choravam. Os dois velhos se levantaram no meio do povo e
        puseram as mãos sobre a cabeça de Susana. Mas, entre lágrimas, ela olhou
        para o céu, pois seu coração tinha confiança no Senhor. Em seguida os
        anciãos deram este depoimento: Enquanto estávamos passeando a sós no
        parque, esta mulher entrou com duas mocinhas e mandou fechar as portas
        do parque, para depois mandá-las embora. Então um moço, que estava
        escondido, aproximou-se dela e com ela se deitou. Quando nós, do canto
        do parque onde estávamos, vimos esta infâmia, corremos para eles e os
        surpreendemos juntos. Não conseguimos, é verdade, agarrar o moço, porque
        era mais forte que nós, e assim abriu as portas e sumiu. A esta mulher,
        porém, agarramos e lhe perguntamos, quem era aquele moço. Mas ela não o
        quis revelar. Disto nós damos testemunho. A assembleia lhes deu crédito
        como a anciãos do povo e juízes que eram, e a condenou à morte. Susana,
        porém, gritou em alta voz e rezou: Ó Deus eterno que conheces os
        segredos e sabes tudo antes que aconteça, tu bem sabes que eles
        proferiram falso testemunho contra mim! Eisque vou morrer, embora não
        tenha cometido o crime do qual maldosamente me acusam! E o Senhor
        escutou a sua voz. Enquanto Susana estava sendo conduzida para a
        execução, o Senhor excitou o santo espírito dum jovem de nome Daniel, e
        ele gritou em altas vozes: Sou inocente do sangue desta pessoa! Então
        todo o povo se voltou para ele e perguntou: O que queres dizer com isto?
        De pé, no meio deles, ele respondeu: Então sois tão insensatos assim,
        israelitas? Sem inquérito sério e sem provas concludentes condenastes
        uma filha de Israel! Voltai ao tribunal, por que estes malvados deram
        falso testemunho contra ela! Então todo o povo voltou apressadamente, e
        os anciãos convidaram a Daniel, dizendo: Tem a bondade de tomar lugar em
        nosso meio e presta-nos o teu depoimento, pois Deus te concedeu o
        privilégio da idade. Daniel lhes disse: Separai-os longe um do outro,
        para os poder submeter a interrogatório! Quando foram separados um do
        outro, Daniel chamou a um deles e lhe disse: Velho encarquilhado e cheio
        de crimes! Agora vêm à luz os pecados que cometias antes, proferindo
        sentenças injustas, condenando os inocentes e absolvendo os culpados,
        quando o Senhor ordena: Ao inocente e ao justo não os matarás! Pois bem!
        Se a viste tão bem, dize-me à sombra de qual árvore os viste abraçados?
        O outro respondeu: À sombra duma aroeira. Daniel respondeu: Mentiste
        direto contra tua cabeça, pois o anjo de Deus já recebeu dele ordem de
        te cortar pelo meio! Tendo-o despedido, mandou vir o outro e lhe disse:
        Raça de Canaã e não de Judá! A beleza te fascinou e a paixão perverteu
        teu coração. É assim que procedíeis com as mulheres israelitas, e elas
        por medo vos faziam a vontade; mas esta mulher judia não suportou vossa
        iniquidade. Ora bem! Dize-me debaixo de que árvore os surpreendeste a se
        entreterem? Ele respondeu: Foi debaixo duma azinheira. Daniel lhe
        respondeu: Também tu mentiste diretamente contra tua cabeça! Pois o anjo
        de Deus já está à espera, com a espada na mão, para te cortar ao meio e
        dar cabo de vós. Toda a assistência pôs-se a gritar em voz alta, dando
        graças a Deus que salva os que nele esperam. Voltaram-se contra os dois
        velhos, porque Daniel os tinha convencido por suas próprias palavras que
        eram falsas testemunhas. Segundo a Lei de Moisés, aplicaram-lhes a pena
        que maldosamente tinham tramado contra o próximo, e os mandaram matar.
        Desta maneira, naquele dia foi salva uma vida inocente. Helcias e sua
        mulher louvaram a Deus por causa da sua filha e o mesmo fizeram Joaquim,
        esposo de Susana, e todos os seus familiares; eles louvaram a Deus,
        porque nela não foi achada qualquer coisa que merecesse reprovação. Dan
        13, 1-6
      </Text>
      <H5 text="450 - Que nos proíbe o oitavo Mandamento: não levantar falso testemunho?" />
      <Text className="text-base">
        O oitavo Mandamento: não levantar falso testemunho, proíbe-nos atestar
        falsidade em juízo; proíbe também a detração ou murmuração, a calúnia, a
        adulação, o juízo e a suspeita temerários, e toda espécie de mentiras.
      </Text>
      <H5 text="451 - Que é a detração ou murmuração?" />
      <Text className="text-base">
        A detração ou murmuração é um pecado que consiste em manifestar, sem
        justo motivo, os pecados ou defeitos alheios.
      </Text>
      <H5 text="452 - Que é a calúnia?" />
      <Text className="text-base">
        A calúnia é um pecado que consiste em atribuir maliciosamente ao próximo
        culpas e defeitos que não tem.
      </Text>
      <H5 text="453 - Que é a adulação?" />
      <Text className="text-base">
        A adulação é um pecado que consiste em enganar urna pessoa, dizendo-lhe
        falsamente bem dela mesma ou de outra, com o fim de tirar daí algum
        proveito.
      </Text>
      <H5 text="454 - Que é o juízo ou suspeita temerária?" />
      <Text className="text-base">
        O juízo ou suspeita temerária é um pecado que consiste em julgar ou
        suspeitar mal dos outros, sem justo fundamento.
      </Text>
      <H5 text="455 - Que é a mentira?" />
      <Text className="text-base">
        A mentira é um pecado que consiste em afirmar como verdadeiro ou como
        falso, por meio de palavras ou de ações, o que se julga não ser assim.
      </Text>
      <H5 text="456 - De quantas espécies é a mentira?" />
      <Text className="text-base">
        A mentira é de três espécies: jocosa, oficiosa e nociva.
      </Text>
      <H5 text="457 - Que é a mentira jocosa?" />
      <Text className="text-base">
        Mentira jocosa é aquela pela qual se mente por gracejo e sem prejuízo
        para ninguém.
      </Text>
      <H5 text="458 - Que é a mentira oficiosa?" />
      <Text className="text-base">
        Mentira oficiosa é a afirmação de urna falsidade para utilidade própria
        ou alheia, sem prejuízo para ninguém.
      </Text>
      <H5 text="459 - Que é a mentira nociva?" />
      <Text className="text-base">
        Mentira nociva é a afirmação de uma falsidade com prejuízo do próximo.
      </Text>
      <H5 text="460 - É lícito alguma vez mentir?" />
      <Text className="text-base">
        Nunca é lícito mentir nem por gracejo, nem para proveito próprio ou
        alheio, porque é coisa má por si mesma.
      </Text>
      <H5 text="461 - Que pecado é a mentira?" />
      <Text className="text-base">
        A mentira, quando é jocosa ou oficiosa, é pecado venial; mas, quando é
        nociva, é pecado mortal, se o prejuízo que causa é grave.
      </Text>
      <H5 text="462 - É necessário dizer sempre tudo conforme se pensa?" />
      <Text className="text-base">
        Não. Nem sempre é necessário, especialmente quando quem pergunta não tem
        o direito de saber o que pergunta.
      </Text>
      <H5 text="463 - Quem pecou contra o oitavo Mandamento, basta que se confesse?" />
      <Text className="text-base">
        Quem pecou contra o oitavo Mandamento, não basta que confesse o seu
        pecado, mas é também obrigado a retratar tudo o que disse caluniando o
        próximo, e a reparar, do melhor modo que possa, os danos que lhe causou.
      </Text>
      <H5 text="464 - Que nos ordena o oitavo Mandamento?" />
      <Text className="text-base">
        O oitavo Mandamento ordena-nos que digamos oportunamente a verdade, e
        que interpretemos em bom sentido, tanto quanto pudermos, as ações do
        nosso próximo.
      </Text>
      <H4 text="6º - Do décimo Mandamento da Lei de Deus" />
      <Text className="text-base">
        Eis o que se passou depois destes acontecimentos: Nabot de Jezrael
        possuía uma vinha em Jezrael ao lado do palácio de Acab, rei de Samaria.
        Acab falou com Nabot: Cede-me a tua vinha para que me sirva de horta,
        pois ela está bem perto da minha casa, e eu te darei uma vinha melhor,
        ou se preferires, posso pagar-te o preço em dinheiro. Mas Nabot
        respondeu a Acab: Deus me livre de entregar-te a herança de meus pais!
        Acab voltou para casa contrariado e furioso, por causa da resposta que
        Nabot de Jezrael lhe tinha dado, negando-se a lhe ceder a herança de
        seus pais. O rei se jogou na cama, virou o rosto e não quis comer. Sua
        esposa Jezabel entrou no quarto e lhe perguntou: Por que estás tão
        mal-humorado e não queres comer? Ele lhe respondeu: É que tive uma
        conversa com Nabot de Jezrael e lhe fiz a proposta de me ceder a sua
        vinha por dinheiro, ou se o preferisse, eu lhe daria em troca outra
        vinha. Mas o homem me respondeu que não me cede a vinha. Sua esposa
        Jezabel lhe disse: Bela figura de rei de Israel estás fazendo!
        Levanta-te, toma alimento e fica de bom humor! Eu te arranjarei a vinha
        de Nabot de Jezrael. Em seguida ela escreveu uma carta em nome de Acab,
        selou-a com o selo do rei e a enviou aos anciãos e nobres da cidade que
        moravam com Nabot. Na carta ela escrevia como segue: Proclamai um jejum
        e colocai Nabot na primeira fila. Fazei sentarem-se em frente dele dois
        cafajestes que dêem este depoimento: Tu amaldiçoaste a Deus e ao rei!
        Depois conduzi-o para fora e apedrejai-o até morrer. Os homens da
        cidade, anciãos e nobres, seus concidadãos, procederam conforme a ordem
        recebida de Jezabel, como estava escrito na carta que lhes tinha
        enviado. Proclamaram um jejum e deram a Nabot o primeiro lugar na
        assembleia. Chegaram também os dois cafajestes e se sentaram na frente
        dele. Os dois cafajestes acusaram a Nabot na presença do povo, nestes
        termos: Nabot amaldiçoou a Deus e ao rei! Em seguida o conduziram para
        fora da cidade e o apedrejaram até morrer. Então avisaram a Jezabel:
        Nabot foi apedrejado e morreu. Ao saber que Nabot tinha sido apedrejado
        e estava morto, Jezabel disse a Acab: Levanta-te e toma posse da vinha
        que Nabot de Jezrael não te quis vender, pois Nabot não está mais vivo;
        ele morreu. Quando Acab soube que Nabot estava morto, levantou-se para
        descer até a vinha de Nabot de Jezrael e dela tomar posse. As ameaças de
        Elias. Então a palavra do Senhor foi dirigida ao tesbita Elias nestes
        termos: Levanta-te, desce ao encontro de Acab, rei de Israel, que reside
        em Samaria. Olha, ele está na vinha de Nabot, aonde desceu para dela
        tomar posse. Fala-lhe neste teor: Assim fala o Senhor: Tu és um
        assassino e por cima ladrão! E lhe falarás nestes termos: Assim fala o
        Senhor: No mesmo lugar onde os cães lamberam o sangue de Nabot, lamberão
        também o teu próprio sangue! Acab respondeu a Elias: Quer dizer que me
        surpreendeste, meu inimigo? Ele respondeu: Sim, surpreendi! Porque te
        prestaste para praticar o que desagrada ao Senhor, eisque vou trazer
        para ti desgraças. Vou varrer-te, exterminando em Israel todas as
        pessoas do sexo masculino da família de Acab, escravos e livres.
        Tratarei tua família como as famílias de Jeroboão filho de Nabat, e de
        Baasa filho de Aías, porque me causaste irritação e seduziste Israel ao
        pecado. Também a respeito de Jezabel o Senhor falou assim: Os cachorros
        devorarão a Jezabel na propriedade de Jezrael. Os membros da família de
        Acab que morrerem na cidade, serão devorados pelos cachorros, e os que
        morrerem na campanha, serão comidos pelas aves do céu. I Reis 21, 1-2
      </Text>
      <H5 text="465 - Que nos proíbe o décimo Mandamento: não cobiçar as coisas alheias?" />
      <Text className="text-base">
        O décimo Mandamento: não cobiçar as coisas alheias, proíbe o desejo de
        privar o próximo dos seus bens, e o desejo de adquirir bens por meios
        injustos.
      </Text>
      <H5 text="466 - Por que Deus proíbe o desejo dos bens alheios?" />
      <Text className="text-base">
        Deus proíbe-nos o desejo dos bens alheios, porque Ele quer que nós, até
        interiormente, sejamos justos, e nos conservemos cada vez mais afastados
        das ações injustas.
      </Text>
      <H5 text="467 - Que nos ordena o décimo Mandamento?" />
      <Text className="text-base">
        O décimo Mandamento ordena-nos que nos contentemos com o estado em que
        Deus nos colocou, e que soframos com paciência a pobreza, quando Deus
        nos queira neste estado.
      </Text>
      <H5 text="468 - Como pode o cristão estar contente na pobreza?" />
      <Text className="text-base">
        O cristão pode estar contente mesmo na pobreza, considerando que o maior
        de todos os bens é a consciência pura e tranquila, que a nossa
        verdadeira pátria é o céu, e que Jesus Cristo se fez pobre por amor de
        nós, e prometeu um prêmio especial a todos aqueles que suportam com
        paciência a pobreza.
      </Text>
      <Text className="h2">
        IV - <Text className="em">Dos preceitos da Igreja</Text>
      </Text>
      <Text className="text-base">
        Se teu irmão pecar, vai e censura-o pessoalmente. Se ele te ouvir, terás
        ganho teu irmão. Se não te ouvir, leva contigo uma ou duas pessoas a fim
        de que toda a questão se resolva pela decisão de duas ou três
        testemunhas. Se não as ouvir, vai dizê-lo à igreja. E, se não escutar a
        igreja, seja para ti como um pagão e pecador público. Eu vos garanto:
        Tudo que ligardes na terra, será ligado no céu; e tudo que desligardes
        na terra, será desligado no céu. Digo-vos ainda: Se dois de vós se
        unirem na terra para pedir qualquer coisa, hão de consegui-lo do meu Pai
        que está nos céus! Porque onde dois ou três estiverem reunidos em meu
        nome, eu estarei ali no meio deles. Mt 18, 15-20 Então os apóstolos e
        presbíteros, de acordo com toda a Igreja, resolveram escolher alguns
        homens e enviá-los a Antioquia com Paulo e Barnabé; escolheram Judas,
        chamado Barsabás, e Silas, homens influentes entre os irmãos. Por seu
        intermédio enviaram a seguinte carta: Os irmãos, os apóstolos e
        presbíteros saúdam os irmãos de Antioquia, Síria e Cilícia, convertidos
        dentre os pagãos. Chegou ao nosso conhecimento que alguns dos nossos vos
        têm perturbado com palavras, confundindo vossas mentes, sem nenhuma
        autorização de nossa parte. Por isso resolvemos, de comum acordo,
        enviar-vos alguns homens escolhidos, em companhia de nossos amados
        Barnabé e Paulo, que expuseram suas vidas pelo nome de Nosso Senhor
        Jesus Cristo. Estamos enviando Judas e Silas para vos comunicar de viva
        voz as mesmas coisas. Pareceu bem ao Espírito Santo e a nós não vos
        impor nenhuma outra exigência além das necessárias: que vos abstenhais
        das carnes imoladas aos ídolos, do sangue, das carnes sufocadas e da
        prostituição. Procedereis bem evitando estas coisas. Passai bem. Atos
        15, 22-2
      </Text>
      <H4 text="1º - Dos preceitos da Igreja em geral" />
      <H5 text="469 - Além dos Mandamentos da Lei de Deus, que mais coisas somos nós obrigados a observar?" />
      <Text className="text-base">
        Além dos Mandamentos da Lei de Deus, somos obrigados a observar os
        mandamentos ou preceitos da Igreja.
      </Text>
      <H5 text="47O Somos obrigados a obedecer à Igreja?" />
      <Text className="text-base">
        Sem dúvida, somos obrigados a obedecer à Igreja, porque o próprio Jesus
        Cristo no-lo ordena, e porque os preceitos da Igreja facilitam a
        observância dos Mandamentos de Deus.
      </Text>
      <H5 text="471 - Quando começa a obrigação de observar os preceitos da Igreja?" />
      <Text className="text-base">
        A obrigação de observar os preceitos da Igreja começa geralmente com o
        uso da razão.
      </Text>
      <H5 text="472 - É pecado transgredir um preceito da Igreja?" />
      <Text className="text-base">
        Transgredir com advertência um preceito da Igreja em matéria grave é
        pecado grave.
      </Text>
      <H5 text="473 - Quem pode dispensar de um preceito da Igreja?" />
      <Text className="text-base">
        De um preceito da Igreja só pode dispensar o Papa ou quem dele receber
        as competentes faculdades.
      </Text>
      <H5 text="474 - Quantos e quais são os preceitos da Igreja?" />
      <Text className="text-base">Os preceitos da Igreja são cinco:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Ouvir Missa inteira nos domingos e festas de guarda.
        </Text>
        <Text className="li text-justify">
          2º - Confessar-se ao menos uma vez cada ano.
        </Text>
        <Text className="li text-justify">
          3º - Comungar ao menos pela Páscoa da Ressurreição.
        </Text>
        <Text className="li text-justify">
          4º - Jejuar e abster-se de carne quando manda a Santa Madre Igreja.
        </Text>
        <Text className="li text-justify">
          5º - Pagar dízimos segando o costume.
        </Text>
      </View>
      <H4 text="2º - Do primeiro preceito da Igreja" />
      <H5 text="475 - Que nos manda o primeiro preceito ou manda mento da Igreja: ouvir Missa inteira nos domingos e festas de guarda?" />
      <Text className="text-base">
        O primeiro preceito da Igreja: ouvir Missa inteira nos domingos e festas
        de guarda, manda-nos assistir com devoção à Santa Missa nos domingos e
        nas outras festas de preceito.
      </Text>
      <H5 text="476 - Qual é a Missa à qual a Igreja deseja que se assista nos domingos e nas outras festas de preceito?" />
      <Text className="text-base">
        A Missa à qual a Igreja deseja que, sendo possível, se assista nos
        domingos e nas outras festas de guarda, é a Missa paroquial.
      </Text>
      <H5 text="477 - Por que recomenda a Igreja aos fiéis que assistam à Missa paroquial?" />
      <Text className="text-base">
        A Igreja recomenda aos fiéis que assistam à Missa paroquial:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - a fim de que aqueles que pertencem à mesma paróquia se unam a
          orar, juntamente com o pároco, que é seu chefe espiritual;
        </Text>
        <Text className="li text-justify">
          2º - a fim de que os paroquianos participem mais do Santo Sacrifício,
          que é aplicado principalmente por eles;
        </Text>
        <Text className="li text-justify">
          3º - a fim de que ouçam as verdades do Evangelho que os párocos têm
          obrigação de expor à Santa Missa;
        </Text>
        <Text className="li text-justify">
          4º - a fim de que conheçam as prescrições e avisos que se dão à
          estação da referida Missa.
        </Text>
      </View>
      <H5 text="478 - Que quer dizer domingo?" />
      <Text className="text-base">
        Domingo quer dizer dia do Senhor, isto é, dia especialmente consagrado
        ao serviço de Deus.
      </Text>
      <H5 text="479 - Por que no primeiro mandamento da Igreja se faz menção especial do domingo?" />
      <Text className="text-base">
        No primeiro mandamento da Igreja faz-se menção especial do domingo,
        porque é ele o principal dia de festa entre os cristãos, como entre os
        judeus o principal dia de festa era o sábado, por instituição do próprio
        Deus.
      </Text>
      <H5 text="48O Que outras festas instituiu a Igreja?" />
      <Text className="text-base">
        A Igreja instituiu também as festas de Nosso Senhor, da Santíssima
        Virgem, dos Anjos e dos Santos.
      </Text>
      <H5 text="481 - Por que instituiu a Igreja outras festas de Nosso Senhor?" />
      <Text className="text-base">
        A Igreja instituiu outras festas de Nosso Senhor memória dos seus
        divinos mistérios.
      </Text>
      <H5 text="482 - Por que foram instituídas as festas da Santíssima Virgem, dos Anjos e dos Santos?" />
      <Text className="text-base">
        As festas da Santíssima Virgem, dos Anjos e dos Santos foram
        instituídas:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - em memória das graças que Deus lhes fez e para as agradecer à
          bondade divina;
        </Text>
        <Text className="li text-justify">
          2º - a fim de que os honremos, imitemos os seus exemplos e alcancemos
          o auxílio de suas orações.
        </Text>
      </View>
      <H4 text="3º - Do segundo preceito da Igreja" />
      <H5 text="483 - Que nos manda a Igreja com as palavras do segundo preceito: confessar-se ao menos uma vez cada ano?" />
      <Text className="text-base">
        Com as palavras do segundo preceito: confessar-se ao menos uma vez cada
        ano, a Igreja obriga todos os cristãos que chegaram ao uso da razão, a
        receber, uma vez ao menos em cada ano, o Sacramento da Penitência.
      </Text>
      <H5 text="484 - Qual é o tempo mais próprio para cumprir o preceito da confissão anual?" />
      <Text className="text-base">
        O tempo mais próprio para cumprir o preceito da confissão anual é a
        Quaresma, segundo o uso introduzido e aprovado em toda a Igreja.
      </Text>
      <H5 text="485 - Por que diz a Igreja que nos confessemos ao menos uma vez cada ano?" />
      <Text className="text-base">
        A Igreja diz ao menos, para dar a conhecer o seu desejo de que nos
        aproximemos deste Sacramento com mais frequência.
      </Text>
      <H5 text="486 - É pois útil confessar-nos com frequência?" />
      <Text className="text-base">
        É muito útil confessar-nos com frequência, sobretudo porque é difícil
        que se confesse bem e se conserve isento de pecado mortal, quem se
        confessa raras vezes.
      </Text>
      <H5 text="487 - Satisfaz-se a este segundo preceito com uma confissão sacrílega?" />
      <Text className="text-base">
        Quem fizer uma confissão sacrílega, não satisfaz ao segundo preceito da
        Igreja, porque a intenção da Igreja é que se receba este Sacramento para
        nossa santificação.
      </Text>
      <H4 text="4º - Do terceiro preceito da Igreja" />
      <H5 text="488 - Que nos manda a Igreja com as palavras do terceiro preceito: comungar ao menos pela Páscoa da Ressurreição?" />
      <Text className="text-base">
        Com as palavras do terceiro preceito: comungar ao menos pela Páscoa da
        Ressurreição, a Igreja obriga todos os cristãos que chegarem à idade da
        discrição a receber todos os anos a Santíssima Eucaristia, durante o
        tempo pascal; e é bom que seja na própria paróquia.
      </Text>
      <H5 text="489 - Qual o tempo útil para satisfazer, no Brasil, o preceito da Comunhão Pascal?" />
      <Text className="text-base">
        No Brasil, o tempo útil para satisfazer o preceito da Comunhão Pascal
        vai do dia 2 de fevereiro, festa da Purificação de Nossa Senhora e da
        Apresentação do Menino Jesus no Templo, até o dia 16 de julho,
        comemoração de Nossa Senhora do Carmo.
      </Text>
      <H5 text="49O Somos obrigados a comungar em alguma outra ocasião, fora do tempo pascal?" />
      <Text className="text-base">
        Sim, somos obrigados também a comungar em perigo de morte.
      </Text>
      <H5 text="491 - Por que se diz que devemos comungar ao menos pela Páscoa?" />
      <Text className="text-base">
        Porque a Igreja deseja vivamente que não somente na Páscoa, mas com
        muita frequência, nos aproximemos da Sagrada Comunhão, que é o alimento
        divino das nossas almas.
      </Text>
      <H5 text="492 - Satisfaz-se a este preceito com uma Comunhão sacrílega?" />
      <Text className="text-base">
        Quem fizer uma Comunhão sacrílega não satisfaz ao terceiro preceito da
        Igreja; porque a intenção da Igreja é que se receba este Sacramento para
        o fim para que foi instituído, isto é, para nossa santificação.
      </Text>
      <H4 text="5º - Do quarto preceito da Igreja" />
      <H5 text="493 - Que nos manda o quarto preceito da Igreja com as palavras jejuar e abster-se de carne quando manda a Santa Madre Igreja?" />
      <Text className="text-base">
        O quarto preceito da Igreja: jejuar e abster-se de carne quando manda a
        Santa Madre Igreja, manda-nos que jejuemos e nos abstenhamos de carne na
        Quarta-Feira de Cinzas e na Sexta-Feira Santa; e que nos abstenhamos de
        carne em todas as sextas-feiras do ano. Esta abstinência pode ser
        comutada por outra obra pia, a juízo do Bispo Diocesano.
      </Text>
      <H5 text="494 - Em que consiste o jejum?" />
      <Text className="text-base">
        O jejum consiste em tomar uma só refeição, durante o dia, e em não comer
        coisas proibidas.
      </Text>
      <H5 text="495 - Nos dias de jejum, além da única refeição, é proibido tomar qualquer outro alimento?" />
      <Text className="text-base">
        Nos dias de jejum, a Igreja permite uma pequena parva pela manhã, e uma
        ligeira refeição à noite, ou, então, cerca do meio-dia, quando se deixa
        para a tarde a refeição maior.
      </Text>
      <H5 text="496 - Para que serve o jejum?" />
      <Text className="text-base">
        O jejum serve para nos dispor melhor para a oração, para fazer
        penitência dos pecados cometidos, e para nos preservar de cometer outros
        novos.
      </Text>
      <H5 text="497 - Quem é obrigado a jejuar?" />
      <Text className="text-base">
        São obrigados a jejuar todos os cristãos, desde os vinte e um anos
        completos até aos sessenta começados, se não estão dispensados ou
        escusados por legitimo impedimento. A abstinência começa a obrigar aos
        catorze anos.
      </Text>
      <H5 text="498 - Estão também dispensados de toda a mortificação os que não estão obrigados a jejuar?" />
      <Text className="text-base">
        Os que não estão obrigados a jejuar, nem por isso estão dispensados de
        toda a mortificação, porque todos temos obrigação de fazer penitência.
      </Text>
      <H5 text="499 - Para que fim foi instituída a Quaresma?" />
      <Text className="text-base">
        A Quaresma foi instituída a fim de imitarmos, de algum modo, o rigoroso
        jejum de quarenta dias que Jesus Cristo observou no deserto, e a fim de
        nos prepararmos, por meio da penitência, para celebrar santamente a
        festa da Páscoa.
      </Text>
      <H5 text="500 - Qual o fim do jejum do Advento?" />
      <Text className="text-base">
        O jejum do Advento foi instituído para nos dispor a celebrar santamente
        a festa do Nata
      </Text>
      <H5 text="501 - Para que foi instituído o jejum das Quatro Têmporas?" />
      <Text className="text-base">
        O jejum das Quatro Têmporas foi instituído para consagrar cada uma das
        quatro estações do ano com a penitência de alguns dias; para pedir a
        Deus a conservação dos frutos da terra; para Lhe dar graças pelos frutos
        já concedidos, e para Lhe pedir que dê à sua Igreja santos ministros,
        que são ordenados nos sábados das Quatro Têmporas.
      </Text>
      <H5 text="502 - Para que foi instituído o jejum das vigílias?" />
      <Text className="text-base">
        O jejum das vigílias foi instituído a fim de nos prepararmos para
        celebrar santamente as festas principais.
      </Text>
      <H5 text="503 - Que nos proíbe a Santa Igreja nos dias de jejum e abstinência?" />
      <Text className="text-base">
        Quando a pessoa não está legitimamente dispensada, deve no dia de jejum
        e abstinência tornar uma só refeição plena, podendo fazer duas outras
        pequenas, uma pela manhã e outra à tarde, que evite grave dano, como,
        por exemplo, uma forte dor de cabeça. Nos dias de abstinência, proíbe o
        uso da carne e do caldo de carne.
      </Text>
      <H5 text="504 - Por que a Igreja quer que nos abstenhamos de comer carne a sexta-feira?" />
      <Text className="text-base">
        A fim de que façamos penitência todas as semanas, e sobretudo à
        sexta-feira, em honra da Paixão de Jesus Cristo.
      </Text>
      <H4 text="6º - Do quinto preceito da Igreja" />
      <H5 text="505 - Como se observa o quinto preceito da Igreja: pagar dízimos segundo o costume?" />
      <Text className="text-base">
        Observa-se o quinto preceito: pagar dízimos segundo o costume, pagando
        aquelas ofertas ou contribuições, que foram estabelecidas, para
        reconhecer o supremo domínio que Deus tem sobre todas as coisas, e para
        sustentar os ministros do altar.
      </Text>
      <Text className="h2">
        V -{" "}
        <Text className="em">
          {" "}
          Dos deveres particulares do próprio estado e dos conselhos evangélicos{" "}
        </Text>
      </Text>
      <H4 text="1º - Dos deveres do próprio estado" />
      <H5 text="506 - Que vêm a ser os deveres do próprio estado?" />
      <Text className="text-base">
        Por deveres do próprio estado entendem-se aquelas obrigações
        particulares que cada um tem por causa do seu estado, da sua condição e
        da situação em que se acha.
      </Text>
      <H5 text="507 - Quem impôs aos diversos estados os seus deveres particulares?" />
      <Text className="text-base">
        Foi o mesmo Deus que impôs aos diversos estados os deveres particulares,
        porque estes derivam dos seus divinos Mandamentos.
      </Text>
      <H5 text="508 - Explicai-me com algum exemplo como os deveres particulares derivam dos Dez" />
      <Text className="text-base">
        Mandamentos No quarto Mandamento, sob o nome de pai e mãe, entendem-se
        também todos os nossos superiores; assim deste Mandamento derivam todos
        os deveres de obediência, de amor e de respeito dos inferiores para com
        os seus superiores e todos os deveres de vigilância que têm os
        superiores sobre os seus inferiores.
      </Text>
      <H5 text="509 - De que Mandamentos derivam os deveres dos operários, dos comerciantes, dos administradores de bens alheios e outros semelhantes?" />
      <Text className="text-base">
        Os deveres de fidelidade, de sinceridade, de justiça, de equidade, que
        eles têm, derivam do sétimo, do oitavo e do décimo Mandamento, que
        proíbem toda a fraude, injustiça, negligência e duplicidade.
      </Text>
      <H5 text="510 - De que Mandamento derivam os deveres das pessoas consagradas a Deus?" />
      <Text className="text-base">
        Os deveres das pessoas consagradas a Deus derivam do segundo Mandamento,
        que manda cumprir os votos e as promessas feitas a Deus; visto como
        essas pessoas se obrigaram por esta forma à observância de todos ou de
        alguns conselhos evangélicos.
      </Text>
      <H4 text="2º - Dos conselhos evangélicos" />
      <H5 text="511 - Que são os conselhos evangélicos?" />
      <Text className="text-base">
        Os conselhos evangélicos são alguns meios sugeridos por Jesus Cristo no
        santo Evangelho, para chegar à perfeição cristã.
      </Text>
      <H5 text="512 - Quais são os conselhos evangélicos?" />
      <Text className="text-base">
        Os conselhos evangélicos são: pobreza voluntária, castidade perpétua e
        obediência inteira, em tudo o que não seja pecado.
      </Text>
      <H5 text="513 - Para que servem os conselhos evangélicos?" />
      <Text className="text-base">
        Os conselhos evangélicos servem para facilitar a observância dos
        Mandamentos e para assegurar melhor a salvação eterna.
      </Text>
      <H5 text="514 - Por que os conselhos evangélicos facilitam a observância dos Mandamentos?" />
      <Text className="text-base">
        Os conselhos evangélicos facilitam a observância dos Mandamentos, porque
        nos ajudam a desapegar o coração do amor dos bens terrenos, dos prazeres
        e das honras, e assim nos afastam do pecado.
      </Text>
      <H1 text="Quarta Parte" />
      <Text className="aside">Dos Sacramentos</Text>
      <Text className="h2">
        I - <Text className="em">Dos Sacramentos em geral</Text>
      </Text>
      <H4 text="1º - Natureza dos Sacramentos" />
      <H5 text="515 - De que trata a quarta parte da Doutrina Cristã?" />
      <Text className="text-base">
        A quarta parte da Doutrina Cristã trata dos Sacramentos.
      </Text>
      <H5 text="516 - Que se entende pela palavra Sacramento?" />
      <Text className="text-base">
        Pela palavra Sacramento entende-se um sinal sensível e eficaz da graça,
        instituído por Jesus Cristo, para santificar as nossas almas.
      </Text>
      <H5 text="517 - Por que chamais aos Sacramentos sinais sensíveis e eficazes da graça?" />
      <Text className="text-base">
        Chamo aos Sacramentos sinais sensíveis e eficazes da graça, porque todos
        os Sacramentos significam, por meio de coisas sensíveis, a graça divina
        que eles produzem na nossa alma.
      </Text>
      <H5 text="518 - Explicai com um exemplo como os Sacramentos são sinais sensíveis e eficazes da graça." />
      <Text className="text-base">
        No Batismo, o ato de derramar a água sobre cabeça da pessoa, e as
        palavras: Eu te baptizo, isto é, eu te lavo, em nome do Padre e do Filho
        e do Espírito Santo, são um sinal sensível do que o Batismo opera na
        alma; porque assim como a água lava o corpo, assim a graça, dada pelo
        Batismo, purifica a alma, do pecado.
      </Text>
      <H5 text="519 - Quantos e quais são os Sacramentos?" />
      <Text className="text-base">
        Os Sacramentos são sete, a saber: Batismo, Confirmação, Eucaristia,
        Penitência, Extrema-Unção, Ordem e Matrimônio.
      </Text>
      <H5 text="520 - Quantas coisas se requerem para fazer um Sacramento?" />
      <Text className="text-base">
        Para fazer um Sacramento requerem-se a matéria, a forma, e o ministro,
        que tenha intenção de fazer o que faz a Igreja.
      </Text>
      <H5 text="521 - Que é a matéria dos Sacramentos?" />
      <Text className="text-base">
        A matéria dos Sacramentos é a coisa sensível que se emprega para os
        fazer; como, por exemplo, a água natural no Batismo, o óleo e o bálsamo
        na Confirmação.
      </Text>
      <H5 text="522 - Que é a forma dos Sacramentos?" />
      <Text className="text-base">
        A forma dos Sacramentos são as palavras que se proferem para os fazer.
      </Text>
      <H5 text="523 - Quem é o ministro dos Sacramentos?" />
      <Text className="text-base">
        O ministro dos Sacramentos é a pessoa que faz ou confere os Sacramentos.
      </Text>
      <H4 text="2º - Do efeito principal dos Sacramentos, que é a graça" />
      <H5 text="524 - Que é a graça?" />
      <Text className="text-base">
        A graça de Deus é um dom interior, sobrenatural, que nos é dado sem
        merecimento algum da nossa parte, mas pelos merecimentos de Jesus
        Cristo, em ordem à vida eterna.
      </Text>
      <H5 text="525 - Como se divide a graça?" />
      <Text className="text-base">
        Divide-se a graça em: graça santificante, que se chama também habitual;
        e graça atual.
      </Text>
      <H5 text="526 - Que é a graça santificante?" />
      <Text className="text-base">
        A graça santificante é um dom sobrenatural, inerente à nossa alma, que
        nos faz justos, filhos adotivos de Deus e herdeiros do Paraíso.
      </Text>
      <H5 text="527 - Quantas espécies há de graça santificante?" />
      <Text className="text-base">
        Há duas espécies de graça santificante: graça primeira, e graça segunda.
      </Text>
      <H5 text="528 - Que é a graça primeira?" />
      <Text className="text-base">
        A graça primeira é aquela pela qual o homem passa do estado de pecado
        mortal ao estado de justiça, de amizade com Deus.
      </Text>
      <H5 text="529 - E que é a graça segunda?" />
      <Text className="text-base">
        A graça segunda é um aumento da graça primeira.
      </Text>
      <H5 text="530 - Que é a graça atual?" />
      <Text className="text-base">
        A graça atual é um dom sobrenatural que ilumina nossa inteligência, move
        e fortalece a nossa vontade, a fim de que pratiquemos o bem e evitemos o
        mal.
      </Text>
      <H5 text="531 - Podemos nós resistir à graça de Deus?" />
      <Text className="text-base">
        Sim, podemos resistir à graça de Deus, porque ela não destrói o nosso
        livre arbítrio.
      </Text>
      <H5 text="532 - Com as nossas forças, podemos nós fazer alguma coisa que nos seja útil para a vida eterna?" />
      <Text className="text-base">
        Sem o auxílio da graça de Deus, só com as nossas forças, não podemos
        fazer nada que nos seja útil para a vida eterna.
      </Text>
      <H5 text="533 - Como nos comunica Deus a graça?" />
      <Text className="text-base">
        Deus nos comunica a graça principalmente por meio dos santos
        Sacramentos.
      </Text>
      <H5 text="534 - Além da graça santificante, conferem-nos os Sacramentos mais outra graça?" />
      <Text className="text-base">
        Os Sacramentos, além da graça santificante, conferem também a graça
        sacramental.
      </Text>
      <H5 text="535 - Que é a graça sacramental?" />
      <Text className="text-base">
        A graça sacramental consiste no direito que se adquire, recebendo
        qualquer Sacramento, de ter em tempo oportuno as graças atuais
        necessárias, para cumprir as obrigações que derivam do Sacramento
        recebido. Assim, quando fomos baptizados, recebemos o direi to a ter as
        graças necessárias as para vi vermos cristãmente.
      </Text>
      <H5 text="536 - Dão sempre os Sacramentos a graça a quem os recebe?" />
      <Text className="text-base">
        Os Sacramentos dão sempre a graça, contanto que se recebam com as
        disposições necessárias.
      </Text>
      <H5 text="537 - Quem deu aos Sacramentos a virtude de conferir a graça?" />
      <Text className="text-base">
        Foi Jesus Cristo que, por sua Paixão e Morte, deu aos Sacramentos a
        virtude de conferir a graça.
      </Text>
      <H5 text="538 - Quais são os Sacramentos que conferem a primeira graça santificante?" />
      <Text className="text-base">
        Os Sacramentos que conferem a primeira graça santificante, que nos faz
        amigos de Deus, são dois: Batismo e Penitência.
      </Text>
      <H5 text="539 - Como se chamam, por este motivo, estes dois Sacramentos?" />
      <Text className="text-base">
        Estes dois Sacramentos, isto é, o Batismo e a Penitência, chamam-se por
        este motivo Sacramentos de mortos, porque são instituídos principalmente
        para restituir a vida da graça às almas mortas pelo pecado.
      </Text>
      <H5 text="540 - Quais são os Sacramentos que aumentam a graça em quem a possui?" />
      <Text className="text-base">
        Os Sacramentos que aumentam a graça em quem a possui, são os outros
        cinco, isto é, a Confirmação, a Eucaristia, a Extrema-Unção, a Ordem e o
        Matrimônio, os quais conferem a graça segunda.
      </Text>
      <H5 text="541 - Como se chamam, por esse motivo, estes cinco Sacramentos?" />
      <Text className="text-base">
        Estes cinco Sacramentos, isto é, a Confirmação, a Eucaristia, a
        Extrema-Unção, a Ordem e o Matrimônio, chamam-se Sacramentos de vivos,
        porque aqueles que os recebem, devem estar isentos de pecado mortal,
        quer dizer, já vivos pela graça santificante.
      </Text>
      <H5 text="542 - Que pecado comete quem recebe um Sacramento de vivos, sabendo que não está em estado de graça?" />
      <Text className="text-base">
        Quem recebe um Sacramento de vivos, sabendo que não está em estado de
        graça, comete um grave sacrilégio.
      </Text>
      <H5 text="543 - Quais são os Sacramentos mais necessários para nossa salvação?" />
      <Text className="text-base">
        Os Sacramentos mais necessários para nossa salvação, são dois: o Batismo
        e a Penitência; o Batismo é necessário absolutamente para todos, e a
        Penitência é necessária para todos aqueles que pecaram mortalmente
        depois do Batismo.
      </Text>
      <H5 text="544 - Qual é o maior de todos os Sacramentos?" />
      <Text className="text-base">
        O maior de todos os Sacramentos é o Sacramento da Eucaristia, porque
        contém não só a graça, mas também ao mesmo Jesus Cristo, autor da graça
        e dos Sacramentos.
      </Text>
      <H4 text="3º - Do caráter que imprimem alguns Sacramentos" />
      <H5 text="545 - Quais são os Sacramentos que se podem receber uma só vez?" />
      <Text className="text-base">
        Os Sacramentos que se podem receber uma só vez, são três: Batismo,
        Confirmação e Ordem.
      </Text>
      <H5 text="546 - Por que os três Sacramentos, Batismo, Confirmação e Ordem só se podem receber uma vez?" />
      <Text className="text-base">
        Os três Sacramentos, Batismo, Confirmação e Ordem, podem-se receber uma
        só vez, porque imprimem caráter.
      </Text>
      <H5 text="547 - Que é o caráter que cada um destes três Sacramentos imprime na alma?" />
      <Text className="text-base">
        O caráter impresso na alma em cada um destes três Sacramentos, é um
        sinal espiritual que nunca se apaga.
      </Text>
      <H5 text="548 - Para que serve o caráter que estes três Sacramentos imprimem na alma?" />
      <Text className="text-base">
        O caráter que estes três Sacramentos imprimem na alma, serve para nos
        distinguir, no Batismo como membros de Jesus Cristo, na Confirmação como
        seus soldados, na Ordem como seus ministros.
      </Text>
      <Text className="h2">
        II - <Text className="em">Do Batismo</Text>
      </Text>
      <H4 text="1º - Natureza e efeitos do Batismo" />
      <H5 text="549 - Que é o Sacramento do Batismo?" />
      <Text className="text-base">
        O Batismo é o Sacramento pelo qual renascemos para a graça de Deus, e
        nos tornamos cristãos.
      </Text>
      <H5 text="550 - Quais são os efeitos do Sacramento do Batismo?" />
      <Text className="text-base">
        O Sacramento do Batismo confere a primeira graça santificante, que apaga
        o pecado original e também o atual, se o há; perdoa toda a pena por eles
        devida; imprime o caráter de cristão; faz-nos filhos de Deus, membros da
        Igreja e herdeiros do Paraíso, e torna-nos capazes de receber os outros
        Sacramentos.
      </Text>
      <H5 text="551 - Qual é a matéria do Batismo?" />
      <Text className="text-base">
        A matéria do Batismo é a água natural, que se derrama sobre a cabeça do
        que é baptizado, de maneira que escorra.
      </Text>
      <H5 text="552 - Qual é a forma do Batismo?" />
      <Text className="text-base">
        A forma do Batismo é esta: Eu te baptizo em nome do Padre e do Filho e
        do Espírito Santo.
      </Text>
      <H4 text="2º - Ministro do Batismo" />
      <H5 text="553 - A quem compete baptizar?" />
      <Text className="text-base">
        Batizar compete por direito aos Bispos e aos párocos; mas, em caso de
        necessidade, qualquer pessoa pode baptizar, seja homem ou seja mulher, e
        até um herege ou um infiel, contanto que realize o rito do Batismo e
        tenha intenção de fazer o que faz a Igreja.
      </Text>
      <H5 text="554 - Se houver necessidade de baptizar uma pessoa que está em perigo de morte, e estiverem muitas pessoas presentes, quem é que deverá baptizar?" />
      <Text className="text-base">
        Se houver necessidade de baptizar alguém em perigo de morte, e estiverem
        muitas pessoas presentes, deverá baptizá-lo o Sacerdote, se lá estiver;
        na sua falta, um eclesiástico de ordem inferior, e na falta deste, o
        leigo homem de preferência à mulher, a não ser que a perícia maior da
        mulher ou a decência exijam o contrário.
      </Text>
      <H5 text="555 - Que intenção deve ter quem baptiza?" />
      <Text className="text-base">
        Quem baptiza deve ter a intenção de fazer o que faz a Santa Igreja ao
        baptizar.
      </Text>
      <H4 text="3º - Rito do Batismo e disposições de quem o recebe já adulto" />
      <H5 text="556 - Como se baptiza?" />
      <Text className="text-base">
        Batiza-se derramando água sobre a cabeça do baptizando, ou, não podendo
        ser sobre a cabeça, sobre qualquer outra parte principal do corpo, e
        dizendo ao mesmo tempo: Eu te baptizo em nome do Padre e do Filho e do
        Espírito Santo.
      </Text>
      <H5 text="557 - Se alguém derramasse a água e outro proferisse as palavras, a pessoa ficaria baptizada?" />
      <Text className="text-base">
        Se alguém derramasse a água, e outro proferisse as palavras, a pessoa
        não ficaria baptizada; é necessário que seja a mesma pessoa que derrame
        a água e pronuncie as palavras.
      </Text>
      <H5 text="558 - Quando se duvida se a pessoa está morta, deve-se deixar de baptizá-la?" />
      <Text className="text-base">
        Quando se duvida se a pessoa está morta, deve-se baptizá-la sob
        condição, dizendo: Se estás vivo, eu te baptizo em nome do Padre e do
        Filho e do Espírito Santo.
      </Text>
      <H5 text="559 - Quando se devem levar à Igreja as crianças para serem baptizadas?" />
      <Text className="text-base">
        As crianças devem ser levadas à Igreja para serem baptizadas, o mais
        cedo possível.
      </Text>
      <H5 text="560 - Por que se deve ter tanta solicitude em levar as crianças ao Batismo?" />
      <Text className="text-base">
        Deve-se ter suma solicitude em levar a baptizar as crianças, porque elas
        pela sua tenra idade estão expostas a muitos perigos de morrer, e não
        podem salvar-se sem o Batismo.
      </Text>
      <H5 text="561 - Pecam então os pais e as mães que, pela sua negligência, deixam morrer os filhos sem Batismo ou simplesmente demoram em fazê-lo?" />
      <Text className="text-base">
        Sim, os pais e as mães, que pela sua negligência deixam morrer os filhos
        sem Batismo, pecam gravemente, porque os privam da vida eterna; e pecam
        também gravemente, demorando muito tempo o Batismo, porque os expõem ao
        perigo de morrer sem o terem recebido.
      </Text>
      <H5 text="562 - Quando o que se baptiza é adulto, que disposições deve ter?" />
      <Text className="text-base">
        O adulto que se baptiza deve ter, além da fé, a dor, pelo menos
        imperfeita, dos pecados mortais que tivesse cometido.
      </Text>
      <H5 text="563 - Se um adulto se baptizasse em pecado mortal, sem esta dor, que receberia?" />
      <Text className="text-base">
        Se um adulto se baptizasse em pecado mortal, sem esta dor, receberia o
        caráter do Batismo, mas não a remissão dos pecados, nem a graça
        santificante; e estes efeitos ficariam suspensos, enquanto não fosse
        removido o impedimento pela dor perfeita dos pecados ou pelo Sacramento
        da Penitência.
      </Text>
      <H4 text="4º - Necessidade do Batismo e deveres dos baptizados" />
      <H5 text="564 - É o Batismo necessário para a salvação?" />
      <Text className="text-base">
        O Batismo é absolutamente necessário para a salvação, porque o Senhor
        disse expressamente: Quem não renascer na água e no Espírito Santo, não
        poderá entrar no reino dos céus.
      </Text>
      <H5 text="565 - Pode suprir-se de algum modo a falta do Batismo?" />
      <Text className="text-base">
        A falta do Batismo pode supri-la o martírio, que se chama Batismo de
        sangue, ou um ato de amor perfeito de Deus, ou de contrição, junto com o
        desejo, ao menos implícito, do Batismo, e este ato chama-se Batismo de
        desejo.
      </Text>
      <H5 text="566 - A que fica obrigado quem recebe o Batismo?" />
      <Text className="text-base">
        Quem recebe o Batismo, fica obrigado a professar sempre a fé e a
        observar a lei de Jesus Cristo e da sua Igreja.
      </Text>
      <H5 text="567 - A que se renuncia ao receber o santo Batismo?" />
      <Text className="text-base">
        Ao receber o santo Batismo renuncia-se para sempre ao demônio, às suas
        obras e às suas pompas.
      </Text>
      <H5 text="568 - Que se entende por obras e pompas do demônio?" />
      <Text className="text-base">
        Por obras e pompas do demônio, entendem-se os pecados e as máximas do
        mundo, contrárias às máximas do Santo Evangelho.
      </Text>
      <H4 text="5º - Nome e padrinhos" />
      <H5 text="569 - Por que se impõe o nome de um Santo ao que se baptiza?" />
      <Text className="text-base">
        Ao que se baptiza, impõe-se o nome de um Santo, para o pôr sob a
        especial proteção de um padroeiro celeste, e para o animar a imitar-lhe
        os exemplos.
      </Text>
      <H5 text="570 - O que são os padrinhos e as madrinhas do Batismo?" />
      <Text className="text-base">
        Os padrinhos e as madrinhas do Batismo são aquelas pessoas que por
        disposição da Igreja seguram as crianças junto à pia baptismal,
        respondem por elas, e ficam responsáveis, diante de Deus, pela educação
        cristã das mesmas, especialmente se vierem a faltar os pais.
      </Text>
      <H5 text="571 - Somos nós obrigados a cumprir as promessas e renúncias que por nós fizeram nossos padrinhos?" />
      <Text className="text-base">
        Sim, somos obrigados, sem dúvida, a cumprir as promessas e renúncias que
        por nós fizeram os nossos padrinhos, porque Deus, só mediante estas
        condições, nos recebeu na sua graça.
      </Text>
      <H5 text="572 - Que pessoas se devem escolher para padrinhos e madrinhas?" />
      <Text className="text-base">
        Devem escolher-se para padrinhos e madrinhas pessoas católicas e de bons
        costumes, e observantes das leis da Igreja.
      </Text>
      <H5 text="573 - Quais são as obrigações dos padrinhos e das madrinhas?" />
      <Text className="text-base">
        Os padrinhos e as madrinhas são obrigados a cuidar que os seus filhos
        espirituais sejam instruídos nas verdades da fé, e vivam como bons
        cristãos, edificando-os com o bom exemplo.
      </Text>
      <H5 text="574 - Que vínculo contraem os padrinhos do Batismo?" />
      <Text className="text-base">
        Os padrinhos contraem um parentesco espiritual com o baptizado, e este
        parentesco origina impedimento de matrimônio com o mesmo.
      </Text>
      <Text className="h2">
        III - <Text className="em">Da Confirmação ou Crisma</Text>
      </Text>
      <H5 text="575 - Que é o Sacramento da Confirmação?" />
      <Text className="text-base">
        A Confirmação, ou Crisma, é um Sacramento que nos dá o Espírito Santo,
        imprime na nossa alma o caráter de soldados de Cristo, e nos faz
        perfeitos cristãos.
      </Text>
      <H5 text="576 - De que maneira o Sacramento da Confirmação nos faz perfeitos cristãos?" />
      <Text className="text-base">
        A Confirmação faz-nos perfeitos cristãos, confirmando-nos na fé, e
        aperfeiçoando em nós as outras virtudes e os dons recebidos no santo
        Batismo; e é por isso que se chama Confirmação.
      </Text>
      <H5 text="577 - Quais são os dons do Espírito Santo que se recebem na Confirmação?" />
      <Text className="text-base">
        Os dons do Espírito Santo, que se recebem na Confirmação, são sete:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - Sabedoria,</Text>
        <Text className="li text-justify">2º - Entendimento;</Text>
        <Text className="li text-justify">3º - Conselho;</Text>
        <Text className="li text-justify">4º - Fortaleza;</Text>
        <Text className="li text-justify">5º - Ciência;</Text>
        <Text className="li text-justify">6º - Piedade;</Text>
        <Text className="li text-justify">7º - Temor de Deus.</Text>
      </View>
      <H5 text="578 - Qual é a matéria deste Sacramento?" />
      <Text className="text-base">
        A matéria deste Sacramento, além da imposição das mãos do Bispo, é a
        unção feita na fronte da pessoa baptizada, com o santo Crisma; por isso,
        este Sacramento se chama também Crisma, que significa Unção.
      </Text>
      <H5 text="579 - Que é o santo Crisma?" />
      <Text className="text-base">
        O santo Crisma é óleo de oliveira misturado com bálsamo, e consagrado
        pelo Bispo na Quinta-Feira Santa.
      </Text>
      <H5 text="580 - Que significam o óleo e o bálsamo neste Sacramento?" />
      <Text className="text-base">
        Neste Sacramento, o óleo, que se derrama e fortalece, significa a
        abundância da graça que se difunde na alma do cristão para o confirmar
        na fé; e o bálsamo, que é aromático e preserva da corrupção, significa
        que o cristão fortificado por esta graça é capaz de difundir o bom aroma
        das virtudes cristãs, e de preservar-se da corrupção dos vícios.
      </Text>
      <H5 text="581 - Qual é a forma do Sacramento da Confirmação?" />
      <Text className="text-base">
        A forma atual do Sacramento da Confirmação é esta: Recebe o sinal do dom
        do Espírito Santo, que substituiu a antiga: Eu te assinalo com o sinal
        da Cruz, e te confirmo com o Crisma da salvação, em nome do Pai e do
        Filho e do Espírito Santo. Assim seja.
      </Text>
      <H5 text="582 - Quem é o ministro do Sacramento da Confirmação?" />
      <Text className="text-base">
        O ministro ordinário do Sacramento da Confirmação e só o Bispo.
      </Text>
      <H5 text="583 - Com que cerimônias administra o Bispo a Confirmação?" />
      <Text className="text-base">
        O Bispo, para administrar o Sacramento da Confirmação, primeiro estende
        as mãos sobre os que estão para se crismar, invocando sobre eles o
        Espírito Santo; em seguida faz uma unção em forma de cruz com o santo
        Crisma na fronte de cada um, dizendo as palavras da forma; depois, com a
        mão direita, dá uma leve bofetada na face do crismado, dizendo: A paz
        seja contigo; e no fim abençoa solenemente todos os crismados.
      </Text>
      <H5 text="584 - Por que se faz a unção na fronte?" />
      <Text className="text-base">
        Faz-se a unção na fronte, onde aparecem os sinais do temor e da
        vergonha, a fim de que o crismado entenda que não deve envergonhar-se do
        nome e da profissão de cristão, nem ter medo dos inimigos da fé.
      </Text>
      <H5 text="585 - Por que se dá uma leve bofetada na face do crismado?" />
      <Text className="text-base">
        Dá-se uma leve bofetada na face do crismado para que saiba que deve
        estar pronto a sofrer todas as afrontas e todas as penas pela fé e amor
        de Jesus Cristo.
      </Text>
      <H5 text="586 - Devem todos procurar receber o Sacramento da Confirmação?" />
      <Text className="text-base">
        Sim, todos devem procurar receber o Sacramento da Confirmação e fazer
        que os seus subordinados o recebam.
      </Text>
      <H5 text="587 - Em que idade é conveniente receber o Sacramento da Confirmação?" />
      <Text className="text-base">
        A idade em que é conveniente receber o Sacramento da Confirmação é a de
        sete anos, pouco mais ou menos, porque então costumam começar as
        tentações e já se pode conhecer bastante a graça deste Sacramento, e
        conservar-se a lembrança de tê-lo recebido.
      </Text>
      <H5 text="588 - Que disposições se requerem para receber o Sacramento da Confirmação?" />
      <Text className="text-base">
        Para receber dignamente o Sacramento da Confirmação é necessário estar
        em estado de graça, saber os mistérios principais da nossa santa Fé, e
        aproximar-se deste Sacramento com reverência e devoção.
      </Text>
      <H5 text="589 - Cometeria pecado quem recebesse a Confirmação segunda vez?" />
      <Text className="text-base">
        Cometeria um sacrilégio, porque a Confirmação é um daqueles Sacramentos
        que imprimem caráter na alma e que portanto só se podem receber uma vez.
      </Text>
      <H5 text="590 - Que deve fazer o cristão para conservar a graça da Confirmação?" />
      <Text className="text-base">
        Para conservar a graça da Confirmação, o cristão deve orar
        frequentemente, fazer boas obras, e viver segundo a lei de Jesus Cristo,
        sem respeito humano.
      </Text>
      <H5 text="591 - Por que também na Confirmação há padrinhos e madrinhas?" />
      <Text className="text-base">
        Para que estes, com as palavras e com os exemplos, orientem o crismado
        no caminho da salvação e o auxiliem nos combates espirituais.
      </Text>
      <H5 text="592 - Que condições se requerem no padrinho?" />
      <Text className="text-base">
        O padrinho deve ser de idade conveniente, católico, crismado, instruído
        nas coisas mais necessárias da religião e de bons costumes; e deve ser
        do mesmo sexo que o crismado.
      </Text>
      <H5 text="593 - Contrai algum parentesco com o crismado o padrinho de Crisma?" />
      <Text className="text-base">
        Sim, o padrinho de Crisma contrai parentesco espiritual com o crismado;
        mas este parentesco não é impedimento para o matrimônio.
      </Text>
      <Text className="h2">
        IV - <Text className="em">Da Santíssima Eucaristia</Text>
      </Text>
      <H4 text="1º - Da natureza da Santíssima Eucaristia e da presença real de Jesus Cristo neste Sacramento" />
      <H5 text="594 - Que é o Sacramento da Eucaristia?" />
      <Text className="text-base">
        A Eucaristia é um Sacramento que, pela admirável conversão de toda a
        substância do pão no Corpo de Jesus Cristo, e de toda a substância do
        vinho no seu precioso Sangue, contém verdadeira, real e substancialmente
        o Corpo, Sangue, Alma e Divindade do mesmo Jesus Cristo Nosso Senhor,
        debaixo das espécies de pão e de vinho, para ser nosso alimento,
        espiritual.
      </Text>
      <H5 text="595 - Está na Eucaristia o mesmo Jesus Cristo que está no Céu e que nasceu, na terra, da Santíssima Virgem?" />
      <Text className="text-base">
        Sim, na Eucaristia está verdadeiramente o mesmo Jesus Cristo que está no
        Céu e que nasceu, na terra, da Santíssima Virgem Maria.
      </Text>
      <H5 text="596 - Por que acreditais que no Sacramento da Eucaristia está verdadeiramente Jesus Cristo?" />
      <Text className="text-base">
        Eu acredito que no Sacramento da Eucaristia está verdadeiramente
        presente Jesus Cristo, porque Ele mesmo o disse, e assim no-lo ensina a
        Santa Igreja.
      </Text>
      <H5 text="597 - Qual é a matéria do Sacramento da Eucaristia?" />
      <Text className="text-base">
        A matéria do Sacramento da Eucaristia é a que foi empregada por Jesus
        Cristo. a saber: o pão de trigo e o vinho de uva.
      </Text>
      <H5 text="598 - Qual é a forma do Sacramento da Eucaristia?" />
      <Text className="text-base">
        A forma do Sacramento da Eucaristia são as palavras usadas por Jesus
        Cristo: Isto é o meu Corpo: este é o meu Sangue.
      </Text>
      <H5 text="599 - Que é a hóstia antes da consagração?" />
      <Text className="text-base">
        A hóstia antes da consagração é pão de trigo.
      </Text>
      <H5 text="600 - Depois da consagração, que é a hóstia?" />
      <Text className="text-base">
        Depois da consagração, a hóstia é o verdadeiro Corpo de Nosso Senhor
        Jesus Cristo, debaixo das espécies de pão.
      </Text>
      <H5 text="601 - Que está no cálice antes da consagração?" />
      <Text className="text-base">
        No cálice, antes da consagração, está vinho com algumas gotas de água.
      </Text>
      <H5 text="602 - Depois da consagração, que há no cálice?" />
      <Text className="text-base">
        Depois da consagração, há no cálice o verdadeiro Sangue de Nosso Senhor
        Jesus Cristo, debaixo das espécies de vinho.
      </Text>
      <H5 text="603 - Quando se faz a mudança do pão no Corpo, e do vinho no Sangue de Jesus Cristo?" />
      <Text className="text-base">
        A conversão do pão no Corpo, e do vinho no Sangue de Jesus Cristo,
        faz-se precisamente no ato em que o sacerdote, na santa Missa, pronuncia
        as palavras da consagração.
      </Text>
      <H5 text="604 - Que é a consagração?" />
      <Text className="text-base">
        A consagração é a renovação, por meio do sacerdote, do milagre operado
        por Jesus Cristo na última Ceia, quando mudou o pão e o vinho no seu
        Corpo e no seu Sangue adorável, por estas palavras: Isto é o meu Corpo;
        este é o meu Sangue.
      </Text>
      <H5 text="605 - Como é chamada pela Igreja a miraculosa conversão do pão e do vinho no Corpo e no Sangue de Jesus Cristo?" />
      <Text className="text-base">
        A miraculosa conversão, que todos os dias se opera sobre os nossos
        altares. é chamada pela Igreja transubstanciação.
      </Text>
      <H5 text="606 - Quem deu tanta virtude às palavras da consagração?" />
      <Text className="text-base">
        Foi o mesmo Jesus Cristo Nosso Senhor, Deus onipotente, que deu tanta
        virtude às palavras da consagração.
      </Text>
      <H5 text="607 - Depois da consagração não fica ainda alguma coisa do pão e do vinho?" />
      <Text className="text-base">
        Depois da consagração ficam só as espécies do pão e do vinho.
      </Text>
      <H5 text="608 - Que são as espécies do pão e do vinho?" />
      <Text className="text-base">
        Dizem-se espécies a quantidade e as qualidades sensíveis do pão e do
        vinho, como a figura, a cor, o sabor.
      </Text>
      <H5 text="609 - De que maneira podem ficar as espécies do pão e do vinho sem a sua substância?" />
      <Text className="text-base">
        As espécies do pão e do vinho ficam maravilhosamente sem a sua
        substância por virtude de Deus Onipotente.
      </Text>
      <H5 text="610 - Debaixo das espécies de pão está só o Corpo de Jesus Cristo, e debaixo das espécies de vinho está só o seu Sangue?" />
      <Text className="text-base">
        Tanto debaixo das espécies de pão, corno debaixo das espécies de vinho,
        está Jesus Cristo vivo e todo inteiro com seu Corpo, Sangue. Alma e
        Divindade.
      </Text>
      <H5 text="611 - Podereis dizer-me por que tanto na hóstia como no cálice está Jesus Cristo todo inteiro?" />
      <Text className="text-base">
        Tanto na hóstia como no cálice está Jesus Cristo todo inteiro, porque
        Ele está na Eucaristia vivo e imortal como no céu; por isso onde está o
        seu Corpo, está também o seu Sangue, sua Alma e sua Divindade; e onde
        está seu Sangue está também seu Corpo, sua Alma e sua Divindade, pois
        tudo isto é inseparável em Jesus Cristo.
      </Text>
      <H5 text="612 - Quando Jesus está na hóstia, deixa de estar no Céu?" />
      <Text className="text-base">
        Quando Jesus está na hóstia, não deixa de estar no Céu, mas encontra-se
        ao mesmo tempo no Céu e no Santíssimo Sacramento.
      </Text>
      <H5 text="613 - Jesus Cristo está presente em todas as hóstias consagradas do mundo?" />
      <Text className="text-base">
        Sim, Jesus está presente em todas as hóstias consagradas.
      </Text>
      <H5 text="614 - Como é possível que Jesus Cristo esteja em todas as hóstias consagradas?" />
      <Text className="text-base">
        Jesus Cristo está em todas as hóstias consagradas, por efeito da
        onipotência de Deus, a quem nada é impossível.
      </Text>
      <H5 text="615 - Quando se parte a hóstia, parte-se também o Corpo de Jesus Cristo?" />
      <Text className="text-base">
        Quando se parte a hóstia, não se parte o Corpo de Jesus Cristo, mas
        partem-se somente as espécies do pão.
      </Text>
      <H5 text="616 - Em que parte da hóstia fica o Corpo de Jesus Cristo?" />
      <Text className="text-base">
        O Corpo de Jesus Cristo fica inteiro em todas e em cada uma das partes
        em que a hóstia foi dividida.
      </Text>
      <H5 text="617 - Está Jesus Cristo tanto numa hóstia grande como na partícula de uma hóstia?" />
      <Text className="text-base">
        Tanto numa hóstia grande, como na partícula de uma hóstia, está sempre o
        mesmo Jesus Cristo.
      </Text>
      <H5 text="618 - Por que motivo se conserva nas igrejas a Santíssima Eucaristia?" />
      <Text className="text-base">
        Conserva-se nas igrejas a Santíssima Eucaristia, a fim de ser adorada
        pelos fiéis, e levada aos enfermos, quando for necessário.
      </Text>
      <H5 text="619 - Deve-se adorar a Eucaristia?" />
      <Text className="text-base">
        A Eucaristia deve ser adorada por todos, porque Ela contém verdadeira,
        real e substancialmente o mesmo Jesus Cristo Nosso Senhor.
      </Text>
      <H4 text="2º - Da instituição e dos efeitos do Sacramento da Eucaristia" />
      <H5 text="620 - Quando instituiu Jesus Cristo o Sacramento da Eucaristia?" />
      <Text className="text-base">
        Jesus Cristo instituiu o Sacramento da Eucaristia na última ceia que
        celebrou com seus discípulos, na noite que precedeu sua Paixão.
      </Text>
      <H5 text="621 - Por que instituiu Jesus Cristo a Santíssima Eucaristia?" />
      <Text className="text-base">
        Jesus Cristo instituiu a Santíssima Eucaristia, por três razões
        principais:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - para ser o sacrifício da nova lei;
        </Text>
        <Text className="li text-justify">
          2º - para ser alimento da nossa alma;
        </Text>
        <Text className="li text-justify">
          3º - para ser um memorial perpétuo da sua Paixão e Morte, e um penhor
          precioso do seu amor para conosco e da vida eterna.
        </Text>
      </View>
      <H5 text="622 - Por que Jesus Cristo instituiu este Sacramento debaixo das espécies de pão e de vinho?" />
      <Text className="text-base">
        Jesus Cristo instituiu este Sacramento debaixo das espécies de pão e de
        vinho, porque a Eucaristia devia ser nosso alimento espiritual, e era
        por isso conveniente que nos fosse dada em forma de comida e de bebida.
      </Text>
      <H5 text="623 - Que efeitos produz em nós a Santíssima Eucaristia?" />
      <Text className="text-base">
        Os principais efeitos que a Santíssima Eucaristia produz em quem a
        recebe dignamente são estes:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - conserva e aumenta a vida da alma, que é a graça, como o alimento
          material sustenta e aumenta a vida do corpo;
        </Text>
        <Text className="li text-justify">
          2º - perdoa os pecados veniais e preserva dos mortais; produz
          consolação espiritual.
        </Text>
      </View>
      <H5 text="624 - Não produz em nós a Santíssima Eucaristia outros efeitos?" />
      <Text className="text-base">
        Sim. A Santíssima Eucaristia produz em nós outros três efeitos, a saber:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - enfraquece as nossas paixões, e em especial amortece em nós o
          fogo da concupiscência;
        </Text>
        <Text className="li text-justify">
          2º - aumenta em nós o fervor e ajuda-nos a proceder em conformidade
          com os desejos de Jesus Cristo;
        </Text>
        <Text className="li text-justify">
          3º - dá-nos um penhor da glória futura e da ressurreição do nosso
          corpo.
        </Text>
      </View>
      <H4 text="3º - Das disposições necessárias para bem comungar" />
      <H5 text="625 - Produz o Sacramento da Eucaristia sempre em nós os seus maravilhosos efeitos?" />
      <Text className="text-base">
        O Sacramento da Eucaristia produz em nós os seus maravilhosos efeitos,
        quando o recebemos com as devidas disposições.
      </Text>
      <H5 text="626 - Quantas coisas são necessárias para fazer uma comunhão bem feita?" />
      <Text className="text-base">
        Para fazer uma comunhão bem feita, são necessárias três coisas:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - estar em estado de graça;</Text>
        <Text className="li text-justify">
          2º - estar em jejum desde uma hora antes da comunhão;
        </Text>
        <Text className="li text-justify">
          3º - saber o que se vai receber e aproximar-se da sagrada Comunhão com
          devoção.
        </Text>
      </View>
      <H5 text="627 - Que quer dizer: estar em estado de graça?" />
      <Text className="text-base">
        Estar em estado de graça quer dizer: ter a consciência limpa de todo o
        pecado mortal.
      </Text>
      <H5 text="628 - Que deve fazer antes de comungar quem sabe que está em pecado mortal?" />
      <Text className="text-base">
        Quem sabe que está em pecado mortal, deve fazer uma boa confissão antes
        de comungar; porque para quem está em pecado mortal, não basta o ato de
        contrição perfeita, sem a confissão, para fazer uma comunhão bem feita,
      </Text>
      <H5 text="629 - Por que não basta o ato de contrição perfeita, a quem sabe que está em pecado mortal, para poder comungar?" />
      <Text className="text-base">
        Porque a Igreja ordenou, em sinal de respeito a este Sacramento, que
        quem é culpado de pecado mortal, não ouse receber a Comunhão, sem
        primeiro se confessar.
      </Text>
      <H5 text="630 - Quem comungasse em pecado mortal, receberia a Jesus Cristo?" />
      <Text className="text-base">
        Quem comungasse em pecado mortal, receberia a Jesus Cristo, mas não a
        sua graça; pelo contrário, cometeria sacrilégio e incorreria na sentença
        de condenação.
      </Text>
      <H5 text="631 - Em que consiste o jejum eucarístico?" />
      <Text className="text-base">
        O jejum eucarístico consiste em abster-se de qualquer espécie de comida
        ou bebida, exceto a água natural, que, na atual disciplina eucarística,
        não quebra o jejum.
      </Text>
      <H5 text="632 - Pode comungar quem engoliu restos de comida presos aos dentes?" />
      <Text className="text-base">
        Quem engoliu restos de comida presos aos dentes, pode comungar, porque
        já não são tomados como alimentos ou perderam tal condição.
      </Text>
      <H5 text="633 - Quem não está em jejum, pode comungar alguma vez?" />
      <Text className="text-base">
        Comungar sem estar em jejum é permitido aos doentes que estão em perigo
        de morte, e aos que obti prolongada. A comunhão feita pelos doentes em
        perigo de morte chama-se Viático, porque os sustenta na viagem que eles
        fazem desta vida à eternidade.
      </Text>
      <H5 text="634 - Que querem dizer as palavras: saber o que se vai receber?" />
      <Text className="text-base">
        Saber o que se vai receber quer dizer: conhecer o que ensina com
        respeito a este Sacramento a Doutrina Cristã e acreditá-lo firmemente.
      </Text>
      <H5 text="635 - Que quer dizer: comungar com devoção?" />
      <Text className="text-base">
        Comungar com devoção quer dizer: aproximar-se da sagrada Comunhão com
        humildade e modéstia, tanto na própria pessoa como no vestir, e fazer a
        preparação antes e a ação de graças depois da Comunhão.
      </Text>
      <H5 text="636 - Em que consiste a preparação antes da Comunhão?" />
      <Text className="text-base">
        A preparação antes da Comunhão consiste em nos entretermos algum tempo a
        considerar quem é Aquele que vamos receber e quem somos nós; e em fazer
        atos de fé, de esperança, de caridade, de contrição, de adoração, de
        humildade e de desejo de receber a Jesus Cristo.
      </Text>
      <H5 text="637 - Em que consiste a ação de graças depois da Comunhão?" />
      <Text className="text-base">
        A ação de graças depois da Comunhão consiste em nos conservarmos
        recolhidos a honrar a presença do Senhor dentro de nós mesmos, renovando
        os atos de fé, de esperança, de caridade, de adoração, de agradecimento,
        de oferecimento e de súplica, pedindo sobretudo aquelas graças que são
        mais necessárias para nós e para aqueles por quem somos obrigados a
        orar.
      </Text>
      <H5 text="638 - Que se deve fazer no dia da Comunhão?" />
      <Text className="text-base">
        No dia da Comunhão deve-se manter, o mais possível, o recolhimento,
        ocupar-se em obras de piedade, bem como cumprir com grande esmero os
        deveres de estado.
      </Text>
      <H5 text="639 - Depois da sagrada Comunhão, quanto tempo permanece Jesus Cristo em nós?" />
      <Text className="text-base">
        Depois da sagrada Comunhão, Jesus Cristo permanece em nós com a sua
        graça enquanto se não peca mortalmente; e com a sua presença real
        permanece em nós enquanto se não consomem as espécies sacramentais.
      </Text>
      <H4 text="4º - Da maneira de comungar" />
      <H5 text="640 - Como devemos apresentar-nos no ato de receber a sagrada Comunhão?" />
      <Text className="text-base">
        No ato de receber a sagrada Comunhão devemos estar de joelhos, com a
        cabeça medianamente levantada, com os olhos modestos e voltados para a
        sagrada Hóstia, com a boca suficientemente aberta e com a língua um
        pouco estendida sobre o lábio inferior. Senhoras e meninas devem estar
        com a cabeça coberta.
      </Text>
      <H5 text="641 - Como se deve segurar a toalha ou a patena da Comunhão?" />
      <Text className="text-base">
        A toalha ou a patena da Comunhão deve-se segurar de maneira que recolha
        a sagrada Hóstia, caso ela viesse a cair.
      </Text>
      <H5 text="642 - Quando se deve engolir a sagrada Hóstia?" />
      <Text className="text-base">
        Devemos procurar engolir a sagrada Hóstia o mais depressa possível, e
        convém abster-nos de cuspir algum tempo.
      </Text>
      <H5 text="643 - Se a sagrada Hóstia se pegar ao céu da boca, que se deve fazer?" />
      <Text className="text-base">
        Se a sagrada Hóstia se pegar ao céu da boca, é preciso despegá-la com a
        língua, nunca porém com os dedos.
      </Text>
      <H4 text="5º - Do preceito da comunhão" />
      <H5 text="644 - Quando há obrigação de comungar?" />
      <Text className="text-base">
        Há obrigação de comungar todos os anos pelei Páscoa, na própria
        paróquia, e além disso em perigo de morte.
      </Text>
      <H5 text="645 - Em que idade começa a obrigar o preceito da Comunhão pascal?" />
      <Text className="text-base">
        O preceito da Comunhão pascal começa a obrigar na idade em que a criança
        é capaz de recebê-la com as devidas disposições.
      </Text>
      <H5 text="646 - Pecam aqueles que têm idade capaz para serem admitidos à Comunhão e não comungam?" />
      <Text className="text-base">
        Aqueles que, tendo a idade capaz para serem admitidos à Comunhão, não
        comungam, ou porque não querem, ou porque não estão instruídos por sua
        culpa, pecam sem dúvida. Pecam outrossim os seus pais, ou quem lhes faz
        as vezes, se o adiamento da Comunhão se dá por sua culpa, e hão de dar
        por isso severas contas a Deus.
      </Text>
      <H5 text="647 - É coisa boa e útil comungar frequentemente?" />
      <Text className="text-base">
        É coisa ótima comungar frequentemente e até todos os dias, contanto que
        se faça com as devidas disposições.
      </Text>
      <H5 text="648 - Qual a frequência com que se deve comungar?" />
      <Text className="text-base">
        Pode-se comungar tão frequentemente quanto o permita o conselho de um
        confessor piedoso e douto.
      </Text>
      <Text className="h2">
        V - <Text className="em">Do Santo Sacrifício da Missa</Text>
      </Text>
      <H4 text="1º - Da essência, da instituição e dos fins do Santo Sacrifício da Missa" />
      <H5 text="649 - Deve considerar-se a Eucaristia só como Sacramento?" />
      <Text className="text-base">
        A Eucaristia não é somente um Sacramento; é também o sacrifício
        permanente da Nova Lei, que Jesus Cristo deixou à Igreja, para ser
        oferecido a Deus pelas mãos dos seus sacerdotes.
      </Text>
      <H5 text="650 - Em que consiste em geral o sacrifício?" />
      <Text className="text-base">
        O sacrifício, em geral, consiste em oferecer a Deus uma coisa sensível,
        e destruí-la de alguma maneira, para reconhecer o supremo domínio que
        Ele tem sobre nós e sobre todas as coisas.
      </Text>
      <H5 text="651 - Como se chama este sacrifício da Nova Lei?" />
      <Text className="text-base">
        Este sacrifício da Nova Lei chama-se a santa Missa.
      </Text>
      <H5 text="652 - Que é então a santa Missa?" />
      <Text className="text-base">
        A santa Missa é o sacrifício do Corpo e do Sangue de Jesus Cristo,
        oferecido sobre os nossos altares, debaixo das espécies de pão e de
        vinho, em memória do sacrifício da Cruz.
      </Text>
      <H5 text="653 - É o Sacrifício da Missa o mesmo que o da Cruz?" />
      <Text className="text-base">
        O Sacrifício da Missa é substancialmente o mesmo que o da Cruz, porque o
        mesmo Jesus Cristo, que se ofereceu sobre a Cruz, é que se oferece pelas
        mãos dos sacerdotes seus ministros, sobre os nossos altares, mas quanto
        ao modo por que é oferecido, o sacrifício da Missa difere do sacrifício
        da Cruz, conservando todavia a relação mais íntima e essencial com ele.
      </Text>
      <H5 text="654 - Que diferença, pois, e que relação há entre o Sacrifício da Missa e o da Cruz?" />
      <Text className="text-base">
        Entre o Sacrifício da Missa e o sacrifício da Cruz há esta diferença e
        esta relação: que Jesus Cristo sobre se ofereceu derramando o seu sangue
        e merecendo para nós; ao passo que sobre os altares Ele se sacrifica sem
        derramamento de sangue, e nos aplica os frutos da sua Paixão e Morte.
      </Text>
      <H5 text="655 - Que outra relação tem o Sacrifício da Missa com o da Cruz?" />
      <Text className="text-base">
        Outra relação do Sacrifício da Missa com o da Cruz é que o Sacrifício da
        Missa representa de modo sensível o derramamento do Sangue de Jesus
        Cristo na Cruz; porque em virtude das palavras da consagração só o Corpo
        de nosso Salvador se torna presente debaixo das espécies de pão, e
        debaixo das espécies de vinho, só o seu Sangue; entretanto, pela
        concomitância natural e pela união hipostática, está presente, debaixo
        de cada uma das espécies, Jesus Cristo todo inteiro, vivo e verdadeiro.
      </Text>
      <H5 text="656 - Não é porventura o Sacrifício da Cruz o único sacrifício da Nova Lei?" />
      <Text className="text-base">
        O Sacrifício da Cruz é o único sacrifício da Nova Lei, porquanto por ele
        Nosso Senhor aplacou a Justiça Divina, adquiriu todos os merecimentos
        necessários para nos salvar, e assim consumou da sua parte a nossa
        redenção. São estes merecimentos que Ele nos aplica pelos meios que
        instituiu na sua Igreja, entre os quais está o Santo Sacrifício da
        Missa.
      </Text>
      <H5 text="657 - Para que fins se oferece o Santo Sacrifício da Missa?" />
      <Text className="text-base">
        Oferece-se a Deus o Santo Sacrifício da Missa para quatro fins:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - para honrá-Lo como convém, e sob este ponto de vista o sacrifício
          é latrêutico;
        </Text>
        <Text className="li text-justify">
          2º - para Lhe dar graças pelos seus benefícios, e sob este ponto de
          vista o sacrifício é eucarístico;
        </Text>
        <Text className="li text-justify">
          3º - para aplacá-Lo, dar-Lhe a devida satisfação pelos nossos pecados,
          para sufragar as almas do Purgatório, e sob este ponto de vista o
          sacrifício é propiciatório;
        </Text>
        <Text className="li text-justify">
          4º - para alcançar todas as graças que nos são necessárias, e sob este
          ponto de vista o sacrifício é impetratório.
        </Text>
      </View>
      <H5 text="658 - Quem oferece a Deus o Santo Sacrifício da Missa?" />
      <Text className="text-base">
        O primeiro e principal oferente do Santo Sacrifício da Missa é Jesus
        Cristo, e o sacerdote é o ministro que em nome de Jesus Cristo oferece
        este sacrifício ao Eterno Padre.
      </Text>
      <H5 text="659 - Quem instituiu o Santo Sacrifício da Missa?" />
      <Text className="text-base">
        Foi o próprio Jesus Cristo que instituiu o Santo Sacrifício da Missa,
        quando instituiu o Sacramento da Eucaristia, e disse que fosse ele feito
        em memória da sua Paixão.
      </Text>
      <H5 text="660 - A quem se oferece o Santo Sacrifício da Missa?" />
      <Text className="text-base">
        O Santo Sacrifício da Missa oferece-se só a Deus.
      </Text>
      <H5 text="661 - Se a santa Missa se oferece só a Deus, por que se celebram tantas Missas em honra da Santíssima Virgem e dos Santos?" />
      <Text className="text-base">
        A missa celebrada em honra da Santíssima Virgem e dos Santos é sempre um
        sacrifício oferecido só a Deus; diz-se, porém, celebrada em honra da
        Santíssima Virgem e dos Santos, para louvar a Deus neles pelos dons que
        lhes concedeu, e para alcançar, pela intercessão deles, em maior
        abundância, as graças de que necessitamos.
      </Text>
      <H5 text="662 - Quem participa dos frutos da Missa?" />
      <Text className="text-base">
        Toda a Igreja participa dos frutos da Missa, mas particularmente:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - o sacerdote e os que assistem à Missa, os quais se consideram
          unidos ao sacerdote;
        </Text>
        <Text className="li text-justify">
          2º - aqueles por quem se aplica a Missa, e podem ser tanto vivos como
          defuntos.
        </Text>
      </View>
      <H4 text="2º - Do modo de assistir à Missa" />
      <H5 text="663 - Quantas coisas são necessárias para ouvir bem e com fruto a santa Missa?" />
      <Text className="text-base">
        Para ouvir bem e com fruto a santa Missa são necessárias duas coisas:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - modéstia exterior,</Text>
        <Text className="li text-justify">2º - devoção interior.</Text>
      </View>
      <H5 text="664 - Em que consiste a modéstia exterior?" />
      <Text className="text-base">
        A modéstia exterior consiste particularmente em estar modestamente
        vestido, em observar o silêncio e o recolhimento, e em estar, quanto
        possível, de joelhos, excetuando o tempo dos dois evangelhos, que se
        ouvem estando de pé.
      </Text>
      <H5 text="665 - Ao ouvir a santa Missa qual é o melhor modo de praticar a devoção interior?" />
      <Text className="text-base">
        O melhor modo de praticar a devoção interior ao ouvir a santa Missa é o
        seguinte:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - Unir-se, desde o começo, a própria intenção à do sacerdote,
          oferecendo a Deus o Santo Sacrifício para os fins por que foi
          instituído;
        </Text>
        <Text className="li text-justify">
          2º - acompanhar o sacerdote em cada uma das orações e ações do
          Sacrifício;
        </Text>
        <Text className="li text-justify">
          3º - meditar a Paixão e morte de Jesus Cristo e detestar, de todo o
          coração, os pecados que Lhe deram causa;
        </Text>
        <Text className="li text-justify">
          4º - fazer a comunhão sacramental, ou ao menos a espiritual, ao tempo
          em que o sacerdote comunga.
        </Text>
      </View>
      <H5 text="666 - Que é a Comunhão espiritual?" />
      <Text className="text-base">
        A Comunhão espiritual é um grande desejo de se unir sacramentalmente a
        Jesus Cristo, dizendo por exemplo: Meu Senhor Jesus Cristo, eu desejo de
        todo o meu coração unir-me a Vós agora e por toda a eternidade ; e
        fazendo os mesmos atos que se fazem antes e depois da Comunhão
        sacramental.
      </Text>
      <H5 text="667 - Impede ouvir a Missa com fruto a recitação do Rosário ou de outras orações durante o Santo Sacrifício?" />
      <Text className="text-base">
        A recitação destas orações não impede ouvir com fruto a Missa, desde que
        haja um esforço possível de seguir as cerimônias do Santo Sacrifício.
      </Text>
      <H5 text="668 - É coisa boa também rezar pelos outros, quando se assiste à Santa Missa?" />
      <Text className="text-base">
        É coisa boa rezar também pelos outros, quando se assiste à santa Missa;
        e até o tempo da santa Missa é o mais oportuno para rezar pelos vivos e
        pelos mortos.
      </Text>
      <H5 text="669 - Terminada a Missa, que se deve fazer?" />
      <Text className="text-base">
        Terminada a Missa, devemos dar graças a Deus por nos ter concedido a
        graça de assistir a este grande sacrifício e pedir-Lhe perdão das faltas
        cometidas enquanto a assistíamos.
      </Text>
      <Text className="h2">
        VI - <Text className="em">Da Penitência</Text>
      </Text>
      <H4 text="1º - Da Penitência em geral" />
      <H5 text="670 - Que é o Sacramento da Penitência?" />
      <Text className="text-base">
        A Penitência, chamada também Confissão, é o Sacramento instituído por
        Jesus Cristo para perdoar os pecados cometidos depois do Batismo.
      </Text>
      <H5 text="671 - Por que se dá a este Sacramento o nome de Penitência?" />
      <Text className="text-base">
        Dá-se a este Sacramento o nome de Penitência, porque, para obter o
        perdão dos pecados, é necessário detestá-los com arrependimento e porque
        quem cometeu uma falta deve sujeitar-se à pena que o Sacerdote impõe.
      </Text>
      <H5 text="672 - Por que este Sacramento se chama também Confissão?" />
      <Text className="text-base">
        Chama-se este Sacramento também Confissão, porque, para alcançar o
        perdão dos pecados, não basta i detestá-los, mas é necessário acusar-se
        deles ao Sacerdote, isto é, confessá-los.
      </Text>
      <H5 text="673 - Quando Jesus Cristo instituiu o Sacramento da Penitência?" />
      <Text className="text-base">
        Jesus Cristo instituiu o Sacramento da Penitência no dia da sua
        Ressurreição, quando, depois de entrar no cenáculo, deu solenemente aos
        seus Apóstolos o poder de perdoar os pecados.
      </Text>
      <H5 text="674 - Como deu Jesus Cristo aos seus Apóstolos o poder de perdoar os pecados?" />
      <Text className="text-base">
        Jesus Cristo deu aos seus Apóstolos o poder de perdoar os pecados,
        soprando sobre eles, e dizendo: Recebei o Espírito Santo: àqueles a quem
        perdoardes os pecados, ser-lhes-ão perdoados, e àqueles a quem os
        retiverdes ser-lhes-ão retidos.
      </Text>
      <H5 text="675 - Qual é a matéria do Sacramento da Penitência?" />
      <Text className="text-base">
        Distingue-se a matéria do Sacramento da Penitência em remota e próxima.
        A remota é constituída pelos pecados cometidos pelo penitente depois do
        Batismo, e a matéria próxima são os atos do próprio penitente, isto é, a
        contrição, a acusação e a satisfação.
      </Text>
      <H5 text="676 - Qual é a forma do Sacramento da Penitência?" />
      <Text className="text-base">
        A forma do Sacramento da Penitência é esta: Eu te absolvo dos teus
        pecados.
      </Text>
      <H5 text="677 - Quem é o ministro do Sacramento da Penitência?" />
      <Text className="text-base">
        O ministro do Sacramento da Penitência é o Sacerdote aprovado pelo Bispo
        para ouvir confissões.
      </Text>
      <H5 text="678 - Por que o Sacerdote deve ser aprovado pelo Bispo?" />
      <Text className="text-base">
        O Sacerdote deve ser aprovado pelo Bispo para ouvir confissões, porque,
        para administrar validamente este Sacramento, não basta o poder da
        Ordem, mas é necessário também o poder de jurisdição, isto é, a
        faculdade de julgar, que deve ser dada pelo Bispo.
      </Text>
      <H5 text="679 - Quantas são as partes do Sacramento da Penitência?" />
      <Text className="text-base">
        As partes do Sacramento da Penitência são: a contrição, a confissão e a
        satisfação da parte do pecador, a absolvição da parte do sacerdote.
      </Text>
      <H5 text="680 - Que é a contrição ou a dor dos pecados?" />
      <Text className="text-base">
        A contrição ou a dor dos pecados é um desgosto da alma, pelo qual se
        detestam os pecados cometidos, e se propõe não os tornar a cometer no
        futuro.
      </Text>
      <H5 text="681 - Que quer dizer esta palavra contrição?" />
      <Text className="text-base">
        A palavra contrição quer dizer fratura ou despedaçamento, como quando
        uma pedra é esmagada e reduzida a pó.
      </Text>
      <H5 text="682 - Por que se dá o nome de contrição à dor dos pecados?" />
      <Text className="text-base">
        Dá-se o nome de contrição à dor dos pecados, para significar que o
        coração duro do pecador em certo modo se despedaça pela dor de ter
        ofendido a Deus.
      </Text>
      <H5 text="683 - Em que consiste a confissão dos pecados?" />
      <Text className="text-base">
        A confissão consiste na acusação distinta dos nossos pecados ao
        confessor, para dele recebermos a absolvição e a penitência.
      </Text>
      <H5 text="684 - Por que é que a confissão se chama acusação?" />
      <Text className="text-base">
        Chama-se a confissão acusação, porque não deve ser uma narração
        indiferente, mas sim uma verdadeira e dolorosa manifestação dos próprios
        pecados.
      </Text>
      <H5 text="685 - Que é a satisfação ou penitência?" />
      <Text className="text-base">
        A satisfação ou penitência é a oração ou outra boa obra, que o confessor
        impõe ao pecador em expiação dos seus pecados.
      </Text>
      <H5 text="686 - Que é a absolvição?" />
      <Text className="text-base">
        A absolvição é a sentença que o Sacerdote pronuncia em nome de Jesus
        Cristo, para perdoar os pecados ao pecador.
      </Text>
      <H5 text="687 - Das partes do Sacramento da Penitência, qual é a mais necessária?" />
      <Text className="text-base">
        Das partes do Sacramento da Penitência, a mais necessária é a contrição,
        porque sem ela nunca se pode obter o perdão dos pecados, e com ela só,
        quando é perfeita, pode obter-se o perdão, contanto que esteja unida com
        o desejo, ao menos implícito, de confessar-se.
      </Text>
      <H4 text="2º - Dos efeitos e da necessidade do Sacramento da Penitência e das disposições para bem recebê-lo" />
      <H5 text="688 - Quais são os efeitos do Sacramento da Penitência?" />
      <Text className="text-base">
        O Sacramento da Penitência confere a graça santificante, com a qual são
        perdoados os pecados mortais e também os veniais que se confessaram e de
        que haja arrependimento; comuta a pena eterna em temporal, da qual
        também é perdoada uma parte maior ou menor, conforme as disposições do
        penitente; faz reviver o mereci. mento das boas obras feitas antes de se
        cometer o pecado mortal; dá à alma auxílios oportunos para não recair no
        pecado e restitui a paz à consciência.
      </Text>
      <H5 text="689 - É o Sacramento da Penitência necessário a todos para se salvarem?" />
      <Text className="text-base">
        O Sacramento da Penitência é necessário, para se salvarem, a todos
        aqueles que, depois do Batismo, cometeram algum pecado mortal.
      </Text>
      <H5 text="690 - É bom confessar-se com frequência?" />
      <Text className="text-base">
        Confessar-se com frequência é coisa ótima, porque o Sacramento da
        Penitência, além de apagar os pecados, dá as graças necessárias para
        evitá-los no futuro.
      </Text>
      <H5 text="691 - Tem o Sacramento da Penitência virtude de per. doar todos os pecados, por muitos e grandes que sejam?" />
      <Text className="text-base">
        Sim, o Sacramento da Penitência tem virtude de perdoar todos os pecados,
        por muitos e grandes que sejam, contanto que se receba com as devidas
        disposições.
      </Text>
      <H5 text="692 - Quantas coisas são necessárias para fazer uma confissão bem feita?" />
      <Text className="text-base">
        Para fazer uma boa confissão, são necessárias cinco coisas:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - exame de consciência;</Text>
        <Text className="li text-justify">
          2º - dor de ter ofendido a Deus;
        </Text>
        <Text className="li text-justify">
          3º - propósito de nunca mais pecar;
        </Text>
        <Text className="li text-justify">
          4º - acusação dos próprios pecados;
        </Text>
        <Text className="li text-justify">5º - satisfação ou penitência.</Text>
      </View>
      <H5 text="693 - Que devemos fazer, antes de tudo, para bem nos confessarmos?" />
      <Text className="text-base">
        Para bem nos confessarmos devemos, antes de tudo, pedir de todo o
        coração ao Senhor que nos dê luz para conhecer todos os nossos pecados e
        força para os detestar.
      </Text>
      <H4 text="3º - Do exame de consciência" />
      <H5 text="694 - Que é o exame de consciência?" />
      <Text className="text-base">
        O exame de consciência é uma diligente investigação dos pecados que se
        cometeram, desde a última confissão bem feita.
      </Text>
      <H5 text="695 - Como se faz o exame de consciência?" />
      <Text className="text-base">
        Faz-se o exame de consciência trazendo diligentemente à memória, na
        presença de Deus, todos os pecados ainda não confessados, cometidos por
        pensamentos, palavras, obras e omissões contra os Mandamentos de Deus e
        da Igreja, e contra as obrigações do próprio estado.
      </Text>
      <H5 text="696 - Sobre que mais coisas devemos examinar-nos?" />
      <Text className="text-base">
        Devemos examinar-nos também sobre os maus hábitos e sobre as ocasiões de
        pecado.
      </Text>
      <H5 text="697 - No exame, devemos investigar também o número dos pecados?" />
      <Text className="text-base">
        No exame devemos investigar também o número dos pecados mortais.
      </Text>
      <H5 text="698 - Que é necessário para que um pecado seja mortal?" />
      <Text className="text-base">
        Para que um pecado seja mortal são necessárias três coisas: matéria
        grave, plena advertência e consentimento perfeito da vontade.
      </Text>
      <H5 text="699 - Quando há matéria grave?" />
      <Text className="text-base">
        Há matéria grave, quando se trata de uma coisa notavelmente contrária à
        Lei de Deus e da Igreja.
      </Text>
      <H5 text="700 - Quando há plena advertência no pecado?" />
      <Text className="text-base">
        Há plena advertência no pecado, quando se conhece perfeitamente que se
        faz um mal grave.
      </Text>
      <H5 text="701 - Quando, no pecado, há o consentimento perfeito da vontade?" />
      <Text className="text-base">
        Ha. no pecado, o consentimento perfeito da vontade, quando se quer fazer
        deliberadamente uma coisa, embora se reconheça que é culpável.
      </Text>
      <H5 text="702 - Que diligência se deve usar no exame de consciência?" />
      <Text className="text-base">
        No exame de consciência deve usar-se aquela diligência que se usaria em
        um negócio de grande importância.
      </Text>
      <H5 text="703 - Quanto tempo se deve empregar no exame de consciência?" />
      <Text className="text-base">
        Deve empregar-se no exame de consciência mais ou menos tempo, conforme a
        necessidade, isto é, conforme o número e a qualidade dos pecados que
        sobrecarregam a consciência, e conforme o tempo decorrido desde a última
        confissão bem feita.
      </Text>
      <H5 text="704 - Como se pode facilitar o exame para a confissão?" />
      <Text className="text-base">
        Facilita-se o exame para a confissão, fazendo todas as noites o exame de
        consciência sobre as ações do dia.
      </Text>
      <H4 text="4º - Da dor ou arrependimento" />
      <H5 text="705 - Que é a dor dos pecados?" />
      <Text className="text-base">
        A dor dos pecados consiste num desgosto e numa detestação sincera da
        ofensa feita a Deus.
      </Text>
      <H5 text="706 - De quantas espécies é a dor?" />
      <Text className="text-base">
        A dor é de duas espécies: perfeita ou de contrição; imperfeita ou de
        atrição.
      </Text>
      <H5 text="707 - Que é a dor perfeita ou de contrição?" />
      <Text className="text-base">
        A dor perfeita é o desgosto de ter ofendido a Deus, porque Deus é
        infinitamente bom e digno, por Si mesmo, de ser amado sobre todas as
        coisas.
      </Text>
      <H5 text="708 - Por que se chama perfeita a dor de contrição?" />
      <Text className="text-base">
        Chama-se perfeita a dor de contrição por duas razões:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - porque se refere exclusivamente à bondade de Deus, e não ao nosso
          proveito ou prejuízo;
        </Text>
        <Text className="li text-justify">
          2º - porque nos faz alcançar imediatamente o perdão dos pecados,
          ficando-nos porém a obrigação de nos confessarmos.
        </Text>
      </View>
      <H5 text="709 - Então a dor perfeita alcança-nos o perdão dos pecados independentemente da confissão?" />
      <Text className="text-base">
        A dor perfeita não nos alcança o perdão dos pecados independentemente da
        confissão, porque sempre inclui a vontade de se confessar.
      </Text>
      <H5 text="710 - Por que a dor perfeita, ou contrição, produz este efeito de nos conceder o estado de graça?" />
      <Text className="text-base">
        A dor perfeita, ou contrição, produz este efeito, porque procede da
        caridade, que não pode encontrar-se na alma juntamente com o pecado
        mortal.
      </Text>
      <H5 text="711 - Que é a dor imperfeita ou de atrição?" />
      <Text className="text-base">
        A dor imperfeita ou de atrição é aquela pela qual nos arrependemos de
        ter ofendido a Deus como nosso supremo Juiz, isto é, por temor dos
        castigos que merecemos e nos esperam nesta ou na outra vida, ou pela
        própria fealdade do pecado.
      </Text>
      <H5 text="712 - Que condições deve ter a dor para ser boa?" />
      <Text className="text-base">
        A dor, para ser boa, deve ter quatro condições: deve ser interna,
        sobrenatural, suma e universal.
      </Text>
      <H5 text="713 - Que quer dizer: a dor deve ser interna?" />
      <Text className="text-base">
        Quer dizer que deve estar no coração e na vontade, e não só nas
        palavras.
      </Text>
      <H5 text="714 - Por que a dor deve ser interna?" />
      <Text className="text-base">
        A dor deve ser interna, porque a vontade, que se afastou de Deus com o
        pecado, deve voltar para Deus, detestando o pecado cometido.
      </Text>
      <H5 text="715 - Que quer dizer: a dor deve ser sobrenatural?" />
      <Text className="text-base">
        Quer dizer que deve ser excitada em nós pela graça do Senhor, e a
        devemos conceber levados por motivos que procedem da fé.
      </Text>
      <H5 text="716 - Por que a dor deve ser sobrenatural?" />
      <Text className="text-base">
        A dor deve ser sobrenatural, porque é sobrenatural o fim a que se
        dirige, isto é, o perdão de Deus, a aquisição da graça santificante e o
        direito à glória eterna.
      </Text>
      <H5 text="717 - Explicai melhor a diferença entre a dor sobrenatural e a natural." />
      <Text className="text-base">
        Quem se arrepende por ter ofendido a Deus infinitamente bom e digno por
        Si mesmo de ser amado, por ter perdido o Paraíso e merecido o inferno,
        ou então pela malícia intrínseca do pecado, tem dor sobrenatural, porque
        estes são os motivos fornecidos pela fé. Quem, ao contrário, se
        arrependesse só pela desonra ou castigo que lhe vem dos homens, ou por
        algum prejuízo puramente temporal, teria dor natural, porque se
        arrependeria só por motivos humanos.
      </Text>
      <H5 text="718 - Por que a dor deve ser suma?" />
      <Text className="text-base">
        A dor deve ser suma, porque devemos considerar e odiar o pecado como o
        maior de todos os males, visto ser ofensa de Deus, sumo Bem.
      </Text>
      <H5 text="719 - Para ter dor dos pecados, é porventura necessário chorar, como às vezes se chora pelas desgraças desta vida?" />
      <Text className="text-base">
        Não. Não é necessário que materialmente se chore pela dor dos pecados;
        mas basta que no íntimo do coração se deplore mais o ter ofendido a
        Deus, do que qualquer outra desgraça.
      </Text>
      <H5 text="720 - Que quer dizer que a dor deve ser universal?" />
      <Text className="text-base">
        Quer dizer que se deve estender a todos os pecados mortais cometidos.
      </Text>
      <H5 text="721 - Por que a dor se deve estender a todos os pecados mortais cometidos?" />
      <Text className="text-base">
        Porque quem se não arrepende, ainda que seja de um só pecado mortal,
        continua sendo inimigo de Deus.
      </Text>
      <H5 text="722 - Que devemos fazer para ter dor dos nossos pecados?" />
      <Text className="text-base">
        Para ter dor dos nossos pecados, devemos pedi-la de todo o coração a
        Deus e excitá-la em tios com a consideração do grande mal que fizemos,
        pecando.
      </Text>
      <H5 text="723 - Como fareis para vos excitardes a detestar os pecados?" />
      <Text className="text-base">
        Para me excitar a detestar os pecados considerarei:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - o rigor da infinita justiça de Deus, e a deformidade do pecado
          que enfeiou a minha alma, e me tornou merecedor das penas eternas do
          inferno;
        </Text>
        <Text className="li text-justify">
          2º - que perdi a graça, a amizade e a qualidade de filho de Deus, e a
          herança do Paraíso;
        </Text>
        <Text className="li text-justify">
          3º - que ofendi o meu Redentor que morreu por mim, e que os meus
          pecados foram a causa da sua morte;
        </Text>
        <Text className="li text-justify">
          4º - que desprezei o meti Criador, o meu Deus; que Lhe voltei as
          costas, a Ele, meu sumo Bem, digno de ser amado sobre todas as coisas,
          e servido fielmente.
        </Text>
      </View>
      <H5 text="724 - Devemos ter grande empenho, quando nos vamos confessar, em ter verdadeira dor dos nossos pecados?" />
      <Text className="text-base">
        Sim, quando nos vamos confessar, devemos ter muito empenho em ter
        verdadeira dor dos nossos pecados, porque esta é a coisa mais importante
        de todas; e, se falta a dor, a confissão não é válida.
      </Text>
      <H5 text="725 - Quem se confessa só de pecados veniais, deve ter dor de todos?" />
      <Text className="text-base">
        Quem se confessa só de pecados veniais, para se confessar validamente,
        basta que se arrependa de algum deles; mas, para alcançar o perdão de
        todos, é necessário que se arrependa de todos os que reconhece ter
        cometido.
      </Text>
      <H5 text="726 - Quem se confessa só de pecados veniais, e não está arrependido nem sequer de um só, faz uma boa confissão?" />
      <Text className="text-base">
        Quem se confessa só de pecados veniais, e não está arrependido nem
        sequer de um só, faz uma confissão nula; a confissão além disso é
        sacrílega, se adverte que lhe falta a dor.
      </Text>
      <H5 text="727 - Que convém fazer para tornar mais segura a confissão só de pecados veniais?" />
      <Text className="text-base">
        Para tornar mais segura a confissão só de pecados veniais, é prudente
        acusar, com verdadeira dor, também algum pecado mais grave da vida
        passada, ainda que já confessado outras vezes.
      </Text>
      <H5 text="728 - É bom fazer com frequência o ato de contrição?" />
      <Text className="text-base">
        É coisa boa e muito útil fazer, com frequência, o ato de contrição,
        principalmente antes de se deitar, e quando se tem certeza ou se duvida
        de ter caído em pecado mortal, para recuperar mais depressa a graça de
        Deus; é útil, sobretudo, para alcançar mais facilmente de Deus a graça
        de fazer semelhante ato na ocasião de maior necessidade, isto é, em
        perigo de morte.
      </Text>
      <H4 text="5º - Do propósito" />
      <H5 text="729 - Em que consiste o propósito?" />
      <Text className="text-base">
        O propósito consiste em uma vontade determinada de nunca mais cometer o
        pecado, e de empregar todos os meios necessários para o evitar.
      </Text>
      <H5 text="730 - Que condições deve ter esta resolução, para ser um bom propósito?" />
      <Text className="text-base">
        Para ser um bom propósito, esta resolução deve ter principalmente três
        condições: deve ser absoluta, universal e eficaz.
      </Text>
      <H5 text="731 - Que quer dizer: o bom propósito deve ser absoluto?" />
      <Text className="text-base">
        Quer dizer que o propósito deve ser sem condição alguma de tempo, de
        lugar ou de pessoa.
      </Text>
      <H5 text="732 - Que quer dizer: o bom propósito deve ser universal?" />
      <Text className="text-base">
        O bom propósito deve ser universal, quer dizer que devemos ter a vontade
        de evitar todos os pecados mortais, tanto os que já tenhamos cometido no
        passado, como os que poderíamos cometer ainda.
      </Text>
      <H5 text="733 - Que quer dizer: o bom propósito deve ser eficaz?" />
      <Text className="text-base">
        O bom propósito deve ser eficaz, quer dizer que é necessário termos uma
        vontade decidida de perder todas as coisas antes que cometer um novo
        pecado, de fugir das ocasiões perigosas de pecar, de destruir os maus
        hábitos, e de satisfazer a todas as obrigações lícitas contraídas em
        consequência dos nossos pecados.
      </Text>
      <H5 text="734 - Que é que se entende por mau hábito?" />
      <Text className="text-base">
        Por mau hábito entende-se a disposição adquirida para cair com
        facilidade naqueles pecados aos quais nos acostumamos.
      </Text>
      <H5 text="735 - Que devemos fazer para corrigir os maus hábitos?" />
      <Text className="text-base">
        Para corrigir os maus hábitos, devemos vigiar sobre nós mesmos, fazer
        muita oração, confessar-nos com frequência, ter um bom diretor sem
        mudá-lo, e pôr em prática os conselhos e os remédios que ele nos propõe.
      </Text>
      <H5 text="736 - Que se entende por ocasiões perigosas de pecar?" />
      <Text className="text-base">
        Por ocasiões perigosas de pecar entendem-se todas aquelas circunstâncias
        de tempo, de lugar, de pessoas ou de coisas, que, pela sua própria
        natureza, ou pela nossa fragilidade, nos induzem a cometer o pecado.
      </Text>
      <H5 text="737 - Somos gravemente obrigados a evitar todas as ocasiões perigosas?" />
      <Text className="text-base">
        Somos gravemente obrigados a evitar as ocasiões perigosas que de
        ordinário nos levam a cometer o pecado mortal, e que se chamam ocasiões
        próximas de pecado.
      </Text>
      <H5 text="738 - Que deve fazer quem não pode evitar alguma ocasião de pecado?" />
      <Text className="text-base">
        Quem não pode evitar alguma ocasião de pecado diga-o ao confessor, e
        siga os conselhos dele.
      </Text>
      <H5 text="739 - Que considerações nos auxiliam a fazer o propósito?" />
      <Text className="text-base">
        Para fazer o propósito auxiliam-nos as mesmas considerações que servem
        para excitar a dor, isto é, a consideração dos motivos que temos para
        temer a justiça de Deus, e para amar a sua infinita bondade.
      </Text>
      <H4 text="6º - Da acusação dos pecados ao confessor" />
      <H5 text="740 - Depois de vos terdes disposto bem para a confissão com o exame, com a dor e com o propósito, que haveis de fazer?" />
      <Text className="text-base">
        Depois de me ter disposto bem com o exame, com a dor e com o propósito,
        irei fazer ao confessor a acusação dos meus pecados, para receber a
        absolvição.
      </Text>
      <H5 text="741 - De que pecados somos obrigados a confessar-nos?" />
      <Text className="text-base">
        Somos obrigados a confessar-nos de todos os pecados mortais; é bom,
        porém, confessar também os veniais.
      </Text>
      <H5 text="742 - Quais são as qualidades que deve ter a acusação dos pecados, ou confissão?" />
      <Text className="text-base">
        As qualidades principais que deve ter a acusação dos pecados são cinco:
        deve ser humilde, íntegra, sincera, prudente e breve.
      </Text>
      <H5 text="743 - Que querem dizer as palavras: a acusação deve ser humilde?" />
      <Text className="text-base">
        A acusação deve ser humilde, quer dizer que o penitente deve acusar-se
        diante do seu confessor sem altivez de ânimo ou de palavras, mas com
        sentimentos de um réu que reconhece a sua culpa, e comparece diante do
        juiz.
      </Text>
      <H5 text="744 - Que quer dizer: a acusação deve ser íntegra?" />
      <Text className="text-base">
        A acusação deve ser íntegra, quer dizer que se devem confessar, com as
        suas circunstâncias e no seu número, todos os pecados mortais cometidos
        desde a última confissão bem feita, e dos quais se tem consciência.
      </Text>
      <H5 text="745 - Quais são as circunstâncias que se devem dizer para que a acusação seja íntegra?" />
      <Text className="text-base">
        Para que a acusação seja íntegra, devem acusar-se as circunstâncias que
        mudam a espécie do pecado.
      </Text>
      <H5 text="746 - Quais são as circunstâncias que mudam a espécie do pecado?" />
      <Text className="text-base">
        As circunstâncias que mudam a espécie do pecado são:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - aquelas pelas quais uma ação pecaminosa de venial se torna
          mortal;
        </Text>
        <Text className="li text-justify">
          2º - aquelas pelas quais uma ação pecaminosa contém a malícia de dois
          ou mais pecados mortais.
        </Text>
      </View>
      <H5 text="747 - Dai-me um exemplo de uma circunstância que faça tornar mortal um pecado venial?" />
      <Text className="text-base">
        Quem, para se desculpar, dissesse uma mentira da qual resultasse dano
        grave para o próximo, deveria manifestar esta circunstância, que muda a
        mentira, de oficiosa em gravemente nociva.
      </Text>
      <H5 text="748 - Dai-me agora exemplo de uma circunstância pela qual uma e a mesma ação pecaminosa contém a malícia de dois ou mais pecados?" />
      <Text className="text-base">
        Quem tivesse roubado uma coisa sagrada, deveria acusar esta
        circunstância, que acrescenta ao furto a malícia do sacrilégio.
      </Text>
      <H5 text="749 - Se uma pessoa não tiver a certeza de ter come tido um pecado, deve confessá-lo?" />
      <Text className="text-base">
        Se uma pessoa não tiver a certeza de ter cometido um pecado, não é
        obrigada a confessá-lo; se porém o quiser acusar, deverá acrescentar que
        não tem a certeza de o ter cometido.
      </Text>
      <H5 text="750 - Quem não se lembra exatamente do número dos seus pecados, que deve fazer?" />
      <Text className="text-base">
        Quem não se lembra exatamente do número dos seus pecados, deve acusar o
        número aproximado.
      </Text>
      <H5 text="751 - Quem deixou de confessar por esquecimento um pecado mortal, ou uma circunstância necessária, fez uma boa confissão?" />
      <Text className="text-base">
        Quem deixou de confessar por esquecimento um pecado mortal, ou uma
        circunstância necessária, fez uma boa confissão, contanto que tenha
        empregado a devida diligência no exame de consciência.
      </Text>
      <H5 text="752 - Se um pecado mortal esquecido na confissão volta depois à lembrança, somos obrigados a acusá-lo noutra confissão?" />
      <Text className="text-base">
        Se um pecado mortal esquecido na confissão volta depois à lembrança,
        somos obrigados, sem dúvida, a acusá-lo na primeira vez que de novo nos
        confessarmos.
      </Text>
      <H5 text="753 - Quem por vergonha, ou por outro motivo culpável, cala voluntariamente na confissão algum pecado mortal, que comete?" />
      <Text className="text-base">
        Quem, por vergonha, ou por qualquer outro motivo culpável, cala
        voluntariamente algum pecado 'mortal na confissão, profana o Sacramento
        e por isso torna-se réu de gravíssimo mo sacrilégio.
      </Text>
      <H5 text="754 - Quem ocultou voluntariamente algum pecado mortal na confissão, como há de conciliar a própria consciência?" />
      <Text className="text-base">
        Quem ocultou culpavelmente algum pecado mortal na confissão, deve expor
        ao confessor o pecado ocultado, dizer em quantas confissões o ocultou, e
        repetir todas as confissões, desde a última bem feita.
      </Text>
      <H5 text="755 - Que deve considerar quem se vir tentado a calar algum pecado na confissão?" />
      <Text className="text-base">
        Quem se vir tentado a calar um pecado grave na confissão, deve
        considerar:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - que não teve vergonha de pecar na presença de Deus, que vê tudo;
        </Text>
        <Text className="li text-justify">
          2º - que é melhor manifestar os próprios pecados ao confessor em
          segredo, do que viver inquieto no pecado, ter uma morte infeliz, e ser
          por isso envergonhado no dia do Juízo universal, em face do mundo
          inteiro;
        </Text>
        <Text className="li text-justify">
          3º - que o confessor é obrigado ao sigilo sacramental, sob pecado
          gravíssimo, e com a ameaça de severíssimas penas temporais e eternas.
        </Text>
      </View>
      <H5 text="756 - Que significam estas palavras: a acusação deve ser sincera?" />
      <Text className="text-base">
        A acusação deve ser sincera, significa que é necessário declarar os
        pecados como eles são, sem os desculpar, sem os diminuir e sem os
        aumentar.
      </Text>
      <H5 text="757 - Que significam estas palavras: a confissão deve ser prudente?" />
      <Text className="text-base">
        A confissão deve ser prudente, significa que, ao confessar os pecados,
        devemos servir-nos dos termos mais modestos, e que devemos guardar-nos
        de descobrir os pecados alheios.
      </Text>
      <H5 text="758 - Que significam estas palavras: a confissão deve ser breve?" />
      <Text className="text-base">
        A confissão deve ser breve, significa que não. devemos ir falar de
        coisas inúteis ao confessor.
      </Text>
      <H5 text="759 - Mas o dever de confessar a outro homem os próprios pecados, não será muito custoso, sobretudo se são muito vergonhosos?" />
      <Text className="text-base">
        Ainda que confessar a outro homem os próprios pecados possa ser penoso,
        é necessário fazê-lo, porque é de preceito divino; e de outro modo não
        se pode obter o perdão dos pecados cometidos; além disso, a dificuldade
        de se confessar é compensada por muitas vantagens e grandes consolações.
      </Text>
      <H4 text="7º - Do modo de se confessar" />
      <H5 text="760 - Como vos apresentareis ao confessor?" />
      <Text className="text-base">
        Ponho-me de joelhos aos pés do confessor, e digo: Abençoai-me, Padre,
        porque pequei.
      </Text>
      <H5 text="761 - Que fareis enquanto o confessor vos der a bênção?" />
      <Text className="text-base">
        Inclino-me humildemente para receber a bênção, e faço o sinal da Cruz.
      </Text>
      <H5 text="762 - Depois de feito o sinal da Cruz, que direis?" />
      <Text className="text-base">
        Depois de feito o sinal da Cruz, direi: Eu me confesso a Deus
        todo-poderoso, à bem-aventurada sempre Virgem Maria, a todos os Santos,
        e a vós, Padre, porque pequei.
      </Text>
      <H5 text="763 - E depois, que direis?" />
      <Text className="text-base">
        Depois direi: Confessei-me em tal tempo; por graça de Deus recebi a
        absolvição, cumpri a penitência, e fui à Comunhão. Em seguida faz-se a
        acusação dos pecados.
      </Text>
      <H5 text="764 - Terminada a acusação dos pecados, que direis?" />
      <Text className="text-base">
        Direi: Acuso-me ainda de todos os pecados da vida passada, especialmente
        contra tal ou tal virtude, por exemplo, contra a pureza, contra o quarto
        Mandamento, etc.
      </Text>
      <H5 text="765 - Depois desta acusação, que direis ainda?" />
      <Text className="text-base">
        Direi: De todos estes pecados e de todos aqueles de que não me lembro,
        peço perdão a Deus de todo o meu coração; e a vós, Padre, peço a
        penitência e a absolvição.
      </Text>
      <H5 text="766 - Concluída assim a acusação dos pecados, que mais resta a fazer" />
      <Text className="text-base">
        Concluída a acusação dos pecados, é necessário ouvir com respeito o que
        disser o confessor; aceitar a penitência com sincera vontade de
        cumpri-la; e, enquanto ele dá a absolvição, renovar o ato de contrição.
      </Text>
      <H5 text="767 - Depois de recebida a absolvição, que há ainda a fazer?" />
      <Text className="text-base">
        Depois de recebida a absolvição, é preciso agradecer a Nosso Senhor,
        cumprir quanto antes a penitência, e pôr em prática os avisos do
        confessor.
      </Text>
      <H4 text="8º - Da absolvição" />
      <H5 text="768 - Devem os confessores dar sempre a absolvição àqueles que se confessam?" />
      <Text className="text-base">
        Os confessores devem dar a absolvição somente àqueles que julgam bem
        dispostos a recebê-la.
      </Text>
      <H5 text="769 - Podem os confessores diferir ou negar alguma vez a absolvição?" />
      <Text className="text-base">
        Os confessores não só podem, mas devem diferir ou negar a absolvição em
        certos casos, para não profanar o Sacramento.
      </Text>
      <H5 text="770 - Quais são os penitentes que se devem considerar mal dispostos, e aos quais se deve ordinariamente diferir ou negar a absolvição?" />
      <Text className="text-base">
        Os penitentes que se devem considerar mal dispostos são principalmente:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - aqueles que não sabem os mistérios principais da fé, ou não se
          importam de aprender os pontos da Doutrina Cristã, que são obrigados a
          saber, conforme o seu estado;
        </Text>
        <Text className="li text-justify">
          2º - aqueles que são gravemente negligentes em fazer o exame de
          consciência ou não dão sinais de dor e arrependimento;
        </Text>
        <Text className="li text-justify">
          3º - aqueles que não querem restituir, podendo, as coisas alheias ou a
          reputação roubada;
        </Text>
        <Text className="li text-justify">
          4º - aqueles que não perdoam de coração aos seus inimigos;
        </Text>
        <Text className="li text-justify">
          5º - aqueles que não querem empregar os meios para se corrigir dos
          seus maus hábitos;
        </Text>
        <Text className="li text-justify">
          6º - aqueles que não querem fugir das ocasiões próximas de pecado.
        </Text>
      </View>
      <H5 text="771 - Não há excessivo rigor da parte do confessor em diferir a absolvição ao penitente que ele não julga ainda bem disposto?" />
      <Text className="text-base">
        Não. Não há excesso de rigor no confessor que difere a absolvição do
        penitente, porque não o julga ainda bem disposto; há antes caridade,
        pois procede como um bom médico, que tenta todos os remédios, ainda os
        desagradáveis e penosos, para salvar a vida ao doente.
      </Text>
      <H5 text="772 - Deverá desesperar ou afastar-se inteiramente da confissão o pecador a quem se difere ou se nega a absolvição?" />
      <Text className="text-base">
        O pecador a quem se difere ou se nega a absolvição não deve desesperar
        ou afastar- se inteiramente da confissão; mas deve humilhar-se,
        reconhecer o seu estado deplorável, aproveitar os bons conselhos que o
        confessor lhe dá, e assim pôr-se quanto antes em estado de merecer a
        absolvição.
      </Text>
      <H5 text="773 - Que deve fazer o penitente quanto à escolha do confessor?" />
      <Text className="text-base">
        O verdadeiro penitente deve encomendar-se muito a Deus para escolher um
        confessor piedoso, douto e prudente, e deve depois entregar-se às suas
        mãos, e submeter-se a ele como a seu juiz e médico.
      </Text>
      <H4 text="9º - Da satisfação ou penitência" />
      <H5 text="774 - Que é a satisfação?" />
      <Text className="text-base">
        A satisfação, que também se chama penitência sacramental, é um dos atos
        do penitente, com o qual ele dá uma certa reparação à justiça divina
        pelos pecados cometidos pondo em prática aquelas obras que o confessor
        lhe impõe.
      </Text>
      <H5 text="775 - É obrigado o penitente a aceitar a penitência que o confessor lhe impõe?" />
      <Text className="text-base">
        O penitente é obrigado a aceitar a penitência que o confessor lhe impõe,
        se a pode cumprir, e, se não a pode cumprir, deve dizê-lo humildemente
        ao mesmo confessor, e pedir-lhe outra.
      </Text>
      <H5 text="776 - Quando se deve cumprir a penitência?" />
      <Text className="text-base">
        Se o confessor não marcou tempo, a penitência deve cumprir-se quanto
        antes, e deve fazer-se a diligência por cumpri-la em estado de graça.
      </Text>
      <H5 text="777 - Como se deve cumprir a penitência?" />
      <Text className="text-base">
        A penitência deve cumprir-se na sua integridade e com devoção.
      </Text>
      <H5 text="778 - Porque na confissão se impõe uma penitência?" />
      <Text className="text-base">
        Impõe-se uma penitência porque de ordinário, depois da absolvição
        sacramental que perdoa a culpa e a pena eterna, resta uma pena temporal
        a pagar neste mundo ou no Purgatório.
      </Text>
      <H5 text="779 - Por que razão quis Nosso Senhor perdoar no Sacramento do Batismo toda a pena devida aos pecados, e não no Sacramento da penitência?" />
      <Text className="text-base">
        Nosso Senhor quis perdoar no Sacramento do Batismo toda a pena devida
        aos pecados, e não no Sacramento da Penitência, porque os pecados depois
        do Batismo são muito mais graves, visto serem cometidos com maior
        conhecimento e ingratidão aos benefícios de Deus, e também para que a
        obrigação de satisfazer por eles sirva de freio para não se recair no
        pecado.
      </Text>
      <H5 text="780 - Podemos nós, com as nossas forças, dar satisfação a Deus?" />
      <Text className="text-base">
        Não; com nossas forças, não podemos dar satisfação a Deus; mas nós o
        podemos unindo-nos a Jesus Cristo que, com os merecimentos da sua Paixão
        e morte, dá valor às nossas ações.
      </Text>
      <H5 text="781 - É sempre bastante a penitência dada pelo confessor para pagar a pena que ainda resta, devida aos pecados?" />
      <Text className="text-base">
        A penitência que dá o confessor, de ordinário não é bastante para pagar
        a pena devida pelos pecados; por isso deve-se fazer a diligência por
        suprir com outras penitências voluntárias.
      </Text>
      <H5 text="782 - Quais são as obras de penitência?" />
      <Text className="text-base">
        As obras de penitência podem reduzir-se a três espécies: à oração, ao
        jejum, à esmola.
      </Text>
      <H5 text="783 - Que se entende por oração?" />
      <Text className="text-base">
        Por oração entende-se toda a espécie de exercícios de piedade.
      </Text>
      <H5 text="784 - Que se entende por jejum?" />
      <Text className="text-base">
        Por jejum entende-se toda a espécie de mortificação.
      </Text>
      <H5 text="785 - Que se entende por esmola?" />
      <Text className="text-base">
        Por esmola entende-se toda e qualquer obra de misericórdia espiritual e
        corporal.
      </Text>
      <H5 text="786 - Qual é a penitência mais meritória: a que dá o confessor, ou a que nós fazemos por nossa escolha?" />
      <Text className="text-base">
        Á penitência que nos dá o confessor é mais meritória, porque, sendo
        parte do Sacramento, recebe maior virtude dos merecimentos da Paixão de
        Jesus Cristo.
      </Text>
      <H5 text="787 - Vão logo para o Céu os que morrem depois de ter recebido a absolvição, mas antes de terem satisfeito plenamente à justiça de Deus?" />
      <Text className="text-base">
        Não; eles vão para o Purgatório, para ali satisfazerem à justiça de Deus
        e se purificarem inteiramente.
      </Text>
      <H5 text="788 - Podem as almas que estão no Purgatório ser aliviadas por nós nas suas penas?" />
      <Text className="text-base">
        Sim, as almas que estão no Purgatório podem ser aliviadas com orações,
        com esmolas, com todas as demais obras boas e com as indulgências, mas
        sobretudo com o Santo Sacrifício da Missa.
      </Text>
      <H5 text="789 - Além da penitência, que mais deve fazer o penitente depois da confissão?" />
      <Text className="text-base">
        O penitente, depois da confissão, além de cumprir a penitência, se
        danificou injustamente o próximo nos bens ou na honra, ou se lhe deu
        escândalo, deve, o mais breve e na medida em que for possível,
        restituir-lhe os bens, reparar-lhe a honra e remediar o escândalo.
      </Text>
      <H5 text="790 - Como se pode reparar o escândalo que se causou?" />
      <Text className="text-base">
        Pode-se reparar o escândalo que se causou fazendo cessar a ocasião dele,
        e edificando com as palavras e com o bom exemplo aqueles que se tenha
        escandalizado.
      </Text>
      <H5 text="791 - De que maneira devemos satisfazer o próximo quando o tivermos ofendido?" />
      <Text className="text-base">
        Devemos satisfazer o próximo quando o tivermos ofendido, pedindo-lhe
        perdão ou dando-lhe alguma outra reparação conveniente.
      </Text>
      <H5 text="792 - Que frutos produz em nós uma boa confissão?" />
      <Text className="text-base">Uma boa confissão:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - perdoa-nos os pecados cometidos, e dá-nos a graça de Deus;
        </Text>
        <Text className="li text-justify">
          2º - restitui-nos a paz e o sossego de consciência;
        </Text>
        <Text className="li text-justify">
          3º - reabre-nos as portas do Paraíso, e comuta a pena eterna do
          inferno em pena temporal;
        </Text>
        <Text className="li text-justify">
          4º - preserva-nos das recaídas, e torna-nos capazes de ganhar
          indulgências.
        </Text>
      </View>
      <H4 text="10º - Das indulgências" />
      <H5 text="793 - Que é a indulgência?" />
      <Text className="text-base">
        A indulgência é a remissão da pena temporal devida pelos pecados já
        perdoados quanto à culpa, remissão que a Igreja concede fora do
        Sacramento da Penitência.
      </Text>
      <H5 text="794 - De quem recebeu a Igreja o poder de conceder indulgências?" />
      <Text className="text-base">
        Foi de Jesus Cristo que a Igreja recebeu o poder de conceder
        indulgências.
      </Text>
      <H5 text="795 - De que maneira nos perdoa a Igreja a pena temporal por meio das indulgências?" />
      <Text className="text-base">
        A Igreja perdoa a pena temporal por meio das indulgências, aplicando-nos
        as satisfações superabundantes de Jesus Cristo, da Santíssima Virgem e
        dos Santos, as quais formam o que se chama o tesouro da Igreja.
      </Text>
      <H5 text="796 - Quem tem o poder de conceder indulgências?" />
      <Text className="text-base">
        O poder de conceder indulgências pertence ao Papa em toda a Igreja, e ao
        Bispo, na sua diocese, na medida em que lhe é concedido pelo Papa.
      </Text>
      <H5 text="797 - Quantas espécies há de indulgências?" />
      <Text className="text-base">
        Há duas espécies de indulgências: a indulgência plenária e a indulgência
        parcial.
      </Text>
      <H5 text="798 - Que é a indulgência plenária?" />
      <Text className="text-base">
        A indulgência plenária é a que perdoa toda a pena temporal devida pelos
        nossos pecados. Por isso, se alguém morresse depois de ter recebido esta
        indulgência, iria logo para o céu, inteiramente isento das penas do
        Purgatório.
      </Text>
      <H5 text="799 - Que é a indulgência parcial?" />
      <Text className="text-base">
        A indulgência parcial é a que perdoa só uma parte da pena temporal,
        devida pelos nossos pecados.
      </Text>
      <H5 text="800 - Qual é a intenção da Igreja ao conceder as indulgências?" />
      <Text className="text-base">
        A intenção da Igreja ao conceder as indulgências é auxiliar a nossa
        incapacidade de expiar neste mundo toda a pena temporal, fazendo-nos
        conseguir por meio de obras de piedade e de caridade cristã aquilo que
        nos primeiros séculos Ela obtinha com o rigor dos cânones penitenciais.
      </Text>
      <H5 text="801 - Em que apreço devemos ter as indulgências?" />
      <Text className="text-base">
        Devemos ter as indulgências em muito grande apreço, porque com elas se
        satisfaz a justiça de Deus e mais depressa e mais facilmente se alcança
        a posse do céu.
      </Text>
      <H5 text="802 - Quais são as condições requeridas para se ganharem as indulgências?" />
      <Text className="text-base">
        As condições para se ganharem as indulgências são:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - o estado de graça, pelo menos ao cumprir a última obra, e o
          desapego mesmo das culpas veniais cuja a pena se quer apagar;
        </Text>
        <Text className="li text-justify">
          2º - o cumprimento das obras que a Igreja prescreve para se ganhar a
          indulgência;
        </Text>
        <Text className="li text-justify">3º - a intenção de ganhá-las.</Text>
      </View>
      <H5 text="803 - Podem as indulgências aplicar-se também às almas do Purgatório?" />
      <Text className="text-base">
        Sim, as indulgências podem aplicar-se também às almas do Purgatório
        quando quem as concede declara que se lhes podem aplicar.
      </Text>
      <H5 text="804 - Que é o Jubileu?" />
      <Text className="text-base">
        O Jubileu, que ordinariamente se concede todos os vinte e cinco anos, é
        uma indulgência plenária, à qual estão anexos muitos privilégios e
        concessões particulares, como o poder de obter-se a absolvição de alguns
        pecados reservados e de censuras, e a comutação de alguns votos.
      </Text>
      <Text className="h2">
        VII - <Text className="em">Da Extrema-Unção</Text>
      </Text>
      <H5 text="805 - Que é o Sacramento da Extrema-Unção?" />
      <Text className="text-base">
        A Extrema-Unção é o Sacramento instituído para alívio espiritual e
        também temporal dos enfermos em perigo de vida.
      </Text>
      <H5 text="806 - Que efeitos produz o Sacramento da Extrema-Unção?" />
      <Text className="text-base">
        O Sacramento da Extrema-Unção produz os seguintes efeitos:
        <View className="list-styled">
          <Text className="li text-justify">
            1º - aumenta a graça santificante;
          </Text>
          <Text className="li text-justify">
            2º - apaga os pecados veniais e também os mortais que o enfermo
            arrependido já não possa confessar;
          </Text>
          <Text className="li text-justify">
            3º - tira a fraqueza e languidez para o bem, que fica, ainda depois
            de se ter alcançado o perdão dos pecados;
          </Text>
          <Text className="li text-justify">
            4º - dá força para suportar pacientemente o mal, para resistir às
            tentações, e para morrer santamente;
          </Text>
          <Text className="li text-justify">
            5º - ajuda a recuperar a saúde do corpo, se isso for útil à salvação
            da alma.
          </Text>
        </View>
        <H5 text="807 - Em que tempo se deve receber a Extrema-Unção?" />
        <Text className="text-base">
          A Extrema-Unção deve receber-se quando a doença é grave, e, se puder
          ser, depois de o enfermo ter recebido os Sacramentos da Penitência e
          da Eucaristia; e deve procurar-se que o enfermo a receba quando está
          ainda com plena consciência e com alguma esperança de vida. ##### 808
          - Por que é bom que o enfermo receba a Extrema-Unção quando está em
          plena consciência e com alguma esperança de vida? É bom receber a
          Extrema-Unção quando o enfermo está ainda com plena consciência e com
          alguma esperança de vida, porque recebendo-a com melhores disposições
          poderá obter maior proveito; e além disso, como este Sacramento dá a
          saúde do corpo, se convém à alma auxiliando as forças da natureza, não
          se deve estar à espera de que se desespere da cura.
        </Text>
        <H5 text="809 - Com que disposições se deve receber a Extrema-Unção?" />
        <Text className="text-base">
          As principais disposições para receber a Extrema-Unção são: estar em
          estado de graça, confiar na eficácia do Sacramento e na misericórdia
          divina e resignar-se à vontade de Deus.
        </Text>
        <H5 text="810 - Que sentimento deve experimentar o enfermo à vista do Sacerdote?" />
        À vista do Sacerdote, o enfermo deve experimentar sentimentos de
        gratidão para com Deus, por lho ter enviado, deve recebê-lo de boa
        vontade e pedir, se puder, por si mesmo, os confortos da Religião.
      </Text>
      <Text className="h2">
        VIII - <Text className="em">Da Ordem</Text>
      </Text>
      <H5 text="811 - Que é o Sacramento da Ordem?" />
      <Text className="text-base">
        A Ordem é o Sacramento que dá o poder de exercitar os ministérios
        sagrados que se referem ao culto de Deus e à salvação das almas, e que
        imprime na alma de quem o recebe o caráter de ministro de Deus.
      </Text>
      <H5 text="812 - Por que se chama Ordem?" />
      <Text className="text-base">
        Chama-se Ordem porque consiste em vários graus, uns subordinados aos
        outros, dos quais resulta a sagrada Hierarquia.
      </Text>
      <H5 text="813 - Quais são estes graus?" />
      <Text className="text-base">
        Supremo entre eles é o Episcopado, que contém a plenitude do Sacerdócio;
        em seguida o Presbiterado ou Sacerdócio simples; depois o Diaconado e as
        Ordens que se chamam menores.
      </Text>
      <H5 text="814 - Quando Jesus Cristo instituiu a Ordem Sacerdotal?" />
      <Text className="text-base">
        Jesus Cristo instituiu a Ordem Sacerdotal na Última Ceia, quando
        conferiu aos Apóstolos e aos seus sucessores o poder de consagrar a
        Santíssima Eucaristia. E no dia da sua ressurreição conferiu aos mesmos
        o poder de perdoar e de reter os pecados, constituindo os assim os
        primeiros Sacerdotes da Nova Lei em toda a plenitude do seu poder.
      </Text>
      <H5 text="815 - Quem é o ministro deste Sacramento?" />
      <Text className="text-base">
        O ministro deste Sacramento é só o Bispo.
      </Text>
      <H5 text="816 - É então grande a dignidade do Sacerdócio cristão?" />
      <Text className="text-base">
        A dignidade do Sacerdócio cristão é muito grande, pelo duplo poder que
        lhe conferiu Jesus Cristo sobre o seu Corpo real e sobre o seu Corpo
        místico, que é a Igreja, e pela divina missão, confiada aos Sacerdotes,
        de conduzir todos os homens à vida eterna.
      </Text>
      <H5 text="817 - É necessário o Sacerdócio católico na Igreja?" />
      <Text className="text-base">
        O Sacerdócio católico é necessário na Igreja, porque sem ele os fiéis
        estariam privados do Santo Sacrifício da Missa e da maior parte dos
        Sacramentos; não teriam quem os instruísse na fé, e ficariam como
        ovelhas sem pastor à mercê dos lobos; em suma, não existiria a Igreja
        como Cristo a instituiu.
      </Text>
      <H5 text="818 - Então não acabará nunca o Sacerdócio católico sobre a terra?" />
      <Text className="text-base">
        O Sacerdócio católico, não obstante a guerra que contra ele move o
        Inferno, há de durar até o fim dos séculos, porque Jesus Cristo prometeu
        que as potências do Inferno não prevaleceriam jamais contra a sua
        Igreja.
      </Text>
      <H5 text="819 - Será pecado desprezar os Sacerdotes?" />
      <Text className="text-base">
        É pecado gravíssimo, porque o desprezo e as injúrias que se dirigem
        contra os Sacerdotes recaem sobre o próprio Jesus Cristo, que disse aos
        seus Apóstolos: Quem a vós despreza, a Mim despreza.
      </Text>
      <H5 text="820 - Qual deve ser o fim de quem abraça o estado eclesiástico?" />
      <Text className="text-base">
        O fim de quem abraça o estado eclesiástico deve ser unicamente a glória
        de Deus e a salvação das almas.
      </Text>
      <H5 text="821 - Que é necessário para entrar no estado eclesiástico?" />
      <Text className="text-base">
        Para entrar no estado eclesiástico é necessário, antes de tudo, a
        vocação divina.
      </Text>
      <H5 text="822 - Que deve fazer o cristão para conhecer se Deus o chama ao estado eclesiástico?" />
      <Text className="text-base">
        Para conhecer se Deus o chama ao estado eclesiástico, o cristão deve:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - pedir fervorosamente a Nosso Senhor que lhe manifeste qual é a
          sua vontade;
        </Text>
        <Text className="li text-justify">
          2º - tomar conselho com o próprio Bispo ou com um diretor sábio e
          prudente;
        </Text>
        <Text className="li text-justify">
          3º - examinar com diligência se tem a aptidão necessária para os
          estudos, para os ministérios e para as obrigações desse estado.
        </Text>
      </View>
      <H5 text="823 - Quem entrasse para o estado eclesiástico, sem vocação divina, faria mal?" />
      <Text className="text-base">
        Quem entrasse para o estado eclesiástico, sem ser chamado por Deus,
        faria um mal muito grave e colocar-se-ia em risco de se perder.
      </Text>
      <H5 text="824 - Fazem mal os pais que, por motivos temporais, induzem os filhos a abraçar o estado eclesiástico sem vocação?" />
      <Text className="text-base">
        Os pais que, por motivos temporais, induzem os filhos a abraçar o estado
        eclesiástico sem vocação, cometem também culpa gravíssima, porque com
        isto usurpam o direito que Deus reservou exclusivamente para Si de
        escolher os seus ministros, e porque põem os filhos em risco de
        condenação eterna.
      </Text>
      <H5 text="825 - Quais são os deveres dos fiéis para com aqueles que são chamados às ordens sacras?" />
      <Text className="text-base">Os fiéis devem:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - deixar aos seus filhos e subordinados plena liberdade de seguir a
          vocação divina;
        </Text>
        <Text className="li text-justify">
          2º - pedir a Deus que se digne conceder à sua Igreja bons Pastores e
          ministros zelosos; e até foram instituídos para este fim os jejuns das
          Quatro Têmporas;
        </Text>
        <Text className="li text-justify">
          3º - ter um respeito singular a todos aqueles que, por meio das
          Ordens, são consagrados ao serviço de Deus.
        </Text>
      </View>
      <Text className="h2">
        IX - <Text className="em">Do Matrimônio</Text>
      </Text>
      <H4 text="1º - Natureza do Sacramento do Matrimônio" />
      <H5 text="826 - Que é o Sacramento do Matrimônio?" />
      <Text className="text-base">
        O Matrimônio é um Sacramento instituído por Nosso Senhor Jesus Cristo,
        que estabelece uma união santa e indissolúvel entre o homem e a mulher,
        e lhes dá a graça de se amarem um ao outro santamente, e de educarem
        cristãmente seus filhos.
      </Text>
      <H5 text="827 - Por quem foi instituído o Matrimônio?" />
      <Text className="text-base">
        O Matrimônio foi instituído pelo próprio Deus no Paraíso terrestre; e no
        Novo Testamento foi elevado por Jesus Cristo à dignidade de Sacramento.
      </Text>
      <H5 text="828 - Tem o Sacramento do Matrimônio alguma significação especial?" />
      <Text className="text-base">
        O Sacramento do Matrimônio significa a união indissolúvel de Jesus
        Cristo com a Santa Igreja, sua esposa e nossa Mãe amantíssima.
      </Text>
      <H5 text="829 - Por que se diz que o vínculo do Matrimônio é indissolúvel?" />
      <Text className="text-base">
        Diz-se que o vínculo do Matrimônio é indissolúvel, isto é, que não se
        pode quebrar senão pela morte de um dos cônjuges, porque assim o
        estabeleceu Deus desde o começo, e assim o proclamou solenemente Jesus
        Cristo, Senhor Nosso.
      </Text>
      <H5 text="830 - No Matrimônio cristão, poder-se-ia separar o contrato do Sacramento?" />
      <Text className="text-base">
        Não. No Matrimônio entre cristãos o contrato não se pode separar do
        Sacramento, porque para eles o Matrimônio não é outra coisa senão o
        mesmo contrato natural, elevado por Jesus Cristo à dignidade de
        Sacramento.
      </Text>
      <H5 text="831 - Então, entre os cristãos não pode haver verdadeiro Matrimônio que não seja Sacramento?" />
      <Text className="text-base">
        Entre os cristãos não pode haver verdadeiro Matrimônio que não seja
        Sacramento.
      </Text>
      <H5 text="832 - Que efeitos produz o Sacramento do Matrimônio?" />
      <Text className="text-base">O Sacramento do Matrimônio:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - dá um aumento da graça santificante;
        </Text>
        <Text className="li text-justify">
          2º - confere a graça especial para se cumprirem fielmente todos os
          deveres matrimoniais.
        </Text>
      </View>
      <H4 text="2º - Ministros, cerimônias e disposições para o Matrimônio" />
      <H5 text="833 - Quem são os ministros do Sacramento do Matrimônio?" />
      <Text className="text-base">
        Os ministros deste Sacramento são os mesmos esposos, que reciprocamente
        conferem e recebem o Sacramento.
      </Text>
      <H5 text="834 - De que maneira se administra este Sacramento?" />
      <Text className="text-base">
        Este Sacramento, porque conserva a natureza de contrato, é administrado
        pelos mesmos contraentes, declarando na presença do próprio pároco, ou
        de outro Sacerdote devidamente autorizado, e de duas testemunhas, que se
        unem em matrimônio.
      </Text>
      <H5 text="835 - Para que serve então a bênção que o pároco dá aos esposos?" />
      <Text className="text-base">
        A bênção que o pároco dá aos esposos não é necessária para constituir o
        Sacramento, mas é dada para sancionar em nome da Igreja a sua união, e
        para atrair sempre mais sobre eles as bênçãos de Deus.
      </Text>
      <H5 text="836 - Que intenção deve ter quem contrai Matrimônio?" />
      <Text className="text-base">
        Quem contrai Matrimônio deve ter intenção:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - de fazer a vontade de Deus, que o chama a tal estado;
        </Text>
        <Text className="li text-justify">
          2º - de procurar nele a salvação da própria alma;
        </Text>
        <Text className="li text-justify">
          3º - de educar cristãmente os filhos, se Deus lhos der.
        </Text>
      </View>
      <H5 text="837 - De que maneira se devem dispor os esposos para receber com fruto o Sacramento do Matrimônio?" />
      <Text className="text-base">
        Os esposos, para receber com fruto o Sacramento do Matrimônio, devem:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - encomendar-se de todo o coração a Deus, para conhecer a sua
          vontade e para alcançar d'Ele as graças que são necessárias em tal
          estado;
        </Text>
        <Text className="li text-justify">
          2º - consultar os próprios pais, antes de chegar ao noivado, como o
          exige a obediência e o respeito devido aos mesmos;
        </Text>
        <Text className="li text-justify">
          3º - preparar-se com uma boa confissão, até mesmo geral, se for
          necessário, de toda a vida;
        </Text>
        <Text className="li text-justify">
          4º - evitar toda a familiaridade perigosa de trato e de palavras, ao
          conversarem mutuamente. antes de receberem este Sacramento.
        </Text>
      </View>
      <H5 text="838 - Quais são as principais obrigações das pessoas unidas em Matrimônio?" />
      <Text className="text-base">As pessoas unidas em Matrimônio devem:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - guardar inviolada a fidelidade conjugal, e proceder sempre
          cristãmente em tudo;
        </Text>
        <Text className="li text-justify">
          2º - amar-se mutuamente, suportando-se um ao outro com paciência, e
          viver em paz e harmonia;
        </Text>
        <Text className="li text-justify">
          3º - se têm filhos, cuidar seriamente de prover às suas necessidades,
          dar-lhes educação cristã, e deixar-lhes a liberdade de escolher o
          estado de vida a que Deus os chamar.
        </Text>
      </View>
      <H4 text="3º - Condições e impedimentos do Matrimônio" />
      <H5 text="839 - Que é necessário para contrair validamente o Matrimônio cristão?" />
      <Text className="text-base">
        Para contrair validamente o Matrimônio cristão é necessário estar livre
        de qualquer impedimento matrimonial dirimente, e dar livremente o
        próprio consentimento ao contrato do Matrimônio na presença do próprio
        pároco ou de um Sacerdote devidamente autorizado, e de duas testemunhas.
      </Text>
      <H5 text="840 - Que é necessário para contrair licitamente o Matrimônio cristão?" />
      <Text className="text-base">
        Para contrair licitamente o Matrimônio cristão, é necessário estar livre
        dos impedimentos matrimoniais impedientes, estar instruído nas verdades
        principais da religião, e estar em estado de graça. Não estando em
        estado de graça, cometer-se-ia um sacrilégio.
      </Text>
      <H5 text="841 - Que são os impedimentos matrimoniais?" />
      <Text className="text-base">
        Os impedimentos matrimoniais são certas circunstâncias que tornam o
        matrimônio ou inválido ou ilícito. No primeiro caso chamam-se
        impedimentos dirimentes, no segundo impedimentos impedientes.
      </Text>
      <H5 text="842 - Dai-me alguns exemplos de impedimentos dirimentes." />
      <Text className="text-base">
        Impedimentos dirimentes são, por exemplo, a consanguinidade até ao
        terceiro grau, o parentesco espiritual, o voto solene de castidade, a
        diversidade de culto entre baptizados e não baptizados etc.
      </Text>
      <H5 text="843 - Dai-me algum exemplo de impedimento impediente." />
      <Text className="text-base">
        Impedimento impediente é, por exemplo, o voto simples de castidade etc.
      </Text>
      <H5 text="844 - São os fiéis obrigados a manifestar à autoridade eclesiástica os impedimentos matrimoniais que conhecem?" />
      <Text className="text-base">
        Os fiéis são obrigados a manifestar à autoridade eclesiástica os
        impedimentos matrimoniais que conhecem; e é por isso que os párocos
        fazem as publicações, isto é, lêem os pregões dos que se vão casar.
      </Text>
      <H5 text="845 - Quem tem o poder de estabelecer impedimentos matrimoniais, de dispensar deles, e de julgar da validade do Matrimônio cristão?" />
      <Text className="text-base">
        Só a Igreja tem o poder de estabelecer impedimentos e de julgar da
        validade do Matrimônio entre os cristãos, como só a Igreja pode
        dispensar daqueles impedimentos que Ela estabeleceu.
      </Text>
      <H5 text="846 - Por que só a Igreja tem o poder de estabelecer impedimentos e de julgar da validade do Matrimônio?" />
      <Text className="text-base">
        Só a Igreja tem o poder de estabelecer impedimentos, de julgar da
        validade do Matrimônio e de dispensar dos impedimentos que Ela própria
        estabeleceu, porque não se podendo separar no matrimônio cristão o
        contrato do Sacramento, também o contrato cai sob alçada da Igreja,
        porque só a Ela conferiu Jesus Cristo o direito de promulgar leis e
        decisões acerca das coisas sagradas.
      </Text>
      <H5 text="847 - Pode a autoridade civil dissolver, com o divórcio, o vínculo do Matrimônio cristão?" />
      <Text className="text-base">
        Não. O vínculo do Matrimônio cristão não pode ser dissolvido pela
        autoridade civil, porque esta não pode ingerir-se em matéria de
        Sacramentos, nem separar o que Deus uniu.
      </Text>
      <H5 text="848 - Que é o matrimônio ou casamento civil?" />
      <Text className="text-base">
        O casamento civil não é mais que uma formalidade prescrita pela lei para
        os cidadãos, a fim de dar e de assegurar os efeitos civis aos casados e
        aos seus filhos.
      </Text>
      <H5 text="849 - Pode um cristão celebrar somente o casamento ou contrato civil?" />
      <Text className="text-base">
        Um cristão não pode celebrar somente o contrato civil, porque este não é
        Sacramento, e portanto não é um verdadeiro matrimônio.
      </Text>
      <H5 text="850 - Em que condições se encontrariam os esposos que convivessem juntos, unidos somente pelo casamento civil?" />
      <Text className="text-base">
        Os esposos que convivessem juntos, unidos somente pelo casamento civil,
        estariam em estado habitual de pecado mortal, e a sua união seria sempre
        ilegítima diante de Deus e da Igreja.
      </Text>
      <H5 text="851 - Deve fazer-se também o contrato civil?" />
      <Text className="text-base">
        Deve fazer-se também o contrato civil, porque, embora não seja ele
        Sacramento, serve, no entanto, para garantir aos casados e a seus filhos
        os efeitos civis da sociedade conjugal; eis porque, como regra geral, a
        autoridade eclesiástica não permite o casamento religioso, quando não se
        cumprem as formalidades prescritas pela autoridade civil.
      </Text>
      <H1 text="Quinta Parte" />
      <Text className="aside">
        Das virtudes principais e de outras coisas que o cristão deve saber
      </Text>
      <Text className="h2">
        I - <Text className="em">Das virtudes principais</Text>
      </Text>
      <H4 text="1º - Das virtudes teologais" />
      <H5 text="852 - Que é a virtude sobrenatural?" />
      <Text className="text-base">
        A virtude sobrenatural é uma qualidade que Deus infunde na alma, pela
        qual se tem propensão, facilidade e prontidão para conhecer e praticar o
        bem, em ordem da vida eterna.
      </Text>
      <H5 text="853 - Quantas são as principais virtudes sobrenaturais?" />
      <Text className="text-base">
        As principais virtudes sobrenaturais são sete, a saber, três teologais e
        quatro cardeais.
      </Text>
      <H5 text="854 - Quais são as virtudes teologais?" />
      <Text className="text-base">
        As virtudes teologais são: a Fé, a Esperança e a Caridade.
      </Text>
      <H5 text="855 - Por que a Fé, a Esperança e a Caridade se chamam virtudes teologais?" />
      <Text className="text-base">
        Chamam-se a Fé, a Esperança e a Caridade virtudes teologais, porque têm
        a Deus por objeto imediato e principal e nos são infundidas por Ele.
      </Text>
      <H5 text="856 - De que modo têm as virtudes teologais a Deus por objeto imediato?" />
      <Text className="text-base">
        As virtudes teologais têm a Deus por objeto imediato, porque pela Fé nós
        cremos em Deus, e cremos tudo o que Ele revelou; pela Esperança
        esperamos possuir a Deus; pela Caridade amamos a Deus e n'Ele amamos a
        nós mesmos e ao próximo.
      </Text>
      <H5 text="857 - Quando nos infunde Deus na alma as virtudes, teologais?" />
      <Text className="text-base">
        Deus, pela sua bondade, infunde-nos no alma a, virtudes teologais,
        quando nos adorna com a graça santificante; e por isso, quando recebemos
        o Batismo, fomos enriquecidos com estas virtudes, e juntamente com os
        dons do Espírito Santo.
      </Text>
      <H5 text="858 - Basta, para o cristão se salvar, o Batismo as virtudes teologais?" />
      <Text className="text-base">
        Para quem tem o uso da razão, não basta o ter recebido no Batismo as
        virtudes teologais; mas é necessário fazer frequentemente atos destas
        virtudes.
      </Text>
      <H5 text="859 - Quando somos obrigados a fazer atos de Fé, de Esperança e de Caridade?" />
      <Text className="text-base">
        Somos obrigados a fazer atos de Fé, de Esperança e de Caridade:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - quando chegamos ao uso da razão;
        </Text>
        <Text className="li text-justify">
          2º - frequentes vezes no decurso da vida.
        </Text>
        <Text className="li text-justify">3º - em perigo de morte.</Text>
      </View>
      <H4 text="2º - Da Fé" />
      <H5 text="860 - Que é a Fé?" />
      <Text className="text-base">
        A Fé e uma virtude sobrenatural, infundida por Deus em nossa alma, pela
        qual nós, apoiados na autoridade do mesmo Deus, acreditamos que é
        verdade tudo o que Ele revelou e por meio da Santa Igreja nos propõe
        para crer.
      </Text>
      <H5 text="861 - Como conhecemos as verdades reveladas por Deus?" />
      <Text className="text-base">
        Conhecemos as verdades reveladas por Deus, por meio da Santa Igreja que
        é infalível, isto é, por meio do Papa, sucessor de São Pedro, e por meio
        dos Bispos que, em união com o Papa, são sucessores dos Apóstolos, os
        quais foram instruídos pelo próprio Jesus Cristo.
      </Text>
      <H5 text="862 - Temos nós a certeza de que são verdadeiras as doutrinas que a Santa Igreja nos ensina?" />
      <Text className="text-base">
        Sim, temos a certeza absoluta de que são verdadeiras as doutrinas que a
        Santa Igreja nos ensina, porque Jesus Cristo empenhou a sua palavra, que
        a Igreja nunca se enganaria.
      </Text>
      <H5 text="863 - Com que pecado se perde a Fé?" />
      <Text className="text-base">
        A Fé perde-se negando ou duvidando voluntariamente, ainda que seja de um
        só artigo que nos é proposto para crer.
      </Text>
      <H5 text="864 - Como recuperamos a Fé?" />
      <Text className="text-base">
        Recuperamos a Fé perdida, arrependendo-nos do pecado cometido e crendo
        de novo tudo o que crê a Santa Igreja.
      </Text>
      <H4 text="3º - Dos mistérios" />
      <H5 text="865 - Podemos compreender todas as verdades da Fé?" />
      <Text className="text-base">
        Não; não podemos compreender todas as verdades da Fé, porque algumas
        destas verdades são mistérios.
      </Text>
      <H5 text="866 - Que são os mistérios?" />
      <Text className="text-base">
        Os mistérios são verdades superiores à razão, as quais devemos crer,
        ainda que não as possamos compreender.
      </Text>
      <H5 text="867 - Por que devemos crer os mistérios?" />
      <Text className="text-base">
        Devemos crer os mistérios, porque os revelou Deus, que, sendo Verdade e
        Bondade infinitas, não pode enganar-se, nem enganar-nos.
      </Text>
      <H5 text="868 - São porventura os mistérios contrários à razão?" />
      <Text className="text-base">
        Os mistérios são superiores, porém não contrários à razão; e até a
        própria razão nos persuade a admiti-los.
      </Text>
      <H5 text="869 - Por que os mistérios não podem ser contrários à razão?" />
      <Text className="text-base">
        Os mistérios não podem ser contrários à razão, porque é o mesmo Deus
        quem nos deu a luz da razão, e quem revelou OS mistérios, e Ele não pode
        contradizer-se a Si mesmo.
      </Text>
      <H4 text="4º - Da Sagrada Escritura" />
      <H5 text="870 - Onde se acham as verdades que Deus revelou?" />
      <Text className="text-base">
        As verdades que Deus revelou acham-se na Sagrada Escritura e na
        Tradição.
      </Text>
      <H5 text="871 - Que é a Sagrada Escritura?" />
      <Text className="text-base">
        A Sagrada Escritura é a coleção dos livros escritos pelos Profetas e
        pelos Hagiógrafos, pelos Apóstolos pelos Evangelistas, por inspiração do
        Espírito Santo, recebidas pela Igreja como inspirados.
      </Text>
      <H5 text="872 - Em quantas partes se divide a Sagrada Escritura?" />
      <Text className="text-base">
        A Sagrada Escritura se divide em duas partes: Antigo e Novo Testamento.
      </Text>
      <H5 text="873 - Que contém o Antigo Testamento?" />
      <Text className="text-base">
        O Antigo Testamento contém os livros inspirados escritos antes da vinda
        de Jesus Cristo.
      </Text>
      <H5 text="874 - Que contém o Novo Testamento?" />
      <Text className="text-base">
        O Novo Testamento contém os livros inspirados escritos depois da vinda
        de Jesus Cristo.
      </Text>
      <H5 text="875 - Que nome se dá comumente à Sagrada Escritura?" />
      <Text className="text-base">
        À Sagrada Escritura dá-se comumente o nome de Bíblia Sagrada.
      </Text>
      <H5 text="876 - Que quer dizer a palavra Bíblia?" />
      <Text className="text-base">
        A palavra Bíblia quer dizer coleção dos livros santos, o livro por
        excelência, o livro dos livros, o livro inspirado por Deus.
      </Text>
      <H5 text="877 - Por que é a Sagrada Escritura chamada o livro por excelência?" />
      <Text className="text-base">
        A Sagrada Escritura é chamada o livro por excelência, por causa da
        excelência da matéria de que trata e do Autor que a inspirou.
      </Text>
      <H5 text="878 - Não pode haver erro na Sagrada Escritura?" />
      <Text className="text-base">
        Na Sagrada Escritura não pode haver erro algum, porque, sendo toda
        inspirada, o Autor de todas as suas partes é o próprio Deus. Isto não
        obsta a que nas cópias as e traduções da mesma se tenha dado algum
        engano ou dos copistas ou dos tradutores. Porém, nas edições revistas e
        aprovadas pela Igreja Católica não pode haver erro no que respeita à fé
        ou à moral.
      </Text>
      <H5 text="879 É necessária a todos os cristãos a leitura da Bíblia?" />
      <Text className="text-base">
        A leitura da Bíblia não é necessária a todos os cristãos, sendo, como
        são, instruídos pela Igreja; mas é contudo útil e recomendada a todos.
      </Text>
      <H5 text="880 - Pode-se ler qualquer tradução em língua vulgar da Bíblia?" />
      <Text className="text-base">
        Podem ler-se as traduções em língua vulgar da Bíblia desde que sejam
        reconhecidas como fiéis pela Igreja Católica, e venham acompanhadas de
        explicações ou notas aprovadas pela mesma Igreja.
      </Text>
      <H5 text="881 - Por que só se podem ler as traduções da Bíblia que são aprovadas pela Igreja?" />
      <Text className="text-base">
        Só se podem ler as traduções da Bíblia que são aprovadas pela Igreja
        porque só Ela é legítima depositária e guarda da Bíblia.
      </Text>
      <H5 text="882 - Por quem podemos nós conhecer o verdadeiro sem tido das Sagradas Escrituras?" />
      <Text className="text-base">
        O verdadeiro sentido das Sagradas Escrituras podemos conhecê-lo só por
        meio o da Igreja, porque só a Igreja é que não pode errar ao
        interpretá-las.
      </Text>
      <H5 text="883 - Que deveria fazer um cristão, se lhe fosse oferecida a Bíblia por um protestante ou por algum emissário dos protestantes?" />
      <Text className="text-base">
        Um cristão a quem fosse oferecida a Bíblia por um protestante, ou por
        algum emissário dos protestantes, deveria rejeitá-la com horror, por ser
        proibida pela Igreja. E, se a tivesse aceitado sem reparar, deveria logo
        lançá-la ao fogo ou entregá-la ao próprio pároco.
      </Text>
      <H5 text="884 - Por que proíbe a Igreja as Bíblias protestantes?" />
      <Text className="text-base">
        A Igreja proíbe as Bíblias protestantes, porque ou estão alteradas e
        contêm erros, ou então, faltando-lhes a sua aprovação e as notas
        explicativas das passagens obscuras, podem causar dano à Fé. Por isso a
        Igreja proíbe também as traduções da Sagrada Escritura já aprovadas por
        Ela, mas reimpressas sem as explicações que a mesma Igreja aprovou.
      </Text>
      <H4 text="5º - Da Tradição" />
      <H5 text="885 - Dizei-me: o que é a Tradição?" />
      <Text className="text-base">
        A Tradição é a palavra de Deus não escrita, mas comunicada de viva voz
        por Jesus Cristo e pelos Apóstolos, e que chegou sem alteração, de
        século em século, por meio da Igreja, até nós.
      </Text>
      <H5 text="886 - Onde se acham os ensinamentos da Tradição?" />
      <Text className="text-base">
        Os ensinamentos da Tradição acham-se principalmente nos decretos dos
        Concílios, nos escritos dos Santos Padres, nos atos da Santa Sé, nas
        palavras e nus usos da Sagrada Liturgia.
      </Text>
      <H5 text="887 - Em que consideração se deve ter a Tradição?" />
      <Text className="text-base">
        A Tradição deve ter-se na mesma consideração em que se tem a palavra de
        Deus contida na Sagrada Escritura.
      </Text>
      <H4 text="6º - Da Esperança" />
      <H5 text="888 - Que é a Esperança?" />
      <Text className="text-base">
        A Esperança é uma virtude sobrenatural, infundida por Deus na nossa
        alma, pela qual desejamos e esperamos a vida eterna que Deus prometeu
        aos seus servos, e os auxílios necessários para alcançá-la.
      </Text>
      <H5 text="889 - Por que motivo devemos esperar de Deus o Paraíso e os auxílios necessários para alcançá-lo?" />
      <Text className="text-base">
        Devemos esperar de Deus o Paraíso e os auxílios necessários para
        alcançá-lo, porque Deus misericordiosíssimo, pelos merecimentos de Nosso
        Senhor Jesus Cristo, o prometeu a quem o serve de todo o coração; e,
        sendo fidelíssimo e onipotente, cumpre sempre a sua promessa.
      </Text>
      <H5 text="890 - Quais são as condições necessárias para alcançar o Paraíso?" />
      <Text className="text-base">
        As condições necessárias para alcançar o Paraíso são: a graça de Deus, a
        prática das boas obras e a perseverança no seu santo amor até à morte.
      </Text>
      <H5 text="891 - Como se perde a Esperança?" />
      <Text className="text-base">
        Perde-se a Esperança todas as vezes que se perde a Fé; perde-se também
        pelo pecado de desespero ou de presunção.
      </Text>
      <H5 text="892 - Como recuperamos a Esperança?" />
      <Text className="text-base">
        Recuperamos a Esperança perdida, arrependendo-nos do pecado cometido, e
        excitando-nos de novo à confiança na bondade divina.
      </Text>
      <H4 text="7º - Da Caridade" />
      <H5 text="893 - Que é a Caridade?" />
      <Text className="text-base">
        A Caridade é uma virtude sobrenatural, infundida por Deus em nossa alma,
        pela qual amamos a Deus por Si mesmo sobre todas as coisas, e amamos o
        próximo como a nós mesmos, por amor de Deus.
      </Text>
      <H5 text="894 - Por que motivos devemos amar a Deus?" />
      <Text className="text-base">
        Devemos amar a Deus, porque Ele é o sumo Bem, infinitamente bom e
        perfeito, e além disso por que Ele o manda, e pelos inumeráveis
        benefícios que d'Ele recebemos.
      </Text>
      <H5 text="895 - Como se deve amar a Deus?" />
      <Text className="text-base">
        Devemos amar a Deus sobre todas as coisas, com todo o nosso coração, com
        toda a nossa mente, com toda a nossa alma, e com todas as nossas forças.
      </Text>
      <H5 text="896 - Que quer dizer: amar a Deus sobre todas as coisas?" />
      <Text className="text-base">
        Amar a Deus sobre todas as coisas quer dizer: preferi-Lo a todas as
        criaturas mais caras e mais perfeitas, e estar disposto a perder tudo
        antes que ofendê-Lo ou deixar de amá-Lo.
      </Text>
      <H5 text="897 - Que quer dizer: amar a Deus com todo o nosso coração?" />
      <Text className="text-base">
        Amar a Deus com todo o nosso coração quer dizer: consagrar-Lhe todos os
        nossos afetos.
      </Text>
      <H5 text="898 - Que quer dizer: amar a Deus com toda a nossa mente?" />
      <Text className="text-base">
        Amar a Deus com toda a nossa mente quer dizer: dirigir para Ele todos os
        nossos pensamentos.
      </Text>
      <H5 text="899 - Que quer dizer: amar a Deus com toda a nossa alma?" />
      <Text className="text-base">
        Amar a Deus com toda a nossa alma quer dizer: consagrar-Lhe o uso de
        todas as potências da nossa alma.
      </Text>
      <H5 text="900 - Que quer dizer: amar a Deus com todas as nossas forças?" />
      <Text className="text-base">
        Amar a Deus com todas as nossas forças quer dizer: esforçar-se por
        crescer cada vez mais no amor d'Ele, e proceder de maneira que todas as
        nossas ações tenham por motivo e por fim o seu amor e o desejo de Lhe
        agradar.
      </Text>
      <H5 text="901 - Por que devemos amar o próximo?" />
      <Text className="text-base">
        Devemos amar o próximo por amor de Deus porque Ele o manda, e porque
        todo o homem é imagem de Deus.
      </Text>
      <H5 text="902 - Somos obrigados a amar também os inimigos?" />
      <Text className="text-base">
        Sim, somos obrigados a amar também os inimigos, porque também eles são
        nossos próximos, e porque Jesus Cristo o mandou expressamente.
      </Text>
      <H5 text="903 - Que quer dizer: amar o próximo como a nos mesmos?" />
      <Text className="text-base">
        Amar o próximo como a nós mesmos quer dizer: desejar-lhe e fazer-lhe,
        tanto quanto pudermos, todo o bem que devemos desejar para nós mesmos, e
        não lhe desejar nem fazer mal algum.
      </Text>
      <H5 text="904 - Quando amamos a nós mesmos retamente?" />
      <Text className="text-base">
        Amamos retamente a nós mesmos quando procuramos servir a Deus e pôr
        n'Ele toda a nossa felicidade.
      </Text>
      <H5 text="905 - Como se perde a Caridade?" />
      <Text className="text-base">
        Perde-se a Caridade com qualquer pecado mortal.
      </Text>
      <H5 text="906 - Como recuperamos a Caridade?" />
      <Text className="text-base">
        Recuperamos a Caridade, fazendo actos de amor de Deus, arrependendo-nos
        e confessando-nos bem.
      </Text>
      <H4 text="8º - Das virtudes cardeais" />
      <H5 text="907 - Quais são as virtudes cardeais?" />
      <Text className="text-base">
        As virtudes cardeais são: a Prudência, a Justiça, a Fortaleza e a
        Temperança.
      </Text>
      <H5 text="908 - Por que se chamam virtudes cardeais a Prudência, a Justiça, a Fortaleza e a Temperança?" />
      <Text className="text-base">
        Chamam-se virtudes cardeais a Prudência, a Justiça, a Fortaleza e a
        Temperança, porque são a base e o fundamento das virtudes morais.
      </Text>
      <H5 text="909 - Que é a Prudência?" />
      <Text className="text-base">
        A Prudência é a virtude que dirige toda ação ao devido fim, e por isso
        procura os meios convenientes para que a ação seja em tudo bem feita, e
        portanto aceita ao Senhor.
      </Text>
      <H5 text="910 - Que é a Justiça?" />
      <Text className="text-base">
        A Justiça é a virtude pela qual damos a cada um o que lhe pertence.
      </Text>
      <H5 text="911 - Que é a Fortaleza?" />
      <Text className="text-base">
        A Fortaleza é a virtude que nos dá coragem parti não temer perigo algum,
        nem a própria morte, no serviço de Deus.
      </Text>
      <H5 text="912 - Que é a Temperança?" />
      <Text className="text-base">
        A Temperança é a virtude pela qual refreamos os desejos desordenados de
        prazeres sensuais, e usamos com moderação dos bens temporais.
      </Text>
      <Text className="h2">
        II - <Text className="em">Dos dons do Espírito Santo</Text>
      </Text>
      <H5 text="913 - Quantos e quais são os dons do Espírito Santo?" />
      <Text className="text-base">Os dons do Espírito Santo são sete:</Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - Sabedoria;</Text>
        <Text className="li text-justify">2º - Entendimento;</Text>
        <Text className="li text-justify">3º - Conselho;</Text>
        <Text className="li text-justify">4º - Fortaleza:</Text>
        <Text className="li text-justify">5º - Ciência;</Text>
        <Text className="li text-justify">6º - Piedade;</Text>
        <Text className="li text-justify">7º - Temor de Deus.</Text>
      </View>
      <H5 text="914 - Para que servem os dons do Espírito Santo?" />
      <Text className="text-base">
        Os dons do Espírito Santo servem para nos confirmar na Fé, na Esperança
        e na Caridade, e para nos tornar solícitos para os actos das virtudes
        necessárias para conseguir a perfeição da vida cristã.
      </Text>
      <H5 text="915 - Que é a Sabedoria?" />
      <Text className="text-base">
        A Sabedoria é um dom pelo qual nós, elevando o espírito acima das coisas
        terrenas e frágeis, contemplamos as eternas, isto é, a Verdade, que é
        Deus, no qual pomos nossa complacência, amando-O como nosso Sumo bem.
      </Text>
      <H5 text="916 - Que é o Entendimento?" />
      <Text className="text-base">
        O Entendimento é um dom pelo qual nos é facilitada, quanto é possível a
        um homem mortal, a inteligência das verdades da Fé e dos divinos
        mistérios, os quais não podemos conhecer com as luzes naturais da nossa
        razão.
      </Text>
      <H5 text="917 - Que é o Conselho?" />
      <Text className="text-base">
        O Conselho é um dom pelo qual, nas dúvidas e incertezas da vida humana,
        conhecemos o que mais convém à glória de Deus, à nossa salvação e à do
        próximo.
      </Text>
      <H5 text="918 - Que é a Fortaleza?" />
      <Text className="text-base">
        A Fortaleza é um dom que nos incute energia e coragem para observar
        fielmente a santa Lei de Deus e da Igreja, vencendo todos os obstáculos,
        e os assaltos dos nossos inimigos.
      </Text>
      <H5 text="919 - Que é a Ciência?" />
      <Text className="text-base">
        A Ciência é um dom pelo qual julgamos retamente das coisas criadas, e
        conhecemos o modo de bem usar delas e de as dirigir ao último fim, que é
        Deus.
      </Text>
      <H5 text="920 - Que é a Piedade?" />
      <Text className="text-base">
        Á Piedade é um dom pelo qual veneramos e amamos a Deus e aos Santos, e
        conservamos ânimo bondoso e benévolo para com o próximo, por amor de
        Deus.
      </Text>
      <H5 text="921 - Que é o Temor de Deus?" />
      <Text className="text-base">
        O Temor de Deus é um dom que nos faz reverenciar a Deus, e ter receio de
        ofender a sua Divina Majestade, e que nos afasta do mal, incitando-nos
        ao bem.
      </Text>
      <Text className="h2">
        III - <Text className="em">Das Bem-aventuranças evangélicas</Text>
      </Text>
      <H5 text="922 - Quantas e quais são as Bem-aventuranças evangélicas?" />
      <Text className="text-base">
        As Bem-aventuranças evangélicas são oito:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - a Bem-aventurados os pobres de espírito, porque deles é o reino
          do Céu;
        </Text>
        <Text className="li text-justify">
          2º - a Bem-aventurados os mansos, porque eles possuirão a terra;
        </Text>
        <Text className="li text-justify">
          3º - a Bem-aventurados os que choram, porque serão consolados;
        </Text>
        <Text className="li text-justify">
          4º - a Bem-aventurados os que têm fome e sede de justiça, porque serão
          saciados;
        </Text>
        <Text className="li text-justify">
          5º - a Bem-aventurados os que usam de misericórdia, porque alcançarão
          misericórdia;
        </Text>
        <Text className="li text-justify">
          6ª - a Bem-aventurados os puros de coração, porque verão a Deus;
        </Text>
        <Text className="li text-justify">
          7ª - a Bem-aventurados os pacíficos, porque serão chamados filhos de
          Deus;
        </Text>
        <Text className="li text-justify">
          8ª - a Bem-aventurados os que sofrem perseguição por amor da justiça,
          porque deles é o reino do Céu.
        </Text>
      </View>
      <H5 text="923 - Por que Jesus Cristo nos propôs as Bem-aventuranças?" />
      <Text className="text-base">
        Jesus Cristo propôs-nos as Bem-aventuranças para os fazer detestar as
        máximas do mundo, e para nos convidar a amar e praticar as máximas do
        seu Evangelho.
      </Text>
      <H5 text="924 - Quem são aqueles que o mundo chama bem-aventurados?" />
      <Text className="text-base">
        O inundo chama bem-aventurados aqueles que desfrutam abundância de
        riquezas e de honras, que vi vem em delícias e que não têm nada que os
        faça sofrer.
      </Text>
      <H5 text="925 - Quem são os pobres de espírito, que Jesus Cristo chama bem-aventurados?" />
      <Text className="text-base">
        Os pobres de espírito, segundo o Evangelho, são aqueles que têm o
        coração desapegado das riquezas; fazem bom uso delas, se as possuem; não
        as procuram com solicitude, se não as têm; e sofrem com resignação a
        perda delas se lhes são tiradas.
      </Text>
      <H5 text="926 - Quem são os mansos?" />
      <Text className="text-base">
        Os mansos são aqueles que tratam o próximo com brandura, e lhe sofrem
        com paciência os defeitos e as ofensas que dele recebem, sem alteração,
        ressentimentos ou vingança.
      </Text>
      <H5 text="927 - Quem são os que choram, e todavia são chamados bem-aventurados?" />
      <Text className="text-base">
        Os que choram, e todavia são chamados bem-aventurados, são aqueles que
        sofrem com resignação as tribulações, e que se afligem pelos pecados
        cometidos, pelos males e pelos escândalos que se vêem no mundo, pela
        ausência do céu, e pelo perigo de o perder.
      </Text>
      <H5 text="928 - Quem são os que têm fome e sede de justiça?" />
      <Text className="text-base">
        Os que têm fome e sede de justiça são aqueles, que desejam ardentemente
        crescer cada vez mais na graça de Deus e na prática das obras boas e
        virtuosas.
      </Text>
      <H5 text="929 - Quem são os que usam de misericórdia?" />
      <Text className="text-base">
        Os que usam de misericórdia são aqueles que amam, em Deus e por amor de
        Deus, o seu próximo, se compadecem das suas misérias, assim corporais
        como espirituais, e procuram socorrê-lo conforme as suas forças e o seu
        estado.
      </Text>
      <H5 text="930 - Quem são os puros de coração?" />
      <Text className="text-base">
        Os puros de coração são aqueles que não têm nenhum afeto ao pecado,
        sempre se afastam dele, e evitam sobretudo toda a espécie de impureza.
      </Text>
      <H5 text="931 - Quem são os pacíficos?" />
      <Text className="text-base">
        Os pacíficos são aqueles que vivem em paz com o próximo e consigo
        mesmos, e procuram estabelecer a paz entre aqueles que estão em
        discórdia.
      </Text>
      <H5 text="932 - Quem são os que sofrem perseguição por amor da justiça?" />
      <Text className="text-base">
        Os que sofrem perseguição por amor da justiça são aqueles que suportam
        com paciência os escárnios, as censuras, as perseguições por causa da Fé
        e da Lei de Jesus Cristo.
      </Text>
      <H5 text="933 - Que significam os diversos prêmios prometidos por Jesus Cristo nas Bem- aventuranças?" />
      <Text className="text-base">
        Os diversos prêmios prometidos por Jesus Cristo nas Bem-aventuranças
        significam todos, sob diversos nomes, a glória eterna do Céu.
      </Text>
      <H5 text="934 - Alcançam-nos as Bem-aventuranças só a glória eterna do Paraíso?" />
      <Text className="text-base">
        As Bem-aventuranças não nos alcançam só a glória eterna do Paraíso; são
        também meios de tornar nossa vida feliz, tanto quanto é possível, neste
        mundo.
      </Text>
      <H5 text="935 - Recebem já alguma recompensa nesta vida os que seguem as Bem-aventuranças?" />
      <Text className="text-base">
        Sim, certamente, os que seguem as Bem-aventuranças recebem já alguma
        recompensa nesta vida, porque já gozam de uma paz e de um contentamento
        íntimos que são princípio, embora imperfeito, da felicidade eterna.
      </Text>
      <H5 text="936 - Poderão dizer-se felizes os que seguem as máximas do mundo?" />
      <Text className="text-base">
        Não. Osque seguem as máximas do mundo não são felizes, porque não têm a
        verdadeira paz da alma e estão em risco de se condenar.
      </Text>
      <Text className="h2">
        IV - <Text className="em">Das obras de misericórdia</Text>
      </Text>
      <H5 text="937 - Quais são as boas obras de que se nos pedirá conta particular no dia do Juízo?" />
      <Text className="text-base">
        As boas obras de que se tios pedirá conta particular no dia do Juízo são
        as obras de misericórdia.
      </Text>
      <H5 text="938 - Que se entende por obra de misericórdia?" />
      <Text className="text-base">
        Obra de misericórdia é aquela com que se socorre o nosso próximo nas
        suas necessidades corporais ou espirituais.
      </Text>
      <H5 text="939 - Quantas são as obras de misericórdia?" />
      <Text className="text-base">
        As obras de misericórdia são catorze: sete corporais e sete espirituais,
        conforme são corporais ou espirituais as necessidades que se socorrem.
      </Text>
      <H5 text="940 - Quais são as obras de misericórdia corporais?" />
      <Text className="text-base">As obras de misericórdia corporais são:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1ª - Dar de comer a quem tem fome;
        </Text>
        <Text className="li text-justify">
          2ª - Dar de beber a quem tem sede;
        </Text>
        <Text className="li text-justify">3ª - Vestir os nus;</Text>
        <Text className="li text-justify">
          4ª - Dar pousada aos peregrinos;
        </Text>
        <Text className="li text-justify">5ª - Assistir aos enfermos;</Text>
        <Text className="li text-justify">6ª - Visitar os presos;</Text>
        <Text className="li text-justify">7ª - Enterrar os mortos.</Text>
      </View>
      <H5 text="941 - Quais são as obras de misericórdia espirituais?" />
      <Text className="text-base">
        As obras de misericórdia espirituais são:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1ª - Dar bom conselho;</Text>
        <Text className="li text-justify">2º - Ensinar os ignorantes;</Text>
        <Text className="li text-justify">3ª - Corrigir os que erram;</Text>
        <Text className="li text-justify">4ª - Consolar os aflitos;</Text>
        <Text className="li text-justify">5ª - Perdoar as injúrias;</Text>
        <Text className="li text-justify">
          6ª - Sofrer com paciência as fraquezas do nosso próximo;
        </Text>
        <Text className="li text-justify">
          7ª - Rogar a Deus por vivos e defuntos.
        </Text>
      </View>
      <Text className="h2">
        V -{" "}
        <Text className="em">Dos pecados e das suas espécies principais</Text>
      </Text>
      <H5 text="942 - Quantas espécies há de pecado?" />
      <Text className="text-base">
        Há duas espécies de pecado: o pecado original e o pecado atual.
      </Text>
      <H5 text="943 - Que é o pecado original?" />
      <Text className="text-base">
        O pecado original é aquele com o qual todos nascemos, exceto a
        Santíssima Virgem Maria, e que contraímos pela desobediência do nosso
        primeiro pai Adão.
      </Text>
      <H5 text="944 - Que males nos causa o pecado de Adão?" />
      <Text className="text base">
        Os males causados pelo pecado de Adão são: a privação da graça, a perda
        do Paraíso, a ignorância, a inclinação para o mal, a morte e todas as
        demais misérias.
      </Text>
      <H5 text="945 - Como se apaga o pecado original?" />
      <Text className="text-base">
        O pecado original apaga-se com o santo Batismo.
      </Text>
      <H5 text="946 - Que é o pecado atual?" />
      <Text className="text-base">
        O pecado atual é aquele que o homem, chegado ao uso da razão, comete por
        sua livre vontade.
      </Text>
      <H5 text="947 - Quantas espécies há de pecado atual?" />
      <Text className="text-base">
        Há duas espécies de pecado atual: o mortal e o venial.
      </Text>
      <H5 text="948 - Que é o pecado mortal?" />
      <Text className="text-base">
        O pecado mortal é uma transgressão da lei divina, pela qual se falta
        gravemente aos deveres para com Deus, para com o próximo, ou para com
        nós mesmos.
      </Text>
      <H5 text="949 - Por que se chama mortal?" />
      <Text className="text-base">
        Chama-se mortal porque dá a morte à alma, fazendo-a perder a graça
        santificante, que é a vida da alma como a alma é a vida do corpo.
      </Text>
      <H5 text="950 - Que males causa à alma o pecado mortal?" />
      <Text className="text-base">O pecado mortal:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - priva a alma da graça e da amizade de Deus;
        </Text>
        <Text className="li text-justify">2º - fá-la perder o Céu;</Text>
        <Text className="li text-justify">
          3º - priva-a dos merecimentos adquiridos e torna-a incapaz de adquirir
          novos;
        </Text>
        <Text className="li text-justify">
          4º - torna a alma escrava do demônio;
        </Text>
        <Text className="li text-justify">
          5º - fá-la merecer o Inferno e também os castigos desta vida.
        </Text>
      </View>
      <H5 text="951 - Além da gravidade da matéria, que mais se requer para haver um pecado mortal?" />
      <Text className="text-base">
        Além da gravidade da matéria, para haver um pecado mortal requer-se a
        plena advertência desta gravidade, e a vontade deliberada de cometer o
        pecado.
      </Text>
      <H5 text="952 - Que é o pecado venial?" />
      <Text className="text-base">
        O pecado venial é uma leve transgressão da lei divina, pela qual se
        falta levemente a algum dever para com Deus, para com o próximo, ou para
        com nós mesmos.
      </Text>
      <H5 text="953 - Por que se chama venial?" />
      <Text className="text-base">
        Porque é leve em comparação com o pecado mortal; porque não nos faz
        perder a graça divina; e porque Deus facilmente o perdoa.
      </Text>
      <H5 text="954 - Então não se deve fazer grande caso do pecado venial?" />
      <Text className="text-base">
        Isto seria um erro enorme, porque o pecado venial contém sempre uma
        ofensa a Deus, e causa prejuízos não pequenos à alma.
      </Text>
      <H5 text="955 - Que prejuízos causa o pecado venial?" />
      <Text className="text-base">O pecado venial:</Text>
      <View className="list-styled">
        <Text className="li text-justify">
          1º - enfraquece e esfria em nós a caridade;
        </Text>
        <Text className="li text-justify">
          2º - dispõe-nos para o pecado mortal;
        </Text>
        <Text className="li text-justify">
          3º - faz-nos merecedores de grandes penas temporais, neste mundo ou no
          outro.
        </Text>
      </View>
      <Text className="h2">
        VI -{" "}
        <Text className="em">
          Dos pecados ou vícios capitais e de outros pecados mais graves
        </Text>
      </Text>
      <H5 text="956 - Que é o vício?" />
      <Text className="text-base">
        O vício é uma disposição má da alma que leva-a a fugir do bem e a fazer
        o mal, causada pela frequente repetição dos atos maus.
      </Text>
      <H5 text="957 - Que diferença há entre pecado e vício?" />
      <Text className="text-base">
        Entre pecado e vício há esta diferença: que o pecado é um ato que passa,
        enquanto o vício é o mau hábito contraído de cair em algum pecado.
      </Text>
      <H5 text="958 - Quais são os vícios que se chamam capitais?" />
      <Text className="text-base">
        Os vícios que se chamam capitais são sete:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - soberba;</Text>
        <Text className="li text-justify">2º - avareza;</Text>
        <Text className="li text-justify">3º - luxúria;</Text>
        <Text className="li text-justify">4º - ira;</Text>
        <Text className="li text-justify">5º - gula;</Text>
        <Text className="li text-justify">6º - inveja;</Text>
        <Text className="li text-justify">7º - preguiça.</Text>
      </View>
      <H5 text="959 - Como se vencem os vícios ou pecados capitais?" />
      <Text className="text-base">
        Os vícios ou pecados capitais vencem-se com a prática das virtudes
        opostas. Assim, a soberba vence-se com a humildade; a avareza, com a
        liberalidade; a luxúria, com a castidade; a ira, com a paciência; a
        gula, com a temperança; a inveja, com a caridade; a preguiça, com a
        diligência e fervor no serviço de Deus.
      </Text>
      <H5 text="960 - Por que se chamam capitais estes vícios?" />
      <Text className="text-base">
        Chamam-se capitais estes vícios, porque são a fonte e a causa de muitos
        outros vícios e pecados.
      </Text>
      <H5 text="961 - Quantos são os pecados contra o Espírito Santo?" />
      <Text className="text-base">
        Os pecados contra o Espírito Santo são seis:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - desesperar da salvação;</Text>
        <Text className="li text-justify">
          2º - Presunção de se salvar sem merecimentos;
        </Text>
        <Text className="li text-justify">
          3º - combater a verdade conhecida;
        </Text>
        <Text className="li text-justify">
          4º - ter inveja das graças que Deus dá a outrem;{" "}
        </Text>
        <Text className="li text-justify">5º - obstinar-se no pecado;</Text>
        <Text className="li text-justify">
          6º - morrer na impenitência final.
        </Text>
      </View>
      <H5 text="962 - Por que se chamam estes pecados particularmente pecados contra o Espírito Santo?" />
      <Text className="text-base">
        Chamam-se estes pecados particularmente pecados contra o Espírito Santo,
        porque se cometem por pura malícia, o que é contrário à bondade que se
        atribui ao Espírito Santo.
      </Text>
      <H5 text="963 - Quais são os pecados que bradam ao Céu e pedem vingança a Deus?" />
      <Text className="text-base">
        Os pecados que bradam ao Céu e pedem vingança a Deus são quatro:
      </Text>
      <View className="list-styled">
        <Text className="li text-justify">1º - homicídio voluntário;</Text>
        <Text className="li text-justify">
          2º - pecado impuro contra a natureza;
        </Text>
        <Text className="li text-justify">
          3º - opressão dos pobres, principalmente órfãos e viúvas;
        </Text>
        <Text className="li text-justify">
          4º - não pagar o salário a quem trabalha.
        </Text>
      </View>
      <H5 text="964 - Por que se diz que estes pecados pedem vingança a Deus?" />
      <Text className="text-base">
        Diz-se que estes pecados pedem vingança a Deus, porque o diz o Espírito
        Santo, e porque a sua malícia é tão grave e manifesta, que provoca o
        mesmo Deus a puni-los com os mais severos castigos.
      </Text>
      <Text className="h2">
        VII -{" "}
        <Text className="em">
          Dos Novíssimos e de outros meios principais para evitar o pecado
        </Text>
      </Text>
      <H5 text="965 - Que se entende por Novíssimos?" />
      <Text className="text-base">
        Novíssimos são chamados nos Livros Santos as últimas coisas que hão de
        acontecer ao homem.
      </Text>
      <H5 text="966 - Quantos são os Novíssimos?" />
      <Text className="text-base">
        Os Novíssimos, ou últimas coisas do homem, são quatro: Morte, Juízo,
        Inferno e Paraíso.
      </Text>
      <H5 text="967 - Por que é que esses Novíssimos se chamam últimas coisas que acontecerão ao homem?" />
      <Text className="text-base">
        Os Novíssimos chamam-se últimas coisas que acontecerão ao homem, porque
        a Morte é a última coisa que nos acontece neste mundo; o Juízo de Deus é
        o último entre os juízos que temos a passar; o Inferno é último mal que
        hão de sofrer os maus; e o Paraíso é sumo bem que hão de receber os
        bons.
      </Text>
      <H5 text="968 - Quando devemos pensar nos Novíssimos?" />
      <Text className="text-base">
        É bom pensar nos Novíssimos todos os dias, e principalmente ao fazer a
        oração da manha, apenas acordados, à noite antes do deitar, e todas as
        vezes que somos tentados a fazer algum mal, porque este pensamento é
        eficacíssimo para nos fazer evitar o pecado.
      </Text>
      <Text className="h2">
        VIII -{" "}
        <Text className="em">
          Dos exercícios piedosos que se aconselham ao cristão para cada dia
        </Text>
      </Text>
      <H5 text="969 - Que deve fazer um bom cristão, pela manhã, apenas acorda?" />
      <Text className="text-base">
        Um bom cristão, pela manhã, apenas acorda, deve fazer o sinal da Cruz, e
        oferecer o coração a Deus, dizendo estas ou outras palavras semelhantes:
        Meu Deus, eu vos dou o meu coração e a minha alma.
      </Text>
      <Text className="text-base">
        970 - Em que deveríamos pensar ao levantar da cama e enquanto nos
        vestimos?
      </Text>
      <Text className="text-base">
        Ao levantar da cama e enquanto nos vestimos, deveríamos pensar que Deus
        está presente, que aquele dia pode ser o último da nossa vida; e
        entretanto levantar-nos e vestir-nos com toda a modéstia possível.
        <Text className="text-base">
          971 - Depois de se levantar e de se vestir, que deve fazer um bom
          cristão?
        </Text>
        <Text className="text-base">
          Um bom cristão, apenas se tenha levantado vestido, convém pôr-se na
          presença de Deus e ajoelhar, se pode, diante de alguma devota imagem,
          dizendo com devoção: "Eu Vos adoro, meu Deus, e Vos amo de todo o
          coração; dou-Vos graças por me terdes criado, feito cristão e
          conservado nesta noite; ofereço-Vos todas as minhas ações, e peço-Vos
          que neste dia me preserveis do pecado, e me livreis de todo o mal.
          Assim seja". Reza depois o Padre-Nosso, a Ave-Maria, o Credo, e os
          atos de Fé, de Esperança e de Caridade, acompanhando-os com um vivo
          afeto do coração.
        </Text>
        <H5 text="972 - Que práticas de piedade deveria fazer todos os dias o cristão?" />
        <Text className="text-base">
          O cristão, podendo, deveria todos os dias:
        </Text>
        <View className="list-styled">
          <Text className="li text-justify">
            1º - assistir com devoção à santa Missa;
          </Text>
          <Text className="li text-justify">
            2º - fazer uma visita, por breve que fosse, ao Santíssimo
            Sacramento;
          </Text>
          <Text className="li text-justify">
            3º - rezar o terço do santo Rosário.
          </Text>
        </View>
        <H5 text="973 - Que se deve fazer antes do trabalho?" />
        <Text className="text-base">
          Antes do trabalho, convém oferecê-lo a Deus, dizendo do coração:
          "Senhor, eu Vos ofereço este trabalho, dai-me a vossa bênção".
        </Text>
        <H5 text="974 - Para que fim se deve trabalhar?" />
        <Text className="text-base">
          Deve-se trabalhar para glória de Deus e para fazer a sua vontade.
        </Text>
        <H5 text="975 - Que convém fazer antes da refeição?" />
        <Text className="text-base">
          Antes da refeição convém fazer o sinal da Cruz, estando de pé, e
          depois dizer com devoção: "Senhor, abençoai-nos a nós e ao alimento
          que vamos tomar, para nos conservarmos no vosso santo serviço".
        </Text>
        <H5 text="976 - Depois da refeição, que convém fazer?" />
        <Text className="text-base">
          Depois da refeição, convém fazer o sinal da Cruz, e dizer: "Senhor, eu
          Vos dou graças pelo alimento que me destes; fazei-me digno de
          participar da mesa celeste".
        </Text>
        <H5 text="977 - Quando nos vemos atormentados por alguma tentação, que devemos fazer?" />
        <Text className="text-base">
          Quando nos vemos atormentados por alguma tentação, devemos invocar com
          fé o Santíssimo Nome de Jesus ou de Maria, ou recitar fervorosamente
          alguma oração jaculatória, como, por exemplo: "Dai-me a graça, Senhor,
          que eu nunca Vos ofenda"; ou então fazer o sinal da Cruz, evitando
          porém que as outras pessoas, pelos sinais externos, suspeitem da
          tentação.
        </Text>
        <H5 text="978 - Quando uma pessoa reconhece ou duvida que cometeu algum pecado, que deve" />
        <Text className="text-base">
          fazer? Quando uma pessoa reconhece, ou duvida que cometeu algum
          pecado, convém fazer imediatamente um ato de contrição, e procurar
          confessar-se quanto antes.
        </Text>
        <H5 text="979 - Quando fora da Igreja se ouve o sinal de elevação da hóstia na Missa solene, ou da bênção do Santíssimo Sacramento, que se deve fazer?" />
        É bom fazer, ao menos com o coração, um ato de adoração, dizendo, por
        exemplo: "Graças e louvores se dêem a todo o momento ao Santíssimo e
        diviníssimo Sacramento".
      </Text>
      <H5 text="980 - Que se deve fazer quando tocam às Ave-Marias, pela manhã, ao meio-dia e à noite?" />
      <Text className="text-base">
        Ao toque das Ave-Marias, o bom cristão recita o Anjo do Senhor com três
        Ave- Marias.
      </Text>
      <H5 text="981 - A noite, antes de deitar, que devemos fazer?" />
      <Text className="text-base">
        À noite, antes de deitar, convém pôr-nos, como pela manhã, na presença
        de Deus, recitar devotamente as mesmas orações, fazer um breve exame de
        consciência, e pedir perdão a Deus dos pecados cometidos durante o dia.
      </Text>
      <H5 text="982 - Que haveis de fazer antes de adormecer?" />
      <Text className="text-base">
        Antes de adormecer, farei o sinal da Cruz, pensarei que posso morrer
        naquela noite, e oferecerei o coração a Deus, dizendo: "Meu Senhor e meu
        Deus, eu Vos dou todo o meu coração. Trindade Santíssima, concedei-me a
        graça de bem viver e de bem morrer. Jesus, Maria e José eu Vos encomendo
        a minha alma".
      </Text>
      <H5 text="983 - Além das orações da manhã e da noite, por que outra forma se pode recorrer a Deus no decurso do dia?" />
      <Text className="text-base">
        No decurso do dia pode-se invocar a Deus frequentemente com outras
        orações breves, que se chamam jaculatórias.
      </Text>
      <H5 text="984 - Dizei algumas jaculatórias." />
      <View className="list-styled">
        <Text className="li text-justify">1º - Senhor, valei-me;</Text>
        <Text className="li text-justify">
          2º - Senhor, seja feita a vossa santíssima vontade;
        </Text>
        <Text className="li text-justify">
          3º - Meu Jesus, eu quero ser todo vosso;
        </Text>
        <Text className="li text-justify">4º - Meu Jesus, misericórdia;</Text>
        <Text className="li text-justify">
          5º - Doce Coração de Jesus, que tanto nos amais, fazei que eu Vos ame
          cada vez mais;
        </Text>
        <Text className="li text-justify">
          6º - Doce Coração de Maria sede minha salvação.
        </Text>
      </View>
      <H5 text="985 - É útil recitar, durante o dia, muitas jaculatórias?" />
      <Text className="text-base">
        É muito útil recitar, durante o dia, muitas jaculatórias, e podem
        recitar-se também com o coração, sem proferir palavras, caminhando,
        trabalhando, etc.
      </Text>
      <H5 text="986 - Além das orações jaculatórias, em que outra coisa deveria exercitar-se com frequência o cristão?" />
      <Text className="text-base">
        Além das orações jaculatórias, o cristão deveria exercitar-se na
        mortificação cristã.
      </Text>
      <H5 text="987 - Que quer dizer mortificar-se?" />
      <Text className="text-base">
        Mortificar-se quer dizer privar-se, por amor de Deus, daquilo que
        agrada, e aceitar o que desagrada aos sentidos ou ao amor próprio.
      </Text>
      <H5 text="988 - Quando é o Santíssimo Sacramento levado a um enfermo, que se deve fazer?" />
      <Text className="text-base">
        Quando é o Santíssimo Sacramento levado a algum enfermo, devemos, sendo
        possível, acompanhá-Lo com modéstia e recolhimento; e, se não é possível
        acompanhá-Lo, fazer um ato de adoração em qualquer lugar que nos
        encontremos, e dizer: "Consolai, Senhor, este enfermo, e concedei-lhe a
        graça de se conformar com a vossa santíssima vontade. e de conseguir a
        sua salvação".
      </Text>
      <H5 text="989 - Ouvindo tocar o sino pela agonia de algum moribundo, que haveis de fazer?" />
      <Text className="text-base">
        Ouvindo tocar o sino pela agonia de algum moribundo, irei, se puder, à
        igreja orar por ele; e, não podendo, encomendarei a Nosso Senhor a sua
        alma, pensando que dentro em breve tempo hei de encontrar-me também eu
        naquele estado.
      </Text>
      <H5 text="990 - Ao ouvir sinais pela morte de alguém, que haveis de fazer?" />
      <Text className="text-base">
        Ao ouvir sinais pela morte de alguém, procurarei rezar um De profundis
        ou um Réquiem, ou um Padre-Nosso e uma Ave-Maria, pela alma daquele
        defunto, e renovarei o pensamento da morte.
      </Text>
    </PageWrapper>
  );
}
