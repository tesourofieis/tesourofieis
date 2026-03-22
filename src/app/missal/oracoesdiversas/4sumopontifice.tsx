import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page4Sumopontifice() {
  return (
    <PageWrapper>
      <H1 text="4.ª Pelo Sumo Pontífice" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, ómnium fidélium pastor et rector, fámulum tuum{" "}
          <Typography className="latin">N.</Typography>, quem pastórem Ecclésiæ tuæ præésse
          voluísti, propítius réspice: da ei, quǽsumus, verbo et exémplo, quibus præest, profícere;
          ut ad vitam, una cum grege sibi crédito, pervéniat sempitérnam. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, pastor e guia de todos os fiéis, olhai propício para o vosso servo{" "}
          <Typography className="vernacular">N.</Typography>, que constituístes Pastor da vossa
          Igreja; concedei-lhe, Vos suplicamos, a graça de edificar os seus súbditos com suas
          palavras e exemplos, a fim de que com o rebanho, que lhe foi confiado, alcance a vida
          eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Oblátis, quǽsumus, Dómine, placáre munéribus: et fámulum tuum{" "}
          <Typography className="latin">N.</Typography>, quem pastórem Ecclésiæ tuæ præésse
          voluísti, assídua protectióne gubérna. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deixai-Vos aplacar, Senhor, Vos suplicamos, com a oferta destes dons; e governai com vossa
          contínua protecção o vosso servo <Typography className="vernacular">N.</Typography>, que
          constituístes Pastor da vossa Igreja. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Hæc nos, quǽsumus, Dómine, divíni sacraménti percéptio prótegat: et fámulum tuum{" "}
          <Typography className="latin">N.</Typography>, quem pastórem Ecclésiæ tuæ præésse
          voluísti; una cum commísso sibi grege, salvet semper et múniat. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos rogamos, permiti que a comunhão deste divino sacramento nos proteja; e salve e
          defenda, com o rebanho que lhe foi confiado, o vosso servo{" "}
          <Typography className="vernacular">N.</Typography>, que constituístes Pastor da vossa
          Igreja. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
