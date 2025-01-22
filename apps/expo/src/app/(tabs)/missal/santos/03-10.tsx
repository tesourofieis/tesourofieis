import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0310() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Os Quarenta Mártires, a 10 de Março</Text>

          <Text className="h3">Intróito</Text>

          <Text className="em">Sl. 33, 18</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
              tribulatiónibus eórum liberávit eos.{" "}
              <Text className="text-base latin">Ps. ibid., 2</Text> Benedícam
              Dóminum in omni témpore: semper laus ejus in ore meo. ℣. Gloria
              Patri...
            </Text>
            <Text className="text-base vernacular">
              Os justos clamaram por Deus; então o Senhor ouviu-os e livrou-os
              de todas as tribulações.{" "}
              <Text className="text-base vernacular">Sl. ibid., 2</Text>{" "}
              Bendirei o Senhor em todo o tempo; o seu louvor estará sempre na
              minha boca. ℣. Glória ao Pai...
            </Text>
          </View>

          <Text className="h3">Oração</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Mártyres
              fortes in sua confessióne cognóvimus, pios apud te in nostra
              intercessióne sentiámus. Per Dóminum nostrum...
            </Text>
            <Text className="text-base vernacular">
              Concedei-nos, Vos pedimos, ó Deus omnipotente, que, reconhecendo
              nós a fortaleza com que estes Santos Mártires confessaram a fé,
              sintamos também em nosso favor a caridade da sua intercessão junto
              de Vós. Por nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/01-10#epístola"
            title="S. S. Fabião e Sebastião, Márts"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 132, 1-2</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Ecce, quam bonum et quam jucundum, habitáre fratres in unum! ℣.
              Sicut unguéntum in cápite, quod descéndit in barbam, barbam Aaron.
            </Text>
            <Text className="text-base vernacular">
              Oh! como é bom e suave que os irmãos habitem juntos! ℣. É como o
              perfume suave espalhado na cabeça de Aarão, e que corre pela
              barba: pela barba de Aarão.
            </Text>
          </View>

          <Text className="h3">Trato</Text>

          <LinkCard
            href="/missal/comum/6muitosmartires1#trato"
            title="Muitos Mártires - Missa Intret in"
          />

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/comum/6muitosmartires1#evangelho"
            title="Muitos Mártires - Missa Intret in"
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 31, 11</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti
              corde.
            </Text>
            <Text className="text-base vernacular">
              Alegrai-vos no Senhor, ó justos! Exultai de júbilo! Todos aqueles
              que possuem o coração recto serão glorificados.
            </Text>
          </View>

          <Text className="h3">Secreta</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Preces, Dómine, tuórum réspice oblationésque fidélium: ut et tibi
              gratæ sint pro tuórum festivitáte Sanctórum, et nobis cónferant
              tuæ propitiatiónis auxílium. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Dignai-Vos olhar benigno, Senhor, para as preces e ofertas dos
              vossos fiéis; e fazei que na festa dos vossos Santos Vos sejam
              agradáveis e nos alcancem o socorro da vossa misericórdia. Por
              nosso Senhor...
            </Text>
          </View>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 12, 50</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Quicúmque fécerit voluntátem Patris mei, qui in cœlis est: ipse
              meus frater et soror et mater est, dicit Dóminus.
            </Text>
            <Text className="text-base vernacular">
              Aquele que faz a vontade de meu Pai, que está nos céus, é para
              mim, meu irmão, minha irmã e minha mãe: diz o Senhor.
            </Text>
          </View>

          <Text className="h3">Postcomúnio</Text>

          <View className="side-by-side">
            <Text className="text-base latin">
              Sanctórum tuórum, Dómine, intercessióne placátus: præsta,
              quǽsumus; ut, quæ temporáli celebrámus actióne, perpétua
              salvatióne capiámus. Per Dóminum...
            </Text>
            <Text className="text-base vernacular">
              Aplacado, Senhor, com a intercessão dos vossos Santos, permiti,
              Vos imploramos, que alcancemos a salvação eterna com a celebração
              desta acção temporal. Por nosso Senhor...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
