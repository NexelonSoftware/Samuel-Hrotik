import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { langMaps } from "~/language/langMaps";
import { ts, type LangType } from "~/language/languages";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  langObj: LangType;
  link?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  langObj,
  link = "#",
  featured = false,
}: ProjectCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden">
        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src={image ?? "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Link
              href={link}
              className={buttonVariants({ variant: "outline" })}
            >
              {ts(langObj, langMaps.buttons.viewProject)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <Image
          src={image ?? "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline">
              +{tags.length - 3}{" "}
              {ts(langObj, langMaps.projects.more).replace(
                "{count}",
                String(tags.length - 3),
              )}
            </Badge>
          )}
        </div>
        <Link href={link} className={buttonVariants({ variant: "outline" })}>
          {ts(langObj, langMaps.buttons.viewDetails)}
          <ArrowRight className="ml-2 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  );
}
