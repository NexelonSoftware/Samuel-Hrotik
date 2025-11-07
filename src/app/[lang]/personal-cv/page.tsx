import { CVPageClient } from "~/app/_components/cv-page-client";
import type { Locale } from "~/language/i18n.config";
import { getLanguage } from "~/language/languages";

export default async function CVPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const langObj = await getLanguage(lang);
  return <CVPageClient langObj={langObj} />;
}
