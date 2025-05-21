import { TimelineItem } from "./timeline-item";

export function ExperienceTimeline() {
  return (
    <div className="space-y-2">
      <TimelineItem
        company="Foxit"
        position="Development Engineer and PDF Specialist"
        period="Jan 2025 - Present · 5 mos"
        location="Slovakia · Remote"
        skills={["PDF", "Next.js", "C++", "Web Development"]}
      />
      
      <TimelineItem
        company="Foxit"
        position="Software Engineer"
        period="Oct 2023 - Jan 2025 · 1 yr 4 mos"
        location="Slovakia · Remote"
        skills={["Git", "English", "Cross-platform Development", "JavaScript", "ESLint", "React.js", "Cloud Applications"]}
      />

      <TimelineItem
        company="Foxit"
        position="Junior Software Engineer"
        period="Jul 2022 - Oct 2023 · 1 yr 4 mos"
        location="Slovakia · Remote"
        skills={["C++", "Python"]}
      />

      <TimelineItem
        company="Foxit"
        position="Quality Assurance Engineer"
        period="Nov 2020 - Jul 2022 · 1 yr 9 mos"
        location="Slovakia · Remote"
      />
      
      <TimelineItem
        company="HIMA"
        position="Developer"
        period="Jun 2020 - Sep 2020 · 4 mos"
        location="Nitra Region, Slovakia"
        description="Development of pipeline application system FLOWorX which includes leak detection. (C++, Qt)"
        skills={["C++", "Qt"]}
        isLast={true}
      />
    </div>
  )
}
