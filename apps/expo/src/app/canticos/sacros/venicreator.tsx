import { Typography } from "~/components/typography";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function PageVeniCreator() {
  return (
    <PageWrapper>
      <H1 text="Veni Creator Spiritus" />
      <Language>
        <Typography className="latin">
          Veni, Creator Spiritus,{"\n"}
          mentes tuorum visita,{"\n"}
          imple superna gratia{"\n"}
          quae tu creasti pectora.
        </Typography>
        <Typography className="vernacular">
          Vinde, Espírito Criador,{"\n"}
          visitai as almas dos Vossos,{"\n"}
          enchei de graça celestial,{"\n"}
          os corações que criastes.
        </Typography>
        <Typography className="latin">
          Qui diceris Paraclitus,{"\n"}
          altissima donum Dei,{"\n"}
          fons vivus, ignis, caritas,{"\n"}
          et spiritalis unctio.
        </Typography>
        <Typography className="vernacular">
          Sois o Divino Consolador,{"\n"}o dom do Deus Altíssimo,{"\n"}
          fonte viva, o fogo, a caridade,{"\n"}a unção espiritual.
        </Typography>
        <Typography className="latin">
          Tu, septiformis munere,{"\n"}
          digitus paternae dexterae,{"\n"}
          Tu rite promissum Patris,{"\n"}
          sermone ditans guttura.
        </Typography>
        <Typography className="vernacular">
          Com os Vossos sete dons,{"\n"}
          sois o dedo da direita de Deus,{"\n"}
          Solene promessa do Pai,{"\n"}
          Inspirando nossas palavras.
        </Typography>
        <Typography className="latin">
          Accende lumen sensibus:{"\n"}
          infunde amorem cordibus:{"\n"}
          infirma nostri corporis{"\n"}
          virtute firmans perpeti.
        </Typography>
        <Typography className="vernacular">
          Acendei a luz nos sentidos;{"\n"}
          insuflai o amor nos corações,{"\n"}
          amparai na constante virtude{"\n"}a nossa carne enfraquecida.
        </Typography>
        <Typography className="latin">
          Hostem repellas longius,{"\n"}
          pacemque dones protinus:{"\n"}
          ductore sic te praevio{"\n"}
          vitemus omne noxium.
        </Typography>
        <Typography className="vernacular">
          Afastai para longe o inimigo,{"\n"}
          Trazei-nos prontamente a paz;{"\n"}
          Assim guiados por Vós{"\n"}
          Evitaremos todo o mal.
        </Typography>
        <Typography className="latin">
          Per te sciamus da Patrem,{"\n"}
          noscamus atque Filium;{"\n"}
          Teque utriusque Spiritum{"\n"}
          credamus omni tempore.
        </Typography>
        <Typography className="vernacular">
          Por Vós explicar-se-á o Pai,{"\n"}E conheceremos o Filho;{"\n"}
          Dai-nos crer sempre em Vós{"\n"}
          Espírito do Pai e do Filho.
        </Typography>
        <Typography className="latin">
          Deo Patri sit gloria,{"\n"}
          et Filio, qui a mortuis{"\n"}
          surrexit, ac Paraclito,{"\n"}
          in saeculorum saecula. Amen.
        </Typography>
        <Typography className="vernacular">
          Glória ao Pai, Senhor,{"\n"}
          Ao Filho que ressuscitou{"\n"}
          Assim como ao Consolador.{"\n"}
          Por todos os séculos. Amém.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
