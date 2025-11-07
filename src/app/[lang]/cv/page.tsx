import { CVPageClient } from "~/app/_components/cv-page-client";
import type { Locale } from "~/i18n.config";
import { getLanguage } from "~/localisation/languages";
import type { ProfileContent } from "~/types/profile";

export const dynamic = "force-static";

const toStringOrFallback = (value: unknown, fallback: string) =>
  typeof value === "string" ? value : fallback;

export default async function CVPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const langData = await getLanguage(lang);
  const profile = langData.profile as ProfileContent;

  return (
    <CVPageClient
      headerTitle={langData.header.fullstackDeveloper}
      headerSubtitle={langData.header.specialization}
      summaryTitle={langData.about.title}
      summaryParagraphs={[
        langData.about.paragraph1,
        langData.about.paragraph2,
        langData.about.paragraph3,
      ]}
      experienceTitle={langData.experience.title}
      skillsTitle={langData.skills.title}
      projectsTitle={langData.projects.title}
      projectDescriptions={{
        [langData.projects.splitwallet.title]:
          langData.projects.splitwallet.description,
      }}
      personalInfo={profile.personalInfo}
      experiences={profile.experiences}
      skillCategories={profile.skillCategories}
      projectSummaries={profile.projectSummaries}
      downloadPdfLabel={toStringOrFallback(
        langData.buttons.downloadPdf,
        "Download PDF",
      )}
    />
  );
}
