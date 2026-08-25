import Language from "~/components/Language";
import { H1, H3 } from "~/components/Headings";
import LinkCard from "~/components/LinkCard";
import PageWrapper from "~/components/Page";
import { Typography } from "~/components/typography";
import type { MissalPage, MissalSection } from "~/lib/content/schema";

function Section({ section }: { section: MissalSection }) {
  switch (section.kind) {
    case "heading":
      return <H3 text={section.text} />;
    case "rubric":
      return <Typography className="aside">{section.text}</Typography>;
    case "source":
      return <Typography className="em">{section.text}</Typography>;
    case "ref":
      return <LinkCard href={section.href} title={section.title} />;
    case "text":
      return (
        <Language>
          <Typography className="latin">{section.body.la}</Typography>
          <Typography className="vernacular">{section.body.pt}</Typography>
        </Language>
      );
  }
}

export function MissalContentPage({ page }: { page: MissalPage }) {
  return (
    <PageWrapper>
      <H1 text={page.title} />
      {page.sections.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </PageWrapper>
  );
}
