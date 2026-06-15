import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1121() {
  return (
    <PageWrapper>
      <H1 text="Apresentação da B. Virgem Maria, a 21 de Novembro" />

      <Typography className="comment">
        Depois de ter celebrado no dia 8 de Setembro a Natividade da SSma Virgem, e quatro dias mais
        tarde a festa do Santo Nome de Maria, que lhe foi imposto logo depois de seu nascimento, o
        Ciclo celebra hoje, a Apresentação no Templo da abençoada menina. Essas três primeiras
        festas do Ciclo Mariano fazem eco ao Ciclo Cristológico que celebra a festa do Natal de
        Jesus a 25 de Dezembro, a imposição do Santo Nome a 2 de Janeiro e a sua Apresentação no
        Templo a 2 de Fevereiro. A festa da Apresentação de Maria repousa sobre uma piedosa
        tradição, oriunda de dois Evangelhos apócrifos nos quais se conta ter sido a Santíssima
        Virgem apresentada no templo de Jerusalém, com a idade de três anos, e ter ali vivido com
        outras donzelas, dirigidas pelas santas mulheres. No século VI, comemorava-se esse facto no
        Oriente, e o imperador bizantino Miguel Commeno o menciona numa constituição em 1166. Um
        cavalheiro francês, de nome Philippe de Maizières, adido à corte do rei de Chipre, na
        qualidade de chanceler, tendo sido enviado em 1372, como embaixador junto ao Papa Gregorio
        XI, em Avignon, narrou-lhe com que magnificência era celebrada essa festa na Grécia, no dia
        de Novembro, Sua Santidade introduziu-a em Avignon e Sixto V tornou-a obrigatória na Igreja
        romana, em 1585. Clemente VIII elevou-a à ordem de duplo maior e remodelou o seu ofício.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/29missamaria3">
          Missa Salve, sancta Parens da Virgem Maria,
        </Link>
        excepto:
      </Typography>

      <LinkCard
        href="/missal/comum/26festasmaria1"
        title="Festas da B. Virgem Maria - Missa Salve, sancta Parens"
      />

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátam Maríam semper Vírginem, Spíritus Sancti habitáculum, hodiérna die in
          templo præsentári voluísti: præsta, quǽsumus; ut, ejus intercessióne, in templo glóriæ tuæ
          præsentári mereámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que quisestes que a B. Virgem Maria, em quem habitava o Espírito Santo, fosse
          neste dia apresentada no templo, permiti pela sua intercessão que mereçamos ser
          apresentados no templo da vossa glória. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
