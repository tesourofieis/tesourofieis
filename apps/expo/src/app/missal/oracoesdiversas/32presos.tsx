import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page32Presos() {
  return (
    <PageWrapper>
      <H1 text="32.ª Pelos presos e cativos" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Petrum Apóstolum, a vínculis absolútum, illǽsum abíre
          fecísti: fámuli tui in captivitáte pósiti víncula absólve; cumque
          ipsíus méritis illǽsum abíre concéde. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que livrastes da cadeia o B. Apóstolo Pedro e o restituístes
          são e salvo à liberdade, quebrai hoje os laços que detêm em cativeiro
          o vosso servo, e, pelos méritos do vosso Apóstolo, concedei-lhe a
          liberdade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Super has, quǽsumus, Dómine, hóstias benedíctio copiósa descéndat: quæ
          captívi hujus víncula solvat, et de ejus liberatióne nos cito
          lætíficet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos imploramos, Senhor, abençoai copiosamente estas oblatas; e que
          esta bênção livre das cadeias este pobre cativo e lhe proporcione bem
          cedo a alegria da liberdade. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Preces nostras, quǽsumus, Dómine, cleménter exáudi: et per hæc
          sacraménta, quæ súmpsimus, fámulum tuum a vínculis suæ captivitátis
          absólve. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Ouvi clemente as nossas preces, Senhor, Vos suplicamos; e, pela
          virtude destes Sacramentos, que acabamos de receber, dignai-Vos livrar
          o vosso servo dos laços do cativeiro. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
