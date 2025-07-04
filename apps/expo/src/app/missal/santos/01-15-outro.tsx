import { Text, View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/16abades";

export default function Page0115Outro() {
  return (
    <PageWrapper>
      <H1 text="S. Amaro, Abade, a 15 de Janeiro" />

      <Text className="comment">
        Confiado desde a mais tenra infância, pelo Senador Eutíquio, seu pai, ao
        grande Patriarca dos Monges do Ocidente, S. Bento, S. Mauro reproduziu
        fielmente todas as virtudes do mestre. Tendo-lhe ordenado o Santo
        Patriarca que socorresse ao jovem Plácido, prestes a morrer afogado,
        Mauro andou, com simplicidade confiante, sobre as águas do lago,
        retirando o menino são e salvo. Enviado às Gálias, propagou a «Santa
        Regra Beneditina», assim chamada nos Concílios; fundou o mosteiro de
        Glanfeuil, onde operou numerosos milagres. Por sua doutrina cheia de
        perfeição evangélica, e, por suas obras, isto é, pelas milhares de
        abadias que cobriram, durante doze séculos, o solo de França, e das
        quais o mosteiro, por ele fundado, foi a primeira fonte, também ele
        prestou brilhante homenagem à divindade de Jesus. Morreu em 584.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
