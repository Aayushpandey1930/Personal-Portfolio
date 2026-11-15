import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectVisual } from "@/components/site/ProjectVisual";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackToTop, SiteFooter } from "@/components/site/SiteFooter";
import { ComingSoon, Tag } from "@/components/site/primitives";
import { getNextProject, getProject, type Project } from "@/content/projects";
import { useReveal } from "@/hooks/use-reveal";
import { linkHref } from "@/lib/contact";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return {
        meta: [{ title: "Project not found — Aayush Pandey" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${p.title} — Case study · Aayush Pandey`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="container-page py-24 text-center">
        <p className="label-mono text-primary">404</p>
        <h1 className="heading-section mt-4 text-[40px]">This project doesn’t exist.</h1>
        <Link to="/" hash="projects" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="size-4" aria-hidden /> Back to all projects
        </Link>
      </main>
    </>
  );
}

function Block({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid gap-3 border-t py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
      <h2 className="label-mono pt-1 text-foreground">
        <span className="mr-3 text-primary">{n}</span>
        {label}
      </h2>
      <div className="text-[17px] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Value({ value }: { value: string | null }) {
  return value ? <p className="max-w-[62ch]">{value}</p> : <ComingSoon />;
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const next = getNextProject(project.slug);
  useReveal([project.slug]);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="container-page pb-16 md:pb-24">
          <div className="border-t pt-6 md:pt-10">
            <Link
              to="/"
              hash="projects"
              className="label-mono inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft aria-hidden className="size-3.5" /> All projects
            </Link>
          </div>

          <header className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-16">
            <div>
              <p className="label-mono text-primary">Case study · {project.category}</p>
              <h1 className="mt-5 text-foreground">
                <span className="display-sans block text-[44px] sm:text-[60px] lg:text-[76px]">
                  {project.title}
                </span>
                <span className="display-serif mt-1 block text-[40px] text-primary sm:text-[54px] lg:text-[68px]">
                  {project.tagline}
                </span>
              </h1>
            </div>
            <div>
              <p className="text-[17px] leading-relaxed text-muted-foreground">{project.summary}</p>
              <ul aria-label="Tags" className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="group relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl border sm:aspect-[16/10] lg:mt-14 lg:aspect-[16/8]">
            <ProjectVisual kind={project.visual} />
          </div>
          <p className="label-mono mt-3 text-subtle-foreground">Illustrative preview</p>

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <AtAGlance project={project} />
            <div className="border-b">
              <Block n="01" label="Problem">
                <Value value={project.caseStudy.problem} />
              </Block>
              <Block n="02" label="Approach">
                <Value value={project.caseStudy.approach} />
              </Block>
              <Block n="03" label="My role">
                <Value value={project.caseStudy.role} />
              </Block>
              <Block n="04" label="Process">
                {project.caseStudy.process ? (
                  <ol className="space-y-3">
                    {project.caseStudy.process.map((step, i) => (
                      <li key={step} className="flex gap-4">
                        <span className="label-mono pt-1.5 text-primary">{String(i + 1).padStart(2, "0")}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ComingSoon />
                )}
              </Block>
              <Block n="05" label="Outcomes">
                <Value value={project.caseStudy.outcomes} />
              </Block>
            </div>
          </div>

          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mt-16 flex items-center justify-between gap-6 rounded-3xl border bg-card p-6 transition-colors hover:border-border-strong md:p-8"
          >
            <span>
              <span className="label-mono text-muted-foreground">Next project</span>
              <span className="mt-2 block text-[24px] tracking-tight text-foreground md:text-[32px]">
                {next.title} — {next.tagline}
              </span>
            </span>
            <span
              aria-hidden
              className="grid size-12 shrink-0 place-items-center rounded-full border border-border-strong transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </article>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}

function AtAGlance({ project }: { project: Project }) {
  return (
    <aside className="reveal self-start rounded-2xl border bg-surface p-6 lg:sticky lg:top-32">
      <p className="label-mono text-primary">At a glance</p>
      <dl className="mt-5 space-y-5 text-[14px]">
        <div>
          <dt className="label-mono text-muted-foreground">Context</dt>
          <dd className="mt-1 text-foreground">{project.context}</dd>
        </div>
        <div>
          <dt className="label-mono text-muted-foreground">Stack & tools</dt>
          <dd className="mt-2">
            {project.caseStudy.stack ? (
              <ul className="flex flex-wrap gap-2">
                {project.caseStudy.stack.map((s) => (
                  <li key={s}>
                    <Tag className="bg-card">{s}</Tag>
                  </li>
                ))}
              </ul>
            ) : (
              <ComingSoon />
            )}
          </dd>
        </div>
        <div>
          <dt className="label-mono text-muted-foreground">Links</dt>
          <dd className="mt-1">
            <ul>
              {project.links.map((l) => {
                const href = linkHref(l);
                return (
                  <li key={l.label} className="border-b last:border-b-0">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2.5 text-foreground hover:text-primary"
                      >
                        {l.label}
                        <ArrowUpRight aria-hidden className="size-4" />
                      </a>
                    ) : (
                      <span aria-disabled="true" className="flex items-center justify-between py-2.5 text-muted-foreground">
                        {l.label}
                        <span className="label-mono text-subtle-foreground">Coming soon</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </dd>
        </div>
      </dl>
    </aside>
  );
}
