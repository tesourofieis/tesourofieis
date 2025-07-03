import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1106Portugal() {
  return (
    <PageWrapper>
      <H1 text="S. Nuno de Santa Maria, a 6 de Novembro" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, qui beáto Nónio bonum certámen certáre dedísti, eúmque sui ac
          mundi contemptórem exímium effecísti: concéde nobis fámulis tuis; ut,
          devíctis mundi cupiditátibus, in cælésti pátri perpétuo gaudeámus. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que permitistes ao B. Nuno «combater o bom combate» e o
          tornastes num exímio dominador de si e do mundo, a nós, que somos
          vossos servos, concedei-nos que, depois de havermos vencido as cobiças
          do mundo, nos alegremos perpetuamente na pátria celestial. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/16abades#epístola"
        title="Abades - Missa Os justi"
      />

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/16abades#evangelho"
        title="Abades - Missa Os justi"
      />

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Tuórum mílitum, Rex omnípotens, virtútem corróborat; ut, quos in hujus
          mortalitátis stádio, beáti Nónii Confessóris tui vita præclára
          lætíficat: consummáto cursu certámis, per hæc quæ offérimus,
          immortalitátis bravíum comprehéndant. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Rei omnipotente, corroborai o valor dos vossos soldados, para que
          aqueles que nesta arena mortal se alegram com a preclara vida do B.
          Nuno, vosso Confessor, terminado o tempo do combate, alcancem,
          mediante esta hóstia, que Vos oferecemos, o prémio da imortalidade.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis
          sacraméntis; intercedénte Beáto Nónio Confessóre tuo, tríbuas ab
          hóstium insídiis júgiter liberári, et contra ómnia advérsa contínua
          protectióne muníri. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó omnipotente Deus, humildemente Vos rogamos que àqueles que foram
          alimentados com vossos sacramentos Vos digneis conceder, por
          intercessão do B. Nuno, vosso Confessor, sejam sempre livres das
          insídias dos seus inimigos e pela contínua protecção do mesmo sejam
          fortalecidos contra todas as adversidades. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
