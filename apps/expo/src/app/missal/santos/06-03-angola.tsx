import { Typography } from "~/components/typography";
import { Link } from "expo-router";
import { H1, H3 } from "~/components/Headings";
import PageWrapper from "~/components/Page";

export default function Page0603Angola() {
  return (
    <PageWrapper>
      <H1 text="S. S. Carlos Lwanga e Outros, Mártires, a 3 de Junho, Em Angola" />
      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/comum/6muitosmartires1">
          Missa Intret in
        </Link>{" "}
        , excepto:
      </Typography>
      <H3 text="Oração" />Ó Deus, que nos permitistes a graça de celebrarmos o
      nascimento no céu dos vossos Santos Mártires Carlos, Matias e seus
      Companheiros, concedei-nos ainda a graça de gozarmos na sua companhia a
      bem-aventurança eterna. Por nosso Senhor...
    </PageWrapper>
  );
}
