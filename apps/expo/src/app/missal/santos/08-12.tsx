import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/20virgemnaomartir1";

export default function Page0812() {
  return (
    <PageWrapper>
      <H1 text="S. Clara, Virgem, a 12 de Agosto" />

      <Text className="comment">
        Deus fizera surgir ao lado de S. Bento sua irmã Santa Escolástica e
        colocou ao lado de S. Francisco de Assis Santa Clara, proposta por ele à
        segunda Ordem, por eles fundada. A santa nasceu em Assis na Itália, no
        fim do XII século, indo ter com o Patriarca S. Francisco exprimiu-lhe o
        desejo de tornar-se esposa do Cristo (Ep.). Não havendo ainda instituído
        religiosas para a sua Ordem, o Santo levou a jovem virgem para as
        Beneditinas de S. Paulo, depois para o mosteiro beneditino de Santo Anjo
        de Panso, nas vizinhanças de Assis. Inés, sua irmã. vindo reunir-se a
        ela, S. Francisco alojou a ambas numa pequena casa contigua à igreja de
        São Damião. Em breve, sua mãe e numerosas pessoas ai se reuniram. A
        regra continha austeridades até então desconhecidas nos mosteiros de
        mulheres. Andavam descalças, dormiam no chão, observavam perpétua
        abstinência e faziam da pobreza a base de sua vida, a fim de que, mais
        desapegadas, pudessem melhor entregar-se a Deus. A devoção
        extraordinária de Santa Clara para com o SSmo Sacramento foi
        recompensada por um milagre. Num dia em que os Sarracenos que sitiavam
        Assis, quiseram penetrar no convento de S. Damião, Santa Clara, tomando
        o cibório, os pôs em fuga. A 11 de Agosto de 1253, visitada por um coro
        de Virgens, vestidas de branco, entre as quais se distinguia uma
        excedendo as outras em beleza (Off.), partiu para o esposo (Comm.) sendo
        canonizada dois anos depois pelo Papa Alexandre IV.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
