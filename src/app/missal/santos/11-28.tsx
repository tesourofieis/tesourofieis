import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page1128() {
  return (
    <PageWrapper>
      <H1 text="Santa Catarina Labouré, Virgem, a 28 de Novembro" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/20virgemnaomartir1">
          Missa Dilexísti justitiam
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />
      <Typography className="vernacular">
        Senhor Jesus, que Vos dignastes alegrar a bem-aventurada Virgem Catarina com a admirável
        aparição da vossa Imaculada Mãe, fazei, Vos suplicamos, que, honrando nós a vossa Mãe
        Santíssima com um culto especial, possamos alcançar as alegrias eternas, mercê dos exemplos
        da mesma Bem-aventurada Catarina. Vós, que viveis...
      </Typography>
      <H3 text="Secreta" />
      <Typography className="vernacular">
        Senhor, que a fervorosa oração da Bem-aventurada Virgem Catarina Vos torne propício o nosso
        sacrifício, a fim de que por Vós seja aceite, em virtude dos méritos daquela em cuja honra é
        solenemente oferecido. Por nosso Senhor...
      </Typography>
      <H3 text="Postcomúnio" />
      <Typography className="vernacular">
        Senhor, tende piedade dos vossos servos, a fim de que, consolados inefavelmente com estes
        sagrados mystérios e seguindo o exemplo da Bem-aventurada Catarina, nos esforcemos em viver
        pensando continuamente nos céus. Por nosso Senhor...
      </Typography>
    </PageWrapper>
  );
}
