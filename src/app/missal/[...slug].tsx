import { useLocalSearchParams } from "expo-router";
import { MissalContentPage } from "~/components/MissalContentPage";
import { getMissalPage, missalSlugs } from "~/lib/content/missal/registry";
import { Typography } from "~/components/typography";

/**
 * Catch-all renderer for pages migrated to the content registry.
 * Static file-routes under app/missal keep precedence, so a page's old
 * .tsx wins until it is deleted - migration stays per-page reversible.
 */
export default function MissalDynamic() {
  const { slug } = useLocalSearchParams<{ slug?: string | string[] }>();
  const path = Array.isArray(slug) ? slug.join("/") : (slug ?? "");
  const page = getMissalPage(path);

  if (!page) {
    return <Typography style={{ padding: 20 }}>Página não encontrada: {path}</Typography>;
  }

  return <MissalContentPage page={page} />;
}

export function generateStaticParams(): { slug: string[] }[] {
  // Static export prerenders registry slugs; file-routes keep theirs.
  return missalSlugs().map((s) => ({ slug: s.split("/") }));
}
