import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0601() {
  return (
    <PageWrapper>
      <H1 text="S. Ângela Merícia, Virgem, a 1 de Junho" />

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
          Deus, qui novum per beátam Angelam sacrárum Virginum collégium in Ecclésia tua floréscere
          voluísti: da nobis, ejus intercessióne, angélicis móribus vívere; ut, terrénis ómnibus
          abdicátis, gáudiis pérfrui mereámur ætérnis. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que pela B. Ângela quisestes que florescesse na vossa Igreja uma nova associação
          de piedosas virgens, concedei-nos a graça, pela sua intercessão, de vivermos angélicamente
          na terra, a fim de que, renunciando a todas as coisas terrenas, mereçamos gozar as
          alegrias eternas. Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Typography className="latin">
          Hóstia, Dómine, quam tibi beátæ Angelæ memóriam recoléntes offérimus, et nostræ pravitatis
          véniam implóret, et grátiæ tuæ nobis dona concíliet. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Que a hóstia, Senhor, que Vos oferecemos em honra da memória da B. Ângela, nos obtenha
          misericórdia por causa dos nossos desvarios e nos alcance os dons da vossa graça. Por
          nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Typography className="latin">
          Cœlésti alimónia refécti, súpplices te, Dómine, deprecámur: ut, beátæ Angelæ précibus et
          exémplo ab omni labe mundáti, et córpore tibi placeámus et mente. Per Dóminum nostrum...
        </Typography>
        <Typography className="vernacular">
          Havendo sido confortados com este alimento celestial, humildemente Vos imploramos, Senhor,
          que, pelas preces da B. Ângela e seguindo o seu exemplo, sejamos purificados de todas as
          manchas e Vos sejamos agradáveis no corpo e na alma. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
