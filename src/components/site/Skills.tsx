import { Code2, Lightbulb, PenTool } from "lucide-react";

import { skillGroups, type SkillGroup } from "@/content/profile";

import { SectionIntro, Tag } from "./primitives";

const icons: Record<SkillGroup["icon"], typeof PenTool> = {
  pen: PenTool,
  code: Code2,
  bulb: Lightbulb,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-28 bg-sand py-14 md:scroll-mt-20 md:py-20"
    >
      <div className="container-page">
        <SectionIntro
          number="01"
          label="My skills"
          headingId="skills-title"
          title="Design, code, and creative problem-solving."
          description="From responsive interfaces to the logic behind them: a toolkit I’m actively learning, building with and practising connecting visual craft, technical thinking and careful execution."
        />

        <ul className="mt-6 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <li
                key={group.title}
                className="skills-card reveal flex flex-col rounded-2xl border bg-surface p-6 transition-colors hover:border-border-strong lg:p-7"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <Icon aria-hidden className="size-5 text-primary" strokeWidth={1.6} />
                <h3 className="mt-6 text-[21px] tracking-tight text-foreground md:mt-8">
                  {group.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
                <ul aria-label={`${group.title} tools`} className="mt-auto flex flex-wrap gap-2 pt-7">
                  {group.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
