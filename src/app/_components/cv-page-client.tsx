"use client";

import Link from "next/link";
import { useCallback } from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import useTranslation from "~/language/useTranslation";
import type { LangType } from "~/language/languages";
import type { ProfileContent } from "~/types/profile";

type CVSections = LangType["cvSections"];

type CVPageClientProps = {
  langObj: LangType;
};

export function CVPageClient({ langObj }: CVPageClientProps) {
  const { t, lang } = useTranslation();
  const profileContent = langObj.profile as ProfileContent;
  const personalInfo = profileContent.personalInfo;
  const contactDetails = personalInfo.contactDetails ?? [];
  const experiences = profileContent.experiences ?? [];
  const skillCategories = profileContent.skillCategories ?? [];
  const projectSummaries = profileContent.projectSummaries ?? [];
  const cvSections = langObj.cvSections as CVSections | undefined;
  const statusItems = cvSections?.status?.items ?? [];
  const competencyItems = cvSections?.competencies?.items ?? [];
  const principleItems = cvSections?.principles?.items ?? [];
  const achievementItems = cvSections?.achievements?.items ?? [];
  const languageItems = cvSections?.languages?.items ?? [];
  const nexelonSection = cvSections?.nexelon;

  const handlePrint = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.print();
  }, []);

  return (
    <div className="bg-muted min-h-screen py-10 print:bg-white print:py-0">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4">
        <div className="flex justify-end print:hidden">
          <Button onClick={handlePrint} className="gap-2">
            <Download className="h-4 w-4" />
            <span>{t(lang.buttons.downloadPdf)}</span>
          </Button>
        </div>

        <div className="bg-background text-foreground border-border rounded-lg border p-8 shadow-sm print:min-h-screen print:border-0 print:bg-white print:p-10 print:shadow-none">
          <header className="border-border border-b pb-6">
            <h1 className="text-3xl leading-tight font-bold md:text-4xl">
              {t(lang.profile.personalInfo.name)}
            </h1>
            <p className="text-muted-foreground mt-1 text-lg font-semibold">
              {t(lang.header.fullstackDeveloper)}
            </p>

            {contactDetails.length ? (
              <dl className="text-muted-foreground mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 print:text-black">
                {contactDetails.map((detail) => {
                  const noteText = detail.note ? ` ${detail.note}` : "";
                  const key = `${detail.label}-${detail.value}`;
                  const isExternalLink =
                    detail.href?.startsWith("http") ?? false;

                  return (
                    <div key={key} className="flex flex-col gap-0.5">
                      <dt className="text-foreground font-semibold print:text-black">
                        {detail.label}
                      </dt>
                      <dd className="text-muted-foreground print:text-black">
                        {detail.href ? (
                          <Link
                            href={detail.href}
                            className="decoration-muted-foreground/60 underline decoration-1 underline-offset-2"
                            target={isExternalLink ? "_blank" : undefined}
                            rel={isExternalLink ? "noreferrer" : undefined}
                          >
                            {`${detail.value}${noteText}`}
                          </Link>
                        ) : (
                          `${detail.value}${noteText}`
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            ) : null}
          </header>

          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-10">
            <section className="space-y-8">
              {statusItems.length ? (
                <div>
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {langObj.cvSections?.status?.title}
                  </h2>
                  <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed print:text-black">
                    {statusItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {t(lang.about.title)}
                </h2>
                <div className="text-muted-foreground mt-3 space-y-3 text-sm leading-relaxed print:text-black">
                  <p>{t(lang.about.paragraph1)}</p>
                  <p>{t(lang.about.paragraph2)}</p>
                  <p>{t(lang.about.paragraph3)}</p>
                </div>
              </div>

              {achievementItems.length ? (
                <section className="mt-6">
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {langObj.cvSections?.achievements?.title}
                  </h2>
                  <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed print:text-black">
                    {achievementItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {t(lang.skills.title)}
                </h2>
                <div className="mt-3 space-y-4 text-sm">
                  {skillCategories.map((category) => (
                    <div key={category.name} className="space-y-1">
                      <h3 className="text-foreground font-semibold print:text-black">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground print:text-black">
                        {category.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {competencyItems.length ? (
                <div>
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {langObj.cvSections?.competencies?.title}
                  </h2>
                  <div className="text-muted-foreground mt-3 space-y-4 text-sm leading-relaxed print:text-black">
                    {competencyItems.map((item) => (
                      <div key={item.title}>
                        <h3 className="text-foreground font-semibold print:text-black">
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {principleItems.length ? (
                <div>
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {langObj.cvSections?.principles?.title}
                  </h2>
                  <ul className="text-muted-foreground mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed print:text-black">
                    {principleItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {languageItems.length ? (
                <div>
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {langObj.cvSections?.languages?.title}
                  </h2>
                  <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-relaxed print:text-black">
                    {languageItems.map((item) => (
                      <li key={`${item.name}-${item.level}`}>
                        <span className="text-foreground font-semibold print:text-black">
                          {item.name}
                        </span>{" "}
                        · {item.level}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>

            <section className="space-y-8">
              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {t(lang.experience.title)}
                </h2>
                <div className="mt-3 space-y-6">
                  {experiences.map((experience) => (
                    <article
                      key={`${experience.company}-${experience.position}-${experience.period}`}
                      className="space-y-1"
                    >
                      <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                        <h3 className="text-foreground text-lg font-semibold print:text-black">
                          {experience.position} · {experience.company}
                        </h3>
                        <span className="text-muted-foreground text-sm print:text-black">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm print:text-black">
                        {experience.location}
                      </p>
                      {experience.description ? (
                        <p className="text-muted-foreground text-sm print:text-black">
                          {experience.description}
                        </p>
                      ) : null}
                      {experience.skills?.length ? (
                        <p className="text-muted-foreground text-sm print:text-black">
                          <span className="text-foreground font-semibold print:text-black">
                            {t(lang.cv.keySkills)}
                          </span>{" "}
                          {experience.skills.join(", ")}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>

              {nexelonSection ? (
                <div className="space-y-4">
                  <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                    {nexelonSection.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed print:text-black">
                    {nexelonSection.intro}
                  </p>
                  {nexelonSection.responsibilities?.length ? (
                    <div>
                      <h3 className="text-foreground text-base font-semibold print:text-black">
                        {nexelonSection.responsibilitiesTitle}
                      </h3>
                      <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed print:text-black">
                        {nexelonSection.responsibilities.map(
                          (responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {t(lang.projects.title)}
                </h2>
                <div className="mt-3 space-y-5">
                  {projectSummaries.map((project) => (
                    <article key={project.title} className="space-y-1">
                      <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                        <h3 className="text-foreground text-lg font-semibold print:text-black">
                          {project.title}
                        </h3>
                        {project.link ? (
                          <Link
                            href={project.link}
                            className="text-muted-foreground decoration-muted-foreground/60 text-sm underline decoration-1 underline-offset-2 print:text-black"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.link}
                          </Link>
                        ) : null}
                      </div>
                      <p className="text-muted-foreground text-sm print:text-black">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground text-sm print:text-black">
                        <span className="text-foreground font-semibold print:text-black">
                          {t(lang.cv.technologies)}
                        </span>{" "}
                        {project.technologies.join(", ")}
                      </p>
                      {project.impact ? (
                        <p className="text-muted-foreground text-sm print:text-black">
                          <span className="text-foreground font-semibold print:text-black">
                            {t(lang.cv.impactLabel)}
                          </span>{" "}
                          {project.impact}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
