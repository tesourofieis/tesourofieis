import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAlmacristo() {
  return (
    <PageWrapper>
      <H1 text="Alma de Cristo" />

      <Language>
        <Typography className="latin">Anima Christi, sanctífica me.</Typography>
        <Typography className="vernacular">Alma de Cristo, santificai-me.</Typography>
        <Typography className="latin">Corpus Christi, salve me.</Typography>
        <Typography className="vernacular">Corpo de Cristo, salvai-me.</Typography>
        <Typography className="latin">Sanguis Christi, inébria me.</Typography>
        <Typography className="vernacular">Sangue de Cristo, inebriai-me.</Typography>
        <Typography className="latin">Aqua láteris Christi, lava me.</Typography>
        <Typography className="vernacular">Água do lado de Cristo, lavai-me.</Typography>
        <Typography className="latin">Pássio Christi, conforta me.</Typography>
        <Typography className="vernacular">Paixão de Cristo, confortai-me.</Typography>
        <Typography className="latin">O bone Jesu, exáudi me.</Typography>
        <Typography className="vernacular">Ó bom Jesus, ouvi-me.</Typography>
        <Typography className="latin">Intra tua vúlnera abscónde me.</Typography>
        <Typography className="vernacular">Dentro das vossas Chagas, escondei-me.</Typography>
        <Typography className="latin">Ne permittas me separári a te.</Typography>
        <Typography className="vernacular">Não permitais que de Vós me separe.</Typography>
        <Typography className="latin">Ab hoste maligno defénde me.</Typography>
        <Typography className="vernacular">Do espírito maligno, defendei-me.</Typography>
        <Typography className="latin">In hora mortis meæ voca me.</Typography>
        <Typography className="vernacular">Na hora da minha morte, chamai-me.</Typography>
        <Typography className="latin">
          Et jube me venire ad te, ut cum Sanctis tuis laudem te in sǽcula sæculórum.
        </Typography>
        <Typography className="vernacular">
          E mandai-me ir para Vós, para que Vos louve com vossos Santos, por todos os séculos.
        </Typography>
        <Typography className="latin">Amen.</Typography>
        <Typography className="vernacular">Amen.</Typography>
      </Language>
    </PageWrapper>
  );
}
