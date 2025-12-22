import { Link } from "expo-router";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0103() {
  return (
    <PageWrapper>
      <H1 text="Oitava de S. João, Apóstolo e Evangelista, a 3 de Janeiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/12-27">
          Missa S. João, Apóstolo e Evangelista
        </Link>
      </Typography>
    </PageWrapper>
  );
}
