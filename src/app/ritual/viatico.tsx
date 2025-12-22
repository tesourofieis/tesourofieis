import { Link } from "expo-router";
import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import AspergesMe from "../missal/aspergesme";

export default function PageViatico() {
  return (
    <PageWrapper>
      <H1 text="Viático, Extrema-unção" />
      <Typography className="aside">
        O Sacerdote, entrando em casa do enfermo, diz:
      </Typography>
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Pax huic dómui.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>A paz esteja nesta
          casa.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et ómnibus
          habitántibus in ea.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E em todos seus
          habitantes.
        </Typography>
      </Language>
      <AspergesMe />
      <Typography className="aside">
        O Acólito diz o Confiteor Deo...
        <Link className="link" href="/devocionario/oracoes/confesso">
          (como na página confiteor);
        </Link>{" "}
        e o Sacerdote, tendo dado as Absolvições, continua:
      </Typography>
      <H1 text="Recepção da Comunhão" />
      <Language>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Ecce Agnus Dei, ecce
          qui tollit peccáta mundi.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Eis o Cordeiro de
          Deus, eis Aquele que tira os pecados do mundo.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Dómine, non sum
          dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur
          ánima mea.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Senhor, eu não sou
          digno de que entreis na minha morada, mas dizei uma só palavra e a
          minha alma será salva.
        </Typography>
        <Typography className="latin">
          Accípe frater (soror), Viaticum Córporis Dómini nostri Jesu Christi,
          qui te custódiat ab hoste malígno, et perdúcate in vitam ætérnam.
        </Typography>
        <Typography className="vernacular">
          Recebei, meu irmão (ou minha irmã), o Viático do Corpo de Nosso Senhor
          Jesus Cristo, a fim de que vos guie até à vida eterna.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> Amen.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dominus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor seja
          convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso
          espírito.
        </Typography>
      </Language>
      <Language>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Dómine sancte, Páter omnípotens, ætérne Deus, te fidéliter deprecámur,
          ut accipiénti fratri nostro (soróri nostræ) sacrosánctum Corpus Dómini
          nostri Jesu Christi Fílii tui, tam córpori, quam ánimæ prosit ad
          remédium sempitérnum: Qui tecum vivit et regnat in unitáte Spíritus
          Sancti Deus, per ómnia sǽcula sæculórum.
        </Typography>
        <Typography className="vernacular">
          Senhor santo, Pai omnipotente, Deus eterno, Vos rogamos com confiança
          que o Corpo Santíssimo de nosso Senhor, que o nosso irmão (ou irmã)
          acaba de receber, lhe seja remédio eficaz, tanto para a sua alma como
          para o seu corpo, a fim de que lhe sirva para a eternidade: Ele, que,
          sendo Deus, convosco vive e reina por todos os séculos dos séculos.
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
