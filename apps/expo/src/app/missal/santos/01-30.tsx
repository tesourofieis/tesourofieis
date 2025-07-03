import { Text, View } from "react-native";
import PageWrapper from "~/components/Page";
import { H1 } from "~/components/Headings";


import Missa from "./../comum/17virgensmartires1";

export default function Page0130() {
  return (
    <PageWrapper>
      <H1 text="Santa Martinha, Virgem e Márt., a 30 de Janeiro" />

      <Text className="comment">
        Honramos hoje uma virgem que, pela sua constância no meio dos mais
        atrozes suplícios, prestou pública homenagem à divindade do Cristo seu
        Esposo (Ev.). «Sou cristã, declara aos carrascos, e confesso a Jesus
        Cristo». A Epístola coloca em seus lábios as palavras da Sabedoria:
        «Senhor, meu Salvador, vós sois o meu auxílio e protector». Ela própria
        dizia, no meio dos sofrimentos: «Tenho meu Senhor Jesus Cristo que me
        fortalece». Santa Martinha foi degolada em 228 e foi reunir-se, no céu,
        ao cortejo das virgens que cercam o Rei divino (Al.). Seus restos
        repousam no antigo templo de Marte, nome evocando o rei da guerra,
        transformado em igreja que tomou o nome dessa virgem. Armemo-nos, para
        defender a divindade de Jesus, com o amor à pureza.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
