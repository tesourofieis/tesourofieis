import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1108() {
  return (
    <PageWrapper>
      <H1 text="Os Quatro S. S. Mártires Coroados, a 8 de Novembro" />

      <Typography className="comment">
        Estes Santos eram quatro irmãos, cujos nomes foram muito tempo ignorados. Receberam o nome
        de 4 coroados porque obtiveram a palma do martírio e a corda no céu no ano de 304.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Mártyres fortes in sua confessióne
          cognóvimus, pios apud te in nostra intercessióne sentiámus. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Reconhecendo nós, ó Deus omnipotente, a fortaleza dos vossos gloriosos Mártires na
          confissão da fé, fazei, Vos suplicamos, que sintamos junto de Vós a sua pia intercessão em
          nosso favor. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Benedíctio tua. Dómine, larga descéndat: quæ et múnera nostra, deprecántibus sanctis
          Martýribus tuis, tibi reddat accépta, et nobis sacraméntum redemptiónis effíciat. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a vossa bênção, Senhor, desça magnanimamente sobre nós; e que pelas preces dos vossos
          Santos Mártires Vos sejam agradáveis as nossas ofertas, mudando-as em nosso favor em
          sacramento de redenção. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Cœléstibus refécti sacraméntis et gáudiis: súpplices te, Dómine, deprecámur; ut, quorum
          gloriámur triúmphis, protegámur auxíliis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Alentados com os sacramentos e as delícias celestiais, Vos suplicamos humildemente,
          Senhor, que sejamos protegidos com os auxílios daqueles de cujo triunfo nos gloriamos. Por
          nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
