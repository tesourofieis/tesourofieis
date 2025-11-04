import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageReginacaeli() {
  return (
    <PageWrapper>
      <H1 text="Regína cæli" />

      <Language>
        <Typography className="latin">
          Regína cæli, lætáre, allelúja; Quia quem meruísti portáre, allelúja,
          Resurréxit, sicut dixit, allelúja: Ora pro nobis Deum, allelúja.
        </Typography>
        <Typography className="vernacular">
          Rainha do Céu, alegrai-Vos, Aleluia! Porque Aquele que merecestes
          trazer em vosso ventre, Aleluia! Ressuscitou como disse, Aleluia!
          Rogai por nós a Deus, Aleluia!
        </Typography>
        <Typography className="latin">
          Gaude et laetare, Virgo Maria! Alleluia! Quia surrexit Dominus vere!
          Alleluia!
        </Typography>
        <Typography className="vernacular">
          Alegrai-Vos e exultai, ó Virgem Maria, Aleluia! Porque o Senhor
          ressuscitou verdadeiramente, Aleluia!
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Deus, qui per resurrectiónem Fílii tui Dómini nostri Jesu Christi
          mundum lætificáre dignátus es: præsta, quǽsumus; ut, per ejus
          Genitrícem Vírginem Mariam, perpétuæ capiámus gáudia vitæ. Per eumdem
          Christum, Dóminum nostrum.
        </Typography>
        <Typography className="vernacular">
          Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do vosso
          Filho, Nosso Senhor Jesus Cristo, concedei-nos, Vos suplicamos, a
          graça de alcançarmos pela protecção da Virgem Maria, Sua Mãe, a glória
          da vida eterna. Pelo mesmo Cristo Nosso Senhor.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
