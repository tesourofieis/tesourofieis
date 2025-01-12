import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

export default function Page0320Braga() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Martinho de Dume, B. e Conf., a 20 de Março, Na Arquidiocese de
            Braga
          </Text>
          <View className="aside">
            Como na{" "}
            <Link className="link" href="/missal/comum/13doutores">
              Missa In médio Ecclésiae
            </Link>{" "}
            , excepto:
          </View>
          <Text className="h3">Oração</Text>Ó Deus, que ao vosso povo
          concedestes o B. Martinho como ministro da salvação eterna, permiti,
          Vos rogamos, que mereçamos sempre ter como intercessor nos céus aquele
          que na terra possuímos como Patrono e Mestre de vida. Por nosso
          Senhor...
          <Text className="h3">Epístola</Text>
          Lição do Livro da Sabedoria. Desejei a inteligência, e foi-me dada;
          invoquei o espírito da sabedoria, e veio a mim. Preferi-a aos reinos e
          aos tronos; e creio que as riquezas nada são comparadas com ela. Nem
          mesmo a compararei com as pedras preciosas; pois todo o ouro,
          comparando-o com ela, é como um grão de areia; e toda a prata, ao pé
          dela, é desprezível lodo. Amo-a mais do que a saúde e a beleza; e,
          assim, resolvi tomá-la para minha luz, pois o seu brilho não tem
          ocaso. Todos os bens me vieram dela e recebi das suas mãos inumeráveis
          riquezas. Regozijei-me em todas as coisas, pois a sabedoria guiava-me,
          e eu ignorava que ela era a mãe de todos os bens. Conheci a sabedoria
          sem fingimento e comunico-a sem inveja, não ocultando as suas
          riquezas. Ela é um tesouro infinito para os homens. Aqueles que a
          aproveitam tornam-se amigos de Deus e recomendam-se pelos dons da
          ciência.
          <Text className="h3">Gradual</Text>
          Encontrei o meu servo David e ungi-o com meu óleo sagrado; a minha
          mão, pois, o auxiliará e o meu braço o fortalecerá. O inimigo nunca
          alcançará vitória contra ele: e o filho da iniquidade o não
          prejudicará.
          <Text className="h3">Ofertório</Text>
          Bem-aventurado o varão que o Senhor, quando vier, encontrar vigilante.
          Em verdade vos digo que o colocará à testa de todos seus bens.
          <Text className="h3">Secreta</Text>
          Deus omnipotente e sempiterno, fazei que estes dons, que oferecemos à
          vossa majestade por intercessão do B. Martinho, vosso Confessor e
          Pontífice, nos sirvam de proveito para a salvação eterna. Por nosso
          Senhor...
          <Text className="h3">Comúnio</Text>
          Senhor, entregastes-me cinco talentos; eis outros cinco que lucrei.
          Está bem, servo bom e fiel; visto que foste fiel em pouca coisa, Eu te
          estabelecerei sobre muitas: entra no gozo do teu senhor.
          <Text className="h3">Postcomúnio</Text>
          Havendo recebido os sacramentos da nossa salvação, concedei-nos, ó
          misericordioso Deus, Vos suplicamos, que nos sirvam sempre de auxílio
          as preces do B. Martinho, em cuja veneração os oferecemos à vossa
          majestade. Por nosso...
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
