import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page1114() {
  return (
    <PageWrapper>
      <H1 text="S. Josafá, B. e Mártir, a 14 de Novembro" />

      <H3 text="Intróito" />

      <Language>
        <Text className="latin">
          Gaudeámus omnes in Dómino, diem festum celebrántes sub honóre beáti
          Jósaphat Mártyris: de cujus passióne gaudent Angeli et colláudant
          Fílium Dei. <Text className="latin">Ps. 32, 1</Text> Exsultáte, justi,
          in Dómino: rectos decet collaudátio.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Alegremo-nos todos no Senhor, neste dia em que celebramos a festa em
          honra do B. Mártir Josafá, de cujo martírio se regozijam os Anjos,
          louvando, unissonamente, o Filho de Deus.{" "}
          <Text className="vernacular">Sl. 32, 1</Text> Aclamai o Senhor, ó
          justos, pois é aos que possuem coração recto que pertence louvar o
          Senhor.<Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Excita, quǽsumus, Dómine, in Ecclésia tua Spíritum, quo replétus
          beátus Jósaphat Martyr et Póntifex tuus ánimam suam pro óvibus pósuit:
          ut, eo intercedénte, nos quoque eódem Spíritu moti ac roboráti, ánimam
          nostram pro frátribus pónere non vereámur. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Senhor, Vos imploramos, despertai na vossa Igreja, o Espírito de que o
          B. Josafá, vosso Mártir, estava cheio e que o levou a dar a vida pelas
          suas ovelhas, a fim de que pela sua intercessão, animados e
          fortalecidos pelo mesmo Espírito, nunca temamos sacrificar a nossa
          vida pelos nossos irmãos. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        title="S. Tomás de Cantorbéry, B. e M."
        href="/missal/santos/12-29#epístola"
      />

      <H3 text="Gradual" />

      <Text className="em">Sl. 88, 21-23</Text>

      <Language>
        <Text className="latin">
          Invéni David servum meum, óleo sancto meo unxi eum: manus enim mea
          auxiliábitur ei, et bráchium meum confortábit eum.
          <Text className="versicle"> ℣. </Text>Nihil profíciet inimícus in eo,
          et fílius iniquitátis non nocébit ei.
        </Text>
        <Text className="vernacular">
          Encontrei o meu servo David e ungi-o com meu óleo sagrado: a minha mão
          o auxiliará e o meu braço o fortalecerá.
          <Text className="versicle"> ℣. </Text>Meu inimigo nada poderá contra
          ele e o filho da iniquidade nenhum mal lhe fará.
        </Text>
        <Text className="latin">
          Allelúja, allelúja.<Text className="versicle"> ℣. </Text>Hic est
          sacérdos, quem coronávit Dóminus. Allelúja.
        </Text>
        <Text className="vernacular">
          Aleluia, aleluia. Eis o sacerdote que o Senhor coroou. Aleluia.
        </Text>
      </Language>

      <H3 text="Evangelho" />

      <LinkCard
        title="S. Tomás de Cantorbéry, B. e M."
        href="/missal/santos/12-29#evangelho"
      />

      <H3 text="Ofertório" />

      <Text className="em">Jo. 15, 13</Text>

      <Language>
        <Text className="latin">
          Majórem caritátem nemo habet, ut ánimam suam ponat quis pro amícis
          suis.
        </Text>
        <Text className="vernacular">
          Ninguém pode dar maior prova de amor do que sacrificar a vida pelos
          seus amigos.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Clementíssime Deus, múnera hæc tua benedictióne perfunde, et nos in
          fide confírma: quam sanctus Jósaphat Martyr et Póntifex tuus, effúso
          sánguine, asséruit. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Ó clementíssimo Deus, infundi abundantemente a vossa bênção sobre
          estas ofertas; e dignai-Vos fortalecer-nos na fé, pela qual o vosso
          Santo Mártir e Pontífice Josafá derramou o sangue. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Jo. 10, 14</Text>

      <Language>
        <Text className="latin">
          Ego sum pastor bonus: et cognósco oves meas et cognóscunt me meæ.
        </Text>
        <Text className="vernacular">
          Sou o bom pastor: conheço as minhas ovelhas; e as minhas ovelhas
          conhecem-me.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Spíritum, Dómine, fortitúdinis hæc nobis tríbuat mensa cœléstis: quæ
          sancti Jósaphat Mártyris tui atque Pontíficis vitam pro Ecclésiæ
          honóre júgiter áluit ad victóriam. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Que o Espírito da fortaleza, Senhor, nos seja dado nesta celestial
          mesa, em que o vosso Santo Mártir e Pontífice Josafá encontrou sempre
          alimento de vida até alcançar a vitória em honra da Igreja. Por nosso
          Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
