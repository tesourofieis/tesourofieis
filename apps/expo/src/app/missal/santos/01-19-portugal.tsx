import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import React from "react";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";

export default function Page0119Portugal() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">
            S. Gonçalo de Amarante, Confesso, a 19 de Janeiro
          </Text>

          <Text className="aside">
            Como na
            <Link href="/missal/comum/15confessoresnaopontifices2">
              Missa Justus ut palma,
            </Link>
            excepto:
          </Text>

          <Text className="h3">Oração</Text>

          <Language>
            <Text className="latin">
              Deus, qui beáti Gundisálvi Confessóris tui mentem sancti nóminis
              tui amóre mirabíliter inflammásti: concéde, quæsumus; ut illius
              vestígiis inhæréntes, semper te cogitémus, quæque tibi grata sunt,
              inflammáto stúdio faciámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que maravilhosamente abrasastes no amor ao vosso nome a
              alma do B. Gonçalo, vosso Confessor, dignai-Vos conceder-nos que,
              seguindo os seus vestígios, pensemos sempre em Vós e com fervorosa
              solicitude façamos o que Vos seja agradável. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">
            Oração Comemoração S. S. Mário e Outros Mártires
          </Text>

          <Language>
            <Text className="latin">
              Exáudi, Dómine, pópulum tuum cum Sanctórum tuórum patrocínio
              supplicántem: ut et temporális vitæ nos tríbuas pace gaudére; et
              ætérnæ reperíre subsídium. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Ouvi, Senhor, as súplicas que o vosso povo Vos dirige sob o
              patrocínio dos vossos Santos; e dignai-Vos permitir que gozemos a
              vossa paz na vida presente e alcancemos o vosso auxílio na vida
              eterna...
            </Text>
          </Language>

          <Text className="h3">Oração Comemoração S. Canuto</Text>

          <Language>
            <Text className="latin">
              Deus, qui ad illustrándam Ecclésiam tuam beátum Canútum regem
              martýrii palma et gloriósis miráculis decoráre dignátus es:
              concéde propítius; ut, sicut ipse Domínicæ passiónis imitátor
              fuit, ita nos, per ejus vestígia gradiéntes, ad gáudia sempitérna
              perveníre mereámur. Per eúndem Dóminum...
            </Text>
            <Text className="vernacular">
              Ó Deus, que para glória da vossa Igreja Vos dignastes honrar o B.
              Rei Canuto com a palma do martírio e o dom de insignes milagres,
              concedei-nos propício que, assim como ele imitou a Paixão do
              Senhor, assim também nós, segundo os seus vestígios, mereçamos
              alcançar os sempiternos gozos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Epístola</Text>

          <LinkCard
            href="/missal/santos/01-15-1#epístola"
            title="Epístola S. Paulo, 1.º Eremita"
          />

          <Text className="h3">Gradual</Text>

          <Text className="em">Sl. 20, 4</Text>

          <Language>
            <Text className="latin">
              Dómine, prævenísti eum in benedictiónibus dulcédinis: posuísti in
              cápite ejus corónam de lápide pretióso.
              <Text className="versicle"> ℣. </Text>
              <Text className="latin">ibid., 5</Text> Vitam pétiit a te: et
              tribuísti ei longitúdinem diérum in sæculum sæculi.
            </Text>
            <Text className="vernacular">
              Concedestes-lhe, Senhor, bênçãos escolhidas, as mais suaves, e
              impusestes na sua cabeça uma coroa de pedras preciosas.
              <Text className="versicle"> ℣. </Text>
              <Text className="vernacular">ibid., 5</Text> Concedestes-lhe a
              vida que Vos suplicou e prolongastes-lhe a duração dos seus dias
              pelos séculos dos séculos.
            </Text>
            <Text className="latin">
              Allelúja, allelúja. Lætábitur justus in Dómino, et sperábit in eo:
              et laudabúntur omnes recti corde. Allelúja.
            </Text>
            <Text className="vernacular">
              Aleluia, aleluia. O justo alegrar-se-á no Senhor e n’Ele porá suas
              esperanças; e todos aqueles cujo coração é recto serão
              glorificados. Aleluia.
            </Text>
          </Language>

          <Text className="aside">
            Após a Septuagésima omite-se o Aleluia e o Verso e diz-se:
          </Text>

          <Text className="h3">Trato</Text>

          <Text className="em">Sl. 111, 1-3</Text>

          <Language>
            <Text className="latin">
              Beátus vir, qui timet Dóminum: in mandátis ejus cupit nimis.
              <Text className="versicle"> ℣. </Text>
              Potens in terra erit semen ejus: generátio rectórum benedicétur.
              <Text className="versicle"> ℣. </Text>Glória et divitiæ in domo
              ejus: et justítia ejus manet in sǽculum sǽculi.
            </Text>
            <Text className="vernacular">
              Bem-aventurado o varão que teme o Senhor e que põe todo seu zelo
              em obedecer-Lhe.<Text className="versicle"> ℣. </Text>Sua
              descendência será poderosa na terra; pois a geração dos justos
              será abençoada.<Text className="versicle"> ℣. </Text>Na sua casa
              haverá glória e riqueza: e a justiça subsistirá em todos os
              séculos dos séculos.
            </Text>
          </Language>

          <Text className="h3">Evangelho</Text>

          <LinkCard
            href="/missal/santos/01-15-1#evangelho"
            title="S. Paulo, 1.º Eremita, Conf."
          />

          <Text className="h3">Ofertório</Text>

          <Text className="em">Sl. 91, 13</Text>

          <Language>
            <Text className="latin">
              Justus ut palma florébit, sicut cedrus, quæ in Líbano est,
              multiplicábitur.
            </Text>
            <Text className="vernacular">
              O justo florescerá, como a palmeira, e multiplicar-se-á, como o
              cedro do Líbano.
            </Text>
          </Language>

          <Text className="h3">
            Secreta Comemoração S. S. Mário e Outros Mártires
          </Text>

          <Language>
            <Text className="latin">
              Preces, Dómine, tuórum réspice oblationésque fidélium: ut et tibi
              gratæ sint pro tuórum festivitáte Sanctórum, et nobis cónferant
              tuæ propitiatiónis auxílium. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Atendei, Senhor, ás preces e ás oblatas dos vossos fiéis, a fim de
              que Vos sejam agradáveis nesta festa dos vossos Santos e nos
              alcancem o auxílio da vossa bondade. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Secreta</Text>

          <Text className="em">S. Canuto</Text>

          <Language>
            <Text className="latin">
              Accépta sit in conspéctu tuo, Dómine, nostra devótio: et ejus
              nobis fiat supplicatióne salutáris, pro cujus sollemnitáte
              defértur. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Recebei benigno, Senhor, esta oferta da nossa piedade, e que ela
              nos alcance a salvação, por intercessão das preces daquele em cuja
              festa Vo-la apresentamos. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Comúnio</Text>

          <Text className="em">Mt. 19, 91, 13</Text>

          <Language>
            <Text className="latin">
              Amen dico vobis, quod vos, qui reliquístis ómnia, et secúti estis
              me, céntuplum accipiétis, et vitam ætérnam possidébitis.
            </Text>
            <Text className="vernacular">
              Em verdade vos digo: vós, que abandonastes tudo e me seguistes,
              recebereis o cêntuplo e possuireis a vida eterna.
            </Text>
          </Language>

          <Text className="h3">
            Postcomúnio Comemoração S. S. Mário e Outros Mártires
          </Text>

          <Language>
            <Text className="latin">
              Sanctórum tuórum, Dómine, intercessióne placátus: præsta,
              quǽsumus; ut, quæ temporáli celebrámus actióne, perpétua
              salvatióne capiámus. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Deixai-Vos aplacar, Senhor, pela intercessão dos vossos Santos; e
              permiti, Vos rogamos, que estes sacrifícios, que aogra celebrámos,
              nos sirvam de auxílio para a salvação eterna. Por nosso Senhor...
            </Text>
          </Language>

          <Text className="h3">Postcomúnio Comemoração S. Canuto</Text>

          <Language>
            <Text className="latin">
              Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus
              noster: ut, cujus exséquimur cultum, intercedénte beáto Canúto
              Mártyre tuo, sentiámus efféctum. Per Dóminum...
            </Text>
            <Text className="vernacular">
              Permiti, ó Senhor, nosso Deus, que, assim como nos alegrámos,
              comemorando nesta vida pelo nosso ministério a memória dos vossos
              Santos, assim também tenhamos na eternidade a felicidade de os
              contemplar. Por nosso Senhor...
            </Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
