import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import LinkCard from "~/components/LinkCard";

export default function Page0626Portugal() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Pelágio, a 26 de Junho, Nalgumas Dioceses
          </Text>
          <Text className="h3">Intróito</Text>
          Fizestes-Vos, Senhor, o meu auxiliar e o meu protector: e livrastes-me
          da perdição: livrastes-me das mãos daqueles que procuravam tirar-me a
          vida, assim como do rei iníquo e das línguas injustas. Entoai em honra
          do Senhor um cântico novo, pois Ele operou maravilhas. ℣. Glória ao
          Pai...
          <Text className="h3">Oração</Text>Ó Deus, que pela magnitude da vossa
          inefável piedade permitistes que o B. Pelágio, sendo de pouca idade,
          se mostrasse grande na fé e virtude, Concedei-nos, Vos suplicamos,
          que, assim como Veneramos a sua glória, assim também imitemos a sua
          inocência. Por nosso Senhor...
          <Text className="h3">Epístola</Text>
          <LinkCard
            href="/missal/comum/4martirnaopontifice1#epístola"
            title="Mártir não Pontífice - Missa In virtúte tua"
          />
          <Text className="h3">Gradual</Text>
          Sois a minha esperança, Senhor, desde a minha juventude: por Vós fui
          fortalecido ainda antes de nascer: desde o seio de minha mãe que sois
          o meu protector. Aceitastes-me por causa da minha inocência e
          fortalecestes-me para sempre na vossa presença. Aleluia, aleluia. Sou,
          fui e serei cristão (diz Pelágio ao rei) eis porque não temo a morte.
          Aleluia.
          <Text className="h3">Evangelho</Text>
          <LinkCard
            href="/missal/comum/5martirnaopontifice2#evangelho"
            title="Mártir não Pontífice - Missa Lætábitur justus"
          />
          <Text className="h3">Ofertório</Text>
          Sua vida consumou-se em breve; contudo encheu seus anos com muitas
          coisas, pois sua alma era agradável a Deus. Eis porque Ele se apressou
          a tirá-lo do meio das iniquidades.
          <Text className="h3">Secreta</Text>
          Vos oferecemos, Senhor, a hóstia imaculada, rogando-Vos
          insistentemente que em virtude das preces e da intercessão do B.
          Pelágio, vosso Mártir, alcancemos o que humildemente Vos pedimos. Por
          nosso Senhor...
          <Text className="h3">Comúnio</Text>
          Aquele que vencer envergará os vestidos brancos: e Eu confessarei o
          seu nome na presença de meu Pai e dos seus Anjos, aleluia.
          <Text className="h3">Postcomúnio</Text>
          Saciados com o banquete do alimento espiritual e animados com a
          sacratíssima bebida, Vos suplicamos, Senhor, nosso Deus, que, assim
          como nos alegramos com a coroa triunfal do B. Pelágio, vosso Mártir,
          assim também continuamente gozemos o seu patrocínio. Por nosso Senhor
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
