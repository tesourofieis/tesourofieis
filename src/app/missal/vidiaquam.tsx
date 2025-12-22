import { H1 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageVidiaquam() {
  return (
    <PageWrapper>
      <H1 text="Vidi aquam" />

      <Typography className="aside">
        Desde a Páscoa até à Vigília da SS. Trindade, diz-se:
      </Typography>

      <Language>
        <Typography className="latin">
          Vidi aquam egrediéntem de templo a látere dextro, allelúja: et omnes
          ad quos pervénit aqua ista salvi facti sunt et dicent: allelúja,
          allelúja.
        </Typography>
        <Typography className="vernacular">
          Vi a água que saía do lado direito do Templo, aleluia: e todos aqueles
          em quem esta água tocou foram salvos; e dirão: aleluia, aleluia.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Osténde nobis,
          Dómine, misericórdiam tuam. Allelúja.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Mostrai, Senhor, a
          vossa misericórdia. Aleluia.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et salutáre tuum da
          nobis. Allelúja.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E dai-nos a
          salvação. Aleluia.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography>Dómine, exáudi
          oratiónem meam.
        </Typography>
        <Typography className="vernacular">
          <Typography className="versicle"> ℣. </Typography>Ouvi, Senhor, a
          minha oração.
        </Typography>
        <Typography className="latin">
          <Typography className="response"> ℟. </Typography> Et clamor meus ad
          te véniat.
        </Typography>
        <Typography className="vernacular">
          <Typography className="response"> ℟. </Typography> E que meu clamor
          chegue até Vós.
        </Typography>
        <Typography className="latin">
          <Typography className="versicle"> ℣. </Typography> Dóminus vobíscum.
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
        <Typography className="latin">
          <Typography className="latin">Orémus.</Typography>
        </Typography>
        <Typography className="vernacular">
          <Typography className="vernacular">Oremos.</Typography>
        </Typography>
        <Typography className="latin">
          Exáudi nos, Dómine sancte, Pater omnípotens, ætérne, Deus, et míttere
          dignéris Sanctum Angelum tuum de cælis, qui custódiat, fóveat,
          prótegat, vísitet atque deféndat omnes habitantes in hoc habitáculo.
          Per Christum Dóminum nostrum. Amen.
        </Typography>
        <Typography className="vernacular">
          Ouvi-nos, Senhor santo, Pai omnipotente, Deus eterno, e dignai-Vos
          enviar do céu o vosso Santo Anjo, para que ele guarde, conserve,
          proteja, visite e defenda todos aqueles que se encontram neste templo.
          Por Cristo, nosso Senhor. Amen.
        </Typography>
      </Language>
    </PageWrapper>
  );
}
