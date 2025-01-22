import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PagePrecesaomiguel() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Prece a São Miguel Arcanjo</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Princeps gloriosíssime cæléstis militiæ, sancte Michaël
              Archangele, defénde nos in prælio advérsus príncipes et
              potestátes, advérsus mundi rectóres tenebrárum harum, contra
              spirituália nequitiæ, in cæléstibus.
            </Text>
            <Text className="text-base vernacular">
              Gloriosíssimo Príncipe da Milícia Celeste, São Miguel Arcanjo,
              defendei-nos «no nosso combate contra os principados e potestades,
              contra os príncipes do mundo tenebroso, contra as hostes
              espirituais da iniquidade nas regiões celestes».
            </Text>
            <Text className="text-base latin">
              Veni in auxilium hominum; quos Deus ad imáginem similitúdinis suæ
              fecit, et a tyránnide diáboli emit prétio magno.
            </Text>
            <Text className="text-base vernacular">
              Vinde em auxílio dos homens, que Deus criou à sua imagem e
              semelhança e que remiu, por alto preço, da tirania do demónio.
            </Text>
            <Text className="text-base latin">
              Te custódem et patrónum sancta venerátur Ecclésia; tibi trádidit
              Dóminus ánimas redemptórum in supérna felicitáte locándas.
              Deprecáre Deum pacis, ut cónterat sátanam sub pédibus nostris, ne
              ultra váleat captivos tenére hómines, et Ecclésiæ nocére.
            </Text>
            <Text className="text-base vernacular">
              A Santa Igreja vos venera como Guarda e Patrono, a vós, Deus
              confiou as almas remidas destinadas a ter assento na suprema
              Felicidade. Rogai ao Deus da Paz que esmague Satanás debaixo dos
              nossos pés, que ele não possa mais reter os homens cativos e
              infligir males à Igreja.
            </Text>
            <Text className="text-base latin">
              Offer nostras preces in Conspéctu Altíssimi, ut cito anticipent
              nos misericórdiæ Dómini, et apprehéndas dracónem, serpéntem
              antiquum, qui est diábolus et sátanas, et ligátum mittas in
              abyssum, ut non sedúcat ámplius gentes.
            </Text>
            <Text className="text-base vernacular">
              Oferecei as nossas preces ao Altíssimo, a fim de que, sem demora,
              possa atrair a sua misericórdia sobre nós; prendei «o dragão, a
              antiga serpente que é o Diabo e Satanás», lançai-o acorrentado no
              abysmo, «que ele mais não possa seduzir as nações».
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
