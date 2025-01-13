import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function PageResponsorio() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">Responsório de Santo António</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Si quæris mirácula, mors, error, calámitas, dæmon, lepra fúgiunt,
              ægri surgunt sani.
            </Text>
            <Text className="text-base vernacular">
              Se milagres procurais, a morte, o erro, a calamidade, o demónio, e
              a lepra fogem, os enfermos saudáveis se levantam.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> Cedunt mare,
              víncula: membra, resque pérditas, pétunt et accípiunt juvénes et
              cani.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Cede o mar
              embravecido, recupera-se o perdido, pedem e recebem, tanto velhos
              como mancebos.
            </Text>
            <Text className="text-base latin">
              Péreunt perícula, cessat et necéssitas, narrent hi qui séntiunt,
              dicant Paduáni.
            </Text>
            <Text className="text-base vernacular">
              Desaparecem os perigos e cessa a indigência, digam-no aqueles que
              o sentiram, e digam-no os Paduanos.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> Cedunt mare,
              víncula: membra, resque pérditas, pétunt et accípiunt juvénes et
              cani.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Cede o mar
              embravecido, recupera-se o perdido, pedem e recebem, tanto velhos
              como mancebos.
            </Text>
            <Text className="text-base latin">
              Glória Patri et Fílio et Spirítui Sancto.
            </Text>
            <Text className="text-base vernacular">
              Glória ao Pai, e ao Filho e ao Espírito Santo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Ant.</Text> Cedunt mare,
              víncula: membra, resque pérditas, pétunt et accípiunt juvénes et
              cani.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Ant.</Text> Cede o mar
              embravecido, recupera-se o perdido, pedem e recebem, tanto velhos
              como mancebos.
            </Text>
            <Text className="text-base latin">
              ℣. Ora pro nobis, beate Antoni.
            </Text>
            <Text className="text-base vernacular">
              ℣. Rogai por nós, bem-aventurado António.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">℟.</Text> Ut digni efficiamur
              promissionibus Christi.
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">℟.</Text> Para que sejamos
              dignos das promessas de Cristo.
            </Text>
            <Text className="text-base latin">
              <Text className="text-base latin">Orémus.</Text>
            </Text>
            <Text className="text-base vernacular">
              <Text className="text-base vernacular">Oremos.</Text>
            </Text>
            <Text className="text-base latin">
              Ecclesiam tuam, Deus, beati Antonii Confessoris tui atque Doctoris
              solemnitas votiva lætificet, ut spiritualibus semper muniatur
              auxiliis, et gáudiis perfrui mereatur æternis. Per Christum
              Dóminum nostrum. <Text className="text-base latin">℟.</Text> Amen.
            </Text>
            <Text className="text-base vernacular">
              Ó Deus, nós Vos suplicamos, que alegre à vossa Igreja a solenidade
              votiva do bem-aventurado Santo António, vosso Confessor e Doutor,
              para que, fortalecida sempre com os espirituais auxílios, mereça
              gozar os prazeres eternos. Por Jesus Cristo, Nosso Senhor.{" "}
              <Text className="text-base vernacular">℟.</Text> Amen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
