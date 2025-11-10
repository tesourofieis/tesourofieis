import { View } from "react-native";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function PageUmdiadescestes() {
  return (
    <PageWrapper>
      <H1 text="Senhora, um dia descestes" />

      <View className="not-content">
        <Typography className="vernacular">
          Senhora, um dia descestes À terra que em vós confia: Descestes à Serra
          d’ Aire, Em plena Cova da Iria.
        </Typography>
        <Typography className="vernacular">
          Refrão: Salve, Regina! Salve, Regina! Ora pro nobis, Maria! (2x)
        </Typography>
        <Typography className="vernacular">
          Nas mãos trazíeis o terço, Que pende da vossa imagem: Na fronte uma
          estrela de ouro, Nos lábios doce mensagem.
        </Typography>
        <Typography className="vernacular">
          Falando a três pastorinhos De cima duma azinheira Pregastes a
          penitência Aos povos da terra inteira.
        </Typography>
        <Typography className="vernacular">
          Pedistes que nos uníssemos Em oração e concórdia, Com pena dos
          pecadores, Ó Mãe de misericórdia.
        </Typography>
        <Typography className="vernacular">
          Olhai, ó Virgem, do Céu O mundo que pede luz. Bendita sejais, Senhora!
          Bendito seja Jesus!
        </Typography>
      </View>
    </PageWrapper>
  );
}
