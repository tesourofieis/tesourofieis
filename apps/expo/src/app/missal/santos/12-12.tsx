import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./12-08";

export default function Page1212() {
  return (
    <PageWrapper>
      <H1 text="Quinto Dia na Oitava, a 12 de Dezembro" />

      <Text className="comment">
        Para mostrar que a Mãe de Jesus ocupa lugar especial no seu culto, a
        Igreja reserva-lhe um Prefácio a ser dito em cada uma de suas festas, no
        qual são citados, à medida que se celebram, os diversos mistérios da
        vida de Maria. Durante toda esta Oitava, o Sacerdote declara ser «coisa
        digna e salutar o dar graças a Deus, nesta festa da Imaculada Conceição
        da Bem-aventurada Virgem Maria, que concebeu seu Filho Unigénito pela
        virtude do Espírito Santo e que, sem perder a glória da virgindade, deu
        ao mundo Jesus Cristo Nosso Senhor». Agradeçamos a Deus o privilégio da
        Imaculada Conceição bem como pela festa de sua celebração anual, que nos
        permite imitar sempre mais esse modelo de toda pureza.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
