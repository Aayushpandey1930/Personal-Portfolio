import { Moon, Plus, Search } from "lucide-react";

import soochImage from "@/assets/Logo sooch.png";
import tourImage from "@/assets/project-touraddict.jpg";
import type { ProjectVisual as VisualKind } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Illustrative, image-led previews for each project card.
 * Built from code (not screenshots) so they stay crisp and scale with the card via container units.
 * They contain no invented data — list rows are drawn as neutral bars.
 */
export function ProjectVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  const Inner = { bigquery: BigQuery, touraddict: TourAddict, community: Community, sooch: Sooch }[
    kind
  ];
  return (
    <div aria-hidden className={cn("@container relative h-full w-full overflow-hidden", className)}>
      <Inner />
    </div>
  );
}

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-[0.6cqw] border-b bg-surface px-[1.4cqw] py-[0.9cqw]">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-[0.7cqw] rounded-full bg-border-strong" />
      ))}
      <span className="mx-auto font-mono text-[max(7px,0.85cqw)] text-subtle-foreground">{url}</span>
    </div>
  );
}

function BigQuery() {
  const rows = [
    { tag: "Feature", w: "78%" },
    { tag: "Change", w: "64%" },
    { tag: "Fix", w: "70%" },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center bg-tint-sage">
      <div className="w-[82%] overflow-hidden rounded-[1.2cqw] border bg-card shadow-[var(--shadow-float)] transition-transform duration-700 group-hover:-translate-y-[0.6cqw]">
        <BrowserBar url="localhost:5000 / bigquery release notes" />
        <div className="grid grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center gap-[1.8cqw] p-[3.2cqw]">
            <p className="font-mono text-[max(6px,0.9cqw)] uppercase tracking-[0.12em] text-muted-foreground">
              BigQuery · Release notes
            </p>
            <p className="font-serif text-[4.6cqw] leading-[0.98] tracking-tight text-foreground">
              Every update,
              <br />
              one calm feed.
            </p>
            <p className="max-w-[90%] text-[max(7px,1.05cqw)] leading-snug text-muted-foreground">
              Parsed from the official RSS feed. Cached, searchable, easy on the eyes.
            </p>
            <div className="flex items-center gap-[0.8cqw] rounded-full border bg-surface px-[1.2cqw] py-[0.9cqw] text-[max(7px,1cqw)] text-subtle-foreground">
              <Search className="size-[1.2cqw] min-w-2" />
              <span>Search updates…</span>
              <span className="ml-auto rounded border px-[0.5cqw] font-mono text-[max(6px,0.8cqw)]">/</span>
            </div>
          </div>
          <div className="m-[1.2cqw] ml-0 flex flex-col gap-[1cqw] rounded-[0.9cqw] bg-ink p-[2cqw]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[max(6px,0.85cqw)] uppercase tracking-[0.12em] text-ink-foreground/60">
                Latest
              </span>
              <span className="flex items-center gap-[0.5cqw] rounded-full bg-ink-muted px-[1cqw] py-[0.4cqw] text-[max(6px,0.85cqw)] text-ink-foreground">
                <Moon className="size-[1cqw] min-w-2" /> Dark
              </span>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="rounded-[0.7cqw] bg-ink-muted p-[1.2cqw]">
                <span className="font-mono text-[max(6px,0.8cqw)] uppercase tracking-[0.1em] text-tint-blue">
                  {r.tag}
                </span>
                <span className="mt-[0.7cqw] block h-[0.8cqw] rounded-full bg-ink-foreground/25" style={{ width: r.w }} />
                <span className="mt-[0.5cqw] block h-[0.6cqw] w-[45%] rounded-full bg-ink-foreground/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TourAddict() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-tint-mist">
      <div className="relative h-[86%] w-[84%] overflow-hidden rounded-[1.2cqw]">
        <img
          src={tourImage}
          alt=""
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay via-transparent to-transparent" />
        <div className="relative flex h-full flex-col p-[3.4cqw] text-on-photo">
          <div className="flex items-center justify-between">
            <span className="text-[max(9px,2.6cqw)] font-semibold tracking-tight">touraddict</span>
            <span className="text-[max(6px,1.6cqw)] opacity-90">Stays · Experiences · Stories</span>
          </div>
          <p className="mt-[5cqw] text-[7cqw] font-medium leading-[1.02] tracking-tight">
            Find the
            <br />
            hidden gems.
          </p>
          <p className="mt-[2cqw] text-[max(7px,1.8cqw)] opacity-90">Travel lighter. Stay local. ↗</p>
        </div>
      </div>
    </div>
  );
}

function Community() {
  const items = [
    { label: "Streetlight", status: "Reported" },
    { label: "Waste pickup", status: "In progress" },
    { label: "Water logging", status: "Reported" },
  ];
  return (
    <div className="absolute inset-0 bg-tint-blue">
      <div className="absolute left-[12%] top-1/2 -translate-y-1/2">
        <p className="text-[8cqw] font-semibold leading-[0.95] tracking-[-0.04em] text-primary">
          community
          <br />
          hero.
        </p>
        <p className="mt-[3cqw] text-[max(7px,2.2cqw)] leading-snug text-muted-foreground">
          Small fixes,
          <br />
          close to home.
        </p>
        <p className="mt-[3cqw] font-mono text-[max(6px,1.6cqw)] uppercase tracking-[0.14em] text-primary">
          A hackathon project
        </p>
      </div>
      <div className="absolute right-[10%] top-[9%] w-[32%] rounded-[4cqw] border-[0.6cqw] border-card bg-card p-[2.4cqw] shadow-[var(--shadow-float)] transition-transform duration-700 group-hover:-translate-y-[1.2cqw]">
        <div className="flex justify-between text-[max(6px,1.5cqw)] font-medium text-foreground">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <p className="mt-[2.6cqw] font-mono text-[max(5px,1.3cqw)] uppercase tracking-[0.12em] text-muted-foreground">
          Near you
        </p>
        <p className="mt-[0.6cqw] text-[max(8px,2.6cqw)] font-medium leading-tight tracking-tight text-foreground">
          Make the block better.
        </p>
        <div className="mt-[2cqw] flex items-center justify-between rounded-[1.6cqw] bg-primary p-[2.2cqw] text-primary-foreground">
          <span className="text-[max(7px,1.9cqw)] font-medium">Report an issue</span>
          <Plus className="size-[2.4cqw] min-w-2" />
        </div>
        <ul className="mt-[1.6cqw] space-y-[1.2cqw]">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-center justify-between rounded-[1.2cqw] bg-surface px-[1.6cqw] py-[1.3cqw] text-[max(6px,1.45cqw)] text-foreground"
            >
              <span>{it.label}</span>
              <span className="text-muted-foreground">{it.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Sooch() {
  return (
    <div className="absolute inset-0 bg-tint-stone">
      <div className="absolute left-[9%] top-1/2 aspect-square w-[44%] -translate-y-1/2 -rotate-3 overflow-hidden rounded-[2cqw] shadow-[var(--shadow-float)] transition-transform duration-700 group-hover:-rotate-1">
        <img
          src={soochImage}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute right-[9%] top-1/2 flex aspect-square w-[44%] -translate-y-1/2 rotate-2 flex-col justify-between rounded-[2cqw] bg-ink p-[4cqw] text-ink-foreground shadow-[var(--shadow-float)] transition-transform duration-700 group-hover:rotate-0">
        <span className="font-mono text-[max(7px,1.9cqw)] uppercase tracking-[0.16em] text-ink-foreground/70">
          Sooch
        </span>
        <span className="font-serif text-[8cqw] italic leading-[0.95]">
          Look
          <br />
          closer.
        </span>
        <span className="font-mono text-[max(6px,1.5cqw)] uppercase tracking-[0.12em] text-ink-foreground/60">
          Research · Verify · Explain
        </span>
      </div>
    </div>
  );
}
