import { ArrowRight, BriefcaseIcon, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { SkillBadge } from "./_components/skill-badge"
import { ProjectCard } from "./_components/project-card"
import { ContactForm } from "./_components/contact-form"
import { ThemeToggle } from "./_components/theme-toggle"
import { ExperienceTimeline } from "./_components/experience-timeline"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">DevPortfolio</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
             <ThemeToggle />
            <Link href="https://github.com/Hroco" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/samuel-hrotik-071399132/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:samuel.hrotik@gmail.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto container mx-auto py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Fullstack Developer
                <span className="text-primary"> Specialized in Next.js & React</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Building modern web and mobile applications with cutting-edge technologies
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
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

        <section id="about" className="container mx-auto py-24 sm:py-32 border-t">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/About.jpg?height=400&width=600"
                  alt="Developer working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
              <p className="text-muted-foreground mb-4">
                I&apos;m a passionate fullstack developer with expertise in building modern web and mobile applications. With
                a strong foundation in Next.js, React, and TypeScript, I create scalable, performant, and user-friendly
                applications.
              </p>
              <p className="text-muted-foreground mb-4">
                My experience spans across the entire development stack, from designing intuitive user interfaces to
                implementing robust backend systems and database architectures. I&apos;m particularly skilled in building
                complex applications with sophisticated state management and synchronization systems.
              </p>
              <p className="text-muted-foreground">
                I&apos;m always eager to take on challenging projects that push the boundaries of what&apos;s possible with modern
                web technologies.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-12">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
            </div>
            <ExperienceTimeline />
          </div>
        </section>

        <section id="skills" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
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
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
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
                <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
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
                <h3 className="text-xl font-bold mb-4">Other Skills</h3>
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

        <section id="projects" className="container mx-auto py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8">
            <ProjectCard
              title="SplitWallet"
              description="A sophisticated expense-sharing application designed to help users track, manage, and split expenses within groups."
              image="/Splitwallet.png?height=724&width=1290"
              tags={["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Drizzle ORM", "Zustand", "Tailwind CSS"]}
              link="https://splitwallet.nexelon.sk/"
              featured={true}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Warehouse Assistant"
                description="A modern warehouse management system with inventory tracking, order management, and real-time analytics."
                image="/Warehouse.png?height=300&width=400"
                tags={["Next.js", "React", "PostgreSQL"]}
              />
              <ProjectCard
                title="Invoice Generator"
                description="Invoice generator for ice cream shop with excel export."
                image="/InvoiceGenerator.png?height=300&width=400"
                tags={["React", "Electron", "Tailwind CSS"]}
              />
            </div>
          </div>
        </section>

        <section id="splitwallet" className="bg-muted/40 py-24 sm:py-32">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">SplitWallet Case Study</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/Splitwallet.png?height=400&width=600"
                    alt="SplitWallet application screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative h-[200px] w-[100px] rounded-lg overflow-hidden">
                    <Image
                      src="/BalancesDark.jpg?height=100&width=100"
                      alt="SplitWallet UI detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] w-[100px] rounded-lg overflow-hidden">
                    <Image
                      src="/ExpensesDark.jpg?height=100&width=100"
                      alt="SplitWallet UI detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] w-[100px] rounded-lg overflow-hidden">
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
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-6">
                  SplitWallet is a sophisticated expense-sharing application designed to help users track, manage, and
                  split expenses within groups. The app allows users to create wallets (expense groups), add expenses,
                  track balances, generate reports, and settle debts efficiently.
                </p>

                <h3 className="text-2xl font-bold mb-4">Technical Highlights</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Built as a monorepo using Next.js, tRPC, PostgreSQL, and Drizzle ORM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Implemented a sophisticated state synchronization system for offline functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Integrated AI-powered receipt scanning using Gemini 2.5 Pro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Developed a smart debt minimization algorithm with multiple reimbursement modes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Created a comprehensive design system with light and dark mode support</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Expense management with custom distribution among users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Group management with multiple wallets and hierarchical organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Real-time updates and offline support with data synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Multiple language support and currency conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Premium features with Stripe subscription integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-24 sm:py-32 border-t">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-4">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>samuel.hrotik@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>https://www.linkedin.com/in/samuel-hrotik-071399132/</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/Hroco</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/Hroco" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/samuel-hrotik-071399132/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:samuel.hrotik@gmail.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
