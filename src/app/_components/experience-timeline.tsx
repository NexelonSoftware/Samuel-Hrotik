import type { Experience } from "@/types/profile";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

import { TimelineItem } from "./timeline-item";

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-2">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={`${experience.company}-${experience.position}-${experience.period}`}
          company={experience.company}
          position={experience.position}
          period={experience.period}
          location={experience.location}
          description={experience.description}
          skills={experience.skills}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
