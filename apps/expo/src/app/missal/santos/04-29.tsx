import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0429() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro de Verona, Mártir, a 29 de Abril" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/9martir">
          Missa Protexísti me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut beáti Petri Martyris tui fidem
          cóngrua devotióne sectémur; qui, pro ejúsdem fídei dilatatióne,
          martýrii palmam méruit obtinére. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos suplicamos, ó Deus, omnipotente, permiti que imitemos com
          conveniente devoção a fé do B. Pedro, vosso Mártir, que pela
          manifestação desta mesma fé mereceu alcançar a palma do martírio. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/comum/5martirnaopontifice2#epístola"
        title="Mártir não Pontífice - Missa Lætábitur justus"
      />

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Preces, quas tibi, Dómine, offérimus, intercedénte beáto Petro Mártyre
          tuo, cleménter inténde: et propugnatóres fídei sub tua protectióne
          custódi. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos, Senhor, pela intercessão do B. Pedro, vosso Mártir, ouvir
          clementemente as preces que Vos dirigimos, e acolhei sob a vossa
          protecção os defensores da fé. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Fidéles tuos, Dómine, custódiant sacraménta, quæ súmpsimus: et,
          intercedénte beáto Petro Mártyre tuo, contra omnes advérsos tueántur
          incúrsus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que os vossos fiéis, Senhor, sejam amparados com os sacramentos que
          recebemos, e que pela intercessão do B. Pedro, vosso Mártir, sejam
          protegidos contra todos os ataques do inimigo. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
