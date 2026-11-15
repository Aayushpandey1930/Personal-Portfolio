import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  const target = document.getElementById("top");
  target?.focus({ preventScroll: true });
}

export function SiteFooter() {
  return (
    <footer className="container-page">
      <div className="grid gap-3 border-t py-8 text-[12px] text-muted-foreground md:grid-cols-3 md:items-center">
        <p>© 2026 {profile.name} · Design &amp; development</p>
        <p className="md:text-center">A little curiosity goes a long way.</p>
        <p className="md:text-right">
          <button
            type="button"
            onClick={scrollToTop}
            className="label-mono inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
          >
            Back to top <ArrowUp aria-hidden className="size-3" />
          </button>
        </p>
      </div>
    </footer>
  );
}

/** Floating back-to-top control that appears after scrolling down. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140;
      setVisible(window.scrollY > 900 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border bg-card text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary hover:text-primary md:bottom-8 md:right-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp aria-hidden className="size-4" />
    </button>
  );
}
