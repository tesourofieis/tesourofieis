import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0804() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Domingos de Gusmão, Conf., a 4 de Agosto
          </Text>

          <Text className="aside">
            Como na{" "}
            <Link
              className="link"
              href="/missal/comum/14confessoresnaopontifices1"
            >
              Missa Os justi
            </Link>{" "}
            , excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui Ecclésiam tuam beáti Dominici Confessóris tui illumináre
              dignátus es méritis et doctrinis: concéde; ut ejus intercessióne
              temporalibus non destituatur auxiliis, et spiritualibus semper
              profíciat increméntis. Per Dóminum nostrum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que Vos dignastes iluminar a vossa Igreja com os méritos e
              as lições do B. Domingos, vosso Confessor, concedei-nos pela sua
              intercessão que ela não seja privada dos auxílios temporais e que
              sempre tomem incremento os seus bens espirituais. Por nosso
              Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/comum/13doutores#epístola"
            title="Doutores - Missa In médio Ecclésiae"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 91, 13 & 14</Text>

          <Language>
            <Text className="latin">
              Justus ut palma florébit: sicut cedrus Líbani multiplicábitur in
              domo Dómini.<Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 3</Text> Ad annuntiándum mane
              misericórdiam tuam, et veritátem tuam per noctem.
            </Text>
            <Text className="vernacular">
              O justo florescerá, como a palmeira, e multiplicar-se-á, como o
              cedro do Líbano, na casa do Senhor.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 3</Text> Para anunciar de
              manhã a vossa misericórdia e durante a noite a vossa verdade.
            </Text>
            <Text className="latin">
              Allelúja, allelúja.<Text className="versicle"> ℣. </Text>
              <Text className="latin">Osee 14, 6</Text> Justus germinábit sicut
              lílium: et florébit in ætérnum ante Dóminum. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia.<Text className="versicle"> ℣. </Text>
              <Text className="vernacular">Os. 14, 6</Text> O justo germinará,
              como o lírio, e florescerá perpetuamente na presença do Senhor.
              Aleluia.
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Language>
            <Text className="latin">
              Múnera tibi, Dómine, dicáta sanctífica: ut, méritis beáti Domínici
              Confessóris tui, nobis profíciant ad medélam. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Santificai, Senhor, os dons que Vos são apresentados, a fim de
              que, pelos méritos do B. Domingos, vosso Confessor, sirvam de
              remédio, às nossas almas. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Lc. 12, 42</Text>

          <Language>
            <Text className="latin">
              Fidélis servus et prudens, quem constítuit dóminus super famíliam
              suam: ut det illis in témpore trítici mensúram.
            </Text>
            <Text className="vernacular">
              O servo fiel e prudente é destinado pelo Senhor para distribuir
              oportunamente a cada um na sua família a sua medida de trigo.
            </Text>
          </Language>

          <Text className="h3">Postcomúnio</Text>

          <Language>
            <Text className="latin">
              Concéde, quǽsumus, omnípotens Deus: ut, qui peccatórum nostrórum
              póndere prémimur, beáti Domínici Confessóris tui patrocínio
              sublevémur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Concedei-nos, Deus omnipotente. Vos rogamos, que, estando
              oprimidos sob o peso dos nossos pecados, sejamos livres deles,
              pelo patrocínio do B. Domingos, vosso Confessor. Por nosso
              Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
