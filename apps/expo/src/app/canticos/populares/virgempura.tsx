import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function PageVirgempura() {
  return (
    <PageWrapper>
      <H1 text="Virgem Pura" />

      <View className="not-content">
        <Text className="text-pretty">
          Virgem pura, tua ternura É de alívio ao meu penar. Noite e dia, de
          Maria A beleza hei-de cantar.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          É donzela toda bela, A mais santa em seu primor, Desde a hora em que
          ela fora Concebida ao Criador.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Foi criada, abençoada, Sem pecado e escravidão; Foi querida, do Céu
          enchida De mil graças de bênção.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Da inimiga serpe antiga A cabeça ela pisou: Foi sua glória, sua
          vitória Que seu Filho lhe alcançou.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Do divino seu Menino Toda a graça Ela nos dá: Mãe piedosa, carinhosa,
          Nos olhando sempre está.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Aos pedidos dos queridos Abre o terno coração; Aos pedidos dos
          afligidos Ela é toda compaixão.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Aos errantes navegantes Ela acode no alto mar; Pecadores, nos
          terrores, Ela ensina-nos a esperar.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Sobre a cama, onde a chama, A voz perto de morrer, Abre o manto e por
          encanto Muda as dores em prazer.
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Quando a lida desta vida For connosco a terminar, Mãe piedosa,
          poderosa, Vem teus filhos amparar!
        </Text>
        <Text className="text-pretty">{"\n"}</Text>
        <Text className="text-pretty">
          Saúde certa, porta aberta Para o reino do Senhor, Virgem pia, nossa
          guia, Serás sempre nosso amor!
        </Text>
      </View>
    </PageWrapper>
  );
}
