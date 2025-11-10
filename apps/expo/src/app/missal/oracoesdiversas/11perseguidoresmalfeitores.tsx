import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page11Perseguidoresmalfeitores() {
  return (
    <PageWrapper>
      <H1 text="11.ª Contra os nossos perseguidores e malfeitores" />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Hóstium nostrórum, quǽsumus, Dómine, elíde supérbiam: et eórum
          contumáciam déxteræ tuæ virtúte prostérne. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Esmagai, Senhor, o orgulho dos nossos inimigos, e, Vos suplicamos, com
          o poder da vossa dextra, reprimi a sua arrogância. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hujus, Dómine, virtúte mystérii, et a própriis mundémur occúltis, et
          ab inimicórum liberémur insídiis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Senhor, que pela virtude deste mystério sejamos purificados das nossas
          manchas ocultas e livres das ciladas dos nossos inimigos. Por nosso
          Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Protéctor noster, áspice. Deus, et ab inimicórum nos defénde
          perículis: ut, omni perturbatióne submóta, líberis tibi méntibus
          serviámus. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que sois o nosso protector, dignai-Vos lançar sobre nós os
          vossos olhares, livrando-nos dos perigos com que nos afligem os nossos
          inimigos, a fim de que, sendo afastados todos os motivos de
          perturbação, nos empreguemos no vosso serviço, livres de todos os
          cuidados. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
