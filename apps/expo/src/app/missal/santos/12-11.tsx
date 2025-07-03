import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "../comum/sumospontifices";

export default function Page1211() {
  return (
    <PageWrapper>
      <H1 text="S. Dâmaso I, Papa e Conf., a 11 de Dezembro" />

      <Text className="comment">
        S. Dâmaso I, espanhol, sucedeu a Libério na cátedra de Pedro, no ano de
        366, participando desta forma, à dignidade daquele que a Epístola chama
        «o Pontífice santo, inocente, sem mancha e mais elevado do que os céus».
        Governou a Igreja durant 17 anos, e foi o servo fiel e prudente, do qual
        fala o Evangelho, e a quem «o Senhor confia a sua família para dar-lhe o
        alimento em tempo oportuno». Passada a era das perseguições, começava,
        com o século IV, a das heresias. Damásio confirmou o segundo Concílio
        ecuménico de Constantinopla, no qual fora condenado o Arianismo. Por
        ordem do Santo Padre, S. Jerónimo traduziu o Novo Testamento para o
        latim. O santo papa aumentou o esplendor do culto, regulando a psalmodia
        e decretando que se dissesse no fim dos salmos o «Glória Patri», que os
        baptiza, por assim dizer, na Santíssima Trindade. Morreu em 384.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
