/**
 * Projects — edit case-study content here.
 * Any field left as `null` renders an honest "Details coming soon" placeholder.
 * Never add metrics, users, awards, or outcomes that aren't verified.
 */

export type ProjectVisual = "bigquery" | "touraddict" | "community" | "sooch";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  context: string;
  summary: string;
  tags: string[];
  visual: ProjectVisual;
  caseStudy: {
    problem: string | null;
    approach: string | null;
    role: string | null;
    process: string[] | null;
    stack: string[] | null;
    outcomes: string | null;
  };
  links: { label: string; url: string | null }[];
};

export const projects: Project[] = [
  {
    slug: "bigquery-release-notes",
    title: "BigQuery Release Notes",
    tagline: "Every update, one calm feed.",
    category: "Web app · Python & Flask",
    context: "5-Day AI Agents Intensive",
    summary:
      "A web app built during the 5-Day AI Agents Intensive course that turns the BigQuery release-notes feed into a fast, searchable reading experience.",
    tags: ["Python", "Flask", "JavaScript", "RSS", "Caching"],
    visual: "bigquery",
    caseStudy: {
      problem:
        "BigQuery release notes are published as a long feed. This project explores a quicker, calmer way to browse and search through them.",
      approach:
        "A Python Flask backend fetches and parses the RSS feed and caches the results, while a lightweight vanilla HTML, CSS and JavaScript frontend handles live search and a dark / light reading mode.",
      role: "Built during the 5-Day AI Agents Intensive course — backend, frontend and interface.",
      process: [
        "Parse the official release-notes RSS feed on the server",
        "Cache parsed results to avoid refetching on every request",
        "Add live, as-you-type search across updates",
        "Design a readable layout with a dark / light mode toggle",
      ],
      stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "RSS parsing"],
      outcomes: null,
    },
    links: [
      { label: "Source code", url: null },
      { label: "Live demo", url: null },
    ],
  },
  {
    slug: "touraddict",
    title: "TourAddict",
    tagline: "Find the hidden gems.",
    category: "Product concept · Travel & hospitality",
    context: "Startup concept",
    summary:
      "A sustainable and affordable travel concept focused on local hidden gems, trust, and stress-free experiences.",
    tags: ["Startup concept", "Sustainable travel", "Product thinking", "Hospitality"],
    visual: "touraddict",
    caseStudy: {
      problem:
        "Planning an affordable, responsible trip often means sifting through crowded listings and uncertain reviews and missing the local places that make a journey memorable.",
      approach:
        "TourAddict is shaped around three ideas: surfacing local hidden gems, building trust, and keeping the experience stress-free and affordable.",
      role: null,
      process: null,
      stack: null,
      outcomes: null,
    },
    links: [{ label: "Concept deck", url: null }],
  },
  {
    slug: "community-hero",
    title: "Community Hero",
    tagline: "Small fixes, close to home.",
    category: "Civic tech · Hyperlocal",
    context: "Hackathon project",
    summary:
      "A hackathon project exploring hyperlocal problem-solving helping neighbourhoods surface everyday issues and work on them together.",
    tags: ["Hackathon", "Hyperlocal", "Problem solving", "Community"],
    visual: "community",
    caseStudy: {
      problem:
        "Everyday neighbourhood problems are easy to notice and hard to act on. Community Hero explores how people nearby could raise and resolve them together.",
      approach: null,
      role: null,
      process: null,
      stack: null,
      outcomes: null,
    },
    links: [
      { label: "Source code", url: null },
      { label: "Hackathon submission", url: null },
    ],
  },
  {
    slug: "sooch",
    title: "Sooch",
    tagline: "Research first. Then the story.",
    category: "Editorial · Visual storytelling",
    context: "Instagram project",
    summary:
      "An investigative and current-affairs editorial project on Instagram covering Indian news built on careful research, verification, and visual storytelling.",
    tags: ["Research", "Fact verification", "Graphic design", "Storytelling"],
    visual: "sooch",
    caseStudy: {
      problem:
        "Current affairs move fast and misinformation moves faster. Sooch aims to slow down, check the facts, and explain stories clearly.",
      approach:
        "Each post starts with research and source verification, then becomes a visual story designed to be read and understood on Instagram.",
      role: null,
      process: ["Research the story", "Verify sources and claims", "Design the visual narrative"],
      stack: null,
      outcomes: null,
    },
    links: [{ label: "Instagram", url: null }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length] ?? projects[0]!;
}
