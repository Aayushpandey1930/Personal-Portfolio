import { creative } from "@/content/profile";
import { cn } from "@/lib/utils";

import { SectionIntro, Tag } from "./primitives";

const practices = [
  "Graphic design",
  "Visual storytelling",
  "Content research",
  "Community building",
  "Collaboration",
];

export function Creative() {
  return (
    <section
      id="creative"
      aria-labelledby="creative-title"
      className="scroll-mt-28 bg-background py-14 md:scroll-mt-20 md:py-20"
    >
      <div className="container-page">
        <SectionIntro
          number="04"
          label="Creative practice"
          headingId="creative-title"
          title="Beyond the interface."
          description={creative.intro}
        />

        <div className="mt-6 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
          {creative.cards.map((card, i) => (
            <article
              key={card.tag}
              className={cn(
                "reveal flex min-h-[280px] flex-col justify-between rounded-2xl p-6 md:min-h-[310px] md:p-8",
                card.variant === "serif" ? "bg-tint-blue" : "bg-tint-stone",
              )}
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <p className="label-mono text-muted-foreground">{card.tag}</p>
              <h3
                className={cn(
                  "my-8",
                  card.variant === "serif"
                    ? "display-serif text-[60px] text-primary md:text-[64px] lg:text-[84px]"
                    : "display-sans text-[52px] tracking-[-0.04em] text-foreground/85 md:text-[56px] lg:text-[76px]",
                )}
              >
                {card.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </h3>
              <p className="text-[13px] text-muted-foreground">{card.caption}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-8 grid gap-4 border-t pt-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-0">
          <p className="label-mono pt-1 text-primary">{creative.collaboration.label}</p>
          <div>
            <h3 className="text-[22px] tracking-tight text-foreground md:text-[24px]">
              {creative.collaboration.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              {creative.collaboration.body}
            </p>
            <ul aria-label="Practices" className="mt-5 flex flex-wrap gap-2">
              {practices.map((p) => (
                <li key={p}>
                  <Tag>{p}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
