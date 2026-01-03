import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1120() {
  return (
    <PageWrapper>
      <H1 text="S. Félix de Valois, Conf., a 20 de Novembro" />

      <Typography className="comment">
        São Felix de Valois, sustentado por Deus, instituiu, com São João da
        Matha, a Ordem dos Trinitários para o resgate dos cativos. Felix
        pertencia à familia real de França; distinguiu-se desde a infância por
        sua compaixão para com os desgraçados. Desejoso de abandonar toda
        pretensão ao trono, deixou tudo quanto possuía (Ev.) e retirou-se para
        um deserto, perto de Meaux, para onde foi seguido por S. João da Matha.
        Após uma visão, ambos abandonaram a solidão e dirigiram-se a Roma.
        Inocêncio III aprovou o Instituto por eles fundado para a Redenção dos
        cativos (Or.). Para libertar os seus irmãos, estavam ambos prontos a
        suportar a fome, a sede e toda sorte de maus tratos (Ep.). Voltando à
        França, apresentou-se a Philippe Augusto, que os favoreceu com as suas
        liberalidades. O senhor de Chatillon deu-lhes um lugar chamado Cerfroi,
        onde eles fundaram o mosteiro que foi o principal de sua Ordem. São
        Felix entregou a alma a Deus no ano de 1212.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link href="/missal/comum/15confessoresnaopontifices2">
          Missa Justus ut palma,
        </Link>
        excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui beátum Felicem Confessórem tuum ex eremo ad munus rediméndi
          captívos cœlitus vocáre dignátus es: præsta, quǽsumus; ut per grátiam
          tuam ex peccatórum nostrórum captivitáte, ejus intercessióne,
          liberáti, ad cœléstem pátriam perducámur. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que, de um modo celestial, ao B. Félix, vosso Confessor, Vos
          dignastes chamar da solidão do deserto para a missão de remir os
          cativos, concedei-nos, Vos rogamos, que, sendo nós pela sua
          intercessão e pela vossa graça, livres do cativeiro dos nosso pecados,
          alcancemos a pátria celestial. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
