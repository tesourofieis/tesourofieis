import { Text } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

import Missa from "../comum/16abades";

export default function Page1021() {
  return (
    <PageWrapper>
      <H1 text="S. Hilarião, Abade, a 21 de Outubro" />

      <Text className="comment">
        Depois da era dos martyres, aos quais a Igreja havia reservado a honra
        do culto público, começou-se a colocar sobre os altares os servos de
        Deus que se tinham ilustrado por suas elevadas virtudes sem, contudo,
        terem tido a glória de derramar o sangue por Jesus Cristo. Santo
        Hilarião, no Oriente, e S. Martinho, no Ocidente, abrem a série de
        santos designados, sob o nome de Confessores». Nascido na Palestina,
        Santo Hilarião estudou em Alexandria e, desejando abraçar uma vida mais
        perfeita, tudo abandonou para seguir a Jesus (Ev.). A fama de Santo
        Antão tendo chegado aos seus ouvidos, foi ter com ele, no Egipto. O
        Santo reteve-o dois meses junto de si, para iniciá-lo na vida de
        penitência e contemplação. Em seguida, entregando um cilicio e uma
        tunica de pelle a essa criança de quinze annos, disse-lhe Persevera até
        ao fim, meu filho, e o teu trabalho te há-de valer as delicias do céu.
        Hilarião voltou á Palestina onde instituiu a vida monástica. Depois de
        ter construído diversos mosteiros, dos quais foi o legislador, como
        outrora Moisés para o povo de Deus, retirou-se à ilha de Chipre, fugindo
        da multidão de admiradores que lhe atraía o brilho de suas virtudes, e
        ali morreu santamente na idade de oitenta annos, cerca do anno de 372.
        São Jerónimo foi seu historiador.
      </Text>

      <Missa />
    </PageWrapper>
  );
}
