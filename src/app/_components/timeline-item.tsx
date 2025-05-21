import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  company: string
  position: string
  period: string
  location: string
  description?: string
  skills?: string[]
  isLast?: boolean
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
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-0 h-full w-px bg-border group-hover:bg-primary/70 transition-colors duration-300"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-4 border-background bg-muted flex items-center justify-center -translate-x-1/2 group-hover:border-primary/20 group-hover:bg-primary transition-colors duration-300">
        <div className="h-2 w-2 rounded-full bg-primary/70 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-bold">{position}</h3>
          <span className="text-sm font-medium text-muted-foreground">{period}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="font-medium text-primary">{company}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
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
  )
}
