import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageSalvenobrepadroeira() {
  return (
    <PageWrapper>
      <H1 text="Salve, nobre Padroeira" />

      <View className="not-content">
        <Typography className="vernacular">
          Salve, nobre Padroeira Do Povo, teu protegido, Entre todos escolhido,
          Para povo do Senhor.
        </Typography>
        <Typography className="vernacular">
          Refrão: Ó glória da nossa terra, Que tens salvado mil vezes, Enquanto
          houver Portugueses, Tu serás o seu amor.
        </Typography>
        <Typography className="vernacular">
          Com tua graça e beleza Um jardim não ornas só, Linda flor de Jericó,
          De Portugal és a Flor!
        </Typography>
        <Typography className="vernacular">
          Flor de suave perfume Para toda a Lusa Gente, Entre nós, em cada
          crente Tens esmerado cultor.
        </Typography>
        <Typography className="vernacular">
          És a obra mais sublime Que saiu das mãos de Deus. Nem na terra nem nos
          céus, Há criatura maior!
        </Typography>
        <Typography className="vernacular">
          A Tua glória é valer-nos, Não tens maior alegria; Ninguém chama por
          Maria, Que não alcance favor.
        </Typography>
        <Typography className="vernacular">
          És a nossa padroeira Não largues o padroado Do rebanho confiado Ao eu
          poder protector.
        </Typography>
        <Typography className="vernacular">
          Portugal, qual outra Fénix, À vida torne outra vez: Não se chame
          português Quem cristão de fé não for.
        </Typography>
      </View>
    </PageWrapper>
  );
}
