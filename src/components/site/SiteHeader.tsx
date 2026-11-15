import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { navItems } from "@/content/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { LogoContent } from "./Logo";

const trackedIds = [...navItems.map((n) => n.id), "creative", "contact"] as const;

/** Anchor that scrolls in-page on the home route and routes to /#id elsewhere. */
function SectionLink({
  id,
  home,
  className,
  children,
  current,
}: {
  id: string;
  home: boolean;
  className?: string;
  children: React.ReactNode;
  current?: boolean;
}) {
  if (home) {
    return (
      <a href={`#${id}`} className={className} aria-current={current ? "location" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link to="/" hash={id} className={className}>
      {children}
    </Link>
  );
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  const active = useActiveSection(trackedIds, home);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    cn(
      "relative whitespace-nowrap py-2 text-[15px] transition-colors md:text-[16px]",
      home && active === id
        ? "font-medium text-primary"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page">
        <div className="flex h-[76px] items-center justify-between gap-6 md:h-24">
          {home ? (
            <a href="#introduction" aria-label="Aayush Pandey — back to introduction" className="rounded-full">
              <LogoContent />
            </a>
          ) : (
            <Link to="/" aria-label="Aayush Pandey — home" className="rounded-full">
              <LogoContent />
            </Link>
          )}

          <div className="flex items-center gap-8">
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <SectionLink
                      id={item.id}
                      home={home}
                      className={linkClass(item.id)}
                      current={home && active === item.id}
                    >
                      {item.label}
                    </SectionLink>
                  </li>
                ))}
              </ul>
            </nav>
            <SectionLink
              id="contact"
              home={home}
              current={home && active === "contact"}
              className={cn(
                buttonVariants({ variant: "pillOutline", size: "pillSm" }),
                "font-medium",
                home && active === "contact" && "border-primary text-primary",
              )}
            >
              Let’s talk <ArrowUpRight aria-hidden />
            </SectionLink>
          </div>
        </div>

        {/* Mobile: section tabs row, matching the mobile reference frame */}
        <nav aria-label="Sections" className="-mx-6 md:hidden">
          <ul className="no-scrollbar flex items-center gap-7 overflow-x-auto px-6 pb-3">
            {navItems.map((item) => (
              <li key={item.id} className="shrink-0">
                <SectionLink
                  id={item.id}
                  home={home}
                  className={linkClass(item.id)}
                  current={home && active === item.id}
                >
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
