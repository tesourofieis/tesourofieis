import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageAspergesme() {
  return (
    <PageWrapper>
      <H1 text="Asperges me" />

      <Language>
        <Typography className="latin">
          Asperges me, Dómine, hyssópo et mundabor: lávabis me, et super nivem dealbábor.
        </Typography>
        <Typography className="vernacular">
          Aspergir-me-eis, Senhor, com o hissope e ficarei puro; lavar-me-eis e ficarei alvo, como a
          neve.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Osténde nobis, Dómine, misericórdiam
          tuam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Mostrai, Senhor, a vossa misericórdia.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et salutáre tuum da nobis.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E dai-nos a salvação.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Dómine, exáudi oratiónem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad te véniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E que meu clamor chegue até Vós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>O Senhor seja convosco.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et cum spíritu tuo.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E com vosso espírito.
        </Typography>
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Exáudi nos, Dómine sancte, Pater omnípotens, ætérne, Deus, et míttere dignéris Sanctum
          Angelum tuum de cælis, qui custódiat, fóveat, prótegat, vísitet atque deféndat omnes
          habitantes in hoc habitáculo. Per Christum Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Ouvi-nos, Senhor santo, Pai omnipotente, Deus eterno, e dignai-Vos enviar do céu o vosso
          Santo Anjo, para que ele guarde, conserve, proteja, visite e defenda todos aqueles que se
          encontram neste templo. Por Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
