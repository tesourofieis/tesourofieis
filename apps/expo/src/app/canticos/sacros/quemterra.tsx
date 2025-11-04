import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageQuemterra() {
  return (
    <PageWrapper>
      <H1 text="Quem terra" />

      <Language>
        <Typography className="latin">
          Quem terra, pontus, sidera Colunt, adorant, praedicant, Trinan
          regentem machinam, Claustrum Mariae bajula.
        </Typography>
        <Typography className="vernacular">
          Quem terra, mar, estrelas, amplia, adora, louva, reinando com tecido
          triplo, encerra-se no ventre de Maria.
        </Typography>
        <Typography className="latin">
          Cui Luna, Sol, et omnia deserviunt per tempora, perfusa cæli gratia,
          gestant Puellæ viscera.
        </Typography>
        <Typography className="vernacular">
          A quem a lua, o sol e todas as coisas servem pelos tempos, pela graça
          enviada do céu, no ventre da Jovem é gestado.
        </Typography>
        <Typography className="latin">
          Beata Mater, munere, cuius supernus Artifex, mundum pugillo continens,
          ventris sub arca clausus est.
        </Typography>
        <Typography className="vernacular">
          Feliz Mãe que recebe o dom, em cujo santuário o Artista, que o mundo
          na mão contém, na arca do ventre dorme.
        </Typography>
        <Typography className="latin">
          Beata cæli nuntio, fecunda Sancto Spiritu, desideratus Gentibus, cuius
          per alvum fusus est.
        </Typography>
        <Typography className="vernacular">
          Feliz anúncio celeste, fecundado pelo Santo Espírito, O desejado das
          nações, que do ventre viria.
        </Typography>
        <Typography className="latin">
          Jesu, Tibi sit gloria, qui natus es de Virgine, cum Patre, et almo
          Spiritu, in sempiterna sæcula. Amen.
        </Typography>
        <Typography className="vernacular">
          Glória a Vós, Jesus, que nascestes da Virgem, com o Pai Eterno e o
          Espírito, pelos séculos sem fim. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
