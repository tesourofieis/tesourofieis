import { Text, View } from "react-native";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page22Perdaopecados() {
  return (
    <PageWrapper>
      <Text className="h1">22.ª Para obter perdão dos pecados</Text>

      <Text className="h3">Oração</Text>

      <Language>
        <Text className="latin">
          Deus, qui nullum réspuis, sed, quantúmvis peccántibus, per pœniténtiam
          pia miseratióne placáris: réspice propítius ad preces humilitátis
          nostræ, et illúmina corda nostra; ut tua valeámus implére præcépta.
          Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus, que não repelis homem algum, mas antes, em vossa
          misericordiosa bondade, Vos deixais aplacar pela penitência dos
          pecadores, por mais que Vos tenham ofendido, aceitai benigno as nossas
          humildes orações e iluminai os nossos corações, para que possamos
          cumprir os vossos preceitos. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Secreta</Text>

      <Language>
        <Text className="latin">
          Præsens sacrifícium, Dómine, quod tibi pro delíctis nostris offérimus,
          sit tibi munus accéptum: et tam vivéntibus quam defúnctis profíciat ad
          salútem. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que este sacrifício, que Vos oferecemos em reparação dos nossos
          pecados, Vos seja agradável, Senhor, e que, tanto aos vivos como aos
          mortos, seja proveitoso para a sua salvação. Por nosso Senhor...
        </Text>
      </Language>

      <Text className="h3">Postcomúnio</Text>

      <Language>
        <Text className="latin">
          Exáudi preces famíliæ tuæ, omnípotens Deus: et præsta; ut sancta hæc,
          quæ a te súmpsimus, incorrúpta in nobis, te donánte, servántur. Per
          Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, ouvi as preces da vossa família; e pela vossa
          graça concedei-nos, Vos suplicamos, que estes sacrossantos mystérios,
          que recebemos de vossas mãos, não sejam manchados no nosso íntimo. Por
          nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
