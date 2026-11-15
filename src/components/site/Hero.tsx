import { ArrowDown, ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-workspace.jpg";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="introduction"
      aria-labelledby="hero-title"
      className="scroll-mt-32 bg-background md:scroll-mt-24"
    >
      <div className="container-page">
        <div className="label-mono flex items-center justify-between border-t pt-6 text-muted-foreground md:pt-10">
          <span>A personal portfolio</span>
          <span>Vol. 01 / 2026</span>
        </div>

        <div className="mt-6 grid gap-8 rounded-3xl border bg-card p-6 sm:p-8 md:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-12 lg:p-10 lg:py-14">
          <div>
            <p className="label-mono inline-flex items-start gap-2.5 rounded-full border bg-surface px-3.5 py-2 text-[11px] text-foreground md:items-center md:text-[12px]">
              <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-primary md:mt-0" />
              {profile.role}
            </p>

            <h1 id="hero-title" className="mt-7 text-foreground">
              <span className="display-sans block text-[42px] sm:text-[60px] lg:text-[76px] xl:text-[86px]">
                Hi, I’m Aayush Pandey.
              </span>
              <span className="display-serif mt-1 block text-[48px] text-primary sm:text-[68px] lg:text-[86px] xl:text-[98px]">
                I turn curiosity
                <br />
                into things.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-[17px] leading-[1.6] text-muted-foreground lg:mt-9 lg:text-[18px]">
              {profile.heroIntro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "hero", size: "pill" }),
                  "justify-between sm:justify-center",
                )}
              >
                Explore my work <ArrowRight aria-hidden />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "heroOutline", size: "pill" }),
                  "justify-between sm:justify-center",
                )}
              >
                Get in touch <ArrowRight aria-hidden />
              </a>
            </div>
          </div>

          <figure className="hero-image aspect-[420/455] w-full rounded-2xl object-cover">
            <img
              src="/profile.png.png"
              alt="Aayush Pandey"
              width={1024}
              height={1120}
              fetchPriority="high"
              decoding="async"
              className="aspect-[420/455] w-full rounded-2xl object-cover"
            />
            <figcaption className="label-mono flex items-center justify-center px-2 py-2 text-[10px] text-foreground/80">
              <span>A little space for big ideas.</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <p className="text-[13px] text-muted-foreground">
            Based in Kanpur · Open to possibilities
          </p>
          <a
            href="#skills"
            className="label-mono inline-flex items-center gap-1.5 text-[12px] text-primary hover:underline"
          >
            A few things about me <ArrowDown aria-hidden className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
