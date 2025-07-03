import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";


import { Text, View } from "react-native";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";

export default function Page0916Outro2() {
  return (
    <PageWrapper>
      <H1 text="Santa Eufémia e Outros, Mártires, a 16 de Setembro" />
      <Text className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Text>
      <H3 text="Oração" />
      <Text className="text-base">
        Concedei aos vossos servos, Senhor, um jubiloso socorro, a fim de que,
        celebrando devotamente neste dia, em cada ano, a paixão dos vossos S. S.
        Mártires Eufémia, Lúcia e Geminiano, imitemos também a constância da sua
        fé. Por nosso Senhor...
      </Text>
      <H3 text="Evangelho" />
      <LinkCard
        title="Evangelho Muitos Mártires "
        href="/missal/santos/7muitosmartires2#evangelho"
      />
      <H3 text="Secreta" />
      <Text className="text-base">
        Atendei propício aos votos do vosso povo, Senhor, Vos rogamos, e permiti
        que gozemos a protecção dos sufrágios daqueles de quem pela vossa graça
        celebramos esta solenidade. Por nosso Senhor...
      </Text>
      <H3 text="Postcomúnio" />
      <Text className="text-base">
        Ouvi as nossas preces, Senhor, e permiti que sejamos protegidos
        incessantemente com os auxílios daqueles cuja solenidade celebramos. Por
        nosso Senhor...
      </Text>
    </PageWrapper>
  );
}
