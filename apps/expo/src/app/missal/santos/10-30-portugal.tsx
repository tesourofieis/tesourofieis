import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1030Portugal() {
  return (
    <PageWrapper>
      <H1 text="Vitória dos Cristãos, a 30 de Outubro, Missa de Acção de Graças pela vitória que os cristãos alcançaram na luta contra os sarracenos" />
      <Typography className="aside">
        Evangelho, ofertório e secreta como na Missa da
        <Link href="/missal/santos/05-03">Invenção da Santa Cruz.</Link>
      </Typography>
      <H3 text="Intróito" />
      <Typography className="vernacular">
        Alegremo-nos em Deus em todo este dia: e louvemos eternamente o vosso
        nome, Senhor; pois salvastes-nos dos nossos inimigos e confundistes os
        que nos odiavam. Ó Deus, ouvimos com os nossos ouvidos e nossos país
        contaram-nos os feitos que praticastes nestes dias e nos dias passados.
        <Typography className="versicle"> ℣. </Typography>
        Glória ao Pai...
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Ó Deus, que pela vossa Cruz quisestes conceder ao povo, que em Vós crê,
        a vitória contra os inimigos, permiti pela vossa piedade, Vos pedimos,
        que aqueles que adoram a Cruz, alcancem sempre a vitória na terra e o
        gozo eterno nos céus. Ó Vós, que viveis e reinais...
      </Typography>
      <H3 text="Epístola" />
      <Typography className="vernacular">
        Lição do Livro dos Macabeus.
      </Typography>
      <Typography className="vernacular">
        Naqueles dias, Macabeu esperava sempre com toda a confiança que um
        socorro lhe viria de Deus. E exortava os seus a que se não amedrontassem
        com a chegada das nações, mas que se lembrassem dos socorros, que lhes
        haviam sido dados pelo céu, e esperassem, agora, que a vitória lhes
        viesse do Omnipotente. Ora, quando todos esperavam já a futura decisão
        do combate, estando à vista o inimigo e o seu exército formado em
        batalha, os elefantes e a cavalaria dispostos no lugar competente,
        considerando Macabeu aquela multidão de gentes, aquele aparato de armas
        tão diversas, que vinha contra eles, e a ferocidade dos animais, ergueu
        as mãos ao céu e invocou o Senhor, autor de todos os prodígios, que dá a
        vitória aos que a merecem, não pelo poder das armas, mas a quem Lhe
        apraz. Disse, então, Macabeu: «Ó Senhor, que no tempo de Ezequias, rei
        de Judá, mandastes o vosso Anjo e matastes cento e oitenta e cinco mil
        homens dos exércitos de Senaqueribe, mandai agora também, diante de nós,
        o vosso bom Anjo, para que inspire o temor e o tremor da grandeza do
        vosso braço, e aqueles que, blasfemando vosso nome, vêm atacar o vosso
        povo se amedrontem». Logo, Judas e os companheiros, invocando Deus,
        ergueram-se e, pelejando e encomendando-se ao Senhor, mataram não menos
        de trinta e cinco mil homens, sentindo-se alegres pela presença de Deus.
        Acabada a peleja, quando regressavam jubilosos, souberam que Nicanor
        tinha caído morto, coberto com suas armas. Então, com forte alarido e
        estrondosas ovações, aclamaram o omnipotente Senhor e decretaram que não
        mais passasse aquele dia sem que se realizasse festiva comemoração.
      </Typography>
      <H3 text="Gradual" />
      <Typography className="vernacular">
        Eis o dia que o Senhor criou. Exultemos e alegremo-nos n’Ele. Assim
        devem cantar aqueles que o Senhor resgatou e tirou das mãos dos
        inimigos. Aleluia, aleluia. Cantemos em honra do Senhor, pois assinalou
        gloriosamente a sua grandeza, arrojando ao mar o cavalo e o cavaleiro.
        Aleluia.
      </Typography>
      <H3 text="Comúnio" />
      <Typography className="vernacular">
        Com o vosso poder, Senhor, assinalou-se a vossa dextra que esmagou o
        inimigo. Pela vossa misericórdia, fostes o guia do povo, que resgatastes
        e conduzistes pelo vosso poder ao vosso santo tabernáculo.
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Ouvi-nos, ó Deus, nosso Salvador; e pela vitória da Santa Cruz
        livrai-nos de todos os perigos. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
