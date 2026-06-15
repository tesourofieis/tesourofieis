import { MissalRefLink as Link } from "~/components/MissalRefLink";
import { H1 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";

export default function Page0104() {
  return (
    <PageWrapper>
      <H1 text="Oitava dos Santos Inocentes, a 4 de Janeiro" />

      <Typography className="aside">
        Como na{" "}
        <Link className="link" href="/missal/santos/12-28">
          Missa Santos Inocentes
        </Link>{" "}
      </Typography>
    </PageWrapper>
  );
}
