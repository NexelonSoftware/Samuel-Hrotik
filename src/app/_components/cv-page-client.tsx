"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type {
  Experience,
  PersonalInfo,
  ProjectSummary,
  SkillCategory,
} from "@/types/profile";

type CVPageClientProps = {
  headerTitle: string;
  headerSubtitle: string;
  summaryTitle: string;
  summaryParagraphs: string[];
  experienceTitle: string;
  skillsTitle: string;
  projectsTitle: string;
  projectDescriptions: Record<string, string>;
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  projectSummaries: ProjectSummary[];
  downloadPdfLabel: string;
};

export function CVPageClient(props: CVPageClientProps) {
  const {
    headerTitle,
    headerSubtitle,
    summaryTitle,
    summaryParagraphs,
    experienceTitle,
    skillsTitle,
    projectsTitle,
    projectDescriptions,
    personalInfo,
    experiences,
    skillCategories,
    projectSummaries,
    downloadPdfLabel,
  } = props;

  const handlePrint = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.print();
  }, []);

  const projects = useMemo(
    () =>
      projectSummaries.map((project) => ({
        ...project,
        description: projectDescriptions[project.title] ?? project.description,
      })),
    [projectDescriptions, projectSummaries],
  );

  return (
    <div className="bg-muted min-h-screen py-10 print:bg-white print:py-0">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4">
        <div className="flex justify-end print:hidden">
          <Button onClick={handlePrint} className="gap-2">
            <Download className="h-4 w-4" />
            <span>{downloadPdfLabel}</span>
          </Button>
        </div>

        <div className="bg-background text-foreground border-border rounded-lg border p-8 shadow-sm print:min-h-screen print:border-0 print:bg-white print:p-10 print:shadow-none">
          <header className="border-border border-b pb-6">
            <h1 className="text-3xl leading-tight font-bold md:text-4xl">
              {personalInfo.name}
            </h1>
            <p className="text-muted-foreground mt-1 text-lg font-semibold">
              {headerTitle}
            </p>
            <p className="text-muted-foreground text-sm">{headerSubtitle}</p>

            <div className="text-muted-foreground mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm print:text-black">
              <span>{personalInfo.location}</span>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="decoration-muted-foreground/60 underline decoration-1 underline-offset-2"
              >
                {personalInfo.email}
              </Link>
              {personalInfo.links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="decoration-muted-foreground/60 underline decoration-1 underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {personalInfo.contactDetails?.length ? (
              <dl className="text-muted-foreground mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 print:text-black">
                {personalInfo.contactDetails.map((detail) => {
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
              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {summaryTitle}
                </h2>
                <div className="text-muted-foreground mt-3 space-y-3 text-sm leading-relaxed print:text-black">
                  {summaryParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {skillsTitle}
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
            </section>

            <section className="space-y-8">
              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {experienceTitle}
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
                            Key skills:
                          </span>{" "}
                          {experience.skills.join(", ")}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-muted-foreground text-xl font-semibold tracking-wide uppercase print:text-black">
                  {projectsTitle}
                </h2>
                <div className="mt-3 space-y-5">
                  {projects.map((project) => (
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
                          Technologies:
                        </span>{" "}
                        {project.technologies.join(", ")}
                      </p>
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
