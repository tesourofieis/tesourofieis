import { Link } from "expo-router";
import { Text, View } from "react-native";
import { H1, H2, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import PageWrapper from "~/components/Page";

export default function Page0612() {
  return (
    <PageWrapper>
      <H1 text="S. João de S. Facundo, Conf., a 12 de Junho" />

      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/14confessoresnaopontifices1">
          Missa Os justi
        </Link>{" "}
        , excepto:
      </Text>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Deus, auctor pacis et amátor caritátis, qui beátum Joánnem Confessórem
          tuum mirífica dissidéntes componéndi grátia decorásti: ejus méritis et
          intercessióne concéde; ut, in tua caritáte firmáti, nullis a te
          tentatiónibus separémur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó Deus, autor da paz e amante da caridade, que dotastes o B. João,
          vosso Confessor, com a admirável graça de compor as discórdias,
          concedei-nos por seus méritos e intercessão que estejamos de tal modo
          consolidados na vossa caridade que nenhuma tentação nos possa separar
          de Vós. Por nosso Senhor...
        </Text>
      </Language>

      <H2 text="Comemoração dos S. S. Mártires Basilides e Outros" />

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Sanctórum Mártyrum tuórum Basílidis, Gyrini, Naboris atque Nazárii,
          quǽsumus, Dómine, natalítia nobis votíva respléndeant: et, quod illis
          cóntulit excelléntia sempitérna, frúctibus nostræ devotiónis
          accréscat. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Que o nascimento dos vossos Santos Mártires Basilides, Cirino, Nabor e
          Nazário, Vos suplicamos, Senhor, seja celebrado com esplendor Pelos
          votos que Vos oferecemos, e que a felicidade eterna, que eles gozam,
          reverta em nosso proveito, aumentando os frutos da nossa devoção. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Pro sanctórum tuórum Basílidis, Cyrini, Nabóris atque Nazárii sánguine
          venerándo, hóstias tibi. Dómine, sollémniter immolámus, tua mirabília
          pertractántes: per quem talis est perfécta victória. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, celebramos os vossos venerandos mystérios, oferecendo-Vos
          solenemente esta hóstia em honra do sangue dos vossos Santos Mártires
          Basilides, Cirino, Nabor e Nazário pelo qual eles alcançaram uma
          brilhante vitória. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Semper, Dómine, sanctórum Martyrum tuórum Basílidis, Cyríni, Nabóris
          atque Nazárii sollémnia celebrántes: præsta, quǽsumus; ut eórum
          patrocínia júgiter sentiámus. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Visto que nós, Senhor, celebramos sempre a solenidade dos vossos
          Santos Mártires Basilides, Cirino, Nabor e Nazário, concedei-nos, Vos
          rogamos, que alcancemos incessantemente o seu patrocínio. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
