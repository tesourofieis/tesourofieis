import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0923Outro() {
  return (
    <PageWrapper>
      <H1 text="Santa Tecla, Virgem e Mártir, a 23 de Setembro" />

      <Typography className="comment">
        Em Lycaonia, diz o Martyrologio Romano, Santa Thecla, virgem e Martyr,
        que convertida á fé pelo Apostolo S. Paulo, em Iconio (Asia Menor),
        sofreu vitoriosamente o suplício das chamas e das feras, a fim de
        confessar o Cristo, no tempo do imperador Nero.
      </Typography>

      <H3 text="Oração" />

      <Language>
        <Typography className="latin">
          Da, quǽsumus, omnípotens Deus: ut, qui beátæ Theclæ Vírginis et
          Mártyris tuæ natalítia cólimus; et ánnua sollemnitáte lætémur, et
          tantæ fídei proficiámus exémplo. Per Dóminum...
        </Typography>
        <Typography className="vernacular">
          Ó Deus omnipotente, celebrando nós o nascimento da B. Tecla, vossa
          Virgem e Mártir, concedei-nos, Vos suplicamos, que nos alegremos com
          sua festa anual e nos sejam proveitosos os exemplos da sua grande fé.
          Por nosso Senhor...
        </Typography>
      </Language>

      <H3 text="Secreta e Postcomúnio" />
    </PageWrapper>
  );
}
