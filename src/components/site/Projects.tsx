import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

import { ProjectVisual } from "./ProjectVisual";
import { SectionIntro, Tag } from "./primitives";

function ArrowButton() {
  return (
    <span
      aria-hidden
      className="grid size-11 shrink-0 place-items-center rounded-full border border-border-strong text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}

function CardInfo({ project, size }: { project: Project; size: "lg" | "md" }) {
  return (
    <div className={cn("flex flex-col", size === "lg" ? "p-6 lg:px-7 lg:py-6" : "p-6")}>
      <div className="label-mono flex flex-col gap-1 text-muted-foreground sm:flex-row sm:justify-between">
        <span>{project.category}</span>
        <span>{project.context}</span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-4 md:mt-4">
        <h3
          className={cn(
            "tracking-tight text-foreground",
            size === "lg" ? "text-[26px] md:text-[34px]" : "text-[24px] md:text-[26px]",
          )}
        >
          {project.title} — {project.tagline.replace(/\.$/, "")}.
        </h3>
        <ArrowButton />
      </div>
      <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
        {project.summary}
      </p>
      <ul aria-label="Tags" className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag className="py-0.5 text-[11px]">{t}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({
  project,
  variant,
  delay = 0,
}: {
  project: Project;
  variant: "featured" | "standard" | "compact";
  delay?: number;
}) {
  return (
    <article
      className="reveal h-full"
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        aria-label={`${project.title} — read the case study`}
        className={cn(
          "group block h-full overflow-hidden rounded-3xl border bg-card transition-[border-color,box-shadow] duration-300 hover:border-border-strong hover:shadow-[var(--shadow-soft)] focus-visible:rounded-3xl",
          variant === "compact" && "grid md:grid-cols-2",
        )}
      >
        <div
          className={cn(
            "relative",
            variant === "featured" && "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]",
            variant === "standard" && "aspect-[16/10] md:aspect-[620/350]",
            variant === "compact" && "aspect-[16/10] md:aspect-auto md:min-h-[340px]",
          )}
        >
          <ProjectVisual kind={project.visual} />
        </div>
        <div className={cn(variant === "compact" && "flex items-center")}>
          <CardInfo project={project} size={variant === "featured" ? "lg" : "md"} />
        </div>
      </Link>
    </article>
  );
}

export function Projects() {
  const [featured, second, third, ...rest] = projects;
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-28 bg-background py-14 md:scroll-mt-20 md:py-20"
    >
      <div className="container-page">
        <SectionIntro
          number="02"
          label="Selected projects"
          headingId="projects-title"
          title="Ideas made tangible."
          description="I combine research, creative thinking, design and development to turn ideas into thoughtful digital experiences from understanding user needs to building practical solutions with code."
        />

        <div className="mt-6 space-y-6 md:mt-10">
          {featured && <ProjectCard project={featured} variant="featured" />}
          <div className="grid gap-6 md:grid-cols-2">
            {second && <ProjectCard project={second} variant="standard" />}
            {third && <ProjectCard project={third} variant="standard" delay={90} />}
          </div>
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="compact" />
          ))}
        </div>

        <p className="label-mono mt-8 text-subtle-foreground">
          Previews are illustrative recreations · Case-study details are added as they’re confirmed.
        </p>
      </div>
    </section>
  );
}
