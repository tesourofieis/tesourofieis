import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page26Continencia() {
  return (
    <PageWrapper>
      <H1 text="26.ª Para pedir a continência" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut tibi
          casto córpore serviámus et mundo corde placeámus. Per Dóminum... in
          unitáte ejúsdem Spíritus Sancti.
        </Text>
        <Text className="vernacular">
          Senhor, queimai os nossos rins e os nossos corações com o fogo do
          Espírito Santo, a fim de que Vos sirvamos com o corpo casto e Vos
          sejamos agradáveis pela pureza dos nossos corações. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Dirúmpe, Dómine, víncula peccatórum nostrórum: et, ut sacrificáre tibi
          hóstiam laudis absolúta libertáte ac munda mente póssimus, retríbue
          quæ ante tribuísti; et salva nos per indulgéntiam, quos dignátus es
          salváre per grátiam. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Senhor, quebrai as cadeias dos nossos pecados; e, para que possamos
          oferecer-Vos esta hóstia de louvor com absoluta liberdade e pureza de
          espírito, fazei-nos adquirir o estado que primitivamente nos havíeis
          concedido; e, pela vossa misericórdia, salvai novamente aqueles que já
          havíeis salvo uma primeira vez, por uma graça imerecida. Por nosso
          Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Dómine, adjútor et protéctor noster, ádjuva nos: et reflóreat cor et
          caro nostra vigóre pudicítiæ et castimóniæ novitáte; ut per hoc
          sacrifícium, quod tuæ obtúlimus pietáti, ab ómnibus tentatiónibus
          emundémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Senhor, nosso protector e auxílio, vinde em nosso socorro; permiti
          que, pela continência, o nosso coração e a nossa carne recuperem uma
          nova juventude e um revigoramento de castidade, a fim de que este
          santo sacrifício, que oferecemos à vossa bondade, nos purifique de
          todas as tentações. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
