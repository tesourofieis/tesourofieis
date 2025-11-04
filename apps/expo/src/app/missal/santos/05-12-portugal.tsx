import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0512Portugal() {
  return (
    <PageWrapper>
      <H1 text="B. Joana, Princesa, a 12 de Maio" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui inter regáles delicias, et mundi illécebras beátam Joánnam
          Vírginem tuam virtúte constántiæ roborásti: quæsumus; ut, ejus
          intercessióne fidéles tui terréna despiciant, et ad cæléstia semper
          aspirent. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que, no meio das delícias da corte e dos atractivos do mundo,
          fortalecestes com a virtude da constância a vossa B. Joana, permiti,
          Vos suplicamos, que pela sua intercessão os vossos fiéis desprezem os
          bens terrenos e aspirem sempre aos celestiais. Por nosso Senhor Jesus
          Cristo...
        </Typography>
      </Language>

      <H3 text="Oração Comemoração S. S. Mártires" />

      <Language>
        <Typography className="latin">
          Semper nos, Dómine, Mártyrum tuórum Nérei, Achillei, Domitíllæ atque
          Pancrátii fóveat, quǽsumus, beáta sollémnitas: et tuo dignos reddat
          obséquio. Per Dóminium nostrum...
        </Typography>
        <Typography className="vernacular">
          Fazei, Senhor, Vos suplicamos, que a feliz solenidade dos vossos
          Mártires Néreo, Aquiles, Domitila e Pancrácio nos reanime e nos torne
          dignos de Vos servirmos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta Comemoração S. S. Mártires" />

      <Language>
        <Typography className="latin">
          Sanctórum Martyrum tuórum, quǽsumus. Dómine, Nérei, Achíllei,
          Domitíllæ atque Pancrátii sit tibi grata conféssio: quæ et múnera
          nostra comméndet, et tuam nobis indulgéntiam semper implóret. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Dignai-Vos receber, Senhor, com ânimo agradável a confissão dos vossos
          Santos Mártires Néreo, Aquiles, Domitila e Pancrácio; e que ela Vos
          disponha a aceitardes as nossas ofertas e elas nos tornem sempre
          merecedores da vossa indulgência. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio Comemoração S. S. Mártires" />

      <Language>
        <Typography className="latin">
          Quǽsumus, Dómine: ut beatórum Mártyrum tuórum Nérei, Achíllei,
          Domitíllæ atque Pancrátii deprecatiónibus, sacraménta sancta, quæ
          súmpsimus, ad tuæ nobis profíciant placatiónis augméntum. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Vos pedimos, Senhor, fazei que pelas preces dos vossos Mártires Néreo,
          Aquiles, Domitila e Pancrácio os sagrados mystérios, que recebemos,
          Vos tornem cada vez mais propício para connosco. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
