import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0119Canuto() {
  return (
    <PageWrapper>
      <H1 text="S. Canuto, Rei e Mártir, a 19 de Janeiro" />

      <Typography className="aside">
        Restantes partes da Missa: como no{" "}
        <Link className="link" href="/missal/comum/10martires">
          Comum de muitos Mártires,
        </Link>{" "}
        exceto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui ad illustrándam Ecclésiam tuam beátum Canútum regem martýrii palma et gloriósis
          miráculis decoráre dignátus es: concéde propítius; ut, sicut ipse Domínicæ passiónis
          imitátor fuit, ita nos, per ejus vestígia gradiéntes, ad gáudia sempitérna perveníre
          mereámur. Per eúndem Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que para glória da vossa Igreja Vos dignastes honrar o B. Rei Canuto com a palma
          do martírio e o dom de insignes milagres, concedei-nos propício que, assim como ele imitou
          a Paixão do Senhor, assim também nós, segundo os seus vestígios, mereçamos alcançar os
          sempiternos gozos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Accépta sit in conspéctu tuo, Dómine, nostra devótio: et ejus nobis fiat supplicatióne
          salutáris, pro cujus sollemnitáte defértur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Recebei benigno, Senhor, esta oferta da nossa piedade, e que ela nos alcance a salvação,
          por intercessão das preces daquele em cuja festa Vo-la apresentamos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur
          cultum, intercedénte beáto Canúto Mártyre tuo, sentiámus efféctum. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Permiti, ó Senhor, nosso Deus, que, assim como nos alegrámos, comemorando nesta vida pelo
          nosso ministério a memória dos vossos Santos, assim também tenhamos na eternidade a
          felicidade de os contemplar. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
