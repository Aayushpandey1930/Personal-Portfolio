import { ArrowUpRight } from "lucide-react";

import { contact, profile } from "@/content/profile";
import { linkHref, mailtoHref } from "@/lib/contact";

import { SectionLabel } from "./primitives";

export function Contact() {
  const mailto = mailtoHref(contact.email);
  const hasPlaceholders = !mailto || contact.links.some((l) => !linkHref(l));

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 bg-background pb-14 pt-6 md:scroll-mt-20 md:pb-20 md:pt-8"
    >
      <div className="container-page">
        <SectionLabel number="05">Get in touch</SectionLabel>

        <div className="reveal mt-6 grid gap-10 rounded-3xl border bg-card p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:p-12">
          <div>
            <h2
              id="contact-title"
              className="display-sans text-[44px] text-foreground sm:text-[56px] lg:text-[68px]"
            >
              Let’s talk
              <br />
              about a project.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground lg:mt-8 lg:text-[18px]">
              Have an engineering role, a design challenge, or an idea worth exploring? I’d love to
              build something thoughtful together.
            </p>

            {mailto ? (
              <a
                href={mailto}
                className="group mt-8 inline-flex items-center gap-6 border-b border-primary pb-2 text-[22px] tracking-tight text-primary lg:text-[28px]"
              >
                {contact.email}
                <ArrowUpRight
                  aria-hidden
                  className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <p className="mt-8 inline-flex flex-wrap items-center gap-3 border-b border-dashed border-border-strong pb-2">
                <span className="text-[20px] tracking-tight text-muted-foreground lg:text-[24px]">
                  Contact details to be added
                </span>
                <span className="label-mono rounded-full border border-dashed border-border-strong px-2 py-0.5 text-subtle-foreground">
                  Placeholder
                </span>
              </p>
            )}
          </div>

          <div>
            <p className="label-mono flex items-center gap-2 text-primary">
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              Let’s make a connection
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              {profile.availability}
              <br />
              Based in {profile.location}.
            </p>

            <ul className="mt-6">
              {contact.links.map((link) => {
                const href = linkHref(link);
                return (
                  <li key={link.label} className="border-b">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-3.5 text-[15px] text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="flex cursor-default items-center justify-between py-3.5 text-[15px] text-muted-foreground"
                      >
                        {link.label}
                        <span className="label-mono text-subtle-foreground">Link to be added</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            {hasPlaceholders && (
              <p className="label-mono mt-6 text-subtle-foreground">
                Email and profile links will be added soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
