import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page1117() {
  return (
    <PageWrapper>
      <H1 text="S. Gregório Taumaturgo, B. e C., a 17 de Novembro" />

      <Typography className="comment">
        Gregorio nasceu em Neocesaréa, no Ponto, pelo ano de 200, e foi feito
        bispo de sua cidade natal. Célebre por sua santidade e doutrina, ainda o
        foi mais pelos prodígios e milagres multiplicados por Deus no curso de
        sua vida, de tal modo que foi chamado o Taumaturgo, isto é, o operador
        de milagres. Uma vez, pondo em prática a palavra de Nosso Senhor, citada
        no Evangelho deste dia, ordenou a uma montanha que recuasse a fim de dar
        o espaço necessário para a construção de uma igreja e a ordem foi
        executada. Morreu em 276.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/11confessorespontifices1">
          Missa Státuit ei
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Evangelho" />

      <Typography className="em">Mc. 11, 22-24</Typography>

      <Language>
        <Typography className="latin">
          <Typography className="cross"> ✠ </Typography> Sequéntia sancti Evangélii secúndum
          Marcum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="cross"> ✠ </Typography> Continuação do santo Evangelho
          segundo S. Marcos.
        </Typography>
        <Typography className="latin">
          In illo témpore: Respóndens Jesus discípulis suis, ait illis: Habéte
          fidem Dei. Amen, dico vobis, quia, quicúmque díxerit huic monti:
          Tóllere et míttere in mare, et non hæsitáverit in corde suo, sed
          credíderit, quia, quodcúmque díxerit, fiat, fiet ei. Proptérea dico
          vobis: Omnia quæcúmque orántes pétitis, crédite quia accipiétis, et
          evénient vobis.
        </Typography>
        <Typography className="vernacular">
          Naquele tempo, Jesus disse aos seus discípulos: «Tende fé em Deus. Em
          verdade vos digo que todo aquele que disser a esta montanha «tira-te e
          lança-te no mar», e disser isto sem hesitar no seu coração e até
          acreditando que tudo o que disse acontecerá, fique certo de que o verá
          cumprir-se. Eis porque vos digo: Tudo quanto pedirdes na oração
          acreditai que o alcançareis e vereis».
        </Typography>
      </Language>
    </PageWrapper>
  );
}
