import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0427() {
  return (
    <PageWrapper>
      <H1 text="S. Pedro Canísio, Conf. e Doutor, a 27 de Abril" />

      <Typography className="comment">
        Nascido em Nimegue (Holanda), a 8 de Maio de 1521, morreu em Friburgo
        (Suiça) a 21 de Dezembro de 1597, foi beatificado por Pio XI. É a justo
        título esta santo, holandez, apóstolo da Alemanhã, cognominado o martelo
        dos herejes, o Jerónimo e o Agostinho de seu século; defensor da Igreja
        contra as portas do inferno. Por suas eloquentes pregações, por seus
        livros de controvérsia e piedade, pela fundação de vários colégios,
        pelas missões de que quatro Papas o encarregaram e fez reflorescer a
        vida católica. Assistiu em qualidade de teólogo ao Concílio de Trento,
        sustentando os interesses da Igreja na dieta de Augsburgo e no colóquio
        de Worms. Profundamente humilde, recusou os arcebispados de Viena e
        Colónia. Nós lhe devemos o primeiro catecismo, que bastaria para lhe
        merecer o reconhecimento dos católicos. O bem-aventurado terminou os
        seus dias no Colégio de S. Miguel em Friburgo, onde os peregrinos
        visitam o seu quarto e lhe veneram o túmulo.
      </Typography>

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/13doutores">
          Missa In médio Ecclésiae
        </Link>{" "}
        , excepto:
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Deus, qui ad tuéndam cathólicam iidem beátum Petrum Confessórem tuum
          virtúte et doctrína roborásti: concéde propítius; ut ejus exémplis et
          mónitis errántes ad salútem resipíscant, et fidéles in veritátis
          confessióne persevérent. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que revestistes o B. Pedro, vosso Confessor, com os dons da
          virtude e da ciência para a defesa da fé católica, concedei-nos
          propício que seus exemplos e ensinos atraiam ao caminho da salvação
          aqueles que caíram no erro e façam perseverar os fiéis na confissão da
          verdade. Por nosso Senhor...
        </Typography>
      </Language>
    </PageWrapper>
  );
}
