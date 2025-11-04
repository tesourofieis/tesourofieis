import { Typography } from "~/components/typography";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page17Bomtempo() {
  return (
    <PageWrapper>
      <H1 text="17.ª Para implorar o bom tempo" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Ad te nos, Dómine, clamántes exáudi: et áëris serenitátem nobis tríbue
          supplicántibus; ut, qui juste pro peccátis nostris afflígimur,
          misericórdia tua præveniénte, cleméntiam sentiámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ouvi, Senhor, aqueles que por Vós clamam, e, Vo-lo pedimos,
          concedei-nos tempo sereno nos astros, a fim de que nós, que fomos
          punidos justamente pelos nossos pecados, sejamos remediados pela vossa
          misericórdia e sintamos a vossa clemência Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Prævéniat nos, quǽsumus, Dómine, grátia tua semper et subsequátur: et
          has oblatiónes, quas pro peccátis nostris nómini tuo consecrándas
          deférimus, benígnus assúme; ut, per intercessiónem Sanctórum tuórum,
          cunctis nobis profíciant ad salútem. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, Vos suplicamos, permiti que a vossa graça nos remedeie e nos
          acompanhe sempre; e que Vos digneis aceitar benignamente estas
          oblatas, que vamos consagrar em honra do vosso santo nome, como
          reparação dos nossos pecados, a fim de que por intercessão dos vossos
          Santos a todos aproveitem para a salvação. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Quǽsumus, omnípotens Deus, cleméntiam tuam: ut inundántiam coérceas
          ímbrium, et hilaritátem vultus tui nobis impertíri dignéris. Per
          Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó omnipotente Deus, pedimos à vossa clemência se digne suspender as
          torrentes da chuva, que nos inunda, e Vos digneis mostrar-nos aspecto
          agradável. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
