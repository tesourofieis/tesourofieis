import { Link } from "expo-router";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import NuncDimittis from "./../../canticos/sacros/nuncdimittis";
import TeLucis from "./../../canticos/sacros/telucis";
import ActoCaridade from "./../oracoes/actocaridade";
import ActoContricao from "./../oracoes/actocontricao";
import ActoEsperanca from "./../oracoes/actoesperanca";
import ActoFe from "./../oracoes/actofe";

export default function PageOracaonoite() {
  return (
    <PageWrapper>
      <H1 text="Oração da Noite" />
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Convérte nos, Deus,
          salutáris noster.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Convertei-nos, ó
          Deus nosso Salvador.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et avérte iram tuam
          a nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E afastai de nós a
          vossa ira.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Deus, in adjutórium
          meum inténde.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Deus, vinde em nosso
          auxílio.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dómine, ad
          adjuvándum me festína.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor,
          socorrei-nos e salvai-nos.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Glória Patri, et
          Fílio, et Spirítui Sancto.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Glória ao Pai, e ao
          Filho e ao Espírito Santo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Sicut erat in
          princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Assim como era no
          princípio, agora e sempre, e por todos os séculos dos séculos. Amen.
        </Typography>
      </Language>
      <H2 text="Veni, Sancte Spíritus" />
      <Language>
        <Typography className="latin">
          Veni, Sancte Spíritus! reple tuórum corda fidélium: et tui amóris in
          eis ignem accénde.
        </Typography>
        <Typography className="vernacular">
          Vinde, ó Espírito Santo, enchei os corações dos vossos fiéis e acendei
          neles o fogo do vosso amor.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Emitte Spíritum
          tuum, et creabúntur.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Enviai o vosso
          Espírito e tudo será criado.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et renovábis faciem
          terræ.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E renovareis a face
          da terra.
        </Typography>
      </Language>
      <H3 text="Breve lição:" />
      <Typography className="vernacular">
        Sede sóbrios e vigilantes, pois o demónio gira em torno de vós,
        procurando devorar-vos. Resisti-lhe, sendo fortes na fé. E Vós, Senhor,
        tende piedade de nós.
      </Typography>
      <Typography className="aside">
        Coloquemo-nos na presença de Deus e adoremo-Lo humildemente:
      </Typography>
      <Typography className="vernacular">
        Deus meu, Senhor dos céus e da terra! Eu aqui me prostro diante de Vós.
        Com todos os Anjos e Santos eu Vos adoro e Vos amo com todo o coração.
        Dou-Vos graças por me terdes criado, feito Cristão e conservado neste
        dia. Perdoai-me os pecados que hoje cometi e, se algum bem fiz,
        aceitai-o. Guardai-me durante o repouso e livrai-me dos perigos. Vossa
        graça esteja sempre comigo e com os que me são caros.
      </Typography>
      <Typography className="aside">
        <Typography className="vernacular">Em seguida rezar: </Typography>
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/painosso"
        >
          Pai Nosso,
        </Link>{" "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/avemaria"
        >
          Ave Maria,
        </Link>{" "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/gloria"
        >
          Glória,
        </Link>{" "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/simboloapostolos"
        >
          Símbolo dos Apóstolos,
        </Link>{" "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/confesso"
        >
          Confesso
        </Link>{" "}
        . Depois o Hino:
      </Typography>
      <H2 text="Hino Te lucis" />
      <TeLucis />
      <Typography className="aside">
        Examina que pecados cometeste neste dia, por pensamentos, palavras,
        actos ou omissões. Depois diz o{" "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/actofe"
        >
          Acto de Fé
        </Link>
        {", "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/actoesperanca"
        >
          de Esperança
        </Link>
        {", "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/actocaridade"
        >
          de Caridade
        </Link>
        {" e "}
        <Link
          style={{ textDecorationLine: "underline" }}
          href="/devocionario/oracoes/actocontricao"
        >
          de Contrição
        </Link>
        {"."}
      </Typography>
      <Typography className="vernacular">
        Vos ofereço, Senhor minha vida, obras, e trabalhos em satisfação de
        todos meus pecados e assim como Vos suplico, assim confio em vossa
        bondade e misericórdia infinitas que mos perdoareis pelos méritos de
        vosso preciosíssimo sangue, paixão e morte e me dareis graça para
        emendar-me e perseverar em vosso santo serviço até o fim de minha vida.
        Amen.
      </Typography>
      <H2 text="Cântico Nunc Dimittis" />
      <NuncDimittis />
      <Typography className="vernacular">
        Visitai esta morada, Senhor, Vos suplicamos, e dignai-Vos afastar para
        bem longe dela todas as insídias do inimigo; que os vossos Anjos nela
        habitem para nos conservarem na paz, e que a vossa bênção nos guarde
        sempre.
      </Typography>
      <Typography className="vernacular">
        Deus Pai, abençoai-nos; Jesus Cristo, defendei e guardai-nos; Espírito
        Santo, iluminai e santificai-nos esta noite e para sempre; e às almas
        dos fiéis falecidos, dai-lhes, Senhor, o eterno descanso entre os
        esplendores da luz eterna. Que descansem em paz.
      </Typography>
      <Typography className="vernacular">
        Santo Anjo do Senhor, meu zeloso guardador, pois que a ti me confiou a
        Piedade divina: hoje e sempre me governa, rege, guarda e ilumina.
      </Typography>
      <Typography className="vernacular">
        Protegei-me à sombra das vossas asas e abençoai, Senhor, o meu repouso a
        fim de que renove as minhas forças, para melhor Vos servir e amar.
      </Typography>
      <Typography className="vernacular">
        E que a paz e a bênção de Deus Todo-Poderoso, Pai, Filho
        <Typography className="cross"> ✠ </Typography> e Espírito Santo, desça
        sobre nós e permaneça para sempre connosco. Amen.
      </Typography>
    </PageWrapper>
  );
}
