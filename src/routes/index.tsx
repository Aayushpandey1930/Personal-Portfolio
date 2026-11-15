import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { Creative } from "@/components/site/Creative";
import { Hero } from "@/components/site/Hero";
import { Learnings } from "@/components/site/Learnings";
import { Projects } from "@/components/site/Projects";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackToTop, SiteFooter } from "@/components/site/SiteFooter";
import { Skills } from "@/components/site/Skills";
import { useReveal } from "@/hooks/use-reveal";

const title = "Aayush Pandey — Developer, designer & problem solver";
const description =
  "Hi, I’m Aayush Pandey — a CSE student at PSIT Kanpur connecting thoughtful design, engineering, and problem-solving to create useful digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <SiteHeader home />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Learnings />
        <Creative />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
