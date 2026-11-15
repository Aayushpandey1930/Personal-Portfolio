import { learnings, mindset } from "@/content/profile";

import { SectionIntro } from "./primitives";

export function Learnings() {
  return (
    <section
      id="learnings"
      aria-labelledby="learnings-title"
      className="scroll-mt-28 bg-sand py-14 md:scroll-mt-20 md:py-20"
    >
      <div className="container-page">
        <SectionIntro
          number="03"
          label="My learnings"
          headingId="learnings-title"
          title="Learning, experimenting, and growing."
          description="A space to reflect on design, development, coding, and research while studying computer science."
        />

        <div className="mt-6 grid gap-8 md:mt-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-12">
          <aside className="reveal self-start rounded-2xl border bg-surface p-6 md:p-7 lg:sticky lg:top-32">
            <p className="label-mono text-primary">The mindset</p>
            <blockquote className="mt-5 font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-foreground lg:text-[40px]">
              {mindset.quote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </blockquote>
            <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">{mindset.body}</p>
            <div className="mt-6 border-t pt-5 font-mono text-[11px] leading-relaxed text-primary">
              <p className="uppercase tracking-[0.08em]">{mindset.exploringLabel}</p>
              <p>{mindset.exploring}</p>
            </div>
          </aside>

          <ol className="divide-y border-b">
            {learnings.map((item, i) => (
              <li
                key={item.tag}
                className="reveal grid gap-2 py-7 first:pt-0 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-6 lg:first:pt-2"
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <p className="label-mono pt-1 text-primary">{item.tag}</p>
                <div>
                  <h3 className="text-[19px] font-medium leading-snug tracking-tight text-foreground md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
