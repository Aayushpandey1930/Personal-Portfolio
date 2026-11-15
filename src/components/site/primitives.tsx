import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong px-3 py-1 text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <p className="label-mono flex items-center gap-3 text-foreground">
      {number && <span className="text-primary">{number}</span>}
      <span>{children}</span>
    </p>
  );
}

export function ComingSoon({ children = "Details coming soon" }: { children?: ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center gap-2 rounded-full border border-dashed border-border-strong px-3 py-1.5 text-subtle-foreground">
      <span aria-hidden className="size-1.5 rounded-full bg-border-strong" />
      {children}
    </span>
  );
}

export function SectionIntro({
  number,
  label,
  title,
  description,
  headingId,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
  headingId: string;
}) {
  return (
    <div className="reveal rounded-2xl border bg-card px-6 py-7 md:px-8 md:py-8">
      <SectionLabel number={number}>{label}</SectionLabel>
      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center lg:gap-12">
        <h2
          id={headingId}
          className="heading-section max-w-[760px] text-[34px] text-foreground md:text-[44px] lg:text-[52px]"
        >
          {title}
        </h2>
        <p className="text-[16px] leading-relaxed text-muted-foreground lg:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}
