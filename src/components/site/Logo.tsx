import { profile } from "@/content/profile";

export function LogoMark({ className = "size-9 md:size-[38px]" }: { className?: string }) {
  return <span aria-hidden className={`${className} block shrink-0 rounded-full bg-primary`} />;
}

export function LogoContent() {
  return (
    <span className="flex items-center gap-3">
      <img
        src="/profile.png.png"
        alt={profile.name}
        className="size-9 shrink-0 rounded-full object-cover object-top md:size-[38px]"
      />
      <span className="text-[16px] font-medium tracking-tight text-foreground md:text-[17px]">
        {profile.name}
      </span>
    </span>
  );
}
