import { describe, expect, it } from "vitest";

import { contact } from "@/content/profile";
import { linkHref, mailtoHref } from "@/lib/contact";

describe("contact details", () => {
  it("does not create a mailto link while no verified email is supplied", () => {
    expect(mailtoHref(null)).toBeNull();
  });

  it("never links the template example address", () => {
    expect(mailtoHref("hello@aayushpandey.example")).toBeNull();
  });

  it("creates a mailto link once a real email is supplied", () => {
    expect(mailtoHref("someone@gmail.com")).toBe("mailto:someone@gmail.com");
  });

  it("keeps profile links non-clickable until a real URL is supplied", () => {
    expect(linkHref({ url: null })).toBeNull();
    expect(linkHref({ url: "https://github.com/someone" })).toBe("https://github.com/someone");
  });

  it("ships LinkedIn, GitHub and Instagram with no invented URLs or email", () => {
    expect(contact.links.map((l) => l.label)).toEqual(["LinkedIn", "GitHub", "Instagram"]);
    expect(contact.links.every((l) => l.url === null)).toBe(true);
    expect(contact.email).toBeNull();
  });
});
