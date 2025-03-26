import { Link } from "expo-router";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Language from "~/components/Language";

export default function PageCoroasaomiguel() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="docs">
          <Text className="h1">Coroa de São Miguel</Text>

          <Language>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Deus, in adjutórium meum
              inténde.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Deus, vinde em nosso
              auxílio.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Dómine, ad adjuvándum me
              festína.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Senhor, socorrei-nos e
              salvai-nos.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Glória Patri, et Fílio, et
              Spirítui Sancto.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Glória ao Pai, e ao Filho e
              ao Espírito Santo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Sicut erat in princípio, et
              nunc, et semper, et in sǽcula sæculórum. Amen.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Assim como era no
              princípio, agora e sempre, e por todos os séculos dos séculos.
              Amen.
            </Text>
          </Language>

          <Text className="h2">Chorus 1, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Seraphim, Dominus nos dignos efficiat incendi igne caritatis
              perfectae.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste dos Serafins,
              fazei-nos, Senhor, dignos do fogo da perfeita Caridade.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 2, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Cherubim, Dominus nobis gratiam det relinquere vias malas et
              continuare in vias perfectionis Christianae.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste dos Querubins,
              pedimos Senhor a graça de trilharmos a estrada da perfeição
              cristã.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 3, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Thronorum, infundat Dominus in cordibus nostris spiritum sincerum
              verumque humilitatis.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste dos Tronos,
              pedimos Senhor que nos deis o espírito da verdadeira humildade.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 4, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Dominationum, Dominus nobis gratiam det gubernare sensus et
              dominare carnem petulantissimam.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste das Dominações,
              pedimos ao Senhor nos conceda a graça de dominar nossos sentidos,
              e de nos corrigir das nossas más paixões.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 5, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Potestatum, Dominus animas nostras defendat contra tentationes et
              insidias diaboli.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste das Potestades,
              pedimos ao Senhor se digne de proteger nossas almas contra as
              ciladas e as tentações de satanás e dos demónios.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 6, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Virtutum, Dominus nos servet a malo et non permittat cadere in
              tentationem.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste das Virtudes,
              pedimos ao Senhor a graça de sermos, vencedores no perigoso
              combate das tentações.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 7, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Principatorum, Dominus animas nostras spiritu vero obedientiae
              impleat.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste dos Principados,
              pedimos ao Senhor que nos dê o espírito de uma verdadeira e
              sincera obediência a Ele.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 8, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestisis
              Archangelorum, Dominus nobis constantiam in fide et operibus bonis
              det, ut gloriam Paradisi obtineamus.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste de todos os
              Arcanjos, pedimos ao Senhor nos conceder o dom da perseverança na
              Fé e nas boas obras, a fim de que possamos chegar a possuir a
              glória do Paraíso.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Text className="h2">Chorus 9, Salutatio</Text>

          <Language>
            <Text className="latin">
              Per intercessionem Sancti Michaelis et cappellae caelestis
              Angelorum, Dominus ab eis protegemur in hac vita mortale det et
              posthac perduci ad gloriam aeternam.
            </Text>
            <Text className="vernacular">
              Pela intercessão de São Miguel e do coro celeste de todos os
              Anjos, pedimos ao Senhor que estes espíritos bem-aventurados nos
              guardem sempre, e principalmente na hora da nossa morte e nos
              conduzam à glória do Paraíso.
            </Text>
          </Language>

          <Text className="aside">
            <Link className="link" href="/devocionario/oracoes/painosso">
              Pai Nosso
            </Link>{" "}
            <Link className="link" href="/devocionario/oracoes/avemaria">
              e três Ave Maria.
            </Link>{" "}
          </Text>

          <Language>
            <Text className="latin">
              In Honoro Sancte Michaelis,
              <Link className="link" href="/devocionario/oracoes/painosso">
                Pater Noster
              </Link>{" "}
            </Text>
            <Text className="vernacular">
              Em honra de São Miguel,{" "}
              <Link
                className="vernacular"
                href="/devocionario/oracoes/painosso"
              >
                Pai Nosso
              </Link>
            </Text>
            <Text className="latin">
              In Honoro Sancte Gabrielis,
              <Link className="link" href="/devocionario/oracoes/painosso">
                Pater Noster
              </Link>{" "}
            </Text>
            <Text className="vernacular">
              Em honra de São Gabriel,{" "}
              <Link
                className="vernacular"
                href="/devocionario/oracoes/painosso"
              >
                Pai Nosso
              </Link>
            </Text>
            <Text className="latin">
              In Honoro Sancte Raphaelis,
              <Link className="link" href="/devocionario/oracoes/painosso">
                Pater Noster
              </Link>{" "}
            </Text>
            <Text className="vernacular">
              Em honra de São Rafael,{" "}
              <Link
                className="vernacular"
                href="/devocionario/oracoes/painosso"
              >
                Pai Nosso
              </Link>
            </Text>
            <Text className="latin">
              In Honoro Angelis Custos meas,
              <Link className="link" href="/devocionario/oracoes/painosso">
                Pater Noster
              </Link>{" "}
            </Text>
            <Text className="vernacular">
              Em honra de meu Anjo da Guarda,
              <Link
                className="vernacular"
                href="/devocionario/oracoes/painosso"
              >
                Pai Nosso
              </Link>
            </Text>
          </Language>

          <Language>
            <Text className="latin">
              <Text className="latin">Ant.</Text> O Princeps Gloriose sancte
              Michael, Dux et praeposite caelestium exercituum, Custos animarum,
              Domitor spirituum rebellum, Serve in domu Regis Divini, et
              conductor mirabilis noster, Qui cum excellentia et virtute
              caelesti fulges, Liberare nos a malo digeneris, Qui ad te tornamus
              cum confidentiae, et propitio praesidio tuo da nobis Deum magis
              fideliter quotidie servire.
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Ant.</Text> Glorioso São Miguel,
              chefe e príncipe dos exércitos celestes, fiel guardião das almas,
              vencedor dos espíritos rebeldes, amado da casa de Deus, nosso
              admirável guia depois de Cristo; vós, cuja excelência e virtudes
              são eminentíssimas, dignai-vos livrar-nos de todos os males, a nós
              todos que recorremos a vós com confiança, e fazei, pela vossa
              incomparável proteção, que adiantemos, cada dia mais, na
              fidelidade em servir a Deus.
            </Text>
            <Text className="latin">
              <Text className="versicle"> ℣. </Text>Ora pro nobis, O Gloriose
              Sancte Michael, Princeps Ecclesiae Jesus Christi.
            </Text>
            <Text className="vernacular">
              <Text className="versicle"> ℣. </Text>Rogai por nós, ó
              bem-aventurado São Miguel, príncipe da Igreja de Cristo.
            </Text>
            <Text className="latin">
              <Text className="response"> ℟. </Text> Ut digni efficiamur
              promissionibus Eius.
            </Text>
            <Text className="vernacular">
              <Text className="response"> ℟. </Text> Para que sejamos dignos das
              Suas promessas.
            </Text>
            <Text className="latin">
              <Text className="latin">Orémus.</Text>
            </Text>
            <Text className="vernacular">
              <Text className="vernacular">Oremos.</Text>
            </Text>
            <Text className="latin">
              Omnipotens aeterne Deus, Qui prodigio bonitatis et clemente volens
              salve omnes homines, gloriosissimum Archangelum Sanctum Michael,
              Principem Ecclesia Tua constituisti, fac nos dignos, te rogamus,
              liberari eius praesidio potente ab adversariis cunctis, ne nos
              vexent, in hora mortis nostrae, sed nos perducti simus ab eo in
              praesentiam augustam divinae maiestatis tuae. Hoc oremus meritis
              Jesus Christi, Domini nostri.
            </Text>
            <Text className="vernacular">
              Deus, Todo-Poderoso e Eterno, que, por um prodígio de bondade e
              misericórdia para a salvação dos homens, escolhestes para príncipe
              de Vossa Igreja o gloriosíssimo Arcanjo São Miguel, tornai-nos
              dignos, nós Vo-lo pedimos, de sermos preservados de todos os
              nossos inimigos, a fim de que, na hora da nossa morte, nenhum
              deles nos possa inquietar, mas que nos seja dado ser introduzidos
              por ele na presença da Vossa poderosa e Augusta Majestade, pelos
              merecimentos de Jesus Cristo, nosso Senhor.
            </Text>
            <Text className="latin">Amen</Text>
            <Text className="vernacular">Amén.</Text>
          </Language>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
