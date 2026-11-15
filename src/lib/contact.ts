import type { ContactLink } from "@/content/profile";

/** Basic shape check — the address itself must still be verified by the owner. */
export function isEmail(value: string | null | undefined): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Returns a mailto href only for a real, supplied email; never for placeholders. */
export function mailtoHref(email: string | null | undefined): string | null {
  if (!isEmail(email)) return null;
  if (/\.example$/i.test(email.trim())) return null;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email.trim())}`;
}

/** Returns an external href only for supplied http(s) URLs; otherwise null (placeholder). */
export function linkHref(link: Pick<ContactLink, "url">): string | null {
  const url = link.url?.trim();
  if (!url) return null;
  return /^https?:\/\//i.test(url) ? url : null;
}
