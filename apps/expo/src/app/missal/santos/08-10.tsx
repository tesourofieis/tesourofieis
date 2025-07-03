import { Text, View } from "react-native";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { H1, H3 } from "~/components/Headings";


export default function Page0810() {
  return (
    <PageWrapper>
      <H1 text="S. Lourenço, a 10 de Agosto" />

      <H3 text="Intróito" />

      <Text className="em">Sl. 95, 6</Text>

      <Language>
        <Text className="latin">
          Conféssio et pulchritúdo in conspéctu ejus: sánctitas et magnificéntia
          in sanctificatióne ejus. <Text className="latin">Ps. ibid., 1</Text>{" "}
          Cantáte Dómino cánticum novum: cantáte Dómino, omnis terra.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Rodeiam-no a glória e a majestade: e no seu santuário reluzem a
          santidade e a magnificência.{" "}
          <Text className="vernacular">Sl. ibid., 1</Text> Cantai em honra do
          Senhor um hino novo: que toda a terra cante hinos ao Senhor.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Da nobis, quǽsumus, omnípotens Deus: vitiórum nostrorum flammas
          exstínguere; qui beáto Lauréntio tribuísti tormentórum suórum incéndia
          superáre. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Ó Deus omnipotente, que permitistes que o B. Lourenço triunfasse das
          chamas do seu suplício, concedei-nos a graça, Vos suplicamos, de
          extinguirdes as chamas dos nossos vícios. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <Text className="em">2 Cor. 9, 6-10</Text>

      <Language>
        <Text className="latin">
          Léctio Epístolæ beáti Pauli Apóstoli ad Corinthios.
        </Text>
        <Text className="vernacular">
          Lição da Ep.ª do B. Ap.º Paulo aos Coríntios.
        </Text>
        <Text className="latin">
          Fratres: Qui parce séminat, parce et metet: et qui séminat in
          benedictiónibus, de benedictiónibus et metet. Unusquísque prout
          destinávit in corde suo, non ex tristítia aut ex necessitáte: hilárem
          enim datórem díligit Deus. Potens est autem Deus omnem grátiam
          abundáre fácere in vobis, ut, in ómnibus semper omnem sufficiéntiam
          habéntes, abundétis in omne opus bonum, sicut scriptum est: Dispérsit,
          dedit paupéribus: justítia ejus manet in sǽculum sǽculi. Qui autem
          admínistrat semen seminánti: et panem ad manducándum præstábit, et
          multiplicábit semen vestrum, et augébit increménta frugum justítiæ
          vestræ.
        </Text>
        <Text className="vernacular">
          Meus irmãos: Aquele que semeia pouco, colherá pouco também; e aquele
          que semeia com abundância, colherá também com abundância. Que cada um
          dê segundo o que tiver resolvido no seu coração; mas não com tristeza,
          nem com constrangimento: pois Deus ama aquele que dá com alegria. Deus
          é assaz poderoso para vos cumular de todas as graças, a fim de que,
          possuindo, sempre, em todas as coisas, aquilo que vos é necessário,
          tenhais com abundância, para praticardes todas as espécies de boas
          obras, segundo o que está escrito: «Distribuiu liberalmente os seus
          bens pelos pobres: a sua justiça subsistirá em todos os séculos dos
          séculos». Com efeito, aquele que dá a semente ao semeador dar-vos-á
          também o pão para comida, multiplicará a vossa semente e dará
          incremento aos frutos da vossa justiça.
        </Text>
      </Language>

      <H3 text="Gradual" />

      <Text className="em">Sl. 16, 3</Text>

      <Language>
        <Text className="latin">
          Probásti, Dómine, cor meum, et visitásti nocte.
          <Text className="versicle"> ℣. </Text>Igne me examinásti, et non est
          invénta in me iníquitas.
        </Text>
        <Text className="vernacular">
          Experimentastes o meu coração e visitaste-lo durante a noite.
          <Text className="versicle"> ℣. </Text>
          Experimentastes-me com o fogo e não se encontrou em mim a iniquidade.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Levíta
          Lauréntius bonum opus operátus est: qui per signum crucis cœcos
          illuminávit. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia.<Text className="versicle"> ℣. </Text>O Levita
          Lourenço praticou uma boa acção: pois restituiu a vista aos cegos com
          o sinal da Santa Cruz. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/santos/01-22#evangelho"
        title="S. S. Vicente e Anastácio, Márts."
      />

      <H3 text="Ofertório" />

      <Text className="em">Sl. 95, 6</Text>

      <Language>
        <Text className="latin">
          Conféssio et pulchritúdo in conspéctu ejus: sánctitas, et
          magnificéntia in sanctificatióne ejus.
        </Text>
        <Text className="vernacular">
          Rodeiam-no a glória e a majestade: e no seu santuário reluzem a
          santidade e a magnificência.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Accipé, quǽsumus, Dómine, múnera dignánter obláta: et, beáti Lauréntii
          suffragántibus méritis, ad nostræ salútis auxílium proveníre concéde.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Recebei, Senhor, Vos suplicamos, os dons que reverentemente Vos
          oferecemos, e, pelo sufrágio dos méritos do B. Lourenço, permiti que
          nos sirvam de auxílio para a salvação. Por nosso Senhor Jesus
          Cristo...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Jo. 12, 26</Text>

      <Language>
        <Text className="latin">
          Qui mihi mínistrat, me sequátur: et ubi ego sum, illic et miníster
          meus erit.
        </Text>
        <Text className="vernacular">
          Se alguém me serve, siga-me; e onde eu estiver lá estará também o meu
          servo.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sacro múnere satiáti, súpplices te, Dómine, deprecámur: ut, quod
          débitæ servitútis celebrámus offício, intercedénte beáto Lauréntio
          Mártyre tuo, salvatiónis tuæ sentiámus augméntum. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Saciados com este sacrossanto dom, humildemente Vos rogamos pela
          intercessão do B. Lourenço, vosso Mártir, que, celebrando este ofício
          em reconhecimento da nossa escravidão, alcancemos cada vez mais os
          efeitos da vossa Redenção. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
