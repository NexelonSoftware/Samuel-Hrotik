import {
  ArrowRight,
  BriefcaseIcon,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SkillBadge } from "../_components/skill-badge";
import { ProjectCard } from "../_components/project-card";
import { ContactForm } from "../_components/contact-form";
import { ThemeToggle } from "../_components/theme-toggle";
import { ExperienceTimeline } from "../_components/experience-timeline";
import LocaleSwitcherNavbar from "../_components/LocaleSwitcherNavbar";
import { SmoothScrollLink } from "../_components/smooth-scroll-link";
import type { Locale } from "~/language/i18n.config";
import { getLanguage, ts } from "~/language/languages";
import type { ProfileContent } from "~/types/profile";
import { langMaps } from "~/language/langMaps";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const langObj = await getLanguage(lang);
  const profile = langObj.profile as ProfileContent;
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold">
            <SmoothScrollLink href="#hero">
              {ts(langObj, langMaps.navbar.devPortfolio)}
            </SmoothScrollLink>
          </div>
          <nav className="hidden gap-6 md:flex">
            <SmoothScrollLink
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {ts(langObj, langMaps.navbar.about)}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {ts(langObj, langMaps.navbar.skills)}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {ts(langObj, langMaps.navbar.projects)}
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {ts(langObj, langMaps.navbar.contact)}
            </SmoothScrollLink>
          </nav>
          <div className="flex items-center justify-center gap-4">
            <LocaleSwitcherNavbar />
            <ThemeToggle />
            <Link
              href="https://github.com/Hroco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-hrotik-071399132/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:samuel.hrotik@gmail.com">
              <Mail className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
            <Button asChild className="hidden sm:inline-flex">
              <SmoothScrollLink href="#contact">
                {ts(langObj, langMaps.buttons.contactMe)}
              </SmoothScrollLink>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container mx-auto px-2 py-24 sm:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {ts(langObj, langMaps.header.fullstackDeveloper)}
                <span className="text-primary">
                  {" "}
                  {ts(langObj, langMaps.header.specialization)}
                </span>
              </h1>
              <p className="text-muted-foreground text-xl">
                {ts(langObj, langMaps.header.buildingModern)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <SmoothScrollLink href="#projects">
                    {ts(langObj, langMaps.buttons.viewMyWork)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
                <Button variant="outline" asChild>
                  <SmoothScrollLink href="#contact">
                    {ts(langObj, langMaps.buttons.getInTouch)}
                  </SmoothScrollLink>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/personal-cv" className="flex items-center">
                    {ts(langObj, langMaps.buttons.downloadCv)}
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-[500px]">
              <Image
                src="/HeroPhoto.jpg?height=500&width=500"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="container mx-auto border-t px-2 py-24 sm:py-32"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[18/15] max-h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="/About.jpg?height=400&width=400"
                  alt="Developer working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {ts(langObj, langMaps.about.title)}
              </h2>
              <p className="text-muted-foreground mb-4">
                {ts(langObj, langMaps.about.paragraph1)}
              </p>
              <p className="text-muted-foreground mb-4">
                {ts(langObj, langMaps.about.paragraph2)}
              </p>
              <p className="text-muted-foreground">
                {ts(langObj, langMaps.about.paragraph3)}
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-2">
              <BriefcaseIcon className="text-primary h-8 w-8" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {ts(langObj, langMaps.experience.title)}
              </h2>
            </div>
            <ExperienceTimeline experiences={profile.experiences} />
          </div>
        </section>

        <section id="skills" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto px-2">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {ts(langObj, langMaps.skills.title)}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  {ts(langObj, langMaps.skills.frontend)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="React" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="Zustand" />
                  <SkillBadge name="React Query" />
                  <SkillBadge name="Shadcn/UI" />
                  <SkillBadge name="Responsive Design" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  {ts(langObj, langMaps.skills.backend)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="tRPC" />
                  <SkillBadge name="PostgreSQL" />
                  <SkillBadge name="Drizzle ORM" />
                  <SkillBadge name="NextAuth.js" />
                  <SkillBadge name="API Design" />
                  <SkillBadge name="Firebase" />
                  <SkillBadge name="Serverless" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  {ts(langObj, langMaps.skills.devops)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="Docker" />
                  <SkillBadge name="Turborepo" />
                  <SkillBadge name="CI/CD" />
                  <SkillBadge name="Vercel" />
                  <SkillBadge name="AWS" />
                  <SkillBadge name="Kubernetes" />
                  <SkillBadge name="Monorepo" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  {ts(langObj, langMaps.skills.other)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Agile" />
                  <SkillBadge name="UI/UX Design" />
                  <SkillBadge name="Performance Optimization" />
                  <SkillBadge name="Internationalization" />
                  <SkillBadge name="Accessibility" />
                  <SkillBadge name="Testing" />
                  <SkillBadge name="Stripe Integration" />
                  <SkillBadge name="AI Integration" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="container mx-auto px-2 py-24 sm:py-32"
        >
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {ts(langObj, langMaps.projects.title)}
          </h2>
          <div className="grid gap-8">
            <ProjectCard
              langObj={langObj}
              title={ts(langObj, langMaps.projects.splitwallet.title)}
              description={ts(
                langObj,
                langMaps.projects.splitwallet.description,
              )}
              image="/Splitwallet.png?height=724&width=1290"
              tags={[
                "Next.js",
                "TypeScript",
                "tRPC",
                "PostgreSQL",
                "Drizzle ORM",
                "Zustand",
                "Tailwind CSS",
              ]}
              link="https://splitwallet.nexelon.sk/"
              featured={true}
            />
            {/* 
            <div className="grid gap-8 md:grid-cols-2">
              <ProjectCard
                title={ts(langObj, langMaps.projects.warehouse.title)}
                description={ts(langObj, langMaps.projects.warehouse.description}
                image="/Warehouse.png?height=300&width=400"
                tags={["Next.js", "React", "PostgreSQL"]}
                langData={ts(langObj, langMaps)}
              />
              <ProjectCard
                title={ts(langObj, langMaps.projects.invoice.title}
                description={ts(langObj, langMaps.projects.invoice.description}
                image="/InvoiceGenerator.png?height=300&width=400"
                tags={["React", "Electron", "Tailwind CSS"]}
                langData={ts(langObj, langMaps}
              />
            </div>
            */}
          </div>
        </section>

        <section id="splitwallet" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto px-2">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {ts(langObj, langMaps.caseStudy.title)}
            </h2>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div className="relative mb-6 h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/Splitwallet.png?height=400&width=600"
                    alt="SplitWallet application screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-[200px] w-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/BalancesDark.jpg?height=100&width=100"
                      alt="SplitWallet UI detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] w-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/ExpensesDark.jpg?height=100&width=100"
                      alt="SplitWallet UI detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] w-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/HomepageDark.jpg?height=100&width=100"
                      alt="SplitWallet UI detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  {ts(langObj, langMaps.caseStudy.overview.title)}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {ts(langObj, langMaps.caseStudy.overview.description)}
                </p>

                <h3 className="mb-4 text-2xl font-bold">
                  {ts(langObj, langMaps.caseStudy.technical.title)}
                </h3>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.technical.item1)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.technical.item2)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.technical.item3)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.technical.item4)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.technical.item5)}
                    </span>
                  </li>
                </ul>

                <h3 className="mb-4 text-2xl font-bold">
                  {ts(langObj, langMaps.caseStudy.features.title)}
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.features.item1)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.features.item2)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.features.item3)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.features.item4)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      {ts(langObj, langMaps.caseStudy.features.item5)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="container mx-auto border-t px-2 py-24 sm:py-32"
        >
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {ts(langObj, langMaps.contact.title)}
              </h2>
              <p className="text-muted-foreground mb-4">
                {ts(langObj, langMaps.contact.description)}
              </p>
              <div className="mb-6 space-y-4">
                <Link
                  href="mailto:samuel.hrotik@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Mail className="text-primary h-5 w-5" />
                  <span className="">samuel.hrotik@gmail.com</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samuel-hrotik-071399132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="text-primary h-5 w-5" />
                  <span className="">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/Hroco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="text-primary h-5 w-5" />
                  <span className="">Github</span>
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              {ts(langObj, langMaps.footer.copyright).replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/Hroco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-hrotik-071399132/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:samuel.hrotik@gmail.com">
              <Mail className="text-muted-foreground hover:text-foreground h-5 w-5 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
