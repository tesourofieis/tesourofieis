import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1007Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Marcos, Papa e Conf., a 7 de Outubro" />

      <Typography className="comment">
        Marcos, de origem romana, ocupou a Cathedra de S. Pedro durante 8 meses sob o reinado de
        Constantino o Grande. Sucedeu a S. Silvestre e continuou, com grande zelo, o trabalho da
        organização da Igreja que esse último havia empreendido, aproveitando a longa era de paz,
        inaugurada pelo imperador. Morreu em 336.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/sumospontifices">
          Missa Si díligis me
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Exáudi, Dómine, preces nostras: et, interveniénte beáto Marco Confessóre tuo atque
          Pontífice, indulgéntiam nobis tríbue placátus et pacem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Pastor eterno, atendei propício ao vosso rebanho; e guardai-o com vossa perpétua
          protecção por intercessão do bem-aventurado Marcos, vosso Sumo Pontífice, o qual
          escolhestes como pastor de toda a Igreja. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se
          méritis de tribulatióne percepísse cognóscit auxílium. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Com as ofertas destes dons, Vos suplicamos, Senhor, iluminai benignamente a vossa Igreja,
          a fim de que não só o vosso rebanho triunfe em toda a parte, mas também pelo poder do
          vosso nome os pastores sejam bem acolhidos. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, Dómine, fidélibus pópulis Sanctórum tuórum semper veneratióne lætari: et
          eórum perpétua supplicatióne muníri. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, governai com mansidão a vossa Igreja, agora que foi alimentada com
          a sagrada refeição, a fim de que, dirigida com firme suavidade, alcance o incremento da
          sua liberdade e persista na integridade da sua doutrina. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
