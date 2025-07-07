import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page21Lagrimas() {
  return (
    <PageWrapper>
      <H1 text="21.ª Pedindo o dom das lágrimas" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Omnípotens et mitíssime Deus, qui sitiénti pópulo fontem vivéntis aquæ
          de petra produxísti: educ de cordis nostri durítia lácrimas
          compunctiónis; ut peccáta nostra plángere valeámus, remissionémque
          eórum, te miseránte, mereámur accípere. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente e clementíssimo, que fizestes brotar da rocha uma
          fonte de água viva para saciar o vosso povo, arrancai lágrimas de
          compunção do nosso coração endurecido, a fim de que possamos chorar os
          nossos pecados, e, pela vossa misericórdia, alcançar a sua remissão.
          Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Hanc oblatiónem, quǽsumus, Dómine Deus, quam tuæ majestáti pro
          peccátis nostris offérimus, propítius réspice: et produc de óculis
          nostris lacrimárum flúmina, quibus débita flammárum incéndia valeámus
          exstínguere. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, nosso Deus, dignai-Vos aceitar misericordiosamente esta
          oblação, que oferecemos à vossa majestade em expiação dos nossos
          pecados, e fazei brotar dos nossos olhos torrentes de lágrimas capazes
          de extinguirem o ardor das chamas, que merecemos pelos nossos
          pecados...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Grátiam Spíritus Sancti, Dómine Deus, cordibus nostris cleménter
          infúnde: quæ nos gemítibus lacrimárum effíciat máculas nostrórum
          dilúere peccatórum; atque optátæ nobis, te largiénte, indulgéntiæ
          præstet efféctum. Per Dóminum... in unitáte ejusdem.
        </Text>
        <Text className="vernacular">
          Senhor Deus, infundi clemente a graça do Espírito Santo nos nossos
          corações; e que esta graça, penetrando no nosso íntimo, se desentranhe
          em lágrimas e gemidos capazes de lavar as máculas dos nossos pecados,
          e assim possamos obter da vossa magnanimidade a indulgência tão
          ardentemente desejada. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
