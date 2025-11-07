import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
  isLast?: boolean;
}

export function TimelineItem({
  company,
  position,
  period,
  location,
  description,
  skills,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="group relative pb-12 pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="bg-border group-hover:bg-primary/70 absolute top-0 left-0 h-full w-px transition-colors duration-300"></div>
      )}

      {/* Timeline dot */}
      <div className="border-background bg-muted group-hover:border-primary/20 group-hover:bg-primary absolute top-0 left-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 transition-colors duration-300">
        <div className="bg-primary/70 group-hover:bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <h3 className="text-xl font-bold">{position}</h3>
          <span className="text-muted-foreground text-sm font-medium">
            {period}
          </span>
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="text-primary font-medium">{company}</div>
          <div className="text-muted-foreground text-sm">{location}</div>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
