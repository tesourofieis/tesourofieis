import { Text } from "react-native";
import { H1, H3 } from "~/components/Headings";
import Language from "~/components/Language";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0310() {
  return (
    <PageWrapper>
      <H1 text="Os Quarenta Mártires, a 10 de Março" />

      <H3 text="Intróito" />

      <Text className="em">Sl. 33, 18</Text>

      <Language>
        <Text className="latin">
          Clamavérunt justi, et Dóminus exaudívit eos: et ex ómnibus
          tribulatiónibus eórum liberávit eos.{" "}
          <Text className="latin">Ps. ibid., 2</Text> Benedícam Dóminum in omni
          témpore: semper laus ejus in ore meo.
          <Text className="versicle"> ℣. </Text>Gloria Patri...
        </Text>
        <Text className="vernacular">
          Os justos clamaram por Deus; então o Senhor ouviu-os e livrou-os de
          todas as tribulações. <Text className="vernacular">Sl. ibid., 2</Text>{" "}
          Bendirei o Senhor em todo o tempo; o seu louvor estará sempre na minha
          boca.
          <Text className="versicle"> ℣. </Text>Glória ao Pai...
        </Text>
      </Language>

      <H3 text="Oração" />

      <Language>
        <Text className="latin">
          Præsta, quǽsumus, omnípotens Deus: ut, qui gloriósos Mártyres fortes
          in sua confessióne cognóvimus, pios apud te in nostra intercessióne
          sentiámus. Per Dóminum nostrum...
        </Text>
        <Text className="vernacular">
          Concedei-nos, Vos pedimos, ó Deus omnipotente, que, reconhecendo nós a
          fortaleza com que estes Santos Mártires confessaram a fé, sintamos
          também em nosso favor a caridade da sua intercessão junto de Vós. Por
          nosso Senhor...
        </Text>
      </Language>

      <H3 text="Epístola" />

      <LinkCard
        href="/missal/santos/01-10#epístola"
        title="S. S. Fabião e Sebastião, Márts"
      />

      <H3 text="Gradual" />

      <Text className="em">Sl. 132, 1-2</Text>

      <Language>
        <Text className="latin">
          Ecce, quam bonum et quam jucundum, habitáre fratres in unum!
          <Text className="versicle"> ℣. </Text>
          Sicut unguéntum in cápite, quod descéndit in barbam, barbam Aaron.
        </Text>
        <Text className="vernacular">
          Oh! como é bom e suave que os irmãos habitem juntos!
          <Text className="versicle"> ℣. </Text>É como o perfume suave espalhado
          na cabeça de Aarão, e que corre pela barba: pela barba de Aarão.
        </Text>
      </Language>

      <H3 text="Trato" />

      <LinkCard
        href="/missal/comum/6muitosmartires1#trato"
        title="Muitos Mártires - Missa Intret in"
      />

      <H3 text="Evangelho" />

      <LinkCard
        href="/missal/comum/6muitosmartires1#evangelho"
        title="Muitos Mártires - Missa Intret in"
      />

      <H3 text="Ofertório" />

      <Text className="em">Sl. 31, 11</Text>

      <Language>
        <Text className="latin">
          Lætámini in Dómino et exsultáte, justi: et gloriámini, omnes recti
          corde.
        </Text>
        <Text className="vernacular">
          Alegrai-vos no Senhor, ó justos! Exultai de júbilo! Todos aqueles que
          possuem o coração recto serão glorificados.
        </Text>
      </Language>

      <H3 text="Secreta" />

      <Language>
        <Text className="latin">
          Preces, Dómine, tuórum réspice oblationésque fidélium: ut et tibi
          gratæ sint pro tuórum festivitáte Sanctórum, et nobis cónferant tuæ
          propitiatiónis auxílium. Per Dóminum...
        </Text>
        <Text className="vernacular">
          Dignai-Vos olhar benigno, Senhor, para as preces e ofertas dos vossos
          fiéis; e fazei que na festa dos vossos Santos Vos sejam agradáveis e
          nos alcancem o socorro da vossa misericórdia. Por nosso Senhor...
        </Text>
      </Language>

      <H3 text="Comúnio" />

      <Text className="em">Mt. 12, 50</Text>

      <Language>
        <Text className="latin">
          Quicúmque fécerit voluntátem Patris mei, qui in cœlis est: ipse meus
          frater et soror et mater est, dicit Dóminus.
        </Text>
        <Text className="vernacular">
          Aquele que faz a vontade de meu Pai, que está nos céus, é para mim,
          meu irmão, minha irmã e minha mãe: diz o Senhor.
        </Text>
      </Language>

      <H3 text="Postcomúnio" />

      <Language>
        <Text className="latin">
          Sanctórum tuórum, Dómine, intercessióne placátus: præsta, quǽsumus;
          ut, quæ temporáli celebrámus actióne, perpétua salvatióne capiámus.
          Per Dóminum...
        </Text>
        <Text className="vernacular">
          Aplacado, Senhor, com a intercessão dos vossos Santos, permiti, Vos
          imploramos, que alcancemos a salvação eterna com a celebração desta
          acção temporal. Por nosso Senhor...
        </Text>
      </Language>
    </PageWrapper>
  );
}
