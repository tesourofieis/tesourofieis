import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H2 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0228CoimbraLamegoLeiria() {
  return (
    <PageWrapper>
      <H1 text="Trasladação de S. Agostinho, Bispo, Confessor e Doutor, a 27 de Fevereiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/08-28">
          Missa na festa
        </Link>{" "}
        , excepto:
      </Typography>

      <H2 text="Oração" />

      <Language>
        <Typography className="latin">
          Magníficet te, Dómine, sancti Confessóris tui atque Pontíficis Augustíni veneránda
          Tranlátio: qua illi honórem, et nobis opem, ineffábili providéntia contulísti. Per
          Dominum...
        </Typography>
        <Typography className="vernacular">
          Senhor, que a veneranda Trasladação de Santo Agostinho, Vosso Confessor e Pontífice, nos
          engrandeça, a qual, por Vossa inefável providência, deu a ele glória e a nós socorro. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Secreta" />

      <Language>
        <Typography className="latin">
          Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per intercessiónem beáti
          Augustíni Confessóris tui atque Pontíficis, ad perpétuam nobis fac proveníre salútem. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Deus omnipotente e sempiterno, fazei que as dádivas oferecidas à Vossa majestade por
          intercessão do B. Agostinho, Vosso Confessor e Pontífice, nos façam chegar à salvação
          eterna. Por nosso Senhor...
        </Typography>
      </Language>

      <H2 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens Deus: ut beáti
          Augustíni Confessóris tui atque Pontíficis nos ubíque orátio ádjuvet; in cujus
          Translatióne hæc tuæ obtúlimus majestáti. Per Dóminum nostram...
        </Typography>
        <Typography className="vernacular">
          Depois de havermos recebido os sacramentos da nossa salvação, concedei-nos, omnipotente
          Deus, Vos imploramos, que em toda a parte nos socorra a oração do B. Agostinho, Vosso
          Confessor e Pontífice, em cuja Trasladação oferecemos estes dons à Vossa majestade. Por
          nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
