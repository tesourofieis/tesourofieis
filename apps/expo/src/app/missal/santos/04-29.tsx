import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0429() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro de Verona, Mártir, a 29 de Abril" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut beáti Petri Martyris tui fidem
          cóngrua devotióne sectémur; qui, pro ejúsdem fídei dilatatióne,
          martýrii palmam méruit obtinére. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Vos suplicamos, ó Deus, omnipotente, permiti que imitemos com
          conveniente devoção a fé do B. Pedro, vosso Mártir, que pela
          manifestação desta mesma fé mereceu alcançar a palma do martírio. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/5martirnaopontifice2#epístola"
        title="Mártir não Pontífice - Missa Lætábitur justus"
      />

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Preces, quas tibi, Dómine, offérimus, intercedénte beáto Petro Mártyre
          tuo, cleménter inténde: et propugnatóres fídei sub tua protectióne
          custódi. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos, Senhor, pela intercessão do B. Pedro, vosso Mártir, ouvir
          clementemente as preces que Vos dirigimos, e acolhei sob a vossa
          protecção os defensores da fé. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Fidéles tuos, Dómine, custódiant sacraménta, quæ súmpsimus: et,
          intercedénte beáto Petro Mártyre tuo, contra omnes advérsos tueántur
          incúrsus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que os vossos fiéis, Senhor, sejam amparados com os sacramentos que
          recebemos, e que pela intercessão do B. Pedro, vosso Mártir, sejam
          protegidos contra todos os ataques do inimigo. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
